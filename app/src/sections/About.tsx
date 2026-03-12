import { useEffect, useRef } from 'react';
import { BookOpen, Award, Users, Code2, Microscope, Lightbulb } from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. in Condensed Matter Physics',
    institution: 'Fudan University',
    period: '2020 - 2025',
    description: 'Dissertation: Machine Learning Methods for Ferroic Materials',
  },
  {
    degree: 'B.S. in Physics (Boling Class)',
    institution: 'Nankai University',
    period: '2016 - 2020',
    description: 'Honors program in physics with focus on theoretical physics',
  },
];

const researchInterests = [
  {
    icon: Microscope,
    title: 'Machine Learning Potentials',
    description: 'Developing neural network-based interatomic potentials for magnetic and ferroelectric materials',
  },
  {
    icon: Lightbulb,
    title: 'Ferroic Materials',
    description: 'Computational study of ferroelectric and multiferroic materials for next-generation devices',
  },
  {
    icon: Code2,
    title: 'AI for Science',
    description: 'Applying deep learning methods to accelerate materials discovery and simulation',
  },
];

const highlights = [
  { icon: BookOpen, value: '21', label: 'Publications' },
  { icon: Award, value: '13', label: 'First/Co-first Author' },
  { icon: Users, value: '541', label: 'Total Citations' },
];

export default function About() {
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
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Computational physicist passionate about leveraging machine learning 
            to understand and design novel functional materials
          </p>
        </div>

        {/* Research Interests */}
        <div className="reveal opacity-0 stagger-1 mb-20">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
            Research Interests
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {researchInterests.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 border border-slate-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Highlights Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="reveal opacity-0 stagger-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-blue-200 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-700 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="reveal opacity-0 stagger-3">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Research Highlights
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                >
                  <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Published 2 papers in <span className="text-white font-medium">Physical Review Letters</span> (2025)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Published 1 paper in <span className="text-white font-medium">Advanced Materials</span> (2025)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Developed <span className="text-white font-medium">SpinGNN++</span> - A comprehensive magnetic machine learning potential
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    Contributed to <span className="text-white font-medium">PASP</span> software package development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
