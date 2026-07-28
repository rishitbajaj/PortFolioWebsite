import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 overflow-hidden">

      {/* Top stats — hidden on small screens, shown from md */}
      <div className="hidden md:flex absolute top-0 right-12 gap-10 pt-24">
        {[
          { num: '8.69', label: 'CGPA // IIIT Ranchi' },
          { num: '500+', label: 'DSA Problems' },
          { num: '08', label: 'Live Projects' },
        ].map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 + i * 0.15, duration: 0.7, ease }}
            className="text-right font-mono"
          >
            <span className="block text-3xl font-bold text-lime leading-none">{s.num}</span>
            <span className="block text-[0.5rem] tracking-[0.2em] uppercase text-muted mt-1">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
        className="font-mono text-[0.55rem] md:text-[0.65rem] tracking-[0.2em] md:tracking-[0.3em] uppercase text-cyan mb-4 md:mb-6 flex items-center gap-3 md:gap-4"
      >
        <span className="block w-6 md:w-12 h-px bg-cyan flex-shrink-0" />
        <span>Final Year · Systems Engineer · Full-Stack Developer · IIIT Ranchi</span>
      </motion.div>

      {/* Name */}
      <div className="mb-8 md:mb-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease }}
          className="font-display font-extrabold leading-[0.88] tracking-tighter select-none"
          style={{ fontSize: 'clamp(4rem,16vw,13rem)' }}
        >
          <span className="glitch text-light block" data-text="RISHIT">RISHIT</span>
          <span className="glitch text-hollow-white block" data-text="BAJAJ">BAJAJ</span>
        </motion.h1>
      </div>

      {/* Mobile stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease }}
        className="flex md:hidden gap-6 mb-6"
      >
        {[
          { num: '8.69', label: 'CGPA' },
          { num: '500+', label: 'Problems' },
          { num: '07', label: 'Projects' },
        ].map((s) => (
          <div key={s.num} className="font-mono">
            <span className="block text-xl font-bold text-lime leading-none">{s.num}</span>
            <span className="block text-[0.5rem] tracking-[0.15em] uppercase text-muted mt-0.5">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom row — stacks vertically on mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-12">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8, ease }}
          className="text-muted font-light leading-relaxed text-sm md:text-base max-w-md"
        >
          Building <strong className="text-light font-bold">high-performance systems</strong>, low-latency database engines,
          and state-synchronized web architectures that most senior devs would be proud of.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="flex flex-row md:flex-col gap-3 flex-shrink-0"
        >
          <a
            href="#work"
            className="clip-corner inline-flex items-center justify-center gap-3 bg-lime text-bg font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase font-bold px-6 md:px-8 py-3 md:py-4 hover:bg-cyan transition-colors duration-200"
          >
            View Work →
          </a>
          <a
            href="mailto:bajrishit@gmail.com"
            className="clip-corner inline-flex items-center justify-center gap-3 bg-transparent text-light font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase border border-border px-6 md:px-8 py-3 md:py-4 hover:border-lime hover:text-lime transition-all duration-200"
          >
            Get In Touch ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-muted to-transparent animate-scroll-line" />
        <span className="font-mono text-[0.5rem] tracking-[0.25em] uppercase text-muted">scroll</span>
      </div>
    </section>
  );
}
