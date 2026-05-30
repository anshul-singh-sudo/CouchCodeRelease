/* ─────────────────────────────────────────────────────────
   FLOATING ORBS
───────────────────────────────────────────────────────── */
export default function Orbs({
    items,
}: {
    items: { color: string; top: string; left?: string; right?: string; size: string; delay?: string }[];
}) {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {items.map((o, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-drift"
                    style={{
                        top: o.top,
                        left: o.left,
                        right: o.right,
                        width: o.size,
                        height: o.size,
                        background: `radial-gradient(ellipse at center, ${o.color} 0%, transparent 70%)`,
                        filter: "blur(40px)",
                        animationDelay: o.delay ?? "0s",
                        animationDuration: `${10 + i * 3}s`,
                    }}
                />
            ))}
        </div>
    )
};