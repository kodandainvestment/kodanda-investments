"use client";

import { motion } from "framer-motion";
import Navbar from "../CommonComp/Navbar";
import PortfolioGrid from "./PortfolioGrid";
import FeaturedInvestments from "./FeaturedInvestments";
import SuccessMetrics from "./SuccessMetrics";

// export const metadata = { title: "Portfolio Companies – Kodanda Investments" };

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "#2D2754" }}>
        <Navbar />

        {/* Animated Background Blobs */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-20"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-10"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-indigo-800 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            Our Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Companies We <br />
            <motion.span
              animate={{
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-indigo-400"
            >
              Believe In
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto"
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
