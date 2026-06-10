"use client";

import { motion } from "framer-motion";


const stories = [
  {
    logo: "CS", company: "CloudStack", tag: "SaaS · Series B Exit",
    headline: "From ₹9 Cr seed to a ₹120 Cr strategic acquisition in 4 years.",
    story: "CloudStack's founders approached us with a sharp thesis: Indian enterprises were overpaying for multi-cloud management. We led their seed round in 2021. By 2024, they had 200+ enterprise clients and were acquired by a US-listed infrastructure company.",
    founder: "Aditya Nair, CEO",
    metrics: [{ label: "Return", value: "6.2x" }, { label: "Acquired for", value: "₹120 Cr" }, { label: "Time to exit", value: "4 yrs" }],
    accent: "from-[#2E2C77] to-[#2D2754]",
  },
  {
    logo: "CN", company: "CartNinja", tag: "E-commerce · Series B",
    headline: "D2C logistics intelligence that now powers 500+ brands.",
    story: "We backed CartNinja at Series A when they had 20 brand clients and a bold vision for AI-driven delivery prediction. Today they've grown 12x and are the backbone of the D2C supply chain for some of India's most recognisable consumer brands.",
    founder: "Sneha Kulkarni, Founder",
    metrics: [{ label: "Revenue growth", value: "12x" }, { label: "Brand clients", value: "500+" }, { label: "Return multiple", value: "2.9x" }],
    accent: "from-[#2D2754] to-[#32E1FC]",
  },
  {
    logo: "PE", company: "PayEase", tag: "Fintech · Series A",
    headline: "Making UPI work for India's 60 million MSMEs.",
    story: "PayEase came to us with a product but no GTM. We helped them rebuild their distribution strategy, connected them to 3 banking partners, and co-led their Series A. Monthly payment volume crossed ₹200 Cr within 18 months of our investment.",
    founder: "Karan Mehta, Co-founder",
    metrics: [{ label: "Monthly TPV", value: "₹200 Cr" }, { label: "MSME clients", value: "18,000+" }, { label: "Return so far", value: "3.1x" }],
    accent: "from-[#2E2C77] to-[#32E1FC]",
  },
];

export default function FeaturedStories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Spotlight</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Featured Stories</h2>
        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">The companies that define what we mean by founder-first investing.</p>
      </div>
    <div className="flex flex-col gap-16">
  {stories.map(
    (
      {
        logo,
        company,
        tag,
        headline,
        story,
        founder,
        metrics,
        accent,
      },
      i
    ) => (
      <motion.div
        key={company}
        initial={{
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
        }}
        className={`
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-gray-100
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          hover:shadow-[0_30px_90px_rgba(79,70,229,0.15)]
          transition-all
          duration-700
          grid
          md:grid-cols-2
          ${
            i % 2 === 1
              ? "md:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >
        {/* Background Watermark */}

        <div
          className="
            absolute
            right-6
            top-6
            text-[180px]
            font-black
            text-black/[0.03]
            leading-none
            pointer-events-none
            select-none
          "
        >
          {logo}
        </div>

        {/* Gradient Side */}

        <div
          className={`relative bg-gradient-to-br ${accent} p-10 lg:p-12 flex flex-col justify-between overflow-hidden`}
        >
          {/* Floating Glow */}

          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-20
              -right-20
              w-72
              h-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-0
              left-0
              w-56
              h-56
              rounded-full
              bg-white/5
              blur-3xl
            "
          />

          <div className="relative z-10">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
                w-16
                h-16
                rounded-2xl
                bg-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                mb-6
              "
            >
              {logo}
            </motion.div>

            <p className="text-white/70 text-xs tracking-widest uppercase font-semibold">
              {tag}
            </p>

            <h3 className="mt-3 text-white text-3xl lg:text-4xl font-bold leading-tight">
              {headline}
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 relative z-10">
            {metrics.map(({ label, value }, idx) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: idx * 0.15,
                }}
                className="
                  rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  p-4
                "
              >
                <p className="text-white font-bold text-xl">
                  {value}
                </p>

                <p className="text-white/60 text-xs mt-1">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Side */}

        <div className="p-10 lg:p-12 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              text-gray-600
              leading-relaxed
              text-base
            "
          >
            {story}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
            "
          >
            <div className="h-10 w-10 rounded-full bg-indigo-100" />

            <div>
              <p className="text-indigo-700 font-semibold">
                {founder}
              </p>

              <p className="text-xs text-gray-400">
                Portfolio Founder
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  )}
</div>
    </section>
  );
}




