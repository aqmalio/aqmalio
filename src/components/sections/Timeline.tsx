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
      <div className="relative pl-10 pb-10 last:pb-0">
        {/* Index number as marker */}
        <div className="absolute left-0 top-0.5 font-mono text-[11px] text-accent leading-none tracking-wider">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-hover)] hover:bg-surface transition-all duration-400 group">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display text-xl font-black text-fg tracking-tight group-hover:text-fg transition-colors">
                {exp.role}
              </h3>
              <p className="text-accent text-sm font-medium mt-0.5">
                {exp.company}
              </p>
            </div>
            <span className="font-mono text-[11px] text-fg-3 bg-surface px-3 py-1.5 rounded-full border border-[var(--border)] whitespace-nowrap self-start">
              {exp.period}
            </span>
          </div>
          <p className="text-fg-2 text-sm leading-relaxed mb-5">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md font-mono text-[10px] bg-accent/8 text-accent border border-accent/20 tracking-wide"
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 pb-6 border-b border-[var(--border)]">
            <div>
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
                Career Path
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-fg tracking-tight">
                Experience
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-3 hidden md:block">
              {experiences.length} roles
            </span>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative">
          {/* Timeline line track */}
          <div className="absolute left-[3px] top-0 bottom-0 w-px bg-[var(--border)]" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[3px] top-0 w-px bg-gradient-to-b from-accent to-[#F5C842] origin-top"
            style={{ height: lineHeight }}
          />

          <div>
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={`${exp.period}-${exp.role}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
