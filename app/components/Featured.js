"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    id: 1,
    tag: "Our Portfolio",
    title: "Featured Portfolio",
    bg: "#0a1628",
    content: (
      <div style={{ display: "flex", gap: 24, maxWidth: 700, flexWrap: "wrap" }}>
        {[
          ["Company A", "Leading AI-powered solutions provider", "#1e3a8a"],
          ["Company B", "Revolutionary manufacturing tech", "#1e1b4b"],
          ["Company C", "Healthcare innovation platform", "#14213d"],
        ].map(([name, desc, bg]) => (
          <div key={name} style={{ flex: "1 1 180px", background: bg, borderRadius: 16, padding: "24px 20px", minWidth: 160 }}>
            <div style={{ width: "100%", height: 80, background: "rgba(255,255,255,0.06)", borderRadius: 10, marginBottom: 16 }} />
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>{name}</p>
            <p style={{ color: "#94a3b8", fontSize: 13, margin: "6px 0 0" }}>{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    tag: "Our Edge",
    title: "Why Choose Us",
    bg: "#0c1a3a",
    content: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 680 }}>
        {[
          ["✦", "Proven Track Record", "50+ investments with 5x average returns"],
          ["✦", "Strategic Network", "Access to industry leaders and advisors"],
          ["✦", "Flexible Capital", "Customized solutions for your growth stage"],
          ["✦", "Hands-on Mentorship", "Support from experienced entrepreneurs"],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ color: "#6366f1", fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>{title}</p>
              <p style={{ color: "#64748b", fontSize: 13, margin: "4px 0 0" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    tag: "Stay Connected",
    title: "Newsletter Signup",
    bg: "#080f24",
    content: (
      <div style={{ maxWidth: 560 }}>
        <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7, margin: "0 0 40px" }}>
          Stay updated with the latest investment opportunities, portfolio news, and insights from India's startup ecosystem.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: "1 1 260px",
              padding: "14px 24px",
              borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.3)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontSize: 15,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    ),
  },
];

export default function Featured() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(slides.length - 1) * 100}vw`, "0vw"]
  );

  return (
    <div ref={containerRef} style={{ height: `${slides.length * 100}vh` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ x, display: "flex", width: `${slides.length * 100}vw`, height: "100%" }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                background: slide.bg,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 10vw",
              }}
            >
              <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
                0{slide.id} — {slide.tag}
              </span>
              <h2 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, margin: "0 0 32px", lineHeight: 1.1 }}>
                {slide.title}
              </h2>
              {slide.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
