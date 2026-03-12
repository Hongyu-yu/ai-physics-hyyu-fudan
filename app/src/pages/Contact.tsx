import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Building2, Github, GraduationCap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: 'labels.email',
    value: 'hongyuyu20@fudan.edu.cn',
    link: 'mailto:hongyuyu20@fudan.edu.cn',
  },
  {
    icon: Building2,
    label: 'labels.position',
    value: 'hero.subtitle',
    subvalue: 'labels.department',
  },
  {
    icon: MapPin,
    label: 'labels.location',
    value: 'hero.location',
  },
];

const externalLinks = [
  { icon: GraduationCap, name: 'Google Scholar', link: 'https://scholar.google.com/citations?user=ES83JO4AAAAJ' },
  { icon: Github, name: 'GitHub', link: 'https://github.com/Hongyu-yu' },
  { icon: ExternalLink, name: 'ResearchGate', link: 'https://www.researchgate.net/profile/Hongyu-Yu-6' },
];

// Scholar data - will be updated by GitHub Actions
const scholarData = {
  citations: 541,
  hIndex: 12,
  i10Index: 22,
  publications: 21,
  topJournals: 3,
};

export default function Contact() {
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
              {t('contact.title')} <span className="text-gradient">{t('contact.highlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="reveal opacity-0 stagger-1 space-y-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {t('contact.info')}
              </h2>
              
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                          {t(item.label)}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <>
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">
                              {item.value.startsWith('hero.') ? t(item.value) : item.value}
                            </p>
                            {item.subvalue && (
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                {t(item.subvalue)}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Action */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  {t('contact.collaboration.title')}
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  {t('contact.collaboration.desc')}
                </p>
                <Button
                  asChild
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <a href="mailto:hongyuyu20@fudan.edu.cn">
                    <Mail className="w-4 h-4 mr-2" />
                    {t('contact.collaboration.button')}
                  </a>
                </Button>
              </div>
            </div>

            {/* External Links */}
            <div className="reveal opacity-0 stagger-2">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {t('contact.online')}
              </h2>
              <div className="space-y-4">
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <link.icon className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        View profile and publications
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Academic Profile Summary */}
              <div className="mt-8 p-6 bg-slate-900 dark:bg-slate-950 rounded-2xl text-white">
                <h4 className="text-lg font-semibold mb-4">
                  Academic Profile
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{scholarData.citations}</div>
                    <div className="text-xs text-slate-400">{t('hero.stats.citations')}</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{scholarData.hIndex}</div>
                    <div className="text-xs text-slate-400">{t('hero.stats.hIndex')}</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{scholarData.publications}</div>
                    <div className="text-xs text-slate-400">{t('hero.stats.publications')}</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{scholarData.topJournals}</div>
                    <div className="text-xs text-slate-400">PRL/AM Papers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
