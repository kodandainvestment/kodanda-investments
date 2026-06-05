const opportunities = [
  { type: "Co-invest", company: "PayEase", detail: "Series A bridge round — ₹50L ticket available for strategic angels.", deadline: "Jul 15, 2025" },
  { type: "Hiring", company: "NeuralEdge", detail: "Looking for a VP Engineering with VLSI background. Equity-heavy package.", deadline: "Open" },
  { type: "Partnership", company: "MedLoop", detail: "Seeking clinic chains for a 3-month AI diagnostics pilot in MP & CG.", deadline: "Aug 1, 2025" },
  { type: "Co-invest", company: "SkillBridge", detail: "Series A — ₹1 Cr ticket available for edtech-focused family offices.", deadline: "Jul 30, 2025" },
];

const typeStyle = {
  "Co-invest": "bg-blue-100 text-blue-700",
  Hiring: "bg-purple-100 text-purple-700",
  Partnership: "bg-teal-100 text-teal-700",
};

export default function StartupOpportunities() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Network Deals</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Startup Opportunities</h2>
        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
          Exclusive opportunities shared only with our newsletter subscribers.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {opportunities.map(({ type, company, detail, deadline }) => (
          <div key={company + type} className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto flex-shrink-0 ${typeStyle[type]}`}>{type}</span>
            <div className="flex-1">
              <span className="font-bold text-indigo-950">{company}</span>
              <span className="mx-2 text-gray-300">·</span>
              <span className="text-gray-500 text-sm">{detail}</span>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0">Deadline: {deadline}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-gray-400">
        Subscribe below to get live opportunities directly in your inbox.
      </p>
    </section>
  );
}
