"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 max-w-5xl mx-auto">
      {/* Section label */}
      <div className="flex items-center justify-between mb-14">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Selected Work
        </span>
        <span className="text-xs text-muted-foreground">
          {projects.length} projects
        </span>
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-card group border border-border/60 rounded-2xl p-8 md:p-10 cursor-default">
              {/* Top row: title + tagline + action buttons */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </div>

                {/* Uniform action buttons — no arrows */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live
                    </Link>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="border-t border-border/50 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
