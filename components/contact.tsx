"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/data/projects";

const links = [
  {
    name: "GitHub",
    handle: "@progFilthi",
    href: socialLinks.github,
    description: "Source code, open source contributions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "hover:border-white/30 hover:text-white",
  },
  {
    name: "LinkedIn",
    handle: "in/emma09",
    href: socialLinks.linkedin,
    description: "Professional network and experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: "hover:border-blue-400/40 hover:text-blue-400",
  },
  {
    name: "Email",
    handle: "emmanuel.f0927@gmail.com",
    href: socialLinks.email,
    description: "Direct line — I respond within 24hrs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "hover:border-teal/40 hover:text-teal",
  },
  {
    name: "YouTube",
    handle: "@ProgrammerFilthi",
    href: socialLinks.youtube,
    description: "Dev content, coding livestreams, SaaS journey",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    color: "hover:border-red-400/40 hover:text-red-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-teal/5 blur-3xl rounded-full pointer-events-none" />

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
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Open to backend and full-stack roles. If you need someone who can architect systems
            <em> and</em> ship complete products, let&apos;s talk.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-block"
          >
            <Link
              href={socialLinks.email}
              className="px-8 py-3.5 rounded-xl font-medium text-sm bg-teal text-background hover:bg-teal-dark transition-all duration-200 glow-teal-sm hover:glow-teal"
            >
              Say Hello →
            </Link>
          </motion.div>
        </motion.div>

        {/* Link cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <Link
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className={`card-lift flex flex-col gap-3 p-5 rounded-2xl border border-border/50 bg-card text-muted-foreground transition-all duration-300 group ${link.color}`}
              >
                <div className="w-10 h-10 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-center group-hover:border-current/30 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-current transition-colors">
                    {link.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{link.handle}</div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
