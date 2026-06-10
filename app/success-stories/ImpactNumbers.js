

"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const stats = [
  {
    value: "₹235 Cr+",
    label: "Total Portfolio Valuation",
    sub: "Across active & exited companies",
  },
  {
    value: "15+",
    label: "Successful Exits",
    sub: "M&A, secondary sales & mergers",
  },
  {
    value: "4.4x",
    label: "Avg. Return Multiple",
    sub: "On fully exited positions",
  },
  {
    value: "4,200+",
    label: "Jobs Created",
    sub: "Across portfolio companies",
  },
  {
    value: "12",
    label: "States Reached",
    sub: "By portfolio products & services",
  },
  {
    value: "92%",
    label: "Founders Re-engage",
    sub: "Come back for follow-on rounds",
  },
];

function StatCard({ value, label, sub, index }) {
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 500,
    damping: 25,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 500,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 10);
    rotateX.set(-((y - centerY) / centerY) * 10);

    setGlow({ x, y });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
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
        delay: index * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -15,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-indigo-100
        bg-white
        p-8
        shadow-sm
        cursor-pointer
        transition-all
        duration-500
        hover:shadow-[0_35px_80px_rgba(79,70,229,0.18)]
      "
    >
      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* Mouse Spotlight */}
      <motion.div
        className="absolute pointer-events-none w-52 h-52 rounded-full blur-3xl"
        animate={{
          x: glow.x - 100,
          y: glow.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,.18), transparent 70%)",
        }}
      />

      {/* Shine Sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-150%" }}
        whileHover={{ x: "250%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
      </motion.div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        <motion.p
          whileHover={{
            scale: 1.08,
          }}
          className="text-4xl font-bold text-indigo-700"
        >
          {value}
        </motion.p>

        <p className="mt-3 font-bold text-indigo-950">
          {label}
        </p>

        <p className="mt-2 text-gray-400 text-sm">
          {sub}
        </p>
      </div>
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="relative overflow-hidden max-w-6xl mx-auto px-6 py-20">
      {/* Background Glow Effects */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-300/20 blur-3xl"
      />

      <div className="relative">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">
            The Numbers
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">
            Impact at a Glance
          </h2>
        </motion.div>

        {/* Cards */}

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          style={{ perspective: "1500px" }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              sub={stat.sub}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}