import { XCircle } from "lucide-react";

const avoidList = [
  { title: "Pure Services Businesses", desc: "We don't invest in agencies, consultancies, or businesses without a scalable, product-led component." },
  { title: "Single-Founder Teams", desc: "We rarely back solo founders — resilience and complementary skills matter too much at early stage." },
  { title: "Copycat Models", desc: "Cloning Western products without India-specific insight or differentiation isn't a thesis we back." },
  { title: "Regulated-Only Revenue", desc: "Businesses whose growth is entirely dependent on a single government contract or regulation." },
  { title: "No Clear Path to Profitability", desc: "Startups burning cash without a credible unit-economics story for the next 18 months." },
  { title: "Misaligned Founders", desc: "Teams where co-founders are already in dispute or where equity splits signal unresolved conflicts." },
];

export default function WhatWeAvoid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Not a Fit</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>What We Avoid</h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
          Knowing what we don't do is just as important — it saves everyone's time.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {avoidList.map(({ title, desc }) => (
          <div key={title} className="flex gap-4 p-6 bg-red-50 border border-red-100 rounded-2xl">
            <XCircle size={22} className="text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-800 text-sm">{title}</h3>
              <p className="mt-1.5 text-red-700/70 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
