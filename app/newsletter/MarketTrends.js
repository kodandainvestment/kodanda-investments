const trends = [
  { sector: "Fintech", trend: "↑ 42%", detail: "YoY deal volume in B2B payments & lending for MSMEs in Tier-2 cities.", sentiment: "bullish" },
  { sector: "Deep Tech", trend: "↑ 68%", detail: "Funding in edge AI and semiconductor startups since PLI scheme announcement.", sentiment: "bullish" },
  { sector: "Edtech", trend: "↓ 18%", detail: "Consumer edtech cooling off — but vernacular & vocational sub-sectors growing.", sentiment: "neutral" },
  { sector: "Climate Tech", trend: "↑ 91%", detail: "Green energy and carbon credit startups attracting global LP interest in India.", sentiment: "bullish" },
  { sector: "D2C & E-comm", trend: "→ Stable", detail: "Consolidation phase — strong brands scaling, weak ones shutting down.", sentiment: "neutral" },
  { sector: "SaaS", trend: "↑ 33%", detail: "India-first SaaS targeting SME ops (HR, finance, supply chain) seeing record ARR growth.", sentiment: "bullish" },
];

const sentimentStyle = {
  bullish: "bg-green-100 text-green-700",
  neutral: "bg-amber-100 text-amber-700",
};

export default function MarketTrends() {
  return (
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Macro View</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Market Trends</h2>
          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto">
            Sector signals we're tracking — straight from our quarterly research notes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trends.map(({ sector, trend, detail, sentiment }) => (
            <div key={sector} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white text-base">{sector}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${sentimentStyle[sentiment]}`}>{trend}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
