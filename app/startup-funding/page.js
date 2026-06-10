"use client";
import Navbar from "../CommonComp/Navbar";
import FundingStages from "./FundingStages";
import Industries from "./Industries";
import FundingProcess from "./FundingProcess";
import FounderBenefits from "./FounderBenefits";
import FAQs from "./FAQs";
import FundingForm from "./FundingForm";

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden" style={{ background: "#2E2C77" }}>
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30" style={{ background: "#2D2754" }} />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-20" style={{ background: "#32E1FC" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(50,225,252,0.15)", color: "#32E1FC" }}>Startup Funding</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Fund Your <br /><span style={{ color: "#32E1FC" }}>Next Big Idea</span></h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>We partner with ambitious founders at every stage — from first idea to market leader.</p>
        </div>
      </div>
      <FundingStages />
      <Industries />
      <FounderBenefits />
      <FundingProcess />
      <FAQs />
      <FundingForm />
    </div>
  );
}
