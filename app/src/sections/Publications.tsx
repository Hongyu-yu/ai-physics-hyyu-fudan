import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Quote, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  link?: string;
  type: 'journal' | 'preprint';
  highlight?: boolean;
}

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
  },
  {
    title: 'Deterministic and Efficient Switching of Sliding Ferroelectrics',
    authors: 'S. Deng#, H. Yu#, J. Ji, C. Xu, H. Xiang',
    journal: 'Physical Review B',
    year: 2025,
    citations: 12,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.174105',
    type: 'journal',
  },
  {
    title: 'Role of Domain Walls on Imprint and Fatigue in HfO₂-based Ferroelectrics',
    authors: 'M. Xie#, H. Yu#, B. Zhang, C. Xu, H. Xiang',
    journal: 'Physical Review B',
    year: 2025,
    citations: 3,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.184108',
    type: 'journal',
  },
  {
    title: 'Transferable Machine Learning Approach for Predicting Electronic Structures of Charged Defects',
    authors: 'Y. Ma, H. Yu, Y. Zhong, S. Chen, X. Gong, H. Xiang',
    journal: 'Applied Physics Letters',
    year: 2025,
    citations: 7,
    link: 'https://pubs.aip.org/aip/apl/article/126/4/042104/3326750',
    type: 'journal',
  },
  {
    title: 'Physics-Informed Time-Reversal Equivariant Neural Network Potential for Magnetic Materials',
    authors: 'H. Yu#, B. Liu#, Y. Zhong, L. Hong, J. Ji, C. Xu, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2024,
    citations: 21,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.104427',
    type: 'journal',
  },
  {
    title: 'Spin-Dependent Graph Neural Network Potential for Magnetic Materials',
    authors: 'H. Yu, Y. Zhong, L. Hong, C. Xu, W. Ren, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2024,
    citations: 54,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.144426',
    type: 'journal',
  },
  {
    title: 'Efficient Prediction of Potential Energy Surface and Physical Properties with Kolmogorov-Arnold Networks',
    authors: 'R. Wang#, H. Yu#, Y. Zhong, H. Xiang',
    journal: 'arXiv preprint',
    year: 2024,
    citations: 7,
    link: 'https://arxiv.org/abs/2409.03430',
    type: 'preprint',
  },
  {
    title: 'Identifying Direct Bandgap Silicon Structures with High-Throughput Search and Machine Learning Methods',
    authors: 'R. Wang#, H. Yu#, Y. Zhong*, H. Xiang',
    journal: 'The Journal of Physical Chemistry C',
    year: 2024,
    citations: 7,
    link: 'https://pubs.acs.org/doi/10.1021/acs.jpcc.4c02404',
    type: 'journal',
  },
  {
    title: 'A General Tensor Prediction Framework Based on Graph Neural Networks',
    authors: 'Y. Zhong#, H. Yu#, X. Gong, H. Xiang',
    journal: 'The Journal of Physical Chemistry Letters',
    year: 2023,
    citations: 22,
    link: 'https://pubs.acs.org/doi/10.1021/acs.jpclett.3c01362',
    type: 'journal',
  },
  {
    title: 'Complex Spin Hamiltonian Represented by an Artificial Neural Network',
    authors: 'H. Yu#, C. Xu#, X. Li, F. Lou, L. Bellaiche, Z. Hu, X. Gong, H. Xiang',
    journal: 'Physical Review B',
    year: 2022,
    citations: 26,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.174422',
    type: 'journal',
  },
  {
    title: 'Exploration of the Bright and Dark Exciton Landscape and Fine Structure of MoS₂ using G₀W₀-BSE',
    authors: 'H. Yu#, M. Laurien#, Z. Hu, O. Rubel',
    journal: 'Physical Review B',
    year: 2019,
    citations: 26,
    link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.125413',
    type: 'journal',
  },
];

export default function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll ? publications : publications.slice(0, 6);

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
    <section
      ref={sectionRef}
      id="publications"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Selected <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Peer-reviewed publications in top-tier journals, focusing on machine learning 
            methods and ferroic materials research
          </p>
        </div>

        {/* Publication Stats */}
        <div className="reveal opacity-0 stagger-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-700">21</div>
            <div className="text-sm text-slate-600 mt-1">Total Publications</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-700">13</div>
            <div className="text-sm text-slate-600 mt-1">First/Co-first Author</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-700">3</div>
            <div className="text-sm text-slate-600 mt-1">PRL/AM Papers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-700">541</div>
            <div className="text-sm text-slate-600 mt-1">Total Citations</div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {displayedPublications.map((pub, index) => (
            <div
              key={index}
              className={`reveal opacity-0 bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md ${
                pub.highlight
                  ? 'border-blue-300 hover:border-blue-400'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap items-start gap-3 mb-3">
                {pub.highlight && (
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Highlight
                  </Badge>
                )}
                {pub.type === 'preprint' && (
                  <Badge variant="outline" className="text-slate-600">
                    Preprint
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  {pub.year}
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <Quote className="w-4 h-4" />
                  {pub.citations} citations
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-sm text-slate-600 mb-3">
                <Users className="w-4 h-4 inline mr-1" />
                {pub.authors}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-700">
                  {pub.journal}
                </span>
                {pub.link && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-blue-700"
                  >
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="reveal opacity-0 text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-slate-300 hover:border-blue-600 hover:text-blue-700"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show All Publications
              </>
            )}
          </Button>
        </div>

        {/* View All Links */}
        <div className="reveal opacity-0 flex flex-wrap justify-center gap-4 mt-8">
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-700 hover:bg-blue-50"
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
            className="border-slate-300 hover:border-blue-600 hover:text-blue-700"
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
  );
}
