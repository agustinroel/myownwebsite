import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleGenerativeAI, ChatSession, GenerativeModel } from '@google/generative-ai';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel | null = null;
  private chatSession: ChatSession | null = null;

  public messages = signal<ChatMessage[]>([]);
  public isTyping = signal<boolean>(false);
  public isInitialized = signal<boolean>(false);

  constructor(private http: HttpClient) {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.initializeChatSession();
  }

  private initializeChatSession() {
    this.http.get('/assets/data/PROFESSIONAL_CONTEXT.json').subscribe({
      next: (contextData: any) => {
        const systemInstruction = `
        You are an AI assistant representing Agustín Roel on his personal portfolio website. 
        Your goal is to answer questions from recruiters, clients, and visitors using the EXACT information provided in the following professional context JSON.
        You must act as a knowledgeable, polite, and helpful clone. Be concise, direct, and professional.
        If asked something outside of this context, politely explain that you are an AI assistant limited to providing information about Agustín's professional profile, and suggest they contact him directly for other inquiries.
        
        Context Data (JSON format):
        ${JSON.stringify(contextData)}
        `;

        try {
          this.model = this.genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: systemInstruction,
          });

          this.chatSession = this.model.startChat({
            history: [],
          });

          // Add initial greeting message
          this.messages.set([
            {
              role: 'model',
              text: '¡Hola! Soy el asistente virtual de Agustín. ¿En qué te puedo ayudar hoy? Puedo responder preguntas sobre su experiencia, stack tecnológico o proyectos.',
            },
          ]);
        } catch (error) {
          console.error('Gemini init error:', error);
          this.messages.set([
            {
              role: 'model',
              text: 'Hubo un error configurando la conexión con la inteligencia artificial. Revisa la consola.',
            },
          ]);
        } finally {
          this.isInitialized.set(true);
        }
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

  public async sendMessage(userMessage: string) {
    if (!this.chatSession) return;

    // Add user message to UI
    this.messages.update((msgs) => [...msgs, { role: 'user', text: userMessage }]);
    this.isTyping.set(true);

    try {
      const result = await this.chatSession.sendMessage(userMessage);
      const responseText = result.response.text();

      // Add model response to UI
      this.messages.update((msgs) => [...msgs, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error('Error contacting Gemini:', error);
      this.messages.update((msgs) => [
        ...msgs,
        {
          role: 'model',
          text: 'Ups, parece que hubo un error al procesar tu mensaje. ¡Tal vez se superó la cuota de la API! Revisa la consola.',
        },
      ]);
    } finally {
      this.isTyping.set(false);
    }
  }
}
