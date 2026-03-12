import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Atom, Zap, Layers, Cpu, Sparkles, ExternalLink, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  { icon: Bot, key: 'aiPhysicist' },
  { icon: Brain, key: 'ml' },
  { icon: Atom, key: 'ferroelectric' },
  { icon: Zap, key: 'multiferroic' },
  { icon: Layers, key: 'computational' },
];

const achievements: Record<string, string[]> = {
  ml: [
    'SpinGNN/SpinGNN++: Magnetic neural network potentials',
    'DREAM: Interatomic potential with electric field coupling',
    'Spin descriptor for magnetic material representation',
  ],
  ferroelectric: [
    'Subnano silicon films ferroelectricity',
    'HfO₂ domain wall dynamics',
    'Sliding ferroelectric mechanisms',
  ],
  multiferroic: [
    'Twisted NiI₂ magnetoelectricity',
    'Spin-lattice coupled ML simulations',
    'Light-induced magnetic transitions',
  ],
  computational: [
    'High-throughput structure searching',
    'Hybrid ML for effective Hamiltonians',
    'GNN tensor prediction framework',
  ],
  aiPhysicist: [
    'Physics JARVIS: Autonomous AI systems',
    'Scientific workflow automation',
    'AI-driven material discovery tools',
  ],
};

const softwareProjects = [
  { icon: Cpu, name: 'SpinGNN', desc: 'Graph neural network potential for magnetic materials' },
  { icon: Sparkles, name: 'DREAM', desc: 'Deep learning interatomic potential with electric field coupling' },
  { icon: Bot, name: 'Physics JARVIS', desc: 'Autonomous AI system for physics modeling and analysis' },
];

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white dark:bg-black">
      {/* ── Hero ── */}
      <section className="pt-40 pb-32">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <div className="reveal opacity-0 space-y-6">
            <h1 className="text-hero text-[#1d1d1f] dark:text-white">
              {t('research.title')}{' '}
              <span className="text-[#0071e3]">{t('research.highlight')}</span>
            </h1>
            <p className="text-[24px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-2xl mx-auto">
              {t('research.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Flagship: AI Physicist ── */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="reveal opacity-0 text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center">
              <Bot className="w-10 h-10 text-[#2997ff]" />
            </div>
            <p className="text-[14px] font-bold text-[#2997ff] uppercase tracking-widest">
              {t('research.areas.aiPhysicist.subtitle')}
            </p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold tracking-tight leading-tight">
              {t('research.areas.aiPhysicist.title')}
            </h2>
            <p className="text-[21px] text-[#a1a1a6] leading-relaxed max-w-2xl mx-auto">
              {t('research.areas.aiPhysicist.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {achievements.aiPhysicist.map((item, i) => (
                <span key={i} className="text-[15px] text-[#a1a1a6] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Areas (flowing sections) ── */}
      {researchAreas.slice(1).map((area, idx) => {
        const isGray = idx % 2 === 0;
        return (
          <section
            key={area.key}
            className={isGray ? 'py-28 bg-[#f5f5f7] dark:bg-[#111111]' : 'py-28 bg-white dark:bg-black'}
          >
            <div className="max-w-[980px] mx-auto px-6">
              <div className={`reveal opacity-0 flex flex-col lg:flex-row items-start gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon side */}
                <div className="flex-shrink-0 lg:pt-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#0071e3]/10 dark:bg-[#0071e3]/20 flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-[#0071e3]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-widest">
                    {t(`research.areas.${area.key}.subtitle`)}
                  </p>
                  <h3 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                    {t(`research.areas.${area.key}.title`)}
                  </h3>
                  <p className="text-[19px] text-[#86868b] leading-relaxed">
                    {t(`research.areas.${area.key}.desc`)}
                  </p>
                  <div className="pt-4 space-y-3">
                    {achievements[area.key].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-[15px] text-[#1d1d1f] dark:text-[#d2d2d7]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Software ── */}
      <section className="py-32 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-20">
            <h2 className="text-headline">{t('research.software')}</h2>
          </div>

          <div className="space-y-6">
            {softwareProjects.map((project, idx) => (
              <div key={idx} className="reveal opacity-0 group flex items-center gap-8 p-8 rounded-2xl bg-white dark:bg-[#1c1c1e] transition-colors hover:bg-[#0071e3]/[0.03] dark:hover:bg-white/[0.04]">
                <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-7 h-7 text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-[21px] font-semibold text-[#1d1d1f] dark:text-white">{project.name}</h3>
                  <p className="text-[16px] text-[#86868b] mt-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform CTA ── */}
      <section className="py-40 bg-white dark:bg-black">
        <div className="max-w-[680px] mx-auto px-6 text-center space-y-8">
          <Sparkles className="reveal opacity-0 w-12 h-12 text-[#0071e3] mx-auto" />
          <h2 className="reveal opacity-0 stagger-1 text-[40px] font-semibold tracking-tight">{t('research.platform')}</h2>
          <p className="reveal opacity-0 stagger-2 text-[19px] text-[#86868b] leading-relaxed">{t('research.platformDesc')}</p>
          <div className="reveal opacity-0 stagger-3">
            <Button asChild className="apple-button bg-[#0071e3] hover:bg-[#0077ed] text-white">
              <a href="https://sci-ai.cn" target="_blank" rel="noopener noreferrer">
                {t('research.visitPlatform')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
