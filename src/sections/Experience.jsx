import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { experience } from '../data';

function ExperienceCard({ e, index }) {
  const [ref, visible] = useReveal(0.2);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`relative pl-8 md:pl-10 pb-12 last:pb-0 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Timeline rail */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-border" />
      <div
        className={`absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 ${
          e.current ? 'bg-lime border-lime animate-pulse' : 'bg-bg border-border'
        }`}
      />

      <div className="border border-border bg-surface p-6 md:p-8 clip-corner">
        <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-muted">
          <span>{e.period}</span>
          {e.current && (
            <span className="flex items-center gap-1.5 text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse inline-block" />
              current
            </span>
          )}
        </div>

        <h3 className="font-display font-extrabold text-xl md:text-2xl text-light mb-1">
          {e.role} <span className="text-muted font-light">@</span> <span className="text-cyan">{e.company}</span>
        </h3>

        <p className="text-muted font-light leading-relaxed text-sm md:text-base my-4 md:my-5">{e.desc}</p>

        <ul className="space-y-0">
          {e.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 md:gap-3 font-mono text-[0.6rem] md:text-[0.65rem] text-light/40 py-2 border-b border-border last:border-0 leading-relaxed"
            >
              <span className="text-lime flex-shrink-0 mt-0.5">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border">
      <SectionHeader num="02" label="career_log.json" title="Professional" accent="Experience" />
      <div className="max-w-3xl">
        {experience.map((e, i) => (
          <ExperienceCard key={e.id} e={e} index={i} />
        ))}
      </div>
    </section>
  );
}
