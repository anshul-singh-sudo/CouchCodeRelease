"use client";

import { Easing } from "@/app/page";
import { motion } from "framer-motion";
import Orbs from "./orbs";
import Stars from "./stars";

/* ─────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────── */
const SYSTEMS = [
    { name: "NES", bg: "#7c0a02", border: "#ef4444" },
    { name: "SNES", bg: "#3b0764", border: "#a855f7" },
    { name: "GBA", bg: "#1e1b4b", border: "#6366f1" },
    { name: "GBC", bg: "#064e3b", border: "#10b981" },
    { name: "GB", bg: "#1e3a5f", border: "#3b82f6" },
    { name: "N64", bg: "#713f12", border: "#f59e0b" },
    { name: "PSP", bg: "#0c1a35", border: "#0ea5e9" },
    { name: "PS1", bg: "#1f2937", border: "#9ca3af" },
];





export default function Hero() {

    const words = ["Play", "Any", "Retro", "Game.", "From", "Any", "Device."];

    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-20 overflow-hidden">
            {/* Stars */}
            <Stars />

            {/* Orbs */}
            <Orbs
                items={[
                    { color: "rgba(107,17,160,0.35)", top: "15%", left: "5%", size: "60vw" },
                    { color: "rgba(0,245,255,0.10)", top: "5%", right: "0%", size: "40vw", delay: "2s" },
                    { color: "rgba(255,45,120,0.08)", top: "60%", left: "60%", size: "35vw", delay: "4s" },
                ]}
            />

            {/* Pixel grid overlay */}
            <div className="absolute inset-0 pixel-grid opacity-60" />

            {/* CRT moving scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="crt-line" />
            </div>

            {/* Coming soon pill */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: Easing }}
                className="mb-8"
            >
                <span className="badge-neon text-[11px]">✦ Coming Soon</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="text-[38px] md:text-[68px] lg:text-[80px] font-extrabold leading-[1.05] tracking-[-0.03em] max-w-[1000px] mb-6 font-orbitron">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: Easing }}
                        className={`inline-block mr-[0.2em] ${word === "Any"
                            ? "text-gradient"
                            : word === "Game."
                                ? "text-gradient-fire"
                                : "text-[#e8ccff]"
                            }`}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Sub */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-[17px] md:text-[19px] text-[#e8ccff]/60 max-w-[580px] leading-relaxed mb-10"
            >
                No downloads. No consoles. Just open a tab, share a code, and play your
                favourite retro classics with anyone — anywhere.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 mb-14"
            >
                <button
                    id="hero-early-access-btn"
                    onClick={() =>
                        document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="relative group bg-gradient-primary h-[54px] px-9 rounded-full font-bold text-white tracking-wide glow-primary hover:brightness-110 hover:-translate-y-1 active:scale-95 transition-all duration-200 overflow-hidden"
                >
                    <span className="relative z-10">Get Early Access →</span>
                    <span className="absolute inset-0 animate-shimmer" />
                </button>
                <button
                    id="hero-how-it-works-btn"
                    onClick={() =>
                        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="h-[54px] px-9 rounded-full font-bold border-neon-cyan text-[#00f5ff] hover:bg-[#00f5ff]/8 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                >
                    See How It Works
                </button>
            </motion.div>

            {/* Console chips */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#b44cf5]/60">
                    Supporting
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-xl">
                    {SYSTEMS.map((sys, i) => (
                        <motion.span
                            key={sys.name}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4 + i * 0.05, duration: 0.3 }}
                            className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase font-orbitron transition-all hover:scale-105 cursor-default"
                            style={{
                                backgroundColor: sys.bg,
                                border: `1px solid ${sys.border}40`,
                                color: sys.border,
                                boxShadow: `0 0 8px ${sys.border}30`,
                            }}
                        >
                            {sys.name}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b44cf5" strokeWidth="2.5" strokeLinecap="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </motion.div>
        </section>
    );
};