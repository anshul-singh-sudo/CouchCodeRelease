"use client";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import ProblemSection from "@/components/problemSection";
import HowItWorks from "@/components/HowItWorks";
import FeatureBento from "@/components/featureBento";
import SessionDemo from "@/components/sessionDemo";
import StatusStrip from "@/components/statusStrip";
import EarlyAccess from "@/components/earlyAccess";
import Footer from "@/components/footer";

/* ─────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────── */
export const Easing = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main className="relative selection:bg-[#b44cf5] selection:text-white">
      <Nav />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeatureBento />
      <SessionDemo />
      <StatusStrip />
      <EarlyAccess />
      <Footer />
    </main>
  );
}