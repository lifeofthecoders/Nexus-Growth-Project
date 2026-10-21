'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Copy, Check, Terminal, Cpu, Zap, Code2, Eye, Sparkles, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

type FileTab = 'FlagshipApp.tsx' | 'gsapMotion.ts' | 'lighthouseMetrics.json';

const CODE_SNIPPETS: Record<FileTab, { language: string; lines: { num: number; code: string; highlight?: boolean }[] }> = {
  'FlagshipApp.tsx': {
    language: 'typescript',
    lines: [
      { num: 1, code: "import { useEffect, useRef } from 'react';" },
      { num: 2, code: "import { gsap, ScrollTrigger } from '@/lib/gsap';" },
      { num: 3, code: "import { CanvasStage } from '@/components/webgl/CanvasStage';" },
      { num: 4, code: "" },
      { num: 5, code: "export default function FlagshipExperience({ productData }: Props) {", highlight: true },
      { num: 6, code: "  const viewportRef = useRef<HTMLDivElement>(null);" },
      { num: 7, code: "  const ctaTimeline = useRef<gsap.core.Timeline | null>(null);" },
      { num: 8, code: "" },
      { num: 9, code: "  useEffect(() => {" },
      { num: 10, code: "    const ctx = gsap.context(() => {" },
      { num: 11, code: "      // Sub-second inertia scroll & hardware-accelerated pin", highlight: true },
      { num: 12, code: "      ScrollTrigger.create({" },
      { num: 13, code: "        trigger: viewportRef.current," },
      { num: 14, code: "        start: 'top top'," },
      { num: 15, code: "        end: '+=200%'," },
      { num: 16, code: "        pin: true," },
      { num: 17, code: "        scrub: 0.6," },
      { num: 18, code: "        onUpdate: (self) => {" },
      { num: 19, code: "          // 60FPS fluid camera orbit with zero layout shift" },
      { num: 20, code: "          CanvasStage.rotateCamera(self.progress * Math.PI * 2);" },
      { num: 21, code: "        }" },
      { num: 22, code: "      });" },
      { num: 23, code: "    }, viewportRef);" },
      { num: 24, code: "    return () => ctx.revert();" },
      { num: 25, code: "  }, []);" },
      { num: 26, code: "" },
      { num: 27, code: "  return (" },
      { num: 28, code: "    <section ref={viewportRef} className='relative min-h-screen bg-[#0A0A0A]'>" },
      { num: 29, code: "      <CanvasStage assetModel={productData.glbUrl} />" },
      { num: 30, code: "    </section>" },
      { num: 31, code: "  );" },
      { num: 32, code: "}" },
    ],
  },
  'gsapMotion.ts': {
    language: 'typescript',
    lines: [
      { num: 1, code: "import { gsap } from 'gsap';" },
      { num: 2, code: "import { ScrollTrigger } from 'gsap/ScrollTrigger';" },
      { num: 3, code: "" },
      { num: 4, code: "export const NEXUS_MOTION_PRESETS = {" },
      { num: 5, code: "  // Custom cubic bezier designed for zero visual vibration", highlight: true },
      { num: 6, code: "  cinematicEase: 'cubic-bezier(0.16, 1, 0.3, 1)'," },
      { num: 7, code: "  staggerRate: 0.045," },
      { num: 8, code: "  scrubInertia: 0.8," },
      { num: 9, code: "  gpuAcceleration: {" },
      { num: 10, code: "    force3D: true," },
      { num: 11, code: "    willChange: 'transform, opacity'," },
      { num: 12, code: "    backfaceVisibility: 'hidden'," },
      { num: 13, code: "  }," },
      { num: 14, code: "};" },
      { num: 15, code: "" },
      { num: 16, code: "export function choreographHero(container: HTMLElement) {", highlight: true },
      { num: 17, code: "  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });" },
      { num: 18, code: "  tl.fromTo('.stagger-char', " },
      { num: 19, code: "    { y: 80, opacity: 0, rotateX: -45 }," },
      { num: 20, code: "    { y: 0, opacity: 1, rotateX: 0, stagger: 0.02, duration: 1.1 }" },
      { num: 21, code: "  );" },
      { num: 22, code: "  return tl;" },
      { num: 23, code: "}" },
    ],
  },
  'lighthouseMetrics.json': {
    language: 'json',
    lines: [
      { num: 1, code: "{" },
      { num: 2, code: "  \"auditTarget\": \"NEXUS-Production-Edge\"," },
      { num: 3, code: "  \"timestamp\": \"2026-09-13T12:00:00Z\"," },
      { num: 4, code: "  \"scores\": {", highlight: true },
      { num: 5, code: "    \"performance\": 100,", highlight: true },
      { num: 6, code: "    \"accessibility\": 100," },
      { num: 7, code: "    \"bestPractices\": 100," },
      { num: 8, code: "    \"seo\": 100" },
      { num: 9, code: "  }," },
      { num: 10, code: "  \"coreWebVitals\": {" },
      { num: 11, code: "    \"FCP\": \"0.38s (Good)\"," },
      { num: 12, code: "    \"LCP\": \"0.74s (Good)\"," },
      { num: 13, code: "    \"CLS\": \"0.000 (Perfect)\"," },
      { num: 14, code: "    \"INP\": \"12ms (Good)\"" },
      { num: 15, code: "  }," },
      { num: 16, code: "  \"infrastructure\": \"Vercel Edge Network + Next.js App Router\"" },
      { num: 17, code: "}" },
    ],
  },
};

