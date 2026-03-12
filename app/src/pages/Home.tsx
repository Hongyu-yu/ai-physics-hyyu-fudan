import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Github, GraduationCap, MapPin, Building2, ArrowRight, Users, BookOpen, Quote, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Scholar data - will be updated by GitHub Actions
const scholarData = {
  citations: 541,
  hIndex: 12,
  i10Index: 22,
  publications: 21,
};

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/30 dark:from-blue-500/5 to-transparent rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto section-padding py-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="reveal opacity-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>{t('hero.subtitle')}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Hongyu <span className="text-gradient">Yu</span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mt-4 font-light">
                  {t('hero.title')}
                </p>
              </div>

              <div className="reveal opacity-0 stagger-1 space-y-4">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t('hero.department')}<br />
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    {t('hero.university')}
                  </span>
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              <div className="reveal opacity-0 stagger-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{t('hero.location')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{t('hero.field')}</span>
                </div>
              </div>

              <div className="reveal opacity-0 stagger-3 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/25"
                >
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    {t('hero.contactBtn')}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <a
                    href="https://github.com/Hongyu-yu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t('hero.githubBtn')}
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="reveal opacity-0 stagger-4 grid grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.citations}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('hero.stats.citations')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.hIndex}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('hero.stats.hIndex')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.i10Index}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('hero.stats.i10Index')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">{scholarData.publications}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('hero.stats.publications')}</div>
                </div>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="reveal opacity-0 stagger-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 transform rotate-6 animate-pulse-glow" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-2xl flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 animate-float">
                      <span className="text-5xl font-bold text-white">HY</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Profile Photo</p>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-4 py-2 border border-slate-100 dark:border-slate-700 animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI for Science</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-4 py-2 border border-slate-100 dark:border-slate-700 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Ferroic Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/publications">
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {t('nav.publications')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {scholarData.publications} publications, {scholarData.citations} citations
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                    View All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/research">
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                    {t('nav.research')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    ML potentials, ferroic materials, computational methods
                  </p>
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/recruitment">
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                    <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {t('nav.recruitment')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    PhD and Postdoc positions available
                  </p>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Recent <span className="text-gradient">Highlights</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">PRL 2025</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Prediction of Room Temperature Ferroelectricity in Subnano Silicon Thin Films
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">PRL 2025</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Moiré-Induced Magnetoelectricity in Twisted Bilayer NiI₂
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-400">AM 2025</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Recent Advances in Unconventional Ferroelectrics and Multiferroics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
