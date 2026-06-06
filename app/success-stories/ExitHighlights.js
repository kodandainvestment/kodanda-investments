const exits = [
  { year: "2024", company: "CloudStack", type: "Strategic Acquisition", acquirer: "US-listed infrastructure co.", multiple: "6.2x", amount: "₹120 Cr" },
  { year: "2023", company: "FinBridge", type: "Secondary Sale", acquirer: "Tier-1 VC fund", multiple: "4.8x", amount: "₹38 Cr" },
  { year: "2023", company: "AgriLink", type: "Merger", acquirer: "Listed agri-tech company", multiple: "3.5x", amount: "₹22 Cr" },
  { year: "2022", company: "LogiSmart", type: "Strategic Acquisition", acquirer: "Pan-India logistics group", multiple: "5.1x", amount: "₹55 Cr" },
];

export default function ExitHighlights() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Track Record</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Exit Highlights</h2>
          <p className="mt-4 text-sm max-w-md mx-auto text-gray-500">
            A selection of portfolio exits that demonstrate our ability to create and realise value.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {exits.map(({ year, company, type, acquirer, multiple, amount }) => (
            <div key={company} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center rounded-2xl px-7 py-5" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}>
              <div>
                <p className="font-bold text-lg" style={{ color: "#2E2C77" }}>{year}</p>
                <p className="text-xs text-gray-400">Year</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="font-bold" style={{ color: "#2D2754" }}>{company}</p>
                <p className="text-xs mt-0.5 text-gray-400">{type} · {acquirer}</p>
              </div>
              <div className="text-right md:text-center">
                <p className="text-green-600 font-bold text-lg">{multiple}</p>
                <p className="text-xs text-gray-400">Return</p>
              </div>
              <div className="text-right">
                <p className="font-bold" style={{ color: "#2D2754" }}>{amount}</p>
                <p className="text-xs text-gray-400">Exit Value</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
