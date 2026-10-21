import { Inter, Instrument_Serif, JetBrains_Mono, Space_Grotesk, Syne, Playfair_Display } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

export const fontGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const fontAccent = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
