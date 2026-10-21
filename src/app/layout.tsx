import type { Metadata } from "next";
import { fontSans, fontSerif, fontMono, fontDisplay, fontGrotesk, fontAccent } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GridPulse } from "@/components/ui/grid-pulse";

export const metadata: Metadata = {
  title: "NEXUS Growth | Full-Service Creative Production Agency",
  description: "Ideas Into Impact. An award-winning full-service growth agency specializing in digital products, branding, high-velocity engineering, and acquisition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable} ${fontGrotesk.variable} ${fontAccent.variable}`}
    >
      <body className="antialiased bg-[#0A0A0A] text-white min-h-screen flex flex-col selection:bg-[#FF1F1F] selection:text-white relative">
        <GridPulse
          className="fixed inset-0 pointer-events-none -z-10 h-screen w-screen"
          cell={28}
          reach={2.5}
          ambient={2}
          mask={false}
        />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex-grow pt-[var(--nav-offset)]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
