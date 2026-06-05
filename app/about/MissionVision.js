import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          {
            Icon: Target,
            label: "Our Mission",
            text:
              "To democratise venture capital by channelling smart money and strategic mentorship into high-potential startups — especially from India's emerging cities — enabling them to compete on a global stage.",
          },
          {
            Icon: Eye,
            label: "Our Vision",
            text:
              "To be India's most founder-friendly investment firm, recognised for building transformative companies that uplift communities, create employment, and drive sustainable economic growth.",
          },
        ].map(({ Icon, label, text }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-5">
              <Icon size={22} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{label}</h3>
            <p className="text-white/60 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
