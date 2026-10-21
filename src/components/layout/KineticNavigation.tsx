"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

interface KineticNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  { id: "01", name: "Website Development", href: "/services/web-development", color: "#FF1F1F", tag: "CODE" },
  { id: "02", name: "App Development", href: "/services/app-development", color: "#CC1919", tag: "MOBILE" },
  { id: "03", name: "Social Media Management", href: "/services/social-media-management", color: "#8B0000", tag: "ORGANIC" },
  { id: "04", name: "Graphic Design", href: "/services/graphic-design", color: "#FF4444", tag: "VISUAL" },
  { id: "05", name: "AI Automation", href: "/services/ai-automation", color: "#E60000", tag: "AGENTS" },
  { id: "06", name: "Branding & Design", href: "/services/branding-design", color: "#FF1F1F", tag: "IDENTITY" },
  { id: "07", name: "Google & Meta Ads", href: "/services/google-meta-ads", color: "#CC1919", tag: "PAID" },
  { id: "08", name: "Video Production & Editing", href: "/services/video-production-editing", color: "#8B0000", tag: "FILM" },
  { id: "09", name: "Copywriting & Content Strategy", href: "/services/copywriting-content-strategy", color: "#FF4444", tag: "WORDS" },
  { id: "10", name: "SEO", href: "/services/seo", color: "#E60000", tag: "ORGANIC" },
  { id: "11", name: "CRM & Sales Funnel Setup", href: "/services/crm-sales-funnel", color: "#FF1F1F", tag: "CONVERT" },
];

export default function KineticNavigation({ isOpen, onClose }: KineticNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const mainLinks = [
    { num: "01", name: "HOME", href: "/" },
    { num: "02", name: "MANIFESTO", href: "/#about" },
    { num: "03", name: "CAPABILITIES", href: "/#services" },
    { num: "04", name: "CASE STUDIES", href: "/#work" },
    { num: "05", name: "GET IN TOUCH", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden pointer-events-auto">
          {/* Gate Curtain Left */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="w-full lg:w-1/2 h-full bg-[#0A0A0A] border-r border-white/10 p-8 md:p-16 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header / Brand in Menu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-[#FF1F1F] border border-white/20" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">NEXUS NAVIGATION GATE</span>
              </div>
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-xl border border-white/10 bg-[#1A1A1A] shadow-[0_0_16px_rgba(255,31,31,0.2)] text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Links in Compressed Editorial Display */}
            <nav className="my-10 flex flex-col gap-3">
              {mainLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-4 text-white hover:text-[#FF1F1F] transition-colors"
                  >
                    <span className="font-mono text-sm font-bold text-[#6E7177] group-hover:text-white">
                      ({link.num})
                    </span>
                    <span className="u-title-200 tracking-tight group-hover:italic group-hover:translate-x-2 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile-Only Capabilities Quick Index */}
            <div className="lg:hidden my-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">
                  11 SPRINT DISCIPLINES
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="font-mono text-[11px] font-bold text-[#FF1F1F] flex items-center gap-1"
                >
                  <span>All Specs</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.href}
                    onClick={onClose}
                    className="p-2 rounded-lg border border-white/10 bg-[#1A1A1A] text-left font-mono text-[11px] font-bold text-white flex items-center justify-between hover:bg-[#FF1F1F] transition-colors"
                  >
                    <span className="truncate pr-1">#{srv.id} {srv.name}</span>
                    <span className="text-[9px] px-1 rounded bg-[#0A0A0A] border border-white/10 shrink-0 text-white">
                      {srv.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Info Tape */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono gap-4 text-white">
              <span>NEXUS GROWTH © 2026</span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#FF1F1F]" /> HIGH-VELOCITY DIGITAL LABS
              </span>
            </div>
          </motion.div>

          {/* Gate Curtain Right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="hidden lg:flex lg:w-1/2 h-full bg-[#121212] p-12 md:p-16 flex-col justify-between overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">
                11 CAPABILITIES DIRECTORY
              </span>
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-1.5 font-mono text-xs font-bold uppercase text-white shadow-[0_0_16px_rgba(255,31,31,0.15)] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <X className="h-4 w-4" /> CLOSE
              </button>
            </div>

            {/* Cassette / Ticket Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {SERVICES.map((srv, idx) => (
                <motion.div
                  key={srv.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                >
                  <Link
                    href={srv.href}
                    onClick={onClose}
                    className="group block rounded-xl border border-white/10 bg-[#1A1A1A] p-3.5 shadow-[0_0_16px_rgba(255,31,31,0.15)] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    style={{ borderLeftWidth: "8px", borderLeftColor: srv.color }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-white">
                        #{srv.id}
                      </span>
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-white/10 bg-[#0A0A0A] text-white font-bold">
                        {srv.tag}
                      </span>
                    </div>
                    <p className="mt-1 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-lg font-bold uppercase leading-none text-white group-hover:text-[#FF1F1F] transition-colors">
                      {srv.name}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Direct CTA */}
            <div 
              className="rounded-2xl border border-white/10 p-5 shadow-[0_0_24px_rgba(255,31,31,0.3)] flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, #FF1F1F, #8B0000)' }}
            >
              <div>
                <p className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-xl font-bold uppercase text-white leading-none">
                  Need a tailored engagement?
                </p>
                <p className="font-mono text-xs text-white/70 mt-1">Book a 30-min growth sprint consult.</p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="c-button-emerald c-button text-xs py-2 px-4 shadow-[0_0_16px_rgba(255,31,31,0.15)]"
              >
                Book Call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
