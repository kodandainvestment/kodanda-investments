import { Zap, LineChart, Compass, Bell } from "lucide-react";

const benefits = [
  { Icon: Zap, title: "Early Access", desc: "Get funding announcements and portfolio news before anyone else." },
  { Icon: LineChart, title: "Investment Insights", desc: "Frameworks and lessons from deals we've done — curated for founders and investors." },
  { Icon: Compass, title: "Market Trends", desc: "Sector-level analysis on where capital is moving across Indian startup ecosystems." },
  { Icon: Bell, title: "Startup Opportunities", desc: "Handpicked co-investment, hiring, and partnership opportunities from our network." },
];

export default function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Why Subscribe</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>What You Get</h2>
        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
          One email, every two weeks. No fluff — just signal from the front lines of Indian venture capital.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map(({ Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid rgba(46,44,119,0.12)" }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "rgba(50,225,252,0.15)" }}>
              <Icon size={24} style={{ color: "#2E2C77" }} />
            </div>
            <h3 className="font-bold text-base" style={{ color: "#2D2754" }}>{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
