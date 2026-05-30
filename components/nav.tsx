"use client"

import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Easing } from "@/app/page";

export default function Nav() {

    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
        return unsub;
    }, [scrollY]);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: Easing }}
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 transition-all duration-500 gap-4 ${scrolled
                ? "bg-[rgba(4,2,14,0.92)] backdrop-blur-2xl border-b border-[rgba(180,76,245,0.15)] shadow-[0_4px_30px_rgba(107,17,160,0.2)]"
                : "bg-transparent"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#6b11a0] to-[#b44cf5] flex items-center justify-center shadow-[0_0_16px_rgba(180,76,245,0.5)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M6 12h4M8 10v4M15 10v.01M18 12v.01M15 14v.01" />
                        <rect width="20" height="12" x="2" y="6" rx="3" />
                    </svg>
                </div>
                <div className="text-[20px] font-extrabold tracking-tight font-orbitron">
                    <span className="text-[#e8ccff]">Couch</span>
                    <span className="text-gradient">Code</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="hidden md:block badge-cyan text-[9px]">▶ IN DEV</span>
                <button
                    id="nav-early-access-btn"
                    onClick={() =>
                        document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="relative bg-gradient-primary text-white text-[11px] font-bold tracking-[0.08em] uppercase px-5 py-2.5 rounded-full glow-primary hover:brightness-110 active:scale-95 transition-all duration-200"
                >
                    Get Early Access
                </button>
            </div>
        </motion.nav>
    );
}