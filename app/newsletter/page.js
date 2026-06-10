import Navbar from "../CommonComp/Navbar";
import Benefits from "./Benefits";
import BenefitsScroll from "./BenefitsScroll";
import SubscribeForm from "./SubscribeForm";

export const metadata = { title: "Newsletter – Kodanda Investments" };

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden" style={{ background: "#2D2754" }}>
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#2E2C77" }} />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-10" style={{ background: "#32E1FC" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(50,225,252,0.15)", color: "#32E1FC" }}>
            Newsletter
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            India's Startup <br />
            <span style={{ color: "#32E1FC" }}>Pulse, Delivered.</span>
          </h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Bi-weekly insights on venture capital, market trends, and startup opportunities — curated by the Kodanda team.
          </p>
          <a href="#subscribe" className="mt-8 inline-block px-8 py-3 text-sm font-semibold rounded-full transition-colors" style={{ background: "#32E1FC", color: "#2D2754" }}>
            Subscribe Free →
          </a>
        </div>
      </div>

      <Benefits />
      <BenefitsScroll />
      <div id="subscribe">
        <SubscribeForm />
      </div>
    </div>
  );
}
