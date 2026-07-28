import { useReveal } from '../hooks/useReveal';
import SectionHeader from '../components/SectionHeader';

const links = [
  { label: 'Email', val: 'bajrishit@gmail.com', href: 'mailto:bajrishit@gmail.com' },
  { label: 'GitHub', val: 'github.com/rishitbajaj', href: 'https://github.com/rishitbajaj' },
  { label: 'LinkedIn', val: 'in/rishit-bajaj-1952a2288', href: 'https://www.linkedin.com/in/rishit-bajaj-1952a2288/' },
  { label: 'Phone', val: '+91 88229 52641', href: 'tel:+918822952641' },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="relative z-10 px-6 md:px-12 py-20 md:py-32 border-t border-border">
      <SectionHeader num="06" label="initiate_contact.sh" />

      {/* Stack vertically on mobile, side-by-side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="font-display font-extrabold leading-[0.9] tracking-tight mb-5 md:mb-6"
            style={{ fontSize: 'clamp(2.5rem,8vw,4.5rem)' }}>
            <span className="text-hollow-white block">LET'S</span>
            <span className="text-light block">BUILD</span>
            <span className="text-lime block">SOMETHING.</span>
          </h2>
          <p className="text-muted font-light leading-relaxed text-sm md:text-base max-w-sm">
            Open to internships, collaborations, and projects that push what's possible.
            If you need someone who goes deep — I'm your person.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 md:py-6 border-b border-border hover:pl-3 md:hover:pl-4 transition-all duration-300 group"
            >
              <div>
                <p className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted mb-1">✦ {link.label}</p>
                <p className="font-mono text-xs md:text-sm font-bold tracking-[0.05em] text-light break-all md:break-normal">{link.val}</p>
              </div>
              <span className="text-muted text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime transition-all duration-300 ml-3 flex-shrink-0">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
