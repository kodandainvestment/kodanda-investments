const industries = [
  { icon: "💻", name: "SaaS & Software" },
  { icon: "🏥", name: "HealthTech" },
  { icon: "🎓", name: "EdTech" },
  { icon: "🌱", name: "CleanTech" },
  { icon: "💳", name: "FinTech" },
  { icon: "🛒", name: "E-Commerce" },
  { icon: "🤖", name: "AI & ML" },
  { icon: "🚚", name: "Logistics & Supply Chain" },
  { icon: "🏗️", name: "Real Estate" },
  { icon: "🎮", name: "Gaming & Media" },
  { icon: "🔬", name: "BioTech" },
  { icon: "⚡", name: "EV & Energy" },
];

export default function Industries() {
  return (
    <section className="py-20 overflow-hidden" style={{ background: "rgba(59, 0, 252, 0.06)" }}>
      <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#2D2754" }}>
        Industries We Fund
      </h2>
      <p className="text-gray-500 text-center mb-12">We back bold ideas across high-growth sectors.</p>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 35s linear infinite;
        }
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(245,252,252,1), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(245,252,252,1), transparent)" }} />

        <div className="marquee-track">
          {[...industries, ...industries].map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl px-8 py-5 mx-4 shrink-0"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
            >
              <span className="text-4xl">{ind.icon}</span>
              <span className="font-semibold text-base whitespace-nowrap" style={{ color: "#2D2754" }}>
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — moves left to right */}
      <div className="relative w-full overflow-hidden mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(245,252,252,1), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(245,252,252,1), transparent)" }} />

        <div className="marquee-track-reverse">
          {[...industries].reverse().concat([...industries].reverse()).map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl px-8 py-5 mx-4 shrink-0"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
            >
              <span className="text-4xl">{ind.icon}</span>
              <span className="font-semibold text-base whitespace-nowrap" style={{ color: "#2D2754" }}>
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
