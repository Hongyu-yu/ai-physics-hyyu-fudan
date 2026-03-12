import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap, MapPin, ArrowRight, Users, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scholarStats } from '@/data/scholarData';

const scholarData = scholarStats;

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="overflow-x-hidden bg-white dark:bg-black">

      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center relative pt-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="./ai-workflow.png"
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 max-w-[800px] h-auto object-contain opacity-[0.07] dark:opacity-[0.05]"
          />
        </div>

        <div className="container max-w-[1200px] mx-auto px-6 z-10">
          <div className="max-w-4xl space-y-10">
            <div className="reveal opacity-0 stagger-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] dark:bg-white/10 text-[13px] font-medium text-[#0071e3] dark:text-[#2997ff] mb-6">
                <MapPin className="w-3.5 h-3.5" />
                {t('hero.location')}
              </div>
              <h1 className="text-hero text-[#1d1d1f] dark:text-[#f5f5f7]">
                Hongyu Yu <span className="text-[#86868b] dark:text-[#424245]">于宏宇</span>
              </h1>
            </div>

            <div className="reveal opacity-0 stagger-2 max-w-2xl">
              <p className="text-[24px] lg:text-[28px] text-[#1d1d1f] dark:text-[#d2d2d7] leading-tight font-medium mb-4">
                {t('hero.subtitle')}
              </p>
              <p className="text-[19px] lg:text-[21px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="reveal opacity-0 stagger-3 flex flex-wrap gap-4">
              <Button asChild className="apple-button bg-[#0071e3] hover:bg-[#0077ed] text-white">
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('hero.contactBtn')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="apple-button border-[#d2d2d7] dark:border-[#424245] hover:bg-[#f5f5f7] dark:hover:bg-white/5">
                <a href="https://scholar.google.com/citations?user=ES83JO4AAAAJ" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#f5f5f7] dark:bg-[#111111] py-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: scholarData.citations, label: t('hero.stats.citations') },
              { value: scholarData.hIndex, label: t('hero.stats.hIndex') },
              { value: scholarData.i10Index, label: t('hero.stats.i10Index') },
              { value: scholarData.publications, label: t('hero.stats.publications') },
            ].map((stat, idx) => (
              <div key={idx} className="reveal opacity-0 text-center space-y-2" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-[56px] lg:text-[72px] font-semibold tracking-tighter text-[#1d1d1f] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-[14px] uppercase tracking-widest text-[#86868b] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore (flowing navigation) ── */}
      <section className="py-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="space-y-0 divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {[
              { to: '/research', icon: Sparkles, titleKey: 'nav.research', descKey: 'home.researchDesc', ctaKey: 'home.explore' },
              { to: '/publications', icon: BookOpen, titleKey: 'nav.publications', descKey: 'publications.subtitle', ctaKey: 'home.viewAll' },
              { to: '/recruitment', icon: Users, titleKey: 'nav.recruitment', descKey: 'home.recruitmentDesc', ctaKey: 'home.learnMore' },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="reveal opacity-0 group flex items-center gap-8 py-12 first:pt-0 last:pb-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0071e3]/10 dark:bg-[#0071e3]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0071e3]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#0071e3]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[28px] font-semibold text-[#1d1d1f] dark:text-white group-hover:text-[#0071e3] transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-[17px] text-[#86868b] mt-1">{t(item.descKey)}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#d2d2d7] dark:text-[#424245] group-hover:text-[#0071e3] group-hover:translate-x-2 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-32 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="reveal opacity-0 mb-16 space-y-4">
            <h2 className="text-headline text-[#1d1d1f] dark:text-white">{t('home.highlightsTitle')}</h2>
            <p className="text-[21px] text-[#86868b]">{t('home.highlightsSubtitle')}</p>
          </div>

          <div className="space-y-0 divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {[
              { venue: 'PRL 2025', title: 'Prediction of Room Temperature Ferroelectricity in Subnano Silicon Thin Films' },
              { venue: 'PRL 2025', title: 'Moiré-Induced Magnetoelectricity in Twisted Bilayer NiI₂' },
              { venue: 'AM 2025', title: 'Recent Advances in Unconventional Ferroelectrics and Multiferroics' },
            ].map((item, idx) => (
              <div key={idx} className="reveal opacity-0 flex items-start gap-6 py-8 first:pt-0 last:pb-0">
                <span className="text-[12px] font-bold tracking-widest text-[#0071e3] uppercase whitespace-nowrap pt-1.5">{item.venue}</span>
                <p className="text-[20px] font-semibold leading-snug text-[#1d1d1f] dark:text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
