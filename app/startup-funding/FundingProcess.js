"use client";

import { useRef, useState, useEffect } from "react";

const steps = [
  { title: "Submit Application", desc: "Fill out the funding application with your startup details, vision, and market opportunity." },
  { title: "Initial Review",     desc: "Our team reviews your submission within 5–7 business days and shortlists promising founders." },
  { title: "Discovery Call",     desc: "A 30-minute call to understand your business, traction, team strength, and goals." },
  { title: "Due Diligence",      desc: "Deep dive into financials, market size, competitive landscape, and product roadmap." },
  { title: "Term Sheet",         desc: "We present funding terms, valuation, and equity structure and negotiate together." },
  { title: "Funding Closed",     desc: "Agreements signed, funds transferred, and a long-term partnership begins." },
];

export default function FundingProcess() {
  const [active, setActive]       = useState(0);
  const [prev, setPrev]           = useState(null);
  const [animating, setAnimating] = useState(false);
  const lastIdx  = useRef(0);
  const scrollRef = useRef(null);
  const itemRefs  = useRef([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (idx !== lastIdx.current) {
              setPrev(lastIdx.current);
              setActive(idx);
              setAnimating(true);
              lastIdx.current = idx;
              setTimeout(() => { setPrev(null); setAnimating(false); }, 800);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,   // item must be 50% visible inside the container
      }
    );

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" style={{ background: "#2E2C77" }}>
      <style>{`
        @keyframes numExit  { from { transform: translateY(0);    opacity: 1; } to { transform: translateY(-100%); opacity: 0; } }
        @keyframes numEnter { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0);      opacity: 1; } }
        .num-exit  { animation: numExit  0.8s cubic-bezier(0.4,0,0.2,1) forwards; }
        .num-enter { animation: numEnter 0.8s cubic-bezier(0.4,0,0.2,1) forwards; }
        .steps-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "#ffffff" }}>
          The Funding Process
        </h2>

        <div className="flex gap-12 items-start">

          {/* Left — sticky slot-machine number */}
          <div className="sticky top-32 shrink-0" style={{ width: "130px" }}>
            <div style={{ fontSize: "7rem", fontWeight: 900, lineHeight: 1, color: "rgba(255,255,255,0.12)", display: "flex", overflow: "hidden", height: "1em" }}>
              <span>0</span>
              <div style={{ position: "relative", overflow: "hidden", width: "1ch", height: "1em" }}>
                {animating && prev !== null && (
                  <span key={`exit-${prev}`} className="num-exit"
                    style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {prev + 1}
                  </span>
                )}
                <span key={`enter-${active}`} className={animating ? "num-enter" : ""}
                  style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {active + 1}
                </span>
              </div>
            </div>
          </div>

          {/* Right — scrollable steps, each step takes full container height */}
          <div
            ref={scrollRef}
            className="steps-scroll flex-1 overflow-y-auto"
            style={{ height: "160px", scrollbarWidth: "none" }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                ref={el => itemRefs.current[i] = el}
                data-index={i}
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)", minHeight: "160px" }}
                className="grid grid-cols-[1fr_1fr] gap-8 py-10 content-start"
              >
                <h3
                  className="text-2xl font-bold leading-snug transition-colors duration-500"
                  style={{ color: i === active ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-colors duration-500"
                  style={{ color: i === active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />
          </div>

        </div>
      </div>
    </section>
  );
}
