"use client";

import SectionLabel from "./sectionLabel"
import Orbs from "./orbs"
import { motion } from "framer-motion";
import { Easing } from "@/app/page";

/* ─────────────────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────────────────── */
const steps = [
    {
        num: "01",
        title: "Pick a Game",
        desc: "Browse classic NES, SNES, GBA, N64 & PSP titles. Click Play — the game loads instantly in your browser via WASM emulation. Zero installs.",
        color: "#b44cf5",
        icon: (
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect width="20" height="15" x="2" y="3" rx="2" />
                <path d="M12 18v4M8 22h8" />
                <circle cx="8" cy="10" r="1.5" fill="currentColor" />
                <path d="M15 9h3M16.5 7.5v3" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Share Your Code",
        desc: "A 5-character session code appears. Share it — friends enter it on any phone, no app download, no account. They connect as wireless controllers.",
        color: "#00f5ff",
        icon: (
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect width="14" height="20" x="5" y="2" rx="3" />
                <path d="M12 17h.01" />
                <path d="M9 7h6" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Play Together",
        desc: "Friends' phones become gamepads. Game runs on your screen. Inputs travel peer-to-peer via WebRTC — ultra-low latency, no cloud.",
        color: "#ff2d78",
        icon: (
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 12h4M8 10v4M15 10v.01M18 12v.01M15 14v.01" />
                <rect width="20" height="12" x="2" y="6" rx="3" />
            </svg>
        ),
    },
];



export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-[120px] px-5 md:px-16 overflow-hidden">
            {/* bg */}
            <div className="absolute inset-0 bg-[#08041a]" />
            <div className="absolute inset-0 dot-matrix opacity-50" />
            <Orbs
                items={[
                    { color: "rgba(107,17,160,0.18)", top: "40%", left: "60%", size: "50vw", delay: "1s" },
                ]}
            />

            <div className="relative max-w-[1100px] mx-auto">
                <div className="">
                    <SectionLabel>How It Works</SectionLabel>
                    <br />
                    <h2 className="section-title-bar text-[32px] md:text-[40px] font-bold text-[#e8ccff] mb-14 mt-4 font-orbitron">
                        Three Steps to Co-op
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.45, ease: Easing }}
                            className="game-card p-8 group"
                        >
                            {/* Big num */}
                            <div
                                className="font-mono text-[64px] font-black absolute top-3 right-5 leading-none select-none font-orbitron"
                                style={{ color: `${step.color}18` }}
                            >
                                {step.num}
                            </div>

                            {/* Icon */}
                            <div
                                className="mb-5 relative z-10 w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{
                                    background: `${step.color}15`,
                                    border: `1px solid ${step.color}35`,
                                    color: step.color,
                                    boxShadow: `0 0 20px ${step.color}25`,
                                }}
                            >
                                {step.icon}
                            </div>

                            {/* Connector line for non-last */}
                            {i < steps.length - 1 && (
                                <div
                                    className="hidden md:block absolute top-[60px] -right-3 w-6 h-px z-20"
                                    style={{
                                        background: `linear-gradient(90deg, ${step.color}60, transparent)`,
                                    }}
                                />
                            )}

                            <h3 className="text-[20px] font-bold text-[#e8ccff] mb-3 font-orbitron">
                                {step.title}
                            </h3>
                            <p className="text-[14px] text-[#e8ccff]/55 leading-relaxed">{step.desc}</p>

                            {/* Bottom accent */}
                            <div
                                className="mt-6 h-px rounded-full opacity-40"
                                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}