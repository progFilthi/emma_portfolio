"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { socialLinks } from "@/data/projects";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-[60] max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-sm font-medium tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Emmanuel Francis
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#about"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link href="#contact" className="btn-secondary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden relative z-[60] flex flex-col justify-center items-center w-11 h-11 -mr-2 gap-[5px] rounded-lg active:bg-muted/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 py-16">
          <li>
            <Link
              href="#about"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="btn-primary mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
