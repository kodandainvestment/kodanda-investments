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
    <section className="bg-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-3">Founder Benefits</h2>
        <p className="text-indigo-300 text-center mb-12">More than capital — we're your long-term growth partner.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-indigo-800 rounded-2xl p-6 hover:bg-indigo-700 transition">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-white mb-2">{b.title}</h3>
              <p className="text-indigo-300 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
