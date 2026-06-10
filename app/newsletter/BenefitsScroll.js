"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trends = [
  { sector: "Fintech", trend: "↑ 42%", detail: "YoY deal volume in B2B payments & lending for MSMEs in Tier-2 cities.", sentiment: "bullish" },
  { sector: "Deep Tech", trend: "↑ 68%", detail: "Funding in edge AI and semiconductor startups since PLI scheme announcement.", sentiment: "bullish" },
  { sector: "Edtech", trend: "↓ 18%", detail: "Consumer edtech cooling off — but vernacular & vocational sub-sectors growing.", sentiment: "neutral" },
  { sector: "Climate Tech", trend: "↑ 91%", detail: "Green energy and carbon credit startups attracting global LP interest in India.", sentiment: "bullish" },
  { sector: "D2C & E-comm", trend: "→ Stable", detail: "Consolidation phase — strong brands scaling, weak ones shutting down.", sentiment: "neutral" },
  { sector: "SaaS", trend: "↑ 33%", detail: "India-first SaaS targeting SME ops (HR, finance, supply chain) seeing record ARR growth.", sentiment: "bullish" },
];

const sentimentStyle = {
  bullish: "bg-green-100 text-green-700",
  neutral: "bg-amber-100 text-amber-700",
};

const opportunities = [
  { type: "Co-invest", company: "PayEase", detail: "Series A bridge round — ₹50L ticket available for strategic angels.", deadline: "Jul 15, 2025" },
  { type: "Hiring", company: "NeuralEdge", detail: "Looking for a VP Engineering with VLSI background. Equity-heavy package.", deadline: "Open" },
  { type: "Partnership", company: "MedLoop", detail: "Seeking clinic chains for a 3-month AI diagnostics pilot in MP & CG.", deadline: "Aug 1, 2025" },
  { type: "Co-invest", company: "SkillBridge", detail: "Series A — ₹1 Cr ticket available for edtech-focused family offices.", deadline: "Jul 30, 2025" },
];

const typeStyle = {
  "Co-invest": { background: "rgba(50,225,252,0.12)", color: "#2E2C77" },
  Hiring: { background: "rgba(46,44,119,0.12)", color: "#2E2C77" },
  Partnership: { background: "rgba(50,225,252,0.18)", color: "#2D2754" },
};

const insights = [
  { tag: "Deal Memo", title: "Why We Backed NeuralEdge at Pre-Seed", excerpt: "Edge AI for industrial IoT seemed niche — until we mapped the ₹1,400 Cr manufacturing automation TAM hiding in plain sight.", date: "Jun 2025", readTime: "5 min read" },
  { tag: "Framework", title: "The 3-Question Test We Use for Every Pitch", excerpt: "After 200+ pitches, our team distilled our gut-check into three questions that predict 80% of our final decisions.", date: "May 2025", readTime: "4 min read" },
  { tag: "Lesson", title: "What Our One Failed Exit Taught Us", excerpt: "We lost money on one investment. Here's the exact post-mortem we ran — and what we changed in our diligence process.", date: "Apr 2025", readTime: "6 min read" },
];

const PANELS = ["Market Trends", "Investment Insights", "Startup Opportunities"];

export default function BenefitsScroll() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const panelWidth = el.clientWidth;
    el.scrollTo({ left: panelWidth * index, behavior: "smooth" });
    setActive(index);
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(index);
  };

  return (
    <section className="py-16" style={{ background: "#4747a3" }}>
      <div className="text-center mb-10 px-6">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#ffffff" }}>What You Get</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#000000" }}>Benefits</h2>
        <p className="mt-4 text-sm text-gray-300 max-w-md mx-auto">
          Every issue brings you market intelligence, curated investment insights, and exclusive startup opportunities.
        </p>
      </div>

      {/* Slider wrapper with 10% side padding */}
      <div className="relative px-[5%]">

        {/* Left arrow */}
        <button
          onClick={() => scrollTo(Math.max(active - 1, 0))}
          disabled={active === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity"
          style={{ background: "#ffffff", color: "#3700ff", opacity: active === 0 ? 0.3 : 1 }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scrollTo(Math.min(active + 1, PANELS.length - 1))}
          disabled={active === PANELS.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity"
          style={{ background: "#ffffff", color: "#3700ff", opacity: active === PANELS.length - 1 ? 0.3 : 1 }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="overflow-x-auto"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex">

            {/* Market Trends */}
            <div className="flex-shrink-0 w-full px-10 py-10" style={{ background: "#fff" }}>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Macro View</span>
              <h3 className="mt-2 text-2xl font-bold mb-6" style={{ color: "#2D2754" }}>Market Trends</h3>
              <p className="text-sm text-gray-500 mb-8 max-w-lg">Sector signals we're tracking — straight from our quarterly research notes.</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {trends.map(({ sector, trend, detail, sentiment }) => (
                  <div key={sector} className="rounded-xl p-5 transition-colors" style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.12)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(50,225,252,0.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f8ff")}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-sm" style={{ color: "#2D2754" }}>{sector}</h4>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${sentimentStyle[sentiment]}`}>{trend}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Insights */}
            <div className="flex-shrink-0 w-full px-10 py-10" style={{ background: "#eeeef7" }}>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>From the Archive</span>
              <h3 className="mt-2 text-2xl font-bold mb-6" style={{ color: "#2D2754" }}>Investment Insights</h3>
              <p className="text-sm text-gray-500 mb-8 max-w-lg">A sample of what lands in subscribers' inboxes.</p>
              <div className="grid md:grid-cols-3 gap-7">
                {insights.map(({ tag, title, excerpt, date, readTime }) => (
                  <div key={title} className="flex flex-col">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full self-start" style={{ background: "rgba(50,225,252,0.12)", color: "#2E2C77" }}>{tag}</span>
                    <h4 className="mt-4 font-bold text-base leading-snug" style={{ color: "#2D2754" }}>{title}</h4>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                      <span>{date}</span>
                      <span>{readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Startup Opportunities */}
            <div className="flex-shrink-0 w-full px-10 py-10" style={{ background: "#fff" }}>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Network Deals</span>
              <h3 className="mt-2 text-2xl font-bold mb-6" style={{ color: "#2D2754" }}>Startup Opportunities</h3>
              <p className="text-sm text-gray-500 mb-8 max-w-lg">Exclusive opportunities shared only with our newsletter subscribers.</p>
              <div className="flex flex-col gap-5">
                {opportunities.map(({ type, company, detail, deadline }) => (
                  <div key={company + type} className="flex flex-col sm:flex-row sm:items-center gap-4 py-5 border-b last:border-b-0" style={{ borderColor: "rgba(46,44,119,0.1)" }}>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto flex-shrink-0" style={typeStyle[type]}>{type}</span>
                    <div className="flex-1">
                      <span className="font-bold" style={{ color: "#2D2754" }}>{company}</span>
                      <span className="mx-2 text-gray-300">·</span>
                      <span className="text-gray-500 text-sm">{detail}</span>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">Deadline: {deadline}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-400">Subscribe below to get live opportunities directly in your inbox.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {PANELS.map((label, i) => (
          <button
            key={label}
            onClick={() => scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 28 : 10,
              height: 10,
              background: active === i ? "#2E2C77" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </section>
  );
}
