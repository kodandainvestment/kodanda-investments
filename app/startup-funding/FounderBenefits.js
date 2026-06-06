const benefits = [
  { icon: "🧠", title: "Strategic Mentorship", desc: "Access to seasoned operators and industry veterans." },
  { icon: "🌐", title: "Global Network", desc: "Introductions to partners, customers, and co-investors worldwide." },
  { icon: "📊", title: "Growth Support", desc: "Hands-on help with hiring, GTM strategy, and scaling." },
  { icon: "⚡", title: "Fast Decisions", desc: "No bureaucracy — we move at startup speed." },
  { icon: "🤝", title: "Follow-On Capital", desc: "We reserve capital for our best portfolio companies." },
  { icon: "🎯", title: "PR & Visibility", desc: "Leverage our brand and network to amplify your story." },
];

export default function FounderBenefits() {
  return (
    <section className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#2D2754" }}>Founder Benefits</h2>
        <p className="text-center mb-12" style={{ color: "#2E2C77" }}>More than capital — we're your long-term growth partner.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 transition-colors" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(50,225,252,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f8ff")}
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: "#2D2754" }}>{b.title}</h3>
              <p className="text-sm" style={{ color: "rgba(46,44,119,0.65)" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
