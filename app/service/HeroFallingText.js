"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const CARDS = [
  { label: "Service",       value: "Investment Advisory",  bg: "#7c6af7" },
  { label: "Focus",         value: "Wealth Management",    bg: "#e05a5a" },
  { label: "Stage",         value: "Seed – Series A",      bg: "#a78bfa" },
  { label: "Asset",         value: "₹500 Cr+ Managed",     bg: "#4f8ef7" },
  { label: "Clients",       value: "200+ Served",          bg: "#34c98a" },
  { label: "Experience",    value: "15+ Years",             bg: "#e07a5a" },
  { label: "Startups",      value: "50+ Funded",           bg: "#c45ab3" },
  { label: "Reach",         value: "Pan India",             bg: "#5a9ae0" },
  { label: "Strategy",      value: "M&A Advisory",         bg: "#a78bfa" },
  { label: "Planning",      value: "Tax & Retirement",     bg: "#7c6af7" },
  { label: "Consulting",    value: "Business Growth",      bg: "#e05a5a" },
  { label: "Markets",       value: "Global Expansion",     bg: "#34c98a" },
  { label: "Due Diligence", value: "End-to-End",           bg: "#4f8ef7" },
  { label: "Funding",       value: "Startup Capital",      bg: "#e07a5a" },
  { label: "Returns",       value: "High Performance",     bg: "#c45ab3" },
  { label: "Portfolio",     value: "Diversified Assets",   bg: "#5a9ae0" },
];

export default function HeroFallingText({ containerRef }) {
  const cardsRef  = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef?.current;
    const cardsEl   = cardsRef.current;
    if (!container || !cardsEl) return;

    const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Body } = Matter;

    let raf, runner, render, engine;

    // measure after paint
    const id = requestAnimationFrame(() => {
      const width  = container.offsetWidth;
      const height = container.offsetHeight;

      engine = Engine.create();
      engine.world.gravity.y = 1.0;

      render = Render.create({
        element: canvasRef.current,
        engine,
        options: { width, height, background: "transparent", wireframes: false },
      });

      const wall = (x, y, w, h) =>
        Bodies.rectangle(x, y, w, h, { isStatic: true, render: { fillStyle: "transparent" } });

      const walls = [
        wall(width / 2, height + 25, width, 50),   // floor
        wall(-25,       height / 2,  50,   height), // left
        wall(width + 25, height / 2, 50,   height), // right
      ];

      const spans = Array.from(cardsEl.querySelectorAll(".fall-card"));
      const cols  = 6;

      const bodies = spans.map((el, i) => {
        const rect = el.getBoundingClientRect();
        const w = rect.width  || 220;
        const h = rect.height || 62;

        const col = i % cols;
        const row = Math.floor(i / cols);
        // start above the container, staggered so they don't all arrive at once
        const x = (width / cols) * col + width / cols / 2;
        const y = -(h + 10) - row * (h + 60) - col * 30;

        el.style.position      = "absolute";
        el.style.transformOrigin = "center center";

        const body = Bodies.rectangle(x, y, w, h, {
          restitution: 0.35,
          frictionAir: 0.04,
          friction:    0.15,
          render: { fillStyle: "transparent" },
        });
        Body.setVelocity(body,        { x: (Math.random() - 0.5) * 4, y: 0 });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.07);
        return { el, body };
      });

      const mouse = Mouse.create(container);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.9, render: { visible: false } },
      });
      render.mouse = mouse;

      World.add(engine.world, [...walls, mc, ...bodies.map(b => b.body)]);

      runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      const loop = () => {
        bodies.forEach(({ el, body }) => {
          el.style.left      = `${body.position.x}px`;
          el.style.top       = `${body.position.y}px`;
          el.style.transform = `translate(-50%,-50%) rotate(${body.angle}rad)`;
        });
        raf = requestAnimationFrame(loop);
      };
      loop();
    });

    return () => {
      cancelAnimationFrame(id);
      cancelAnimationFrame(raf);
      if (runner) Runner.stop(runner);
      if (render) {
        Render.stop(render);
        if (render.canvas && canvasRef.current?.contains(render.canvas))
          canvasRef.current.removeChild(render.canvas);
      }
      if (engine) { Matter.World.clear(engine.world); Matter.Engine.clear(engine); }
    };
  }, [containerRef]);

  return (
    <>
      {/* transparent physics canvas — sits over the whole hero */}
      <div ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* card DOM nodes — absolutely positioned, moved by physics */}
      <div ref={cardsRef} className="absolute inset-0 z-20 pointer-events-none">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="fall-card absolute select-none pointer-events-auto cursor-grab"
            style={{
              background:   card.bg,
              borderRadius: "999px",
              padding:      "9px 32px 11px 24px",
              minWidth:     "200px",
              color:        "#fff",
              boxShadow:    "0 4px 20px rgba(0,0,0,0.35)",
              whiteSpace:   "nowrap",
            }}
          >
            <div style={{ fontSize: "0.62rem", opacity: 0.78, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              {card.label}
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, marginTop: "2px" }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
