'use client';
import { motion } from 'framer-motion';

const technologies: { name: string; color: string }[] = [
  { name: 'PHP',          color: '#7A86B8' },
  { name: 'Laravel',      color: '#FF2D20' },
  { name: 'Node.js',      color: '#68A063' },
  { name: 'Express',      color: '#909090' },
  { name: 'JavaScript',   color: '#F7DF1E' },
  { name: 'TypeScript',   color: '#3178C6' },
  { name: 'Vue.js',       color: '#42B883' },
  { name: 'React',        color: '#61DAFB' },
  { name: 'Next.js',      color: '#EFEFEF' },
  { name: 'Svelte',       color: '#FF3E00' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'Docker',       color: '#2496ED' },
  { name: 'Linux',        color: '#FCC624' },
  { name: 'Git',          color: '#F05032' },
  { name: 'AWS',          color: '#FF9900' },
  { name: 'Google Cloud', color: '#4285F4' },
  { name: 'Cloudflare',   color: '#F48120' },
  { name: 'PostgreSQL',   color: '#336791' },
  { name: 'MySQL',        color: '#4479A1' },
  { name: 'MongoDB',      color: '#47A248' },
  { name: 'Redis',        color: '#DC382D' },
];

function TechItem({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2.5 px-5 py-2.5 mx-2 border border-[var(--border)] rounded-full whitespace-nowrap group transition-all duration-300 cursor-default"
      style={
        {
          '--tech-color': color,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = `${color}55`;
        el.style.backgroundColor = `${color}0d`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '';
        el.style.backgroundColor = '';
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
        style={{ backgroundColor: color }}
      />
      <span
        className="font-mono text-sm text-fg-3 tracking-wide transition-colors duration-200 group-hover:text-fg"
        style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
      >
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
            <TechItem key={`${tech.name}-${idx}`} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
