const steps = [
  { num: "01", title: "Submit Application", desc: "Fill out the funding application with your startup details and vision." },
  { num: "02", title: "Initial Review", desc: "Our team reviews your submission within 5–7 business days." },
  { num: "03", title: "Discovery Call", desc: "A 30-minute call to understand your business, traction, and goals." },
  { num: "04", title: "Due Diligence", desc: "Deep dive into financials, market, team, and product." },
  { num: "05", title: "Term Sheet", desc: "We present funding terms and negotiate together." },
  { num: "06", title: "Funding Closed", desc: "Agreements signed, funds transferred, partnership begins." },
];

export default function FundingProcess() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-indigo-900 text-center mb-3">Funding Process</h2>
      <p className="text-gray-500 text-center mb-12">A transparent, founder-friendly process from application to close.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4 p-6 border border-indigo-100 rounded-2xl hover:shadow-lg transition">
            <span className="text-3xl font-extrabold text-indigo-200">{s.num}</span>
            <div>
              <h3 className="font-bold text-indigo-900 mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
