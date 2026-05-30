/* ─────────────────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────────────────── */
export default function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="badge-neon mb-5 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b44cf5] animate-pulse-glow" />
            {children}
        </span>
    )
};
