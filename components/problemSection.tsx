"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Easing } from "@/app/page";
import SectionLabel from "./sectionLabel";

/* ─────────────────────────────────────────────────────────
   PROBLEM SECTION — split layout with inline SVG visual
───────────────────────────────────────────────────────── */
export default function ProblemSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const lines = [
        {
            text: "Your favourite childhood games are stuck on hardware you no longer own.",
            accent: false,
        },
        {
            text: "Playing with friends means everyone needs the same console, cables, and cartridges.",
            accent: false,
        },
        {
            text: "That's not how modern gaming should work.",
            accent: true,
        },
    ];

    return (
        <section
            ref={ref}
            className="relativep py-20 px-5 md:px-16 max-w-[1100px] mx-auto"
        >

            {/* ── Two-column layout ── */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left — text lines */}
                <div className="space-y-10">
                    <SectionLabel>The Problem</SectionLabel>

                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.22, duration: 0.55, ease: Easing }}
                            className="flex items-start gap-5"
                        >
                            <span
                                className="mt-2 shrink-0 w-2 h-2 rounded-full"
                                style={{
                                    background: line.accent ? "#b44cf5" : "rgba(232,204,255,0.3)",
                                    boxShadow: line.accent ? "0 0 10px #b44cf5" : undefined,
                                }}
                            />
                            <p
                                className={`text-sm md:text-xl font-bold leading-tight font-orbitron ${line.accent ? "text-gradient" : "text-[#e8ccff]/80"
                                    }`}
                            >
                                {line.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right — inline SVG visual */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.65, ease: Easing }}
                    className="relative flex items-center justify-center    "
                    aria-hidden="true"
                >
                    <ProblemVisual />
                </motion.div>
            </div>

            <div className="mt-20 neon-divider" />
        </section>
    );
}

