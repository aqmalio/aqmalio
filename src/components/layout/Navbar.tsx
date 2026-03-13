'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--border)] bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg font-black tracking-tight text-fg"
        >
          Aqmalio<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-fg-2 hover:text-fg transition-colors duration-200 group"
            >
              <span className="font-mono text-accent text-[10px] mr-1.5 opacity-40">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <MagneticButton>
          <a
            href="mailto:aqmal2399@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-200"
          >
            Hire Me
          </a>
        </MagneticButton>
      </div>
    </motion.header>
  );
}
