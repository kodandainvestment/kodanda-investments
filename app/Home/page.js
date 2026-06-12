// "use client";
// import { useState, useEffect, useRef } from "react";
// import Navbar from "../CommonComp/Navbar";
// import Key from "./Key";
// import Company from "./Company";
// import Funding from "./Funding";
// import Featured from "./Featured";
// import Call from "./Call";

// export default function HomePage() {
//   const [phase, setPhase] = useState("video");
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     const handleEnded = () => {
//       setPhase("fade");
//       setTimeout(() => setPhase("image"), 1000);
//       setTimeout(() => setPhase("text"), 2000);
//     };
//     video.addEventListener("ended", handleEnded);
//     return () => video.removeEventListener("ended", handleEnded);
//   }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden bg-black">
//         <Navbar />
//         <video
//           ref={videoRef}
//           src="/hero.mp4"
//           autoPlay
//           muted
//           playsInline
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             phase === "video" ? "opacity-100" : "opacity-0"
//           }`}
//         />
//         <img
//           src="/hero-img.jpeg"
//           alt="Kodanda Investments"
//           className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
//             phase === "image" || phase === "text" ? "opacity-100 scale-100" : "opacity-0 scale-105"
//           }`}
//         />
//         {(phase === "image" || phase === "text") && (
//           <div className="absolute inset-0 bg-black/40" />
//         )}
//         <div
//           className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center transition-all duration-1000 ${
//             phase === "text" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg max-w-[900px]">
//             Investing in India's <br />Next Leader's.
//           </h1>
//           <p className="mt-3 text-lg text-white/80 tracking-widest uppercase max-w-[900px]">
//             Managing ₹20+ crores in corporate funds to accelerate visionary startups accross india's growing industrial corridors.
//           </p>
//           <div className="mt-6">
//             <button
//               className="px-6 py-3 text-white rounded-full text-lg font-semibold transition-colors duration-300"
//               style={{ background: "#32E1FC", color: "#2D2754" }}
//               onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
//               onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
//             >
//               Get Funded
//             </button>
//             <button
//               className="ml-4 px-6 py-3 text-white rounded-full text-lg font-semibold transition-colors duration-300 border border-white/40"
//               style={{ background: "rgba(46,44,119,0.7)" }}
//               onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(45,39,84,0.9)")}
//               onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(46,44,119,0.7)")}
//             >
//               Invest with Us
//             </button>
//           </div>
//         </div>
//       </div>
//       <Key />
//       <Company />
//       <Funding />
//       <Featured />
//       <Call />
//     </>
//   );
// }


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