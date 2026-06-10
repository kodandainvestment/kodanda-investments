
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const featured = [
  {
    name: "CloudStack",
    tag: "SaaS · Series B",
    headline: "Multi-cloud cost optimisation at enterprise scale.",
    detail:
      "CloudStack helped 200+ enterprises cut cloud bills by 38% on average. Now expanding into the US market.",
    raised: "₹9 Cr",
    growth: "3.8x",
    logo: "CS",
    accent: "from-indigo-600 to-purple-700",
  },
  {
    name: "CartNinja",
    tag: "E-commerce · Series A",
    headline: "Redefining last-mile logistics intelligence for D2C brands.",
    detail:
      "Powers 500+ D2C brands with real-time delivery prediction and automated returns management.",
    raised: "₹5 Cr",
    growth: "2.9x",
    logo: "CN",
    accent: "from-blue-600 to-cyan-600",
  },
  {
    name: "NeuralEdge",
    tag: "Deep Tech · Seed",
    headline: "Edge AI chips purpose-built for industrial IoT.",
    detail:
      "First Indian fabless startup to receive a ₹2 Cr PLI grant. Pilot with 3 auto OEMs underway.",
    raised: "₹2.1 Cr",
    growth: "4.2x",
    logo: "NE",
    accent: "from-violet-600 to-fuchsia-600",
  },
];

function StackCard({ card, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85 + index * 0.05, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 0]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [12, 0]
  );

  return (
    <div ref={ref} className="h-[80vh] relative">
      <motion.div
        style={{
          scale,
          y,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -12,
          rotateY: 6,
          scale: 1.02,
        }}
        className="
          sticky
          top-24
          rounded-2xl
          overflow-hidden
          bg-white
          shadow-xl
          hover:shadow-[0_25px_50px_rgba(79,70,229,0.15)]
          transition-all
          duration-500
        "
      >
        <div
          className={`bg-gradient-to-br ${card.accent} p-8 flex items-center gap-4`}
        >
          <motion.div
            className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {card.logo}
          </motion.div>

          <div>
            <h3 className="text-white font-bold text-xl">{card.name}</h3>
            <p className="text-white/70 text-xs mt-0.5">{card.tag}</p>
          </div>
        </div>

        <div className="p-7 flex flex-col">
          <p className="font-semibold text-indigo-950 leading-snug">
            {card.headline}
          </p>

          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            {card.detail}
          </p>

          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-2xl font-bold text-indigo-700">
                {card.raised}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Total Raised
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">
                {card.growth}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Return Multiple
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedInvestments() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">
            Spotlight
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">
            Featured Investments
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            Standout companies in our portfolio that are reshaping their
            industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {featured.map((card, index) => (
            <StackCard
              key={card.name}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}