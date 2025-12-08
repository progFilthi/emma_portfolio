"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

// useSyncExternalStore pattern for hydration-safe mounting detection
const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const mounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-muted/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors duration-200"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sun icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute text-foreground"
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </motion.svg>

      {/* Moon icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute text-foreground"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </motion.svg>
    </motion.button>
  );
}
