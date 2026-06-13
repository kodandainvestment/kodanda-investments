

"use client";

import { motion } from "framer-motion";
import Navbar from "../CommonComp/Navbar";
import FeaturedStories from "./FeaturedStories";
import FounderTestimonials from "./FounderTestimonials";
import ExitHighlights from "./ExitHighlights";
import ImpactNumbers from "./ImpactNumbers";

// export const metadata = {
//   title: "Suoccess Stories – Kodanda Investments",
// };

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-indigo-950">
        <Navbar />

        {/* Animated Background Orbs */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"
        />

        {/* Grid Overlay */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* Hero Content */}

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-block
              bg-indigo-800
              text-indigo-300
              text-xs
              font-semibold
              tracking-widest
              uppercase
              px-4
              py-1.5
              rounded-full
              mb-5
            "
          >
            Success Stories
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Founders Who <br />
            <span className="text-indigo-400">
              Changed the Game
            </span>
          </motion.h1>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 140,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-indigo-400
              to-transparent
              mx-auto
              mt-6
            "
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              mt-5
              text-indigo-200
              text-lg
              max-w-xl
              mx-auto
            "
          >
            Real stories of capital, mentorship, and conviction
            turning bold ideas into market-defining companies.
          </motion.p>

          {/* Floating Indicator */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-14 flex justify-center"
          >
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </div>

      <ImpactNumbers />
      <FeaturedStories />
      <FounderTestimonials />
      <ExitHighlights />
    </div>
  );
}