"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
   PARTICLE STARS
───────────────────────────────────────────────────────── */

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    dur: number;
}

export default function Stars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(
            Array.from({ length: 80 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2.5 + 0.5,
                delay: Math.random() * 4,
                dur: Math.random() * 3 + 2,
            }))
        );
    }, []);

    // Return null on the server / first render so SSR output matches
    if (stars.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((s) => (
                <div
                    key={s.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: s.size,
                        height: s.size,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.dur}s`,
                    }}
                />
            ))}
        </div>
    );
}