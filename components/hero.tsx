"use client";

import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/projects";

// ─── Tech icon sets (exact list from GitHub skillicons) ───────────────────────
const innerIcons = [
  { id: "java",     label: "Java" },
  { id: "spring",   label: "Spring Boot" },
  { id: "docker",   label: "Docker" },
  { id: "aws",      label: "AWS" },
  { id: "postgres", label: "PostgreSQL" },
  { id: "nextjs",   label: "Next.js" },
  { id: "ts",       label: "TypeScript" },
  { id: "react",    label: "React" },
  { id: "prisma",   label: "Prisma" },
];

const outerIcons = [
  { id: "html",      label: "HTML" },
  { id: "css",       label: "CSS" },
  { id: "tailwind",  label: "Tailwind" },
  { id: "js",        label: "JavaScript" },
  { id: "nodejs",    label: "Node.js" },
  { id: "bun",       label: "Bun" },
  { id: "expressjs", label: "Express" },
  { id: "k8s",       label: "Kubernetes" },
  { id: "mongodb",   label: "MongoDB" },
  { id: "vscode",    label: "VS Code" },
];

// ─── Single icon on an orbit ring ────────────────────────────────────────────
// How it works:
//   1. The ring container (.orbit-ring-cw/ccw) rotates around its own centre.
//   2. Each icon's *positioner* div is offset from centre by the orbit radius
//      using `rotate(startAngle) translateX(radius)` with transformOrigin:'0 0'.
//      This spreads icons evenly around the ring.
//   3. The *icon* element (.orbit-icon-cw/ccw) counter-rotates at the same speed,
//      keeping the icon upright while it travels around the ring.
function OrbitIcon({
  icon,
  index,
  total,
  radius,
  direction,
}: {
  icon: { id: string; label: string };
  index: number;
  total: number;
  radius: number;
  direction: "cw" | "ccw";
}) {
  const startAngle = (360 / total) * index;

  return (
    // Positioner: placed at centre, then rotated + translated to position on ring
    <div
      title={icon.label}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        transform: `rotate(${startAngle}deg) translateX(${radius}px)`,
        transformOrigin: "0 0",
      }}
    >
      {/* Counter-rotating wrapper keeps icon upright */}
      <div
        className={direction === "cw" ? "orbit-icon-cw" : "orbit-icon-ccw"}
        style={{ width: 22, height: 22 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://skillicons.dev/icons?i=${icon.id}`}
          alt={icon.label}
          width={22}
          height={22}
          style={{ display: "block", opacity: 0.7 }}
          className="hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}

// ─── Circular photo + dual orbit rings ───────────────────────────────────────
function ProfileOrbit() {
  const photoSize = 148;
  const innerR    = 112; // inner orbit radius (px from centre)
  const outerR    = 170; // outer orbit radius
  const pad       = 44;  // extra space around outer ring
  const size      = (outerR + pad) * 2;
  const centre    = size / 2;

  return (
    <div
      className="relative flex-shrink-0 fade-up delay-5 orbit-root"
    >
      {/* Static dashed ring guides (SVG, no animation) */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle
          cx={centre} cy={centre} r={innerR}
          stroke="currentColor" strokeOpacity="0.07"
          strokeWidth="1" strokeDasharray="4 9"
          suppressHydrationWarning
        />
        <circle
          cx={centre} cy={centre} r={outerR}
          stroke="currentColor" strokeOpacity="0.04"
          strokeWidth="1" strokeDasharray="3 13"
          suppressHydrationWarning
        />
      </svg>

      {/* Inner orbit ring — rotates clockwise, icons counter-rotate to stay upright */}
      <div
        className="orbit-ring-cw absolute inset-0"
        style={{ transformOrigin: `${centre}px ${centre}px` }}
      >
        {innerIcons.map((icon, i) => (
          <OrbitIcon
            key={icon.id}
            icon={icon}
            index={i}
            total={innerIcons.length}
            radius={innerR}
            direction="cw"
          />
        ))}
      </div>

      {/* Outer orbit ring — rotates counter-clockwise */}
      <div
        className="orbit-ring-ccw absolute inset-0"
        style={{ transformOrigin: `${centre}px ${centre}px` }}
      >
        {outerIcons.map((icon, i) => (
          <OrbitIcon
            key={icon.id}
            icon={icon}
            index={i}
            total={outerIcons.length}
            radius={outerR}
            direction="ccw"
          />
        ))}
      </div>

      {/* Circular profile photo — fixed at centre */}
      <div
        className="absolute"
        style={{
          top:    "50%",
          left:   "50%",
          width:  photoSize,
          height: photoSize,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border/60">
          <Image
            src="/profile.jpg"
            alt="Emmanuel Francis"
            fill
            className="object-cover object-top"
            priority
            suppressHydrationWarning
          />
        </div>
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-5xl mx-auto"
    >
      {/* Availability badge */}
      <div className="flex items-center gap-2 mb-14 fade-up">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
        <span className="text-xs text-muted-foreground tracking-wide">
          Available for opportunities
        </span>
      </div>

      {/* Two-column: orbit top on mobile, copy left + orbit right on desktop */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14">
        {/* Copy — below orbit on mobile, left side on desktop */}
        <div className="flex-1 min-w-0 order-2 lg:order-1">
          <h1 className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.92] tracking-tighter mb-8 fade-up delay-1">
            Emmanuel
            <br />
            Francis
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed mb-10 fade-up delay-2">
            Backend-first engineer who ships full-stack products. I build
            scalable systems with Java &amp; Spring Boot and deliver production
            SaaS end-to-end.
          </p>

          {/* Project pills → live links */}
          <div className="flex flex-wrap gap-3 mb-10 fade-up delay-3">
            <Link
              href="https://dirtybucket.store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              DirtyBucket
            </Link>
            <Link
              href="https://app.filthilink.store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              FilthiLink
            </Link>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6 fade-up delay-4">
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              YouTube
            </Link>
            <Link
              href={socialLinks.email}
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>

        {/* Orbit — on top on mobile, right side on desktop */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <ProfileOrbit />
        </div>
      </div>
    </section>
  );
}
