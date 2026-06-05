import Navbar from "../CommonComp/Navbar";
import Benefits from "./Benefits";
import InvestmentInsights from "./InvestmentInsights";
import MarketTrends from "./MarketTrends";
import StartupOpportunities from "./StartupOpportunities";
import SubscribeForm from "./SubscribeForm";

export const metadata = { title: "Newsletter – Kodanda Investments" };

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-indigo-950 overflow-hidden">
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-20" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-800 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Newsletter
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            India's Startup <br />
            <span className="text-indigo-400">Pulse, Delivered.</span>
          </h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">
            Bi-weekly insights on venture capital, market trends, and startup opportunities — curated by the Kodanda team.
          </p>
          <a href="#subscribe" className="mt-8 inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-colors">
            Subscribe Free →
          </a>
        </div>
      </div>

      <Benefits />
      <InvestmentInsights />
      <MarketTrends />
      <StartupOpportunities />
      <div id="subscribe">
        <SubscribeForm />
      </div>
    </div>
  );
}
