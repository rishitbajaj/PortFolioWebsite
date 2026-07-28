import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import { scores, achievements } from '../data';

function ScoreCard({ s }) {
  const [ref, visible] = useReveal(0.4);
  const count = useCounter(s.num, 1500, visible);

  return (
    <a
      ref={ref}
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`border border-border p-6 md:p-10 relative overflow-hidden transition-all duration-700 hover:-translate-y-1 group block cursor-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime group-hover:[transform:scaleX(1)] [transform:scaleX(0)] origin-left transition-transform duration-500" />

      {/* "Open" indicator top-right */}
      <div className="absolute top-4 right-4 font-mono text-[0.5rem] tracking-[0.15em] uppercase text-muted opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-lime inline-block" />
        open profile ↗
      </div>

      <div className="flex items-center gap-4 mb-4 md:mb-6 font-mono text-[0.55rem] tracking-[0.25em] uppercase text-muted">
        <span>{s.platform}</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="font-display font-extrabold text-[3.5rem] md:text-[5rem] text-light leading-none mb-2 tracking-tighter group-hover:text-lime transition-colors duration-300">
        {count}
      </div>
      <div className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.12em] text-lime mb-1">{s.tier}</div>
      <div className="font-mono text-[0.5rem] md:text-[0.55rem] text-muted tracking-[0.1em]">{s.sub}</div>
    </a>
  );
}

export default function Scores() {
  const [ref, visible] = useReveal();

  return (
    <section id="scores" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border bg-surface">
      <SectionHeader num="04" label="competitive_rankings.json" title="Competitive" accent="Scores" />

      {/* 1 col mobile, 3 col md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {scores.map((s) => <ScoreCard key={s.id} s={s} />)}
      </div>

      {/* Achievements — 1 col mobile, 2 col md+ */}
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {achievements.map((a) => (
          <div key={a.title} className="bg-bg p-6 md:p-8 flex gap-4 md:gap-6 hover:bg-surface transition-colors group">
            <div className="font-display font-extrabold text-3xl md:text-4xl text-lime leading-none flex-shrink-0">{a.glyph}</div>
            <div>
              <h3 className="font-mono text-xs md:text-sm font-bold tracking-[0.05em] text-light mb-1.5 md:mb-2">{a.title}</h3>
              <p className="font-mono text-[0.58rem] md:text-[0.6rem] text-muted leading-relaxed tracking-[0.05em]">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
