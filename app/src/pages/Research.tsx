import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Atom, Zap, Layers, Cpu, Sparkles, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const researchAreas = [
  { icon: Brain, key: 'ml', color: 'from-blue-500 to-blue-600' },
  { icon: Atom, key: 'ferroelectric', color: 'from-indigo-500 to-indigo-600' },
  { icon: Zap, key: 'multiferroic', color: 'from-purple-500 to-purple-600' },
  { icon: Layers, key: 'computational', color: 'from-teal-500 to-teal-600' },
];

const softwareProjects = [
  { icon: Cpu, name: 'SpinGNN', status: 'Open Source' },
  { icon: Sparkles, name: 'PASP', status: 'Commercial Software' },
];

const achievements: Record<string, string[]> = {
  ml: [
    'SpinGNN: Graph neural network potential for magnetic materials',
    'SpinGNN++: Time-reversal equivariant neural network potential',
    'Reciprocal space neural network for long-range interactions',
  ],
  ferroelectric: [
    'Prediction of room-temperature ferroelectricity in subnano silicon films',
    'Domain wall dynamics in HfO₂-based ferroelectrics',
    'Sliding ferroelectric switching mechanisms',
  ],
  multiferroic: [
    'Moiré-induced magnetoelectricity in twisted bilayer NiI₂',
    'Spin-lattice coupled machine learning simulations',
    'Light-induced magnetic phase transitions',
  ],
  computational: [
    'High-throughput structure searching methods',
    'Hybrid machine learning for effective Hamiltonians',
    'Tensor prediction framework based on GNNs',
  ],
};

export default function Research() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

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
              {t('research.title')} <span className="text-gradient">{t('research.highlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('research.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="reveal opacity-0 group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-700 transition-all duration-500 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${area.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t(`research.areas.${area.key}.title`)}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {t(`research.areas.${area.key}.subtitle`)}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {t(`research.areas.${area.key}.desc`)}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2">
                    {achievements[area.key].map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('research.software')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {softwareProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900 dark:bg-slate-950 border-slate-800 hover:border-blue-700 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                      <span className="text-xs px-2 py-1 bg-blue-600/30 text-blue-300 rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.name === 'SpinGNN' 
                      ? 'Graph neural network potential for magnetic materials with spin-dependent interactions'
                      : 'Property Analysis and Simulation Package - Contributing to the deep learning spin Hamiltonian module'
                    }
                  </p>
                  {project.name === 'SpinGNN' && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    >
                      <a
                        href="https://github.com/Hongyu-yu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI for Science Lab */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">
              {t('research.platform')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Contributing to sci-ai.cn - a platform integrating AI computational tools 
              for materials science research, promoting the application of artificial 
              intelligence in condensed matter physics.
            </p>
            <Button
              asChild
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <a
                href="https://sci-ai.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Platform
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
