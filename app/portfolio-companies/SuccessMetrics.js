"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const metrics = [
  { value: "₹20 Cr+", label: "Capital Deployed", sub: "Across all funds" },
  { value: "30+", label: "Active Portfolio Cos.", sub: "Across 6 sectors" },
  { value: "15+", label: "Successful Exits", sub: "M&A and strategic buyouts" },
  { value: "4.1x", label: "Avg. Return Multiple", sub: "Across exited companies" },
  { value: "92%", label: "Founder Satisfaction", sub: "Post-investment survey" },
  { value: "₹120 Cr+", label: "Portfolio Valuation", sub: "Combined current value" },
];

function MetricCard({ value, label, sub, index }) {
  const [glow, setGlow] = useState(null);

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 700,
    damping: 18,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 700,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 16);
    rotateX.set(-((y - centerY) / centerY) * 16);

    setGlow({ x, y });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlow(null);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      whileHover={{
        y: -18,
        scale: 1.05,
      }}
      animate={{
        y: [0, -4, 0],
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-sm
        p-8
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-[0_35px_80px_rgba(99,102,241,0.35)]
      "
    >
      {/* Floating Orb */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-12
          -right-12
          w-40
          h-40
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* Mouse Spotlight */}

      {glow && (
        <motion.div
          className="absolute pointer-events-none w-60 h-60 rounded-full blur-3xl"
          animate={{
            x: glow.x - 120,
            y: glow.y - 120,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,.35), transparent 70%)",
          }}
        />
      )}

      {/* Shine Sweep */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-150%" }}
        whileHover={{ x: "250%" }}
        transition={{ duration: 0.9 }}
      >
        <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
      </motion.div>

      <div
        className="relative z-10"
        style={{
          transform: "translateZ(60px)",
        }}
      >
        <motion.p
          className="text-4xl font-bold text-indigo-400"
          whileHover={{
            scale: 1.08,
          }}
        >
          {value}
        </motion.p>

        <p className="mt-3 text-white font-semibold text-lg">
          {label}
        </p>

        <p className="mt-1 text-white/40 text-sm">
          {sub}
        </p>
      </div>
    </motion.div>
  );
}



export default function SuccessMetrics() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>By the Numbers</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Success Metrics</h2>
          <p className="mt-4 text-sm max-w-md mx-auto text-gray-500">
            The results that define our track record and the trust our founders place in us.
          </p>
        </div>
       <div
  className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
  style={{ perspective: "1500px" }}
>
  {metrics.map((metric, index) => (
    <MetricCard
      key={metric.label}
      value={metric.value}
      label={metric.label}
      sub={metric.sub}
      index={index}
    />
  ))}
</div>
      </div>
    </section>
  );
}
