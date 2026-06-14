"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const funds = [
  { name: "Seed Fund I", corpus: "₹5 Cr", focus: "Pre-seed & Seed", stage: "Deployed", index: 0 },
  { name: "Growth Fund II", corpus: "₹10 Cr", focus: "Series A", stage: "Active", index: 1 },
  { name: "Strategic Fund III", corpus: "₹8 Cr", focus: "Seed to Series B", stage: "Raising", index: 2 },
];

export default function FundManagement() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  // Mouse hover handler for 3D tilt
  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setMousePosition({ rotateX, rotateY, cardIndex });
  };

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section ref={ref} className="relative w-full min-h-screen py-20 overflow-hidden bg-white">
      {/* Full-width 3D Background Finance Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Rotating 3D Coins */}
        <motion.div
          className="absolute top-10 left-[10%] w-32 h-32 rounded-full border-4 border-indigo-400/30 flex items-center justify-center"
          animate={{
            rotateZ: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="text-4xl font-bold text-indigo-400/50">₹</div>
        </motion.div>

        {/* Floating Chart Element */}
        <motion.div
          className="absolute bottom-32 right-[8%] w-40 h-40 rounded-lg border-2 border-purple-400/30 p-4 flex flex-col justify-end"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {[0.4, 0.7, 0.5, 0.9, 0.6].map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-purple-500 to-indigo-500 mx-1 opacity-50"
              animate={{ scaleY: [height, height * 1.3, height] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Animated Gradient Orbs - Full width */}
        <motion.div
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Additional floating orbs for full coverage */}
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Currency Symbols - Spread across full width */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`currency-${i}`}
            className="absolute text-indigo-400/30 text-3xl font-bold"
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            ₹
          </motion.div>
        ))}

        {/* Animated Grid Lines - Full width */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={i * 8.33}
              y1="0"
              x2={i * 8.33}
              y2="100"
              stroke="rgb(79, 70, 229)"
              strokeWidth="0.3"
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.svg>

        {/* Horizontal animated lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`h-line-${i}`}
              x1="0"
              y1={i * 12.5}
              x2="100"
              y2={i * 12.5}
              stroke="rgb(147, 112, 219)"
              strokeWidth="0.2"
              animate={{
                opacity: [0.05, 0.3, 0.05],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-600 text-sm font-semibold tracking-widest uppercase"
          >
            Capital Allocation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl font-bold text-indigo-950"
          >
            Fund <span className="text-indigo-900">Management</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto text-lg"
          >
            Structured funds designed to deploy capital efficiently at every stage of a startup's journey.
          </motion.p>
        </motion.div>

        {/* Fund Cards */}
        <motion.div
          style={{
            opacity: cardsOpacity,
            y: cardsY,
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {funds.map((f) => (
            <motion.div
              key={f.name}
              onMouseMove={(e) => handleMouseMove(e, f.index)}
              onMouseEnter={() => handleMouseEnter(f.index)}
              onMouseLeave={handleMouseLeave}
              style={
                hoveredCard === f.index
                  ? {
                      rotateX: mousePosition.rotateX,
                      rotateY: mousePosition.rotateY,
                    }
                  : {}
              }
              transition={hoveredCard === f.index ? { type: "spring", stiffness: 300, damping: 30 } : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: f.index * 0.15 }}
              className="group relative cursor-pointer"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ opacity: 0.3 }}
              />

              {/* Card */}
              <motion.div
                className="relative border border-indigo-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)",
                }}
              >
                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />

                {/* Stage badge with animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: f.index * 0.1 }}
                  className="inline-block"
                >
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${
                      f.stage === "Deployed"
                        ? "bg-green-100 text-green-700"
                        : f.stage === "Active"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {f.stage}
                  </p>
                </motion.div>

                {/* Fund Icon */}
                <motion.div
                  className="mt-6 w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <TrendingUp size={24} className="text-white" />
                </motion.div>

                {/* Fund Name */}
                <motion.h3
                  className="mt-4 text-xl font-bold text-indigo-950"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: f.index * 0.15 }}
                >
                  {f.name}
                </motion.h3>

                {/* Corpus Amount with animation */}
                <motion.p
                  className="mt-4 text-4xl font-bold text-indigo-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: f.index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {f.corpus}
                </motion.p>

                {/* Focus text */}
                <motion.p
                  className="mt-3 text-sm text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: f.index * 0.2 }}
                >
                  Focus: <span className="text-indigo-700 font-semibold">{f.focus}</span>
                </motion.p>

                {/* Animated accent line */}
                <motion.div
                  className="mt-6 h-1 bg-indigo-900 ounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60"
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
