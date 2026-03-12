import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, GraduationCap, ExternalLink, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Hongyu-yu', label: 'GitHub' },
  { icon: GraduationCap, href: 'https://scholar.google.com/citations?user=ES83JO4AAAAJ', label: 'Google Scholar' },
  { icon: ExternalLink, href: 'https://www.researchgate.net/profile/Hongyu-Yu-6', label: 'ResearchGate' },
  { icon: Mail, href: 'mailto:hongyuyu20@fudan.edu.cn', label: 'Email' },
];

const quickLinks = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.publications', href: '/publications' },
  { label: 'nav.research', href: '/research' },
  { label: 'nav.recruitment', href: '/recruitment' },
  { label: 'nav.contact', href: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] pt-20 pb-10">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          {/* Brand & Address */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[17px] font-semibold tracking-tight">Hongyu Yu (于宏宇)</h3>
            <p className="text-[14px] text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-sm">
              {t('hero.subtitle')}<br />
              {t('hero.department')}<br />
              {t('hero.university')}
            </p>
            <div className="flex items-center gap-2 text-[14px] text-[#86868b] dark:text-[#a1a1a6]">
              <MapPin className="w-4 h-4" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <link.icon className="w-4 h-4 text-[#424245] dark:text-[#d2d2d7]" />
                </a>
              ))}
            </div>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#424245] dark:text-[#d2d2d7] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-[14px] text-[#424245] dark:text-[#d2d2d7] hover:underline underline-offset-4"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#424245] dark:text-[#d2d2d7] mb-6">
              Contact
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-[12px] text-[#86868b] mb-1">Email</p>
                <a
                  href="mailto:hongyuyu20@fudan.edu.cn"
                  className="text-[14px] text-[#424245] dark:text-[#d2d2d7] hover:text-[#0071e3]"
                >
                  hongyuyu20@fudan.edu.cn
                </a>
              </div>
              <p className="text-[14px] text-[#86868b] leading-tight">
                {t('hero.location')}
              </p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-black/[0.08] dark:border-white/[0.08] pt-8">
          <p className="text-[12px] text-[#86868b] dark:text-[#a1a1a6]">
            Copyright © {currentYear} Hongyu Yu. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

