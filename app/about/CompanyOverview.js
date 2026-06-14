"use client";

// import Image from "next/image";
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

 
   
 
 

 

  return (
    <section
      ref={ref}
      className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center min-h-screen"
    
    >
   

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
          Company <span className="text-indigo-800">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-gray-600 leading-relaxed text-lg"
        >
          Kodanda Investments is a Indore headquartered venture capital firm managing ₹20+ crores in
          corporate funds. We partner with early to growth stage startups solving real problems across
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
              <p className="text-3xl md:text-5xl font-bold text-indigo-800">
                {val}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-semibold">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
    </section>
  );
}
