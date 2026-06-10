"use client";
const industries = [
  { emoji: "💳", name: "Fintech", desc: "Payments, lending, insurance, and wealth management for underserved segments." },
  { emoji: "🎓", name: "Edtech", desc: "Vernacular learning, skill development, and campus-to-career platforms." },
  { emoji: "🏥", name: "Healthtech", desc: "AI diagnostics, telemedicine, and preventive health for Tier-2/3 India." },
  { emoji: "🔬", name: "Deep Tech", desc: "Edge AI, semiconductors, robotics, and industrial automation." },
  { emoji: "🛒", name: "E-commerce & D2C", desc: "Next-gen logistics, supply chain, and direct consumer brands." },
  { emoji: "☁️", name: "SaaS & Cloud", desc: "B2B software solving real operational problems for Indian SMEs." },
  { emoji: "🏭", name: "Manufacturing Tech", desc: "Smart factories, quality automation, and Industry 4.0 enablement." },
  { emoji: "🌱", name: "Climate Tech", desc: "Clean energy, carbon solutions, and sustainable agriculture." },
];

export default function PreferredIndustries() {
  return (
    <section className="py-20 px-6" style={{ background: "#3d3dc9" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#ffffff" }}>Where We Play</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>Preferred Industries</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm">
            We concentrate capital in sectors where India has structural tailwinds and where our
            network creates an unfair advantage for founders.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "rgba(50,225,252,0.15)" }}>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: "#32E1FC", width: "5%" }}>#</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: "#32E1FC", width: "5%" }}></th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: "#32E1FC", width: "20%" }}>Sector</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: "#32E1FC" }}>Focus Area</th>
              </tr>
            </thead>
            <tbody>
              {industries.map(({ emoji, name, desc }, i) => (
                <tr
                  key={name}
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", transition: "background 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(50,225,252,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent"; }}
                >
                  <td className="px-6 py-4 text-gray-400">{String(i + 1).padStart(2, "0")}</td>
                  <td className="px-6 py-4 text-2xl">{emoji}</td>
                  <td className="px-6 py-4 font-semibold" style={{ color: "#ffffff" }}>{name}</td>
                  <td className="px-6 py-4 text-gray-300">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
