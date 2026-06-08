"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, MapPin, Zap, Target, Plane } from "lucide-react";

const stats = [
  { value: "#1", label: "Cleanest City in India (7 yrs)", icon: MapPin },
  { value: "12%+", label: "Annual startup growth rate", icon: TrendingUp },
  { value: "3 IITs", label: "& top engineering institutes nearby", icon: Zap },
  { value: "₹50K Cr+", label: "Infrastructure investment pipeline", icon: Target },
];

export default function WhyIndore() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll animations for text
  const textY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Scroll animations for stats cards
  const statsScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Background rotating shapes
  const shape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const shape2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotationX = ((y - centerY) / centerY) * 25;
    const rotationY = ((x - centerX) / centerX) * 25;

    setCardRotation({ x: rotationX, y: rotationY });
    setMousePosition({
      x: ((x - centerX) / centerX) * 30,
      y: ((y - centerY) / centerY) * 30,
    });
  };

  const handleMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
    setMousePosition({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-indigo-950 py-24 px-6 overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Airplane */}
        <motion.div
          className="absolute"
          initial={{ left: "-100px", top: "50px" }}
          animate={{
            left: ["calc(-100px)", "calc(100% + 100px)"],
            top: ["50px", "70%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{
              rotate: 45,
            }}
            className="relative flex items-center justify-center"
          >
            <Plane size={48} className="text-blue-200 drop-shadow-lg" strokeWidth={1.2} />
            
            {/* Motion trail behind airplane */}
            <motion.div
              className="absolute w-48 h-20 bg-gradient-to-r from-blue-300/60 via-indigo-300/30 to-transparent rounded-full blur-2xl"
              animate={{
                opacity: [0.6, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              style={{
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Rotating circles */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-blue-500/20"
          style={{ rotate: shape1Rotate }}
          transition={{ type: "tween", duration: 0 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full border-2 border-indigo-500/20"
          style={{ rotate: shape2Rotate }}
          transition={{ type: "tween", duration: 0 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent" />
        </motion.div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/50 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left section - Text */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-blue-300 text-sm font-semibold tracking-widest uppercase block mb-4"
          >
            ✨ Gateway to Growth
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Indore?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-white/80 leading-relaxed text-lg hover:text-white transition-colors duration-300">
              Indore is rapidly emerging as Central India's startup capital — combining world-class
              infrastructure, a thriving talent pool, and an entrepreneurial culture that punches well above
              its weight on the national stage.
            </p>
            <p className="text-white/80 leading-relaxed text-lg hover:text-white transition-colors duration-300">
              Being headquartered here lets us discover high-conviction founders early, before the capital
              markets catch up — giving our portfolio companies a meaningful head-start.
            </p>
          </motion.div>

          {/* Decorative line animation */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-blue-200 text-sm font-semibold">Emerging Hub</span>
          </motion.div>
        </motion.div>

        {/* Right section - Stats Grid */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          style={{
            scale: statsScale,
            opacity: statsOpacity,
          }}
        >
          {stats.map(({ value, label, icon: Icon }, idx) => (
            <motion.div
              key={label}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + idx * 0.15,
                ease: "easeOut",
              }}
              className="group relative h-48"
              style={{
                perspective: 1200,
              }}
            >
              {/* Outer glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-blue-500/40 blur-2xl"
                animate={
                  hoveredCard === idx
                    ? { opacity: 1, scale: 1.1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4 }}
              />

              {/* 3D card container */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/30 p-6 backdrop-blur-xl overflow-hidden cursor-pointer shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={
                  hoveredCard === idx
                    ? {
                        rotateX: cardRotation.x,
                        rotateY: cardRotation.y,
                        z: 50,
                      }
                    : {
                        rotateX: 0,
                        rotateY: 0,
                        z: 0,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {/* Dynamic light reflection */}
                <motion.div
                  className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                  animate={
                    hoveredCard === idx
                      ? {
                          x: mousePosition.x * 2,
                          y: mousePosition.y * 2,
                          opacity: 0.6,
                        }
                      : {
                          x: 0,
                          y: 0,
                          opacity: 0,
                        }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl"
                  animate={
                    hoveredCard === idx
                      ? { opacity: 1, backgroundPosition: "100% 0%" }
                      : { opacity: 0, backgroundPosition: "0% 0%" }
                  }
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon with 3D effect */}
                  <motion.div
                    className="flex items-center justify-center"
                    animate={
                      hoveredCard === idx
                        ? {
                            rotateZ: 360,
                            scale: 1.3,
                          }
                        : {
                            rotateZ: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      rotateZ: { duration: 0.8, ease: "easeInOut" },
                      scale: { duration: 0.4, type: "spring", stiffness: 300 },
                    }}
                    style={{
                      filter: hoveredCard === idx ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))" : "none",
                    }}
                  >
                    <motion.div
                      className="relative"
                      animate={
                        hoveredCard === idx
                          ? {
                              y: -5,
                            }
                          : {
                              y: 0,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-xl">
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Icon aura effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-blue-300/50"
                        animate={
                          hoveredCard === idx
                            ? { boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)" }
                            : { boxShadow: "0 0 0px rgba(59, 130, 246, 0)" }
                        }
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    animate={
                      hoveredCard === idx
                        ? { y: -5 }
                        : { y: 0 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <motion.p
                      className="text-3xl md:text-4xl font-bold text-blue-100 text-center"
                      animate={
                        hoveredCard === idx
                          ? { scale: 1.15 }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {value}
                    </motion.p>
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    className="text-xs text-center text-white/70 font-medium leading-tight"
                    animate={
                      hoveredCard === idx
                        ? { opacity: 1, color: "rgba(255,255,255,0.9)" }
                        : { opacity: 0.7 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {label}
                  </motion.p>
                </div>

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  animate={
                    hoveredCard === idx
                      ? {
                          borderColor: "rgba(59, 130, 246, 0.6)",
                          boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.3)",
                        }
                      : {
                          borderColor: "rgba(59, 130, 246, 0)",
                          boxShadow: "inset 0 0 0px rgba(59, 130, 246, 0)",
                        }
                  }
                  transition={{ duration: 0.4 }}
                />

                {/* Animated particles on hover */}
                {hoveredCard === idx && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                        }}
                        animate={{
                          x: `calc(50% + ${Math.cos((i / 6) * Math.PI * 2) * 80}px)`,
                          y: `calc(50% + ${Math.sin((i / 6) * Math.PI * 2) * 80}px)`,
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Shimmer effect */}
                <motion.div
                  className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full blur-3xl"
                  animate={
                    hoveredCard === idx
                      ? {
                          x: ["0%", "100%"],
                          y: ["0%", "100%"],
                        }
                      : {
                          x: "0%",
                          y: "0%",
                        }
                  }
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
