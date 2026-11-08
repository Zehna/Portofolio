"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  AlertTriangle,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Layers,
  Gauge,
} from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";
import { GitHubIcon } from "./Icons";

interface CaseStudyDialogProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyDialog({ project, onClose }: CaseStudyDialogProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal / Drawer Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl"
          >
            {/* Top Sticky Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/60 px-6 py-5 backdrop-blur-md">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    /{project.slug}
                  </span>
                </div>
                <h2
                  id="case-study-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup modal studi kasus"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 py-6 space-y-6">
              {/* Overview Description */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Key Performance Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-zinc-50 dark:bg-zinc-900/50 p-4"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      <Gauge className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{metric.label}</span>
                    </div>
                    <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-zinc-950 dark:text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 1. Ringkasan Problem */}
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5">
                <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="h-4 w-4" />
                  <span>01. Ringkasan Problem</span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* 2. Arsitektur Sistem */}
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-5">
                <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-semibold text-cyan-600 dark:text-cyan-400">
                  <Layers className="h-4 w-4" />
                  <span>02. Arsitektur Sistem</span>
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.caseStudy.architecture.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Solusi Teknis & Hasil */}
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
                <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
                  <Cpu className="h-4 w-4" />
                  <span>03. Solusi Teknis &amp; Dampak Produksi</span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.caseStudy.solution}
                </p>

                <div className="mt-4 pt-4 border-t border-emerald-500/20 space-y-2">
                  {project.caseStudy.keyOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Code Snippet */}
              {project.caseStudy.codeSnippet && (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Code2 className="h-3.5 w-3.5" />
                      {project.caseStudy.codeSnippet.title}
                    </span>
                    <span className="uppercase text-[10px] tracking-wider">
                      {project.caseStudy.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
                    <code>{project.caseStudy.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                  Komponen &amp; Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/60 px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Tutup Ringkasan
              </button>

              <div className="flex items-center gap-2.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                >
                  <span>Buka Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
