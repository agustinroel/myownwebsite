import { Injectable, signal, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GeminiProxyResponse {
  reply?: string;
  error?: string;
}

// Convert our simple UI role structure to Gemini API history structure
export interface GeminiApiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  public messages = signal<ChatMessage[]>([]);
  public isTyping = signal<boolean>(false);
  public isInitialized = signal<boolean>(false);

  private systemInstruction: string = '';
  private apiUrl = '/api/gemini';

  constructor(private http: HttpClient) {
    this.initializeChatSession();
  }

  private initializeChatSession() {
    this.http.get('/assets/data/PROFESSIONAL_CONTEXT.json').subscribe({
      next: (contextData: any) => {
        this.systemInstruction = `
        You are an AI assistant representing Agustín Roel on his personal portfolio website. 
        Your goal is to answer questions from recruiters, clients, and visitors using the EXACT information provided in the following professional context JSON.
        You must act as a knowledgeable, polite, and helpful clone. Be concise, direct, and professional.
        If asked something outside of this context, politely explain that you are an AI assistant limited to providing information about Agustín's professional profile, and suggest they contact him directly for other inquiries.
        
        Context Data (JSON format):
        ${JSON.stringify(contextData)}
        `;

        this.messages.set([
          {
            role: 'model',
            text: '¡Hola! Soy el asistente virtual de Agustín. ¿En qué te puedo ayudar hoy? Puedo responder preguntas sobre su experiencia, stack tecnológico o proyectos.',
          },
        ]);

        this.isInitialized.set(true);
      },
      error: (err) => {
        console.error('Failed to load professional context for Gemini', err);
        this.messages.set([
          {
            role: 'model',
            text: 'No se pudo cargar el archivo PROFESIONAL_CONTEXT.json. Revisa que exista en public/assets/data/.',
          },
        ]);
        this.isInitialized.set(true);
      },
    });
  }

  // Helper to build the history in the format expected by the API
  private buildHistory(): { role: 'user' | 'model'; parts: { text: string }[] }[] {
    return this.messages().map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));
  }

  public async sendMessage(userMessage: string) {
    // Add user message to UI immediately
    this.messages.update((msgs) => [...msgs, { role: 'user', text: userMessage }]);
    this.isTyping.set(true);

    const history = this.buildHistory();
    // Exclude the current user message from the history array before sending
    history.pop();

    // Create a placeholder for the bot's incoming streaming message
    this.messages.update((msgs) => [...msgs, { role: 'model', text: '' }]);
    const botMsgIndex = this.messages().length - 1;

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: history,
          systemInstruction: this.systemInstruction,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      this.isTyping.set(false); // Done visually typing, start streaming the text in

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');

      if (!reader) throw new Error('No readable stream available');

      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunkString = decoder.decode(value, { stream: true });
          const lines = chunkString.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data.trim() === '[DONE]') {
                done = true;
                break;
              }
              try {
                const parsed = JSON.parse(data);
                if (parsed.error) throw new Error(parsed.error);
                if (parsed.text) {
                  this.messages.update((msgs) => {
                    const newMsgs = [...msgs];
                    newMsgs[botMsgIndex].text += parsed.text;
                    return newMsgs;
                  });
                }
              } catch (e) {
                // Ignore silent JSON parse errors for incomplete chunks
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error contacting Gemini Edge Proxy:', error);
      this.messages.update((msgs) => {
        const newMsgs = [...msgs];
        newMsgs[botMsgIndex].text =
          'Ups, parece que hubo un error de conexión con el servidor. ¿Configuraste GEMINI_API_KEY en Vercel? o excediste el tiempo de espera.';
        return newMsgs;
      });
    } finally {
      this.isTyping.set(false);
    }
  }
}
