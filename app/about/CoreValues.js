import { Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  { Icon: Handshake, title: "Founder First", desc: "We treat founders as partners, not just portfolio entries." },
  { Icon: Lightbulb, title: "Bold Thinking", desc: "We back contrarian ideas that challenge the status quo." },
  { Icon: ShieldCheck, title: "Integrity", desc: "Transparent dealing and honest feedback at every step." },
  { Icon: TrendingUp, title: "Long-Term Value", desc: "We measure success in decades, not quarters." },
];

export default function CoreValues() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>What Drives Us</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Core Values</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {values.map(({ Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "rgba(50,225,252,0.15)" }}>
              <Icon size={26} style={{ color: "#2E2C77" }} />
            </div>
            <h3 className="font-bold text-lg" style={{ color: "#2D2754" }}>{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
