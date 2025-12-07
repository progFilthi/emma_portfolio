"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/projects";

const categories = [
  { key: "backend", label: "Backend", description: "Primary focus" },
  { key: "fullstack", label: "Full Stack", description: "Extended capabilities" },
  { key: "cloud", label: "Cloud & DevOps", description: "Infrastructure" },
  { key: "tools", label: "Tools", description: "Daily drivers" },
] as const;

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Backend-first engineer with strong full-stack capabilities. 
            I build scalable APIs, architect microservices, and ship production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold">{category.label}</h3>
                <span className="text-xs text-muted-foreground">
                  {category.description}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category.key)
                  .map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={category.key === "backend" ? "default" : "secondary"}
                      className="text-sm py-1 px-3"
                    >
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-lg bg-background border border-border">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              I focus on building{" "}
              <span className="text-foreground font-medium">robust backend systems</span>{" "}
              while maintaining the ability to deliver{" "}
              <span className="text-foreground font-medium">complete full-stack solutions</span>{" "}
              when needed. Clean architecture, maintainable code, and scalable design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
