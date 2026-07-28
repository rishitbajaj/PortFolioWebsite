import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = (e.clientX - 4) + 'px';
        dotRef.current.style.top = (e.clientY - 4) + 'px';
      }
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = (ring.current.x - 16) + 'px';
        ringRef.current.style.top = (ring.current.y - 16) + 'px';
      }
      raf.current = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      dotRef.current?.classList.add('scale-[6]', '!bg-orange');
    };
    const onLeave = () => {
      dotRef.current?.classList.remove('scale-[6]', '!bg-orange');
    };

    document.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(loop);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed w-2 h-2 bg-lime rounded-full pointer-events-none z-[9999] transition-transform duration-200"
        style={{ mixBlendMode: 'exclusion' }}
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed w-8 h-8 border border-lime/40 rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
}
