import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Application",
    desc: "Submit your pitch deck, business plan, and financial projections. Our team reviews every application with care to understand your vision and market potential.",
    image: "/about-us.png",
    color: "#1e3a8a",
    duration: "2–3 days",
    checklist: ["Executive summary", "Pitch deck (10–15 slides)", "Business model overview", "Financial projections (3 yr)", "Founding team profiles"],
    note: "Tip: Keep your pitch concise. Clarity of vision matters more than polish at this stage.",
    tag: "Getting Started",
  },
  {
    step: "02",
    title: "Initial Review",
    desc: "Our analysts perform an initial screening to assess product-market fit, team strength, and scalability. Shortlisted founders are invited for a discovery call.",
    image: "/about-us.png",
    color: "#1e1b4b",
    duration: "5–7 days",
    checklist: ["Market size validation", "Team capability assessment", "Product demo or prototype", "Competitive landscape review", "Early traction metrics"],
    note: "Only top 15% of applications reach the discovery call. Stand out with data-backed claims.",
    tag: "Screening",
  },
  {
    step: "03",
    title: "Due Diligence",
    desc: "A thorough evaluation of your financials, legal structure, competitive landscape, and growth metrics. We dig deep to build conviction before we commit.",
    image: "/about-us.png",
    color: "#0f172a",
    duration: "2–4 weeks",
    checklist: ["Audited financials & cap table", "Legal & IP verification", "Customer reference checks", "Tech & product deep-dive", "Growth & unit economics review"],
    note: "Be transparent. Founders who proactively share challenges build stronger trust with us.",
    tag: "Deep Evaluation",
  },
  {
    step: "04",
    title: "Investment",
    desc: "Term sheet signing, fund transfer, and onboarding into the Kodanda portfolio. From here, we grow together — as partners, not just investors.",
    image: "/about-us.png",
    color: "#14213d",
    duration: "1–2 weeks",
    checklist: ["Term sheet negotiation", "Legal documentation", "Fund disbursement", "Portfolio onboarding", "Mentor & network access"],
    note: "Welcome to the family. Our team is with you every step — from growth sprints to exit strategy.",
    tag: "Partnership Begins",
  },
];

// scroll segments: 0 = cover, 1-4 = page turns
// total height = (steps.length + 1) * 100vh
const TOTAL = steps.length + 1;

function usePageProgress(scrollYProgress, index) {
  const s = index / TOTAL;
  const e = (index + 1) / TOTAL;
  return useTransform(scrollYProgress, [s, e], [0, 1]);
}

// A single page that flips: front face shows right-side image, back face shows left-side content of NEXT step
function Page({ front, back, scrollYProgress, index }) {
  const rotate = useTransform(
    scrollYProgress,
    [index / TOTAL, (index + 1) / TOTAL],
    [0, -180]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: "50%", // anchored at spine
        width: "50%",
        height: "100%",
        transformOrigin: "left center",
        rotateY: rotate,
        transformStyle: "preserve-3d",
        zIndex: TOTAL - index,
      }}
    >
      {/* Front face — right side before flip */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          overflow: "hidden",
        }}
      >
        {front}
      </div>

      {/* Back face — left side after flip */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          overflow: "hidden",
        }}
      >
        {back}
      </div>
    </motion.div>
  );
}

// Cream paper texture background
const paper = "#fdf8f0";
const paperShadow = "inset -4px 0 12px rgba(0,0,0,0.08)";
const paperShadowLeft = "inset 4px 0 12px rgba(0,0,0,0.08)";

