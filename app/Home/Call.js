"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlueBlobBg from "../CommonComp/BlueBlobBg";

function Line({ children, delay = 0, style = {}, triggered }) {
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

const FS = "clamp(32px, 5vw, 68px)";
const base = (extra = {}) => ({
  fontSize: FS, fontWeight: 900, lineHeight: 0.95,
  letterSpacing: "-0.03em", textTransform: "uppercase", ...extra,
});

export default function Call() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-[80%] mx-auto rounded-3xl mb-8"
      style={{ background: "#2D2754", padding: "48px 56px", minHeight: 500, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}
    >
      <BlueBlobBg />
      {/* top section — tag + headline */}
      <div>
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#32E1FC", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ display: "inline-block", width: 28, height: 2, background: "#32E1FC", borderRadius: 2 }} />
          Get Started Today
        </motion.p>

        <div style={{ maxWidth: "75%", marginBottom: 0 }}>
          <Line triggered={inView} delay={0}    style={base({ color: "#ffffff" })}>READY TO</Line>
          <Line triggered={inView} delay={0.08} style={base({ WebkitTextStroke: "2px #ffffff", color: "transparent" })}>BUILD THE</Line>
          <Line triggered={inView} delay={0.16} style={base()}>
            <span style={{ background: "#32E1FC", color: "#2D2754", padding: "2px 14px" }}>NEXT BIG</span>
          </Line>
          <Line triggered={inView} delay={0.24} style={base({ color: "#ffffff" })}>THING?</Line>
        </div>
      </div>

      {/* bottom section — description + CTA */}
      <motion.div
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} initial={{ opacity: 0, y: 24 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 28 }}
      >
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 400, margin: 0 }}>
          Join <strong style={{ color: "#ffffff" }}>50+ founders</strong> who trusted Kodanda Investments
          to fuel their growth journey from seed to scale.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <motion.button suppressHydrationWarning
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(50,225,252,0.3)" }} whileTap={{ scale: 0.97 }}
            style={{ padding: "14px 36px", borderRadius: 999, background: "#32E1FC", color: "#2D2754", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}
          >Apply for Funding</motion.button>
          <motion.button suppressHydrationWarning
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.08)" }} whileTap={{ scale: 0.97 }}
            style={{ padding: "14px 36px", borderRadius: 999, background: "transparent", color: "#ffffff", fontWeight: 700, fontSize: 15, border: "2px solid rgba(255,255,255,0.25)", cursor: "pointer" }}
          >Schedule a Meeting</motion.button>
        </div>
      </motion.div>
    </section>
  );
}
