'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  PenTool, 
  FileText, 
  Sparkles, 
  Mail, 
  Target, 
  Zap, 
  CheckCircle2, 
  Quote,
  XCircle,
  RefreshCw,
  Sliders,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Comparison Cases for Live Strike-Through & Replace
interface CopyCase {
  id: string;
  category: string;
  context: string;
  genericCopy: string;
  genericCritique: string;
  nexusCopy: string;
  nexusBreakdown: string;
  conversionLift: string;
}

const COPY_CASES: CopyCase[] = [
  {
    id: 'hero',
    category: 'LANDING PAGE • HERO HEADLINE',
    context: 'B2B Enterprise Software Landing Page Above-The-Fold',
    genericCopy: 'We empower innovative enterprises to unlock seamless digital transformation and synergize cross-functional workflows.',
    genericCritique: 'Zero concrete pain points. Vague corporate buzzwords that leave the prospect wondering what the product actually does.',
    nexusCopy: 'Cut 14 hours of manual data reconciliation every week. Deployed in 48 hours with zero engineering backlog.',
    nexusBreakdown: 'Quantifiable time saved (14 hrs/wk), clear mechanism (automation), and eliminates the primary switching objection (zero engineering required).',
    conversionLift: '+68.4% Demo Bookings'
  },
  {
    id: 'guarantee',
    category: 'COMMERCE • RISK REVERSAL GUARANTEE',
    context: 'Direct-to-Consumer High-Ticket Product Page Checkout',
    genericCopy: 'Satisfaction guaranteed. If you are not completely satisfied with your purchase, please reach out to customer service.',
    genericCritique: 'Timid and bureaucratic. Shifts the burden of proof to the buyer and implies a tedious email runaround.',
    nexusCopy: 'Test it in your studio for 45 days. If it doesn’t outperform your existing workflow on day 1, keep the bonus assets and we will wire back 100% of your money. No interrogations.',
    nexusBreakdown: 'Irreversible confidence. Specific timeline (45 days), ethical bribe (keep bonuses), and explicit removal of friction (no interrogations).',
    conversionLift: '+41.2% Paid Conversions'
  },
  {
    id: 'cold_email',
    category: 'OUTBOUND • B2B COLD TRANSMISSION',
    context: 'Series A Founder Cold Email to Enterprise VPs',
    genericCopy: 'I hope this email finds you well! I would love to grab 15 minutes of your precious time next Tuesday to demo our groundbreaking platform.',
    genericCritique: 'Instant spam folder trigger. Asks for a 15-minute time donation without establishing any economic relevance.',
    nexusCopy: 'Noticed your engineering team is actively migrating to Next.js 16. We audited your mobile checkout latency and identified 3 render bottlenecks costing you an estimated $84k/mo. Mind if I send a 2-minute Loom teardown?',
    nexusBreakdown: 'Hyper-personalized trigger, quantified lost revenue ($84k/mo), and low-friction permission ask (2-min video instead of a meeting).',
    conversionLift: '32.6% Positive Reply Rate'
  }
];

