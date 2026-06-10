import Navbar from "../../CommonComp/Navbar";
import Footer from "../../CommonComp/Footer";
import { notFound } from "next/navigation";

const services = {
  "financial-advisory": {
    title: "Financial Advisory",
    icon: "📊",
    desc: "Personalized investment strategies tailored to your financial goals, risk tolerance, and long-term wealth vision.",
    details: [
      "Portfolio diversification across equity, debt, and alternative assets",
      "Risk assessment and mitigation planning",
      "Tax-efficient investment structuring",
      "Regular portfolio reviews and rebalancing",
    ],
  },
  "retirement-planning": {
    title: "Retirement Planning",
    icon: "🏖️",
    desc: "Secure your future with structured retirement plans designed to sustain your lifestyle post-retirement.",
    details: [
      "Retirement corpus estimation and goal setting",
      "NPS, PPF, and mutual fund strategy",
      "Pension and annuity planning",
      "Estate and succession planning",
    ],
  },
  "financial-analysis": {
    title: "Financial Analysis",
    icon: "🔍",
    desc: "Deep-dive financial analysis to uncover opportunities, risks, and insights for better decision-making.",
    details: [
      "Business financial health assessments",
      "Ratio and trend analysis",
      "Competitive benchmarking",
      "Investment feasibility studies",
    ],
  },
  "financial-reporting": {
    title: "Financial Reporting",
    icon: "📑",
    desc: "Accurate and timely financial reporting to keep stakeholders informed and compliance obligations met.",
    details: [
      "P&L, balance sheet, and cash flow statements",
      "MIS reporting and dashboards",
      "Regulatory and compliance reporting",
      "Audit-ready documentation",
    ],
  },
  "financial-planning": {
    title: "Financial Planning",
    icon: "🗺️",
    desc: "Holistic financial planning covering every stage of your personal and business financial journey.",
    details: [
      "Goal-based financial roadmaps",
      "Tax planning and optimization",
      "Insurance and risk coverage planning",
      "Wealth accumulation strategies",
    ],
  },
  budgeting: {
    title: "Budgeting",
    icon: "💰",
    desc: "Disciplined budgeting frameworks to control costs, maximize savings, and drive profitability.",
    details: [
      "Annual and quarterly budgeting",
      "Variance analysis and reporting",
      "Cost reduction strategies",
      "Cash flow forecasting",
    ],
  },
  "financial-accounting": {
    title: "Financial Accounting",
    icon: "🧾",
    desc: "End-to-end accounting services ensuring accuracy, transparency, and regulatory compliance.",
    details: [
      "Bookkeeping and ledger management",
      "GST, TDS, and tax filings",
      "Payroll processing",
      "Year-end closing and audit support",
    ],
  },
  "business-consulting": {
    title: "Business Consulting",
    icon: "🏢",
    desc: "Strategic and operational consulting to help businesses scale, optimize, and compete effectively.",
    details: [
      "Business model evaluation and improvement",
      "Market entry and expansion strategy",
      "Operational efficiency consulting",
      "Fundraising and investor relations",
    ],
  },
  "financial-consulting": {
    title: "Financial Consulting",
    icon: "🤝",
    desc: "Expert financial consulting to guide critical business and investment decisions with confidence.",
    details: [
      "M&A advisory and due diligence",
      "Capital structure optimization",
      "Financial restructuring",
      "Valuation and deal advisory",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services[slug];
  if (!s) return {};
  return { title: `${s.title} – Kodanda Investments` };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const s = services[slug];
  if (!s) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "#2E2C77", minHeight: "420px" }}>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 pointer-events-none" style={{ background: "#2D2754" }} />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-20 pointer-events-none" style={{ background: "#32E1FC" }} />
        <div className="relative z-30"><Navbar /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-16 text-center text-white">
          <span className="text-5xl">{s.icon}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold">{s.title}</h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>{s.desc}</p>
        </div>
      </div>

      {/* Details */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#2D2754" }}>What's Included</h2>
        <ul className="flex flex-col gap-4">
          {s.details.map((d) => (
            <li key={d} className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 shadow-sm">
              <span className="mt-1 w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#32E1FC" }} />
              <span className="text-gray-700">{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 p-8 rounded-3xl text-white text-center" style={{ background: "linear-gradient(135deg,#2D2754,#2E2C77)" }}>
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="mt-2 mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>Talk to our experts and build a plan that works for you.</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-full font-semibold transition" style={{ background: "#32E1FC", color: "#2D2754" }}>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
