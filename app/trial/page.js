"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Navbar from "../CommonComp/Navbar";
import ParticleBackground from "../Animations/ParticleSphere";

const CARD_WIDTH = 340;
const GAP = 20;

const SERVICES = [
  { num: "01", title: "Product Design",     desc: "End-to-end experience design — from research and wireframes to polished, developer-ready systems.", tags: ["User Research & Strategy", "UI/UX Wireframes", "Design Systems", "Prototyping"] },
  { num: "02", title: "Development",        desc: "Scalable full-stack engineering built for speed, reliability, and long-term maintainability.",         tags: ["Web & Mobile Apps", "API & Backend", "Cloud Infrastructure", "DevOps"] },
  { num: "03", title: "Financial Advisory", desc: "Strategic capital planning, investor readiness, and financial modelling for high-growth ventures.",    tags: ["Fundraising Strategy", "Financial Modelling", "Investor Decks", "Due Diligence"] },
  { num: "04", title: "Growth & Marketing", desc: "Data-driven growth strategies that drive acquisition, retention, and measurable revenue impact.",      tags: ["Go-to-Market", "Performance Marketing", "SEO & Content", "Analytics"] },
];

const STATS = [
  { value: "₹20+ Cr", label: "Funds Under Management" },
  { value: "50+",     label: "Portfolio Companies" },
  { value: "15+",     label: "Successful Exits" },
  { value: "5x",      label: "Average Return" },
];

const PHILOSOPHY = [
  { title: "Long-term Vision",  desc: "We invest for sustainable, compounding growth — not quick flips." },
  { title: "Hands-on Support",  desc: "Active mentorship, board presence, and tactical help at every stage." },
  { title: "Network Access",    desc: "Connect with 200+ industry leaders, advisors, and global investors." },
];

const SECTORS = [
  { name: "Technology",    desc: "AI, SaaS, and emerging tech" },
  { name: "Manufacturing", desc: "Industrial & smart factories" },
  { name: "Healthcare",    desc: "Medtech & health innovation" },
  { name: "Fintech",       desc: "Digital finance & payments" },
  { name: "Agritech",      desc: "Farm-to-fork intelligence" },
  { name: "Deep Tech",     desc: "Frontier R&D commercialisation" },
];

const FUNDING_STEPS = [
  { num: "01", title: "Application",    dur: "2–3 days",  desc: "Submit your pitch deck, executive summary, and financial projections." },
  { num: "02", title: "Initial Review", dur: "5–7 days",  desc: "Our team evaluates market size, team strength, and early traction." },
  { num: "03", title: "Due Diligence",  dur: "2–4 weeks", desc: "Deep-dive into financials, IP, customer references, and unit economics." },
  { num: "04", title: "Investment",     dur: "1–2 weeks", desc: "Term sheet, legal docs, fund disbursement, and portfolio onboarding." },
];

const PORTFOLIO = [
  { name: "TechVision AI",  sector: "AI / SaaS",     raise: "₹2.4 Cr", stage: "Series A", desc: "AI-powered enterprise automation platform redefining workflows." },
  { name: "MediCore",       sector: "Healthcare",    raise: "₹1.8 Cr", stage: "Seed",     desc: "Next-gen remote diagnostics and telehealth for Tier 2 India." },
  { name: "AgriSmart",      sector: "Agritech",      raise: "₹3.1 Cr", stage: "Series A", desc: "Farm-to-fork intelligence and real-time supply chain visibility." },
  { name: "FinBridge",      sector: "Fintech",       raise: "₹1.2 Cr", stage: "Pre-Seed", desc: "Digital lending infrastructure for underserved SMEs." },
  { name: "BuildNext",      sector: "Manufacturing", raise: "₹4.0 Cr", stage: "Series B", desc: "Smart factory automation & IoT solutions for heavy industry." },
  { name: "DeepSynth",      sector: "Deep Tech",     raise: "₹2.9 Cr", stage: "Series A", desc: "Frontier materials science commercial spin-out from IIT." },
];

