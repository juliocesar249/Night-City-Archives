
'use server';

import { generateLoreSnippet } from '@/ai/flows/lore-snippet-flow';
import fs from 'fs/promises';
import path from 'path';

export async function getLoreDataShard(): Promise<string> {
  try {
    // Assuming night-city.md is in the project root.
    const filePath = path.join(process.cwd(), 'night-city.md');
    const nightCityLore = await fs.readFile(filePath, 'utf-8');
    
    const snippet = await generateLoreSnippet({ context: nightCityLore });
    return snippet;
  } catch (error) {
    console.error("Error in getLoreDataShard:", error);
    // Re-throw a new error or the original one so the client-side can handle it.
    // This allows the client to display a more appropriate error toast.
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to retrieve lore data shard. The archives might be corrupted or the connection is unstable.");
    }
    throw new Error("An unknown error occurred while retrieving the lore data shard.");
  }
}

