
"use client";

import Navbar from "../CommonComp/Navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[60vh] bg-indigo-950 overflow-hidden">
      <Navbar />

      {/* Existing Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)]" />

      {/* 3D Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"
      />

      {/* Floating 3D Shapes */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          absolute
          top-32
          right-1/4
          w-20
          h-20
          border
          border-indigo-400/20
          rotate-45
        "
      />

      <motion.div
        animate={{
          rotateY: [360, 0],
          rotateX: [360, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          absolute
          bottom-24
          left-1/4
          w-16
          h-16
          rounded-full
          border
          border-indigo-300/20
        "
      />

      {/* Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content - Unchanged */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          About Kodanda Investments
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Fueling India's{" "}
          <span className="text-indigo-400">Next Wave</span> of Innovation
        </h1>

        <p className="mt-5 text-white/60 text-lg max-w-xl">
          A Indore based investment firm committed to discovering and scaling
          visionary founders across India's fastest growing industrial
          corridors.
        </p>
      </div>
    </div>
  );
}