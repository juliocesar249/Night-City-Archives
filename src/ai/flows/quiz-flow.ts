'use server';
/**
 * @fileOverview A Genkit flow to generate a 6-question quiz about Night City.
 *
 * - generateNightCityQuiz - A function that takes context text and returns a quiz.
 * - QuizInputSchema - The input type for the flow.
 * - QuizOutputSchema - The return type for the flow.
 * - QuizItemSchema - Schema for a single quiz question and answer.
 * - QuizItem - Type for a single quiz question and answer.
 * - QuizOutput - Type for the quiz output.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizInputSchema = z.object({
  context: z.string().describe("A large body of text containing lore and information about Night City, its districts, gangs, corporations, and history."),
});
export type QuizInput = z.infer<typeof QuizInputSchema>;

const QuizItemSchema = z.object({
  question: z.string().describe("Uma pergunta de quiz desafiadora e específica em Português (Brasil) sobre a lore de Night City, baseada no contexto fornecido. Evite perguntas muito genéricas."),
  answer: z.string().describe("A resposta correta e concisa para a pergunta, em Português (Brasil)."),
});
export type QuizItem = z.infer<typeof QuizItemSchema>;

const QuizOutputSchema = z.object({
  quizTitle: z.string().describe("Um título criativo e temático em Português (Brasil) para este quiz sobre Night City, algo como 'Teste seu Conhecimento Choomba!' ou 'Você Sobreviveria em Night City?'. "),
  questions: z.array(QuizItemSchema).length(6).describe("Uma lista de exatamente 6 perguntas e respostas sobre Night City."),
});
export type QuizOutput = z.infer<typeof QuizOutputSchema>;

export async function generateNightCityQuiz(input: QuizInput): Promise<QuizOutput> {
  const result = await nightCityQuizFlow(input);
  return result;
}

const quizPrompt = ai.definePrompt({
  name: 'nightCityQuizPrompt',
  input: {schema: QuizInputSchema},
  output: {schema: QuizOutputSchema},
  prompt: `Você é um Mestre de Quizzes especializado no universo de Cyberpunk e Night City.
Sua tarefa é criar um quiz desafiador e interessante com EXATAMENTE 6 perguntas e respostas, totalmente em Português (Brasil), baseado no contexto fornecido sobre Night City.
As perguntas devem ser específicas e testar o conhecimento sobre detalhes da lore (distritos, gangues, corporações, história, personagens, etc.).
As respostas devem ser concisas.
Gere também um título criativo para o quiz.

Contexto da Lore de Night City:
{{{context}}}

Formato da saída esperada (JSON Schema Zod Object):
{
  quizTitle: "Título do Quiz Aqui",
  questions: [
    { question: "Pergunta 1...", answer: "Resposta 1..." },
    { question: "Pergunta 2...", answer: "Resposta 2..." },
    // ... até 6 perguntas
  ]
}

Por favor, gere o quiz.
`,
});

const nightCityQuizFlow = ai.defineFlow(
  {
    name: 'nightCityQuizFlow',
    inputSchema: QuizInputSchema,
    outputSchema: QuizOutputSchema,
  },
  async (input) => {
    const {output} = await quizPrompt(input);
    if (!output || output.questions.length !== 6) {
        throw new Error("Falha ao gerar o quiz ou o número de perguntas está incorreto.");
    }
    return output;
  }
);
