const leaders = [
  { name: "Ravi Kodanda", role: "Founder & Managing Partner", bio: "20+ years in finance and venture investing across India." },
  { name: "Priya Sharma", role: "Partner – Portfolio & Growth", bio: "Ex-founder turned investor with deep operational expertise." },
  { name: "Arjun Mehta", role: "Investment Analyst", bio: "Specialises in fintech and deep-tech deal sourcing." },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">The People</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Leadership Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((l) => (
            <div key={l.name} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-100 mx-auto flex items-center justify-center text-2xl font-bold text-indigo-700">
                {l.name.charAt(0)}
              </div>
              <h3 className="mt-5 text-lg font-bold text-indigo-950">{l.name}</h3>
              <p className="text-indigo-600 text-sm font-medium mt-1">{l.role}</p>
              <p className="mt-3 text-gray-500 text-sm">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
