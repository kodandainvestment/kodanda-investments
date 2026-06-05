import Navbar from "../CommonComp/Navbar";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[60vh] bg-indigo-950 overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4338ca55,_transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 pt-8 pb-16">
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          About Kodanda Investments
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Fueling India's <span className="text-indigo-400">Next Wave</span> of Innovation
        </h1>
        <p className="mt-5 text-white/60 text-lg max-w-xl">
          A Indore-based investment firm committed to discovering and scaling visionary founders
          across India's fastest-growing industrial corridors.
        </p>
      </div>
    </div>
  );
}
