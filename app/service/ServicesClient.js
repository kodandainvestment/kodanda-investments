"use client";

import ScrollStack, { ScrollStackItem } from "../Animations/ScrollStack";

const services = [
  {
    icon: "📊",
    title: "Investment Advisory",
    desc: "Personalized strategies to grow and protect your wealth across asset classes.",
  },
  {
    icon: "🚀",
    title: "Startup Funding",
    desc: "Seed to Series A funding support with mentorship and network access.",
  },
  {
    icon: "🏢",
    title: "Business Consulting",
    desc: "Operational, financial, and strategic consulting for growing businesses.",
  },
  {
    icon: "📑",
    title: "Financial Planning",
    desc: "Comprehensive planning covering tax, retirement, and wealth management.",
  },
  {
    icon: "🤝",
    title: "Mergers & Acquisitions",
    desc: "End-to-end M&A advisory including valuation, due diligence, and deal closure.",
  },
  {
    icon: "🌐",
    title: "Market Expansion",
    desc: "Strategic guidance to enter new markets domestically and internationally.",
  },
];

const stats = [
  { value: "₹500Cr+", label: "Assets Managed" },
  { value: "200+", label: "Clients Served" },
  { value: "50+", label: "Startups Funded" },
  { value: "15+", label: "Years Experience" },
];

export default function ServicesClient() {
  return (
    <>
      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold" style={{ color: "#2E2C77" }}>{s.value}</p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Services ScrollStack */}
      <section id="services" className="pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#2D2754" }}>
          Our Core Services
        </h2>
        <ScrollStack useWindowScroll={true} className="flex flex-col items-center">
          {services.map((s, i) => (
            <ScrollStackItem
              key={s.title}
              itemClassName={i % 2 === 0 ? "text-white" : ""}
              style={{
                width: "80vw",
                maxWidth: "80vw",
                marginLeft: "auto",
                marginRight: "auto",
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #2D2754 0%, #2E2C77 60%, #3d3a99 100%)"
                  : "linear-gradient(135deg, #f0f0ff 0%, #ffffff 100%)",
                border: i % 2 !== 0 ? "1px solid #e0e0f5" : "none",
              }}
            >
              <span className="text-4xl">{s.icon}</span>
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ color: i % 2 === 0 ? "#ffffff" : "#2D2754" }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "#4b5563" }}
              >
                {s.desc}
              </p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>
    </>
  );
}
