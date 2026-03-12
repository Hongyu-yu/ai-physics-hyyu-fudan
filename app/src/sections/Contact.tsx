import { useEffect, useRef } from 'react';
import { Mail, MapPin, Building2, Github, GraduationCap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hongyuyu20@fudan.edu.cn',
    link: 'mailto:hongyuyu20@fudan.edu.cn',
  },
  {
    icon: Building2,
    label: 'Current Position',
    value: 'Postdoc Researcher',
    subvalue: 'Fritz Haber Institute, Max Planck Society',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Berlin, Germany',
  },
];

const externalLinks = [
  {
    icon: GraduationCap,
    name: 'Google Scholar',
    description: 'View citation metrics and publications',
    link: 'https://scholar.google.com/citations?user=ES83JO4AAAAJ',
  },
  {
    icon: Github,
    name: 'GitHub',
    description: 'Open source projects and code',
    link: 'https://github.com/Hongyu-yu',
  },
  {
    icon: ExternalLink,
    name: 'ResearchGate',
    description: 'Research profile and network',
    link: 'https://www.researchgate.net/profile/Hongyu-Yu-6',
  },
];

export default function Contact() {
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
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research discussions, 
            or any inquiries about my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="reveal opacity-0 stagger-1 space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:border-blue-300 transition-colors duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-slate-900">
                          {item.value}
                        </p>
                      )}
                      {item.subvalue && (
                        <p className="text-sm text-slate-600 mt-1">
                          {item.subvalue}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Action */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">
                Interested in Collaboration?
              </h4>
              <p className="text-blue-100 text-sm mb-4">
                I am always open to discussing new research ideas, potential collaborations, 
                or opportunities in computational materials science and AI for Science.
              </p>
              <Button
                asChild
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                <a href="mailto:hongyuyu20@fudan.edu.cn">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>

          {/* External Links */}
          <div className="reveal opacity-0 stagger-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Find Me Online
            </h3>
            <div className="space-y-4">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <link.icon className="w-7 h-7 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>

            {/* Academic Profile Summary */}
            <div className="mt-8 p-6 bg-slate-900 rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-4">
                Academic Profile
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">541</div>
                  <div className="text-xs text-slate-400">Citations</div>
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <div className="text-xs text-slate-400">h-index</div>
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">21</div>
                  <div className="text-xs text-slate-400">Publications</div>
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-xs text-slate-400">PRL/AM Papers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
