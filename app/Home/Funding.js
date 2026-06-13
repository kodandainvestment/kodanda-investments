"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Crosshair from "../Animations/Crosshair";
import BlueBlobBg from "../CommonComp/BlueBlobBg";

const BRAND = "#32E1FC";
const BRAND_DARK = "#2D2754";
const BRAND_PRIMARY = "#2E2C77";

const steps = [
  {
    step: "01", title: "Application", tag: "Getting Started", duration: "2–3 days",
    checklist: ["Executive summary", "Pitch deck (10–15 slides)", "Business model overview", "Financial projections (3 yr)", "Founding team profiles"],
    note: "Keep your pitch concise. Clarity of vision matters more than polish at this stage.",
  },
  {
    step: "02", title: "Initial Review", tag: "Screening", duration: "5–7 days",
    checklist: ["Market size validation", "Team capability assessment", "Product demo or prototype", "Competitive landscape review", "Early traction metrics"],
    note: "Only top 15% of applications reach the discovery call. Stand out with data-backed claims.",
  },
  {
    step: "03", title: "Due Diligence", tag: "Deep Evaluation", duration: "2–4 weeks",
    checklist: ["Audited financials & cap table", "Legal & IP verification", "Customer reference checks", "Tech & product deep-dive", "Growth & unit economics review"],
    note: "Be transparent. Founders who proactively share challenges build stronger trust with us.",
  },
  {
    step: "04", title: "Investment", tag: "Partnership Begins", duration: "1–2 weeks",
    checklist: ["Term sheet negotiation", "Legal documentation", "Fund disbursement", "Portfolio onboarding", "Mentor & network access"],
    note: "Welcome to the family. Our team is with you every step — from growth sprints to exit strategy.",
  },
];

const STEP_ANGLES = [0, 90, 180, 270];

export default function Funding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const ringRotateDeg = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const activeStep = useTransform(scrollYProgress, (v) => Math.min(3, Math.floor(v * 4)));

  const stickyRef = useRef(null);

  return (
    <div ref={containerRef} style={{ height: "500vh", background: "#2D2754" }}>
      <div ref={stickyRef} style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#2D2754" }}>
        <BlueBlobBg />
        <BlueBlobBg />
        <Crosshair containerRef={stickyRef} color="#32E1FC" />
        {/* Editorial headline — top-left, 70% width */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "36px 5vw 0", pointerEvents: "none" }}>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
              style={{ fontSize: "clamp(36px,5.5vw,80px)", fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.03em", textTransform: "uppercase", display: "flex", gap: "0.25em", flexWrap: "wrap" }}
            >
              <span style={{ color: "#ffffff" }}>FROM</span>
              <span style={{ WebkitTextStroke: "2px #32E1FC", color: "transparent" }}>IDEA</span>
              <span style={{ background: "#32E1FC", color: "#2D2754", padding: "0 10px" }}>TO FUNDING.</span>
            </motion.div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 80, width: "min(90vw, 1100px)" }}>
          <div style={{ flexShrink: 0, position: "relative", width: 420, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div
              style={{
                position: "absolute",
                width: 380,
                height: 380,
                borderRadius: "50%",
                border: `2px dashed ${BRAND}40`,
                rotate: ringRotateDeg,
                top: "50%",
                left: "50%",
                marginTop: -190,
                marginLeft: -190,
              }}
            >
              {steps.map((_, i) => {
                const angle = STEP_ANGLES[i];
                const rad = (angle * Math.PI) / 180;
                const r = 190;
                const x = Math.round(Math.cos(rad) * r);
                const y = Math.round(Math.sin(rad) * r);

                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: 72,
                      height: 72,
                      marginLeft: -36,
                      marginTop: -36,
                      x,
                      y,
                    }}
                  >
                    <motion.div
                      style={{
                        width: "100%",
                        height: "100%",
                        rotate: useTransform(ringRotateDeg, (v) => -v),
                        borderRadius: "50%",
                        background: useTransform(activeStep, (s) => s === i ? BRAND : "rgba(255,255,255,0.1)"),
                        border: `2px solid ${BRAND}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: useTransform(activeStep, (s) => s === i ? `0 0 0 8px ${BRAND}33, 0 4px 20px ${BRAND}66` : "none"),
                      }}
                    >
                      <motion.span style={{ fontWeight: 800, fontSize: 14, color: useTransform(activeStep, (s) => s === i ? BRAND_DARK : BRAND), lineHeight: 1 }}>
                        {`0${i + 1}`}
                      </motion.span>
                      <motion.span style={{ fontSize: 9, color: useTransform(activeStep, (s) => s === i ? `${BRAND_DARK}cc` : "#999"), marginTop: 2 }}>
                        STEP
                      </motion.span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 35%, ${BRAND_PRIMARY}, ${BRAND_DARK})`,
              border: `3px solid ${BRAND}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              boxShadow: `0 0 0 8px ${BRAND_DARK}cc, 0 0 40px ${BRAND}33`,
            }}>
              <motion.span style={{ fontSize: 32, marginBottom: 4 }}>
                {useTransform(activeStep, [0, 1, 2, 3], ["📋", "🔍", "📊", "🤝"])}
              </motion.span>
              <motion.span style={{ color: "#fff", fontWeight: 700, fontSize: 13, textAlign: "center", padding: "0 16px", letterSpacing: "0.05em" }}>
                {useTransform(activeStep, (s) => steps[Math.round(s)]?.title || steps[0].title)}
              </motion.span>
            </div>

            <div style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 90,
              height: 1,
              background: `linear-gradient(to right, ${BRAND}99, ${BRAND}1a)`,
              transformOrigin: "left center",
              transform: "translateY(-50%)",
              zIndex: 2,
            }} />
          </div>

          <div style={{ flex: 1, minWidth: 0, position: "relative", height: 420, display: "flex", alignItems: "center" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                style={{
                  opacity: useTransform(activeStep, (s) => {
                    const diff = Math.abs(s - i);
                    return diff < 0.5 ? 1 : 0;
                  }),
                  y: useTransform(activeStep, (s) => {
                    const diff = s - i;
                    return diff < -0.5 ? 30 : diff > 0.5 ? -30 : 0;
                  }),
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  pointerEvents: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ background: BRAND, color: BRAND_DARK, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>
                    Step {step.step}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{step.tag}</span>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginLeft: "auto" }}>⏱ {step.duration}</span>
                </div>

                <h2 style={{ color: "#ffffff", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.1 }}>
                  {step.title}
                </h2>
                <div style={{ width: 48, height: 3, background: BRAND, borderRadius: 2, marginBottom: 24 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                  {step.checklist.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 16px", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${BRAND}33`, border: `2px solid ${BRAND}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: BRAND }} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(12px, 1vw, 14px)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: `${BRAND}14`, borderLeft: `3px solid ${BRAND}`, borderRadius: "0 8px 8px 0", padding: "12px 18px" }}>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    💡 {step.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {steps.map((_, i) => (
            <motion.div
              key={i}
              style={{
                height: 6,
                borderRadius: 3,
                background: useTransform(activeStep, (s) => Math.round(s) === i ? BRAND : "rgba(255,255,255,0.15)"),
                width: useTransform(activeStep, (s) => Math.round(s) === i ? 24 : 6),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
