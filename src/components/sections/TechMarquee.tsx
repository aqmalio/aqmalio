'use client';
import { motion } from 'framer-motion';

const technologies = [
  "Laravel",
  "Vue.js",
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "Linux",
  "PostgreSQL",
  "Redis",
  "MySQL",
  "AWS",
  "PHP",
];

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 mx-2 border border-[var(--border)] rounded-full whitespace-nowrap group hover:border-[var(--border-hover)] transition-all duration-200">
      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
      <span className="font-mono text-sm text-fg-3 group-hover:text-fg-2 tracking-wide transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-12 border-y border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-3"
        >
          Technologies
        </motion.p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="animate-marquee flex items-center">
          {[...technologies, ...technologies].map((tech, idx) => (
            <TechItem key={`${tech}-${idx}`} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
