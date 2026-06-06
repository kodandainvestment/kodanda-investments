const stages = [
  { stage: "Pre-Seed", range: "$25K – $150K", desc: "Idea validation, MVP development, early market research." },
  { stage: "Seed", range: "$150K – $1M", desc: "Product-market fit, initial traction, team building." },
  { stage: "Series A", range: "$1M – $5M", desc: "Scaling operations, revenue growth, market expansion." },
  { stage: "Series B+", range: "$5M+", desc: "Aggressive scaling, new markets, dominant market position." },
];

export default function FundingStages() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#2D2754" }}>Funding Stages</h2>
      <p className="text-gray-500 text-center mb-12">We support startups at every stage of their journey.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((s) => (
          <div key={s.stage} className="rounded-2xl p-6 hover:shadow-lg transition" style={{ border: "1px solid rgba(50,225,252,0.2)" }}>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ background: "rgba(50,225,252,0.12)", color: "#2E2C77" }}>{s.stage}</span>
            <p className="text-xl font-bold mb-2" style={{ color: "#2D2754" }}>{s.range}</p>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
