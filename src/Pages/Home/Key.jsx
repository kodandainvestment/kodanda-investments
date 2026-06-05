export default function Key() {
  const stats = [
    { value: "₹20+ Cr", label: "Funds Under Management" },
    { value: "50+", label: "Portfolio Companies" },
    { value: "15+", label: "Successful Exits" },
    { value: "5x", label: "Average Return" },
  ];

  return (
    <section className="relative bg-blue-900 pt-8 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Key Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 translate-y-1/3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-blue-700 text-white text-center rounded-2xl shadow-xl py-10 px-6">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
