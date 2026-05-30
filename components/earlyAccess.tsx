"use client";

import { useEffect, useState } from "react";
import Stars from "./stars";
import Orbs from "./orbs";
import { AnimatePresence, motion } from "framer-motion";
import { Easing } from "@/app/page";
import SectionLabel from "./sectionLabel";

/* ─────────────────────────────────────────────────────────
   EARLY ACCESS
───────────────────────────────────────────────────────── */
export default function EarlyAccess() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (localStorage.getItem("couchcode_joined")) setStatus("success");
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setStatus("error");
            return;
        }
        localStorage.setItem(
            "couchcode_joined",
            JSON.stringify({ email, t: Date.now() })
        );
        setStatus("success");
    };

    return (
        <section id="early-access" className="relative py-[140px] px-5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#04020e]" />
            <div className="absolute inset-0 pixel-grid opacity-50" />
            <Stars />
            <Orbs
                items={[
                    { color: "rgba(107,17,160,0.25)", top: "30%", left: "20%", size: "55vw" },
                    { color: "rgba(0,245,255,0.08)", top: "20%", right: "10%", size: "30vw", delay: "2s" },
                    { color: "rgba(255,45,120,0.06)", top: "60%", right: "30%", size: "25vw", delay: "1s" },
                ]}
            />

            <div className="relative max-w-[620px] mx-auto">
                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: Easing }}
                    className="glass-card-strong rounded-[28px] p-8 md:p-14 text-center relative overflow-hidden"
                >
                    {/* Animated top glow border */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#b44cf5] to-transparent" />
                    <div className="absolute top-0 left-[30%] right-[30%] h-px bg-[#00f5ff]/60 blur-sm" />

                    {/* Icon */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 mx-auto mb-8 relative"
                    >
                        <div
                            className="w-full h-full rounded-full flex items-center justify-center"
                            style={{
                                background: "rgba(180,76,245,0.15)",
                                border: "1px solid rgba(180,76,245,0.3)",
                                boxShadow: "0 0 30px rgba(180,76,245,0.3)",
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b44cf5" strokeWidth="1.5">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                        </div>
                    </motion.div>

                    <SectionLabel>Limited Early Access</SectionLabel>

                    <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#e8ccff] mb-4 mt-4 font-orbitron leading-tight">
                        Be{" "}
                        <span className="text-gradient">First</span>{" "}
                        to Play.
                    </h2>
                    <p className="text-[15px] text-[#e8ccff]/55 mb-10 leading-relaxed max-w-[400px] mx-auto">
                        CouchCode is in development. Join the early access list and we&apos;ll
                        notify you the moment it&apos;s ready.
                    </p>

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="flex flex-col items-center gap-4 py-6"
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgba(57,255,20,0.1)",
                                        border: "2px solid rgba(57,255,20,0.4)",
                                        boxShadow: "0 0 30px rgba(57,255,20,0.2)",
                                        color: "#39ff14",
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <p className="font-bold text-[#e8ccff] font-orbitron">
                                    You&apos;re on the list!
                                </p>
                                <p className="text-[13px] text-[#e8ccff]/50">We&apos;ll be in touch when it launches.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col md:flex-row gap-3"
                            >
                                <div className="flex-1 relative">
                                    <input
                                        id="early-access-email-input"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (status === "error") setStatus("idle");
                                        }}
                                        className={`neon-input w-full h-[52px] rounded-xl px-5 text-[14px] ${status === "error" ? "error" : ""}`}
                                    />
                                    {status === "error" && (
                                        <p className="absolute -bottom-6 left-0 text-[11px] text-[#ff2d78]">
                                            Please enter a valid email.
                                        </p>
                                    )}
                                </div>
                                <button
                                    id="early-access-submit-btn"
                                    type="submit"
                                    className="relative overflow-hidden bg-gradient-primary h-[52px] px-8 rounded-xl font-bold text-white text-[13px] tracking-wide glow-primary hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 whitespace-nowrap"
                                >
                                    <span className="relative z-10">Notify Me →</span>
                                    <span className="absolute inset-0 animate-shimmer" />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    <p className="mt-12 text-[10px] font-bold tracking-[0.15em] text-[#e8ccff]/25 uppercase font-orbitron">
                        No spam · No credit card · Just early access
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[rgba(180,76,245,0.3)] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};