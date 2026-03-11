'use client';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Laravel', icon: '🔴' },
  { name: 'Vue.js', icon: '🟢' },
  { name: 'React', icon: '🔵' },
  { name: 'Next.js', icon: '⬛' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Linux', icon: '🐧' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Redis', icon: '🔴' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'AWS', icon: '☁️' },
  { name: 'PHP', icon: '🐘' },
];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/8 bg-white/3 text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200 whitespace-nowrap mx-3">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-slate-600"
        >
          Technologies I Work With
        </motion.p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center">
          {[...technologies, ...technologies].map((tech, idx) => (
            <TechItem key={`${tech.name}-${idx}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
