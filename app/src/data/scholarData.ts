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

// Papers where Yu is second author but NOT co-first
// Unique substrings to identify second-author papers that are NOT co-first
const notCoFirstKeywords = [
  'electronic structures of charged defects',
  'switching in hfo',
  'kohn',
  'magnetoelectric multiferroics',
  'equivariant graph neural networks for the hamiltonian',
];

function isNotCoFirst(title: string): boolean {
  const t = title.toLowerCase();
  return notCoFirstKeywords.some(kw => t.includes(kw));
}

function matchYu(s: string) {
  return s.includes('yu') && (s.includes('hong') || s.includes('h '));
}

function classify(pubs: Publication[]) {
  const firstOrCoFirst: Publication[] = [];
  const other: Publication[] = [];

  for (const pub of pubs) {
    const authorList = pub.authors.toLowerCase().split(' and ').map(a => a.trim());
    const isFirst = authorList.length > 0 && matchYu(authorList[0]);
    const isCoFirst = !isFirst && authorList.length > 1 && matchYu(authorList[1])
      && !isNotCoFirst(pub.title);

    if (isFirst || isCoFirst) {
      firstOrCoFirst.push(pub);
    } else {
      other.push(pub);
    }
  }

  const sortFn = (a: Publication, b: Publication) =>
    b.year - a.year || b.citations - a.citations;
  firstOrCoFirst.sort(sortFn);
  other.sort(sortFn);

  return { firstOrCoFirst, other };
}

export const { firstOrCoFirst, other: otherPubs } = classify(publications);

// Override the static firstAuthor count with the accurate computed count
scholarStats.firstAuthor = firstOrCoFirst.length;
