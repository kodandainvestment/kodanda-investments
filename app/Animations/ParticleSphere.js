"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function fibSphere(count, radius) {
  const pts = [], g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i;
    pts.push(new THREE.Vector3(Math.cos(t) * r * radius, y * radius, Math.sin(t) * r * radius));
  }
  return pts;
}

function makeCube(count, size) {
  const pts = [], half = size / 2;
  const faces = [
    (u,v)=>new THREE.Vector3(half,(u-.5)*size,(v-.5)*size),
    (u,v)=>new THREE.Vector3(-half,(u-.5)*size,(v-.5)*size),
    (u,v)=>new THREE.Vector3((u-.5)*size,half,(v-.5)*size),
    (u,v)=>new THREE.Vector3((u-.5)*size,-half,(v-.5)*size),
    (u,v)=>new THREE.Vector3((u-.5)*size,(v-.5)*size,half),
    (u,v)=>new THREE.Vector3((u-.5)*size,(v-.5)*size,-half),
  ];
  const sq = Math.ceil(Math.sqrt(Math.ceil(count/6)));
  for (let f=0;f<6;f++) for (let i=0;i<sq&&pts.length<count;i++) for (let j=0;j<sq&&pts.length<count;j++) pts.push(faces[f](i/(sq-1),j/(sq-1)));
  return pts;
}

function makePyramid(count, size) {
  const pts = [], half = size/2, apex = new THREE.Vector3(0,half,0);
  const base = [new THREE.Vector3(-half,-half,-half),new THREE.Vector3(half,-half,-half),new THREE.Vector3(half,-half,half),new THREE.Vector3(-half,-half,half)];
  const perFace = Math.ceil(count/5);
  for (let f=0;f<4;f++) { const b0=base[f],b1=base[(f+1)%4]; for (let i=0;i<perFace&&pts.length<count;i++) { const u=Math.random(),v=Math.random()*(1-u); pts.push(new THREE.Vector3(apex.x*u+b0.x*v+b1.x*(1-u-v),apex.y*u+b0.y*v+b1.y*(1-u-v),apex.z*u+b0.z*v+b1.z*(1-u-v))); } }
  while (pts.length<count) pts.push(new THREE.Vector3((Math.random()-.5)*size,-half,(Math.random()-.5)*size));
  return pts;
}

function makeRing(count, radius) {
  const pts = [], tube = radius * 0.04;
  for (let i=0;i<count;i++) { const theta=(i/count)*Math.PI*2,phi=Math.random()*Math.PI*2,r=radius*0.75+tube*Math.cos(phi); pts.push(new THREE.Vector3(r*Math.cos(theta),tube*Math.sin(phi),r*Math.sin(theta))); }
  return pts;
}

function makeDiamond(count, size) {
  const pts = [];
  for (let i=0;i<count;i++) { const u=Math.random(),v=Math.random(),y=(u*2-1)*size,rMax=size*0.5*(1-Math.abs(y)/size),angle=v*Math.PI*2,r=rMax*Math.sqrt(Math.random()); pts.push(new THREE.Vector3(r*Math.cos(angle),y,r*Math.sin(angle))); }
  return pts;
}

function makeRope(count, size) {
  const pts = [];
  const h = size * 2.6, strands = 4, strandR = size * 0.22, fiberR = size * 0.055, twistFreq = 9;
  const perStrand = Math.floor(count / strands);
  for (let s = 0; s < strands; s++) {
    const phase = (s / strands) * Math.PI * 2;
    for (let i = 0; i < perStrand && pts.length < count; i++) {
      const t = i / (perStrand - 1), y = (t - 0.5) * h;
      const twist = t * Math.PI * 2 * twistFreq + phase;
      const cx = strandR * Math.cos(twist), cz = strandR * Math.sin(twist);
      const sub = t * Math.PI * 2 * twistFreq * 3 + phase * 2;
      pts.push(new THREE.Vector3(cx + fiberR*Math.cos(sub) + (Math.random()-.5)*fiberR*.4, y + (Math.random()-.5)*fiberR*.4, cz + fiberR*Math.sin(sub) + (Math.random()-.5)*fiberR*.4));
    }
  }
  while (pts.length < count) {
    const t = Math.random(), y = (t-.5)*h, twist = t*Math.PI*2*twistFreq;
    const s = Math.floor(Math.random()*strands), phase = (s/strands)*Math.PI*2;
    pts.push(new THREE.Vector3(strandR*Math.cos(twist+phase), y, strandR*Math.sin(twist+phase)));
  }
  return pts;
}

