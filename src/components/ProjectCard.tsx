"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Image as ImageIcon,
  FileText,
  Gauge,
  Terminal,
} from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";
import { GitHubIcon } from "./Icons";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectCard({
  project,
  index,
  onSelectProject,
}: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const spanClasses =
    project.bentoSpan === "large"
      ? "md:col-span-2"
      : project.bentoSpan === "wide"
      ? "md:col-span-2"
      : "md:col-span-1";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectProject(project)}
      role="button"
      tabIndex={0}
      aria-label={`Buka studi kasus proyek ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-950/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 cursor-pointer text-left ${spanClasses}`}
    >
      {/* Magic UI / Aceternity Dynamic Cursor Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.11), transparent 45%)`
            : undefined,
        }}
      />

      <div>
        {/* Top Header: Domain Badge + Preview Type Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {project.badge}
          </span>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/90 px-2.5 py-1 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
              {project.previewType === "video" ? (
                <>
                  <Play className="h-3 w-3 text-emerald-500 fill-emerald-500" />
                  <span>STREAM PREVIEW</span>
                </>
              ) : (
                <>
                  <ImageIcon className="h-3 w-3 text-cyan-500" />
                  <span>SYSTEM SNAPSHOT</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Media Preview Container */}
        <div
          className={`relative mb-6 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-gradient-to-br ${project.previewVisual.gradient} p-4 sm:p-5`}
        >
          {/* Animated grid pattern inside preview */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Preview Window Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] text-zinc-400 truncate max-w-[180px] sm:max-w-none">
                {project.slug}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.previewVisual.resolutionLabel && (
                <span className="hidden sm:inline-block rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-200">
                  {project.previewVisual.resolutionLabel}
                </span>
              )}
              {project.previewVisual.fpsLabel && (
                <span className="rounded bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] text-emerald-300 font-semibold">
                  {project.previewVisual.fpsLabel}
                </span>
              )}
            </div>
          </div>

          {/* Interactive Telemetry / Console Stream inside Media Container */}
          <div className="relative z-10 space-y-1.5 font-mono text-xs text-zinc-200/90 bg-zinc-950/75 rounded-xl p-3.5 border border-white/10 backdrop-blur-md">
            {project.previewVisual.terminalLines?.map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-2 leading-relaxed overflow-x-auto"
              >
                <Terminal className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400" />
                <code className="text-[11px] sm:text-xs text-zinc-200">
                  {line}
                </code>
              </div>
            ))}
          </div>

          {/* Metrics Overlay Bar */}
          <div className="relative z-10 mt-3.5 grid grid-cols-3 gap-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl bg-zinc-950/70 border border-white/10 px-3 py-2 backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  <Gauge className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{metric.label}</span>
                </div>
                <div className="mt-0.5 text-xs sm:text-sm font-bold font-mono text-white truncate">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Bottom Section: Tech Stack Badges & Action Links */}
      <div className="mt-6 pt-5 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/90 px-2.5 py-1 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
            <FileText className="h-3.5 w-3.5" />
            <span>Bedah Arsitektur &amp; Studi Kasus</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>

          <div
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kode sumber GitHub untuk ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>Repo</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demo langsung untuk ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-zinc-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
