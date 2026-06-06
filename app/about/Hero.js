// import Navbar from "../CommonComp/Navbar";

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[60vh] bg-indigo-950 overflow-hidden">
//       <Navbar />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)]" />
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
//         <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
//           About Kodanda Investments
//         </span>
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
//           Fueling India's <span className="text-indigo-400">Next Wave</span> of Innovation
//         </h1>
//         <p className="mt-5 text-white/60 text-lg max-w-xl">
//           A Indore-based investment firm committed to discovering and scaling visionary founders
//           across India's fastest-growing industrial corridors.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import Navbar from "../CommonComp/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Premium scroll-driven line-by-line reveal
  // Each line transitions from 15% opacity to 100% opacity
  // Once revealed, lines STAY at 100% (no fade back)

  // Line 1: About Kodanda Investments
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.12, 0.98, 1],
    [0.15, 1, 1, 1]
  );

  // Line 2: Fueling India's Next Wave
  const opacity2 = useTransform(
    scrollYProgress,
    [0.12, 0.32, 0.98, 1],
    [0.1, 1, 1, 1]
  );

  // Line 3: of Innovation
  const opacity3 = useTransform(
    scrollYProgress,
    [0.32, 0.52, 0.98, 1],
    [0.1, 1, 1, 1]
  );

  // Line 4: Indore-based investment firm
  const opacity4 = useTransform(
    scrollYProgress,
    [0.52, 0.72, 0.98, 1],
    [0.1, 1, 1, 1]
  );

  // Line 5: Backing visionary founders
  const opacity5 = useTransform(
    scrollYProgress,
    [0.72, 1, 1, 1],
    [0.1, 1, 1, 1]
  );

  return (
    <>
      <Navbar />
      <div
        ref={ref}
        className="relative w-full h-[600px] bg-gradient-to-b from-indigo-950 via-indigo-950 to-indigo-900 overflow-hidden"
      >
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)] pointer-events-none" />

        {/* Sticky pinned section */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Content container */}
          <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full">
              {/* Subtitle */}
              <motion.span
                style={{ opacity: opacity1 }}
                className="text-indigo-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 md:mb-8 block will-change-opacity"
              >
                About Kodanda Investments
              </motion.span>

              {/* Main Heading - Line 1 */}
              <motion.h1
                style={{ opacity: opacity2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 md:mb-6 block will-change-opacity"
              >
                Fueling India's
              </motion.h1>

              {/* Main Heading - Line 2 (highlight) */}
              <motion.h1
                style={{ opacity: opacity3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 block will-change-opacity"
              >
                Next Wave
              </motion.h1>

              {/* Subheading - Line 1 */}
              <motion.p
                style={{ opacity: opacity4 }}
                className="text-2xl md:text-3xl lg:text-4xl text-white font-medium max-w-3xl mb-8 md:mb-12 block will-change-opacity"
              >
                of Innovation
              </motion.p>

              {/* Description */}
              <motion.p
                style={{ opacity: opacity5 }}
                className="text-lg md:text-xl text-white max-w-2xl leading-relaxed block will-change-opacity"
              >
                An Indore-based investment firm committed to discovering and scaling visionary founders across India's fastest-growing industrial corridors
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}