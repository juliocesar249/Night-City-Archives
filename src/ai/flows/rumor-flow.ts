
'use server';
/**
 * @fileOverview A Genkit flow to generate a random rumor or whisper about Night City.
 *
 * - generateNightCityRumor - A function that takes context text and returns a rumor.
 * - RumorInputSchema - The input type for the flow.
 * - RumorOutputSchema - The return type for the flow.
 * - RumorOutput - Type for the rumor output.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RumorInputSchema = z.object({
  context: z.string().describe("A large body of text containing lore and information about Night City, its districts, gangs, corporations, and history, to inspire rumors."),
});
export type RumorInput = z.infer<typeof RumorInputSchema>;

const RumorOutputSchema = z.object({
  rumor: z.string().describe("Um boato curto e intrigante (1-2 frases) em Português (Brasil) sobre Night City. Deve soar como uma fofoca de um info-broker, um segredo sussurrado nas ruas, ou uma observação misteriosa sobre atividades de gangues, corporações ou eventos estranhos. Deve ser crível dentro do universo Cyberpunk, mas pode ser especulativo ou enigmático. Evite saudações ou introduções, apenas o boato."),
});
export type RumorOutput = z.infer<typeof RumorOutputSchema>;

export async function generateNightCityRumorFlow(input: RumorInput): Promise<RumorOutput> {
  const result = await nightCityRumorFlow(input);
  return result;
}

const rumorPrompt = ai.definePrompt({
  name: 'nightCityRumorPrompt',
  input: {schema: RumorInputSchema},
  output: {schema: RumorOutputSchema},
  prompt: `Você é um Info-Broker veterano dos becos mais sombrios de Night City.
Sua especialidade é captar sussurros, fofocas e boatos que circulam pela cidade.
Baseado no contexto de lore fornecido sobre Night City, gere UM boato curto, intrigante e enigmático (1-2 frases) em Português (Brasil).
O boato deve ser fictício, mas plausível dentro do universo Cyberpunk.
Pode ser sobre atividades de gangues, segredos corporativos, personagens misteriosos, eventos estranhos ou tecnologia obscura.
Seja direto, como se estivesse compartilhando uma informação valiosa em voz baixa.

Contexto da Lore de Night City (para inspiração):
{{{context}}}

Formato da saída esperada (JSON Schema Zod Object):
{
  rumor: "Boato ou sussurro aqui..."
}

Por favor, gere o boato.
`,
});

const nightCityRumorFlow = ai.defineFlow(
  {
    name: 'nightCityRumorFlow',
    inputSchema: RumorInputSchema,
    outputSchema: RumorOutputSchema,
  },
  async (input) => {
    const {output} = await rumorPrompt(input);
    if (!output) {
        throw new Error("Falha ao gerar o boato a partir do modelo. A estática da rede deve estar forte hoje.");
    }
    return output;
  }
);

