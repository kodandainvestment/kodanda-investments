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
      <div className="relative bg-indigo-900 overflow-hidden">
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-30" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">Startup Funding</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Fund Your <br /><span className="text-indigo-300">Next Big Idea</span></h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">We partner with ambitious founders at every stage — from first idea to market leader.</p>
        </div>
      </div>
      <FundingStages />
      <Industries />
      <FundingProcess />
      <FounderBenefits />
      <FAQs />
      <FundingForm />
    </div>
  );
}