const DELIVERABLES = [
  {
    icon: FileText,
    tag: 'CONVERSION COPY',
    title: 'High-Conversion Landing Page Copy',
    desc: 'Word-by-word direct response sales pages engineered around customer pain, objections, proof mechanisms, and irreversible guarantees.',
    specs: ['Hero Hook Variations', 'Objection Teardown Framework', 'Risk Reversal Guarantee Copy', 'Micro-Copy & CTA Optimization'],
    color: '#C9CCD1',
  },
  {
    icon: Quote,
    tag: 'POSITIONING',
    title: 'Brand Manifestos & Foundational Voice',
    desc: 'The defining narrative that establishes your company as the obvious market leader. Uncompromising, sharp, and impossible to forget.',
    specs: ['Foundational Brand Manifesto', 'Tone-Of-Voice Rulebook', 'Do & Do-Not Say Guidelines', 'Executive Bio Narrative'],
    color: '#FF1F1F',
  },
  {
    icon: Mail,
    tag: 'LIFECYCLE',
    title: 'Automated Email Funnel Sequences',
    desc: 'High-open-rate welcome flows, abandoned checkout recovery, customer win-backs, and weekly storytelling newsletters that generate cash on autopilot.',
    specs: ['7-Part Welcome Onboarding', 'High-Recovery Abandoned Cart', 'VIP Post-Purchase Ascension', 'Weekly Story-Driven Campaigns'],
    color: '#C9CCD1',
  },
  {
    icon: Target,
    tag: 'PAID COPY',
    title: 'Ad Copywriting & Hook Libraries',
    desc: '50+ direct response ad copy variations across Meta, Google Search, and LinkedIn. Designed to maintain high CTRs and pre-qualify buyer intent.',
    specs: ['Long-Form Story Ads', 'Short-Punch Pattern Interrupts', 'Google Search RSA Matrix', 'Ad Hook Testing Spreadsheets'],
    color: '#FF1F1F',
  },
];

