export default function Call() {
  return (
    <section className="py-16" style={{ background: "#0800ff" }}>
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Call to Action</h2>
        <p className="text-xl mb-8">Ready to take your startup to the next level?</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-full text-lg font-semibold transition"
            style={{ background: "#32E1FC", color: "#2D2754" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Apply for Funding
          </button>
          <button
            className="px-8 py-3 rounded-full text-lg font-semibold transition border-2 border-white text-white hover:bg-white"
            style={{}}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#2E2C77"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
          >
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
}
