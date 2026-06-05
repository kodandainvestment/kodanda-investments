"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stepImages = [
  { icon: "📋", label: "Submit Application", gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)" },
  { icon: "🔍", label: "Initial Review", gradient: "linear-gradient(135deg, #1e1b4b 0%, #6366f1 100%)" },
  { icon: "📊", label: "Due Diligence", gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)" },
  { icon: "🤝", label: "Partnership Begins", gradient: "linear-gradient(135deg, #14213d 0%, #1e3a8a 100%)" },
];

const steps = [
  {
    step: "01", title: "Application",
    image: "/about-us.png", color: "#1e3a8a", duration: "2–3 days", tag: "Getting Started",
    checklist: ["Executive summary", "Pitch deck (10–15 slides)", "Business model overview", "Financial projections (3 yr)", "Founding team profiles"],
    note: "Tip: Keep your pitch concise. Clarity of vision matters more than polish at this stage.",
  },
  {
    step: "02", title: "Initial Review",
    image: "/about-us.png", color: "#1e1b4b", duration: "5–7 days", tag: "Screening",
    checklist: ["Market size validation", "Team capability assessment", "Product demo or prototype", "Competitive landscape review", "Early traction metrics"],
    note: "Only top 15% of applications reach the discovery call. Stand out with data-backed claims.",
  },
  {
    step: "03", title: "Due Diligence",
    image: "/about-us.png", color: "#0f172a", duration: "2–4 weeks", tag: "Deep Evaluation",
    checklist: ["Audited financials & cap table", "Legal & IP verification", "Customer reference checks", "Tech & product deep-dive", "Growth & unit economics review"],
    note: "Be transparent. Founders who proactively share challenges build stronger trust with us.",
  },
  {
    step: "04", title: "Investment",
    image: "/about-us.png", color: "#14213d", duration: "1–2 weeks", tag: "Partnership Begins",
    checklist: ["Term sheet negotiation", "Legal documentation", "Fund disbursement", "Portfolio onboarding", "Mentor & network access"],
    note: "Welcome to the family. Our team is with you every step — from growth sprints to exit strategy.",
  },
];

const TOTAL = steps.length + 1;
const paper = "#fdf8f0";
const paperShadow = "inset -4px 0 12px rgba(0,0,0,0.08)";

