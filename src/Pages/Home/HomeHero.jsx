import { useState, useEffect, useRef } from "react";
import Navbar from "../../Component/Navbar";

export default function HomeHero() {
  const [phase, setPhase] = useState("video"); // "video" | "fade" | "image" | "text"
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
    <div className="relative w-full h-screen overflow-hidden bg-black">
       <Navbar />
      {/* Video */}
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

      {/* Hero Image */}
      <img
        src="/hero-img.jpeg"
        alt="Kodanda Investments"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
          phase === "image" || phase === "text"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      />

      {/* Dark overlay */}
      {(phase === "image" || phase === "text") && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center transition-all duration-1000 ${
          phase === "text"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
          Kodanda Investments
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/80 tracking-widest uppercase">
          Pvt. Ltd.
        </p>
      </div>
    </div>
  );
}
