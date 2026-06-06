import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          {
            Icon: Target,
            label: "Our Mission",
            text: "To democratise venture capital by channelling smart money and strategic mentorship into high-potential startups — especially from India's emerging cities — enabling them to compete on a global stage.",
          },
          {
            Icon: Eye,
            label: "Our Vision",
            text: "To be India's most founder-friendly investment firm, recognised for building transformative companies that uplift communities, create employment, and drive sustainable economic growth.",
          },
        ].map(({ Icon, label, text }) => (
          <div key={label} className="rounded-2xl p-8" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: "#2E2C77" }}>
              <Icon size={22} style={{ color: "#fff" }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D2754" }}>{label}</h3>
            <p style={{ color: "rgba(46,44,119,0.65)" }} className="leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
