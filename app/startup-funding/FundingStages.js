const stages = [
  { stage: "Pre-Seed", range: "₹25L – ₹1.5Cr",  desc: "Idea validation, MVP development, early market research." },
  { stage: "Seed",     range: "₹1.5Cr – ₹8Cr",   desc: "Product-market fit, initial traction, team building." },
  { stage: "Series A", range: "₹8Cr – ₹40Cr",    desc: "Scaling operations, revenue growth, market expansion." },
  { stage: "Series B+",range: "₹40Cr+",           desc: "Aggressive scaling, new markets, dominant market position." },
];

export default function FundingStages() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left — content */}
        <div className="lg:w-2/5 lg:sticky lg:top-24">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(50,225,252,0.12)", color: "#2E2C77" }}
          >
            Investment Stages
          </span>
          <h2 className="text-4xl font-bold leading-tight mb-5" style={{ color: "#2D2754" }}>
            We Fund at<br />Every Stage
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            From first idea to full-scale enterprise, Kodanda Investments partners
            with founders at the right moment. We bring capital, mentorship, and
            network access tailored to where you are in your journey.
          </p>
          <p className="text-sm text-gray-400">
            All funding ranges are indicative and subject to due diligence.
          </p>
        </div>

        {/* Right — cards */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 relative">
          {/* vertical center divider */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: "#2D2754" }} />
          {/* horizontal center divider */}
          <div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: "#2D2754" }} />

          {stages.map((s) => (
            <div key={s.stage} className="p-8">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(50,225,252,0.12)", color: "#2E2C77" }}
              >
                {s.stage}
              </span>
              <p className="text-2xl font-bold mb-2" style={{ color: "#2D2754" }}>{s.range}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
