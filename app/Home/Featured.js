"use client";

const slides = [
  {
    id: 1,
    tag: "Our Portfolio",
    title: "Featured Portfolio",
    bg: "#ffffff",
    content: (
      <div style={{ display: "flex", gap: 24, maxWidth: 700, flexWrap: "wrap" }}>
        {[
          ["Company A", "Leading AI-powered solutions provider", "rgba(46,44,119,0.06)"],
          ["Company B", "Revolutionary manufacturing tech", "rgba(46,44,119,0.1)"],
          ["Company C", "Healthcare innovation platform", "rgba(50,225,252,0.08)"],
        ].map(([name, desc, color]) => (
          <div key={name} style={{ flex: "1 1 180px", background: color, borderRadius: 16, padding: "24px 20px", minWidth: 160, border: "1px solid rgba(46,44,119,0.15)" }}>
            <div style={{ width: "100%", height: 80, background: "rgba(50,225,252,0.12)", borderRadius: 10, marginBottom: 16 }} />
            <p style={{ color: "#2D2754", fontWeight: 700, fontSize: 16, margin: 0 }}>{name}</p>
            <p style={{ color: "rgba(46,44,119,0.6)", fontSize: 13, margin: "6px 0 0" }}>{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    tag: "Our Edge",
    title: "Why Choose Us",
    bg: "#2D2754",
    content: (
      <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", textAlign: "left" }}>

        {/* Subtitle */}
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, maxWidth: 600, margin: "0 auto 56px", textAlign: "center", lineHeight: 1.7 }}>
          We don't just fund startups — we build lasting partnerships rooted in trust, strategy, and shared success.
        </p>

        {/* Top stat bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden", marginBottom: 48 }}>
          {[
            ["₹500Cr+", "Capital Deployed"],
            ["50+", "Startups Funded"],
            ["5x", "Average Returns"],
            ["12+", "Years of Trust"],
          ].map(([val, label]) => (
            <div key={label} style={{ padding: "32px 24px", background: "rgba(255,255,255,0.04)", textAlign: "center" }}>
              <p style={{ color: "#32E1FC", fontSize: "clamp(28px,3vw,40px)", fontWeight: 800, margin: 0, lineHeight: 1 }}>{val}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 0", letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 40 }}>
          {[
            ["✦", "Proven Track Record", "With 50+ successful investments and a 5x average return, our portfolio speaks for itself. We've backed winners across fintech, healthtech, agritech, and deep-tech."],
            ["⬡", "Strategic Network", "Gain instant access to our curated network of 200+ industry leaders, seasoned advisors, and global investors who actively open doors for our portfolio companies."],
            ["◈", "Flexible Capital", "Whether you're pre-revenue or scaling to Series B, we tailor our capital solutions — equity, convertible notes, or hybrid instruments — to match your exact growth stage."],
            // ["✺", "Hands-on Mentorship", "Our investment team includes ex-founders and domain experts who roll up their sleeves alongside you — from product-market fit to IPO readiness."],
            // ["◉", "Due Diligence You Trust", "Our rigorous but founder-friendly evaluation ensures every deal is built on transparency, fair valuation, and mutual respect — no surprises post-term sheet."],
            // ["⬢", "Long-term Partnership", "We don't exit at Series A. Our rolling support model means we stay invested in your journey — operationally, financially, and strategically."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(50,225,252,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <span style={{ fontSize: 24, color: "#32E1FC", display: "block", marginBottom: 16 }}>{icon}</span>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>{title}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(50,225,252,0.07)", border: "1px solid rgba(50,225,252,0.2)", borderRadius: 20, padding: "28px 40px", flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 20, margin: 0 }}>Ready to scale your startup?</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: "4px 0 0" }}>Join 50+ founders who chose Kodanda as their growth partner.</p>
          </div>
          <a href="/startup-funding" style={{ padding: "14px 36px", borderRadius: 999, background: "#32E1FC", color: "#2D2754", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
            Apply for Funding →
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    tag: "Stay Connected",
    title: "Newsletter Signup",
    bg: "#ffffff",
    content: (
      <div style={{ maxWidth: 560 }}>
        <p style={{ color: "rgba(46,44,119,0.6)", fontSize: 18, lineHeight: 1.7, margin: "0 0 40px" }}>
          Stay updated with the latest investment opportunities, portfolio news, and insights from India's startup ecosystem.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: "1 1 260px",
              padding: "14px 24px",
              borderRadius: 999,
              border: "1px solid rgba(46,44,119,0.25)",
              background: "#f8f8ff",
              color: "#2D2754",
              fontSize: 15,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              background: "#2E2C77",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    ),
  },
];

export default function Featured() {
  return (
    <>
      {slides.map((slide) => (
        <section
          key={slide.id}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 10vw",
            alignItems: slide.id === 2 ? "center" : slide.id === 3 ? "flex-end" : "flex-start",
            textAlign: slide.id === 2 ? "center" : slide.id === 3 ? "right" : "left",
            position: "relative",
            // Fixed bg image for slides 1 and 3
            ...(slide.id === 1 || slide.id === 3
              ? {
                  backgroundImage: "url('/hero-img.jpeg')",
                  backgroundAttachment: "fixed",
                  backgroundSize: "30% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: slide.id === 1 ? "90% center" : "10% center",
                  backgroundColor: slide.bg,
                }
              : { background: slide.bg }),
          }}
        >
          <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: slide.bg === "#ffffff" ? "#2E2C77" : "#32E1FC", opacity: 0.7, marginBottom: 16 }}>
            0{slide.id} — {slide.tag}
          </span>
          <h2 style={{ color: slide.bg === "#ffffff" ? "#2D2754" : "#fff", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, margin: "0 0 32px", lineHeight: 1.1 }}>
            {slide.title}
          </h2>
          {slide.content}
        </section>
      ))}
    </>
  );
}
