"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./sectionLabel"
import Orbs from "./orbs"
import { Easing } from "@/app/page";

/* ─────────────────────────────────────────────────────────
   SESSION DEMO
───────────────────────────────────────────────────────── */
export default function SessionDemo() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-[120px] px-5 md:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-[#08041a]" />
            <div className="absolute inset-0 pixel-grid opacity-40" />
            <Orbs
                items={[
                    { color: "rgba(0,245,255,0.10)", top: "20%", left: "-10%", size: "45vw" },
                    { color: "rgba(107,17,160,0.15)", top: "50%", right: "-5%", size: "40vw", delay: "2s" },
                ]}
            />

            <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div>
                    <SectionLabel>The Session System</SectionLabel>
                    <h2 className="text-[32px] md:text-[42px] font-bold text-[#e8ccff] mb-6 mt-4 font-orbitron leading-tight">
                        One Code.<br />
                        <span className="text-gradient">Instant Co-op.</span>
                    </h2>
                    <p className="text-[15px] text-[#e8ccff]/55 leading-relaxed mb-8">
                        The host shares a 5-character code. Friends enter it on any device.
                        WebRTC peers them directly — no accounts needed, no app to install.
                        Works on the same Wi-Fi or across the world.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <span className="badge-green">&lt; 20ms LOCAL</span>
                        <span className="badge-cyan text-[9px] font-orbitron">&lt; 80ms WORLD</span>
                    </div>
                </div>

                {/* Mockups */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Browser mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: Easing }}
                        className="w-full max-w-[340px] bg-[#08041a] rounded-[14px] border border-[rgba(180,76,245,0.2)] overflow-hidden shadow-[0_0_40px_rgba(107,17,160,0.25)]"
                    >
                        {/* Browser bar */}
                        <div className="h-9 bg-[#0d0820] flex items-center px-3 gap-1.5 border-b border-[rgba(180,76,245,0.1)]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff2d78]/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14]/60" />
                            <div className="ml-3 h-5 flex-1 bg-[#04020e] rounded-full flex items-center px-3 border border-[rgba(180,76,245,0.1)]">
                                <span className="text-[8px] text-[#e8ccff]/25 font-mono">couchcode.io/play</span>
                            </div>
                        </div>

                        {/* Game area */}
                        <div className="aspect-video bg-[#04020e] relative flex items-center justify-center overflow-hidden">
                            {/* Simple pixel scene */}
                            <svg width="100%" height="100%" viewBox="0 0 300 168">
                                {/* Sky */}
                                <rect width="300" height="168" fill="#0a0418" />
                                {/* Stars */}
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <circle key={i} cx={15 + i * 14} cy={10 + (i % 5) * 8} r="0.8" fill="white" opacity="0.4" />
                                ))}
                                {/* Ground */}
                                <rect x="0" y="130" width="300" height="38" fill="#1a0a35" />
                                <rect x="0" y="127" width="300" height="5" fill="#3d1a70" />
                                {/* Hills */}
                                <ellipse cx="50" cy="130" rx="60" ry="25" fill="#2e0a5f" />
                                <ellipse cx="250" cy="130" rx="70" ry="30" fill="#2e0a5f" />
                                {/* Castle */}
                                <rect x="120" y="80" width="60" height="50" fill="#1f0a3d" />
                                <rect x="115" y="70" width="15" height="25" fill="#2a0d52" />
                                <rect x="170" y="70" width="15" height="25" fill="#2a0d52" />
                                <rect x="135" y="95" width="30" height="35" fill="#160825" />
                                {/* Neon trim */}
                                <rect x="120" y="79" width="60" height="2" fill="#b44cf5" opacity="0.5" />
                                {/* Player */}
                                <rect x="90" y="115" width="12" height="16" fill="#b44cf5" />
                                <rect x="92" y="109" width="8" height="8" fill="#e8ccff" />
                                {/* Stars glow */}
                                <ellipse cx="150" cy="50" rx="30" ry="10" fill="#b44cf5" opacity="0.05" />
                            </svg>

                            {/* Session code badge */}
                            <div className="absolute top-3 right-3 bg-[rgba(13,8,32,0.9)] backdrop-blur border border-[rgba(180,76,245,0.4)] px-3 py-2 rounded-lg shadow-[0_0_16px_rgba(180,76,245,0.3)]">
                                <div className="text-[8px] text-[#b44cf5]/60 font-mono mb-0.5">SESSION</div>
                                <div className="text-[14px] text-[#b44cf5] font-mono font-black tracking-widest neon-text-violet">
                                    XKQ7P
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connecting line & latency */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="hidden md:flex flex-col items-center gap-1">
                            <svg width="60" height="2">
                                <motion.line
                                    x1="0" y1="1" x2="60" y2="1"
                                    stroke="#b44cf5" strokeWidth="1.5" strokeDasharray="6 4"
                                    initial={{ strokeDashoffset: 30 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                            <span className="badge-green" style={{ fontSize: "9px" }}>P2P: 14ms</span>
                            <svg width="60" height="2">
                                <motion.line
                                    x1="0" y1="1" x2="60" y2="1"
                                    stroke="#b44cf5" strokeWidth="1.5" strokeDasharray="6 4"
                                    initial={{ strokeDashoffset: 0 }}
                                    animate={{ strokeDashoffset: 30 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: Easing, delay: 0.1 }}
                        className="w-[150px] h-[300px] bg-[#08041a] rounded-[36px] border-4 border-[rgba(180,76,245,0.25)] overflow-hidden shadow-[0_0_40px_rgba(180,76,245,0.2)] relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#0d0820] rounded-b-xl z-10 border-b border-x border-[rgba(180,76,245,0.15)]" />
                        <div className="p-3 flex flex-col h-full justify-center items-center gap-8 pt-6">
                            <div className="text-[7px] text-[#b44cf5]/40 font-mono tracking-widest">P2 · SMW</div>

                            <div className="relative w-[44px] h-[44px]">
                                <div className="absolute inset-x-[36%] top-0 bottom-0 bg-[rgba(180,76,245,0.3)] rounded-sm" />
                                <div className="absolute inset-y-[36%] left-0 right-0 bg-[rgba(180,76,245,0.3)] rounded-sm" />
                            </div>

                            <div
                                className="w-[56px] h-[56px] rounded-full flex items-center justify-center font-black text-[#b44cf5] text-[16px]"
                                style={{
                                    background: "rgba(180,76,245,0.15)",
                                    border: "2px solid rgba(180,76,245,0.5)",
                                    boxShadow: "0 0 20px rgba(180,76,245,0.35)",
                                }}
                            >
                                A
                            </div>

                            <div className="flex gap-1.5">
                                <div className="w-5 h-1.5 rounded-full bg-[rgba(180,76,245,0.4)]" />
                                <div className="w-5 h-1.5 rounded-full bg-[rgba(180,76,245,0.15)]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};