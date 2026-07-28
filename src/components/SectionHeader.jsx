import { useReveal } from '../hooks/useReveal';

export default function SectionHeader({ num, label, title, accent, hollow }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`mb-10 md:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <span className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.25em] text-muted bg-surface border border-border px-2 md:px-3 py-1">{num}</span>
        <span className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.25em] uppercase text-muted">// {label}</span>
      </div>
      <h2 className="font-display font-extrabold text-[clamp(2.25rem,7vw,5.5rem)] tracking-tight leading-none">
        {title && <span className="text-light block">{title}</span>}
        {accent && <span className="text-lime block">{accent}</span>}
        {hollow && <span className="text-hollow-white block">{hollow}</span>}
      </h2>
    </div>
  );
}
