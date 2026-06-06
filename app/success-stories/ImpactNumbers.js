const stats = [
  { value: "₹235 Cr+", label: "Total Portfolio Valuation", sub: "Across active & exited companies" },
  { value: "15+", label: "Successful Exits", sub: "M&A, secondary sales & mergers" },
  { value: "4.4x", label: "Avg. Return Multiple", sub: "On fully exited positions" },
  { value: "4,200+", label: "Jobs Created", sub: "Across portfolio companies" },
  { value: "12", label: "States Reached", sub: "By portfolio products & services" },
  { value: "92%", label: "Founders Re-engage", sub: "Come back for follow-on rounds" },
];

export default function ImpactNumbers() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>The Numbers</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Impact at a Glance</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map(({ value, label, sub }) => (
          <div key={label} className="text-center p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white" style={{ border: "1px solid rgba(46,44,119,0.12)" }}>
            <p className="text-4xl font-bold" style={{ color: "#2E2C77" }}>{value}</p>
            <p className="mt-3 font-bold" style={{ color: "#2D2754" }}>{label}</p>
            <p className="mt-1 text-gray-400 text-sm">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
