"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Star } from "lucide-react";

const leaders = [
  { name: "Ravi Kodanda", role: "Founder & Managing Partner", bio: "20+ years in finance and venture investing across India.", index: 0 },
  { name: "Priya Sharma", role: "Partner – Portfolio & Growth", bio: "Ex-founder turned investor with deep operational expertise.", index: 1 },
  { name: "Arjun Mehta", role: "Investment Analyst", bio: "Specialises in fintech and deep-tech deal sourcing.", index: 2 },
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
    <section ref={ref} className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-20 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating animated shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute rounded-full border-2 border-indigo-300/30"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            rotate: 360,
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: { duration: 25 + i * 8, repeat: Infinity, ease: "linear" },
            opacity: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

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
            className="text-indigo-600 text-sm font-semibold tracking-widest uppercase"
          >
            The People
          </motion.span>

          <motion.h2
            className="mt-3 text-3xl md:text-5xl font-bold text-indigo-950"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          >
            Leadership{" "}
            <motion.span
              className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
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
                style={cardAnimations}
                onMouseEnter={() => setHoveredCard(leader.index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, leader.index)}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="group relative cursor-pointer"
              >
                {/* Spotlight effect */}
                {hoveredCard === leader.index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20"
                    style={{
                      background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(79, 70, 229, 0.4) 0%, transparent 70%)`,
                    }}
                  />
                )}

                {/* Card with flip animation on hover */}
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                  whileHover={{
                    y: -15,
                  }}
                  animate={
                    hoveredCard === leader.index
                      ? { rotateX: 5, rotateY: 5 }
                      : { rotateX: 0, rotateY: 0 }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden pointer-events-none"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgb(79, 70, 229), rgb(168, 85, 247), rgb(79, 70, 229))",
                        "linear-gradient(135deg, rgb(79, 70, 229), rgb(168, 85, 247), rgb(79, 70, 229))",
                        "linear-gradient(45deg, rgb(79, 70, 229), rgb(168, 85, 247), rgb(79, 70, 229))",
                      ],
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Content background */}
                  <div className="absolute inset-1 bg-white rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Star icon animation */}
                    <motion.div
                      className="flex justify-end mb-4"
                      animate={{
                        rotate: hoveredCard === leader.index ? 360 : 0,
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <Star size={20} className="text-indigo-400" fill="currentColor" />
                    </motion.div>

                    {/* Avatar with orbit animation */}
                    <div className="flex justify-center mb-6 relative">
                      <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                        animate={
                          hoveredCard === leader.index
                            ? { scale: [1, 1.08, 1] }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: hoveredCard === leader.index ? Infinity : 0,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        {leader.name.charAt(0)}
                      </motion.div>

                      {/* Orbital icons on hover */}
                      {hoveredCard === leader.index && (
                        <>
                          <motion.div
                            className="absolute"
                            animate={{
                              x: Math.cos(0) * 70,
                              y: Math.sin(0) * 70,
                              rotate: 360,
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Linkedin size={16} className="text-indigo-500" />
                          </motion.div>
                          <motion.div
                            className="absolute"
                            animate={{
                              x: Math.cos(Math.PI * 2 / 3) * 70,
                              y: Math.sin(Math.PI * 2 / 3) * 70,
                              rotate: -360,
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Mail size={16} className="text-purple-500" />
                          </motion.div>
                        </>
                      )}
                    </div>

                    {/* Name with character animation */}
                    <motion.h3
                      className="text-lg font-bold text-indigo-950 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {leader.name.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h3>

                    {/* Role with animated background */}
                    <motion.div
                      className="mt-2 relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                      <p className="text-indigo-600 text-sm font-semibold text-center py-2">
                        {leader.role}
                      </p>
                    </motion.div>

                    {/* Bio with gradient text animation */}
                    <motion.p
                      className="mt-4 text-gray-600 text-sm leading-relaxed flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                    >
                      {leader.bio}
                    </motion.p>

                    {/* Animated divider line */}
                    <motion.div
                      className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"
                      animate={{
                        opacity: hoveredCard === leader.index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />

                    {/* Social buttons with different animation */}
                    <motion.div
                      className="mt-4 flex gap-3 justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    >
                      <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