function makeLadder(count, size) {
  const pts = [], h=size*1.8, w=size*0.9, rungs=8, rt=size*0.06, rg=size*0.05;
  const pr=Math.floor(count*0.3), prung=Math.floor(count*0.4/rungs);
  for (let i=0;i<pr;i++) pts.push(new THREE.Vector3(-w/2+(Math.random()-.5)*rt,(i/(pr-1)-.5)*h,(Math.random()-.5)*rt));
  for (let i=0;i<pr;i++) pts.push(new THREE.Vector3( w/2+(Math.random()-.5)*rt,(i/(pr-1)-.5)*h,(Math.random()-.5)*rt));
  for (let r=0;r<rungs;r++) { const y=(-.5+(r+.5)/rungs)*h; for (let i=0;i<prung;i++) pts.push(new THREE.Vector3((Math.random()-.5)*w,y+(Math.random()-.5)*rg,(Math.random()-.5)*rg)); }
  while (pts.length<count) { const rail=Math.random()>.5?w/2:-w/2; pts.push(new THREE.Vector3(rail+(Math.random()-.5)*rt,(Math.random()-.5)*h,(Math.random()-.5)*rt)); }
  return pts;
}

// Helix / DNA double spiral for Why Choose Us
function makeHelix(count, size) {
  const pts = [];
  const h = size * 2.2, r = size * 0.5, twists = 5;
  const half = Math.floor(count / 2);
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1), y = (t - 0.5) * h;
    const a = t * Math.PI * 2 * twists;
    const fuzz = size * 0.06;
    pts.push(new THREE.Vector3(r*Math.cos(a)+(Math.random()-.5)*fuzz, y+(Math.random()-.5)*fuzz, r*Math.sin(a)+(Math.random()-.5)*fuzz));
  }
  for (let i = 0; i < count - half; i++) {
    const t = i / (count - half - 1), y = (t - 0.5) * h;
    const a = t * Math.PI * 2 * twists + Math.PI; // offset 180°
    const fuzz = size * 0.06;
    pts.push(new THREE.Vector3(r*Math.cos(a)+(Math.random()-.5)*fuzz, y+(Math.random()-.5)*fuzz, r*Math.sin(a)+(Math.random()-.5)*fuzz));
  }
  return pts;
}

// Galaxy spiral for portfolio
function makeGalaxy(count, size) {
  const pts = [];
  const arms = 3, armSpread = 0.4;
  for (let i = 0; i < count; i++) {
    const arm = i % arms, t = Math.random();
    const radius = t * size * 1.4;
    const angle = (arm / arms) * Math.PI * 2 + t * Math.PI * 3 + (Math.random() - 0.5) * armSpread;
    pts.push(new THREE.Vector3(radius*Math.cos(angle), (Math.random()-.5)*size*0.2*(1-t), radius*Math.sin(angle)));
  }
  return pts;
}

// CTA: full-screen scatter — fills entire viewport
function makeScatter(count) {
  const pts = [];
  // world units at camera z=320, fov=60: width≈369, height≈230
  // Use 2x to guarantee edge-to-edge coverage
  for (let i = 0; i < count; i++) {
    pts.push(new THREE.Vector3(
      (Math.random() - 0.5) * 740,
      (Math.random() - 0.5) * 460,
      (Math.random() - 0.5) * 60,
    ));
  }
  return pts;
}

const STEP_SHAPES = [3, 1, 2, 4]; // ring, cube, pyramid, diamond

