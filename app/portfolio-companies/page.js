import Navbar from "../CommonComp/Navbar";
import PortfolioGrid from "./PortfolioGrid";
import FeaturedInvestments from "./FeaturedInvestments";
import SuccessMetrics from "./SuccessMetrics";

export const metadata = { title: "Portfolio Companies – Kodanda Investments" };

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-indigo-950 overflow-hidden">
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-20" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-800 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Companies We <br />
            <span className="text-indigo-400">Believe In</span>
          </h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">
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
