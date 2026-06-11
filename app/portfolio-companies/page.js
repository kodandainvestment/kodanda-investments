"use client";

import { motion } from "framer-motion";
import Navbar from "../CommonComp/Navbar";
import ColorBends from "../Animations/ColorBends";
import PortfolioGrid from "./PortfolioGrid";
import FeaturedInvestments from "./FeaturedInvestments";
import SuccessMetrics from "./SuccessMetrics";

// export const metadata = { title: "Portfolio Companies – Kodanda Investments" };

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "#000000", minHeight: "600px" }}>
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <ColorBends
            colors={["#0000ff"]}
            rotation={90}
            speed={0.36}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
          />
        </div>
        <Navbar />

        {/* Animated Background Blobs */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: "#0000ff" }}
        />

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#acacd0" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(138,92,255,0.2)", color: "#c4a8ff" }}
          >
            Our Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Companies We <br />
            <motion.span
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ color: "#8a5cff" }}
            >
              Believe In
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            30+ startups across 6 industries each chosen for their potential to redefine markets.
          </motion.p>
        </div>
      </div>

      <FeaturedInvestments />
      <PortfolioGrid />
      <SuccessMetrics />
    </div>
  );
}
