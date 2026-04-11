"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { socialLinks } from "@/data/projects";

// ─── Orbit data ───────────────────────────────────────────────────────────────

const innerTech = [
  { label: "Java",      icon: "☕", text: false },
  { label: "Spring",    icon: "🍃", text: false },
  { label: "Postgres",  icon: "🐘", text: false },
  { label: "Docker",    icon: "🐳", text: false },
  { label: "RabbitMQ",  icon: "🐇", text: false },
  { label: "Railway",   icon: "🚂", text: false },
];

const outerTech = [
  { label: "Next.js",    icon: "▲",  text: true  },
  { label: "TypeScript", icon: "TS", text: true  },
  { label: "AWS S3",     icon: "S3", text: true  },
  { label: "FFmpeg",     icon: "FF", text: true  },
  { label: "TanStack",   icon: "TQ", text: true  },
  { label: "JWT",        icon: "🔐", text: false },
  { label: "Tailwind",   icon: "TW", text: true  },
  { label: "Resend",     icon: "✉",  text: false },
];

// ─── Single orbiting icon ─────────────────────────────────────────────────────

interface OrbitItemProps {
  progress: MotionValue<number>;
  index: number;
  total: number;
  radius: number;
  direction: 1 | -1;
  label: string;
  icon: string;
  isText: boolean;
}

function OrbitItem({
  progress, index, total, radius, direction, label, icon, isText,
}: OrbitItemProps) {
  const startAngle = ((2 * Math.PI) / total) * index - Math.PI / 2;

  const x = useTransform(progress, (v) =>
    Math.cos(startAngle + v * 2 * Math.PI * direction) * radius
  );
  const y = useTransform(progress, (v) =>
    Math.sin(startAngle + v * 2 * Math.PI * direction) * radius
  );

  return (
    <motion.div
      title={label}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-9 h-9 glass rounded-xl flex items-center justify-center border border-border/30 hover:border-teal/50 hover:bg-teal/10 transition-all duration-200 cursor-default group shadow-sm">
        <span
          className={
            isText
              ? "text-[9px] font-bold text-teal/70 group-hover:text-teal transition-colors leading-none"
              : "text-sm leading-none"
          }
        >
          {icon}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Profile + orbit rings ────────────────────────────────────────────────────

function ProfileOrbit() {
  const innerProgress = useMotionValue(0);
  const outerProgress = useMotionValue(0);

  useEffect(() => {
    const c1 = animate(innerProgress, 1, {
      duration: 28,
      repeat: Infinity,
      ease: "linear",
    });
    const c2 = animate(outerProgress, 1, {
      duration: 44,
      repeat: Infinity,
      ease: "linear",
    });
    return () => {
      c1.stop();
      c2.stop();
    };
  }, [innerProgress, outerProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative flex-shrink-0 w-[340px] h-[340px]"
    >
      {/* Dashed orbit ring visuals (SVG – always perfect circles) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 340 340"
        fill="none"
      >
        <circle
          cx="170" cy="170" r="108"
          stroke="rgba(15,244,198,0.18)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />
        <circle
          cx="170" cy="170" r="161"
          stroke="rgba(15,244,198,0.09)"
          strokeWidth="1"
          strokeDasharray="3 10"
        />
        <circle
          cx="170" cy="170" r="78"
          stroke="rgba(15,244,198,0.07)"
          strokeWidth="1"
        />
      </svg>

      {/* Centre glow bloom */}
      <div className="absolute inset-[35%] rounded-full bg-teal/10 blur-2xl pointer-events-none" />

      {/* Profile image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Rotating conic border */}
          <motion.div
            className="absolute inset-[-2px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #0ff4c6, transparent 40%, #0ff4c6 60%, transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative w-[152px] h-[152px] rounded-full overflow-hidden bg-background p-[2px]">
            <Image
              src="/profile.jpg"
              alt="Emmanuel Francis"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Orbit icon layers */}
      <div className="absolute inset-0">
        {innerTech.map((item, i) => (
          <OrbitItem
            key={item.label}
            progress={innerProgress}
            index={i}
            total={innerTech.length}
            radius={108}
            direction={1}
            label={item.label}
            icon={item.icon}
            isText={item.text}
          />
        ))}
        {outerTech.map((item, i) => (
          <OrbitItem
            key={item.label}
            progress={outerProgress}
            index={i}
            total={outerTech.length}
            radius={161}
            direction={-1}
            label={item.label}
            icon={item.icon}
            isText={item.text}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-visible"
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-[20%] w-[480px] h-[480px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[15%] w-64 h-64 rounded-full bg-orange/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">

          {/* ── Left : text ── */}
          <div className="flex-1 text-center lg:text-left max-w-lg order-2 lg:order-1">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-xs font-medium tracking-wide">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-5"
            >
              Emmanuel
              <br />
              <span className="gradient-text">Francis</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-7 leading-relaxed"
            >
              Backend-first engineer who ships full-stack products. I build{" "}
              <span className="text-foreground font-medium">scalable systems</span>{" "}
              with Java & Spring Boot and deliver{" "}
              <span className="text-foreground font-medium">production SaaS</span>{" "}
              end-to-end.
            </motion.p>

            {/* DirtyBucket callout chip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-teal/20 bg-teal/5 hover:border-teal/35 hover:bg-teal/8 transition-all duration-300 mb-8 cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0 text-sm">
                🎧
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium leading-none mb-0.5">
                  Latest Product
                </div>
                <div className="text-sm font-semibold text-teal leading-tight">
                  DirtyBucket — Beat Marketplace SaaS
                </div>
              </div>
              <Link href="#dirtybucket" className="ml-auto p-1 -mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground group-hover:text-teal transition-colors"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
            >
              <Link
                href="#dirtybucket"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-teal text-background hover:bg-teal-dark transition-all duration-200 glow-teal-sm hover:glow-teal"
              >
                View DirtyBucket
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-medium text-sm border border-border text-muted-foreground hover:border-teal/40 hover:text-teal hover:bg-teal/5 transition-all duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn ↗
              </Link>
            </motion.div>
          </div>

          {/* ── Right : orbit ── */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <ProfileOrbit />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.8 }}
          className="hidden lg:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <span className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-3.5 h-3.5 text-muted-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