const WHY_REASONS = [
  { icon: "⬡", title: "Proven Track Record",  desc: "50+ investments with a 5x average return and 15+ successful exits across a decade of operations." },
  { icon: "◈", title: "Strategic Network",     desc: "200+ industry leaders, seasoned advisors, and global investors who actively open doors for portfolio founders." },
  { icon: "✦", title: "Flexible Capital",      desc: "Equity, convertible notes, or hybrid instruments — structured to match your exact stage and growth profile." },
  { icon: "▲", title: "Hands-on Mentorship",  desc: "Active board presence, weekly check-ins, and tactical support at every stage from seed to exit." },
  { icon: "◉", title: "Pan-India Reach",       desc: "Deep roots across India's industrial corridors — from Tier 1 metros to the fastest-emerging growth clusters." },
  { icon: "⬟", title: "Fast Decisions",        desc: "Initial term sheet within 3 weeks. No bureaucracy, no committees — just founder-first speed and clarity." },
];

function SectionLabel({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a5cff", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}
    >
      <span style={{ width: 28, height: 2, background: "#8a5cff", borderRadius: 2, display: "inline-block" }} />
      {children}
    </motion.p>
  );
}

export default function TrialPage() {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(-1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const totalDistance = (SERVICES.length - 1) * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveCard(Math.min(Math.floor(v * SERVICES.length), SERVICES.length - 1));
  });

  return (
    <div style={{ background: "#06060f", position: "relative" }}>
      <ParticleBackground radius={130} count={2400} activeCard={activeCard} hoveredStep={hoveredStep} />

      {/* ── 1. HERO ── */}
      <section style={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", zIndex: 1 }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, background: "rgba(138,92,255,0.2)", color: "#c4a8ff", marginBottom: 20 }}>
            Kodanda Investments
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "clamp(2.2rem,6vw,5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Building{" "}
            <motion.span animate={{ opacity: [1, 0.75, 1] }} transition={{ duration: 3, repeat: Infinity }} style={{ color: "#8a5cff", fontStyle: "italic" }}>Digital</motion.span>
            <br />Solutions That Matter
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginTop: 20, fontSize: 17, maxWidth: 480, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            30+ startups across 6 industries — each chosen for their potential to redefine markets.
          </motion.p>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ position: "absolute", bottom: 36, fontSize: 22, color: "rgba(255,255,255,0.2)" }}>↓</motion.div>
        </div>
      </section>

      {/* ── 2. SERVICES — LEFT 50% particle, RIGHT 50% heading+cards ── */}
      <section id="services-section" ref={containerRef}
        style={{ position: "relative", height: `${SERVICES.length * 100}vh`, zIndex: 1 }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", overflow: "hidden" }}>

          {/* LEFT 50% — empty, particle canvas sits here */}
          <div style={{ width: "50%", flexShrink: 0 }} />

          {/* RIGHT 50% — heading top + cards horizontal scroll */}
          <div style={{ width: "50%", flexShrink: 0, display: "flex", flexDirection: "column", padding: "44px 40px 0 24px", overflow: "hidden" }}>

            {/* Heading + para — pinned at top */}
            <div style={{ flexShrink: 0, marginBottom: 28 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>What we do</p>
              <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>Our Services</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.75, margin: 0, maxWidth: 340 }}>
                A comprehensive digital service mix that transforms your boldest ideas into immediate success.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                {SERVICES.map((_, i) => (
                  <div key={i} style={{ width: i === activeCard ? 28 : 8, height: 8, borderRadius: 999, background: i === activeCard ? "#8a5cff" : "rgba(255,255,255,0.15)", transition: "all 0.35s ease" }} />
                ))}
              </div>
            </div>

            {/* Cards — horizontal scroll clipped inside this right column only */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", overflow: "hidden" }}>
              <motion.div style={{ x, display: "flex", gap: GAP, willChange: "transform" }}>
                {SERVICES.map((svc, i) => (
                  <ServiceCard key={svc.num} service={svc} active={i === activeCard} />
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. COMPANY OVERVIEW — content LEFT, sectors RIGHT, ladder RIGHT ── */}
      <section id="company-section"
        style={{ position: "relative", minHeight: "100vh", zIndex: 1, display: "flex", alignItems: "center", padding: "100px 0" }}>
        <div style={{ width: "50%", paddingLeft: 72, paddingRight: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <SectionLabel>Who We Are</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
            style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            India's Most <span style={{ color: "#8a5cff", fontStyle: "italic" }}>Trusted</span> VC Firm
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, maxWidth: 420, marginBottom: 36 }}>
            Kodanda Investments is a leading venture capital firm focused on nurturing India's most promising startups.
            With over ₹20 crores in corporate funds, we partner with visionary entrepreneurs to build sustainable,
            scalable businesses across India's industrial corridors.
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
            {STATS.map((st, i) => (
              <motion.div key={st.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                style={{ borderRadius: 14, padding: "20px 18px", textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "clamp(1.4rem,2.2vw,1.9rem)", fontWeight: 800, color: "#8a5cff" }}>{st.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{st.label}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PHILOSOPHY.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8a5cff", marginTop: 7, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ width: "50%", paddingRight: 72, paddingLeft: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <SectionLabel>Sectors We Back</SectionLabel>
          <motion.h3 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, color: "#fff", margin: "0 0 28px", lineHeight: 1.2 }}>
            Investment <span style={{ color: "#8a5cff" }}>Sectors</span>
          </motion.h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {SECTORS.map((sec, i) => (
              <motion.div key={sec.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                whileHover={{ y: -4 }}
                style={{ borderRadius: 14, padding: "18px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", cursor: "default" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8a5cff", marginBottom: 10 }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{sec.name}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>{sec.desc}</div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
            style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <button style={{ padding: "12px 28px", borderRadius: 999, background: "#8a5cff", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Get Funded</button>
            <button style={{ padding: "12px 28px", borderRadius: 999, background: "transparent", color: "#fff", fontWeight: 700, fontSize: 14, border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}>Learn More</button>
          </motion.div>
        </div>
      </section>

      {/* ── 4. FUNDING — LEFT empty (ring particle), RIGHT content ── */}
      <section id="funding-section"
        style={{ position: "relative", minHeight: "100vh", zIndex: 1, display: "flex", alignItems: "center", padding: "100px 0" }}>
        <div style={{ width: "45%", flexShrink: 0 }} />
        <div style={{ flex: 1, paddingRight: 72, paddingLeft: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <SectionLabel>How It Works</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
            style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            From Idea<br /><span style={{ color: "#8a5cff", fontStyle: "italic" }}>to Funding</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 40, maxWidth: 400 }}>
            A transparent, founder-friendly process from first contact to cheque-in-hand.
          </motion.p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FUNDING_STEPS.map((step, i) => (
              <FundingStep key={step.num} step={step} index={i} onHover={setHoveredStep} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
            style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <button style={{ padding: "12px 28px", borderRadius: 999, background: "#8a5cff", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Apply for Funding</button>
            <button style={{ padding: "12px 28px", borderRadius: 999, background: "transparent", color: "#fff", fontWeight: 700, fontSize: 14, border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}>Schedule a Call</button>
          </motion.div>
        </div>
      </section>

      {/* ── 5. FEATURED PORTFOLIO — cards LEFT (50%), rope particle RIGHT (50%) ── */}
      <section id="portfolio-section"
        style={{ position: "relative", zIndex: 1, padding: "100px 0", display: "flex", alignItems: "flex-start", minHeight: "100vh" }}>
        <div style={{ width: "50%", paddingLeft: 72, paddingRight: 40, display: "flex", flexDirection: "column" }}>
          <SectionLabel>Featured Portfolio</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Companies We <span style={{ color: "#8a5cff", fontStyle: "italic" }}>Believe In</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: 36, maxWidth: 340 }}>
            30+ startups across 6 industries — each chosen for their potential to redefine markets.
          </motion.p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PORTFOLIO.map((co, i) => (
              <motion.div key={co.name}
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ backgroundColor: "rgba(138,92,255,0.1)", borderColor: "rgba(138,92,255,0.35)" }}
                style={{ borderRadius: 16, padding: "16px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(138,92,255,0.2)", border: "1px solid rgba(138,92,255,0.35)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#8a5cff" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{co.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#8a5cff" }}>{co.raise}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)" }}>{co.desc}</span>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 999, marginLeft: 8, whiteSpace: "nowrap" }}>{co.stage}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* RIGHT — rope particle floats here */}
        <div style={{ width: "50%" }} />
      </section>

      {/* ── 6. WHY CHOOSE US — helix particle LEFT (25%), content RIGHT (75%) ── */}
      <section id="why-section"
        style={{ position: "relative", zIndex: 1, padding: "100px 0", display: "flex", alignItems: "flex-start", minHeight: "100vh" }}>
        {/* LEFT 25% — helix particle occupies this space */}
        <div style={{ width: "25%", flexShrink: 0 }} />
        {/* RIGHT 75% — content */}
        <div style={{ flex: 1, paddingRight: 56, paddingLeft: 16, display: "flex", flexDirection: "column" }}>
          <SectionLabel>Our Edge</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, color: "#fff", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Why <span style={{ color: "#8a5cff", fontStyle: "italic" }}>Choose Us?</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", gap: 40, marginBottom: 40 }}>
            {[{ v: "₹500Cr+", l: "Capital Deployed" }, { v: "50+", l: "Startups Funded" }, { v: "5x", l: "Avg Returns" }].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: "clamp(1.3rem,2vw,1.7rem)", fontWeight: 800, color: "#8a5cff" }}>{s.v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            {WHY_REASONS.map((r, i) => <WhyCard key={r.title} reason={r} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── 7. CTA — particles spread all over ── */}
      <section id="cta-section" style={{ position: "relative", zIndex: 1, padding: "80px 40px 120px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{
            maxWidth: 900, margin: "0 auto", borderRadius: 28, padding: "72px 64px",
            background: "linear-gradient(135deg, rgba(60,20,140,0.55) 0%, rgba(14,8,40,0.9) 100%)",
            border: "1px solid rgba(138,92,255,0.25)",
            boxShadow: "0 40px 120px rgba(138,92,255,0.12)",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
          <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 400, height: 400, borderRadius: "50%", background: "rgba(138,92,255,0.12)", filter: "blur(80px)", pointerEvents: "none" }} />
          <SectionLabel>Get Started Today</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
            style={{ fontSize: "clamp(2.2rem,4.5vw,4rem)", fontWeight: 900, color: "#fff", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Ready to Build the<br /><span style={{ color: "#8a5cff", fontStyle: "italic" }}>Next Big Thing?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 40px" }}>
            Join <strong style={{ color: "#fff" }}>50+ founders</strong> who trusted Kodanda Investments to fuel their growth journey from seed to scale.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "15px 44px", borderRadius: 999, background: "#8a5cff", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 8px 32px rgba(138,92,255,0.4)" }}>Apply for Funding</button>
            <button style={{ padding: "15px 44px", borderRadius: 999, background: "transparent", color: "#fff", fontWeight: 700, fontSize: 15, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>Schedule a Meeting</button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}

function ServiceCard({ service, active }) {
  return (
    <div style={{
      flexShrink: 0, width: CARD_WIDTH, minHeight: 480, borderRadius: 24, padding: "32px 28px",
      background: active ? "linear-gradient(135deg,rgba(60,30,140,0.92),rgba(22,14,65,0.97))" : "linear-gradient(135deg,rgba(30,20,70,0.7),rgba(14,10,40,0.85))",
      border: `1px solid ${active ? "rgba(138,92,255,0.45)" : "rgba(255,255,255,0.07)"}`,
      boxShadow: active ? "0 24px 60px rgba(138,92,255,0.2)" : "none",
      transition: "background 0.4s,border 0.4s,box-shadow 0.4s",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: active ? "#c4a8ff" : "rgba(196,168,255,0.5)" }}>{service.title}</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
          <span style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "rgba(255,255,255,0.45)" }}>↗</span>
          <span style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, color: active ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)" }}>{service.num}</span>
        </div>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.8, color: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)", margin: "28px 0", flexGrow: 1 }}>{service.desc}</p>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: 11, padding: "5px 12px", borderRadius: 999,
            background: active ? "rgba(138,92,255,0.18)" : "rgba(255,255,255,0.05)",
            color: active ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.25)",
            border: `1px solid ${active ? "rgba(138,92,255,0.25)" : "rgba(255,255,255,0.06)"}`,
            transition: "all 0.4s",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function FundingStep({ step, index, onHover }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      onClick={() => setOpen(o => !o)}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(-1)}
      style={{
        borderRadius: 14, padding: "18px 22px", cursor: "pointer",
        background: open ? "rgba(138,92,255,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${open ? "rgba(138,92,255,0.4)" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.3s",
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#8a5cff", letterSpacing: "0.1em", minWidth: 28 }}>{step.num}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", flex: 1 }}>{step.title}</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)" }}>⏱ {step.dur}</span>
        <span style={{ fontSize: 18, color: "#8a5cff", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
      </div>
      {open && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "14px 0 0 44px" }}>{step.desc}</p>}
    </motion.div>
  );
}

function WhyCard({ reason, index }) {
  const [h, setH] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        borderRadius: 20, padding: "24px 20px",
        background: h ? "rgba(138,92,255,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${h ? "rgba(138,92,255,0.4)" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.3s", cursor: "default",
        transform: h ? "translateY(-5px)" : "none",
      }}>
      <span style={{ fontSize: 22, display: "block", marginBottom: 14, color: "#8a5cff" }}>{reason.icon}</span>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{reason.title}</div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{reason.desc}</p>
    </motion.div>
  );
}
