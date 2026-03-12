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
      {/* ── Page Header ── */}
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

      {/* ── Main Layout ── */}
      <section className="py-20 bg-[#f5f5f7] dark:bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="reveal opacity-0 stagger-1 space-y-8">
              <h2 className="text-[32px] font-semibold tracking-tight">Direct Channels</h2>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="apple-card p-10 bg-white dark:bg-[#1c1c1e] flex items-center gap-8">
                    <div className="w-16 h-16 rounded-3xl bg-[#f5f5f7] dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-8 h-8 text-[#0071e3]" />
                    </div>
                    <div>
                      <p className="text-[12px] uppercase tracking-widest text-[#86868b] font-bold mb-1">{t(item.label)}</p>
                      {item.link ? (
                        <a href={item.link} className="text-[21px] font-semibold hover:text-[#0071e3] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[21px] font-semibold leading-snug">
                          {item.value.startsWith('hero.') ? t(item.value) : item.value}
                          {item.subvalue && <span className="block text-[15px] font-normal text-[#86868b] mt-1">{t(item.subvalue)}</span>}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="apple-card p-12 bg-[#0071e3] text-white space-y-6">
                <h3 className="text-[28px] font-semibold">{t('contact.collaboration.title')}</h3>
                <p className="text-[18px] text-white/80 leading-relaxed">{t('contact.collaboration.desc')}</p>
                <Button asChild className="apple-button h-14 px-8 bg-white text-[#0071e3] hover:bg-white/90">
                  <a href="mailto:hongyuyu20@fudan.edu.cn">
                    <Mail className="w-5 h-5 mr-3" />
                    {t('contact.collaboration.button')}
                  </a>
                </Button>
              </div>
            </div>

            <div className="reveal opacity-0 stagger-2 space-y-8">
              <h2 className="text-[32px] font-semibold tracking-tight">Digital Presence</h2>
              <div className="grid gap-4">
                {externalLinks.map((link, idx) => (
                  <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer" 
                     className="group apple-card p-8 bg-white dark:bg-[#1c1c1e] flex items-center justify-between hover:bg-[#f5f5f7] dark:hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <link.icon className="w-7 h-7 text-[#0071e3]" />
                      </div>
                      <div>
                        <h4 className="text-[21px] font-semibold mb-1">{link.name}</h4>
                        <p className="text-[14px] text-[#86868b]">View full scientific portfolio</p>
                      </div>
                    </div>
                    <ExternalLink className="w-6 h-6 text-[#d2d2d7] group-hover:text-[#0071e3] transition-colors" />
                  </a>
                ))}
              </div>

              <div className="apple-card p-12 bg-black text-white">
                <h3 className="text-[24px] font-semibold mb-8">Academic Impact</h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { val: scholarData.citations, lbl: 'hero.stats.citations' },
                    { val: scholarData.hIndex, lbl: 'hero.stats.hIndex' },
                    { val: scholarData.publications, lbl: 'hero.stats.publications' },
                    { val: scholarData.topJournals, lbl: 'PRL/AM Papers' },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-[40px] font-semibold tracking-tighter text-[#2997ff]">{stat.val}</div>
                      <div className="text-[11px] uppercase tracking-widest text-[#86868b] font-bold">{typeof stat.lbl === 'string' && stat.lbl.includes('.') ? t(stat.lbl) : stat.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

