

"use client";

import { motion } from "framer-motion";

const exits = [
  {
    year: "2024",
    company: "CloudStack",
    type: "Strategic Acquisition",
    acquirer: "US-listed infrastructure co.",
    multiple: "6.2x",
    amount: "₹120 Cr",
  },
  {
    year: "2023",
    company: "FinBridge",
    type: "Secondary Sale",
    acquirer: "Tier-1 VC fund",
    multiple: "4.8x",
    amount: "₹38 Cr",
  },
  {
    year: "2023",
    company: "AgriLink",
    type: "Merger",
    acquirer: "Listed agri-tech company",
    multiple: "3.5x",
    amount: "₹22 Cr",
  },
  {
    year: "2022",
    company: "LogiSmart",
    type: "Strategic Acquisition",
    acquirer: "Pan-India logistics group",
    multiple: "5.1x",
    amount: "₹55 Cr",
  },
];

export default function ExitHighlights() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 py-24 px-6">
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Track Record
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Exit Highlights
          </h2>

          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto">
            A selection of portfolio exits that demonstrate our ability to
            create and realise value.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Vertical Line */}

          <div className="absolute left-1/2 top-0 hidden md:block h-full w-px bg-white/10 -translate-x-1/2" />

          {exits.map(
            (
              { year, company, type, acquirer, multiple, amount },
              index
            ) => (
              <motion.div
                key={company}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className={`
                  relative
                  flex
                  items-center
                  mb-10
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >
                {/* Timeline Dot */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    hidden md:block
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-5
                    h-5
                    rounded-full
                    bg-indigo-400
                    shadow-[0_0_20px_rgba(129,140,248,0.8)]
                  "
                />

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    group
                    w-full
                    md:w-[46%]
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-md
                    p-7
                    overflow-hidden
                    relative
                  "
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />

                  {/* Shine */}

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "250%" }}
                    transition={{ duration: 1 }}
                  >
                    <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-indigo-400 font-bold text-xl">
                          {year}
                        </p>

                        <p className="text-white font-bold text-lg mt-2">
                          {company}
                        </p>

                        <p className="text-white/50 text-sm mt-1">
                          {type} · {acquirer}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="text-right"
                      >
                        <p className="text-green-400 font-bold text-2xl">
                          {multiple}
                        </p>

                        <p className="text-white/40 text-xs">
                          Return
                        </p>
                      </motion.div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Exit Value
                      </span>

                      <p className="text-white font-bold text-lg">
                        {amount}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}