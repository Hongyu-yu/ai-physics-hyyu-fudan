import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Users, Code2, Microscope, Lightbulb, GraduationCap } from 'lucide-react';

const researchInterests = [
  {
    icon: Microscope,
    key: 'mlPotentials',
  },
  {
    icon: Lightbulb,
    key: 'ferroic',
  },
  {
    icon: Code2,
    key: 'aiScience',
  },
];

const education = [
  {
    key: 'phd',
    institution: 'Fudan University',
    period: '2020 - 2025',
  },
  {
    key: 'bs',
    institution: 'Nankai University',
    period: '2016 - 2020',
  },
];

const highlights = [
  { icon: BookOpen, value: '21', labelKey: 'publications' },
  { icon: Award, value: '13', labelKey: 'firstAuthor' },
  { icon: Users, value: '541', labelKey: 'citations' },
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
              {t('about.title')} <span className="text-gradient">{t('about.highlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.researchInterests')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchInterests.map((item, index) => (
              <div
                key={index}
                className="reveal opacity-0 group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {t(`about.interests.${item.key}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(`about.interests.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Highlights */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="reveal opacity-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {t('about.education')}
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {t(`about.degrees.${edu.key}.degree`)}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-blue-700 dark:text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {t(`about.degrees.${edu.key}.thesis`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="reveal opacity-0 stagger-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {t('about.highlights')}
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"
                  >
                    <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {t(`publications.stats.${item.labelKey}`)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Achievements */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((key, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">
                        {t(`about.achievements.${key}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Position */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">
              Current Position
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-blue-200 mb-6">
              {t('hero.department')}<br />
              {t('hero.university')}
            </p>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Leading research in computational physics and machine learning methods for ferroic materials. 
              Open to collaborations and new research opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
