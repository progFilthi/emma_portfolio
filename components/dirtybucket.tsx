"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  dirtyBucketFeatures,
  dirtyBucketTechStack,
  dirtyBucketLicenses,
  dirtyBucketSubscriptions,
} from "@/data/projects";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const techColorMap: Record<string, string> = {
  orange: "border-orange/30 bg-orange/10 text-orange",
  teal:   "border-teal/30 bg-teal/10 text-teal",
  green:  "border-green-500/30 bg-green-500/10 text-green-400",
  blue:   "border-blue-400/30 bg-blue-400/10 text-blue-400",
  red:    "border-red-400/30 bg-red-400/10 text-red-400",
  neutral:"border-border bg-muted/50 text-muted-foreground",
};

const subColorMap: Record<string, { ring: string; text: string }> = {
  neutral: { ring: "border-border/60",  text: "text-muted-foreground" },
  teal:    { ring: "border-teal/40",    text: "text-teal"             },
  orange:  { ring: "border-orange/40",  text: "text-orange"           },
};

// ─── Shared section header ─────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">
      {children}
    </p>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function DirtyBucketShowcase() {
  return (
    <section id="dirtybucket" className="relative py-32 px-6 overflow-hidden">
      {/* Top spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 bg-teal/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-5">
            <span className="text-sm">🎧</span>
            <span className="text-teal text-xs font-medium tracking-wide uppercase">
              Featured Project
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">DirtyBucket</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            A full-stack SaaS beat marketplace — producers sell, artists buy,
            and every beat is processed through an async media pipeline.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <Link
              href="https://dirtybucket.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal text-background font-semibold text-sm hover:bg-teal-dark transition-all duration-200 glow-teal-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-background/60 animate-pulse" />
              Visit Live App
            </Link>
            <Link
              href="https://github.com/progFilthi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 hover:border-teal/30 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source Code
            </Link>
          </div>
        </motion.div>

        {/* ── Dashboard screenshot – constrained & floating ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-28"
        >
          <div className="w-full max-w-2xl group">
            <div className="relative rounded-2xl overflow-hidden border border-teal/20 shadow-[0_8px_60px_rgba(15,244,198,0.1)]">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-card border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 h-5 rounded-md bg-muted/60 flex items-center px-3">
                  <span className="text-[10px] text-muted-foreground/70">
                    dirtybucket.store
                  </span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/9]">
                <Image
                  src="/dashboard-preview.png"
                  alt="DirtyBucket dashboard"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  priority
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── What I Built ──────────────────────────────────────────────────── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionLabel>Architecture & Features</SectionLabel>
            <h3 className="text-2xl font-bold">What I Built</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dirtyBucketFeatures.map((feature, i) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-lift rounded-2xl border border-border/50 bg-card p-6 hover:border-teal/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center text-base flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{feature.category}</h4>
                </div>
                <ul className="space-y-2.5">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-teal/60 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── License Tiers ─────────────────────────────────────────────────── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionLabel>Per-Beat Rights Management</SectionLabel>
            <h3 className="text-2xl font-bold">3-Tier Licensing System</h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-sm mx-auto">
              Every beat carries one of three license types, each with distinct
              rights and file deliverables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {dirtyBucketLicenses.map((license, i) => (
              <motion.div
                key={license.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-lift rounded-2xl border border-border/50 bg-card p-6 hover:border-teal/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-base">{license.name}</span>
                  <span className="text-[10px] text-muted-foreground px-2 py-0.5 rounded-full bg-muted border border-border/60 font-medium">
                    {license.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {license.description}
                </p>
                <ul className="space-y-1.5">
                  {license.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11" height="11"
                        viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-muted-foreground">{perk}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Subscription Plans ────────────────────────────────────────────── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionLabel>Producer Monetisation Model</SectionLabel>
            <h3 className="text-2xl font-bold">Subscription Tiers</h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-sm mx-auto">
              Higher tiers unlock unlimited uploads and reduce the platform
              commission taken at checkout.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {dirtyBucketSubscriptions.map((plan, i) => {
              const colors = subColorMap[plan.color];
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`card-lift relative rounded-2xl border p-6 bg-card transition-colors ${colors.ring} ${
                    plan.highlight ? "shadow-[0_0_28px_rgba(15,244,198,0.12)]" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-teal text-background tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`text-sm font-bold mb-2 ${colors.text}`}>
                    {plan.name}
                  </div>

                  {"monthly" in plan ? (
                    <div className="mb-5">
                      <span className="text-2xl font-black">{plan.monthly}</span>
                      <span className="text-muted-foreground text-xs ml-1">
                        or {plan.yearly}
                      </span>
                    </div>
                  ) : (
                    <div className="text-2xl font-black mb-5">{plan.price}</div>
                  )}

                  <div className="space-y-2 border-t border-border/50 pt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Commission</span>
                      <span className={`font-bold ${colors.text}`}>
                        {plan.commission}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Upload Limit</span>
                      <span className="font-medium">{plan.uploads}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Full Tech Stack ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionLabel>Every Technology Used</SectionLabel>
          <h3 className="text-2xl font-bold mb-2">Full Stack Breakdown</h3>
          <p className="text-muted-foreground text-sm mb-10 max-w-sm mx-auto">
            Backend, frontend, infrastructure, and third-party services — all in one platform.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {dirtyBucketTechStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.025 }}
                className={`tech-pill ${techColorMap[tech.color] ?? techColorMap.neutral}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
