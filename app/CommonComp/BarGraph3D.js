"use client";
import { useEffect, useState } from "react";

const BARS = [
  { h: 70,  front: "#1a6fc4", top: "#5bc8f8", side: "#0d4a8a" },
  { h: 110, front: "#1a7fd4", top: "#6dd4ff", side: "#0d5299" },
  { h: 155, front: "#1a90e0", top: "#7cdeff", side: "#0d5eaa" },
  { h: 205, front: "#1aa4f0", top: "#8ee8ff", side: "#0d6abb" },
  { h: 265, front: "#1ab8f8", top: "#a2f0ff", side: "#0d78cc" },
  { h: 330, front: "#20c8ff", top: "#b8f6ff", side: "#0d88dd" },
];

const W = 46;
const D = 16;
const GAP = 12;
const BASE_Y = 370;
const TOTAL_W = BARS.length * (W + GAP) - GAP;
const SVG_W = TOTAL_W + D + 32;
const SVG_H = BASE_Y + 40;

export default function BarGraph3D({ trigger = true }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!trigger) { setActive(false); return; }
    setActive(false);
    const t = setTimeout(() => setActive(true), 80);
    return () => clearTimeout(t);
  }, [trigger]);

  const cx = (SVG_W) / 2;
  const baseRx = (TOTAL_W + D) / 2 + 16;

  // Arrow: from above bar[0] sweeping up-right to above bar[5]
  const arrowEndX = 10 + 5 * (W + GAP) + W + D + 6;
  const arrowEndY = BASE_Y - BARS[5].h - 38;
  const arrowStartX = 10;
  const arrowStartY = BASE_Y - BARS[0].h - 12;
  const arrowPath = `M${arrowStartX},${arrowStartY} Q${TOTAL_W * 0.52},${BASE_Y - BARS[5].h - 110} ${arrowEndX},${arrowEndY}`;

  return (
    <div style={{ position: "relative", width: SVG_W, userSelect: "none" }}>
      <style>{`
        @keyframes growBar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes drawArrow { from { stroke-dashoffset: 520; } to { stroke-dashoffset: 0; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <svg width={SVG_W} height={SVG_H} style={{ overflow: "visible", display: "block" }}>
        <defs>
          {/* Base platform gradients */}
          <radialGradient id="platOuter" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#2a9dd8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0a2a5e" stopOpacity="0.75" />
          </radialGradient>
          <radialGradient id="platInner" cx="42%" cy="42%">
            <stop offset="0%" stopColor="#50cef8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0d3a6e" stopOpacity="0.6" />
          </radialGradient>

          {/* Bar front gradients */}
          {BARS.map((b, i) => (
            <linearGradient key={i} id={`bf${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor={b.side}  stopOpacity="0.9" />
              <stop offset="40%"  stopColor={b.front} stopOpacity="1"   />
              <stop offset="100%" stopColor={b.front} stopOpacity="0.85"/>
            </linearGradient>
          ))}

          {/* Arrow gradient */}
          <linearGradient id="arrGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#1ab8f8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#32E1FC" stopOpacity="1"   />
          </linearGradient>

          {/* Arrowhead marker */}
          <marker id="arrowHead" markerWidth="13" markerHeight="10" refX="11" refY="5" orient="auto">
            <polygon points="0 0, 13 5, 0 10" fill="#32E1FC" />
          </marker>

          {/* Glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* === BASE PLATFORM === */}
        {/* Shadow */}
        <ellipse cx={cx} cy={BASE_Y + 20} rx={baseRx + 6} ry={18} fill="rgba(0,60,120,0.4)" />
        {/* Outer ring */}
        <ellipse cx={cx} cy={BASE_Y + 10} rx={baseRx} ry={20} fill="url(#platOuter)" stroke="rgba(80,180,240,0.35)" strokeWidth={1.5} />
        {/* Inner platform */}
        <ellipse cx={cx} cy={BASE_Y + 4} rx={baseRx - 6} ry={17} fill="url(#platInner)" />
        {/* Grid rings */}
        {[0.35, 0.6, 0.85].map((f, i) => (
          <ellipse key={i} cx={cx} cy={BASE_Y + 4} rx={(baseRx - 6) * f} ry={17 * f}
            fill="none" stroke="rgba(100,200,255,0.2)" strokeWidth={0.9} />
        ))}
        {/* Grid spokes */}
        {[0, 45, 90, 135].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line key={i}
              x1={cx} y1={BASE_Y + 4}
              x2={cx + Math.cos(rad) * (baseRx - 6)} y2={BASE_Y + 4 + Math.sin(rad) * 17}
              stroke="rgba(100,200,255,0.15)" strokeWidth={0.9}
            />
          );
        })}

        {/* === BARS === */}
        {BARS.map((bar, i) => {
          const x = 10 + i * (W + GAP);
          const delay = `${0.2 + i * 0.22}s`;
          const anim = active ? `growBar 1.4s cubic-bezier(0.22,1,0.36,1) ${delay} both` : "none";

          return (
            <g key={i}>
              {/* Front face — grows from bottom up */}
              <rect
                x={x} y={BASE_Y - bar.h} width={W} height={bar.h}
                fill={`url(#bf${i})`} rx={2}
                style={{
                  transformOrigin: `${x + W / 2}px ${BASE_Y}px`,
                  animation: anim,
                }}
              />
              {/* Highlight stripe on front */}
              <rect
                x={x + 4} y={BASE_Y - bar.h + 4} width={5} height={bar.h - 8}
                fill="rgba(255,255,255,0.12)" rx={2}
                style={{
                  transformOrigin: `${x + W / 2}px ${BASE_Y}px`,
                  animation: anim,
                }}
              />
              {/* Right side face */}
              <polygon
                points={`
                  ${x + W},${BASE_Y - bar.h}
                  ${x + W + D},${BASE_Y - bar.h - D * 0.5}
                  ${x + W + D},${BASE_Y - D * 0.5}
                  ${x + W},${BASE_Y}
                `}
                fill={bar.side}
                style={{
                  transformOrigin: `${x + W}px ${BASE_Y}px`,
                  animation: anim,
                }}
              />
              {/* Top face */}
              <polygon
                points={`
                  ${x},${BASE_Y - bar.h}
                  ${x + W},${BASE_Y - bar.h}
                  ${x + W + D},${BASE_Y - bar.h - D * 0.5}
                  ${x + D},${BASE_Y - bar.h - D * 0.5}
                `}
                fill={bar.top}
                style={{
                  transformOrigin: `${x + W / 2}px ${BASE_Y}px`,
                  animation: anim,
                }}
              />
              {/* Top shimmer */}
              <line
                x1={x + 5} y1={BASE_Y - bar.h + 1}
                x2={x + W - 3} y2={BASE_Y - bar.h + 1}
                stroke="rgba(255,255,255,0.55)" strokeWidth={1.2} strokeLinecap="round"
                style={{
                  transformOrigin: `${x + W / 2}px ${BASE_Y}px`,
                  animation: anim,
                }}
              />
            </g>
          );
        })}

        {/* === GROWTH ARROW === */}
        {active && (
          <g filter="url(#glow)" style={{ animation: `fadeIn 0.5s ease ${0.2 + BARS.length * 0.22 + 0.2}s both` }}>
            <path
              d={arrowPath}
              fill="none"
              stroke="url(#arrGrad)"
              strokeWidth={3.5}
              strokeLinecap="round"
              markerEnd="url(#arrowHead)"
              strokeDasharray="520"
              strokeDashoffset="0"
              style={{ animation: `drawArrow 1.6s ease ${0.2 + BARS.length * 0.22 + 0.3}s both` }}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
