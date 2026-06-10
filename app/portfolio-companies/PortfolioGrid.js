"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const industries = ["All", "Fintech", "Edtech", "Healthtech", "Deep Tech", "E-commerce", "SaaS"];

const companies = [
  { name: "PayEase", industry: "Fintech", stage: "Series A", location: "Indore", desc: "UPI-powered B2B payments for MSMEs.", raised: "₹3.2 Cr", logo: "PE" },
  { name: "LearnSphere", industry: "Edtech", stage: "Seed", location: "Bhopal", desc: "Vernacular skill-training platform for Tier-3 students.", raised: "₹1.5 Cr", logo: "LS" },
  { name: "MedLoop", industry: "Healthtech", stage: "Pre-Seed", location: "Indore", desc: "AI-driven diagnostics for rural clinics.", raised: "₹80 L", logo: "ML" },
  { name: "NeuralEdge", industry: "Deep Tech", stage: "Seed", location: "Pune", desc: "Edge AI chips for industrial IoT.", raised: "₹2.1 Cr", logo: "NE" },
  { name: "CartNinja", industry: "E-commerce", stage: "Series A", location: "Mumbai", desc: "D2C logistics intelligence platform.", raised: "₹5 Cr", logo: "CN" },
  { name: "CloudStack", industry: "SaaS", stage: "Series B", location: "Bengaluru", desc: "Multi-cloud cost optimisation for enterprises.", raised: "₹9 Cr", logo: "CS" },
  { name: "InsureBot", industry: "Fintech", stage: "Seed", location: "Indore", desc: "Conversational insurance for gig workers.", raised: "₹1.2 Cr", logo: "IB" },
  { name: "SkillBridge", industry: "Edtech", stage: "Series A", location: "Jaipur", desc: "Campus-to-corporate upskilling platform.", raised: "₹4 Cr", logo: "SB" },
  { name: "BioScan", industry: "Healthtech", stage: "Pre-Seed", location: "Hyderabad", desc: "Portable biosensors for preventive care.", raised: "₹60 L", logo: "BS" },
];

const stageColor = {
  "Pre-Seed": "bg-amber-100 text-amber-700",
  Seed: "bg-green-100 text-green-700",
  "Series A": "bg-blue-100 text-blue-700",
  "Series B": "bg-purple-100 text-purple-700",
};



function PortfolioCard({ c, index, stageColor }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 24;
    const rotateX = ((y / rect.height) - 0.5) * -24;

    setMousePosition({
      x,
      y,
      rotateX,
      rotateY,
    });
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setMousePosition({
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
        })
      }
      animate={{
        rotateX: mousePosition.rotateX || 0,
        rotateY: mousePosition.rotateY || 0,
      }}
      whileHover={{
        scale: 1.05,
        y: -12,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}

      className="
        relative
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-200
      "
    >
      {/* Dynamic Glow Following Cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: `radial-gradient(
            250px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(99,102,241,0.18),
            transparent 60%
          )`,
        }}
      />

      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10" />

      {/* Floating Logo */}
      <motion.div
        className="absolute -right-5 -top-5 w-24 h-24 rounded-full bg-indigo-100/40 blur-2xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div
        className="relative z-10"
        style={{
          transform: "translateZ(60px)",
        }}
      >
        <div className="flex items-center gap-4 mb-5">
          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm"
          >
            {c.logo}
          </motion.div>

          <div>
            <h3 className="font-bold text-indigo-950 text-lg">
              {c.name}
            </h3>

            <p className="text-gray-400 text-xs">
              {c.location}
            </p>
          </div>

          <span
            className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${stageColor[c.stage]}`}
          >
            {c.stage}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          {c.desc}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">
            {c.industry}
          </span>

          <motion.span
            whileHover={{
              scale: 1.08,
            }}
            className="text-indigo-700 font-bold text-sm"
          >
            {c.raised} raised
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? companies : companies.filter((c) => c.industry === active);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {industries.map((ind) => (
          <motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  key={ind}
  onClick={() => setActive(ind)}
  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
    active === ind
      ? "bg-indigo-700 text-white border-indigo-700"
      : "bg-white text-gray-600 border-gray-200 hover:border-indigo-400 hover:text-indigo-600"
  }`}
>
  {ind}
</motion.button>
        ))}
      </div>

     <div
  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
  style={{ perspective: "2000px" }}
>
 <AnimatePresence mode="popLayout">
  {filtered.map((c, index) => (
    <PortfolioCard
      key={c.name}
      c={c}
      index={index}
      stageColor={stageColor}
    />
  ))}
</AnimatePresence>
</div>
    </section>
  );
}
