"use client";
import { ExternalLink, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const certifications = [
  {
    title: "Software Development",
    issuer: "BNSP",
    fullIssuer: "Badan Nasional Sertifikasi Profesi",
    year: "2019",
    color: "#E8342A",
    href: "https://www.linkedin.com/in/aqmalio/details/certifications/",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia",
    fullIssuer: "Dicoding Indonesia",
    year: "2023",
    color: "#FF9900",
    href: "https://www.dicoding.com/certificates/0LZ0QN2MNZ65",
  },
  {
    title: "Progressive Web Apps (PWA)",
    issuer: "Dicoding Academy",
    fullIssuer: "Dicoding Academy",
    year: "2020",
    color: "#4FC3F7",
    href: "https://www.dicoding.com/certificates/QNVP7D3QVXR0",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    fullIssuer: "Google Cloud",
    year: "2020",
    color: "#4285F4",
    href: "https://www.skills.google/public_profiles/a6178f4a-27cb-4f78-a465-2791cf2f7e0a/badges/396055",
  },
  {
    title: "Insights from Data with BigQuery",
    issuer: "Google Cloud",
    fullIssuer: "Google Cloud",
    year: "2020",
    color: "#4285F4",
    href: "https://www.skills.google/public_profiles/a6178f4a-27cb-4f78-a465-2791cf2f7e0a/badges/393948",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    fullIssuer: "HackerRank",
    year: "2021",
    color: "#2EC866",
    href: "https://www.hackerrank.com/certificates/807996f96611",
  },
  {
    title: "Basic Cyber Security",
    issuer: "ID-Networkers",
    fullIssuer: "ID-Networkers",
    year: "2025",
    color: "#E8342A",
    href: "https://lms.idn.id/certificates/sertifikat-cyber-security-dasar/?course_id=13888&cert-nonce=898b846258",
  },
];

const awards = [
  {
    title: "1st Place — Web Design & Development",
    body: "LKS Aceh · Kemendikbud",
    year: "2016",
  },
  {
    title: "Finalist — LKS Nasional XXV",
    body: "National Student Competency Competition",
    year: "2017",
  },
  {
    title: "1st Place — Islamic Application Contest",
    body: "Universitas Syiah Kuala",
    year: "2019",
  },
];

function CertCard({
  cert,
  i,
}: {
  cert: (typeof certifications)[0];
  i: number;
}) {
  return (
    <ScrollReveal delay={i * 0.07}>
      <a
        href={cert.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4 p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300"
        style={
          {
            "--cert-color": cert.color,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = `${cert.color}44`;
          el.style.backgroundColor = `${cert.color}08`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "";
          el.style.backgroundColor = "";
        }}
      >
        <div className="flex items-start gap-4">
          {/* Color bar */}
          <div
            className="flex-shrink-0 w-1 self-stretch rounded-full mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: cert.color }}
          />
          <div>
            <p className="text-fg font-medium text-sm leading-snug mb-1 group-hover:text-fg transition-colors">
              {cert.title}
            </p>
            <p
              className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-200"
              style={{ color: cert.color, opacity: 0.75 }}
            >
              {cert.issuer}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
          <span className="font-mono text-[11px] text-fg-3">{cert.year}</span>
          <ExternalLink
            size={11}
            className="text-fg-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      </a>
    </ScrollReveal>
  );
}

function AwardCard({ award, i }: { award: (typeof awards)[0]; i: number }) {
  return (
    <ScrollReveal delay={i * 0.1}>
      <div className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-surface transition-all duration-300">
        <div className="flex-shrink-0 mt-0.5">
          <Award size={14} className="text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-fg font-medium text-sm leading-snug mb-1">
            {award.title}
          </p>
          <p className="font-mono text-[10px] text-fg-3 uppercase tracking-widest">
            {award.body}
          </p>
        </div>
        <span className="font-mono text-[11px] text-fg-3 flex-shrink-0 pt-0.5">
          {award.year}
        </span>
      </div>
    </ScrollReveal>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 pb-6 border-b border-[var(--border)]">
            <div>
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
                Credentials
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-fg tracking-tight">
                Certs & Awards
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-3 hidden md:block">
              {certifications.length} certs · {awards.length} awards
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-[10px] text-fg-3 uppercase tracking-[0.25em] mb-4">
                Licenses &amp; Certifications
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {certifications
                .sort((a, b) => b.year.localeCompare(a.year))
                .map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} i={i} />
                ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-[10px] text-fg-3 uppercase tracking-[0.25em] mb-4">
                Honors &amp; Awards
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-3">
              {awards.map((award, i) => (
                <AwardCard key={award.title} award={award} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
