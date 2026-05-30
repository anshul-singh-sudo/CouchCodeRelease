import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CouchCode — Play Retro Games From Any Browser",
  description:
    "No downloads. No consoles. Pick a game, share a 5-char code, play together — on any device.",
  themeColor: "#04020e",
  openGraph: {
    title: "CouchCode — Browser Retro Gaming, Coming Soon",
    description:
      "Browser-based retro gaming with phone-as-controller. No app, no downloads. Coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans antialiased bg-[#04020e] text-[#e8ccff]`}
      >
        {children}
      </body>
    </html>
  );
}