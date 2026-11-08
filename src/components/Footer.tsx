"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  MapPin,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const rawEmail = PROFILE.socials.email.replace("mailto:", "");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-zinc-200/80 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/90 pt-20 pb-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Direct Contact Callout Box */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 sm:p-10 md:p-12 shadow-xl shadow-black/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-transparent blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>KOLABORASI &amp; KONSULTASI TEKNIS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Siap membangun sistem atau produk interaktif berikutnya?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Terbuka untuk proyek full-stack engineering, perancangan
                pipeline otomasi media, maupun pengembangan simulasi &amp; web
                interaktif berkinerja tinggi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
              <a
                href={PROFILE.socials.email}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Kirim Email Langsung</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-900 px-5 py-3.5 text-xs sm:text-sm font-mono font-medium text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Tersalin: {rawEmail}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-500" />
                    <span>{rawEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist Bar: Copyright, Build Status, Socials */}
        <div className="mt-12 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              © 2026 {PROFILE.name}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-emerald-500" />
              {PROFILE.location}
            </span>
          </div>

          {/* Build Status Telemetry */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 font-mono text-[11px]">
            <Terminal className="h-3 w-3 text-emerald-500" />
            <span>build: passing</span>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              Next.js App Router • Strict TS
            </span>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE.socials.email}
              className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
