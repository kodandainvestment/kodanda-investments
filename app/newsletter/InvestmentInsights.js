const insights = [
  {
    tag: "Deal Memo",
    title: "Why We Backed NeuralEdge at Pre-Seed",
    excerpt: "Edge AI for industrial IoT seemed niche — until we mapped the ₹1,400 Cr manufacturing automation TAM hiding in plain sight.",
    date: "Jun 2025",
    readTime: "5 min read",
  },
  {
    tag: "Framework",
    title: "The 3-Question Test We Use for Every Pitch",
    excerpt: "After 200+ pitches, our team distilled our gut-check into three questions that predict 80% of our final decisions.",
    date: "May 2025",
    readTime: "4 min read",
  },
  {
    tag: "Lesson",
    title: "What Our One Failed Exit Taught Us",
    excerpt: "We lost money on one investment. Here's the exact post-mortem we ran — and what we changed in our diligence process.",
    date: "Apr 2025",
    readTime: "6 min read",
  },
];

export default function InvestmentInsights() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">From the Archive</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Investment Insights</h2>
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
            A sample of what lands in subscribers' inboxes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map(({ tag, title, excerpt, date, readTime }) => (
            <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full self-start">{tag}</span>
              <h3 className="mt-4 font-bold text-indigo-950 text-base leading-snug">{title}</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                <span>{date}</span>
                <span>{readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
