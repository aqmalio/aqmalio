'use client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const words = ["Crafting", "Scalable", "Web Apps."];

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
      {/* Warm ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-accent/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[400px] h-[400px] bg-[#F5C842]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top meta row */}
        <div className="flex items-start justify-between mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CB85C] animate-pulse" />
            <span className="font-mono text-[11px] text-fg-3 uppercase tracking-[0.22em]">
              Available for hire
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden sm:flex flex-col items-end gap-0.5"
          >
            <span className="font-mono text-[10px] text-fg-3 uppercase tracking-[0.22em]">
              Based in
            </span>
            <span className="text-sm font-medium text-fg-2">
              Aceh, Indonesia
            </span>
          </motion.div>
        </div>

        {/* Editorial headline — staggered word reveal */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-8"
          >
            — Laravel Expert & Web App Engineer
          </motion.p>

          <div className="space-y-1">
            {words.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.18 + i * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-display font-black tracking-tighter leading-[0.88] select-none ${
                    i === 1
                      ? "italic text-fg-2 text-[clamp(2.8rem,8.5vw,8rem)]"
                      : "text-fg text-[clamp(3rem,9vw,8.5rem)]"
                  }`}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-8 border-t border-[var(--border)]"
        >
          <p className="text-fg-2 text-sm max-w-xs leading-relaxed">
            Deep expertise in{" "}
            <span className="text-fg font-medium">Laravel, JavaScript</span>,{" "}
            <span className="text-fg font-medium">full-stack development</span>,
            and payment gateway integrations. 5 years building things that
            scale.
          </p>

          <div className="flex items-center gap-3">
            <MagneticButton>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-accent/20"
              >
                View Work
                <ArrowDownRight size={14} />
              </a>
            </MagneticButton>

            <div className="flex items-center gap-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/aqmalio",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/aqmalio",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:aqmal2399@gmail.com",
                  label: "Email",
                },
                {
                  icon: PhoneCall,
                  href: "http://wa.me/62895611580713",
                  label: "Phone",
                },
              ].map(({ icon: Icon, href, label }) => (
                <MagneticButton key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] hover:border-accent/40 hover:bg-accent/8 text-fg-3 hover:text-fg transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={15} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-fg-3"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDownRight size={14} />
        </motion.div>
        <span
          className="font-mono text-[9px] uppercase tracking-[0.25em]"
          style={{ writingMode: "vertical-lr" }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  );
}
