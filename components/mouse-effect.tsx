"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ─── Canvas particle system ───────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  pulse: number;
  pulseSpeed: number;
  isTeal: boolean;
}

function usePArticleCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  mouseRef: React.RefObject<{ x: number; y: number }>
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 28 particles – teal/orange branded
    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.6 + 0.5,
      baseAlpha: Math.random() * 0.28 + 0.06,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.008,
      isTeal: Math.random() > 0.22, // ~78% teal, 22% orange
    }));

    let animId: number;

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        p.x += p.vx;
        p.y += p.vy;

        // Mouse attraction within 190px
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 190 && dist > 0) {
          const force = ((190 - dist) / 190) * 0.022;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Soft repulsion when very close (prevents clustering)
        if (dist < 38 && dist > 0) {
          p.vx -= (dx / dist) * 0.06;
          p.vy -= (dy / dist) * 0.06;
        }

        // Speed cap + friction
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 1.4) {
          p.vx = (p.vx / speed) * 1.4;
          p.vy = (p.vy / speed) * 1.4;
        }
        p.vx *= 0.996;
        p.vy *= 0.996;

        // Edge wrap
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        // Draw particle
        const r = p.size + Math.sin(p.pulse) * 0.4;
        const alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.pulse));
        const color = p.isTeal ? "#0ff4c6" : "#ff6b35";

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Constellation lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const d = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (d < 88) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 88) * 0.07;
            ctx.strokeStyle = "#0ff4c6";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animId = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef, mouseRef]);
}

// ─── Mouse effect component ───────────────────────────────────────────────────

export function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -500, y: -500 });

  // Spring configs for cursor layers
  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  const glowX = useSpring(rawX, { stiffness: 55, damping: 18, mass: 0.8 });
  const glowY = useSpring(rawY, { stiffness: 55, damping: 18, mass: 0.8 });
  const ringX = useSpring(rawX, { stiffness: 220, damping: 28, mass: 0.4 });
  const ringY = useSpring(rawY, { stiffness: 220, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  usePArticleCanvas(canvasRef, mouseRef);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.65 }}
      />

      {/* Large ambient glow – follows slow spring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(15,244,198,0.055) 0%, rgba(15,244,198,0.02) 45%, transparent 70%)",
        }}
      />

      {/* Tight cursor ring – follows fast spring */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 22,
          height: 22,
        }}
      >
        <div className="w-full h-full rounded-full border border-teal/35 backdrop-blur-none" />
      </motion.div>

      {/* Inner dot – snaps directly to cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          width: 4,
          height: 4,
          background: "#0ff4c6",
          borderRadius: "50%",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
