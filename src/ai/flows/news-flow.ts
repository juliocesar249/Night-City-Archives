'use server';
/**
 * @fileOverview A Genkit flow to generate a random news report about Night City.
 *
 * - generateNightCityNews - A function that takes context text and returns a news headline and story.
 * - NewsInputSchema - The input type for the flow.
 * - NewsOutputSchema - The return type for the flow.
 * - NewsOutput - Type for the news output.
 */

import {ai} from '@/ai/genkit';
import {z}from 'genkit';

const NewsInputSchema = z.object({
  context: z.string().describe("A large body of text containing lore and information about Night City, its districts, gangs, corporations, and history, to inspire news events."),
});
export type NewsInput = z.infer<typeof NewsInputSchema>;

const NewsOutputSchema = z.object({
  headline: z.string().describe("Uma manchete de notícia curta, impactante e no estilo de Night City (ex: sensacionalista, direta ao ponto) em Português (Brasil). Deve parecer algo de um feed de notícias de um datapad."),
  story: z.string().describe("Uma notícia breve (1-3 frases) em Português (Brasil), detalhando um evento fictício em Night City com alguns detalhes específicos (mas inventados) como nomes, locais ou gangues, inspirada no contexto geral da lore fornecida. Tente incluir nomes de personagens ou corporações aleatórios e situações críveis dentro do universo de Night City."),
});
export type NewsOutput = z.infer<typeof NewsOutputSchema>;

export async function generateNightCityNews(input: NewsInput): Promise<NewsOutput> {
  const result = await nightCityNewsFlow(input);
  return result;
}

const newsPrompt = ai.definePrompt({
  name: 'nightCityNewsPrompt',
  input: {schema: NewsInputSchema},
  output: {schema: NewsOutputSchema},
  prompt: `Você é um jornalista investigativo trabalhando para a N54 News em Night City.
Sua tarefa é gerar uma notícia curta e impactante (manchete + 1-3 frases de corpo da notícia) em Português (Brasil), inspirada no contexto de lore fornecido sobre Night City.
A notícia deve ser fictícia, mas crível dentro do universo Cyberpunk. Use nomes aleatórios para pessoas, corporações menores ou locais específicos se necessário, e tente amarrar com elementos da lore (gangues, distritos, corporações maiores).
Seja criativo e capture o tom sombrio e caótico de Night City.

Contexto da Lore de Night City (para inspiração):
{{{context}}}

Formato da saída esperada (JSON Schema Zod Object):
{
  headline: "Manchete da Notícia Aqui",
  story: "Corpo da notícia aqui..."
}

Por favor, gere a notícia.
`,
});

const nightCityNewsFlow = ai.defineFlow(
  {
    name: 'nightCityNewsFlow',
    inputSchema: NewsInputSchema,
    outputSchema: NewsOutputSchema,
  },
  async (input) => {
    const {output} = await newsPrompt(input);
    if (!output) {
        throw new Error("Falha ao gerar a notícia a partir do modelo.");
    }
    return output;
  }
);
