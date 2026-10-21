"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import KineticNavigation from "./KineticNavigation";
import { gsap } from "@/lib/gsap";

export const SERVICES_LIST = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "App Development", href: "/services/app-development" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Branding & Design", href: "/services/branding-design" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Video Production & Editing", href: "/services/video-production-editing" },
  { name: "CRM & Sales Funnels", href: "/services/crm-sales-funnel" },
  { name: "Google & Meta Ads", href: "/services/google-meta-ads" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "SEO", href: "/services/seo" },
  { name: "Copywriting & Content Strategy", href: "/services/copywriting-content-strategy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(false);
  };

  // Close on route change or Escape
  useEffect(() => {
    setIsServicesOpen(false);
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      const navElement = document.getElementById("main-nav");
      if (navElement) {
        if (currentScrollY > lastScrollY && currentScrollY > 120 && !isNavOpen && !isServicesOpen) {
          gsap.to(navElement, { yPercent: -150, duration: 0.35, ease: "power2.inOut" });
        } else {
          gsap.to(navElement, { yPercent: 0, duration: 0.35, ease: "power2.out" });
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavOpen, isServicesOpen]);

  return (
    <>
      <header
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 pointer-events-none transition-all duration-300"
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between pointer-events-auto rounded-2xl px-5 py-3 transition-all duration-300 border border-white/10 relative",
            isScrolled
              ? "bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(255,31,31,0.08)]"
              : "bg-[#0A0A0A]/80 backdrop-blur-md"
          )}
        >
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/logo-nexus-growth.png"
              alt="NEXUS Growth"
              width={180}
              height={48}
              className="h-10 w-auto object-contain group-hover:brightness-110 transition-all"
              priority
            />
          </Link>

          {/* Right Action Buttons & Nav */}
          <div className="flex items-center gap-3">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 mr-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
              {/* Interactive Services Hover Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center gap-1.5 py-2 hover:text-[#FF1F1F] transition-colors cursor-pointer select-none",
                    isServicesOpen && "text-[#FF1F1F]"
                  )}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isServicesOpen && "rotate-180 text-[#FF1F1F]"
                    )}
                  />
                </Link>

                {/* Compact, clean dropdown showing only main titles */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-white/10 bg-[#0C0C0E]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(255,31,31,0.08)] p-2 z-50 pointer-events-auto"
                    >
                      <div className="flex flex-col gap-0.5">
                        {SERVICES_LIST.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeDropdown}
                            className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-medium text-[#C9CCD1] hover:text-white hover:bg-white/[0.06] transition-all"
                          >
                            <span className="group-hover:translate-x-1 transition-transform truncate">
                              {service.name}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-[#FF1F1F] transition-colors shrink-0" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-1 pt-1.5 border-t border-white/10">
                        <Link
                          href="/services"
                          onClick={closeDropdown}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold text-[#FF1F1F] hover:bg-[#FF1F1F]/10 transition-all"
                        >
                          <span>All Services</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#work" className="hover:text-[#FF1F1F] transition-colors">
                Case Studies
              </Link>
              <Link href="/#process" className="hover:text-[#FF1F1F] transition-colors">
                Method
              </Link>
              <Link
                href="/services/web-development"
                className="text-[#FF1F1F] underline underline-offset-4 decoration-[#FF1F1F]/50"
              >
                Spec Proof
              </Link>
            </nav>

            <Link
              href="/contact"
              className="c-button hidden sm:inline-flex text-xs py-2.5 px-5"
            >
              Start Project <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-[#1A1A1A] px-3.5 py-2 text-xs font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] font-extrabold uppercase tracking-wider text-white shadow-[0_0_12px_rgba(255,31,31,0.1)] hover:shadow-[0_0_20px_rgba(255,31,31,0.25)] hover:border-[#FF1F1F]/30 transition-all pointer-events-auto"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1 w-4">
                <span className="h-0.5 w-full bg-white block" />
                <span className="h-0.5 w-full bg-white block" />
                <span className="h-0.5 w-full bg-white block" />
              </span>
              <span>{isNavOpen ? "CLOSE" : "MENU"}</span>
            </button>
          </div>
        </div>
      </header>

      <KineticNavigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
