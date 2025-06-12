
'use server';
/**
 * @fileOverview A Genkit flow to generate a random lore snippet about Night City.
 *
 * - generateLoreSnippet - A function that takes context text and returns a short lore snippet.
 * - LoreSnippetInputSchema - The input type for the flow.
 * - LoreSnippetOutputSchema - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LoreSnippetInputSchema = z.object({
  context: z.string().describe("A large body of text containing lore and information about Night City, its districts, gangs, corporations, and history."),
});
export type LoreSnippetInput = z.infer<typeof LoreSnippetInputSchema>;

const LoreSnippetOutputSchema = z.object({
  snippet: z.string().describe("Um trecho de lore muito curto, intrigante e envolvente (máximo de 1-2 frases, idealmente uma) em Português (Brasil), extraído ou sintetizado do contexto fornecido sobre Night City. Deve soar como um 'data shard', uma curiosidade, um boato ou um fato interessante que um insider saberia. Foque em ser conciso e cativante. Evite frases introdutórias como 'Você sabia que...' ou 'Um fato interessante é...'. Apenas declare o lore diretamente."),
});
export type LoreSnippetOutput = z.infer<typeof LoreSnippetOutputSchema>;

// Exported wrapper function
export async function generateLoreSnippet(input: LoreSnippetInput): Promise<string> {
  const result = await loreSnippetFlow(input);
  return result.snippet;
}

const lorePrompt = ai.definePrompt({
  name: 'loreSnippetPrompt',
  input: {schema: LoreSnippetInputSchema},
  output: {schema: LoreSnippetOutputSchema},
  prompt: `You are a Night City archivist AI. Your task is to extract or synthesize one extremely concise (1-2 sentences maximum, ideally one sentence) and interesting piece of lore, a "data shard," from the provided text about Night City.

This snippet should be:
- In Brazilian Portuguese (Português do Brasil).
- Intriguing and engaging.
- Sound like a piece of trivia, a rumour, or an interesting fact an insider might know.
- Directly stated, without any conversational fluff or introductory phrases (e.g., no "Você sabia que...", "Aqui está um fato:", etc.).
- Varied. Try to pick different types of information if called multiple times with the same context.
- Focused on specific details rather than general summaries.

Context:
{{{context}}}

Generate one data shard based on the context. Ensure the output is in Brazilian Portuguese.
`,
});

const loreSnippetFlow = ai.defineFlow(
  {
    name: 'loreSnippetFlow',
    inputSchema: LoreSnippetInputSchema,
    outputSchema: LoreSnippetOutputSchema,
  },
  async (input) => {
    const {output} = await lorePrompt(input);
    if (!output) {
        throw new Error("Failed to generate lore snippet from the model.");
    }
    return output;
  }
);
