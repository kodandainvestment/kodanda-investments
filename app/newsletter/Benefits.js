"use client";
import { Zap, LineChart, Compass, Bell } from "lucide-react";
import CardSwap, { Card } from "../Animations/CardSwap";

const benefits = [
  { Icon: Zap, title: "Early Access", desc: "Get funding announcements and portfolio news before anyone else." },
  { Icon: LineChart, title: "Investment Insights", desc: "Frameworks and lessons from deals we've done — curated for founders and investors." },
  { Icon: Compass, title: "Market Trends", desc: "Sector-level analysis on where capital is moving across Indian startup ecosystems." },
  { Icon: Bell, title: "Startup Opportunities", desc: "Handpicked co-investment, hiring, and partnership opportunities from our network." },
];

const cards = [
  { Icon: Zap,      label: "Early Access",          sub: "Be first to know every funding move.",          color: "from-[#2E2C77] to-[#2D2754]" },
  { Icon: LineChart, label: "Investment Insights",   sub: "Frameworks from 200+ deals, simplified.",       color: "from-[#2D2754] to-[#32E1FC]" },
  { Icon: Compass,  label: "Market Trends",          sub: "Quarterly sector intelligence, decoded.",        color: "from-[#2E2C77] to-[#32E1FC]" },
  { Icon: Bell,     label: "Startup Opportunities",  sub: "Exclusive network deals in your inbox.",        color: "from-[#32E1FC] to-[#2E2C77]" },
];

export default function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left: content */}
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Why Subscribe</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>What You Get</h2>
          <p className="mt-4 text-gray-500 text-sm max-w-md">
            One email, every two weeks. No fluff — just signal from the front lines of Indian venture capital.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(50,225,252,0.15)" }}>
                  <Icon size={20} style={{ color: "#2E2C77" }} />
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: "#2D2754" }}>{title}</h3>
                  <p className="mt-1 text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CardSwap — centered via flex */}
        <div className="flex items-center justify-center" style={{ height: 500, paddingBottom: 80 }}>
          <div style={{ height: 500, width: 380, position: "relative" }}>
            <CardSwap cardDistance={60} verticalDistance={70} delay={3000} pauseOnHover={false} width={380} height={220}>
              {cards.map(({ Icon, label, sub, color }) => (
                <Card key={label} className={`bg-gradient-to-br ${color} p-8 flex flex-col justify-between`}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{label}</h3>
                    <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{sub}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
}
