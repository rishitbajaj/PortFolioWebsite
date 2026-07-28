import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['about', 'experience', 'work', 'scores', 'stack', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on nav click
  const handleNav = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 md:py-5 transition-all duration-500 ${
          scrolled || menuOpen ? 'bg-bg/95 backdrop-blur-lg border-b border-border' : ''
        }`}
      >
        <div className="font-mono text-[0.6rem] tracking-[0.2em] text-lime uppercase">
          <span className="text-muted">sys://</span>rishit<span className="text-muted">.dev</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted hover:text-light transition-colors duration-200 relative group"
              >
                <span className="text-lime opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-[0.5rem]">//</span>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-lime transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-lime transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-lime transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-[99] bg-bg/98 backdrop-blur-lg border-b border-border md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${link}`}
                    onClick={handleNav}
                    className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted hover:text-lime py-3 border-b border-border/50 last:border-0 transition-colors"
                  >
                    <span className="text-lime text-[0.5rem]">//</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