export default function CodeEditorTerminal() {
  const [activeTab, setActiveTab] = useState<FileTab>('FlagshipApp.tsx');
  const [mode, setMode] = useState<'code' | 'preview'>('code');
  const [copied, setCopied] = useState(false);
  const [simulatedLoad, setSimulatedLoad] = useState(false);
  const [lighthouseScore, setLighthouseScore] = useState(0);

  const handleCopy = () => {
    const text = CODE_SNIPPETS[activeTab].lines.map((l) => l.code).join('\n');
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setSimulatedLoad(true);
    setLighthouseScore(0);
    setTimeout(() => {
      setSimulatedLoad(false);
      setMode('preview');
    }, 900);
  };

  // Animate Lighthouse dial from 0 to 100
  useEffect(() => {
    if (activeTab === 'lighthouseMetrics.json' || mode === 'preview') {
      setLighthouseScore(0);
      const interval = setInterval(() => {
        setLighthouseScore((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 15);
      return () => clearInterval(interval);
    }
  }, [activeTab, mode]);

  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      {/* 1. Animated Gradient Glow Around Terminal Window Edge (Focused IDE Effect) */}
      <motion.div
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [0.995, 1.008, 0.995],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF1F1F] via-[#FF1F1F] to-[#C9CCD1] blur-lg pointer-events-none opacity-50 will-change-transform"
      />

      {/* Main Terminal Window Shell */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-[#1A1A1A] shadow-[0_0_20px_rgba(255,31,31,0.15)] overflow-hidden">
        {/* Top Titlebar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-white/10 bg-[#121212] px-5 py-3.5 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56] border border-white/10" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e] border border-white/10" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f] border border-white/10" />
            </div>
            <span className="ml-3 font-mono text-xs font-bold text-white hidden sm:inline-flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-white" /> NEXUS-RUNTIME • V4.2.EDGE
            </span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center rounded-xl border border-white/10 bg-[#1A1A1A] p-1 shadow-[0_0_20px_rgba(255,31,31,0.15)]">
            <button
              onClick={() => setMode('code')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition-all',
                mode === 'code' ? 'bg-[#FF1F1F] text-white border border-white/10' : 'text-[#C9CCD1] hover:text-white'
              )}
            >
              <Code2 className="h-3.5 w-3.5" /> Source Spec
            </button>
            <button
              onClick={() => setMode('preview')}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition-all',
                mode === 'preview' ? 'bg-[#C9CCD1] text-white border border-white/10' : 'text-[#C9CCD1] hover:text-white'
              )}
            >
              <Eye className="h-3.5 w-3.5" /> Live Sandbox
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={simulatedLoad}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#1A1A1A] px-3.5 py-1.5 font-mono text-xs font-bold uppercase hover:bg-[#FF1F1F] shadow-[0_0_20px_rgba(255,31,31,0.15)] transition-colors"
            >
              <Play className={cn('h-3.5 w-3.5', simulatedLoad && 'animate-spin text-white')} />
              {simulatedLoad ? 'Profiling...' : 'Run Audit'}
            </button>
            <button
              onClick={handleCopy}
              className="rounded-xl border border-white/10 bg-[#1A1A1A] p-2 text-white hover:bg-[#C9CCD1] shadow-[0_0_20px_rgba(255,31,31,0.15)] transition-colors"
              aria-label="Copy Code"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[#FF1F1F]" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Tabs */}
        {mode === 'code' && (
          <div className="flex border-b-2 border-white/10 bg-[#0A0A0A] overflow-x-auto">
            {(Object.keys(CODE_SNIPPETS) as FileTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex items-center gap-2 border-r-2 border-white/10 px-5 py-2.5 font-mono text-xs font-bold transition-colors whitespace-nowrap',
                  activeTab === tab
                    ? 'bg-[#1A1A1A] text-white border-b-4 border-b-[#FF1F1F]'
                    : 'text-[#C9CCD1] hover:text-white hover:bg-[#121212]'
                )}
              >
                <Code2 className="h-3 w-3" />
                {tab}
                {tab === 'lighthouseMetrics.json' && (
                  <span className="ml-1 px-1.5 py-0.2 rounded bg-[#FF1F1F] text-white text-[9px]">100/100</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Main Content Area with Staggered Line Animation */}
        <AnimatePresence mode="wait">
          {mode === 'code' ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="overflow-x-auto p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed max-h-[440px] overflow-y-auto bg-[#0A0A0A] text-white"
            >
              <table className="w-full border-collapse">
                <tbody>
                  {CODE_SNIPPETS[activeTab].lines.map((line) => (
                    <motion.tr
                      key={line.num}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: Math.min(line.num * 0.015, 0.35), duration: 0.2 }}
                      className={cn(
                        'transition-colors',
                        line.highlight ? 'bg-[#FF1F1F]/20 text-[#FF1F1F]' : 'hover:bg-[#1A1A1A]/5'
                      )}
                    >
                      <td className="w-10 select-none pr-4 text-right text-white/30">{line.num}</td>
                      <td className="whitespace-pre">
                        <span
                          className={cn(
                            line.highlight && 'text-[#FF1F1F] font-bold',
                            line.code.includes('import') && 'text-[#C9CCD1]',
                            line.code.includes('export') && 'text-[#C9CCD1]',
                            line.code.includes('//') && 'text-white/40 italic'
                          )}
                        >
                          {line.code}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ) : (
            <motion.div
              key="sandbox"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-10 bg-[#0A0A0A]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Score Gauge with Animated Circular Dial */}
                <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,31,31,0.15)] relative">
                  <div className="relative mb-3 flex h-28 w-28 items-center justify-center">
                    {/* SVG Circular Dial Meter */}
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-gray-200 fill-none"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-[#FF1F1F] fill-none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="264"
                        strokeDashoffset={264 - (264 * lighthouseScore) / 100}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold text-white">
                        {lighthouseScore}
                      </span>
                    </div>

                    <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FF1F1F] border border-white/10 animate-ping" />
                  </div>
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-white">Google Lighthouse</h4>
                  <p className="mt-1 font-mono text-xs text-[#C9CCD1]">Mobile &amp; Desktop 100/100</p>
                </div>

                {/* Core Web Vitals breakdown */}
                <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 md:col-span-2 space-y-4 shadow-[0_0_20px_rgba(255,31,31,0.15)]">
                  <div className="flex items-center justify-between border-b-2 border-white/10/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#FF1F1F]" />
                      <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">First Contentful Paint (FCP)</span>
                    </div>
                    <span className="font-mono text-xs font-black text-white bg-[#FF1F1F] px-2 py-0.5 rounded border border-white/10">0.38s (Instant)</span>
                  </div>
                  <div className="flex items-center justify-between border-b-2 border-white/10/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-[#C9CCD1]" />
                      <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">Largest Contentful Paint (LCP)</span>
                    </div>
                    <span className="font-mono text-xs font-black text-white bg-[#C9CCD1] px-2 py-0.5 rounded border border-white/10">0.74s (Optimal)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#FF1F1F]" />
                      <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">Cumulative Layout Shift (CLS)</span>
                    </div>
                    <span className="font-mono text-xs font-black text-white bg-black px-2 py-0.5 rounded border border-white/10">0.000 (Zero Shift)</span>
                  </div>
                </div>
              </div>

              {/* Interactive Component Teaser */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#FF1F1F] p-6 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
                <span className="sticker-badge bg-black text-white text-[10px] mb-2">Live Reactive Engine</span>
                <h4 className="mt-1 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-black uppercase text-white">
                  Hardware-Accelerated Next.js Runtime
                </h4>
                <p className="mt-2 max-w-xl mx-auto text-xs font-medium text-white">
                  Every page transition, 3D Canvas element, and ScrollTrigger timeline operates within a single requestAnimationFrame loop, preventing main-thread blocking.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Terminal Footer Bar */}
        <div className="flex flex-wrap items-center justify-between border-t-2 border-white/10 bg-[#121212] px-5 py-2.5 font-mono text-[11px] font-bold text-white">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#FF1F1F]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF1F1F] animate-pulse border border-white/10" /> PRODUCTION READY
            </span>
            <span className="hidden sm:inline">TypeScript 5.x Strict</span>
            <span className="hidden sm:inline">React 19 Server Components</span>
          </div>
          <div>
            <span>Next.js 16 + Vercel Edge</span>
          </div>
        </div>
      </div>
    </div>
  );
}
