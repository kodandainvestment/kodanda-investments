
"use client";
import Navbar from "../CommonComp/Navbar";
import ParticleSphere from "./ParticleSphere";
import Key from "./Key";
import Company from "./Company";
import Funding from "./Funding";
import Featured from "./Featured";
import Call from "./Call";
import { ArrowRight, TrendingUp, Building2, PieChart } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function HomePage() {


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#sphere-container", {
    x: -500,
    scrollTrigger: {
      trigger: "#key-section",
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
  });
}, []);



  return (
    <>
<section className="relative min-h-screen overflow-hidden bg-black">
  <Navbar />

  {/* Background Huge Text */}
  <h1 className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
    <span className="text-[10rem] md:text-[14rem] font-black text-white/[0.04] tracking-tight">
      KODANDA
    </span>
  </h1>

  {/* Blue Glow */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[180px] z-[1]" />

  {/* Particle Sphere Center */}
  {/* <div className="absolute inset-0 z-[20] flex items-center justify-center"> */}
<div
  id="sphere-container"
  className="fixed inset-0 z-[10] flex items-center justify-center pointer-events-none"
>
    <div className="w-[650px] h-[650px]">
      <ParticleSphere />
    </div>
  </div>

  {/* Hero Content */}
  <div className="relative z-[20] min-h-screen pointer-events-none max-w-[1400px] mx-auto px-6 lg:px-12">

    {/* Main Heading */}
    <div className="pt-44 flex justify-center text-center">
      <div className="max-w-5xl">

        <h1 className="text-white font-light text-5xl md:text-7xl leading-tight">
          Building{" "}
          <span className="italic font-semibold text-white">
            Extraordinary
          </span>
          <br />
          Wealth That Matters
        </h1>

        {/* <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          We partner with visionary founders and ambitious businesses,
          helping them scale through strategic investments and
          long-term value creation.
        </p> */}

      </div>
    </div>

    {/* Bottom Area */}
    <div className="absolute bottom-12 left-0 right-0 px-6 lg:px-12 flex items-end justify-between">

      {/* Button Left */}
      <button className=" pointer-events-auto group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white font-medium flex items-center gap-3">
        Start Your Project
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>

      {/* Stats Right */}
      <div className="hidden md:flex gap-16 text-white">

        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-sm text-gray-400 mt-1">
            Portfolio Companies
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-sm text-gray-400 mt-1">
            Client Satisfaction
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-sm text-gray-400 mt-1">
            Strategic Support
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

 

      <section id="key-section">
  <Key />
</section>
      <Company />
      <Funding />
      <Featured />
      <Call />
    </>
  );
}