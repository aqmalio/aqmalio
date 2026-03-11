'use client';
import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'Panenku App',
    description:
      'A PWA Marketplace with mobile-first focus. Connecting farmers with buyers across Indonesia with real-time features and offline support.',
    tags: ['PWA', 'Laravel', 'Vue.js', 'MySQL'],
    size: 'large',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    link: '#',
    year: '2023',
  },
  {
    id: 2,
    title: 'REST API Platform',
    description:
      'Scalable RESTful API system with Laravel, OAuth2, rate limiting, and comprehensive documentation.',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Redis'],
    size: 'small',
    gradient: 'from-violet-500/20 to-purple-500/20',
    link: '#',
    year: '2022',
  },
  {
    id: 3,
    title: 'Real-time Dashboard',
    description:
      'Admin dashboard with real-time analytics, WebSocket integration, and interactive charts.',
    tags: ['React', 'Next.js', 'WebSocket', 'TypeScript'],
    size: 'small',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    link: '#',
    year: '2023',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isLarge = project.size === 'large';

  return (
    <ScrollReveal delay={index * 0.1} className={isLarge ? 'md:col-span-2' : ''}>
      <SpotlightCard className="group h-full rounded-2xl border border-white/8 bg-white/3 p-6 flex flex-col justify-between min-h-[280px] hover:border-white/15 transition-all duration-300">
        {/* Mock-up placeholder */}
        <div
          className={`relative w-full rounded-xl bg-gradient-to-br ${project.gradient} mb-5 overflow-hidden flex items-center justify-center`}
          style={{ height: isLarge ? '200px' : '140px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative z-10 text-center px-4">
            <div className="text-4xl font-black text-white/10 select-none tracking-tighter">
              {project.title.toUpperCase()}
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-white/5" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-white/5" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <span className="text-xs text-slate-600 font-mono">{project.year}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md text-xs font-medium border border-white/8 bg-white/5 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 text-slate-600 transition-all duration-200 flex-shrink-0 ml-2"
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
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Projects I&apos;ve Built
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
