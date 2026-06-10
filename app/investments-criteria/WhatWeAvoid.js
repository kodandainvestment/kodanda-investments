"use client";
import { useEffect, useRef, useState } from "react";
import { XCircle } from "lucide-react";

const avoidList = [
  { title: "Pure Services Businesses", desc: "We don't invest in agencies, consultancies, or businesses without a scalable, product-led component." },
  { title: "Single-Founder Teams", desc: "We rarely back solo founders — resilience and complementary skills matter too much at early stage." },
  { title: "Copycat Models", desc: "Cloning Western products without India-specific insight or differentiation isn't a thesis we back." },
  { title: "Regulated-Only Revenue", desc: "Businesses whose growth is entirely dependent on a single government contract or regulation." },
  { title: "No Clear Path to Profitability", desc: "Startups burning cash without a credible unit-economics story for the next 18 months." },
  { title: "Misaligned Founders", desc: "Teams where co-founders are already in dispute or where equity splits signal unresolved conflicts." },
];

function AvoidCard({ title, desc, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
        background: hovered ? "rgba(239,68,68,0.1)" : "#fef2f2",
        border: hovered ? "1px solid rgba(239,68,68,0.5)" : "1px solid #fee2e2",
        boxShadow: hovered ? "0 8px 30px rgba(239,68,68,0.15)" : "none",
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        gap: "1rem",
        cursor: "default",
        transitionProperty: "opacity, transform, background, border, box-shadow",
        transitionDuration: `0.5s, 0.5s, 0.25s, 0.25s, 0.25s`,
        transitionTimingFunction: "ease",
        transitionDelay: `${index * 100}ms, ${index * 100}ms, 0ms, 0ms, 0ms`,
      }}
    >
      <div style={{
        // transform: hovered ? "rotate(90deg) scale(1.2)" : "rotate(0deg) scale(1)",
        transition: "transform 0.3s ease",
        flexShrink: 0,
        marginTop: "2px",
      }}>
        <XCircle size={22} color={hovered ? "#ef4444" : "#f87171"} />
      </div>
      <div>
        <h3 style={{
          fontWeight: "700",
          fontSize: "0.875rem",
          color: hovered ? "#b91c1c" : "#991b1b",
          transition: "color 0.25s ease",
        }}>{title}</h3>
        <p style={{
          marginTop: "6px",
          fontSize: "0.875rem",
          lineHeight: "1.6",
          color: "rgba(153,27,27,0.7)",
        }}>{desc}</p>
      </div>
    </div>
  );
}

export default function WhatWeAvoid() {
  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div
        ref={headingRef}
        className="text-center mb-14"
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Not a Fit</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>What We Avoid</h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
          Knowing what we don't do is just as important — it saves everyone's time.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {avoidList.map(({ title, desc }, i) => (
          <AvoidCard key={title} title={title} desc={desc} index={i} />
        ))}
      </div>
    </section>
  );
}
