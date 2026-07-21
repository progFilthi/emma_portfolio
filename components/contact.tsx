"use client";

import Link from "next/link";
import { socialLinks } from "@/data/projects";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="border border-border/60 rounded-2xl p-10 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Let&apos;s build
            <br />
            something.
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-10">
            Open to backend and full-stack roles. If you need someone who can
            architect systems <em>and</em> ship complete products, reach out.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {/* Primary CTA — no arrow */}
            <Link href={socialLinks.email} className="btn-primary">
              Say hello
            </Link>

            {/* Text links */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={socialLinks.email}
                className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </Link>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