export default function CopywritingExperience() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isStruck, setIsStruck] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const activeCase = COPY_CASES[activeCaseIndex];

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

  // Trigger strike-through animation sequence when active case changes
  useEffect(() => {
    setIsStruck(false);
    const timer = setTimeout(() => {
      setIsStruck(true);
    }, 900);
    return () => clearTimeout(timer);
  }, [activeCaseIndex]);

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FF1F1F] selection:text-white overflow-hidden">
      {/* 1. Blinking Text-Caret Custom Cursor */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
          style={{ x: mouseX, y: mouseY }}
        >
          {/* Vertical Caret */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="w-[3px] h-6 bg-[#FF1F1F] shadow-[0_0_10px_#FF1F1F]"
          />
          <span className="font-mono text-[9px] font-bold text-[#FF1F1F] bg-black/80 px-1.5 py-0.5 rounded border border-[#FF1F1F]/30 backdrop-blur-sm">
            EDIT
          </span>
        </motion.div>
      )}

      {/* 2. Moving Subtle Text-Clip Gradient Glow Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF1F1F]/10 via-[#FF1F1F]/10 to-transparent blur-[140px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent blur-[140px] will-change-transform"
        />
      </div>

      {/* Header Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F1F] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              DISCIPLINE 09 • HIGH-CONVERSION PERSUASION ARCHITECTURE
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#6E7177]">
            <span>DIRECT RESPONSE</span>
            <span>•</span>
            <span>OBJECTION TEARDOWNS</span>
            <span>•</span>
            <span>ZERO FLUFF</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF1F1F]/30 bg-[#FF1F1F]/10 text-[#FF1F1F] font-mono text-xs">
            <PenTool className="w-3.5 h-3.5" />
            <span>Words Engineered as Direct Economic Levers</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.86] text-white">
            Direct Response Words <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white">
              That Convert.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] max-w-xl leading-relaxed">
            High-intent messaging engineered to eliminate buyer hesitation.
          </p>
        </div>
      </section>

      {/* Signature Interactive Teardown: Generic Fluff vs NEXUS Conversion Copy */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              LIVE COPY ANATOMY AUDIT
            </span>
            <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
              Generic Fluff vs. NEXUS Conversion Spec
            </h2>
          </div>

          {/* Case Switcher Tabs */}
          <div className="flex items-center gap-2 bg-[#1A1A1A]/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {COPY_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={cn(
                  "px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all",
                  activeCaseIndex === idx 
                    ? "bg-[#FF1F1F] text-white shadow-[0_0_24px_rgba(255,31,31,0.25)]" 
                    : "text-[#6E7177] hover:text-white"
                )}
              >
                Case #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card A: Generic Corporate Fluff (With Strike-Through) */}
          <div className="relative rounded-3xl border border-red-500/30 bg-red-950/10 p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> GENERIC CORPORATE FLUFF
                </span>
                <span className="font-mono text-xs text-[#6E7177]">
                  {activeCase.category}
                </span>
              </div>

              <p className="font-mono text-xs text-[#6E7177]">
                Context: {activeCase.context}
              </p>

              {/* The Struck-Through Copy Text */}
              <div className="relative pt-4 pb-6">
                <p className={cn(
                  "text-2xl md:text-3xl font-serif italic text-[#C9CCD1] transition-opacity duration-700 leading-snug",
                  isStruck && "opacity-40"
                )}>
                  &ldquo;{activeCase.genericCopy}&rdquo;
                </p>

                {/* Animated Red Strike-Through Marker Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isStruck ? '100%' : '0%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-0 h-[4px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] -rotate-1 rounded-full pointer-events-none"
                />
              </div>
            </div>

            {/* Critique Teardown */}
            <div className="pt-4 border-t border-red-500/20 font-mono text-xs text-red-300/80 leading-relaxed">
              <strong className="text-red-400 uppercase font-bold block mb-1">Diagnostic Flaw:</strong>
              {activeCase.genericCritique}
            </div>
          </div>

          {/* Card B: NEXUS High-Conversion Spec */}
          <div className="relative rounded-3xl border border-[#FF1F1F]/40 bg-[#FF1F1F]/5 p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-[0_0_24px_rgba(255,31,31,0.25)]">
            {/* Glowing Accent Border */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1F1F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-white bg-[#FF1F1F] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" /> NEXUS CONVERSION SPEC
                </span>
                <span className="font-mono text-xs font-bold text-[#FF1F1F] bg-[#FF1F1F]/10 px-2.5 py-1 rounded border border-[#FF1F1F]/30">
                  {activeCase.conversionLift}
                </span>
              </div>

              <p className="font-mono text-xs text-[#6E7177]">
                Context: {activeCase.context}
              </p>

              {/* NEXUS Strong Copy */}
              <div className="pt-4 pb-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeCase.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-['Roboto_Flex'] font-bold uppercase text-white leading-snug tracking-tight"
                  >
                    &ldquo;{activeCase.nexusCopy}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Architectural Breakdown */}
            <div className="pt-4 border-t border-[#FF1F1F]/20 font-mono text-xs text-[#C9CCD1] leading-relaxed">
              <strong className="text-[#FF1F1F] uppercase font-bold block mb-1">Conversion Architecture:</strong>
              {activeCase.nexusBreakdown}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 border-t border-white/10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
            SYSTEM DELIVERABLES
          </span>
          <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
            The 4 Persuasion Vectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERABLES.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="p-6 rounded-2xl border border-white/10 bg-[#1A1A1A]/[0.03] backdrop-blur-sm space-y-4 hover:border-white/30 transition-all"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ backgroundColor: `${d.color}22`, color: d.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] font-bold text-[#FF1F1F] block">
                  {d.tag}
                </span>
                <h3 className="font-bold text-lg text-white">
                  {d.title}
                </h3>
                <p className="font-mono text-xs text-[#6E7177] leading-relaxed">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="rounded-3xl border border-[#FF1F1F]/40 bg-gradient-to-r from-[#8B0000]/30 via-stone-900/40 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_24px_rgba(255,31,31,0.25)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              CONVERSION AUDIT &amp; SPRINT
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Overhaul Your Sales Narrative.
            </h3>
            <p className="font-mono text-sm text-[#C9CCD1] leading-relaxed">
              Book a 30-minute teardown. We will critique your existing landing page copy, identify the exact leaks where prospects drop off, and draft a high-converting hook replacement.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-[#CC1919] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(255,31,31,0.25)] transition-all"
              >
                <span>Request Copy Teardown</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-[#6E7177]">
                Direct senior copywriter triage • 24hr response
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
