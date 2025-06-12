
'use server';

import { generateLoreSnippet } from '@/ai/flows/lore-snippet-flow';
import { generateNightCityQuiz, type QuizOutput } from '@/ai/flows/quiz-flow';
import { generateNightCityNews, type NewsOutput } from '@/ai/flows/news-flow';
import { generateNightCityRumorFlow, type RumorOutput } from '@/ai/flows/rumor-flow';
import fs from 'fs/promises';
import path from 'path';

async function getNightCityLoreContext(): Promise<string> {
  const filePath = path.join(process.cwd(), 'night-city.md');
  return fs.readFile(filePath, 'utf-8');
}

export async function getLoreDataShard(): Promise<string> {
  try {
    const nightCityLore = await getNightCityLoreContext();
    const snippet = await generateLoreSnippet({ context: nightCityLore });
    return snippet;
  } catch (error) {
    console.error("Error in getLoreDataShard:", error);
    if (error instanceof Error && error.message.includes('CountLimiter')) {
      throw new Error("Limite de taxa da API atingido. Por favor, tente novamente mais tarde.");
    }
    if (error instanceof Error) {
      throw new Error(error.message || "Falha ao interceptar Data Shard. Os arquivos podem estar corrompidos ou a conexão com a IA está instável.");
    }
    throw new Error("Um erro desconhecido ocorreu ao interceptar o Data Shard.");
  }
}

export async function getNightCityQuiz(): Promise<QuizOutput> {
  try {
    const nightCityLore = await getNightCityLoreContext();
    const quiz = await generateNightCityQuiz({ context: nightCityLore });
    return quiz;
  } catch (error) {
    console.error("Error in getNightCityQuiz:", error);
     if (error instanceof Error && error.message.includes('CountLimiter')) {
      throw new Error("Limite de taxa da API atingido. Por favor, tente novamente mais tarde.");
    }
    if (error instanceof Error) {
      throw new Error(error.message || "Falha ao gerar o quiz. Os arquivos de lore podem estar corrompidos ou a conexão com a IA está instável.");
    }
    throw new Error("Um erro desconhecido ocorreu ao gerar o quiz.");
  }
}

export async function getNightCityNews(): Promise<NewsOutput> {
  try {
    const nightCityLore = await getNightCityLoreContext();
    const news = await generateNightCityNews({ context: nightCityLore });
    return news;
  } catch (error) {
    console.error("Error in getNightCityNews:", error);
     if (error instanceof Error && error.message.includes('CountLimiter')) {
      throw new Error("Limite de taxa da API atingido. Por favor, tente novamente mais tarde.");
    }
    if (error instanceof Error) {
      throw new Error(error.message || "Falha ao gerar notícias da cidade. Os arquivos de lore podem estar corrompidos ou a conexão com a IA está instável.");
    }
    throw new Error("Um erro desconhecido ocorreu ao gerar notícias da cidade.");
  }
}

export async function getNightCityRumor(): Promise<RumorOutput> {
  try {
    const nightCityLore = await getNightCityLoreContext();
    const rumor = await generateNightCityRumorFlow({ context: nightCityLore });
    return rumor;
  } catch (error) {
    console.error("Error in getNightCityRumor:", error);
    if (error instanceof Error && error.message.includes('CountLimiter')) {
      throw new Error("Limite de taxa da API atingido. Por favor, tente novamente mais tarde.");
    }
    if (error instanceof Error) {
      throw new Error(error.message || "Falha ao interceptar boatos. As fontes devem ter secado ou há muita interferência na rede.");
    }
    throw new Error("Um erro desconhecido ocorreu ao interceptar boatos.");
  }
}
