import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, GraduationCap, ExternalLink, Mail, Heart, MapPin } from 'lucide-react';

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
    <footer className="bg-slate-900 text-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">HY</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Hongyu Yu</h3>
                <p className="text-sm text-slate-400">于宏宇</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('hero.subtitle')}<br />
              {t('hero.department')}<br />
              {t('hero.university')}
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              {t('hero.location')}
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.info')}</h4>
            <div className="space-y-3 text-slate-400">
              <p className="text-sm">
                <span className="text-slate-300">{t('contact.labels.email')}:</span>
                <br />
                <a
                  href="mailto:hongyuyu20@fudan.edu.cn"
                  className="hover:text-white transition-colors"
                >
                  hongyuyu20@fudan.edu.cn
                </a>
              </p>
              <p className="text-sm">
                <span className="text-slate-300">{t('contact.labels.position')}:</span>
                <br />
                {t('hero.subtitle')}
                <br />
                {t('hero.department')}
                <br />
                {t('hero.university')}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} Hongyu Yu. {t('footer.rights')}
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
