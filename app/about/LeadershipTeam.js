"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Star } from "lucide-react";
import Image from "next/image";

const leaders = [
  { name: "Ravi Kodanda", role: "Founder & Managing Partner", bio: "20+ years in finance and venture investing across India.", index: 0 , image: "/img1.png", },
  { name: "Priya Sharma", role: "Partner Portfolio & Growth", bio: "Ex-founder turned investor with deep operational expertise.", index: 1 , image: "/img2.png", },
  { name: "Arjun Mehta", role: "Investment Analyst", bio: "Specialises in fintech and deep tech deal sourcing.", index: 2 , image: "/img3.png", },
];

export default function LeadershipTeam() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll animations with different patterns
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);

  const containerRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  // Different scroll animations for each card (coming from different directions)
  const card0X = useTransform(scrollYProgress, [0.1, 0.3], [-100, 0]);
  const card0Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const card1Y = useTransform(scrollYProgress, [0.15, 0.35], [100, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  const card2X = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      cardIndex,
    });
  };

  return (
    <section ref={ref} className="relative bg-indigo-950 py-20 px-6 overflow-hidden">
     

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with scale animation */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-white text-sm font-semibold tracking-widest uppercase"
          >
            The People
          </motion.span>

          <motion.h2
            className="mt-3 text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          >
            Leadership{" "}
            <motion.span
              className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-white"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Team
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Experienced leaders guiding smart capital deployment and founder success
          </motion.p>
        </motion.div>

        {/* Leadership Cards Grid */}
        <motion.div
          style={{ rotate: containerRotate }}
          className="grid md:grid-cols-3 gap-8"
        >
          {leaders.map((leader) => {
            let cardAnimations = {};
            if (leader.index === 0) {
              cardAnimations = { x: card0X, opacity: card0Opacity };
            } else if (leader.index === 1) {
              cardAnimations = { y: card1Y, opacity: card1Opacity };
            } else {
              cardAnimations = { x: card2X, opacity: card2Opacity };
            }

            return (
           <motion.div
  key={leader.name}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: leader.index * 0.15,
  }}
  className="group"
>
  <div
    className="
      relative
      h-[500px]
      rounded-[32px]
      overflow-hidden
      
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
  >
    {/* Full Image */}
   <div className="absolute inset-0 overflow-hidden">
  <Image
    src={leader.image}
    alt={leader.name}
    fill
    className="
      object-cover
      transition-all
      duration-700
      group-hover:scale-110
    "
  />
</div>


    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    {/* Plus Button */}
    <div
      className="
        absolute
        right-5
        bottom-5
        z-30
        w-12
        h-12
        rounded-full
        bg-black/80
        backdrop-blur-xl
        flex
        items-center
        justify-center
        text-white
        text-2xl
        transition-all
        duration-500
        group-hover:rotate-45
      "
    >
      +
    </div>

    {/* Content Panel */}
    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        z-20
        bg-gradient-to-t
        from-black
        via-black/95
        to-transparent

        p-7

        translate-y-[72%]
        group-hover:translate-y-0

        transition-all
        duration-700
        ease-out
      "
    >
      {/* Name */}
      <h3 className="text-white text-2xl font-bold">
        {leader.name}
      </h3>

      {/* Role */}
      <p className="mt-2 text-white text-sm font-medium">
        {leader.role}
      </p>

      {/* Divider */}
      {/* <div className="w-12 h-[2px] bg-cyan-400 mt-4 mb-4" /> */}

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {leader.bio}
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mt-6">
        <button
          className="
            w-10
            h-10
            rounded-full
            bg-white/10
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            hover:bg-cyan-500
            transition-all
          "
        >
          <Linkedin size={16} />
        </button>

        <button
          className="
            w-10
            h-10
            rounded-full
            bg-white/10
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            hover:bg-cyan-500
            transition-all
          "
        >
          <Mail size={16} />
        </button>
      </div>
    </div>

    {/* Always Visible Name */}
    <div
      className="
        absolute
        left-6
        bottom-6
        z-10
        transition-all
        duration-500
        group-hover:opacity-0
      "
    >
      {/* <h3 className="text-white text-2xl font-bold">
        {leader.name}
      </h3> */}

      <p className="text-indigo-600 text-sm">
        {leader.role}
      </p>
    </div>
  </div>
</motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
