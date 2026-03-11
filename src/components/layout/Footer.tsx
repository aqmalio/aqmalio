export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Aqmalio. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
