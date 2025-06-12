
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import 'dotenv/config'; // Ensure .env variables are loaded

// Explicitly load the API key from environment variables
const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey && process.env.NODE_ENV !== 'production') {
  console.warn(
    `\n[Night City Archives - Genkit Init] GOOGLE_API_KEY not found in environment variables. 
    AI features will likely fail. 
    Please ensure GOOGLE_API_KEY is correctly set in your .env.local file and that you have restarted your development server.\n`
  );
}

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: apiKey }), // Explicitly pass the API key
  ],
  model: 'googleai/gemini-2.0-flash'
});
