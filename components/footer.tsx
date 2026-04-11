"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/data/projects";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/50 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-teal flex items-center justify-center text-background font-black text-[10px]">
            EF
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Emmanuel Francis. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://dirtybucket.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-teal hover:text-teal-light transition-colors font-medium"
          >
            DirtyBucket ↗
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
