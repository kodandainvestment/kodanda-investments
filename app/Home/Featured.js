"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Crosshair from "../Animations/Crosshair";
import BlueBlobBg from "../CommonComp/BlueBlobBg";
import BarGraph3D from "../CommonComp/BarGraph3D";

/* ── Shared line reveal ── */
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

/* ── Slide 1 — Portfolio (coins right side) ── */
function PortfolioSlide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cards = [
    { name: "Company A", desc: "Leading AI-powered solutions provider" },
    { name: "Company B", desc: "Revolutionary manufacturing tech" },
    { name: "Company C", desc: "Healthcare innovation platform" },
  ];
  const FS = "clamp(44px,7vw,96px)";

  return (
    <section ref={ref} style={{ minHeight: "100vh", background: "#ffffff", display: "flex", alignItems: "center", padding: "80px 6vw", gap: "4vw" }}>
      {/* LEFT — headline + cards */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.p
          animate={inView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 12 }} initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#2E2C77", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ width: 28, height: 2, background: "#2E2C77", borderRadius: 2, display: "inline-block" }} />
          01 — Our Portfolio
        </motion.p>

        <div style={{ marginBottom: 40 }}>
          <Line triggered={inView} delay={0.05} style={{ fontSize: FS, fontWeight: 900, lineHeight: 0.92, color: "#2D2754", letterSpacing: "-0.03em", textTransform: "uppercase" }}>FEATURED</Line>
          <Line triggered={inView} delay={0.14} style={{ fontSize: FS, fontWeight: 900, lineHeight: 0.92, WebkitTextStroke: "2px #2D2754", color: "transparent", letterSpacing: "-0.03em", textTransform: "uppercase" }}>PORT-</Line>
          <Line triggered={inView} delay={0.23} style={{ fontSize: FS, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
            <span style={{ background: "#2E2C77", color: "#fff", padding: "0 12px" }}>FOLIO.</span>
          </Line>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(46,44,119,0.15)" }}
              style={{ flex: "1 1 150px", minWidth: 140, background: "#fff", borderRadius: 16, padding: "22px 18px", border: "1px solid rgba(46,44,119,0.12)", cursor: "pointer" }}
            >
              <div style={{ width: "100%", height: 56, background: "linear-gradient(135deg, rgba(50,225,252,0.12), rgba(46,44,119,0.08))", borderRadius: 10, marginBottom: 12 }} />
              <p style={{ color: "#2D2754", fontWeight: 700, fontSize: 14, margin: 0 }}>{c.name}</p>
              <p style={{ color: "rgba(46,44,119,0.55)", fontSize: 12, margin: "5px 0 0" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT — graph animation */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minWidth: 280 }}>
        <BarGraph3D trigger={inView} />
      </div>
    </section>
  );
}

/* ── Slide 2 — Why Choose Us (dark, full editorial headline) ── */
function WhyUsSlide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stats = [["₹500Cr+", "Capital Deployed"], ["50+", "Startups Funded"], ["5x", "Average Returns"], ["12+", "Years of Trust"]];
  const features = [
    ["✦", "Proven Track Record", "50+ investments, 5x average return across fintech, healthtech, agritech, and deep-tech."],
    ["⬡", "Strategic Network", "200+ industry leaders, seasoned advisors, and global investors who open doors for you."],
    ["◈", "Flexible Capital", "Equity, convertible notes, or hybrid — tailored to your exact stage from pre-revenue to Series B."],
  ];
  const FS = "clamp(52px,9vw,124px)";

  return (
    <section ref={ref} style={{ minHeight: "100vh", background: "#2D2754", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 6vw", position: "relative", overflow: "hidden" }}>
      <BlueBlobBg />
      <Crosshair containerRef={ref} color="#32E1FC" />

      <motion.p
        animate={inView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 12 }} initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#32E1FC", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}
      >
        <span style={{ width: 28, height: 2, background: "#32E1FC", borderRadius: 2, display: "inline-block" }} />
        02 — Our Edge
      </motion.p>

      <div style={{ marginBottom: 48 }}>
        <Line triggered={inView} delay={0.05} style={{ fontSize: "clamp(32px,4.5vw,68px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          <span style={{ color: "#ffffff" }}>WHY{" "}</span>
          <span style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}>CHOOSE{" "}</span>
          <span style={{ background: "#32E1FC", color: "#2D2754", padding: "0 14px" }}>US?</span>
        </Line>
      </div>

      <motion.div
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.38, duration: 0.65 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden", marginBottom: 32, maxWidth: 900 }}
      >
        {stats.map(([val, label], i) => (
          <motion.div key={label} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.42 + i * 0.07, duration: 0.5 }}
            style={{ padding: "26px 20px", background: "rgba(255,255,255,0.03)", textAlign: "center" }}>
            <p style={{ color: "#32E1FC", fontSize: "clamp(20px,2.5vw,34px)", fontWeight: 800, margin: 0 }}>{val}</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, margin: "6px 0 0", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, maxWidth: 900, marginBottom: 32 }}>
        {features.map(([icon, title, desc], i) => (
          <motion.div key={title}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.55 + i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, borderColor: "rgba(50,225,252,0.45)" }}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 20px", cursor: "default", transition: "border-color 0.3s" }}>
            <span style={{ fontSize: 20, color: "#32E1FC", display: "block", marginBottom: 10 }}>{icon}</span>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 7px" }}>{title}</p>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} initial={{ opacity: 0, y: 24 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(50,225,252,0.06)", border: "1px solid rgba(50,225,252,0.2)", borderRadius: 14, padding: "22px 32px", flexWrap: "wrap", gap: 16, maxWidth: 900 }}
      >
        <div>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: 0 }}>Ready to scale your startup?</p>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, margin: "3px 0 0" }}>Join 50+ founders who chose Kodanda as their growth partner.</p>
        </div>
        <motion.a href="/startup-funding"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(50,225,252,0.35)" }} whileTap={{ scale: 0.97 }}
          style={{ padding: "13px 30px", borderRadius: 999, background: "#32E1FC", color: "#2D2754", fontWeight: 700, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" }}>
          Apply for Funding →
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ── Slide 3 — Newsletter (coins left side) ── */
function NewsletterSlide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const FS = "clamp(44px,7vw,96px)";

  return (
    <section ref={ref} style={{ minHeight: "100vh", background: "#ffffff", display: "flex", alignItems: "center", padding: "80px 6vw", gap: "4vw" }}>
      {/* LEFT — graph animation */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minWidth: 280 }}>
        <BarGraph3D trigger={inView} />
      </div>

      {/* RIGHT — headline + form, shifted left */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", textAlign: "left", paddingLeft: "2vw", paddingRight: "10vw" }}>
        <motion.p
          animate={inView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 12 }} initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#2E2C77", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ width: 28, height: 2, background: "#2E2C77", borderRadius: 2, display: "inline-block" }} />
          03 — Stay Connected
        </motion.p>

        <div style={{ marginBottom: 36 }}>
          <Line triggered={inView} delay={0.05} style={{ fontSize: "clamp(32px,4.5vw,68px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            <span style={{ color: "#2D2754" }}>STAY IN</span>
          </Line>
          <Line triggered={inView} delay={0.14} style={{ fontSize: "clamp(32px,4.5vw,68px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            <span style={{ WebkitTextStroke: "2px #2D2754", color: "transparent" }}>THE{" "}</span>
            <span style={{ background: "#2E2C77", color: "#fff", padding: "0 12px" }}>LOOP.</span>
          </Line>
        </div>

        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.38, duration: 0.6 }}
          style={{ color: "rgba(46,44,119,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 420, margin: "0 0 32px" }}
        >
          Stay updated with the latest investment opportunities, portfolio news, and insights from India's startup ecosystem.
        </motion.p>

        <motion.form
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}
        >
          <input type="email" placeholder="Enter your email" suppressHydrationWarning
            style={{ flex: "1 1 220px", padding: "13px 20px", borderRadius: 999, border: "1.5px solid rgba(46,44,119,0.2)", background: "#f8f8ff", color: "#2D2754", fontSize: 14, outline: "none" }} />
          <motion.button type="submit" suppressHydrationWarning
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(46,44,119,0.25)" }} whileTap={{ scale: 0.97 }}
            style={{ padding: "13px 26px", borderRadius: 999, background: "#2E2C77", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default function Featured() {
  return (
    <>
      <PortfolioSlide />
      <WhyUsSlide />
      <NewsletterSlide />
    </>
  );
}
