import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Quote, Calendar, Users, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  link?: string;
  type: 'journal' | 'preprint';
  highlight?: boolean;
  category: 'all' | 'ml' | 'ferroelectric' | 'multiferroic';
}

// This data will be updated by GitHub Actions
const publications: Publication[] = [
  {
    title: 'Prediction of Room Temperature Ferroelectricity in Subnano Silicon Thin Films with an Antiferroelectric Ground State',
    authors: 'H. Yu#, S. Deng#, H. Zhu, M. Xie, Y. Zhang, X. Shi, J. Zhong, C. He, H. Xiang',
    journal: 'Physical Review Letters',
    year: 2025,
    citations: 5,
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.135.156801',
    type: 'journal',
    highlight: true,
    category: 'ferroelectric',
  },
  {
    title: 'Moiré-Induced Magnetoelectricity in Twisted Bilayer NiI₂',
    authors: 'H. Zhu#, H. Yu#, W. Zhu, G. Yu, C. Xu, H. Xiang',
    journal: 'Physical Review Letters',
    year: 2025,
    citations: 2,
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.135.196701',
    type: 'journal',
    highlight: true,
    category: 'multiferroic',
  },
  {
    title: 'Recent Advances in Unconventional Ferroelectrics and Multiferroics',
    authors: 'H. Yu, J. Ji, W. Luo, X. Gong, H. Xiang',
    journal: 'Advanced Materials',
    year: 2025,
    citations: 4,
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/adma.202507070',
    type: 'journal',
    highlight: true,
    category: 'ferroelectric',
  },
  {
    title: 'Deterministic and Efficient Switching of Sliding Ferroelectrics',
    authors: 'S. Deng#, H. Yu#, J. Ji, C. Xu, H. Xiang',
    journal: 'Physical Review B',
    year: 2025,
    citations: 12,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.174105',
    type: 'journal',
    category: 'ferroelectric',
  },
  {
    title: 'Role of Domain Walls on Imprint and Fatigue in HfO₂-based Ferroelectrics',
    authors: 'M. Xie#, H. Yu#, B. Zhang, C. Xu, H. Xiang',
    journal: 'Physical Review B',
    year: 2025,
    citations: 3,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.184108',
    type: 'journal',
    category: 'ferroelectric',
  },
  {
    title: 'Transferable Machine Learning Approach for Predicting Electronic Structures of Charged Defects',
    authors: 'Y. Ma, H. Yu, Y. Zhong, S. Chen, X. Gong, H. Xiang',
    journal: 'Applied Physics Letters',
    year: 2025,
    citations: 7,
    link: 'https://pubs.aip.org/aip/apl/article/126/4/042104/3326750',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'Physics-Informed Time-Reversal Equivariant Neural Network Potential for Magnetic Materials',
    authors: 'H. Yu#, B. Liu#, Y. Zhong, L. Hong, J. Ji, C. Xu, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2024,
    citations: 21,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.104427',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'Spin-Dependent Graph Neural Network Potential for Magnetic Materials',
    authors: 'H. Yu, Y. Zhong, L. Hong, C. Xu, W. Ren, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2024,
    citations: 54,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.144426',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'Efficient Prediction of Potential Energy Surface and Physical Properties with Kolmogorov-Arnold Networks',
    authors: 'R. Wang#, H. Yu#, Y. Zhong, H. Xiang',
    journal: 'arXiv preprint',
    year: 2024,
    citations: 7,
    link: 'https://arxiv.org/abs/2409.03430',
    type: 'preprint',
    category: 'ml',
  },
  {
    title: 'Identifying Direct Bandgap Silicon Structures with High-Throughput Search and Machine Learning Methods',
    authors: 'R. Wang#, H. Yu#, Y. Zhong*, H. Xiang',
    journal: 'The Journal of Physical Chemistry C',
    year: 2024,
    citations: 7,
    link: 'https://pubs.acs.org/doi/10.1021/acs.jpcc.4c02404',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'A General Tensor Prediction Framework Based on Graph Neural Networks',
    authors: 'Y. Zhong#, H. Yu#, X. Gong, H. Xiang',
    journal: 'The Journal of Physical Chemistry Letters',
    year: 2023,
    citations: 22,
    link: 'https://pubs.acs.org/doi/10.1021/acs.jpclett.3c01362',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'Complex Spin Hamiltonian Represented by an Artificial Neural Network',
    authors: 'H. Yu#, C. Xu#, X. Li, F. Lou, L. Bellaiche, Z. Hu, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2022,
    citations: 26,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.174422',
    type: 'journal',
    category: 'ml',
  },
  {
    title: 'Exploration of the Bright and Dark Exciton Landscape and Fine Structure of MoS₂ using G₀W₀-BSE',
    authors: 'H. Yu#, M. Laurien#, Z. Hu, O. Rubel',
    journal: 'Physical Review B',
    year: 2019,
    citations: 26,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.125413',
    type: 'journal',
    category: 'multiferroic',
  },
];

// Scholar data - will be updated by GitHub Actions
const scholarData = {
  citations: 541,
  hIndex: 12,
  i10Index: 22,
  publications: 21,
  firstAuthor: 13,
  topJournals: 3,
};

export default function Publications() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<'all' | 'ml' | 'ferroelectric' | 'multiferroic'>('all');

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(p => p.category === filter);
  
  const displayedPublications = showAll ? filteredPublications : filteredPublications.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('publications.title')} <span className="text-gradient">{t('publications.highlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('publications.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-100 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.publications}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('publications.stats.total')}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-100 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.firstAuthor}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('publications.stats.firstAuthor')}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-100 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.topJournals}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('publications.stats.topJournals')}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-100 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.citations}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('publications.stats.citations')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Filter */}
          <div className="reveal opacity-0 flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Filter by:</span>
            </div>
            <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
              <TabsList className="bg-white dark:bg-slate-800">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ml">ML Potentials</TabsTrigger>
                <TabsTrigger value="ferroelectric">Ferroelectric</TabsTrigger>
                <TabsTrigger value="multiferroic">Multiferroic</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-4">
            {displayedPublications.map((pub, index) => (
              <div
                key={index}
                className={`reveal opacity-0 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md ${
                  pub.highlight
                    ? 'border-blue-300 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-600'
                    : 'border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  {pub.highlight && (
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100">
                      {t('publications.highlight')}
                    </Badge>
                  )}
                  {pub.type === 'preprint' && (
                    <Badge variant="outline" className="text-slate-600 dark:text-slate-400">
                      {t('publications.preprint')}
                    </Badge>
                  )}
                  <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    {pub.year}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <Quote className="w-4 h-4" />
                    {pub.citations} citations
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <Users className="w-4 h-4 inline mr-1" />
                  {pub.authors}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                    {pub.journal}
                  </span>
                  {pub.link && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400"
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t('publications.view')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {filteredPublications.length > 6 && (
            <div className="reveal opacity-0 text-center mt-8">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                className="border-slate-300 dark:border-slate-600 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    {t('publications.showLess')}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    {t('publications.showAll')}
                  </>
                )}
              </Button>
            </div>
          )}

          {/* View All Links */}
          <div className="reveal opacity-0 flex flex-wrap justify-center gap-4 mt-8">
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <a
                href="https://scholar.google.com/citations?user=ES83JO4AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Quote className="w-4 h-4 mr-2" />
                Google Scholar
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 dark:border-slate-600 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400"
            >
              <a
                href="https://www.researchgate.net/profile/Hongyu-Yu-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-4 h-4 mr-2" />
                ResearchGate
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
