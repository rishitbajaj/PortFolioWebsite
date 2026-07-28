import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';

const terminalLines = [
  { prompt: '❯', cmd: 'cat', val: 'skills.json' },
  { divider: true },
  { raw: '{' },
  { indent: 2, key: '"languages"', val: '["C", "C++", "Python", "JS", "TS"]' },
  { indent: 2, key: '"frameworks"', val: '["React", "Next.js", "Fastify", "Express"]' },
  { indent: 2, key: '"databases"', val: '["MySQL", "MongoDB", "Redis", "Firebase"]' },
  { indent: 2, key: '"devops"', val: '["Docker", "Linux", "Git"]' },
  { indent: 2, key: '"cgpa"', val: '8.69' },
  { indent: 2, key: '"problems_solved"', val: '"500+"' },
  { indent: 2, key: '"available"', val: 'true', comment: '// hire me' },
  { raw: '}' },
  { cursor: true },
];

export default function About() {
  const [ref, visible] = useReveal(0.1);
  const [tRef, tVisible] = useReveal(0.1);

  return (
    <section id="about" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border">
      <SectionHeader num="01" label="about_me.md" title="I build things" accent="that perform." hollow="Seriously." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Text */}
        <div
          ref={ref}
          className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <p className="text-muted font-light leading-relaxed text-sm md:text-base mb-6">
            I'm a <strong className="text-light font-bold">final-year B.Tech student</strong> in Electronics &amp; Communication Engineering at{' '}
            <span className="text-lime">IIIT Ranchi</span> — maintaining a <span className="text-lime">8.69 CGPA</span> while shipping
            software that punches well above my year.
          </p>
          <p className="text-muted font-light leading-relaxed text-sm md:text-base mb-6">
            I specialize in <span className="text-cyan">state-synchronized web architectures</span>, high-concurrency backend systems,
            and low-level <strong className="text-light font-bold">C++ engines</strong>. From adversarial AI workspaces with
            real-time WebSocket streaming to custom in-memory databases with B-Tree indexing — I go deep.
          </p>
          <p className="text-muted font-light leading-relaxed text-sm md:text-base">
            When I'm not pushing commits, I'm grinding DSA — <span className="text-lime">500+ problems solved</span>,
            ranked <strong className="text-light">Knight on LeetCode</strong> (Top 5%), climbing Codeforces and CodeChef.
          </p>

          {/* Skill grid */}
          <div className="grid grid-cols-2 gap-px bg-border border border-border mt-8 md:mt-10">
            {[
              { label: 'Languages', val: 'C, C++, Python, JS, TypeScript' },
              { label: 'Frameworks', val: 'React, Next.js, Express, Fastify, Redux' },
              { label: 'Databases', val: 'MySQL, MongoDB, Redis, Firebase' },
              { label: 'DevOps', val: 'Docker, Linux, Git, Postman, Figma' },
            ].map((s) => (
              <div key={s.label} className="bg-bg p-4 md:p-5 hover:bg-surface transition-colors group">
                <p className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-[0.2em] uppercase text-muted mb-1.5">{s.label}</p>
                <p className="text-xs md:text-sm text-light/70 group-hover:text-light transition-colors leading-relaxed">{s.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div
          ref={tRef}
          className={`transition-all duration-700 delay-200 ${tVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="bg-surface border border-border clip-corner overflow-hidden">
            <div className="flex items-center gap-2 bg-surface2 border-b border-border px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[0.55rem] tracking-[0.15em] text-muted ml-2">skills.json — bash</span>
            </div>
            <div className="p-4 md:p-6 space-y-0.5 overflow-x-auto">
              {terminalLines.map((line, i) => (
                <div key={i} className="font-mono text-[0.65rem] md:text-[0.72rem] leading-7 whitespace-nowrap">
                  {line.divider && <div className="text-border">{'─'.repeat(36)}</div>}
                  {line.prompt && (
                    <span>
                      <span className="text-lime">{line.prompt} </span>
                      <span className="text-light">{line.cmd} </span>
                      <span className="text-cyan">{line.val}</span>
                    </span>
                  )}
                  {line.raw && <span className="text-lime">{line.raw}</span>}
                  {line.key && (
                    <span style={{ paddingLeft: `${line.indent * 0.5}rem` }}>
                      <span className="text-cyan">{line.key}</span>
                      <span className="text-muted">: </span>
                      <span className="text-orange">{line.val}</span>
                      {line.comment && <span className="text-muted italic"> {line.comment}</span>}
                    </span>
                  )}
                  {line.cursor && (
                    <span>
                      <span className="text-lime">❯ </span>
                      <span className="animate-blink text-light">█</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
