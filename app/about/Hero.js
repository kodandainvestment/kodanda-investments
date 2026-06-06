import Navbar from "../CommonComp/Navbar";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[60vh] overflow-hidden" style={{ background: "#2D2754" }}>
      <Navbar />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, rgba(50,225,252,0.1), transparent 60%)" }} />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
        <span className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#32E1FC" }}>
          About Kodanda Investments
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Fueling India's <span style={{ color: "#32E1FC" }}>Next Wave</span> of Innovation
        </h1>
        <p className="mt-5 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
          A Indore-based investment firm committed to discovering and scaling visionary founders
          across India's fastest-growing industrial corridors.
        </p>
      </div>
    </div>
  );
}
