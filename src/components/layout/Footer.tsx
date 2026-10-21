"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function Footer() {
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!footerRef.current || !wordmarkRef.current) return;

    gsap.fromTo(
      wordmarkRef.current,
      { opacity: 0, y: 80, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const isSuppressed = Boolean(
    pathname?.startsWith('/services/branding-design') || 
    pathname?.startsWith('/services/ai-automation') || 
    pathname?.startsWith('/services/video-production-editing') ||
    pathname?.startsWith('/services/crm-sales-funnel')
  );

  if (isSuppressed) {
    return null;
  }

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0A0A0A] text-white pt-24 pb-10 overflow-hidden border-t-4 border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Top Info Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-16 border-b-2 border-white/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F]">
              NEXUS GROWTH • EST. 2026
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-extrabold uppercase leading-none mt-2">
              Ready to break typical industry metrics?
            </h3>
          </div>

          <Link
            href="/contact"
            className="c-button text-sm py-4 px-8 text-white shadow-[0_0_24px_rgba(255,31,31,0.25)] shrink-0"
            style={{ background: 'linear-gradient(135deg, #FF1F1F, #8B0000)' }}
          >
            Start Your Engagement <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b-2 border-white/20">
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF1F1F] mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-[#6E7177]">
              <li><Link href="/" className="hover:text-[#FF1F1F] transition-colors">01. Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#FF1F1F] transition-colors">02. Manifesto</Link></li>
              <li><Link href="/#services" className="hover:text-[#FF1F1F] transition-colors">03. Capabilities</Link></li>
              <li><Link href="/#work" className="hover:text-[#FF1F1F] transition-colors">04. Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1F1F] transition-colors">05. Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF1F1F] mb-6">
              Core Capabilities
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-[#6E7177]">
              <li><Link href="/services/web-development" className="hover:text-[#FF1F1F] transition-colors">Website Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-[#FF1F1F] transition-colors">App Development</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#FF1F1F] transition-colors">AI Automation</Link></li>
              <li><Link href="/services/branding-design" className="hover:text-[#FF1F1F] transition-colors">Branding &amp; Design</Link></li>
              <li><Link href="/services/google-meta-ads" className="hover:text-[#FF1F1F] transition-colors">Google &amp; Meta Ads</Link></li>
              <li><Link href="/services" className="text-[#FF1F1F] font-bold hover:underline flex items-center gap-1">All 11 Capabilities ➔</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF1F1F] mb-6">
              Channels
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-[#6E7177]">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1F1F] transition-colors">Twitter (X) ↗</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1F1F] transition-colors">LinkedIn ↗</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1F1F] transition-colors">Instagram ↗</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#FF1F1F] transition-colors">GitHub Labs ↗</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF1F1F] mb-6">
              Live Agency Telemetry
            </h4>
            <div className="rounded-xl border-2 border-white/10 bg-[#121212] p-4 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-muted-text">STATUS:</span>
                <span className="text-[#FF1F1F] font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF1F1F] animate-pulse" /> ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-text">LOCAL TIME:</span>
                <span className="text-white font-bold">{time || "12:00:00 UTC"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-text">ACCEPTING:</span>
                <span className="text-[#FF1F1F] font-bold">2 SLOTS LEFT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Ultra-Compressed Wordmark */}
        <div className="w-full flex justify-center py-10 overflow-hidden">
          <h2
            ref={wordmarkRef}
            className="u-title-100 text-center tracking-tighter text-[#1A1A1A] hover:text-[#FF1F1F] transition-colors duration-500 select-none"
          >
            NEXUS GROWTH
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 font-mono text-xs text-[#6E7177]">
          <p>© {new Date().getFullYear()} NEXUS Growth Creative Production Agency. Engineered for performance.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/services/web-development" className="text-[#FF1F1F] hover:underline">Website Spec</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
