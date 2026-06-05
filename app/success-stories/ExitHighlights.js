const exits = [
  { year: "2024", company: "CloudStack", type: "Strategic Acquisition", acquirer: "US-listed infrastructure co.", multiple: "6.2x", amount: "₹120 Cr" },
  { year: "2023", company: "FinBridge", type: "Secondary Sale", acquirer: "Tier-1 VC fund", multiple: "4.8x", amount: "₹38 Cr" },
  { year: "2023", company: "AgriLink", type: "Merger", acquirer: "Listed agri-tech company", multiple: "3.5x", amount: "₹22 Cr" },
  { year: "2022", company: "LogiSmart", type: "Strategic Acquisition", acquirer: "Pan-India logistics group", multiple: "5.1x", amount: "₹55 Cr" },
];

export default function ExitHighlights() {
  return (
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Track Record</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Exit Highlights</h2>
          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto">
            A selection of portfolio exits that demonstrate our ability to create and realise value.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {exits.map(({ year, company, type, acquirer, multiple, amount }) => (
            <div key={company} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center bg-white/5 border border-white/10 rounded-2xl px-7 py-5">
              <div>
                <p className="text-indigo-400 font-bold text-lg">{year}</p>
                <p className="text-white/30 text-xs">Year</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-white font-bold">{company}</p>
                <p className="text-white/40 text-xs mt-0.5">{type} · {acquirer}</p>
              </div>
              <div className="text-right md:text-center">
                <p className="text-green-400 font-bold text-lg">{multiple}</p>
                <p className="text-white/30 text-xs">Return</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{amount}</p>
                <p className="text-white/30 text-xs">Exit Value</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
