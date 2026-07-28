import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects, tagColors } from '../data';

function ProjectCard({ p, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-bg border border-border p-6 md:p-8 relative overflow-hidden transition-colors duration-300 ${
        hovered ? 'bg-surface' : ''
      } ${p.featured ? 'col-span-1 md:col-span-2' : ''}`}
    >
      {/* Lime top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-lime transition-transform duration-500 origin-left"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />

      {/* Featured: two-column on md+, single on mobile */}
      <div className={p.featured ? 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12' : ''}>
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-5 font-mono text-[0.55rem] tracking-[0.2em] text-muted">
            <span>{p.id}</span>
            <div className="flex-1 h-px bg-border" />
            <span className={`border px-2 py-0.5 text-[0.5rem] tracking-[0.15em] uppercase ${tagColors[p.type]}`}>
              {p.tag}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-light mb-1">{p.title}</h3>
          <p className="font-mono text-[0.58rem] md:text-[0.6rem] tracking-[0.1em] text-muted mb-4 md:mb-5">// {p.sub}</p>
          <p className="text-xs md:text-sm text-light/50 leading-relaxed font-light mb-5 md:mb-6">{p.desc}</p>

          <ul className="space-y-0 mb-5 md:mb-6">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 md:gap-3 font-mono text-[0.6rem] md:text-[0.65rem] text-light/40 py-2 border-b border-border leading-relaxed">
                <span className="text-lime flex-shrink-0 mt-0.5">▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
            {p.stack.map((s) => (
              <span
                key={s}
                className={`font-mono text-[0.5rem] md:text-[0.55rem] px-2 py-1 bg-surface2 border border-border text-muted tracking-[0.08em] transition-colors duration-200 ${hovered ? 'border-lime/20 text-light' : ''}`}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-lime flex items-center gap-2 transition-all group"
            >
              GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-light/50 hover:text-light flex items-center gap-2 transition-all group border-b border-border hover:border-light/40 pb-px"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse inline-block" />
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {/* Featured ASCII visual — hidden on mobile */}
        {p.featured && (
          <div className="hidden md:flex items-center justify-center">
            <pre className="font-mono text-[0.62rem] leading-6 select-none">
              <span className="text-cyan">┌─────────────────────────────┐{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-lime">GHOSTWRITER</span><span className="text-orange"> AI WORKSPACE   </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">├─────────────────────────────┤{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-lime">01</span><span className="text-muted"> // reviewing your code... </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-orange">02</span><span className="text-light"> const db = new VeloxDB() </span><span className="text-cyan"> │{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-pink-400">03</span><span className="text-light"> db.insert("key", val)     </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-lime">04</span><span className="text-muted"> // lol, this is slow      </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-orange">05</span><span className="text-light"> db.btree.rebalance()     </span><span className="text-cyan"> │{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-pink-400">06</span><span className="text-light"> return O(log n)          </span><span className="text-cyan"> │{'\n'}</span>
              <span className="text-cyan">├─────────────────────────────┤{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-pink-400">👻 AI typing...</span><span className="text-muted">             </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">│ </span><span className="text-muted">latency: 12ms // nice      </span><span className="text-cyan">│{'\n'}</span>
              <span className="text-cyan">└─────────────────────────────┘</span>
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Backend', value: 'backend' },
  { label: 'Systems', value: 'systems' },
  { label: 'Frontend', value: 'frontend' },
];

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="work" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border">
      <SectionHeader num="03" label="production_deployments" title="Engineering" accent="Deployments" />

      {/* Filter tabs — scrollable on mobile */}
      <div className="flex gap-1 p-1 bg-surface border border-border w-fit mb-8 md:mb-10 overflow-x-auto max-w-full">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] md:tracking-[0.12em] uppercase px-3 md:px-4 py-2 transition-all duration-200 whitespace-nowrap ${
              active === f.value
                ? 'bg-lime text-bg font-bold'
                : 'text-muted hover:text-light'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid — 1 col on mobile, 2 on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
