"use client";
import { useEffect, useState } from "react";

function Coin({ size = 70 }) {
  return (
    <div
      style={{
        width: size,
        height: size * 0.38,
        background: "radial-gradient(ellipse at 40% 35%, #FFE066 0%, #F5A623 55%, #C07800 100%)",
        borderRadius: "50%",
        border: "3px solid #8B5E00",
        boxShadow: `0 3px 0 #8B5E00, inset 0 2px 4px rgba(255,255,200,0.5)`,
        position: "relative",
        marginBottom: "-6px",
      }}
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "15%",
            left: `${12 + i * 10}%`,
            width: 2,
            height: "70%",
            background: "rgba(139,94,0,0.35)",
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

function CoinStack({ count, dropDelay = 0, staggerMs = 80, animate = true }) {
  const [dropped, setDropped] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const timers = [];
    for (let i = 0; i < count; i++) {
      timers.push(setTimeout(() => setDropped(true), dropDelay + i * staggerMs));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 0 }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            transform: dropped ? "translateY(0)" : "translateY(-500px)",
            opacity: dropped ? 1 : 0,
            transition: `transform 0.55s cubic-bezier(0.22,1,0.36,1) ${dropDelay + i * staggerMs}ms, opacity 0.25s ease ${dropDelay}ms`,
          }}
        >
          <Coin size={72} />
        </div>
      ))}
    </div>
  );
}

export default function CoinGroup({ animate = true }) {
  const stacks = [
    { count: 9, dropDelay: 0 },
    { count: 14, dropDelay: 120 },
    { count: 11, dropDelay: 60 },
  ];

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "28px" }}>
      {stacks.map((s, i) => (
        <CoinStack key={i} count={s.count} dropDelay={s.dropDelay} animate={animate} />
      ))}
    </div>
  );
}
