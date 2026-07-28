const items = [
  'React 18', 'Node.js', 'C++', 'Docker', 'Socket.IO', 'Next.js 14',
  'TypeScript', 'Fastify', 'Redis', 'MongoDB', 'MySQL', 'Prisma ORM',
  'Google Gemini', 'Monaco Editor', 'B-Tree Indexing', 'Haversine Formula',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="relative z-10 flex overflow-hidden border-t border-b border-border bg-surface py-2.5 md:py-3">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] uppercase px-4 md:px-6">
            <span className={i % 3 === 0 ? 'text-lime' : 'text-muted'}>{item}</span>
            <span className="text-orange ml-4 md:ml-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
