
export interface District {
  name: string;
  gradient: string;
  titleColorClass: string;
  borderColor: string;
  paragraphs: string[];
  dominantGangs?: string[];
  majorCorporations?: string[];
  iconName?: string; // Optional: Lucide icon name
}
