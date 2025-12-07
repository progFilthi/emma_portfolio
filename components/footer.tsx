"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Emmanuel Francis. Built with Next.js.
        </p>
      </div>
    </motion.footer>
  );
}
