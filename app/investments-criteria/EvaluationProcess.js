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
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>How We Decide</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Evaluation Process</h2>
          <p className="mt-4 text-sm max-w-lg mx-auto text-gray-500">
            We run a transparent, founder-respecting process — no black boxes, no ghosting.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(46,44,119,0.15)" }} />
          <div className="flex flex-col gap-6">
            {steps.map(({ step, title, duration, desc }) => (
              <div key={step} className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold z-10" style={{ background: "#f8f8ff", color: "#2E2C77", border: "2px solid #2E2C77" }}>
                  {step}
                </div>
                <div className="rounded-2xl p-6 flex-1" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bold text-lg" style={{ color: "#2D2754" }}>{title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(50,225,252,0.12)", color: "#2E2C77" }}>{duration}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