function ImageFace({ step, color }) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: color, overflow: "hidden" }}>
      {/* Background image */}
      <img
        src={step.image}
        alt={step.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 1 }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, transparent 40%, ${color}cc 100%)` }} />

      {/* Content over image */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "10% 12%" }}>
        {/* Tag */}
        <span style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
          {step.tag}
        </span>

        {/* Step number large */}
        <div style={{ fontSize: "clamp(56px, 9vw, 100px)", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1, marginBottom: 8, userSelect: "none" }}>
          {step.step}
        </div>

        {/* Title */}
        <h3 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
          {step.title}
        </h3>

        {/* Description */}
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(12px, 1vw, 15px)", lineHeight: 1.8, margin: "0 0 28px", maxWidth: 320 }}>
          {step.desc}
        </p>

        {/* Duration badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, padding: "6px 16px", width: "fit-content" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", flexShrink: 0 }} />
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.05em" }}>Timeline: {step.duration}</span>
        </div>
      </div>

      {/* Page curl shadow on right edge */}
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 30, background: "linear-gradient(to left, rgba(0,0,0,0.22), transparent)" }} />
    </div>
  );
}

function ContentFace({ step }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: paper,
      boxShadow: paperShadow,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "8% 10% 8% 14%",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ruled lines */}
      {Array.from({ length: 22 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute", left: "12%", right: "6%",
          top: `${8 + i * 4.2}%`, height: 1,
          background: "rgba(180,160,120,0.18)",
        }} />
      ))}
      {/* Red margin line */}
      <div style={{ position: "absolute", left: "12%", top: 0, bottom: 0, width: 1, background: "rgba(220,80,80,0.3)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Step badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{
            background: "#1e3a8a", color: "#fff",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", padding: "4px 12px", borderRadius: 999,
          }}>
            Step {step.step}
          </span>
          <span style={{ color: "#94a3b8", fontSize: 11, letterSpacing: "0.1em" }}>{step.tag}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "clamp(20px, 2.8vw, 38px)", fontWeight: 800,
          color: "#0f172a", margin: "0 0 12px", lineHeight: 1.15,
        }}>
          {step.title}
        </h3>

        {/* Divider */}
        <div style={{ width: 40, height: 3, background: "#6366f1", borderRadius: 2, marginBottom: 18 }} />

        {/* Checklist */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {step.checklist.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 18, height: 18, borderRadius: 4, border: "2px solid #6366f1",
                flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(99,102,241,0.08)",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: 1, background: "#6366f1" }} />
              </div>
              <span style={{ color: "#334155", fontSize: "clamp(11px, 0.95vw, 14px)", fontFamily: "Georgia, serif", lineHeight: 1.4 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div style={{
          background: "rgba(99,102,241,0.06)", borderLeft: "3px solid #6366f1",
          borderRadius: "0 6px 6px 0", padding: "10px 14px",
        }}>
          <p style={{ color: "#475569", fontSize: "clamp(10px, 0.85vw, 13px)", fontFamily: "Georgia, serif", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
            {step.note}
          </p>
        </div>
      </div>

      {/* Page number */}
      <span style={{
        position: "absolute", bottom: 24, right: 32,
        fontSize: 11, color: "#cbd5e1", fontFamily: "Georgia, serif",
      }}>
        — {parseInt(step.step) * 2} —
      </span>

      {/* Left edge shadow (spine side) */}
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 24, background: "linear-gradient(to right, rgba(0,0,0,0.07), transparent)" }} />
    </div>
  );
}

function RightPageBase() {
  return (
    <div style={{
      position: "absolute", right: 0, top: 0, width: "50%", height: "100%",
      background: paper, boxShadow: paperShadowLeft,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: 12,
    }}>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute", left: "8%", right: "10%",
          top: `${14 + i * 4.5}%`, height: 1,
          background: "rgba(180,160,120,0.15)",
        }} />
      ))}
      <div style={{ position: "absolute", right: "14%", top: 0, bottom: 0, width: 1, background: "rgba(220,80,80,0.25)" }} />
    </div>
  );
}

export default function Funding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cover open: rotates from 0 → -180 during first scroll segment
  const coverRotate = useTransform(scrollYProgress, [0, 1 / TOTAL], [0, -180]);

  return (
    <div ref={containerRef} style={{ height: `${TOTAL * 100}vh` }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        background: "#0f172a",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        perspective: 2000,
      }}>

        {/* Section label */}
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>
          Funding Process
        </p>

        {/* Book */}
        <div style={{
          position: "relative",
          width: "min(88vw, 1100px)",
          height: "min(75vh, 680px)",
          transformStyle: "preserve-3d",
        }}>

          {/* Book shadow */}
          <div style={{
            position: "absolute", bottom: -24, left: "5%", right: "5%", height: 40,
            background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)",
            filter: "blur(12px)",
          }} />

          {/* Book body */}
          <div style={{
            position: "absolute", inset: 0,
            background: paper,
            borderRadius: "2px 6px 6px 2px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.7), 2px 0 8px rgba(0,0,0,0.3)",
            overflow: "hidden",
          }}>

            {/* Left side base (revealed under pages) */}
            <div style={{
              position: "absolute", left: 0, top: 0, width: "50%", height: "100%",
              background: paper, boxShadow: paperShadow,
            }} />

            {/* Right side base */}
            <RightPageBase />

            {/* Spine center line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0,
              width: 8, transform: "translateX(-50%)",
              background: "linear-gradient(to right, #c8b89a, #e8d9c0, #c8b89a)",
              zIndex: 50, boxShadow: "0 0 6px rgba(0,0,0,0.3)",
            }} />

            {/* Step pages — each page sits on right, flips to reveal content on left */}
            {steps.map((step, i) => (
              <Page
                key={step.step}
                index={i + 1}
                scrollYProgress={scrollYProgress}
                front={<ImageFace step={step} color={step.color} />}
                back={<ContentFace step={step} />}
              />
            ))}

            {/* Book Cover — front (right half) */}
            <motion.div style={{
              position: "absolute", left: "50%", top: 0,
              width: "50%", height: "100%",
              transformOrigin: "left center",
              rotateY: coverRotate,
              transformStyle: "preserve-3d",
              zIndex: 100,
            }}>
              {/* Cover front */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(140deg, #1e40af 0%, #1e3a8a 50%, #172554 100%)",
                backfaceVisibility: "hidden",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 12,
                boxShadow: "inset -6px 0 18px rgba(0,0,0,0.25)",
              }}>
                <span style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                  Kodanda Investments
                </span>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
                <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, padding: "0 32px" }}>
                  Funding<br />Process
                </h2>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
                <motion.p
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8 }}
                >
                  scroll to open ↓
                </motion.p>
              </div>
              {/* Cover back (inside of front cover) */}
              <div style={{
                position: "absolute", inset: 0,
                background: "#e8dcc8",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                boxShadow: "inset 4px 0 12px rgba(0,0,0,0.1)",
              }} />
            </motion.div>

            {/* Book back cover (left half, always visible) */}
            <div style={{
              position: "absolute", left: 0, top: 0, width: "50%", height: "100%",
              background: "linear-gradient(140deg, #172554 0%, #1e3a8a 100%)",
              zIndex: 0,
            }} />

          </div>
        </div>

        {/* Step progress dots */}
        <div style={{ display: "flex", gap: 10, marginTop: 32, alignItems: "center" }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              style={{
                height: 6, borderRadius: 3,
                background: useTransform(
                  scrollYProgress,
                  [(i + 1) / TOTAL, (i + 2) / TOTAL],
                  ["rgba(255,255,255,0.2)", "#6366f1"]
                ),
                width: useTransform(
                  scrollYProgress,
                  [(i + 1) / TOTAL, (i + 2) / TOTAL],
                  [6, 24]
                ),
              }}
            />
          ))}
        </div>

        {/* Step title indicator */}
        <motion.p style={{
          marginTop: 12, fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
        }}>
          {steps[0].title}
        </motion.p>

      </div>
    </div>
  );
}
