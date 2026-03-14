'use client';
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const projects = [
  {
    id: 1,
    title: "Panenin App",
    description:
      "Panenin is a specialized grocery e-commerce platform built using Laravel and Vue.js. The project features two sides: a Progressive Web App (PWA) for customers, and a fully integrated Laravel dashboard for administrators and outlet staff. The two sides communicate with a REST API I built.",
    tags: [
      "PWA",
      "Laravel",
      "Vue.js",
      "MySQL",
      "REST API",
      "PHP",
      "Typescript",
      "Tailwind CSS",
    ],
    size: "large",
    // Replace with your actual screenshot: /images/projects/panenin.png
    image: "/images/panenin.png",
    gradient: "from-[#16350d] via-[#1e4d12] to-[#0d2408]",
    accentColor: "#4ade80",
    link: "https://github.com/aqmalio",
    year: "2025–2026",
    index: "01",
  },
  {
    id: 2,
    title: "MJO DigitalCrafts",
    description:
      "MJO DigitalCrafts Platform Meta Ads for whitelist Account service, integration with Meta API and Payment Gateway Services. Built with Laravel, MySQL, and REST API for seamless account management and payment processing.",
    tags: [
      "Laravel",
      "PHP",
      "Payment Gateway",
      "Meta API",
      "MySQL",
      "REST API",
      "Redis",
      "Tailwind CSS",
    ],
    size: "small",
    image: "/images/mjo.png",
    gradient: "from-[#0d1b35] via-[#1a2f5e] to-[#0a1528]",
    accentColor: "#3b82f6",
    link: "https://github.com/aqmalio",
    year: "2024",
    index: "02",
  },
  {
    id: 3,
    title: "STEVY",
    description:
      "The Electronic Verification and Validation System for Yudisium is an application designed to facilitate the verification and validation process for students seeking to graduate from their university. Integration with Government High Education Service.",
    tags: ["Laravel", "JavaScript", "MySQL", "REST API", "PHP"],
    size: "small",
    image: "/images/stevy.png",
    gradient: "from-[#2a1a08] via-[#3d2810] to-[#1a0f04]",
    accentColor: "#f59e0b",
    link: "https://github.com/aqmalio",
    year: "2020–2021",
    index: "03",
  },
];

/** Renders the project preview image or a styled gradient fallback */
function ProjectImage({
  project,
  className,
}: {
  project: (typeof projects)[0];
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showFallback = !project.image || imgError;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showFallback ? (
        /* Gradient placeholder with decorative elements */
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
        >
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          {/* Glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: project.accentColor }}
          />
          {/* Project name watermark */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <span
              className="font-display font-black text-center leading-none tracking-tighter opacity-10 select-none"
              style={{
                fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
                color: project.accentColor,
              }}
            >
              {project.title.toUpperCase()}
            </span>
          </div>
          {/* Corner accent */}
          <div
            className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
            style={{
              background: `radial-gradient(circle at 100% 100%, ${project.accentColor}, transparent 70%)`,
            }}
          />
          {/* "Screenshot coming soon" badge */}
          <div className="absolute bottom-3 left-3">
            <span
              className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded border opacity-40"
              style={{ borderColor: project.accentColor, color: project.accentColor }}
            >
              Preview
            </span>
          </div>
        </div>
      ) : (
        <Image
          src={project.image!}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}

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
        className={`group h-full rounded-2xl border border-[var(--border)] bg-surface overflow-hidden flex transition-all duration-500 hover:border-[var(--border-hover)] ${
          isLarge
            ? "flex-col md:flex-row min-h-[320px]"
            : "flex-col min-h-[320px]"
        }`}
      >
        {/* ── Image area ── */}
        {isLarge ? (
          /* Large card: square image on the right */
          <ProjectImage
            project={project}
            className="relative aspect-square w-full md:w-[45%] flex-shrink-0 border-b md:border-b-0 md:border-l border-[var(--border)]"
          />
        ) : (
          /* Small card: square image at top */
          <ProjectImage
            project={project}
            className="relative aspect-square w-full flex-shrink-0 border-b border-[var(--border)]"
          />
        )}

        {/* ── Text content (reversed order for large: content left, image right) ── */}
        <div
          className={`flex flex-col justify-between p-6 flex-1 ${
            isLarge ? "md:order-first" : ""
          }`}
        >
          {/* Top row */}
          <div>
            <div className="flex items-start justify-between mb-5">
              <span className="font-mono text-[11px] text-accent tracking-[0.2em]">
                {project.index}
              </span>
              <span className="font-mono text-[11px] text-fg-3">
                {project.year}
              </span>
            </div>
            <h3
              className={`font-display font-black text-fg tracking-tight mb-3 group-hover:text-fg transition-colors ${
                isLarge ? "text-2xl md:text-3xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="text-fg-2 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-end justify-between pt-5 mt-5 border-t border-[var(--border)]">
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] hover:border-accent/50 hover:bg-accent/10 hover:text-accent text-fg-3 transition-all duration-200 flex-shrink-0 ml-3"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
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
