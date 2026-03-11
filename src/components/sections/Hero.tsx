'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TextReveal } from '@/components/ui/TextReveal';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Available for freelance projects
        </motion.div>

        {/* Headline */}
        <TextReveal
          text="Web App Engineer Crafting Scalable Digital Experiences."
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-50 leading-tight mb-6 justify-center"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          5+ years of experience building scalable web applications, specializing in{' '}
          <span className="text-indigo-400 font-semibold">Laravel</span> &{' '}
          <span className="text-violet-400 font-semibold">Modern JavaScript</span>. Based in Indonesia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              View My Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-200"
            >
              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/aqmalio', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/aqmalio', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:aqmal2399@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
