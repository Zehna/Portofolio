"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyDialog } from "./CaseStudyDialog";

const CATEGORIES = [
  "Semua Domain",
  "Systems & Automation",
  "Frontend & Interactive",
  "Game & Simulation",
];

export function BentoGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Domain");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "Semua Domain"
      ? PROJECTS
      : PROJECTS.filter((p) => p.badge === selectedCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>ARSITEKTUR &amp; PRODUK PILIHAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Karya Unggulan &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                Studi Kasus Teknis
              </span>
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Klik pada kartu proyek mana pun untuk membaca rincian problem,
              diagram alur arsitektur sistem, serta metrik hasil produksi.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter proyek berdasarkan kategori"
            className="flex flex-wrap items-center gap-1.5"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-white dark:text-zinc-950"
                      : "border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bento-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-zinc-900 dark:bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onSelectProject={(item) => setActiveProject(item)}
            />
          ))}
        </div>

        {/* Interactive Hint Footer */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/50 px-4 py-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            <span>
              Tip: Tekan salah satu kartu di atas untuk membuka modal{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-200">
                Case Study &amp; System Architecture
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
