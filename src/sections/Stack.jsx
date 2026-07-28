import SectionHeader from '../components/SectionHeader';
import { stackRows } from '../data';

function StackRow({ items, reverse, duration }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{ animation: `marquee ${duration}s linear infinite ${reverse ? 'reverse' : ''}` }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-surface border border-border px-4 md:px-5 py-2.5 md:py-3 hover:border-lime/40 hover:bg-surface2 transition-all group"
          >
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
            <span className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.12em] uppercase text-muted group-hover:text-light transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border">
      <SectionHeader num="05" label="full_tech_matrix" title="Full" hollow="Stack" />
      <div className="flex flex-col gap-3 md:gap-4">
        <StackRow items={stackRows[0]} reverse={false} duration={20} />
        <StackRow items={stackRows[1]} reverse={true} duration={25} />
        <StackRow items={stackRows[2]} reverse={false} duration={18} />
      </div>
    </section>
  );
}
