const stats = [
  { value: "#1", label: "Cleanest City in India (7 yrs)" },
  { value: "12%+", label: "Annual startup growth rate" },
  { value: "3 IITs", label: "& top engineering institutes nearby" },
  { value: "₹50K Cr+", label: "Infrastructure investment pipeline" },
];

export default function WhyIndore() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Our Home City</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Why Indore?</h2>
          <p className="mt-5 leading-relaxed" style={{ color: "rgba(46,44,119,0.65)" }}>
            Indore is rapidly emerging as Central India's startup capital — combining world-class
            infrastructure, a thriving talent pool, and an entrepreneurial culture that punches well above
            its weight on the national stage.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: "rgba(46,44,119,0.65)" }}>
            Being headquartered here lets us discover high-conviction founders early, before the capital
            markets catch up — giving our portfolio companies a meaningful head-start.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl p-6" style={{ background: "rgba(50,225,252,0.08)", border: "1px solid rgba(46,44,119,0.15)" }}>
              <p className="text-3xl font-bold" style={{ color: "#2E2C77" }}>{value}</p>
              <p className="mt-2 text-sm" style={{ color: "rgba(46,44,119,0.65)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
