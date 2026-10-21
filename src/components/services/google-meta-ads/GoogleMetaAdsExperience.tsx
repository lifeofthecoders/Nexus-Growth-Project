'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3, 
  RefreshCw,
  Activity,
  Layers,
  Sliders,
  Crosshair,
  Wifi
} from 'lucide-react';
import { AdFunnelWaterfall } from './AdFunnelWaterfall';
import { cn } from '@/lib/utils';

// Simulated Campaigns in Media OS
interface AdCampaign {
  id: string;
  name: string;
  platform: string;
  budget: string;
  spend: string;
  revenue: string;
  roas: string;
  roasNum: number;
  cac: string;
  status: 'ACTIVE' | 'SCALING' | 'OPTIMIZING';
  color: string;
}

const CAMPAIGNS: AdCampaign[] = [
  {
    id: 'c1',
    name: 'Q4 Global Video Prospecting',
    platform: 'Meta Advantage+ • Instagram & TikTok',
    budget: '$85,000 / mo',
    spend: '$62,400',
    revenue: '$318,240',
    roas: '5.10x',
    roasNum: 5.10,
    cac: '$36.20',
    status: 'SCALING',
    color: '#FF1F1F'
  },
  {
    id: 'c2',
    name: 'Google PMax & Search Alpha',
    platform: 'Google Search & YouTube In-Stream',
    budget: '$50,000 / mo',
    spend: '$41,800',
    revenue: '$196,460',
    roas: '4.70x',
    roasNum: 4.70,
    cac: '$44.80',
    status: 'ACTIVE',
    color: '#FF1F1F'
  },
  {
    id: 'c3',
    name: 'Dynamic DPA High-LTV Retargeting',
    platform: 'Meta CAPI + Omnichannel Webhooks',
    budget: '$30,000 / mo',
    spend: '$24,200',
    revenue: '$157,300',
    roas: '6.50x',
    roasNum: 6.50,
    cac: '$21.40',
    status: 'OPTIMIZING',
    color: '#C9CCD1'
  }
];

// Funnel Stages
const FUNNEL_STAGES = [
  {
    stage: 'STAGE 01 • TOFU',
    name: 'Algorithmic Video Prospecting',
    volume: '2,420,000 Impressions',
    rate: '5.9% High CTR',
    desc: 'High-velocity 4K vertical creative testing matrix eliminating ad fatigue.',
    color: '#C9CCD1'
  },
  {
    stage: 'STAGE 02 • MOFU',
    name: 'Objection Teardown Retargeting',
    volume: '142,800 Engaged Clicks',
    rate: '68% Hook Retention',
    desc: 'Dynamic social proof and risk-reversal video sequences delivered to warm viewers.',
    color: '#FF1F1F'
  },
  {
    stage: 'STAGE 03 • BOFU',
    name: 'Instant Checkout & CAPI Sync',
    volume: '12,480 Closed Purchases',
    rate: '4.62x Blended ROAS',
    desc: 'Server-side CAPI with 98.6% event match quality and offline CRM reconciliation.',
    color: '#FF1F1F'
  }
];

