
export interface GangSection {
  title: string;
  content: string[];
}

export interface Gang {
  name: string;
  borderColor: string;
  glowColor: string;
  gradient: string;
  titleColorClass: string;
  introduction: string;
  sections: GangSection[];
}
