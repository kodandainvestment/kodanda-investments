"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../CommonComp/Navbar";
import Company from "./Company";
import Funding from "./Funding";
import Featured from "./Featured";
import Call from "./Call";
import BarGraph3D from "../CommonComp/BarGraph3D";

const stats = [
  { value: "₹20+ Cr", label: "Funds Under Management" },
  { value: "50+", label: "Portfolio Companies" },
  { value: "15+", label: "Successful Exits" },
  { value: "5x", label: "Average Return" },
];

const bullets = [
  "Seed to Series-A funding support",
  "Strategic mentorship & network access",
  "Pan-India industrial corridor focus",
];

export default function HomePage() {
  const [animKey, setAnimKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    setAnimKey((k) => k + 1);
    setVh(window.innerHeight);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const companyStart = vh;
  const inCompany = scrollY >= companyStart;
  const companyScroll = Math.max(0, scrollY - companyStart);
  const shiftVw = (companyScroll / vh) * 100;

  const [graphAnimKey, setGraphAnimKey] = useState(0);
  const prevShift = useRef(-1);
  useEffect(() => {
    const newKey = Math.floor(shiftVw / 100);
    if (newKey !== prevShift.current) {
      prevShift.current = newKey;
      setGraphAnimKey((k) => k + 1);
    }
  }, [shiftVw]);

  const onDarkSlide = inCompany && shiftVw >= 50 && shiftVw < 150;
  const graphVisible = !onDarkSlide && scrollY <= companyStart + 3 * vh;

  return (
    <>
      {/* Fixed graph — always right side */}
      <div style={{
        position: "fixed", bottom: "18vh", right: "8vw",
        zIndex: 50, pointerEvents: "none",
        transition: "opacity 0.4s ease",
        opacity: graphVisible ? 1 : 0,
      }}>
        <BarGraph3D trigger={graphAnimKey > 0} key={graphAnimKey} />
      </div>

      {/* ── HERO — white bg with dark accent strip ── */}
      <div
        className="relative w-full"
        style={{
          background: "#ffffff",
          marginTop: "-32px",
          paddingTop: "32px",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #2E2C77, #32E1FC)" }} />

        <Navbar />

        {/* ── EDITORIAL HERO HEADLINE ── */}
        <div style={{ padding: "0 5vw", paddingTop: "4vh", paddingBottom: "4vh", overflow: "hidden" }}>

          {/* tag line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ color: "#2E2C77", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ display: "inline-block", width: 32, height: 2, background: "#32E1FC", borderRadius: 2 }} />
            Trusted Investment Partner
          </motion.p>

          {/* LINE 1 — solid dark, full bleed */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: [0.22,1,0.36,1] }}
              style={{ fontSize: "clamp(56px, 11vw, 148px)", fontWeight: 900, lineHeight: 0.92, color: "#2D2754", letterSpacing: "-0.03em", textTransform: "uppercase" }}
            >
              INVESTING
            </motion.div>
          </div>

          {/* LINE 2 — outline stroke */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease: [0.22,1,0.36,1] }}
              style={{
                fontSize: "clamp(56px, 11vw, 148px)", fontWeight: 900, lineHeight: 0.92,
                letterSpacing: "-0.03em", textTransform: "uppercase",
                WebkitTextStroke: "2px #2D2754", color: "transparent",
              }}
            >
              IN INDIA'S
            </motion.div>
          </div>

          {/* LINE 3 — cyan block highlight */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.16, ease: [0.22,1,0.36,1] }}
              style={{ fontSize: "clamp(56px, 11vw, 148px)", fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.03em", textTransform: "uppercase", display: "inline-block" }}
            >
              <span style={{ background: "#2E2C77", color: "#32E1FC", padding: "0 12px" }}>NEXT LEADERS.</span>
            </motion.div>
          </div>

          {/* sub + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
            style={{ marginTop: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
          >
            <p style={{ color: "rgba(45,39,84,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 420, margin: 0 }}>
              Managing <strong style={{ color: "#2D2754" }}>₹20+ crores</strong> in corporate funds to accelerate
              visionary startups across India's growing industrial corridors.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(46,44,119,0.25)" }} whileTap={{ scale: 0.97 }}
                style={{ padding: "14px 32px", borderRadius: 999, background: "#2E2C77", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}
              >Get Funded</motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ padding: "14px 32px", borderRadius: 999, background: "transparent", color: "#2E2C77", fontWeight: 700, fontSize: 15, border: "2px solid rgba(46,44,119,0.3)", cursor: "pointer" }}
              >Invest with Us</motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats cards */}
        <div className="relative z-10 max-w-5xl mx-auto px-8" style={{ marginBottom: "-56px" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(46,44,119,0.14)" }}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(46,44,119,0.12)",
                  borderRadius: 20,
                  textAlign: "center",
                  padding: "32px 16px",
                  boxShadow: "0 4px 24px rgba(46,44,119,0.07)",
                  cursor: "default",
                }}
              >
                <p style={{ fontSize: 30, fontWeight: 800, color: "#2E2C77", margin: 0 }}>{stat.value}</p>
                <p style={{ marginTop: 8, fontSize: 13, color: "rgba(45,39,84,0.55)" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Company />
      <Funding />
      <Featured />
      <Call />
    </>
  );
}
