"use client";

const blobs = [
  { w: 180, h: 160, top: "4%",  left: "5%",  opacity: 0.18, animation: "blob1 8s ease-in-out infinite" },
  { w: 240, h: 220, top: "8%",  left: "50%", opacity: 0.22, animation: "blob2 10s ease-in-out infinite" },
  { w: 200, h: 180, top: "2%",  left: "72%", opacity: 0.15, animation: "blob3 9s ease-in-out infinite" },
  { w: 160, h: 150, top: "28%", left: "2%",  opacity: 0.20, animation: "blob4 11s ease-in-out infinite" },
  { w: 260, h: 240, top: "30%", left: "35%", opacity: 0.16, animation: "blob1 12s ease-in-out infinite reverse" },
  { w: 200, h: 180, top: "25%", left: "68%", opacity: 0.24, animation: "blob2 7s ease-in-out infinite" },
  { w: 140, h: 130, top: "55%", left: "8%",  opacity: 0.18, animation: "blob3 9s ease-in-out infinite reverse" },
  { w: 220, h: 200, top: "52%", left: "28%", opacity: 0.14, animation: "blob4 13s ease-in-out infinite" },
  { w: 180, h: 160, top: "58%", left: "62%", opacity: 0.22, animation: "blob1 8s ease-in-out infinite" },
  { w: 150, h: 140, top: "75%", left: "0%",  opacity: 0.16, animation: "blob2 10s ease-in-out infinite reverse" },
  { w: 240, h: 220, top: "72%", left: "42%", opacity: 0.18, animation: "blob3 11s ease-in-out infinite" },
  { w: 170, h: 155, top: "78%", left: "78%", opacity: 0.20, animation: "blob4 8s ease-in-out infinite" },
];

export default function BlueBlobBg() {
  return (
    <>
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(18px,-12px) scale(1.04)} 66%{transform:translate(-10px,16px) scale(0.97)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-20px,10px) scale(1.05)} 66%{transform:translate(14px,-18px) scale(0.96)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(12px,20px) scale(0.98)} 66%{transform:translate(-16px,-10px) scale(1.06)} }
        @keyframes blob4 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-8px,-22px) scale(1.03)} 66%{transform:translate(20px,8px) scale(0.95)} }
      `}</style>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {blobs.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: b.w,
              height: b.h,
              top: b.top,
              left: b.left,
              borderRadius: "30%",
              background: "linear-gradient(135deg, #1a3fff 0%, #003ecc 60%, #0027a8 100%)",
              opacity: b.opacity,
              animation: b.animation,
              backdropFilter: "blur(2px)",
              border: "1.5px solid rgba(100,150,255,0.18)",
            }}
          />
        ))}
      </div>
    </>
  );
}
