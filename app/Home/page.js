"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../CommonComp/Navbar";
import Key from "./Key";
import Company from "./Company";
import Funding from "./Funding";
import Featured from "./Featured";
import Call from "./Call";

export default function HomePage() {
  const [phase, setPhase] = useState("video");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      setPhase("fade");
      setTimeout(() => setPhase("image"), 1000);
      setTimeout(() => setPhase("text"), 2000);
    };
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <Navbar />
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            phase === "video" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="/hero-img.jpeg"
          alt="Kodanda Investments"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            phase === "image" || phase === "text" ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
        {(phase === "image" || phase === "text") && (
          <div className="absolute inset-0 bg-black/40" />
        )}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center transition-all duration-1000 ${
            phase === "text" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg max-w-[900px]">
            Investing in India's <br />Next Leader's.
          </h1>
          <p className="mt-3 text-lg text-white/80 tracking-widest uppercase max-w-[900px]">
            Managing ₹20+ crores in corporate funds to accelerate visionary startups accross india's growing industrial corridors.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-300">
              Get Funded
            </button>
            <button className="ml-4 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-colors duration-300">
              Invest with Us
            </button>
          </div>
        </div>
      </div>
      <Key />
      <Company />
      <Funding />
      <Featured />
      <Call />
    </>
  );
}
