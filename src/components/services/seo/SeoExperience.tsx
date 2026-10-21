'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Globe, 
  Link2, 
  Cpu, 
  CheckCircle2, 
  BarChart2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Simulated SERP Test Queries
interface SerpQuery {
  id: string;
  keyword: string;
  volume: string;
  kd: string;
  url: string;
  title: string;
  snippet: string;
  sitelinks: string[];
  initialRank: number;
  finalRank: number;
}

const QUERIES: SerpQuery[] = [
  {
    id: 'q1',
    keyword: 'Next.js 16 Enterprise Agency',
    volume: '14,800/mo',
    kd: '78 (Hard)',
    url: 'https://nexusgrowth.co/services/web-development',
    title: 'NEXUS Growth™ | Next.js 16 & React 19 Enterprise Architecture',
    snippet: 'Custom Next.js App Router engineering with sub-second TTFB, 99+ mobile Core Web Vitals, and hardware-accelerated GSAP motion for high-growth brands.',
    sitelinks: ['Core Web Vitals Spec', 'Architecture Roadmap', 'Client Case Studies', 'Book Sprint'],
    initialRank: 48,
    finalRank: 1
  },
  {
    id: 'q2',
    keyword: 'High-Retention Mobile App Agency',
    volume: '22,400/mo',
    kd: '84 (Hard)',
    url: 'https://nexusgrowth.co/services/app-development',
    title: 'NEXUS Growth™ | Native iOS & Android 120Hz Mobile Engineering',
    snippet: 'Turnkey React Native & Expo mobile architectures. Fluid 120Hz gesture physics, offline SQLite sync, and biometric auth that turn users into daily active buyers.',
    sitelinks: ['120Hz Skia Demo', 'Offline-First DB', 'RevenueCat IAP', 'Schedule Triage'],
    initialRank: 36,
    finalRank: 1
  },
  {
    id: 'q3',
    keyword: 'Automated CRM WhatsApp Funnel',
    volume: '9,200/mo',
    kd: '65 (Medium)',
    url: 'https://nexusgrowth.co/services/crm-sales-funnel',
    title: 'NEXUS Pipeline OS | 1-Click WhatsApp Video Checkout Funnels',
    snippet: 'Convert commercial film viewers directly into closed revenue. Sub-20 second WhatsApp conversational checkout powered by multi-agent AI inventory sync.',
    sitelinks: ['WhatsApp Simulator', 'Apple Pay 1-Click', 'HubSpot Webhooks', 'Agency Rates'],
    initialRank: 29,
    finalRank: 1
  }
];

// Search Cluster Nodes
const CLUSTER_NODES = [
  { label: 'Core Next.js Architecture', traffic: '42.8k', parent: true, color: '#FF1F1F' },
  { label: 'Sub-second TTFB Edge Cache', traffic: '12.4k', parent: false, color: '#FF1F1F' },
  { label: 'Zero CLS Layout Hardening', traffic: '8.1k', parent: false, color: '#C9CCD1' },
  { label: 'Dynamic Programmatic ISR Pages', traffic: '19.6k', parent: false, color: '#C9CCD1' },
  { label: 'DR80+ Verified Editorial Backlinks', traffic: '15.2k', parent: false, color: '#FF1F1F' }
];

