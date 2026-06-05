const industries = [
  { icon: "💻", name: "SaaS & Software" },
  { icon: "🏥", name: "HealthTech" },
  { icon: "🎓", name: "EdTech" },
  { icon: "🌱", name: "CleanTech" },
  { icon: "💳", name: "FinTech" },
  { icon: "🛒", name: "E-Commerce" },
  { icon: "🤖", name: "AI & ML" },
  { icon: "🚚", name: "Logistics & Supply Chain" },
];

export default function Industries() {
  return (
    <section className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-900 text-center mb-3">Industries We Fund</h2>
        <p className="text-gray-500 text-center mb-12">We back bold ideas across high-growth sectors.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="text-4xl mb-3">{ind.icon}</div>
              <p className="font-semibold text-indigo-900 text-sm">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
