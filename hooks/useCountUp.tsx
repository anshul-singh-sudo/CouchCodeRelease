import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────── */
export default function useCountUp(end: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, isInView]);

    return { count, ref };
}