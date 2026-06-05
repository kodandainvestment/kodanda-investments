const steps = [
  { step: "01", title: "Initial Application", duration: "1–3 days", desc: "Submit your deck and one-pager via our funding form. We review every submission and respond within 3 business days." },
  { step: "02", title: "Screening Call", duration: "30 min", desc: "A quick intro call to understand your vision, traction, and team. No pitch deck required — just a conversation." },
  { step: "03", title: "Deep Dive Meeting", duration: "1–2 weeks", desc: "We dive into your business model, market, financials, and competitive landscape with the full investment team." },
  { step: "04", title: "Due Diligence", duration: "2–4 weeks", desc: "Legal, financial, and technical diligence. We keep it lean — typically 3–5 document requests, not 50." },
  { step: "05", title: "Term Sheet", duration: "1 week", desc: "If all checks pass, we issue a term sheet outlining investment amount, valuation, and key terms." },
  { step: "06", title: "Investment & Onboarding", duration: "2–3 weeks", desc: "Funds hit your account, and we schedule your first 90-day planning session with your dedicated partner." },
];

export default function EvaluationProcess() {
  return (
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">How We Decide</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Evaluation Process</h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm">
            We run a transparent, founder-respecting process — no black boxes, no ghosting.
          </p>
        </div>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col gap-6">
            {steps.map(({ step, title, duration, desc }) => (
              <div key={step} className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-indigo-700 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm z-10">
                  {step}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                    <span className="text-xs font-semibold bg-indigo-800 text-indigo-300 px-3 py-1 rounded-full">{duration}</span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
