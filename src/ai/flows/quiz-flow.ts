
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
  correctAnswer: z.string().describe("A resposta correta e concisa para a pergunta, em Português (Brasil)."),
  alternatives: z.array(z.string()).length(3).describe("Uma lista de EXATAMENTE 3 alternativas incorretas para a pergunta, em Português (Brasil). Estas alternativas devem ser plausíveis, distintas da resposta correta e de outras alternativas."),
});
export type QuizItem = z.infer<typeof QuizItemSchema>;

const QuizOutputSchema = z.object({
  quizTitle: z.string().describe("Um título criativo e temático em Português (Brasil) para este quiz sobre Night City, algo como 'Teste seu Conhecimento Choomba!' ou 'Você Sobreviveria em Night City?'. "),
  questions: z.array(QuizItemSchema).length(6).describe("Uma lista de exatamente 6 itens de quiz, cada um contendo uma pergunta, uma resposta correta e três alternativas incorretas."),
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
Sua tarefa é criar um quiz desafiador e interessante com EXATAMENTE 6 perguntas, totalmente em Português (Brasil), baseado no contexto fornecido sobre Night City.
Cada pergunta deve ter:
1. O texto da pergunta.
2. Uma (1) resposta correta (correctAnswer).
3. Três (3) alternativas incorretas (alternatives). As alternativas devem ser plausíveis mas erradas, e distintas da resposta correta e entre si.
As perguntas devem ser específicas e testar o conhecimento sobre detalhes da lore (distritos, gangues, corporações, história, personagens, etc.).
As respostas (correta e alternativas) devem ser concisas.
Gere também um título criativo para o quiz.

Contexto da Lore de Night City:
{{{context}}}

Formato da saída esperada (JSON Schema Zod Object):
{
  quizTitle: "Título do Quiz Aqui",
  questions: [
    { question: "Pergunta 1...", correctAnswer: "Resposta Correta 1", alternatives: ["Alternativa Incorreta A", "Alternativa Incorreta B", "Alternativa Incorreta C"] },
    { question: "Pergunta 2...", correctAnswer: "Resposta Correta 2", alternatives: ["Alternativa Incorreta D", "Alternativa Incorreta E", "Alternativa Incorreta F"] },
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
    // Validate that each question has 3 alternatives
    for (const question of output.questions) {
      if (!question.alternatives || question.alternatives.length !== 3) {
        throw new Error(`A pergunta "${question.question}" não tem o número correto de alternativas.`);
      }
    }
    return output;
  }
);

