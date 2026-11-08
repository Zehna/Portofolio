"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Code2, Moon, Sun, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { GitHubIcon } from "./Icons";

const NAV_ITEMS = [
  { label: "Ikhtisar", href: "#overview" },
  { label: "Proyek", href: "#projects" },
  { label: "Arsenal Teknis", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["overview", "projects", "skills", "contact"];
      const currentPos = window.scrollY + 240;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Navigasi Utama"
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-3 rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-zinc-200/80 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-950/80 shadow-lg shadow-black/5 dark:shadow-emerald-500/5 backdrop-blur-xl"
            : "border-zinc-200/60 dark:border-zinc-800/60 bg-white/65 dark:bg-zinc-900/60 backdrop-blur-md"
        }`}
      >
        {/* Brand Identity */}
        <a
          href="#overview"
          onClick={(e) => handleSmoothScroll(e, "#overview")}
          className="group flex items-center gap-2 rounded-full pr-2 pl-1 py-1 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-zinc-950 shadow-sm shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-105">
            <Code2 className="h-4 w-4 stroke-[2.2]" />
          </span>
          <span className="hidden md:inline-block font-mono text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {PROFILE.handle}
          </span>
        </a>

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

        {/* Navigation Links */}
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-zinc-200/80 dark:bg-zinc-800/90 border border-zinc-300/60 dark:border-zinc-700/70"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Actions: GitHub + Theme Toggle */}
        <div className="flex items-center gap-1.5">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/40 hover:text-zinc-950 dark:hover:text-white transition-all"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Ubah tema warna"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <Sun className="hidden dark:block h-4 w-4 text-amber-400 transition-transform hover:rotate-12" />
            <Moon className="block dark:hidden h-4 w-4 text-zinc-700 transition-transform hover:-rotate-12" />
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
