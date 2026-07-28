export default function Footer() {
  return (
    <footer className="relative z-10 bg-surface border-t border-border px-6 md:px-12 py-5 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
      <p className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.15em] uppercase text-muted text-center md:text-left">
        Rishit Bajaj · IIIT Ranchi · Roll 2023UG4028
      </p>
      <div className="flex items-center gap-2 font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.15em] uppercase text-lime">
        <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
        Available for internships
      </div>
      <p className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.15em] uppercase text-muted text-center md:text-right">
        © 2026 · Vite + React + Three.js
      </p>
    </footer>
  );
}
