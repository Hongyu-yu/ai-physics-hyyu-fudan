import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.publications', href: '/publications' },
  { label: 'nav.research', href: '/research' },
  { label: 'nav.recruitment', href: '/recruitment' },
  { label: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center transition-all duration-500 ${
          isScrolled
            ? 'glass-nav border-b border-black/[0.08] dark:border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            Hongyu Yu
          </Link>

          {/* Desktop nav links - Centered like apple.com */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[12px] tracking-tight transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-[#1d1d1f] dark:text-white font-medium'
                    : 'text-[#1d1d1f]/70 dark:text-white/70 hover:text-[#1d1d1f] dark:hover:text-white'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="text-[#1d1d1f]/80 dark:text-white/80 hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              className="text-[#1d1d1f]/80 dark:text-white/80 hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="lg:hidden text-[#1d1d1f] dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-black transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="pt-24 px-10 space-y-6">
          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[28px] font-semibold text-[#1d1d1f] dark:text-white tracking-tight animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