function ContentFace({ step }) {
  return (
    <div style={{ width: "100%", height: "100%", background: paper, boxShadow: paperShadow, display: "flex", flexDirection: "column", justifyContent: "center", padding: "8% 10% 8% 14%", position: "relative", overflow: "hidden" }}>
      {Array.from({ length: 22 }).map((_, i) => (
        <div key={i} style={{ position: "absolute", left: "12%", right: "6%", top: `${8 + i * 4.2}%`, height: 1, background: "rgba(180,160,120,0.18)" }} />
      ))}
      <div style={{ position: "absolute", left: "12%", top: 0, bottom: 0, width: 1, background: "rgba(220,80,80,0.3)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{ background: "#1e3a8a", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>
            Step {step.step}
          </span>
          <span style={{ color: "#94a3b8", fontSize: 11, letterSpacing: "0.1em" }}>{step.tag}</span>
        </div>
        <h3 style={{ fontSize: "clamp(20px, 2.8vw, 38px)", fontWeight: 800, color: "#0f172a", margin: "0 0 12px", lineHeight: 1.15 }}>{step.title}</h3>
        <div style={{ width: 40, height: 3, background: "#6366f1", borderRadius: 2, marginBottom: 18 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {step.checklist.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: "2px solid #6366f1", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(99,102,241,0.08)" }}>
                <div style={{ width: 6, height: 6, borderRadius: 1, background: "#6366f1" }} />
              </div>
              <span style={{ color: "#334155", fontSize: "clamp(11px, 0.95vw, 14px)", fontFamily: "Georgia, serif", lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(99,102,241,0.06)", borderLeft: "3px solid #6366f1", borderRadius: "0 6px 6px 0", padding: "10px 14px" }}>
          <p style={{ color: "#475569", fontSize: "clamp(10px, 0.85vw, 13px)", fontFamily: "Georgia, serif", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{step.note}</p>
        </div>
      </div>
      <span style={{ position: "absolute", bottom: 24, right: 32, fontSize: 11, color: "#cbd5e1", fontFamily: "Georgia, serif" }}>— {parseInt(step.step) * 2} —</span>
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 24, background: "linear-gradient(to right, rgba(0,0,0,0.07), transparent)" }} />
    </div>
  );
}

export default function Funding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const coverRotate = useTransform(scrollYProgress, [0, 1 / TOTAL], [0, -180]);

  return (
    <div ref={containerRef} style={{ height: `${TOTAL * 100}vh` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", background: "#0f172a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", perspective: 2000 }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>Funding Process</p>

        <div style={{ position: "relative", width: "min(88vw, 1100px)", height: "min(75vh, 680px)", transformStyle: "preserve-3d" }}>
          <div style={{ position: "absolute", bottom: -24, left: "5%", right: "5%", height: 40, background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)", filter: "blur(12px)" }} />

          <div style={{ position: "absolute", inset: 0, background: paper, borderRadius: "2px 6px 6px 2px", boxShadow: "0 30px 80px rgba(0,0,0,0.7), 2px 0 8px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            {steps.map((step, i) => (
              <motion.div key={`img-${step.step}`} style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", opacity: useTransform(scrollYProgress, [(i + 1) / TOTAL, (i + 1.5) / TOTAL, (i + 2) / TOTAL], [i === 0 ? 1 : 0, 1, 1]), zIndex: i + 1, overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={step.image} alt={step.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", inset: 0, background: stepImages[i].gradient, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, zIndex: -1 }}>
                  <div style={{ fontSize: "clamp(60px, 8vw, 100px)", lineHeight: 1 }}>{stepImages[i].icon}</div>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(12px, 1.2vw, 16px)", fontFamily: "Georgia, serif", letterSpacing: "0.1em", textAlign: "center", padding: "0 24px", lineHeight: 1.6 }}>{stepImages[i].label}</p>
                </div>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, transparent 40%, ${step.color}99 100%)`, zIndex: 0 }} />
              </motion.div>
            ))}

            {steps.map((step, i) => (
              <motion.div key={`content-${step.step}`} style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", opacity: useTransform(scrollYProgress, [(i + 1) / TOTAL, (i + 1.5) / TOTAL, (i + 2) / TOTAL], [i === 0 ? 1 : 0, 1, 1]), zIndex: i + 1 }}>
                <ContentFace step={step} />
              </motion.div>
            ))}

            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 8, transform: "translateX(-50%)", background: "linear-gradient(to right, #c8b89a, #e8d9c0, #c8b89a)", zIndex: 50, boxShadow: "0 0 6px rgba(0,0,0,0.3)" }} />

            <motion.div style={{ position: "absolute", left: "50%", top: 0, width: "50%", height: "100%", transformOrigin: "left center", rotateY: coverRotate, transformStyle: "preserve-3d", zIndex: 100 }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg, #1e40af 0%, #1e3a8a 50%, #172554 100%)", backfaceVisibility: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, boxShadow: "inset -6px 0 18px rgba(0,0,0,0.25)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Kodanda Investments</span>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
                <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, padding: "0 32px" }}>Funding<br />Process</h2>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
                <motion.p animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8 }}>scroll to open ↓</motion.p>
              </div>
              <div style={{ position: "absolute", inset: 0, background: "#e8dcc8", backfaceVisibility: "hidden", transform: "rotateY(180deg)", boxShadow: "inset 4px 0 12px rgba(0,0,0,0.1)" }} />
            </motion.div>

            <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", background: "linear-gradient(140deg, #172554 0%, #1e3a8a 100%)", zIndex: 0 }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 32, alignItems: "center" }}>
          {steps.map((s, i) => (
            <motion.div key={s.step} style={{ height: 6, borderRadius: 3, background: useTransform(scrollYProgress, [(i + 1) / TOTAL, (i + 2) / TOTAL], ["rgba(255,255,255,0.2)", "#6366f1"]), width: useTransform(scrollYProgress, [(i + 1) / TOTAL, (i + 2) / TOTAL], [6, 24]) }} />
          ))}
        </div>
      </div>
    </div>
  );
}
