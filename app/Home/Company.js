"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Crosshair from "../Animations/Crosshair";
import BlueBlobBg from "../CommonComp/BlueBlobBg";

/* ── animate on mount (works inside sticky/overflow containers) ── */
function Line({ children, delay = 0, style = {}, triggered = true }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        animate={triggered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        initial={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}

const FS = "clamp(44px, 7vw, 96px)";
const base = (extra = {}) => ({
  fontSize: FS, fontWeight: 900, lineHeight: 0.92,
  letterSpacing: "-0.03em", textTransform: "uppercase", ...extra,
});

/* ── White slides (1 & 3): left = headline, right = coins ── */
function WhiteSlide({ slide, active }) {
  const lines1 = [
    { el: "COMPANY",   s: base({ color: "#2D2754" }) },
    { el: "OVER-",     s: base({ WebkitTextStroke: "2px #2D2754", color: "transparent" }) },
    { el: <span style={{ background: "#2E2C77", color: "#fff", padding: "0 12px" }}>VIEW.</span>, s: base() },
  ];
  const lines3 = [
    { el: "INVEST-",   s: base({ color: "#2D2754" }) },
    { el: "MENT",      s: base({ WebkitTextStroke: "2px #2D2754", color: "transparent" }) },
    { el: <span style={{ background: "#2E2C77", color: "#fff", padding: "0 12px" }}>PHILOSOPHY.</span>, s: base() },
  ];
  const lines = slide.id === 1 ? lines1 : lines3;

  return (
    /* full slide: left half = text, right half = empty (coins float fixed there) */
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 6vw" }}>
      <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* tag */}
        <motion.p
          animate={active ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 12 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          style={{ color: slide.accentColor, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ display: "inline-block", width: 28, height: 2, background: slide.accentColor, borderRadius: 2 }} />
          0{slide.id} — {slide.tag}
        </motion.p>

        {/* headline lines */}
        <div style={{ marginBottom: 32 }}>
          {lines.map((l, i) => (
            <Line key={i} delay={0.05 + i * 0.1} style={l.s} triggered={active}>{l.el}</Line>
          ))}
        </div>

        {/* body */}
        <motion.div
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.42, duration: 0.6 }}
        >
          {slide.content}
        </motion.div>
      </div>

      {/* right 50% — intentionally empty; fixed coin renders here */}
      <div style={{ width: "50%" }} />
    </div>
  );
}

/* ── Dark slide (2): full-width editorial ── */
function DarkSlide({ slide, active }) {
  const lines = [
    { el: "INVESTMENT", s: base({ fontSize: "clamp(48px,7.5vw,108px)", color: "#ffffff" }) },
    { el: "SECTORS",    s: base({ fontSize: "clamp(48px,7.5vw,108px)", WebkitTextStroke: "2px #ffffff", color: "transparent" }) },
    { el: <span style={{ background: "#32E1FC", color: "#2D2754", padding: "0 14px" }}>WE BACK.</span>, s: base({ fontSize: "clamp(48px,7.5vw,108px)" }) },
  ];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 6vw", position: "relative" }}>
      <Crosshair color="#32E1FC" />
      <div style={{ width: "65%" }}>

        <motion.p
          animate={active ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 12 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#32E1FC", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ display: "inline-block", width: 28, height: 2, background: "#32E1FC", borderRadius: 2 }} />
          0{slide.id} — {slide.tag}
        </motion.p>

        <div style={{ marginBottom: 48 }}>
          {lines.map((l, i) => (
            <Line key={i} delay={0.05 + i * 0.1} style={l.s} triggered={active}>{l.el}</Line>
          ))}
        </div>

        <motion.div
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          {slide.content}
        </motion.div>
      </div>
    </div>
  );
}

const slides = [
  {
    id: 1, tag: "Who We Are", bg: "#ffffff",
    accentColor: "#2E2C77",
    content: (
      <p style={{ color: "rgba(45,39,84,0.6)", fontSize: 17, lineHeight: 1.8, maxWidth: 440 }}>
        Kodanda Investments is a leading venture capital firm focused on nurturing India's most
        promising startups. With over ₹20 crores in corporate funds, we partner with visionary
        entrepreneurs to build sustainable, scalable businesses across India's industrial corridors.
      </p>
    ),
  },
  {
    id: 2, tag: "Our Sectors", bg: "#2D2754",
    accentColor: "#32E1FC",
    content: (
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {[
          ["Technology", "AI, SaaS, and emerging tech solutions"],
          ["Manufacturing", "Industrial and smart manufacturing"],
          ["Healthcare", "Medtech and healthcare innovation"],
        ].map(([name, desc]) => (
          <motion.div
            key={name} whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ flex: "1 1 150px", borderTop: "2px solid #32E1FC", paddingTop: 14, cursor: "default" }}
          >
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: "0 0 5px" }}>{name}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 3, tag: "How We Think", bg: "#ffffff",
    accentColor: "#2E2C77",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 440 }}>
        {[
          ["Long-term Vision", "We invest for sustainable, compounding growth"],
          ["Hands-on Support", "Active mentorship at every stage"],
          ["Network Access", "Connect with industry leaders and advisors"],
        ].map(([name, desc]) => (
          <motion.div key={name} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}
            style={{ borderLeft: "3px solid #2E2C77", paddingLeft: 18, cursor: "default" }}>
            <p style={{ color: "#2D2754", fontWeight: 700, fontSize: 16, margin: 0 }}>{name}</p>
            <p style={{ color: "#2E2C77", fontSize: 13, margin: "3px 0 0", opacity: 0.7 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
];

export default function Company() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(slides.length - 1) * 100}vw`]);

  // track which slide is active so we can trigger animations
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(slides.length - 1, Math.floor(v * slides.length));
      setActiveIdx(idx);
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: `${slides.length * 100}vh` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ x, display: "flex", width: `${slides.length * 100}vw`, height: "100%" }}>
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              style={{
                width: "100vw", height: "100vh", flexShrink: 0,
                background: slide.bg,
                position: "relative",
              }}
            >
              {slide.bg === "#2D2754" && <BlueBlobBg />}
              {slide.bg === "#2D2754"
                ? <DarkSlide slide={slide} active={activeIdx === i} />
                : <WhiteSlide slide={slide} active={activeIdx === i} />
              }
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
