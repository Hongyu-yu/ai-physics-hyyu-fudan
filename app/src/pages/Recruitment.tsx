import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Plane, CheckCircle, Microscope, Server, Handshake, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const positions = [
  { icon: GraduationCap, key: 'phd', color: 'blue' },
  { icon: Users, key: 'postdoc', color: 'indigo' },
  { icon: Plane, key: 'visitor', color: 'teal' },
];

const benefits = [
  { icon: Microscope, key: 0 },
  { icon: Server, key: 1 },
  { icon: Handshake, key: 2 },
  { icon: TrendingUp, key: 3 },
];

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
              {t('recruitment.title')} <span className="text-gradient">{t('recruitment.highlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('recruitment.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((pos, index) => (
              <Card
                key={index}
                className="reveal opacity-0 group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`h-2 bg-gradient-to-r from-${pos.color}-500 to-${pos.color}-600`} />
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-${pos.color}-100 dark:bg-${pos.color}-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${pos.color}-600 transition-colors`}>
                    <pos.icon className={`w-7 h-7 text-${pos.color}-600 dark:text-${pos.color}-400 group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`recruitment.positions.${pos.key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    {t(`recruitment.positions.${pos.key}.desc`)}
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Requirements:
                    </p>
                    <ul className="space-y-2">
                      {[0, 1, 2, 3].map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle className={`w-4 h-4 text-${pos.color}-500 mt-0.5 flex-shrink-0`} />
                          <span>{t(`recruitment.positions.${pos.key}.requirements.${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className={`w-full bg-${pos.color}-600 hover:bg-${pos.color}-700`}
                  >
                    <Link to="/contact">
                      {t(`recruitment.positions.${pos.key}.apply`)}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('recruitment.benefits.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="reveal opacity-0 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {t(`recruitment.benefits.items.${benefit.key}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t(`recruitment.benefits.items.${benefit.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal opacity-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">
              {t('recruitment.cta.title')}
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8">
              {t('recruitment.cta.desc')} <strong>hongyuyu20@fudan.edu.cn</strong>
            </p>
            <Button
              asChild
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <Link to="/contact">
                {t('recruitment.cta.button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
