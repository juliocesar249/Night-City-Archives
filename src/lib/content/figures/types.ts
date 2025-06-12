
export interface FigureSection {
  title: string;
  content: string[];
}

export interface Figure {
  id: string;
  name: string;
  aliases?: string[];
  affiliation: string;
  bio: string[];
  iconicQuote?: string;
  status?: string;
  imagePlaceholder: string;
  imageAiHint: string;
  accentColor: string; // For theming the card a bit
  headerBackgroundColor?: string; // Optional: for card header
  titleColorClass?: string; // Optional: for title color
  sections?: FigureSection[]; // Optional: for more detailed structured content if needed
}
