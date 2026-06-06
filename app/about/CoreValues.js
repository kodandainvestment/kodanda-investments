"use client";

import { Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const values = [
  { Icon: Handshake, title: "Founder First", desc: "We treat founders as partners, not just portfolio entries." },
  { Icon: Lightbulb, title: "Bold Thinking", desc: "We back contrarian ideas that challenge the status quo." },
  { Icon: ShieldCheck, title: "Integrity", desc: "Transparent dealing and honest feedback at every step." },
  { Icon: TrendingUp, title: "Long-Term Value", desc: "We measure success in decades, not quarters." },
];

export default function CoreValues() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Smooth scroll animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  // Card animations - falling from top
  const card0Y = useTransform(scrollYProgress, [0, 0.25], [-60, 0]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const card1Y = useTransform(scrollYProgress, [0.05, 0.3], [-60, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);

  const card2Y = useTransform(scrollYProgress, [0.1, 0.35], [-60, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  const card3Y = useTransform(scrollYProgress, [0.15, 0.4], [-60, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  const cardAnimations = [
    { y: card0Y, opacity: card0Opacity },
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
    { y: card3Y, opacity: card3Opacity },
  ];

  return (
    <section ref={ref} className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-48 h-48 rounded-full bg-indigo-200/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-indigo-600 text-sm font-semibold tracking-widest uppercase"
          >
            What Drives Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-3 text-3xl md:text-5xl font-bold text-indigo-950"
          >
            Core Values
          </motion.h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map(({ Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              style={{
                y: cardAnimations[idx].y,
                opacity: cardAnimations[idx].opacity,
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card container */}
              <motion.div
                className="relative flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 border border-white/50"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                {/* Icon container - simple with subtle animation */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg"
                  animate={
                    hoveredCard === idx
                      ? { scale: 1.1 }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="font-bold text-indigo-950 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-700 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {desc}
                </motion.p>

                {/* Subtle bottom line on hover */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-1 bg-indigo-600 rounded-full"
                  initial={{ width: 0, x: "-50%" }}
                  animate={hoveredCard === idx ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
