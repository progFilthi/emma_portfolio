"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/projects";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-6 block">
          About Me
        </span>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
              Emmanuel
              <br />
              Francis
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              I&apos;m a 25-year-old backend enthusiast currently in my final
              year of university, studying Computer Science with a focus on
              Software Engineering. I thrive on building robust, scalable
              systems and turning complex problems into clean, production-ready
              code.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me crafting instrumental
              beats or strategizing over a chessboard. I believe the best
              engineering, like the best music and chess, comes from pattern
              recognition, creativity, and relentless iteration.
            </p>
          </div>

          {/* Right — Details grid */}
          <div className="space-y-8">
            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Age", value: "25" },
                { label: "Education", value: "BSc Computer Science (SWE)" },
                { label: "Year", value: "Final Year 4" },
                { label: "Focus", value: "Backend Engineering" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {["Coding", "Instrumental Beats", "Chess", "Backend Systems", "Music Production"].map(
                  (interest) => (
                    <span key={interest} className="tag">
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-5 pt-2">
              <Link href={socialLinks.email} className="btn-primary">
                Get in touch
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
