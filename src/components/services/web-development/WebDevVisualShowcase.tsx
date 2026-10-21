'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Layers, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Code2,
  Zap,
  Gauge
} from 'lucide-react';

export function WireframeLiveToggle() {
  const [mode, setMode] = useState<'live' | 'wireframe'>('live');

  return (
    <div className="w-full max-w-5xl mx-auto my-8 rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_0_50px_rgba(255,31,31,0.08)]">
      {/* Chrome Browser Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF1F1F]/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 font-mono text-[11px] text-[#6E7177] hidden sm:inline">
            https://nexus-growth.co/production-preview
          </span>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1 bg-[#0A0A0A] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setMode('wireframe')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
              mode === 'wireframe'
                ? 'bg-[#FF1F1F] text-white shadow-[0_0_12px_rgba(255,31,31,0.4)]'
                : 'text-[#6E7177] hover:text-white'
            }`}
          >
            01 WIREFRAME
          </button>
          <button
            onClick={() => setMode('live')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
              mode === 'live'
                ? 'bg-[#FF1F1F] text-white shadow-[0_0_12px_rgba(255,31,31,0.4)]'
                : 'text-[#6E7177] hover:text-white'
            }`}
          >
            02 LIVE 60FPS UI
          </button>
        </div>
      </div>

      {/* Preview Screen */}
      <div className="relative min-h-[380px] sm:min-h-[440px] p-6 sm:p-10 overflow-hidden bg-[#0A0A0A]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,31,31,0.12),transparent_60%)] pointer-events-none" />

        <AnimatePresence mode="wait">
          {mode === 'wireframe' ? (
            <motion.div
              key="wireframe"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 font-mono text-xs text-[#6E7177]"
            >
              {/* Wireframe Nav */}
              <div className="flex items-center justify-between pb-4 border-b border-dashed border-white/20">
                <div className="h-6 w-28 border border-dashed border-white/40 rounded flex items-center justify-center text-[10px] text-white/50">
                  LOGO_SLOT
                </div>
                <div className="flex gap-4">
                  <div className="h-4 w-14 border border-dashed border-white/20 rounded" />
                  <div className="h-4 w-14 border border-dashed border-white/20 rounded" />
                  <div className="h-4 w-14 border border-dashed border-white/20 rounded" />
                </div>
                <div className="h-6 w-20 border border-dashed border-[#FF1F1F]/60 rounded bg-[#FF1F1F]/10 text-[10px] text-[#FF1F1F] flex items-center justify-center">
                  CTA_BTN
                </div>
              </div>

              {/* Wireframe Hero Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
                <div className="md:col-span-7 space-y-4">
                  <div className="h-4 w-32 border border-dashed border-[#FF1F1F]/40 bg-[#FF1F1F]/5 text-[10px] text-[#FF1F1F] px-2 flex items-center">
                    SYS_HERO_BADGE
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 w-full border border-dashed border-white/30 rounded bg-white/5" />
                    <div className="h-8 w-4/5 border border-dashed border-white/30 rounded bg-white/5" />
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="h-3 w-full border border-dashed border-white/10 rounded" />
                    <div className="h-3 w-3/4 border border-dashed border-white/10 rounded" />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="h-10 w-32 border border-dashed border-[#FF1F1F] rounded flex items-center justify-center text-[#FF1F1F]">
                      PRIMARY_ACTION
                    </div>
                    <div className="h-10 w-28 border border-dashed border-white/20 rounded flex items-center justify-center text-white/40">
                      DOCS_LINK
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 h-56 border-2 border-dashed border-[#FF1F1F]/40 rounded-xl bg-white/[0.02] flex flex-col items-center justify-center p-4 text-center">
                  <Cpu className="w-10 h-10 text-[#FF1F1F]/60 mb-2 animate-pulse" />
                  <span className="text-[11px] text-white/70">REACT_19_CANVAS_SLOT</span>
                  <span className="text-[9px] text-[#6E7177] mt-1">GSAP ScrollTrigger • 60FPS Pin</span>
                </div>
              </div>

              {/* Blueprint Grid Specs */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-dashed border-white/10">
                <div className="p-2 border border-dashed border-white/20 rounded text-center">
                  <span className="text-[9px] block text-white/40">GRID SYSTEM</span>
                  <span className="text-white text-[11px] font-bold">12 COL / 24PX GUTTER</span>
                </div>
                <div className="p-2 border border-dashed border-white/20 rounded text-center">
                  <span className="text-[9px] block text-white/40">TYPOGRAPHY RATIO</span>
                  <span className="text-white text-[11px] font-bold">1.333 PERFECT FOURTH</span>
                </div>
                <div className="p-2 border border-dashed border-white/20 rounded text-center">
                  <span className="text-[9px] block text-white/40">CORE LATENCY</span>
                  <span className="text-[#FF1F1F] text-[11px] font-bold">&lt; 280MS TTFB</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Live Nav */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-['Space_Grotesk'] text-sm font-black text-white tracking-wider">
                    NEXUS<span className="text-[#FF1F1F]">.DEV</span>
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FF1F1F]/20 text-[#FF1F1F] border border-[#FF1F1F]/40 font-mono">
                    PROD
                  </span>
                </div>
                <div className="hidden sm:flex gap-6 text-xs text-[#C9CCD1] font-mono">
                  <span className="text-white font-bold hover:text-[#FF1F1F] cursor-pointer">Architecture</span>
                  <span className="hover:text-white cursor-pointer">Benchmarks</span>
                  <span className="hover:text-white cursor-pointer">Releases</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF1F1F] to-[#8B0000] text-xs font-bold text-white shadow-[0_0_16px_rgba(255,31,31,0.3)]">
                  Launch Console
                </div>
              </div>

              {/* Live Hero UI */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-white/10 text-[11px] font-mono text-[#C9CCD1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F] animate-ping" />
                    Next.js 16.3 + Turbopack Active
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] leading-none">
                    ENGINEERED FOR <span className="text-[#FF1F1F]">PULSE REVENUE</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9CCD1] leading-relaxed">
                    Zero hydration delay. Headless edge caching across 310 global PoPs.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF1F1F] to-[#8B0000] text-white font-bold text-xs shadow-[0_0_20px_rgba(255,31,31,0.35)] hover:scale-105 transition-all">
                      Test Live Edge Speed
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#1A1A1A] border border-white/10 text-white font-mono text-xs hover:border-white/30 transition-all">
                      Inspect DevTools
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 h-56 rounded-xl border border-white/10 bg-[#121212] p-4 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_0_30px_rgba(255,31,31,0.05)]">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#6E7177]">
                    <span>CHROME DEVTOOLS</span>
                    <span className="text-[#FF1F1F]">60.0 FPS</span>
                  </div>

                  <div className="space-y-2 my-auto">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#C9CCD1] font-mono">Performance Score</span>
                      <span className="text-emerald-400 font-bold font-mono">100 / 100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full w-full" />
                    </div>

                    <div className="flex justify-between items-center text-xs pt-2">
                      <span className="text-[#C9CCD1] font-mono">First Contentful Paint</span>
                      <span className="text-[#FF1F1F] font-bold font-mono">0.32s</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#FF1F1F] h-full rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-white/10 text-[#6E7177]">
                    <span>Hydration: 0ms</span>
                    <span className="text-white">Bundle: 42.1 kB</span>
                  </div>
                </div>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-center">
                  <span className="text-[10px] block font-mono text-[#6E7177]">CACHE HIT RATE</span>
                  <span className="text-white text-base font-bold font-mono">99.8%</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-center">
                  <span className="text-[10px] block font-mono text-[#6E7177]">INERTIA SCROLL</span>
                  <span className="text-white text-base font-bold font-mono">60 FPS</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-center">
                  <span className="text-[10px] block font-mono text-[#6E7177]">EDGE TIME</span>
                  <span className="text-[#FF1F1F] text-base font-bold font-mono">18ms</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HorizontalSprintPipeline() {
  const [activeSprint, setActiveSprint] = useState(0);

  const sprints = [
    {
      num: '01',
      title: 'Architectural Wireframe',
      time: 'Week 1',
      metric: 'Zero Layout Shift',
      tag: 'STRUCTURE',
      desc: 'Route hierarchy, schema modeling, conversion paths.',
    },
    {
      num: '02',
      title: 'Motion Choreography',
      time: 'Week 2–3',
      metric: '60FPS Guaranteed',
      tag: 'INTERACTION',
      desc: 'GSAP ScrollTrigger curves and custom Lenis friction.',
    },
    {
      num: '03',
      title: 'React 19 Core Engineering',
      time: 'Week 4–5',
      metric: '< 45kB Edge Bundle',
      tag: 'RUNTIME',
      desc: 'Next.js 16 server components with zero client bloat.',
    },
    {
      num: '04',
      title: 'Headless CMS & Commerce',
      time: 'Week 6',
      metric: '1-Click Publishing',
      tag: 'PIPELINE',
      desc: 'Sanity or Shopify Storefront GraphQL webhooks.',
    },
    {
      num: '05',
      title: 'Core Vitals 99+ Gate',
      time: 'Week 7',
      metric: '100% Mobile Pass',
      tag: 'DEPLOYMENT',
      desc: 'Automated CI/CD edge deployment across 310 PoPs.',
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Horizontal Connected Timeline Bar */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
        <div 
          className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#FF1F1F] to-[#8B0000] -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeSprint / (sprints.length - 1)) * 100}%` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
          {sprints.map((s, idx) => {
            const isActive = activeSprint === idx;
            return (
              <button
                key={s.num}
                onClick={() => setActiveSprint(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-[#1A1A1A] border-[#FF1F1F] shadow-[0_0_24px_rgba(255,31,31,0.25)] translate-y-[-4px]'
                    : 'bg-[#121212] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-black ${isActive ? 'text-[#FF1F1F]' : 'text-[#6E7177]'}`}>
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#6E7177]">{s.time}</span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white leading-tight">
                  {s.title}
                </h4>
                <span className="inline-block mt-2 font-mono text-[10px] text-[#FF1F1F]">
                  {s.metric}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Telemetry Card */}
      <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF1F1F]/20 border border-[#FF1F1F]/40 text-[#FF1F1F] font-mono text-xs font-bold">
              PHASE {sprints[activeSprint].num} • {sprints[activeSprint].tag}
            </span>
            <span className="font-mono text-xs text-[#C9CCD1]">{sprints[activeSprint].time}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%]">
            {sprints[activeSprint].title}
          </h3>
          <p className="text-xs sm:text-sm text-[#C9CCD1] font-sans">
            {sprints[activeSprint].desc}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
          <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-center w-full md:w-auto">
            <span className="block font-mono text-[10px] text-[#6E7177]">TARGET BENCHMARK</span>
            <span className="text-lg font-bold font-mono text-[#FF1F1F] block mt-0.5">
              {sprints[activeSprint].metric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