export default function ParticleBackground({ radius = 130, count = 2400, activeCard = 0, hoveredStep = -1 }) {
  const mountRef = useRef(null);
  const stateRef = useRef({ activeCard: 0, hoveredStep: -1 });
  useEffect(() => { stateRef.current = { activeCard, hoveredStep }; }, [activeCard, hoveredStep]);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W/H, 0.1, 2000);
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Shape index map:
    // 0=sphere 1=cube 2=pyramid 3=ring 4=diamond 5=ladder 6=rope 7=helix 8=galaxy 9=scatter
    const shapes = [
      fibSphere(count, radius),
      makeCube(count, radius * 1.6),
      makePyramid(count, radius * 1.7),
      makeRing(count, radius * 1.4),
      makeDiamond(count, radius * 1.5),
      makeLadder(count, radius),
      makeRope(count, radius),
      makeHelix(count, radius),
      makeGalaxy(count, radius),
      makeScatter(count),
    ];

    const scatter = shapes[0].map(() => new THREE.Vector3((Math.random()-.5)*W*1.6,(Math.random()-.5)*H*1.6,(Math.random()-.5)*600));

    const positions = new Float32Array(count * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ size: 1.5, color: 0xaaddff, transparent: true, opacity: 0.85, sizeAttenuation: true });
    const group = new THREE.Group();
    group.add(new THREE.Points(geo, mat));
    scene.add(group);

    // World-space shift constants
    // At z=320, fov=60: visible half-width = tan(30°)*320 ≈ 184.75
    // So full visible width ≈ 369. Quarter-width ≈ 92
    const HALF_W = 184.75;
    const RIGHT  =  HALF_W * 0.52;  // ~96 world units right of center
    const LEFT   = -HALF_W * 0.52;  // ~96 world units left of center

    const convergeDur = 1.4;
    let elapsed = 0, lastTime = performance.now(), rotY = 0;
    let prevCard = 0, cardMorphT = 1, lastCard = 0;
    let stepFromIdx = 3, stepToIdx = 3, stepMorphT = 1;
    let currentX = 0; // smoothed group X

    const sec = (id) => {
      const el = document.getElementById(id);
      if (!el) return { active: false, t: 0 };
      const r = el.getBoundingClientRect();
      const raw = Math.max(0, Math.min(1 - r.top / (H * 0.6), 1));
      return { active: r.top < H && r.bottom > 0, t: 1 - Math.pow(1 - raw, 2) };
    };

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const now = performance.now(), dt = (now - lastTime) / 1000;
      lastTime = now; elapsed += dt;

      const { activeCard: ac, hoveredStep: hs } = stateRef.current;

      // service card morph
      if (ac !== lastCard) { prevCard = lastCard; cardMorphT = 0; lastCard = ac; }
      cardMorphT = Math.min(cardMorphT + dt * 2.5, 1);
      const cardEased = 1 - Math.pow(1 - cardMorphT, 3);

      // step hover morph
      const tsi = hs >= 0 ? STEP_SHAPES[hs] : 3;
      if (tsi !== stepToIdx) { stepFromIdx = stepToIdx; stepToIdx = tsi; stepMorphT = 0; }
      stepMorphT = Math.min(stepMorphT + dt * 3.0, 1);
      const stepEased = 1 - Math.pow(1 - stepMorphT, 3);

      const svcEl = document.getElementById("services-section");
      const sp = svcEl ? Math.max(0, Math.min(1 - svcEl.getBoundingClientRect().top / H, 1)) : 0;

      const cmp  = sec("company-section");
      const fnd  = sec("funding-section");
      const port = sec("portfolio-section");
      const why  = sec("why-section");
      const cta  = sec("cta-section");

      const convergeT = 1 - Math.pow(1 - Math.min(elapsed / convergeDur, 1), 3);

      // ── Target group X (world units) ──
      // Positive = right side of screen, Negative = left side
      let targetX;
      if      (cta.active)   targetX = 0;               // spread center
      else if (why.active)   targetX = LEFT * 3.0 * why.t;   // helix — pushed far left
      else if (port.active)  targetX = RIGHT * port.t;  // rope RIGHT
      else if (fnd.active)   targetX = LEFT * 1.8 * fnd.t;   // ring/step — pushed far left
      else if (cmp.active)   targetX = RIGHT * cmp.t;   // ladder RIGHT
      else                   targetX = LEFT * 1.8 * sp;      // cube LEFT (services) — shifted ~5% more left

      currentX += (targetX - currentX) * 0.07;
      group.position.x = currentX;

      rotY += dt * 0.15;
      const cosR = Math.cos(rotY), sinR = Math.sin(rotY);
      const pos = geo.attributes.position.array;

      for (let i = 0; i < count; i++) {
        const sc = scatter[i];
        let from, to, t;

        if (cta.active) {
          from = shapes[8][i]; to = shapes[9][i]; t = cta.t;
        } else if (why.active) {
          from = shapes[6][i]; to = shapes[7][i]; t = why.t;       // rope → helix
        } else if (port.active) {
          from = shapes[3][i]; to = shapes[6][i]; t = port.t;      // ring → rope
        } else if (fnd.active) {
          const sf = shapes[stepFromIdx][i], st = shapes[stepToIdx][i];
          from = shapes[5][i];
          to   = { x: sf.x+(st.x-sf.x)*stepEased, y: sf.y+(st.y-sf.y)*stepEased, z: sf.z+(st.z-sf.z)*stepEased };
          t    = fnd.t;
        } else if (cmp.active) {
          from = shapes[Math.min(ac+1,4)][i]; to = shapes[5][i]; t = cmp.t; // → ladder
        } else if (sp < 1) {
          from = shapes[0][i]; to = shapes[1][i]; t = sp;
        } else {
          from = shapes[prevCard+1][i]; to = shapes[Math.min(ac+1,4)][i]; t = cardEased;
        }

        const sx = from.x + (to.x - from.x) * t;
        const sy = from.y + (to.y - from.y) * t;
        const sz = from.z + (to.z - from.z) * t;

        const x = sc.x + (sx - sc.x) * convergeT;
        const y = sc.y + (sy - sc.y) * convergeT;
        const z = sc.z + (sz - sc.z) * convergeT;

        // For CTA scatter: no rotation so particles stay spread
        if (cta.active && cta.t > 0.3) {
          pos[i*3] = x; pos[i*3+1] = y; pos[i*3+2] = z;
        } else {
          pos[i*3]   = x * cosR - z * sinR;
          pos[i*3+1] = y;
          pos[i*3+2] = x * sinR + z * cosR;
        }
      }

      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    let raf = requestAnimationFrame(animate);
    const onResize = () => {
      const nw = window.innerWidth, nh = window.innerHeight;
      camera.aspect = nw/nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf); window.removeEventListener("resize", onResize);
      renderer.dispose(); geo.dispose(); mat.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [radius, count]);

  return <div ref={mountRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
