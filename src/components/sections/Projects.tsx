'use client';
import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const projects = [
  {
    id: 1,
    title: "Panenku App",
    description:
      "End-to-end marketplace PWA for the agricultural sector — connecting farmers with buyers across Indonesia with real-time inventory tracking and optimized performance for diverse network conditions.",
    tags: ["PWA", "Laravel", "Vue.js", "MySQL"],
    size: "large",
    link: "https://github.com/aqmalio",
    year: "2025–2026",
    index: "01",
  },
  {
    id: 2,
    title: "Payment Gateway System",
    description:
      "Secure, efficient payment gateway integrations with end-to-end feature development ensuring optimal user experience and safe data exchange.",
    tags: ["Laravel", "PHP", "PostgreSQL", "REST API"],
    size: "small",
    link: "https://github.com/aqmalio",
    year: "2024",
    index: "02",
  },
  {
    id: 3,
    title: "Undang Pedia",
    description:
      "Led full technical development of a legislation reference platform from initial stage through launch. 1st Place Islamic Application Contest — Universitas Syiah Kuala, 2019.",
    tags: ["Laravel", "JavaScript", "MySQL"],
    size: "small",
    link: "https://github.com/aqmalio",
    year: "2020–2021",
    index: "03",
  },
];

function ProjectCard({
  project,
  i,
}: {
  project: (typeof projects)[0];
  i: number;
}) {
  const isLarge = project.size === "large";

  return (
    <ScrollReveal delay={i * 0.1} className={isLarge ? "md:col-span-2" : ""}>
      <SpotlightCard
        className={`group h-full rounded-2xl border border-[var(--border)] bg-surface p-6 flex flex-col justify-between transition-all duration-500 hover:border-[var(--border-hover)] ${
          isLarge ? "min-h-[320px]" : "min-h-[280px]"
        }`}
      >
        {/* Card top row */}
        <div className="flex items-start justify-between mb-8">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">
            {project.index}
          </span>
          <span className="font-mono text-[11px] text-fg-3">
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`font-display font-black text-fg tracking-tight mb-3 group-hover:text-fg transition-colors ${
              isLarge ? "text-3xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-fg-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between pt-6 mt-6 border-t border-[var(--border)]">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md font-mono text-[10px] border border-[var(--border)] text-fg-3 group-hover:border-[var(--border-hover)] transition-colors duration-300 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] hover:border-accent/50 hover:bg-accent/10 hover:text-accent text-fg-3 transition-all duration-200 flex-shrink-0 ml-3"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={14} />
          </a>
        </div>
      </SpotlightCard>
    </ScrollReveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 pb-6 border-b border-[var(--border)]">
            <div>
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
                Featured Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-fg tracking-tight">
                Projects I&apos;ve Built
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-3 hidden md:block">
              {projects.length} projects
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
