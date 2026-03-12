import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Building2, Github, GraduationCap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scholarStats } from '@/data/scholarData';

const scholarData = scholarStats;

const contactInfo = [
  { icon: Mail, label: 'labels.email', value: 'hongyuyu20@fudan.edu.cn', link: 'mailto:hongyuyu20@fudan.edu.cn' },
  { icon: Building2, label: 'labels.position', value: 'hero.subtitle', subvalue: 'labels.department' },
  { icon: MapPin, label: 'labels.location', value: 'hero.location' },
];

const externalLinks = [
  { icon: GraduationCap, name: 'Google Scholar', link: 'https://scholar.google.com/citations?user=ES83JO4AAAAJ' },
  { icon: Github, name: 'GitHub', link: 'https://github.com/Hongyu-yu' },
  { icon: ExternalLink, name: 'ResearchGate', link: 'https://www.researchgate.net/profile/Hongyu-Yu-6' },
];

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white dark:bg-black">
      {/* ── Header ── */}
      <section className="pt-40 pb-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-6">
          <h1 className="text-headline">
            {t('contact.title')} <span className="text-[#0071e3]">{t('contact.highlight')}</span>
          </h1>
          <p className="text-[24px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-3xl mx-auto font-medium">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Contact Info (flowing list) ── */}
      <section className="py-20 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">

            <div className="reveal opacity-0 space-y-12">
              <h2 className="text-[32px] font-semibold tracking-tight">{t('contact.info')}</h2>
              <div className="space-y-0 divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 py-8 first:pt-0 last:pb-0">
                    <div className="w-12 h-12 rounded-xl bg-[#0071e3]/10 dark:bg-[#0071e3]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#0071e3]" />
                    </div>
                    <div>
                      <p className="text-[12px] uppercase tracking-widest text-[#86868b] font-bold mb-1">{t(item.label)}</p>
                      {item.link ? (
                        <a href={item.link} className="text-[19px] font-semibold hover:text-[#0071e3] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[19px] font-semibold leading-snug">
                          {item.value.startsWith('hero.') ? t(item.value) : item.value}
                          {item.subvalue && <span className="block text-[15px] font-normal text-[#86868b] mt-1">{t(item.subvalue)}</span>}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 stagger-1 space-y-12">
              <h2 className="text-[32px] font-semibold tracking-tight">{t('contact.online')}</h2>
              <div className="space-y-0 divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {externalLinks.map((link, idx) => (
                  <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer"
                     className="group flex items-center gap-6 py-8 first:pt-0 last:pb-0">
                    <div className="w-12 h-12 rounded-xl bg-[#0071e3]/10 dark:bg-[#0071e3]/20 flex items-center justify-center flex-shrink-0">
                      <link.icon className="w-6 h-6 text-[#0071e3]" />
                    </div>
                    <span className="text-[19px] font-semibold group-hover:text-[#0071e3] transition-colors flex-1">{link.name}</span>
                    <ExternalLink className="w-5 h-5 text-[#d2d2d7] group-hover:text-[#0071e3] transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Academic Impact ── */}
      <section className="py-20 border-b border-black/[0.05] dark:border-white/[0.05]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: scholarData.citations, lbl: 'hero.stats.citations' },
              { val: scholarData.hIndex, lbl: 'hero.stats.hIndex' },
              { val: scholarData.publications, lbl: 'hero.stats.publications' },
              { val: scholarData.topJournals, lbl: 'publications.stats.topJournals' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-[48px] font-semibold tracking-tighter text-[#1d1d1f] dark:text-white">{stat.val}</div>
                <div className="text-[12px] uppercase tracking-widest text-[#86868b] font-bold">{t(stat.lbl)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[680px] mx-auto px-6 text-center space-y-8">
          <div className="reveal opacity-0 w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#2997ff]" />
          </div>
          <div className="reveal opacity-0 stagger-1 space-y-4">
            <h2 className="text-[40px] font-semibold tracking-tight">{t('contact.collaboration.title')}</h2>
            <p className="text-[19px] text-[#a1a1a6] leading-relaxed">{t('contact.collaboration.desc')}</p>
          </div>
          <div className="reveal opacity-0 stagger-2">
            <p className="text-[24px] font-semibold text-[#2997ff] mb-8">hongyuyu20@fudan.edu.cn</p>
            <Button asChild className="apple-button bg-[#0071e3] hover:bg-[#0077ed] text-white">
              <a href="mailto:hongyuyu20@fudan.edu.cn">
                <Mail className="w-5 h-5 mr-3" />
                {t('contact.collaboration.button')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
