"use client";
import { useEffect, useRef, useState } from "react";
import { Users, BarChart2, Repeat, Globe } from "lucide-react";

const traits = [
  { Icon: Users, title: "Strong Founding Team", desc: "2+ co-founders with complementary skills, deep domain knowledge, and prior execution experience." },
  { Icon: BarChart2, title: "Validated Traction", desc: "Early revenue, pilot customers, or measurable user growth that proves product-market fit." },
  { Icon: Repeat, title: "Scalable Business Model", desc: "Unit economics that improve at scale with a clear path to ₹10 Cr+ ARR within 3 years." },
  { Icon: Globe, title: "Large Addressable Market", desc: "Targeting a TAM of ₹500 Cr+ with a defensible niche to own first." },
];

function Card({ Icon, title, desc, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.2)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
      className="relative flex items-center gap-4 px-6 py-5 rounded-2xl w-[380px] group cursor-pointer"
    >
      <div className="flex-1">
        <h3 className="font-bold text-base transition-colors duration-300 group-hover:text-[#32E1FC]" style={{ color: "#ffffff" }}>{title}</h3>
        <p className="text-gray-100 text-xs mt-1 leading-relaxed">{desc}</p>
      </div>
      <div
        className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: "#32E1FC", boxShadow: "0 0 18px 4px rgba(50,225,252,0.5)" }}
      >
        <Icon size={20} style={{ color: "#2E2C77" }} />
      </div>
      {/* hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "0 0 20px 2px rgba(50,225,252,0.25)", border: "1px solid rgba(50,225,252,0.4)" }}
      />
    </div>
  );
}

export default function IdealStartupProfile() {
  return (
    <div
      style={{
        backgroundImage: "url('/profit.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ background: "rgba(10,8,40,0.55)" }}>
        <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#32E1FC" }}>What We Look For</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>Ideal Startup Profile</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm">
          We back founders who combine ambition with evidence. Here's the profile that excites us most.
        </p>
      </div>
      <div className="relative" style={{ height: "280px" }}>
        {/* Card 1: far left */}
        <div className="absolute" style={{ left: "0%", top: "0" }}>
          <Card Icon={traits[0].Icon} title={traits[0].title} desc={traits[0].desc} delay={0} />
        </div>
        {/* Card 2: right side with gap */}
        <div className="absolute" style={{ left: "52%", top: "0" }}>
          <Card Icon={traits[1].Icon} title={traits[1].title} desc={traits[1].desc} delay={150} />
        </div>
        {/* Card 3: center of gap between card1 and card2 */}
        <div className="absolute" style={{ left: "26%", top: "140px" }}>
          <Card Icon={traits[2].Icon} title={traits[2].title} desc={traits[2].desc} delay={300} />
        </div>
        {/* Card 4: aligned to center/right of card 2 */}
        <div className="absolute" style={{ left: "68%", top: "140px" }}>
          <Card Icon={traits[3].Icon} title={traits[3].title} desc={traits[3].desc} delay={450} />
        </div>
      </div>
      <div className="mt-10 rounded-2xl p-8 grid sm:grid-cols-3 gap-8 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
        {[["Pre-Seed to Series A", "Stage"], ["₹25 L – ₹3 Cr", "Ticket Size"], ["6 – 18 months", "Decision Timeline"]].map(([val, label]) => (
          <div key={label}>
            <p className="text-2xl font-bold" style={{ color: "#32E1FC" }}>{val}</p>
            <p className="text-sm text-gray-300 mt-1">{label}</p>
          </div>
        ))}
      </div>
        </section>
      </div>
    </div>
  );
}
