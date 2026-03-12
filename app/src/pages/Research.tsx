import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Atom, Zap, Layers, Cpu, Sparkles, ExternalLink, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  { icon: Bot, key: 'aiPhysicist', span: 'col-span-12 lg:col-span-8' },
  { icon: Brain, key: 'ml', span: 'col-span-12 lg:col-span-4' },
  { icon: Atom, key: 'ferroelectric', span: 'col-span-12 lg:col-span-4' },
  { icon: Zap, key: 'multiferroic', span: 'col-span-12 lg:col-span-4' },
  { icon: Layers, key: 'computational', span: 'col-span-12 lg:col-span-4' },
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
      {/* ── Title Section ── */}
      <section className="pt-40 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal opacity-0 space-y-6">
            <h1 className="text-hero text-[#1d1d1f] dark:text-white">
              {t('research.title')} <br />
              <span className="text-[#0071e3]">{t('research.highlight')}</span>
            </h1>
            <p className="text-[28px] text-[#86868b] dark:text-[#a1a1a6] font-medium">
              {t('research.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Research Bento Grid ── */}
      <section className="py-20 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bento-grid">
            {researchAreas.map((area, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 apple-card p-10 flex flex-col justify-between group ${area.span}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0071e3] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[28px] font-semibold mb-2">{t(`research.areas.${area.key}.title`)}</h3>
                  <p className="text-[14px] font-bold text-[#0071e3] uppercase tracking-widest mb-4">
                    {t(`research.areas.${area.key}.subtitle`)}
                  </p>
                  <p className="text-[17px] text-[#86868b] leading-relaxed mb-8">{t(`research.areas.${area.key}.desc`)}</p>
                </div>
                
                <div className="pt-8 border-t border-black/[0.05] dark:border-white/[0.05] space-y-4">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-white">{t('research.keyAchievements')}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {achievements[area.key].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[14px] text-[#86868b]">
                        <div className="w-1 h-1 rounded-full bg-[#0071e3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Software Showcase ── */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-20 space-y-4">
            <h2 className="text-headline">{t('research.software')}</h2>
            <div className="w-20 h-1 bg-[#0071e3] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {softwareProjects.map((project, idx) => (
              <div key={idx} className="reveal opacity-0 stagger-1 group p-12 rounded-[2rem] bg-black text-white relative overflow-hidden transition-all hover:-translate-y-2">
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                  <project.icon className="w-64 h-64" />
                </div>
                <project.icon className="w-10 h-10 text-[#2997ff] mb-8" />
                <h3 className="text-[32px] font-semibold mb-4">{project.name}</h3>
                <p className="text-[#a1a1a6] text-[18px] leading-relaxed relative z-10">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-40 bg-white dark:bg-black">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="reveal opacity-0 apple-card bg-[#f5f5f7] dark:bg-[#1c1c1e] p-16 lg:p-24 text-center space-y-8">
            <Sparkles className="w-16 h-16 text-[#0071e3] mx-auto" />
            <h2 className="text-[40px] font-semibold tracking-tight">{t('research.platform')}</h2>
            <p className="text-[21px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">{t('research.platformDesc')}</p>
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

