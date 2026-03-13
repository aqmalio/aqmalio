export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-fg-3 uppercase tracking-widest">
          © {new Date().getFullYear()} Aqmalio
        </p>
        <p className="font-mono text-[11px] text-fg-3 uppercase tracking-widest">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
