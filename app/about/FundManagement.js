const funds = [
  { name: "Seed Fund I", corpus: "₹5 Cr", focus: "Pre-seed & Seed", stage: "Deployed" },
  { name: "Growth Fund II", corpus: "₹10 Cr", focus: "Series A", stage: "Active" },
  { name: "Strategic Fund III", corpus: "₹8 Cr", focus: "Seed to Series B", stage: "Raising" },
];

export default function FundManagement() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Capital Allocation</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Fund Management</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Structured funds designed to deploy capital efficiently at every stage of a startup's journey.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {funds.map((f) => (
          <div key={f.name} className="rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid rgba(50,225,252,0.25)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#32E1FC", filter: "brightness(0.7)" }}>{f.stage}</p>
            <h3 className="mt-2 text-xl font-bold" style={{ color: "#2D2754" }}>{f.name}</h3>
            <p className="mt-4 text-4xl font-bold" style={{ color: "#2E2C77" }}>{f.corpus}</p>
            <p className="mt-2 text-sm text-gray-500">Focus: {f.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
