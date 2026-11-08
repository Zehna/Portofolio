"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Sparkles,
  Gamepad2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { SKILLS, type SkillCategory } from "@/data/portfolio";

function CategoryIcon({ name }: { name: SkillCategory["iconName"] }) {
  switch (name) {
    case "Terminal":
      return <Terminal className="h-5 w-5 text-emerald-500" />;
    case "Sparkles":
      return <Sparkles className="h-5 w-5 text-cyan-500" />;
    case "Gamepad2":
      return <Gamepad2 className="h-5 w-5 text-violet-500" />;
  }
}

export function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 border-t border-zinc-200/60 dark:border-zinc-900"
    >
      {/* Subtle Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[700px] rounded-full bg-gradient-to-tr from-cyan-500/8 via-emerald-500/8 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>KAPABILITAS LINTAS DOMAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Arsenal Teknis{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Terstruktur per Domain
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bukan sekadar daftar kata kunci—setiap teknologi dipilih untuk
            menyelesaikan masalah spesifik mulai dari pemrosesan media
            ber-throughput tinggi, UI interaktif 60 FPS, hingga runtime simulasi
            3D.
          </p>
        </div>

        {/* 3-Column Domain Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILLS.map((domain, domainIdx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: domainIdx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-950/80 p-6 sm:p-7 backdrop-blur-xl"
            >
              {/* Top Gradient Accent */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b ${domain.accentGradient} opacity-80`}
              />

              <div className="relative z-10">
                {/* Domain Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
                    <CategoryIcon name={domain.iconName} />
                  </div>
                  <span className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 px-3 py-1 text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400">
                    {domain.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {domain.category}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {domain.subtitle}
                </p>

                {/* Structured Skill Items */}
                <div className="mt-6 space-y-3">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 p-3.5 transition-all hover:border-emerald-500/40 dark:hover:border-emerald-500/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="rounded-md bg-zinc-200/70 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Footer Summary */}
              <div className="relative z-10 mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Total Stack Aktif</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {domain.skills.length} Teknologi Inti
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
