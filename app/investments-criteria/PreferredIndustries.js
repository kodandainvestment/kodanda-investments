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
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Where We Play</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Preferred Industries</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            We concentrate capital in sectors where India has structural tailwinds and where our
            network creates an unfair advantage for founders.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map(({ emoji, name, desc }) => (
            <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group">
              <span className="text-3xl">{emoji}</span>
              <h3 className="mt-4 font-bold text-indigo-950 text-base group-hover:text-indigo-700 transition-colors">{name}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
