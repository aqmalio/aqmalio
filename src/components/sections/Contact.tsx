'use client';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "aqmal2399@gmail.com",
    href: "mailto:aqmal2399@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 895 6115 80713",
    href: "https://wa.me/6289561158071",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aqmalio",
    href: "https://linkedin.com/in/aqmalio",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aqmalio",
    href: "https://github.com/aqmalio",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-14 pb-6 border-b border-[var(--border)]">
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-display text-5xl md:text-7xl font-black text-fg tracking-tight leading-none">
                Let&apos;s
                <br />
                Connect.
              </h2>
              <p className="text-fg-2 text-sm max-w-xs leading-relaxed">
                Available for freelance projects and full-time roles. Let&apos;s
                build something great together.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-14 flex">
            <MagneticButton>
              <a
                href="mailto:aqmal2399@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-accent/20"
              >
                <Mail size={17} />
                Send an Email
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-hover)] hover:bg-surface transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-200">
                    <Icon size={15} />
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-fg-3 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
                <p className="font-mono text-[10px] text-fg-3 uppercase tracking-widest mb-1.5">
                  {label}
                </p>
                <p className="text-sm font-medium text-fg truncate">{value}</p>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