export default function GoogleMetaAdsExperience() {
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const activeCampaign = CAMPAIGNS[activeCampaignIndex];

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

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FF1F1F] selection:text-white overflow-hidden">
      {/* 1. Tactical Crosshair / Reticle Custom Cursor */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          style={{ x: mouseX, y: mouseY }}
        >
          {/* Outer Reticle Ring with Rotating Corner Ticks */}
          <div className="relative w-8 h-8 rounded-full border border-[#FF1F1F]/80 flex items-center justify-center shadow-[0_0_24px_rgba(255,31,31,0.25)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F] animate-ping" />
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#FF1F1F]" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#FF1F1F]" />
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#FF1F1F]" />
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#FF1F1F]" />
          </div>
        </motion.div>
      )}

      {/* 2. Moving Moving Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#CC1919]/20 via-[#8B0000]/15 to-transparent blur-[140px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.95, 1.15, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-600/15 via-indigo-900/15 to-transparent blur-[140px] will-change-transform"
        />
      </div>

      {/* Header Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F1F] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              DISCIPLINE 07 • NEXUS MEDIA OS • PERFORMANCE ACQUISITION
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#6E7177]">
            <span className="flex items-center gap-1 text-[#FF1F1F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F]" /> CAPI MATCH 98.6%
            </span>
            <span>•</span>
            <span>BLENDED ROAS 4.62X</span>
            <span>•</span>
            <span>ZERO AD FATIGUE</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF1F1F]/30 bg-[#FF1F1F]/10 text-[#FF1F1F] font-mono text-xs">
            <Target className="w-3.5 h-3.5" />
            <span>Algorithm-Proof Paid Growth Architecture</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.86] text-white">
            Performance Media at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white">
              Aggressive Scale.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] max-w-xl leading-relaxed">
            Direct response creative tied to sub-second server-side telemetry.
          </p>
        </div>

        {/* Interactive Conversion Funnel Waterfall */}
        <AdFunnelWaterfall />
      </section>

      {/* Interactive NEXUS MEDIA OS Dashboard Simulator */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              MEDIA OS TELEMETRY
            </span>
            <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
              Live Mission Control Dashboard
            </h2>
          </div>

          {/* Campaign Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-[#1A1A1A]/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {CAMPAIGNS.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCampaignIndex(idx)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all",
                  activeCampaignIndex === idx 
                    ? "bg-[#FF1F1F] text-white shadow-[0_0_24px_rgba(255,31,31,0.25)]" 
                    : "text-[#6E7177] hover:text-white"
                )}
              >
                {c.name.split(' ')[0]} Sprint
              </button>
            ))}
          </div>
        </div>

        {/* The Dashboard Shell */}
        <div className="rounded-3xl border border-white/15 bg-[#121212] p-6 md:p-10 shadow-2xl backdrop-blur-md space-y-8 relative overflow-hidden">
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF1F1F] to-transparent" />

          {/* Top Bar of Console */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E7177]">ACTIVE MEDIA SUITE</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">{activeCampaign.name}</h3>
              <p className="font-mono text-xs text-[#6E7177] mt-0.5">{activeCampaign.platform}</p>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#FF1F1F]/10 border border-[#FF1F1F]/30 text-[#FF1F1F] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF1F1F] animate-pulse" />
                {activeCampaign.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1A1A1A]/5 border border-white/10 text-white">
                BUDGET: {activeCampaign.budget}
              </span>
            </div>
          </div>

          {/* 4 Metric Telemetry Cards with Glowing Edge Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 relative overflow-hidden group">
              <span className="font-mono text-[10px] text-[#6E7177] block uppercase">MONTHLY AD SPEND</span>
              <span className="font-mono text-3xl font-bold text-white block mt-1">{activeCampaign.spend}</span>
              <span className="font-mono text-[11px] text-[#FF1F1F] mt-2 block">100% Pacing Guardrail</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A1A1A]/5 border border-[#FF1F1F]/30 relative overflow-hidden group shadow-[0_0_24px_rgba(255,31,31,0.25)]">
              <span className="font-mono text-[10px] text-[#FF1F1F] block uppercase font-bold">VERIFIED BLENDED ROAS</span>
              <span className="font-mono text-3xl font-bold text-[#FF1F1F] block mt-1">{activeCampaign.roas}</span>
              <span className="font-mono text-[11px] text-[#C9CCD1] mt-2 block">4.2x Contractual Target</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 relative overflow-hidden group">
              <span className="font-mono text-[10px] text-[#6E7177] block uppercase">ATTRIBUTED NET REVENUE</span>
              <span className="font-mono text-3xl font-bold text-white block mt-1">{activeCampaign.revenue}</span>
              <span className="font-mono text-[11px] text-[#FF1F1F] mt-2 block">+$255.8k Net Profit</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A1A1A]/5 border border-white/10 relative overflow-hidden group">
              <span className="font-mono text-[10px] text-[#6E7177] block uppercase">BLENDED ACQUISITION (CAC)</span>
              <span className="font-mono text-3xl font-bold text-white block mt-1">{activeCampaign.cac}</span>
              <span className="font-mono text-[11px] text-[#C9CCD1] mt-2 block">-34% vs Industry Benchmark</span>
            </div>
          </div>

          {/* Audience Funnel Stream Diagram */}
          <div className="pt-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#6E7177] font-bold block">
              Omnichannel Funnel Velocity &amp; CAPI Pipeline
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FUNNEL_STAGES.map((stg) => (
                <div key={stg.stage} className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#6E7177] font-bold">{stg.stage}</span>
                    <span className="font-mono text-xs font-bold text-[#FF1F1F]">{stg.rate}</span>
                  </div>
                  <h4 className="font-bold text-base text-white">{stg.name}</h4>
                  <p className="font-mono text-xs text-[#6E7177]">{stg.desc}</p>
                  <p className="font-mono text-xs text-white/90 pt-2 border-t border-white/10 font-bold">
                    {stg.volume}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="rounded-3xl border border-[#FF1F1F]/40 bg-gradient-to-r from-[#8B0000]/40 via-[#8B0000]/30 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_24px_rgba(255,31,31,0.25)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              PERFORMANCE AUDIT &amp; SPRINT
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Scale Your Paid Media Acquisition.
            </h3>
            <p className="font-mono text-sm text-[#C9CCD1] leading-relaxed">
              Book a 30-minute growth triage. We will audit your Meta &amp; Google ad accounts, diagnose CAPI tracking loss, and formulate a 4.2x ROAS scaling sprint.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-[#CC1919] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(255,31,31,0.25)] transition-all"
              >
                <span>Request Paid Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-[#6E7177]">
                Direct media buyer audit • No junior account reps
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
