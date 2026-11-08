"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PROFILE } from "@/data/portfolio";
import { GitHubIcon } from "./Icons";

export function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const triggerAvailabilityPulse = () => {
    try {
      confetti({
        particleCount: 36,
        spread: 60,
        origin: { y: 0.25 },
        colors: ["#10b981", "#06b6d4", "#8b5cf6"],
      });
    } catch {
      // Fallback if canvas-confetti is blocked in reduced motion environments
    }
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-32"
    >
      {/* Aceternity / Magic UI Ambient Spotlight & Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[960px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,128,0.08)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_30%,#000_65%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left">
          {/* Top Status Pill: Availability + Location */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap items-center gap-2.5 mb-7"
          >
            <button
              type="button"
              onClick={triggerAvailabilityPulse}
              title="Klik untuk merayakan ketersediaan kolaborasi!"
              className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500/60 hover:bg-emerald-500/15 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{PROFILE.availability.label}</span>
              <span className="hidden sm:inline-block text-emerald-600/70 dark:text-emerald-400/70 font-mono">
                • Respon {PROFILE.availability.responseTime}
              </span>
            </button>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/90 bg-white/60 dark:bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-cyan-500" />
              <span>{PROFILE.location}</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="font-mono text-[11px]">{PROFILE.timezone}</span>
            </div>
          </motion.div>

          {/* Precision Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-4xl"
          >
            <p className="mb-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span>&gt;_ ZEHNA — FULL-STACK ENGINEER &amp; CREATIVE TECHNOLOGIST</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08]">
              Building{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                High-Performance Systems
              </span>
              , Interactive Web &amp;{" "}
              <span className="underline decoration-emerald-500/40 decoration-wavy decoration-2 underline-offset-8">
                Real-Time Simulations
              </span>
              .
            </h1>
          </motion.div>

          {/* Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          {/* Dynamic Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              Fokus Arsitektur:
            </span>
            {PROFILE.heroBadges.map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.25 + index * 0.06 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 px-3 py-1.5 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 shadow-2xs transition-colors hover:border-emerald-500/50"
              >
                {index % 2 === 0 ? (
                  <Cpu className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Layers className="h-3.5 w-3.5 text-cyan-500" />
                )}
                {badge}
              </motion.span>
            ))}
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-zinc-950 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.02] hover:shadow-emerald-500/25 active:scale-[0.99]"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 px-6 py-3.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
            >
              <GitHubIcon className="h-4 w-4 text-zinc-700 dark:text-zinc-300 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Engineering Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-14 grid w-full grid-cols-1 gap-3.5 sm:grid-cols-3"
          >
            {PROFILE.stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-5 backdrop-blur-md transition-all hover:border-emerald-500/40"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70 group-hover:bg-emerald-400 transition-colors" />
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-mono">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {stat.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
