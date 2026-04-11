"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

const categories = [
  {
    key: "backend",
    label: "Backend",
    description: "Primary focus",
    icon: "⚙️",
    accent: "border-teal/30 bg-teal/5",
    badgeClass: "border-teal/25 bg-teal/10 text-teal",
  },
  {
    key: "fullstack",
    label: "Full Stack",
    description: "Extended capabilities",
    icon: "🖥️",
    accent: "border-blue-400/20 bg-blue-400/5",
    badgeClass: "border-blue-400/25 bg-blue-400/10 text-blue-400",
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    description: "Infrastructure",
    icon: "☁️",
    accent: "border-orange/20 bg-orange/5",
    badgeClass: "border-orange/25 bg-orange/10 text-orange",
  },
  {
    key: "tools",
    label: "Tools",
    description: "Daily drivers",
    icon: "🔧",
    accent: "border-border/50 bg-muted/20",
    badgeClass: "border-border bg-muted/50 text-muted-foreground",
  },
] as const;

export function Experience() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-muted/30 mb-4">
            <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Technical Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I Work With
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Backend-first with strong full-stack capabilities — I build scalable APIs, architect
            async pipelines, and ship production-ready SaaS products end-to-end.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`card-lift rounded-2xl border p-6 ${category.accent}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl">{category.icon}</span>
                <div>
                  <h3 className="text-sm font-bold">{category.label}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category.key)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`tech-pill ${category.badgeClass}`}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-2xl border border-border/50 bg-card">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              I focus on building{" "}
              <span className="text-foreground font-semibold">robust backend systems</span>{" "}
              — async pipelines, secure APIs, event-driven architectures — while maintaining the
              ability to deliver{" "}
              <span className="text-foreground font-semibold">complete full-stack products</span>{" "}
              when needed. DirtyBucket is proof.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
