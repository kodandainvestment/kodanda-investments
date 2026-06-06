"use client";

import { Target, Eye } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function MissionVision() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll animations
  const containerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const containerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  const card1Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);

  const card2Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.4], [60, 0]);

  // Mouse hover handler for 3D tilt
  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setMousePosition({ rotateX, rotateY, cardIndex });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const cards = [
    {
      Icon: Target,
      label: "Our Mission",
      text:
        "To democratise venture capital by channelling smart money and strategic mentorship into high-potential startups — especially from India's emerging cities — enabling them to compete on a global stage.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      Icon: Eye,
      label: "Our Vision",
      text:
        "To be India's most founder-friendly investment firm, recognised for building transformative companies that uplift communities, create employment, and drive sustainable economic growth.",
      color: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <section ref={ref} className="relative bg-indigo-950 py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-40 bottom-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <motion.div
        ref={ref}
        style={{
          opacity: containerOpacity,
          y: containerY,
        }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Section Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Impact Vision</span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {cards.map(({ Icon, label, text, color }, idx) => (
            <motion.div
              key={label}
              style={
                hoveredCard === idx
                  ? {
                      scale: card1Scale,
                      opacity: card1Opacity,
                      y: card1Y,
                      rotateX: mousePosition.rotateX,
                      rotateY: mousePosition.rotateY,
                    }
                  : idx === 0
                  ? {
                      scale: card1Scale,
                      opacity: card1Opacity,
                      y: card1Y,
                    }
                  : {
                      scale: card2Scale,
                      opacity: card2Opacity,
                      y: card2Y,
                    }
              }
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              transition={hoveredCard === idx ? { type: "spring", stiffness: 300, damping: 30 } : undefined}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <motion.div
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 40px rgba(79, 70, 229, 0.4)",
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 blur-2xl`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 p-[1px]`}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-5`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon size={22} className="text-white" />
                  </motion.div>

                  {/* Label with animation */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  >
                    {label}
                  </motion.h3>

                  {/* Text with animation */}
                  <motion.p
                    className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  >
                    {text}
                  </motion.p>

                  {/* Accent line animation */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${color} mt-6 rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Floating particles effect */}
                <motion.div
                  className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r ${color} opacity-0 blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
