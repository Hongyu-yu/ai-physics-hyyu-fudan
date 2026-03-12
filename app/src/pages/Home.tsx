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
    <div ref={heroRef} className="overflow-x-hidden">

      {/* ── Massive Hero ── */}
      <section className="min-h-screen flex items-center bg-white dark:bg-black relative pt-12">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
          <img
            src="./openclaw-illustration.png"
            alt=""
            className="w-full h-full object-contain object-right opacity-[0.2] dark:opacity-[0.15] dark:invert scale-110 translate-x-20"
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

      {/* ── Featured Stats ── */}
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

      {/* ── Exploration Bento ── */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Link to="/research" className="reveal opacity-0 stagger-1 group apple-card bg-[#f5f5f7] dark:bg-[#1c1c1e] aspect-square lg:aspect-video flex flex-col justify-end p-12 overflow-hidden relative">
              <Sparkles className="absolute top-8 right-8 w-10 h-10 text-[#0071e3]/40 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12" />
              <div className="z-10">
                <h2 className="text-[40px] font-semibold text-[#1d1d1f] dark:text-white mb-4">{t('nav.research')}</h2>
                <p className="text-[19px] text-[#86868b] max-w-sm mb-6">{t('home.researchDesc')}</p>
                <div className="flex items-center text-[#0071e3] font-semibold">
                  {t('home.explore')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="grid gap-6">
              <Link to="/publications" className="reveal opacity-0 stagger-2 group apple-card bg-[#f5f5f7] dark:bg-[#1c1c1e] p-10 flex flex-col justify-between">
                <div>
                  <BookOpen className="w-8 h-8 text-[#0071e3] mb-6" />
                  <h3 className="text-[28px] font-semibold text-[#1d1d1f] dark:text-white">{t('nav.publications')}</h3>
                </div>
                <div className="flex items-center text-[#0071e3] font-semibold mt-6">
                  {t('home.viewAll')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link to="/recruitment" className="reveal opacity-0 stagger-3 group apple-card bg-[#f5f5f7] dark:bg-[#1c1c1e] p-10 flex flex-col justify-between">
                <div>
                  <Users className="w-8 h-8 text-[#0071e3] mb-6" />
                  <h3 className="text-[28px] font-semibold text-[#1d1d1f] dark:text-white">{t('nav.recruitment')}</h3>
                </div>
                <div className="flex items-center text-[#0071e3] font-semibold mt-6">
                  {t('home.learnMore')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { venue: 'PRL 2025', title: 'Prediction of Room Temperature Ferroelectricity in Subnano Silicon Thin Films' },
              { venue: 'PRL 2025', title: 'Moiré-Induced Magnetoelectricity in Twisted Bilayer NiI₂' },
              { venue: 'AM 2025', title: 'Recent Advances in Unconventional Ferroelectrics and Multiferroics' },
            ].map((item, idx) => (
              <div key={idx} className="reveal opacity-0 stagger-2 apple-card-flat p-8 space-y-4">
                <span className="text-[12px] font-bold tracking-widest text-[#0071e3] uppercase">{item.venue}</span>
                <p className="text-[18px] font-semibold leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

