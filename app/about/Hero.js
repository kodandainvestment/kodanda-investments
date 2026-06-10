
// "use client";

// import Navbar from "../CommonComp/Navbar";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-[60vh] bg-indigo-950 overflow-hidden">
//       <Navbar />

//       {/* Existing Gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)]" />

//       {/* 3D Floating Orbs */}
//       <motion.div
//         animate={{
//           y: [0, -40, 0],
//           x: [0, 30, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute top-10 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
//       />

//       <motion.div
//         animate={{
//           y: [0, 35, 0],
//           x: [0, -25, 0],
//           rotate: [360, 180, 0],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"
//       />

//       {/* Floating 3D Shapes */}
//       <motion.div
//         animate={{
//           rotateY: [0, 360],
//           rotateX: [0, 360],
//           y: [0, -25, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           transformStyle: "preserve-3d",
//         }}
//         className="
//           absolute
//           top-32
//           right-1/4
//           w-20
//           h-20
//           border
//           border-indigo-400/20
//           rotate-45
//         "
//       />

//       <motion.div
//         animate={{
//           rotateY: [360, 0],
//           rotateX: [360, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           transformStyle: "preserve-3d",
//         }}
//         className="
//           absolute
//           bottom-24
//           left-1/4
//           w-16
//           h-16
//           rounded-full
//           border
//           border-indigo-300/20
//         "
//       />

//       {/* Grid Effect */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Content - Unchanged */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
//         <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
//           About Kodanda Investments
//         </span>

//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
//           Fueling India's{" "}
//           <span className="text-indigo-400">Next Wave</span> of Innovation
//         </h1>

//         <p className="mt-5 text-white/60 text-lg max-w-xl">
//           A Indore based investment firm committed to discovering and scaling
//           visionary founders across India's fastest growing industrial
//           corridors.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import Navbar from "../CommonComp/Navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[60vh] bg-indigo-950 overflow-hidden">
      <Navbar />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)]" />

      {/* Animated Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Growth Line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 500 C200 450 350 320 550 300 C800 260 1000 180 1440 80"
          fill="none"
          stroke="#818cf8"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </svg>

      {/* Floating Portfolio Card */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 10, 0],
          rotateX: [0, -4, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          hidden lg:block
          absolute
          right-16
          top-24
          w-64
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        "
      >
        <p className="text-white/50 text-xs uppercase tracking-widest">
          Portfolio Growth
        </p>

        <div className="mt-5 flex items-end gap-2 h-24">
          <div className="w-5 h-8 bg-indigo-500/60 rounded-t-md" />
          <div className="w-5 h-12 bg-indigo-500/60 rounded-t-md" />
          <div className="w-5 h-16 bg-indigo-500/70 rounded-t-md" />
          <div className="w-5 h-20 bg-indigo-400/80 rounded-t-md" />
          <div className="w-5 h-24 bg-indigo-300 rounded-t-md" />
        </div>

        <p className="mt-5 text-white text-3xl font-bold">
          ₹235 Cr+
        </p>

        <p className="text-white/40 text-sm">
          Total Portfolio Value
        </p>
      </motion.div>

      {/* Floating Founder Card */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotateY: [0, -10, 0],
          rotateX: [0, 5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          hidden lg:block
          absolute
          left-16
          bottom-14
          w-56
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        "
      >
        <p className="text-white/50 text-xs uppercase tracking-widest">
          Founder Success
        </p>

        <p className="mt-3 text-5xl font-bold text-indigo-400">
          92%
        </p>

        <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "92%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-full bg-indigo-400"
          />
        </div>

        <p className="mt-3 text-white/40 text-sm">
          Founder Satisfaction
        </p>
      </motion.div>

      {/* Floating Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-10
          h-96
          w-96
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-400/10
          blur-[140px]
        "
      />

      {/* Content (unchanged) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          About Kodanda Investments
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Fueling India's{" "}
          <span className="text-indigo-400">
            Next Wave
          </span>{" "}
          of Innovation
        </h1>

        <p className="mt-5 text-white/60 text-lg max-w-xl">
          A Indore based investment firm committed to discovering and scaling
          visionary founders across India's fastest growing industrial
          corridors.
        </p>
      </div>
    </div>
  );
}