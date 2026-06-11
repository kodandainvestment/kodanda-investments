"use client";
import Navbar from "../CommonComp/Navbar";
import Ferrofluid from "../Animations/Ferrofluid";
import FundingStages from "./FundingStages";
import Industries from "./Industries";
import FundingProcess from "./FundingProcess";
import FounderBenefits from "./FounderBenefits";
import FAQs from "./FAQs";
import FundingForm from "./FundingForm";

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden" style={{ background: "#000000", minHeight: "600px" }}>
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <Ferrofluid
            colors={["#4500ff","#006dff","#004fff"]}
            speed={0.5}
            scale={1.6}
            turbulence={1}
            fluidity={0.1}
            rimWidth={0.2}
            sharpness={2.5}
            shimmer={1.5}
            glow={2}
            flowDirection="down"
            opacity={1}
            mouseInteraction
            mouseStrength={1}
            mouseRadius={0.35}
          />
        </div>
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#4500ff" }} />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-20" style={{ background: "#006dff" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(69,0,255,0.2)", color: "#7b7fff" }}>Startup Funding</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: "#ffffff" }}>Fund Your <br /><span style={{ color: "#006dff" }}>Next Big Idea</span></h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>We partner with ambitious founders at every stage — from first idea to market leader.</p>
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
