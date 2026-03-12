import rawData from './scholar-data.json';

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  link: string;
  type: 'journal' | 'preprint';
  highlight: boolean;
  category: 'all' | 'ml' | 'ferroelectric' | 'multiferroic';
  isFirstAuthor: boolean;
}

export interface ScholarStats {
  citations: number;
  hIndex: number;
  i10Index: number;
  publications: number;
  firstAuthor: number;
  topJournals: number;
}

export const scholarStats: ScholarStats = rawData.stats as ScholarStats;
export const publications: Publication[] = rawData.publications as Publication[];
export const lastUpdated: string = rawData.lastUpdated;
