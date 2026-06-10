import ChromaGrid from '../Animations/ChromaGrid';

const benefits = [
  { icon: "🧠", title: "Strategic Mentorship", desc: "Access to seasoned operators and industry veterans.", color: "#4F46E5" },
  { icon: "🌐", title: "Global Network", desc: "Introductions to partners, customers, and co-investors worldwide.", color: "#10B981" },
  { icon: "📊", title: "Growth Support", desc: "Hands-on help with hiring, GTM strategy, and scaling.", color: "#F59E0B" },
  { icon: "⚡", title: "Fast Decisions", desc: "No bureaucracy — we move at startup speed.", color: "#EF4444" },
  { icon: "🤝", title: "Follow-On Capital", desc: "We reserve capital for our best portfolio companies.", color: "#8B5CF6" },
  { icon: "🎯", title: "PR & Visibility", desc: "Leverage our brand and network to amplify your story.", color: "#06B6D4" },
];

const items = benefits.map((b) => ({
  image: '/about-us.png',
  title: b.title,
  subtitle: b.desc,
  handle: b.icon,
  borderColor: b.color,
}));

export default function FounderBenefits() {
  return (
    <section className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#664e99" }}>Founder Benefits</h2>
        <p className="text-center mb-12" style={{ color: "#2E2C77" }}>More than capital — we're your long-term growth partner.</p>
        <div style={{ height: '700px', position: 'relative' }}>
          <ChromaGrid items={items} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
        </div>
      </div>
    </section>
  );
}
