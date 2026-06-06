import Navbar from "../CommonComp/Navbar";
import PortfolioGrid from "./PortfolioGrid";
import FeaturedInvestments from "./FeaturedInvestments";
import SuccessMetrics from "./SuccessMetrics";

export const metadata = { title: "Portfolio Companies – Kodanda Investments" };

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "#2D2754" }}>
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#2E2C77" }} />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-10" style={{ background: "#32E1FC" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(50,225,252,0.15)", color: "#32E1FC" }}>
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Companies We <br />
            <span style={{ color: "#32E1FC" }}>Believe In</span>
          </h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            30+ startups across 6 industries — each chosen for their potential to redefine markets.
          </p>
        </div>
      </div>

      <FeaturedInvestments />
      <PortfolioGrid />
      <SuccessMetrics />
    </div>
  );
}
