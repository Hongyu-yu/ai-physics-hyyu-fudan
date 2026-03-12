import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Users, Code2, Microscope, Lightbulb, GraduationCap } from 'lucide-react';
import { scholarStats } from '@/data/scholarData';

const researchInterests = [
  { icon: Microscope, key: 'mlPotentials' },
  { icon: Lightbulb, key: 'ferroic' },
  { icon: Code2, key: 'aiScience' },
];

const education = [
  { key: 'phd', institution: 'Fudan University', period: '2020 - 2025' },
  { key: 'bs', institution: 'Nankai University', period: '2016 - 2020' },
];

const highlights = [
  { icon: BookOpen, value: scholarStats.publications, labelKey: 'publications' },
  { icon: Award, value: scholarStats.firstAuthor, labelKey: 'firstAuthor' },
  { icon: Users, value: scholarStats.citations, labelKey: 'citations' },
];

const achievements = ['prl', 'am', 'spingnn', 'pasp'];

export default function About() {
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
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="reveal opacity-0 text-center space-y-6">
            <h1 className="text-headline text-[#1d1d1f] dark:text-white">
              {t('about.title')} <span className="text-[#0071e3]">{t('about.highlight')}</span>
            </h1>
            <p className="text-[24px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="py-20 border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="reveal opacity-0 text-center space-y-2">
                <div className="text-[48px] font-semibold text-[#1d1d1f] dark:text-white tracking-tighter">{item.value}</div>
                <div className="text-[13px] uppercase tracking-wider text-[#86868b] font-medium">{t(`publications.stats.${item.labelKey}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section className="py-32 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {researchInterests.map((item, idx) => (
              <div key={idx} className="reveal opacity-0 stagger-1 apple-card p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-3xl bg-white dark:bg-black flex items-center justify-center mb-8 shadow-sm">
                  <item.icon className="w-8 h-8 text-[#0071e3]" />
                </div>
                <h3 className="text-[21px] font-semibold mb-4">{t(`about.interests.${item.key}.title`)}</h3>
                <p className="text-[16px] text-[#86868b] leading-relaxed">{t(`about.interests.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education Timeline ── */}
      <section className="py-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="reveal opacity-0 space-y-12">
              <h2 className="text-[32px] font-semibold tracking-tight">{t('about.education')}</h2>
              <div className="space-y-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="group relative pl-8 border-l-2 border-[#f5f5f7] dark:border-white/10 hover:border-[#0071e3] transition-colors duration-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-[#f5f5f7] dark:border-white/10 group-hover:border-[#0071e3] transition-colors" />
                    <div className="space-y-2">
                      <span className="text-[13px] font-bold text-[#86868b]">{edu.period}</span>
                      <h3 className="text-[21px] font-semibold text-[#1d1d1f] dark:text-white">{t(`about.degrees.${edu.key}.degree`)}</h3>
                      <p className="text-[#0071e3] font-medium">{edu.institution}</p>
                      <p className="text-[15px] text-[#86868b] italic">{t(`about.degrees.${edu.key}.thesis`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 stagger-2 space-y-12">
              <h2 className="text-[32px] font-semibold tracking-tight">{t('about.highlights')}</h2>
              <div className="apple-card-flat p-10 space-y-8">
                {achievements.map((key, i) => (
                  <div key={i} className="flex gap-4">
                    <Award className="w-6 h-6 text-[#0071e3] flex-shrink-0" />
                    <p className="text-[17px] text-[#1d1d1f] dark:text-[#d2d2d7] leading-snug">{t(`about.achievements.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Position Banner ── */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-8">
          <div className="reveal opacity-0 w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-[40px] font-semibold tracking-tight">Current Focus</h2>
          <div className="reveal opacity-0 stagger-2 space-y-4">
            <p className="text-[24px] font-medium text-[#2997ff]">{t('hero.subtitle')}</p>
            <p className="text-[19px] text-[#a1a1a6]">{t('hero.department')} &middot; {t('hero.university')}</p>
          </div>
          <p className="reveal opacity-0 stagger-3 text-[19px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Leading research in computational physics and machine learning methods for ferroic materials. 
            Actively seeking talented students and researchers to join our group.
          </p>
        </div>
      </section>
    </div>
  );
}

