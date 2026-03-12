import { useEffect, useRef } from 'react';
import { Mail, Github, GraduationCap, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
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
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/30 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Postdoc Researcher</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Hongyu <span className="text-gradient">Yu</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 mt-4 font-light">
                于宏宇
              </p>
            </div>

            <div className="reveal opacity-0 stagger-1 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Postdoctoral Researcher at{' '}
                <span className="font-semibold text-blue-700">
                  Fritz Haber Institute, Max Planck Society
                </span>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ph.D. in Condensed Matter Physics from Fudan University. 
                Specializing in computational physics and machine learning methods 
                for ferroic materials research.
              </p>
            </div>

            <div className="reveal opacity-0 stagger-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Condensed Matter Physics</span>
              </div>
            </div>

            <div className="reveal opacity-0 stagger-3 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/25"
              >
                <a href="mailto:hongyuyu20@fudan.edu.cn">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 hover:border-blue-600 hover:text-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <a
                  href="https://github.com/Hongyu-yu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 stagger-4 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700">541</div>
                <div className="text-sm text-slate-500 mt-1">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700">12</div>
                <div className="text-sm text-slate-500 mt-1">h-index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700">22</div>
                <div className="text-sm text-slate-500 mt-1">i10-index</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image Placeholder */}
          <div className="reveal opacity-0 stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 transform rotate-6" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-2xl flex items-center justify-center border border-slate-200/50">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-white">HY</span>
                  </div>
                  <p className="text-slate-500 text-sm">Profile Photo</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-100">
                <span className="text-sm font-medium text-slate-700">AI for Science</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Ferroic Materials</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
