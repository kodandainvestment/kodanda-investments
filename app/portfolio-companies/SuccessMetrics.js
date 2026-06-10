"use client";

const metrics = [
  { value: "₹20 Cr+", label: "Capital Deployed", sub: "Across all funds" },
  { value: "30+", label: "Active Portfolio Cos.", sub: "Across 6 sectors" },
  { value: "15+", label: "Successful Exits", sub: "M&A and strategic buyouts" },
  { value: "4.1x", label: "Avg. Return Multiple", sub: "Across exited companies" },
  { value: "92%", label: "Founder Satisfaction", sub: "Post-investment survey" },
  { value: "₹120 Cr+", label: "Portfolio Valuation", sub: "Combined current value" },
];

export default function SuccessMetrics() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>By the Numbers</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Success Metrics</h2>
          <p className="mt-4 text-sm max-w-md mx-auto text-gray-500">
            The results that define our track record and the trust our founders place in us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map(({ value, label, sub }) => (
            <div key={label} className="rounded-2xl p-8 transition-colors" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(50,225,252,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f8ff")}
            >
              <p className="text-4xl font-bold" style={{ color: "#2E2C77" }}>{value}</p>
              <p className="mt-3 font-semibold text-lg" style={{ color: "#2D2754" }}>{label}</p>
              <p className="mt-1 text-sm text-gray-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
