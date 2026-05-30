/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */
export default function Footer() {
    return (
        <footer className="bg-[#08041a] py-12 px-5 md:px-16 border-t border-[rgba(180,76,245,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 dot-matrix opacity-20" />

            <div className="relative max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#6b11a0] to-[#b44cf5] flex items-center justify-center shadow-[0_0_12px_rgba(180,76,245,0.4)]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                <path d="M6 12h4M8 10v4M15 10v.01M18 12v.01M15 14v.01" />
                                <rect width="20" height="12" x="2" y="6" rx="3" />
                            </svg>
                        </div>
                        <div className="text-[18px] font-extrabold tracking-tight font-orbitron">
                            <span className="text-[#e8ccff]">Couch</span>
                            <span className="text-gradient">Code</span>
                        </div>
                    </div>

                    <span className="badge-neon">In Development</span>
                </div>

                <div className="text-center mb-8">
                    <p className="text-[13px] text-[#e8ccff]/30 italic">
                        Retro games. Modern browser. No compromises.
                    </p>
                </div>

                <div className="neon-divider mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#e8ccff]/30 font-orbitron">
                    <p>© 2025 CouchCode. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#b44cf5] hover:drop-shadow-[0_0_8px_rgba(180,76,245,0.8)] transition-all">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[#b44cf5] hover:drop-shadow-[0_0_8px_rgba(180,76,245,0.8)] transition-all">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}