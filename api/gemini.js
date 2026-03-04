import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with the environment variable (which Vercel injects securely)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export default async function handler(req, res) {
  // CORS configuration for local development and specific origins if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { history, message, systemInstruction } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    if (!process.env.GEMINI_API_KEY) {
      console.error('SERVER ERROR: GEMINI_API_KEY is not defined in the environment variables.');
      return res.status(500).json({ error: 'Server Configuration Error: API Key missing' });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemInstruction,
    });

    const chatSession = model.startChat({
      history: history || [],
    });

    const result = await chatSession.sendMessage(message);
    const responseText = result.response.text();

    return res.status(200).json({ reply: responseText });

  } catch (error) {
    console.error('Error in Gemini API proxy:', error);
    return res.status(500).json({ error: 'Internal Server Error fetching from Gemini' });
  }
}
