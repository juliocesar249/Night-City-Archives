
'use server';

import { generateLoreSnippet } from '@/ai/flows/lore-snippet-flow';
import fs from 'fs/promises';
import path from 'path';

export async function getLoreDataShard(): Promise<string> {
  try {
    // Assuming night-city.md is in the project root.
    // In a real scenario, this path might need to be more robust
    // or the file content could be managed differently (e.g., database, CMS).
    const filePath = path.join(process.cwd(), 'night-city.md');
    const nightCityLore = await fs.readFile(filePath, 'utf-8');
    
    const snippet = await generateLoreSnippet({ context: nightCityLore });
    return snippet;
  } catch (error) {
    console.error("Error in getLoreDataShard:", error);
    // Provide a fallback or re-throw a more specific error
    return "Connection lost... data shard corrupted. Try again, choom.";
  }
}
