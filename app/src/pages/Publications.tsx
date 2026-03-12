import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Quote } from 'lucide-react';
import { scholarStats, firstOrCoFirst, otherPubs, formatAuthors } from '@/data/scholarData';
import type { Publication } from '@/data/scholarData';

const scholarData = scholarStats;

function PubCard({ pub, index, t }: { pub: Publication; index: number; t: (k: string) => string }) {
  return (
    <div
      className={`reveal opacity-0 p-8 lg:p-10 group transition-all duration-500 rounded-2xl ${
        pub.highlight ? 'bg-[#f5f5f7] dark:bg-[#1c1c1e]' : 'hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e]'
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-[14px] font-bold text-[#86868b]">{pub.year}</span>
        <div className="flex items-center gap-1 text-[13px] text-[#86868b]">
          <Quote className="w-3.5 h-3.5" /> {pub.citations} {t('publications.citations')}
        </div>
      </div>

      <h3 className="text-[22px] font-semibold text-[#1d1d1f] dark:text-white mb-4 leading-tight group-hover:text-[#0071e3] transition-colors">
        {pub.title}
      </h3>

      <p className="text-[16px] text-[#86868b] mb-6 leading-relaxed line-clamp-2">{formatAuthors(pub)}</p>

      <div className="flex items-center justify-between pt-6 border-t border-black/[0.05] dark:border-white/[0.05]">
        <span className="text-[15px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">{pub.journal}</span>
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[14px] font-bold text-[#0071e3] hover:underline"
          >
            {t('publications.view')} <ExternalLink className="ml-1.5 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Publications() {
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
      {/* ── Page Header ── */}
      <section className="pt-40 pb-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-6">
          <h1 className="text-headline">
            {t('publications.title')} <span className="text-[#0071e3]">{t('publications.highlight')}</span>
          </h1>
          <p className="text-[24px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-3xl mx-auto">
            {t('publications.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Visual Stats ── */}
      <section className="py-20 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: scholarData.publications, lbl: 'publications.stats.total' },
              { val: scholarData.firstAuthor, lbl: 'publications.stats.firstAuthor' },
              { val: scholarData.topJournals, lbl: 'publications.stats.topJournals' },
              { val: scholarData.citations, lbl: 'publications.stats.citations' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-[56px] font-semibold tracking-tighter text-[#1d1d1f] dark:text-white">{stat.val}</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-[#86868b]">{t(stat.lbl)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publication Lists ── */}
      <section className="py-32">
        <div className="max-w-[1000px] mx-auto px-6 space-y-20">

          {/* First / Co-first Author */}
          {firstOrCoFirst.length > 0 && (
            <div>
              <div className="reveal opacity-0 mb-12">
                <h2 className="text-[28px] font-semibold">{t('publications.sectionFirst')}</h2>
                <p className="text-[15px] text-[#86868b] mt-2">{firstOrCoFirst.length} {t('publications.papers')}</p>
              </div>
              <div className="space-y-6">
                {firstOrCoFirst.map((pub, i) => <PubCard key={`f-${i}`} pub={pub} index={i} t={t} />)}
              </div>
            </div>
          )}

          {/* Other */}
          {otherPubs.length > 0 && (
            <div>
              <div className="reveal opacity-0 mb-12">
                <h2 className="text-[28px] font-semibold">{t('publications.sectionOther')}</h2>
                <p className="text-[15px] text-[#86868b] mt-2">{otherPubs.length} {t('publications.papers')}</p>
              </div>
              <div className="space-y-6">
                {otherPubs.map((pub, i) => <PubCard key={`o-${i}`} pub={pub} index={i} t={t} />)}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
