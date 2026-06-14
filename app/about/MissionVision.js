
"use client";

import { Target, Eye } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MissionVision() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

 

const card2Y = useTransform(
  scrollYProgress,
  [0.2, 0.5],
  [500, 0]
);

const card2Opacity = useTransform(
  scrollYProgress,
  [0.2, 0.35],
  [0, 1]
);

  return (
    <section
      ref={ref}
      className="relative bg-indigo-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 px-6">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex sticky top-0 h-screen items-center">
          <div>
      
          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="relative h-[120vh]">

  <div className="sticky top-24 flex justify-end">

    <div className="relative w-full max-w-lg h-[420px]">

      {/* CARD 1 */}
      <motion.div
        className="absolute inset-0 z-10"
      >
        <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

          <div className="absolute top-0 right-0 w-52 h-52 bg-indigo-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="text-5xl font-bold text-white/10 mb-6">
              01
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Target size={18} className="text-indigo-300" />
              <span className="text-white text-sm">
                Our Mission
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Empowering Visionary Founders
            </h3>

            <p className="text-white/70 text-base leading-relaxed">
              To democratise venture capital by channelling smart money and
              strategic mentorship into high-potential startups — especially
              from India's emerging cities — enabling them to compete on a
              global stage.
            </p>

            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 mt-8" />
          </div>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        style={{
          y: card2Y,
          opacity: card2Opacity,
        }}
        className="absolute inset-0 z-20"
      >
        <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

          <div className="absolute bottom-0 left-0 w-52 h-52 bg-blue-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="text-5xl font-bold text-white/10 mb-6">
              02
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Eye size={18} className="text-blue-300" />
              <span className="text-white text-sm">
                Our Vision
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Building India's Next Generation
            </h3>

            <p className="text-white/70 text-base leading-relaxed">
              To be India's most founder-friendly investment firm,
              recognised for building transformative companies that uplift
              communities, create employment, and drive sustainable economic
              growth.
            </p>

            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 mt-8" />
          </div>
        </div>
      </motion.div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}