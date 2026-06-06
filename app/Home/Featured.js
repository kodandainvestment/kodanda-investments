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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 680 }}>
        {[
          ["✦", "Proven Track Record", "50+ investments with 5x average returns"],
          ["✦", "Strategic Network", "Access to industry leaders and advisors"],
          ["✦", "Flexible Capital", "Customized solutions for your growth stage"],
          ["✦", "Hands-on Mentorship", "Support from experienced entrepreneurs"],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ color: "#32E1FC", fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>{title}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "4px 0 0" }}>{desc}</p>
            </div>
          </div>
        ))}
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
            background: slide.bg,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 10vw",
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
