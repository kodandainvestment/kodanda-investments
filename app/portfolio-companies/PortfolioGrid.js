"use client";
import { useState } from "react";

const industries = ["All", "Fintech", "Edtech", "Healthtech", "Deep Tech", "E-commerce", "SaaS"];

const companies = [
  { name: "PayEase", industry: "Fintech", stage: "Series A", location: "Indore", desc: "UPI-powered B2B payments for MSMEs.", raised: "₹3.2 Cr", logo: "PE" },
  { name: "LearnSphere", industry: "Edtech", stage: "Seed", location: "Bhopal", desc: "Vernacular skill-training platform for Tier-3 students.", raised: "₹1.5 Cr", logo: "LS" },
  { name: "MedLoop", industry: "Healthtech", stage: "Pre-Seed", location: "Indore", desc: "AI-driven diagnostics for rural clinics.", raised: "₹80 L", logo: "ML" },
  { name: "NeuralEdge", industry: "Deep Tech", stage: "Seed", location: "Pune", desc: "Edge AI chips for industrial IoT.", raised: "₹2.1 Cr", logo: "NE" },
  { name: "CartNinja", industry: "E-commerce", stage: "Series A", location: "Mumbai", desc: "D2C logistics intelligence platform.", raised: "₹5 Cr", logo: "CN" },
  { name: "CloudStack", industry: "SaaS", stage: "Series B", location: "Bengaluru", desc: "Multi-cloud cost optimisation for enterprises.", raised: "₹9 Cr", logo: "CS" },
  { name: "InsureBot", industry: "Fintech", stage: "Seed", location: "Indore", desc: "Conversational insurance for gig workers.", raised: "₹1.2 Cr", logo: "IB" },
  { name: "SkillBridge", industry: "Edtech", stage: "Series A", location: "Jaipur", desc: "Campus-to-corporate upskilling platform.", raised: "₹4 Cr", logo: "SB" },
  { name: "BioScan", industry: "Healthtech", stage: "Pre-Seed", location: "Hyderabad", desc: "Portable biosensors for preventive care.", raised: "₹60 L", logo: "BS" },
];

const stageColor = {
  "Pre-Seed": "bg-amber-100 text-amber-700",
  Seed: "bg-green-100 text-green-700",
  "Series A": "bg-blue-100 text-blue-700",
  "Series B": "bg-purple-100 text-purple-700",
};

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? companies : companies.filter((c) => c.industry === active);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setActive(ind)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              active === ind
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-gray-600 border-gray-200 hover:border-indigo-400 hover:text-indigo-600"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((c) => (
          <div key={c.name} className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow bg-white group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">
                {c.logo}
              </div>
              <div>
                <h3 className="font-bold text-indigo-950 text-lg leading-tight">{c.name}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{c.location}</p>
              </div>
              <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${stageColor[c.stage]}`}>
                {c.stage}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">{c.industry}</span>
              <span className="text-indigo-700 font-bold text-sm">{c.raised} raised</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
