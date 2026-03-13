'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const experiences = [
  {
    period: "Oct 2025 — Mar 2026",
    role: "Full Stack Developer",
    company: "Astacode — Panenku App",
    description:
      "Built an end-to-end marketplace platform with Laravel backend and Vue.js PWA. Delivered scalable real-time inventory tracking and optimized frontend performance for diverse network conditions.",
    tech: ["Laravel", "Vue.js", "PWA", "MySQL"],
  },
  {
    period: "Oct 2024 — Dec 2024",
    role: "Full Stack Developer",
    company: "GeekGarden",
    description:
      "Developed application functionality with secure and efficient payment gateway integrations. End-to-end feature development ensuring optimal user experience.",
    tech: ["Laravel", "PHP", "PostgreSQL", "REST API"],
  },
  {
    period: "Mar 2023 — Aug 2023",
    role: "Back End Developer",
    company: "Arktivak",
    description:
      "Responsible for building web applications and API architectures. Integrated payment gateways and ensured secure data exchange within the system.",
    tech: ["Laravel", "PHP", "MySQL", "Redis"],
  },
  {
    period: "Sep 2021 — Feb 2022",
    role: "Full Stack Developer",
    company: "Wamplo Software",
    description:
      "Developed internal information systems and managed backend infrastructure. Built APIs and backend infrastructure used by mobile applications.",
    tech: ["Laravel", "JavaScript", "MySQL", "REST API"],
  },
  {
    period: "Jun 2020 — Jul 2021",
    role: "Founder & Lead Engineer",
    company: "Undang Pedia",
    description:
      "Led full technical development of the platform from initial stage through launch. Won 1st Place Islamic Application Contest — Universitas Syiah Kuala, 2019.",
    tech: ["Laravel", "PHP", "JavaScript", "MySQL"],
  },
  {
    period: "Feb 2017 — Jan 2020",
    role: "Head of IT Operations",
    company: "Aceh International School",
    description:
      "Managed IT infrastructure and overall school information system operations.",
    tech: ["Linux", "Networking", "IT Systems"],
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
      <div className="relative pl-10 pb-10 last:pb-0 my-4">
        {/* Index number as marker */}
        <div className="absolute left-1.5 top-0.5 font-mono text-[11px] text-accent leading-none tracking-wider">
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
