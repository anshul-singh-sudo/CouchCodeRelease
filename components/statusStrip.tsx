"use client";

import useCountUp from "@/hooks/useCountUp";
import React from "react";

/* ─────────────────────────────────────────────────────────
   STATS STRIP
───────────────────────────────────────────────────────── */
export default function StatusStrip() {
    const platforms = useCountUp(8);

    const stats = [
        { value: `${platforms.count}+`, label: "Platforms", ref: platforms.ref, color: "#b44cf5" },
        { value: "<20ms", label: "Input Latency", ref: null, color: "#00f5ff" },
        { value: "0", label: "Downloads", ref: null, color: "#39ff14" },
        { value: "100%", label: "Browser Native", ref: null, color: "#ff2d78" },
    ];

    return (
        <section className="relative py-20 px-5 overflow-hidden border-y border-[rgba(180,76,245,0.1)]">
            <div className="absolute inset-0 bg-[rgba(8,4,26,0.7)]" />
            <div className="absolute inset-0 dot-matrix opacity-30" />

            <div className="relative flex flex-wrap justify-center gap-12 md:gap-24">
                {stats.map((s, i) => (
                    <React.Fragment key={i}>
                        <div className="text-center" ref={s.ref as React.Ref<HTMLDivElement>}>
                            <div
                                className="text-[44px] font-black font-orbitron mb-1"
                                style={{
                                    color: s.color,
                                    textShadow: `0 0 20px ${s.color}80, 0 0 40px ${s.color}40`,
                                }}
                            >
                                {s.value}
                            </div>
                            <div className="text-[10px] font-bold tracking-[0.15em] text-[#e8ccff]/50 uppercase font-orbitron">
                                {s.label}
                            </div>
                        </div>
                        {i < stats.length - 1 && (
                            <div
                                className="hidden md:block w-px h-14 self-center"
                                style={{
                                    background: `linear-gradient(180deg, transparent, ${stats[i].color}40, transparent)`,
                                }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};