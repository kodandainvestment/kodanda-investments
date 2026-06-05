const featured = [
  {
    name: "CloudStack",
    tag: "SaaS · Series B",
    headline: "Multi-cloud cost optimisation at enterprise scale.",
    detail:
      "CloudStack helped 200+ enterprises cut cloud bills by 38% on average. Now expanding into the US market.",
    raised: "₹9 Cr",
    growth: "3.8x",
    logo: "CS",
    accent: "from-indigo-600 to-purple-700",
  },
  {
    name: "CartNinja",
    tag: "E-commerce · Series A",
    headline: "Redefining last-mile logistics intelligence for D2C brands.",
    detail:
      "Powers 500+ D2C brands with real-time delivery prediction and automated returns management.",
    raised: "₹5 Cr",
    growth: "2.9x",
    logo: "CN",
    accent: "from-blue-600 to-cyan-600",
  },
  {
    name: "NeuralEdge",
    tag: "Deep Tech · Seed",
    headline: "Edge AI chips purpose-built for industrial IoT.",
    detail:
      "First Indian fabless startup to receive a ₹2 Cr PLI grant. Pilot with 3 auto OEMs underway.",
    raised: "₹2.1 Cr",
    growth: "4.2x",
    logo: "NE",
    accent: "from-violet-600 to-fuchsia-600",
  },
];

export default function FeaturedInvestments() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Spotlight</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Featured Investments</h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            Standout companies in our portfolio that are reshaping their industries.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((f) => (
            <div key={f.name} className="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col">
              <div className={`bg-gradient-to-br ${f.accent} p-8 flex items-center gap-4`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  {f.logo}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{f.name}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{f.tag}</p>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="font-semibold text-indigo-950 leading-snug">{f.headline}</p>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">{f.detail}</p>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="text-2xl font-bold text-indigo-700">{f.raised}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Total Raised</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{f.growth}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Return Multiple</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
