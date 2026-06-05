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
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">By the Numbers</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Success Metrics</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm">
            The results that define our track record and the trust our founders place in us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map(({ value, label, sub }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <p className="text-4xl font-bold text-indigo-400">{value}</p>
              <p className="mt-3 text-white font-semibold text-lg">{label}</p>
              <p className="mt-1 text-white/40 text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
