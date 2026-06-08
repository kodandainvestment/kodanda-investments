"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function CompanyOverview() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll-driven animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageRotateX = useTransform(scrollYProgress, [0.2, 0.8], [20, -10]);
  const imageRotateZ = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const statsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Mouse hover handler
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setMousePosition({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      ref={ref}
      className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center min-h-screen"
      style={{ perspective: "1200px" }}
    >
      {/* Animated background elements */}
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-32 bottom-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Left Content */}
      <motion.div style={{ opacity: textOpacity, y: textY }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-indigo-600 text-sm font-semibold tracking-widest uppercase"
        >
          Who We Are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-3xl md:text-5xl font-bold text-indigo-950"
        >
          Company <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-gray-600 leading-relaxed text-lg"
        >
          Kodanda Investments is a Indore-headquartered venture capital firm managing ₹20+ crores in
          corporate funds. We partner with early-to-growth-stage startups solving real problems across
          fintech, edtech, healthtech, and deep-tech sectors.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-gray-600 leading-relaxed text-lg"
        >
          Founded with a conviction that India's Tier-2 cities harbour untapped entrepreneurial potential,
          we bridge capital, mentorship, and networks to transform bold ideas into enduring businesses.
        </motion.p>

        {/* Stats with scroll animation */}
        <motion.div
          style={{ opacity: statsOpacity }}
          className="mt-8 flex gap-10"
        >
          {[["₹20Cr+", "AUM"], ["30+", "Portfolio Cos."], ["2018", "Founded"]].map(([val, label], idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="group cursor-pointer"
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {val}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-semibold">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image with 3D effect */}
      <motion.div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity: imageOpacity,
          scale: imageScale,
          rotateX: isHovering ? mousePosition.rotateX : imageRotateX,
          rotateY: isHovering ? mousePosition.rotateY : imageRotateZ,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      >
        {/* Image container */}
        <div
          className="relative w-full h-auto perspective"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent pointer-events-none" />
          <Image
            src="/about-us.png"
            alt="About Kodanda"
            width={600}
            height={420}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Floating border effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(79, 70, 229, 0.3)",
              "0 0 40px rgba(79, 70, 229, 0.6)",
              "0 0 20px rgba(79, 70, 229, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-2 border-2 border-indigo-500/50 rounded-2xl pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
