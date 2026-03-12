import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Brain, Zap, Users, GraduationCap, Sparkles, Rocket, Mail, ArrowRight, CheckCircle, Bot, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Brain, key: 'aiNative' },
  { icon: Zap, key: 'resources' },
  { icon: Users, key: 'mentors' },
  { icon: Bot, key: 'openclaw' },
  { icon: Sparkles, key: 'aiForScience' },
  { icon: Rocket, key: 'growth' },
];

const positions = [
  { icon: GraduationCap, key: 'phd', requirementCount: 4 },
  { icon: Users, key: 'postdoc', requirementCount: 4 },
  { icon: Sparkles, key: 'visitor', requirementCount: 3 },
];

const openclawFeatures = ['feature1', 'feature2', 'feature3'];

export default function Recruitment() {
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
      {/* ── Dramatic Hero ── */}
      <section className="pt-64 pb-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="reveal opacity-0 space-y-10">
            <h1 className="text-hero text-[#1d1d1f] dark:text-white max-w-5xl mx-auto">
              {t('recruitment.hero.headline')}
            </h1>
            <p className="text-[28px] text-[#86868b] dark:text-[#a1a1a6] max-w-3xl mx-auto font-medium">
              {t('recruitment.hero.subheadline')}
            </p>
            <div className="flex justify-center">
              <Button asChild className="apple-button h-16 px-12 bg-[#0071e3] hover:bg-[#0077ed] text-[21px]">
                <Link to="/contact">
                  {t('recruitment.fomo.cta')}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-32 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-24">
            <h2 className="text-headline mb-4">{t('recruitment.benefits.title')}</h2>
            <div className="w-24 h-1.5 bg-[#0071e3] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="reveal opacity-0 stagger-1 apple-card p-12 bg-white dark:bg-[#1c1c1e] text-center">
                <div className="w-16 h-16 rounded-3xl bg-[#f5f5f7] dark:bg-white/5 flex items-center justify-center mx-auto mb-8">
                  <benefit.icon className="w-8 h-8 text-[#0071e3]" />
                </div>
                <h3 className="text-[24px] font-semibold mb-4">{t(`recruitment.benefits.${benefit.key}.title`)}</h3>
                <p className="text-[17px] text-[#86868b] leading-relaxed">{t(`recruitment.benefits.${benefit.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OpenClaw Product Showcase ── */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal opacity-0 rounded-[1.5rem] bg-black text-white border border-white/[0.06] overflow-hidden p-0 relative min-h-[600px] flex items-center">
            <img
              src="./openclaw-illustration.png"
              className="absolute right-0 bottom-0 h-full object-contain opacity-30 invert scale-125 origin-right pointer-events-none"
              alt=""
            />
            <div className="p-16 lg:p-24 max-w-3xl relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[14px] font-bold tracking-widest text-[#2997ff] uppercase">
                <Code2 className="w-4 h-4" /> Feature Spotlight
              </div>
              <h2 className="text-[56px] leading-[1.1] font-semibold tracking-tight">{t('recruitment.openclaw.title')}</h2>
              <p className="text-[21px] text-[#a1a1a6] leading-relaxed">{t('recruitment.openclaw.desc')}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {openclawFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-[18px]">
                    <CheckCircle className="w-6 h-6 text-[#2997ff] flex-shrink-0" />
                    {t(`recruitment.openclaw.${feat}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-32 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-24 space-y-6">
            <h2 className="text-headline">
              {t('recruitment.title')} <span className="text-[#0071e3]">{t('recruitment.highlight')}</span>
            </h2>
            <p className="text-[21px] text-[#86868b] max-w-2xl mx-auto">{t('recruitment.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {positions.map((pos, idx) => (
              <div key={idx} className="reveal opacity-0 stagger-2 apple-card p-12 bg-white dark:bg-[#1c1c1e] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0071e3] flex items-center justify-center">
                    <pos.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[32px] font-semibold mb-4 leading-tight">{t(`recruitment.positions.${pos.key}.title`)}</h3>
                    <p className="text-[17px] text-[#86868b] leading-relaxed mb-8">{t(`recruitment.positions.${pos.key}.desc`)}</p>
                    <ul className="space-y-4">
                      {Array.from({ length: pos.requirementCount }, (_, i) => (
                        <li key={i} className="flex gap-3 text-[15px] leading-tight">
                          <CheckCircle className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                          <span className="text-[#1d1d1f] dark:text-white">{t(`recruitment.positions.${pos.key}.requirements.${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-12">
                  <Button asChild variant="outline" className="w-full h-14 rounded-full border-2 border-[#0071e3] text-[#0071e3] font-bold hover:bg-[#0071e3] hover:text-white transition-all">
                    <Link to="/contact">
                      {t(`recruitment.positions.${pos.key}.apply`)}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-48 bg-white dark:bg-black">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-12">
          <div className="reveal opacity-0 w-24 h-24 rounded-[2.5rem] bg-[#f5f5f7] dark:bg-white/5 mx-auto flex items-center justify-center">
            <Mail className="w-10 h-10 text-[#0071e3]" />
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-[56px] font-semibold tracking-tight">{t('recruitment.cta.title')}</h2>
          <div className="reveal opacity-0 stagger-2 space-y-2">
            <p className="text-[24px] text-[#86868b]">{t('recruitment.cta.desc')}</p>
            <p className="text-[28px] font-semibold text-[#0071e3]">hongyuyu20@fudan.edu.cn</p>
          </div>
          <div className="reveal opacity-0 stagger-3">
            <Button asChild className="apple-button h-16 px-12 bg-[#0071e3] hover:bg-[#0077ed] text-[21px]">
              <a href="mailto:hongyuyu20@fudan.edu.cn">
                {t('recruitment.cta.button')}
                <Mail className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

