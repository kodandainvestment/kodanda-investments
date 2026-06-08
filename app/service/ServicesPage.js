"use client";

import { useRef } from "react";
import Navbar from "../CommonComp/Navbar";
import ServicesClient from "./ServicesClient";
import HeroFallingText from "./HeroFallingText";

export default function ServicesPage() {
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-white">
      <div
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: "#2E2C77", minHeight: "550px" }}
      >
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 pointer-events-none"
          style={{ background: "#2D2754" }}
        />
        <div
          className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "#32E1FC" }}
        />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-6 text-center text-white">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(50,225,252,0.15)", color: "#32E1FC" }}
          >
            Startup Funding
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Financial Services Built
            <br />
            <span style={{ color: "#32E1FC" }}>for Growth</span>
          </h1>
          <p
            className="mt-5 text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            End-to-end financial and business services designed to help
            individuals, startups, and enterprises grow, plan, and succeed with
            confidence.
          </p>
        </div>

        <HeroFallingText containerRef={heroRef} />
      </div>

      <ServicesClient />
    </div>
  );
}
