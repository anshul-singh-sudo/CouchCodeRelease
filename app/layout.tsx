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
      <head>
       <script src="https://api.mimz.com/api/script?clientId=6ace0fd3184f4a89944212b9"></script>
       <script async type='text/javascript' src='https://static.klaviyo.com/onsite/js/RXCGT4/klaviyo.js?company_id=RXCGT4'></script>
          <script type="text/javascript"> 
          //Initialize Klaviyo object on page load
          !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}(); </script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans antialiased bg-[#04020e] text-[#e8ccff]`}
      >
        {children}
        <footer>
          <script src="https://api.mimz.com/api/v2/script?clientId=htmlFormTrackingScript"></script>
        </footer>
      </body>
    </html>
  );
}
