"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    tag: "Who We Are",
    title: "Company Overview",
    bg: "#ffffff",
    content: (
      <p style={{ color: "rgba(45,39,84,0.65)", fontSize: 20, lineHeight: 1.8, maxWidth: 600 }}>
        Kodanda Investments is a leading venture capital firm focused on nurturing India's most
        promising startups. With over ₹20 crores in corporate funds, we partner with visionary
        entrepreneurs to build sustainable, scalable businesses across India's industrial corridors.
      </p>
    ),
  },
  {
    id: 2,
    tag: "Our Sectors",
    title: "Investment Sectors",
    bg: "#2D2754",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600 }}>
        {[
          ["Technology", "AI, SaaS, and emerging tech solutions"],
          ["Manufacturing", "Industrial and smart manufacturing"],
          ["Healthcare", "Medtech and healthcare innovation"],
        ].map(([name, desc]) => (
          <div key={name} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#32E1FC", flexShrink: 0, marginTop: 8 }} />
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>{name}</p>
              <p style={{ color: "#32E1FC", fontSize: 15, margin: "4px 0 0", opacity: 0.8 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    tag: "How We Think",
    title: "Investment Philosophy",
    bg: "#ffffff",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 600 }}>
        {[
          ["Long-term Vision", "We invest for sustainable, compounding growth"],
          ["Hands-on Support", "Active mentorship at every stage"],
          ["Network Access", "Connect with industry leaders and advisors"],
        ].map(([name, desc]) => (
          <div key={name} style={{ borderLeft: "3px solid #2E2C77", paddingLeft: 20 }}>
            <p style={{ color: "#2D2754", fontWeight: 700, fontSize: 18, margin: 0 }}>{name}</p>
            <p style={{ color: "#2E2C77", fontSize: 15, margin: "4px 0 0", opacity: 0.75 }}>{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Company() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(slides.length - 1) * 100}vw`]);

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
                alignItems: "center",
                padding: "0 10vw",
                gap: "6vw",
              }}
            >
              {slide.id === 2 && (
                <div style={{ flex: 1, height: "65vh", borderRadius: 24, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <Image src="/about-us.png" alt="About Kodanda" fill style={{ objectFit: "cover" }} />
                </div>
              )}

              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: slide.bg === "#ffffff" ? "#2E2C77" : "#32E1FC", opacity: 0.7, marginBottom: 16 }}>
                  0{slide.id} — {slide.tag}
                </span>
                <h2 style={{ color: slide.bg === "#ffffff" ? "#2D2754" : "#fff", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, margin: "0 0 32px", lineHeight: 1.1 }}>
                  {slide.title}
                </h2>
                {slide.content}
              </div>

              {(slide.id === 1 || slide.id === 3) && (
                <div style={{ flex: 1, height: "65vh", borderRadius: 24, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <Image src="/about-us.png" alt="About Kodanda" fill style={{ objectFit: "cover" }} />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
