'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const experiences = [
  {
    period: '2023 — Present',
    role: 'Senior Full-Stack Engineer',
    company: 'Self-Employed / Freelance',
    description:
      'Building scalable web platforms, PWA applications, and REST APIs for clients across Southeast Asia.',
    tech: ['Laravel', 'Vue.js', 'React', 'Docker'],
  },
  {
    period: '2021 — 2023',
    role: 'Full-Stack Developer',
    company: 'Tech Startup',
    description:
      'Led development of e-commerce and marketplace platforms, improving performance by 40%.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'AWS'],
  },
  {
    period: '2019 — 2021',
    role: 'Backend Developer',
    company: 'Web Agency',
    description:
      'Developed REST APIs and backend systems for various client projects.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Redis'],
  },
];

function TimelineEntry({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Dot */}
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/50" />

        <div className="glass rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/8 whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
              Career Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative">
          {/* Timeline line track */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-white/5" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[5px] top-0 w-px bg-gradient-to-b from-indigo-500 to-violet-500 origin-top"
            style={{ height: lineHeight }}
          />

          <div>
            {experiences.map((exp, index) => (
              <TimelineEntry key={`${exp.period}-${exp.role}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
