// export default function Key() {
//   const stats = [
//     { value: "₹20+ Cr", label: "Funds Under Management" },
//     { value: "50+", label: "Portfolio Companies" },
//     { value: "15+", label: "Successful Exits" },
//     { value: "5x", label: "Average Return" },
//   ];

//   return (
//     <section className="relative pt-8 pb-0" style={{ background: "#2E2C77" }}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white">Key Statistics</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 translate-y-1/3">
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-white text-center rounded-2xl shadow-xl py-10 px-6" style={{ background: "#2D2754" }}>
//               <p className="text-4xl font-bold text-white">{stat.value}</p>
//               <p className="mt-2" style={{ color: "#32E1FC" }}>{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  BriefcaseBusiness,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function Key() {
  const stats = [
    {
      value: "₹20+ Cr",
      label: "Funds Under Management",
      icon: Landmark,
    },
    {
      value: "50+",
      label: "Portfolio Companies",
      icon: BriefcaseBusiness,
    },
    {
      value: "15+",
      label: "Successful Exits",
      icon: TrendingUp,
    },
    {
      value: "5x",
      label: "Average Return",
      icon: BarChart3,
    },
  ];

  return (
    <section 
      id="section2"
    className="relative py-24 overflow-hidden bg-[#EEF2F7]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase">
            Performance Metrics
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Key Statistics
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Consistent capital deployment, strategic investments,
            and long-term value creation across sectors.
          </p>
        </motion.div>

        {/* Cards */}
        {/* Cards */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
  
  {/* Empty Left Side */}
  <div className="hidden lg:block"></div>

  {/* Right Side Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {stats.map((stat, index) => {
      const Icon = stat.icon;

      return (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -12,
            rotateX: 8,
            rotateY: 8,
            scale: 1.03,
          }}
          className="group relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Card */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500">
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <Icon size={24} className="text-blue-600" />
            </div>

            {/* Value */}
            <h3 className="text-5xl font-bold text-slate-900">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="mt-3 text-slate-600 font-medium">
              {stat.label}
            </p>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  );
}