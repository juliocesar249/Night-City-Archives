
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
  snippet: z.string().describe("A very short, intriguing, and engaging lore snippet (1-2 sentences maximum, ideally one) extracted or synthesized from the provided Night City context. It should sound like a 'data shard,' a piece of trivia, a rumour, or an interesting fact an insider might know. Focus on being concise and captivating. Avoid introductory phrases like 'Did you know...' or 'An interesting fact is...'. Just state the lore directly."),
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
- Intriguing and engaging.
- Sound like a piece of trivia, a rumour, or an interesting fact an insider might know.
- Directly stated, without any conversational fluff or introductory phrases (e.g., no "Did you know...", "Here's a fact:", etc.).
- Varied. Try to pick different types of information if called multiple times with the same context.
- Focused on specific details rather than general summaries.

Context:
{{{context}}}

Generate one data shard based on the context.
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
