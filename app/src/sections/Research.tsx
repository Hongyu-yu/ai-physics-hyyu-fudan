import { useEffect, useRef } from 'react';
import { Brain, Atom, Zap, Layers, Cpu, Sparkles } from 'lucide-react';

const researchAreas = [
  {
    icon: Brain,
    title: 'Machine Learning Potentials',
    subtitle: 'Neural Network Interatomic Potentials',
    description: 'Developing state-of-the-art machine learning potentials for magnetic materials, including SpinGNN and SpinGNN++ frameworks that incorporate physical symmetries and time-reversal equivariance.',
    achievements: [
      'SpinGNN: Graph neural network potential for magnetic materials',
      'SpinGNN++: Time-reversal equivariant neural network potential',
      'Reciprocal space neural network for long-range interactions',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Atom,
    title: 'Ferroelectric Materials',
    subtitle: 'Novel Ferroelectric Phenomena',
    description: 'Investigating unconventional ferroelectricity in emerging materials, including sliding ferroelectrics, elemental ferroelectrics, and HfO₂-based ferroelectrics for next-generation memory devices.',
    achievements: [
      'Prediction of room-temperature ferroelectricity in subnano silicon films',
      'Domain wall dynamics in HfO₂-based ferroelectrics',
      'Sliding ferroelectric switching mechanisms',
    ],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Zap,
    title: 'Multiferroic Materials',
    subtitle: 'Magnetoelectric Coupling',
    description: 'Exploring multiferroic materials and magnetoelectric coupling phenomena, particularly in twisted van der Waals materials and moiré superlattices.',
    achievements: [
      'Moiré-induced magnetoelectricity in twisted bilayer NiI₂',
      'Spin-lattice coupled machine learning simulations',
      'Light-induced magnetic phase transitions',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Layers,
    title: 'Computational Methods',
    subtitle: 'First-Principles & Beyond',
    description: 'Developing and applying advanced computational methods, from first-principles calculations to large-scale machine learning simulations, for materials discovery and property prediction.',
    achievements: [
      'High-throughput structure searching methods',
      'Hybrid machine learning for effective Hamiltonians',
      'Tensor prediction framework based on GNNs',
    ],
    color: 'from-teal-500 to-teal-600',
  },
];

const softwareProjects = [
  {
    icon: Cpu,
    name: 'SpinGNN',
    description: 'Graph neural network potential for magnetic materials with spin-dependent interactions',
    status: 'Open Source',
  },
  {
    icon: Sparkles,
    name: 'PASP',
    description: 'Property Analysis and Simulation Package - Contributing to the deep learning spin Hamiltonian module',
    status: 'Commercial Software',
  },
];

export default function Research() {
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
      id="research"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Research <span className="text-gradient">Areas</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interdisciplinary research at the intersection of computational physics, 
            materials science, and artificial intelligence
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="reveal opacity-0 group relative bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${area.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {area.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {area.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-700">
                  Key Achievements:
                </p>
                <ul className="space-y-2">
                  {area.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Software Section */}
        <div className="reveal opacity-0">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Software & Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softwareProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl p-6 text-white hover:bg-slate-800 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <span className="text-xs px-2 py-1 bg-blue-600/30 text-blue-300 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI for Science Lab */}
        <div className="reveal opacity-0 mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-2xl font-bold mb-3">
            AI for Materials Science Laboratory
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Contributing to sci-ai.cn - a platform integrating AI computational tools 
            for materials science research, promoting the application of artificial 
            intelligence in condensed matter physics.
          </p>
          <a
            href="https://sci-ai.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
          >
            Visit Platform
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
