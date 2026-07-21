"use client";

import { useEffect, useState } from "react";

interface Dot {
  id: number;
  x: number;       // vw %
  y: number;       // vh %
  size: number;    // px
  opacity: number;
  duration: number; // s
  delay: number;    // s
}

// Generate stable random particles on the client only (avoids SSR mismatch)
function generateDots(count: number): Dot[] {
  // Simple deterministic-ish seeded random using index
  const rng = (seed: number, offset = 0) => {
    const x = Math.sin(seed * 127.1 + offset * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x:        rng(i, 0) * 100,
    y:        rng(i, 1) * 100,
    size:     rng(i, 2) * 1.6 + 0.6,   // 0.6 – 2.2 px
    opacity:  rng(i, 3) * 0.18 + 0.04, // 0.04 – 0.22
    duration: rng(i, 4) * 10 + 12,     // 12 – 22 s
    delay:    rng(i, 5) * 14,           // 0 – 14 s
  }));
}

export function DustParticles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(generateDots(65));
  }, []);

  if (dots.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dust-dot"
          style={{
            left:              `${dot.x}vw`,
            top:               `${dot.y}vh`,
            width:             `${dot.size}px`,
            height:            `${dot.size}px`,
            opacity:           dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay:    `-${dot.delay}s`, // negative = start mid-cycle
          }}
        />
      ))}
    </div>
  );
}
