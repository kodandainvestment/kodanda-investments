import { Users, BarChart2, Repeat, Globe } from "lucide-react";

const traits = [
  { Icon: Users, title: "Strong Founding Team", desc: "2+ co-founders with complementary skills, deep domain knowledge, and prior execution experience." },
  { Icon: BarChart2, title: "Validated Traction", desc: "Early revenue, pilot customers, or measurable user growth that proves product-market fit." },
  { Icon: Repeat, title: "Scalable Business Model", desc: "Unit economics that improve at scale with a clear path to ₹10 Cr+ ARR within 3 years." },
  { Icon: Globe, title: "Large Addressable Market", desc: "Targeting a TAM of ₹500 Cr+ with a defensible niche to own first." },
];

export default function IdealStartupProfile() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>What We Look For</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Ideal Startup Profile</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
          We back founders who combine ambition with evidence. Here's the profile that excites us most.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {traits.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-5 p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white" style={{ border: "1px solid rgba(46,44,119,0.15)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(50,225,252,0.15)" }}>
              <Icon size={22} style={{ color: "#2E2C77" }} />
            </div>
            <div>
              <h3 className="font-bold text-lg" style={{ color: "#2D2754" }}>{title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl p-8 grid sm:grid-cols-3 gap-8 text-center" style={{ background: "rgba(50,225,252,0.07)", border: "1px solid rgba(46,44,119,0.15)" }}>
        {[["Pre-Seed to Series A", "Stage"], ["₹25 L – ₹3 Cr", "Ticket Size"], ["6 – 18 months", "Decision Timeline"]].map(([val, label]) => (
          <div key={label}>
            <p className="text-2xl font-bold" style={{ color: "#2E2C77" }}>{val}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
