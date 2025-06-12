
export interface CorporationSection {
  title: string;
  content: string[];
}

export interface Corporation {
  name: string;
  introduction: string;
  sections: CorporationSection[];
  headerBackgroundColor: string;
  accentColor: string;
}
