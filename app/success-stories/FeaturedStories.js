const stories = [
  {
    logo: "CS",
    company: "CloudStack",
    tag: "SaaS · Series B Exit",
    headline: "From ₹9 Cr seed to a ₹120 Cr strategic acquisition in 4 years.",
    story:
      "CloudStack's founders approached us with a sharp thesis: Indian enterprises were overpaying for multi-cloud management. We led their seed round in 2021. By 2024, they had 200+ enterprise clients and were acquired by a US-listed infrastructure company.",
    founder: "Aditya Nair, CEO",
    metrics: [{ label: "Return", value: "6.2x" }, { label: "Acquired for", value: "₹120 Cr" }, { label: "Time to exit", value: "4 yrs" }],
    accent: "from-indigo-600 to-purple-700",
  },
  {
    logo: "CN",
    company: "CartNinja",
    tag: "E-commerce · Series B",
    headline: "D2C logistics intelligence that now powers 500+ brands.",
    story:
      "We backed CartNinja at Series A when they had 20 brand clients and a bold vision for AI-driven delivery prediction. Today they've grown 12x and are the backbone of the D2C supply chain for some of India's most recognisable consumer brands.",
    founder: "Sneha Kulkarni, Founder",
    metrics: [{ label: "Revenue growth", value: "12x" }, { label: "Brand clients", value: "500+" }, { label: "Return multiple", value: "2.9x" }],
    accent: "from-blue-600 to-cyan-600",
  },
  {
    logo: "PE",
    company: "PayEase",
    tag: "Fintech · Series A",
    headline: "Making UPI work for India's 60 million MSMEs.",
    story:
      "PayEase came to us with a product but no GTM. We helped them rebuild their distribution strategy, connected them to 3 banking partners, and co-led their Series A. Monthly payment volume crossed ₹200 Cr within 18 months of our investment.",
    founder: "Karan Mehta, Co-founder",
    metrics: [{ label: "Monthly TPV", value: "₹200 Cr" }, { label: "MSME clients", value: "18,000+" }, { label: "Return so far", value: "3.1x" }],
    accent: "from-violet-600 to-fuchsia-600",
  },
];

export default function FeaturedStories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Spotlight</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Featured Stories</h2>
        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
          The companies that define what we mean by founder-first investing.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {stories.map(({ logo, company, tag, headline, story, founder, metrics, accent }, i) => (
          <div key={company} className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className={`bg-gradient-to-br ${accent} p-10 flex flex-col justify-between`}>
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-lg mb-6">{logo}</div>
                <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">{tag}</p>
                <h3 className="text-white font-bold text-2xl leading-snug">{headline}</h3>
              </div>
              <div className="flex gap-8 mt-8">
                {metrics.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-white font-bold text-2xl">{value}</p>
                    <p className="text-white/60 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed text-sm">{story}</p>
              <p className="mt-6 text-indigo-700 font-semibold text-sm">— {founder}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
