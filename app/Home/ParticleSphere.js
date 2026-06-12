"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function ParticleBall() {
  const pointsRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, originalPositions } = useMemo(() => {
    const pos = [];

    for (let i = 0; i < 5000; i++) {
      const radius = 2;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    return {
      positions: new Float32Array(pos),
      originalPositions: new Float32Array(pos),
    };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0003;

   mouse.current.x = state.mouse.x * 4;
   mouse.current.y = state.mouse.y * 4;

    const array = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < array.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      let x = array[i];
      let y = array[i + 1];

      const dx = x - mouse.current.x;
      const dy = y - mouse.current.y;

      const dist = Math.sqrt(dx * dx + dy * dy);

if (dist < 1.5) {
  const angle = Math.atan2(dy, dx);

  const force = (1.5 - dist) * 0.12;

  array[i] += Math.cos(angle) * force;
  array[i + 1] += Math.sin(angle) * force;
}

array[i] += (ox - array[i]) * 0.02;
array[i + 1] += (oy - array[i + 1]) * 0.02;
array[i + 2] += (oz - array[i + 2]) * 0.02;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleSphere() {
  return (
    <div className="w-full h-full">
      {/* <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={1} />
        <ParticleBall />
      </Canvas> */}

    
<Canvas
  camera={{ position: [0, 0, 7], fov: 60 }}
  onPointerMove={() => {
      console.log("MOUSE DETECTED");
  }}
>
  <ambientLight intensity={1} />
  <ParticleBall />
</Canvas>
    </div>
  );
}