/* ── SVG graphic ─────────────────────────────────────── */
function ProblemVisual() {
    return (
        <svg
            viewBox="0 0 380 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[420px] -mt-24"
        >
            <defs>
                <filter id="glow-purple">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="glow-cyan">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* ── 1. Locked console ── */}
            <rect x="60" y="180" width="260" height="4" rx="2" fill="rgba(180,76,245,0.15)" />

            {/* Dust */}
            <circle cx="90" cy="150" r="1.5" fill="rgba(232,204,255,0.2)" className="animate-pulse" />
            <circle cx="300" cy="140" r="1" fill="rgba(232,204,255,0.15)" className="animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Console body */}
            <g className="animate-float">
                <rect x="110" y="130" width="160" height="48" rx="8"
                    fill="rgba(20,10,40,0.9)" stroke="rgba(180,76,245,0.3)" strokeWidth="1.5" />
                <rect x="130" y="140" width="4" height="28" rx="2" fill="rgba(180,76,245,0.2)" />
                <rect x="140" y="140" width="4" height="28" rx="2" fill="rgba(180,76,245,0.2)" />
                <rect x="150" y="140" width="4" height="28" rx="2" fill="rgba(180,76,245,0.2)" />
                <rect x="218" y="148" width="12" height="8" rx="2"
                    fill="rgba(180,76,245,0.1)" stroke="rgba(180,76,245,0.25)" strokeWidth="1" />
                <rect x="234" y="148" width="12" height="8" rx="2"
                    fill="rgba(180,76,245,0.1)" stroke="rgba(180,76,245,0.25)" strokeWidth="1" />
                <circle cx="176" cy="154" r="3" fill="rgba(100,60,140,0.4)" stroke="rgba(180,76,245,0.2)" strokeWidth="1" />
                <rect x="162" y="136" width="50" height="10" rx="2"
                    fill="rgba(30,15,60,0.8)" stroke="rgba(180,76,245,0.2)" strokeWidth="1" />
            </g>

            {/* Lock icon */}
            <g transform="translate(178, 98)" filter="url(#glow-purple)">
                <rect x="-14" y="-14" width="28" height="28" rx="6"
                    fill="rgba(180,76,245,0.12)" stroke="rgba(180,76,245,0.4)" strokeWidth="1.5" />
                <rect x="-6" y="-2" width="12" height="9" rx="2"
                    fill="none" stroke="rgba(180,76,245,0.8)" strokeWidth="1.5" />
                <path d="M -4 -2 L -4 -7 Q 0 -11 4 -7 L 4 -2"
                    stroke="rgba(180,76,245,0.8)" strokeWidth="1.5" fill="none" />
                <circle cx="0" cy="3" r="1.5" fill="rgba(180,76,245,0.8)" />
                <rect x="-1" y="3" width="2" height="3" fill="rgba(180,76,245,0.8)" />
            </g>

            <text x="190" y="200" textAnchor="middle"
                fontFamily="var(--font-orbitron, monospace)" fontSize="9"
                fill="rgba(180,76,245,0.45)" letterSpacing="3">
                OFFLINE · LOCKED
            </text>

            {/* ── Divider 1 ── */}
            <line x1="40" y1="215" x2="340" y2="215"
                stroke="rgba(180,76,245,0.12)" strokeWidth="1" strokeDasharray="4 6" />

            {/* ── 2. Disconnected friends ── */}
            {[70, 190, 310].map((cx) => (
                <g key={cx} transform={`translate(${cx}, 260)`}>
                    <rect x="-22" y="-44" width="44" height="80" rx="10"
                        fill="rgba(20,10,40,0.85)" stroke="rgba(255,45,120,0.3)" strokeWidth="1.5" />
                    <rect x="-14" y="-34" width="28" height="52" rx="5"
                        fill="rgba(10,5,25,0.9)" stroke="rgba(255,45,120,0.15)" strokeWidth="0.5" />
                    <line x1="-8" y1="-24" x2="8" y2="-6" stroke="rgba(255,45,120,0.5)" strokeWidth="1.5" />
                    <line x1="8" y1="-24" x2="-8" y2="-6" stroke="rgba(255,45,120,0.5)" strokeWidth="1.5" />
                    <rect x="-8" y="26" width="16" height="2" rx="1" fill="rgba(255,45,120,0.25)" />
                </g>
            ))}

            {/* Broken links */}
            {[{ x1: 92, x2: 162, cx: 127 }, { x1: 218, x2: 288, cx: 253 }].map(({ x1, x2, cx }) => (
                <g key={cx}>
                    <line x1={x1} y1="255" x2={x2} y2="255"
                        stroke="rgba(255,45,120,0.2)" strokeWidth="1" strokeDasharray="5 5" />
                    <circle cx={cx} cy="255" r="5"
                        fill="rgba(255,45,120,0.1)" stroke="rgba(255,45,120,0.4)" strokeWidth="1" />
                    <line x1={cx - 3} y1="252" x2={cx + 3} y2="258" stroke="rgba(255,45,120,0.7)" strokeWidth="1.5" />
                    <line x1={cx + 3} y1="252" x2={cx - 3} y2="258" stroke="rgba(255,45,120,0.7)" strokeWidth="1.5" />
                </g>
            ))}

            <text x="190" y="340" textAnchor="middle"
                fontFamily="var(--font-orbitron, monospace)" fontSize="9"
                fill="rgba(255,45,120,0.4)" letterSpacing="3">
                NO CONNECTION
            </text>

            {/* ── Divider 2 ── */}
            <line x1="40" y1="355" x2="340" y2="355"
                stroke="rgba(0,245,255,0.1)" strokeWidth="1" strokeDasharray="4 6" />

            {/* ── 3. Modern fix — browser bar ── */}
            <rect x="60" y="368" width="260" height="44" rx="10"
                fill="rgba(0,245,255,0.05)" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5"
                filter="url(#glow-cyan)" />
            <rect x="76" y="377" width="160" height="14" rx="4"
                fill="rgba(0,245,255,0.08)" stroke="rgba(0,245,255,0.15)" strokeWidth="0.75" />
            <text x="83" y="387.5" fontFamily="monospace" fontSize="7.5" fill="rgba(0,245,255,0.6)">
                couchcode
            </text>
            <rect x="246" y="375" width="58" height="18" rx="4"
                fill="rgba(0,245,255,0.15)" stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
            <text x="256" y="387" fontFamily="var(--font-orbitron, monospace)"
                fontSize="7" fill="rgba(0,245,255,0.9)" letterSpacing="1">
                ▶ PLAY
            </text>
        </svg>
    );
}