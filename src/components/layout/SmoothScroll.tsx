"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { setLenis, scrollToHash } from "@/lib/lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      if ((e as MouseEvent).defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      scrollToHash(href);
    };

    document.addEventListener("click", handleAnchorClick);

    // Honour hash present on first load
    if (window.location.hash) {
      const hash = window.location.hash;
      requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 60));
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
