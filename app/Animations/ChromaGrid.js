'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ChromaGrid = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    { image: 'https://i.pravatar.cc/300?img=8',  title: 'Alex Rivera',     subtitle: 'Full Stack Developer', handle: '@alexrivera', borderColor: '#4F46E5', url: 'https://github.com/' },
    { image: 'https://i.pravatar.cc/300?img=11', title: 'Jordan Chen',     subtitle: 'DevOps Engineer',      handle: '@jordanchen', borderColor: '#10B981', url: 'https://linkedin.com/in/' },
    { image: 'https://i.pravatar.cc/300?img=3',  title: 'Morgan Blake',    subtitle: 'UI/UX Designer',       handle: '@morganblake', borderColor: '#F59E0B', url: 'https://dribbble.com/' },
    { image: 'https://i.pravatar.cc/300?img=16', title: 'Casey Park',      subtitle: 'Data Scientist',       handle: '@caseypark', borderColor: '#EF4444', url: 'https://kaggle.com/' },
    { image: 'https://i.pravatar.cc/300?img=25', title: 'Sam Kim',         subtitle: 'Mobile Developer',     handle: '@thesamkim', borderColor: '#8B5CF6', url: 'https://github.com/' },
    { image: 'https://i.pravatar.cc/300?img=60', title: 'Tyler Rodriguez',  subtitle: 'Cloud Architect',      handle: '@tylerrod', borderColor: '#06B6D4', url: 'https://aws.amazon.com/' }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x, y, duration: damping, ease,
      onUpdate: () => { setX.current?.(pos.current.x); setY.current?.(pos.current.y); },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
  };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-4 ${className}`}
      style={{ '--r': `${radius}px`, '--x': '50%', '--y': '50%' }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[300px] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300"
          style={{
            background: '#1a1a2e',
            border: `2px solid rgba(255,255,255,0.08)`,
            '--border-color': c.borderColor,
          }}
        >
          {/* Colored border on hover via box-shadow */}
          <style>{`
            article:hover {
              border-color: var(--border-color) !important;
            }
          `}</style>

          {/* Image with grayscale, color on hover */}
          <div className="relative overflow-hidden" style={{ height: '220px' }}>
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500"
              style={{ filter: 'grayscale(1)' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(1)')}
            />
            {/* Color glow at bottom of image on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `linear-gradient(to top, ${c.borderColor}55, transparent)` }}
            />
          </div>

          {/* Footer */}
          <div className="p-4" style={{ background: '#111120' }}>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-white font-bold text-[1rem]">{c.title}</h3>
              {c.handle && <span className="text-[0.85rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.handle}</span>}
            </div>
            <p className="text-[0.85rem]" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
