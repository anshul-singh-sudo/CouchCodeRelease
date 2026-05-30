"use client";

import { Easing } from "@/app/page";
import SectionLabel from "./sectionLabel"
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   FEATURE BENTO
───────────────────────────────────────────────────────── */
export default function FeatureBento() {
    return (
        <section className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
            <div className="flex gap-4">
                <SectionLabel>Built Different</SectionLabel>
            </div>
            <h2 className="section-title-bar text-[32px] md:text-[40px] font-bold text-[#e8ccff] mb-14 font-orbitron">
                Why CouchCode?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-5 auto-rows-fr">

                {/* ── Card A: Controller (large) ──────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: Easing }}
                    className="md:col-span-3 md:row-span-2 game-card p-8 flex flex-col md:flex-row gap-8"
                >
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="badge-cyan mb-4 inline-block w-fit">★ Core Feature</div>
                        <h3 className="text-[26px] md:text-[30px] font-bold text-[#e8ccff] mb-4 font-orbitron leading-tight">
                            Your Phone{" "}
                            <span className="text-gradient">IS</span>{" "}
                            the Controller.
                        </h3>
                        <p className="text-[15px] text-[#e8ccff]/55 leading-relaxed max-w-[420px]">
                            No Bluetooth pairing. No app to download. Friends open CouchCode in
                            their browser, enter a 5-character code, and their touchscreen
                            becomes a fully-functional gamepad. Works on any Android or iPhone.
                        </p>
                        <div className="mt-6 flex gap-2 flex-wrap">
                            <span className="badge-green">iOS ✓</span>
                            <span className="badge-green">Android ✓</span>
                            <span className="badge-cyan">No App ✓</span>
                        </div>
                    </div>

                    {/* Phone mockup */}
                    <div className="relative w-full md:w-[180px] shrink-0 flex items-center justify-center">
                        <div className="relative w-[160px] h-[300px] bg-[#08041a] rounded-[36px] border-4 border-[rgba(180,76,245,0.3)] shadow-[0_0_40px_rgba(180,76,245,0.25),0_0_80px_rgba(107,17,160,0.15)] overflow-hidden animate-float">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-[rgba(180,76,245,0.15)] rounded-b-2xl z-20 border-b border-x border-[rgba(180,76,245,0.2)]" />
                            {/* Screen */}
                            <div className="absolute inset-1 rounded-[28px] overflow-hidden bg-[#0d0820]">
                                {/* Screen content */}
                                <div className="h-full flex flex-col items-center justify-between py-8 px-3 pt-6">
                                    <div className="text-[7px] text-[#b44cf5]/50 font-mono tracking-widest">P2 · SMW</div>

                                    {/* D-pad */}
                                    <div className="relative w-[52px] h-[52px]">
                                        <div className="absolute inset-x-[33%] top-0 bottom-0 bg-[rgba(180,76,245,0.2)] rounded-sm" />
                                        <div className="absolute inset-y-[33%] left-0 right-0 bg-[rgba(180,76,245,0.2)] rounded-sm" />
                                        <div className="absolute inset-[35%] bg-[rgba(180,76,245,0.3)] rounded-sm" />
                                    </div>

                                    {/* ABXY */}
                                    <div className="relative w-[60px] h-[60px]">
                                        {[
                                            { label: "A", pos: "bottom-0 left-1/2 -translate-x-1/2", color: "#ff2d78" },
                                            { label: "B", pos: "right-0 top-1/2 -translate-y-1/2", color: "#ffd700" },
                                            { label: "X", pos: "left-0 top-1/2 -translate-y-1/2", color: "#00f5ff" },
                                            { label: "Y", pos: "top-0 left-1/2 -translate-x-1/2", color: "#39ff14" },
                                        ].map((btn) => (
                                            <div
                                                key={btn.label}
                                                className={`absolute ${btn.pos} w-[18px] h-[18px] rounded-full flex items-center justify-center text-[7px] font-black`}
                                                style={{
                                                    background: `${btn.color}20`,
                                                    border: `1px solid ${btn.color}60`,
                                                    color: btn.color,
                                                    boxShadow: `0 0 8px ${btn.color}40`,
                                                }}
                                            >
                                                {btn.label}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Session code */}
                                    <div className="font-mono text-[8px] text-[#b44cf5] bg-[rgba(180,76,245,0.1)] px-3 py-1 rounded-full border border-[rgba(180,76,245,0.2)]">
                                        XKQ7P
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pulse rings */}
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-[rgba(180,76,245,0.15)] animate-ping-slow" style={{ animationDuration: "2.5s" }} />
                        <div className="absolute w-[240px] h-[240px] rounded-full border border-[rgba(180,76,245,0.08)] animate-ping-slow" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
                    </div>
                </motion.div>

                {/* ── Card B: Zero Downloads ──────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.45, ease: Easing }}
                    className="md:col-span-1 game-card p-7"
                >
                    <div
                        className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                        style={{ background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.25)", color: "#39ff14" }}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#e8ccff] mb-2 font-orbitron">Zero Downloads.</h3>
                    <p className="text-[13px] text-[#e8ccff]/50 leading-relaxed">
                        WASM-powered emulation runs entirely in your browser tab. Close it, it stops.
                    </p>
                </motion.div>

                {/* ── Card C: Every Screen ────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.45, ease: Easing }}
                    className="md:col-span-1 game-card p-7"
                >
                    <div
                        className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                        style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.25)", color: "#00f5ff" }}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="14" height="20" x="5" y="2" rx="3" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#e8ccff] mb-2 font-orbitron">Every Screen.</h3>
                    <p className="text-[13px] text-[#e8ccff]/50 leading-relaxed">
                        Browser + Wi-Fi = it plays. TV, laptop, tablet — doesn&apos;t matter.
                    </p>
                </motion.div>

                {/* ── Card D: P2P ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.45, ease: Easing }}
                    className="md:col-span-2 game-card p-7"
                >
                    <div className="flex items-start justify-between mb-5">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.25)", color: "#ff2d78" }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
                            </svg>
                        </div>
                        <span className="badge-green text-[9px]">&lt; 20ms LOCAL</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#e8ccff] mb-2 font-orbitron">P2P, Not Cloud.</h3>
                    <p className="text-[13px] text-[#e8ccff]/50 leading-relaxed">
                        The game runs <em className="not-italic text-[#ff2d78]">on your device</em>. No video
                        artifacts, no data-centre costs, ultra-low input lag.
                    </p>
                </motion.div>

                {/* ── Card E: Library ─────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.45, ease: Easing }}
                    className="md:col-span-2 game-card p-7"
                >
                    <div
                        className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                        style={{ background: "rgba(180,76,245,0.1)", border: "1px solid rgba(180,76,245,0.25)", color: "#b44cf5" }}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 12h4M8 10v4M15 10v.01M18 12v.01M15 14v.01" />
                            <rect width="20" height="12" x="2" y="6" rx="3" />
                        </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#e8ccff] mb-2 font-orbitron">Decades of Games.</h3>
                    <p className="text-[13px] text-[#e8ccff]/50 mb-4">
                        Curated library of titles that defined generations.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {["SNES", "GBA", "N64", "PSP", "NES", "PS1"].map((p) => (
                            <span
                                key={p}
                                className="text-[9px] font-bold font-orbitron border border-[rgba(180,76,245,0.2)] text-[rgba(180,76,245,0.6)] px-2.5 py-1 rounded hover:border-[rgba(180,76,245,0.5)] hover:text-[#b44cf5] transition-all"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}