export default function SeoExperience() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [animatedRank, setAnimatedRank] = useState(48);
  const [isTouch, setIsTouch] = useState(false);
  const activeQuery = QUERIES[activeQueryIndex];

  // Mouse spring cursor
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Rank position count-down animation
  useEffect(() => {
    setAnimatedRank(activeQuery.initialRank);
    const interval = setInterval(() => {
      setAnimatedRank((prev) => {
        if (prev <= activeQuery.finalRank) {
          clearInterval(interval);
          return activeQuery.finalRank;
        }
        return prev - 1;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [activeQueryIndex, activeQuery.initialRank, activeQuery.finalRank]);

  // Scroll tied ranking curve
  const chartRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chartRef,
    offset: ['start end', 'end center']
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FF1F1F] selection:text-white overflow-hidden">
      {/* 1. Magnifying-Glass Custom Cursor */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          style={{ x: mouseX, y: mouseY }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-[#FF1F1F] bg-[#8B0000]/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_24px_rgba(255,31,31,0.25)]">
            <Search className="w-4 h-4 text-emerald-300 animate-pulse" />
          </div>
        </motion.div>
      )}

      {/* 2. Moving Luminous Emerald / Cyan Glow Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#CC1919]/20 via-[#FF1F1F]/15 to-transparent blur-[140px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.95, 1.15, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#C9CCD1]/15 via-emerald-800/15 to-transparent blur-[140px] will-change-transform"
        />
      </div>

      {/* Header Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F1F] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              DISCIPLINE 10 • ALGORITHMIC SEARCH DOMINANCE
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#6E7177]">
            <span>SUB-500ms TTFB</span>
            <span>•</span>
            <span>PROGRAMMATIC CLUSTERS</span>
            <span>•</span>
            <span>DR80+ BACKLINKS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF1F1F]/30 bg-[#FF1F1F]/10 text-[#FF1F1F] font-mono text-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Technical Search Architecture &amp; Programmatic Clusters</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.86] text-white">
            Topical Authority &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white">
              Rank Supremacy.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] max-w-xl leading-relaxed">
            Dominating high-intent search queries with programmatic architecture.
          </p>
        </div>
      </section>

      {/* Interactive SERP Preview Simulator & Live Rank Tracker */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              LIVE SERP PREVIEW SIMULATOR
            </span>
            <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
              Google Search Experience Simulator
            </h2>
          </div>

          {/* Query Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-[#1A1A1A]/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {QUERIES.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setActiveQueryIndex(idx)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all",
                  activeQueryIndex === idx 
                    ? "bg-[#FF1F1F] text-white shadow-[0_0_24px_rgba(255,31,31,0.25)]" 
                    : "text-[#6E7177] hover:text-white"
                )}
              >
                Query #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Live SERP Mock Browser */}
        <div className="rounded-3xl border border-white/15 bg-[#121212] p-6 md:p-10 shadow-2xl backdrop-blur-md space-y-6">
          {/* Mock Google Search Bar */}
          <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 shadow-inner">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-[#6E7177] shrink-0" />
              <span className="font-mono text-sm md:text-base text-white font-semibold truncate">
                {activeQuery.keyword}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#6E7177] shrink-0">
              <span className="text-[#FF1F1F] font-bold">{activeQuery.volume}</span>
              <span className="hidden sm:inline">• KD: {activeQuery.kd}</span>
            </div>
          </div>

          {/* Live Position Countdown Pill */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#FF1F1F]/10 border border-[#FF1F1F]/30">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF1F1F] animate-ping" />
              <span className="font-mono text-xs text-emerald-300 font-bold">
                SIMULATED RANK CLIMB:
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm font-bold">
              <span className="text-[#6E7177]">Position #{activeQuery.initialRank}</span>
              <span className="text-[#FF1F1F]">➔</span>
              <span className="text-[#FF1F1F] text-lg">Position #{animatedRank}</span>
              {animatedRank === 1 && (
                <span className="px-2 py-0.5 rounded bg-[#FF1F1F] text-white text-[10px] font-black uppercase">
                  TOP RESULT ★
                </span>
              )}
            </div>
          </div>

          {/* The Rich SERP Result Card */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            {/* Breadcrumb / Favicon */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FF1F1F] text-white font-black text-xs flex items-center justify-center">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-white">NEXUS Growth</span>
                <span className="font-mono text-[11px] text-[#6E7177] truncate">{activeQuery.url}</span>
              </div>
            </div>

            {/* Page Title with Hover Link */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#8ab4f8] hover:underline cursor-pointer">
              {activeQuery.title}
            </h3>

            {/* Snippet */}
            <p className="font-mono text-xs md:text-sm text-[#C9CCD1] leading-relaxed max-w-4xl">
              {activeQuery.snippet}
            </p>

            {/* Star Rating Rich Snippet */}
            <div className="flex items-center gap-2 pt-1 font-mono text-xs text-[#FF1F1F]">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF1F1F] text-[#FF1F1F]" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-[#6E7177]">(48 verified enterprise client reviews)</span>
            </div>

            {/* Sitelinks Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3 border-t border-white/10">
              {activeQuery.sitelinks.map((link) => (
                <div key={link} className="p-2.5 rounded-lg bg-[#1A1A1A]/5 border border-white/10 text-xs text-blue-300 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                  <span>{link}</span>
                  <ChevronRight className="w-3 h-3 text-[#6E7177]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic Search Cluster Tree & Rank Chart */}
      <section ref={chartRef} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 border-t border-white/10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
            PROGRAMMATIC SEARCH TOPOLOGY
          </span>
          <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
            The Authority Cluster Architecture
          </h2>
          <p className="font-mono text-sm text-[#6E7177] mt-2 max-w-2xl">
            Instead of publishing random single blog posts, NEXUS Growth builds programmatic, data-driven topical clusters that establish total semantic authority with search engines.
          </p>
        </div>

        {/* Cluster Nodes Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUSTER_NODES.map((node, idx) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-white/10 bg-[#1A1A1A]/[0.03] backdrop-blur-sm space-y-3 hover:border-[#FF1F1F]/40 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span 
                  className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border"
                  style={{ borderColor: `${node.color}55`, color: node.color, backgroundColor: `${node.color}15` }}
                >
                  {node.parent ? 'PILLAR AUTHORITY NODE' : 'SUB-TOPIC SPOKE'}
                </span>
                <span className="font-mono text-xs font-bold text-white">{node.traffic} / mo</span>
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-[#FF1F1F] transition-colors">
                {node.label}
              </h3>
              <p className="font-mono text-xs text-[#6E7177] leading-relaxed">
                Structured JSON-LD schema markup with automated internal cross-linking signals.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="rounded-3xl border border-[#FF1F1F]/40 bg-gradient-to-r from-[#8B0000]/40 via-[#8B0000]/30 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_24px_rgba(255,31,31,0.25)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              SEARCH REVENUE AUDIT
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Capture Your Highest-Intent Buyers.
            </h3>
            <p className="font-mono text-sm text-[#C9CCD1] leading-relaxed">
              Book a 30-minute search audit. We will analyze your Core Web Vitals TTFB metrics, identify competitor keyword gaps, and model your programmatic cluster revenue potential.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-[#CC1919] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(255,31,31,0.25)] transition-all"
              >
                <span>Initiate Search Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-[#6E7177]">
                Direct engineer consult • Zero keyword spam
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
