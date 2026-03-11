'use client';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aqmal2399@gmail.com',
    href: 'mailto:aqmal2399@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aqmalio',
    href: 'https://linkedin.com/in/aqmalio',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/aqmalio',
    href: 'https://github.com/aqmalio',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Available for freelance projects and full-time opportunities. Let&apos;s build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton>
              <a
                href="mailto:aqmal2399@gmail.com"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/25"
              >
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-200">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-slate-500 mb-1">{label}</p>
                <p className="text-sm font-medium text-white truncate">{value}</p>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
