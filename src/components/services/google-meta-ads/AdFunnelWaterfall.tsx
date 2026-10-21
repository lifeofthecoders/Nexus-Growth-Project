'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export function AdFunnelWaterfall() {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      step: '01',
      name: 'IMPRESSIONS',
      stat: '4,840,000',
      rate: '100%',
      drop: '-96.6%',
      color: '#6E7177',
      desc: 'Advantage+ & YouTube 4K Hook Testing',
    },
    {
      step: '02',
      name: 'QUALIFIED CLICKS',
      stat: '164,560',
      rate: '3.4% CTR',
      drop: '-94.9%',
      color: '#C9CCD1',
      desc: 'High-Intent Landing on Sub-Second Edge',
    },
    {
      step: '03',
      name: 'CONVERSIONS',
      stat: '8,390',
      rate: '5.1% CVR',
      drop: 'Final',
      color: '#FF1F1F',
      desc: 'Server-Side Meta CAPI Verified Checkout',
    },
    {
      step: '04',
      name: 'CLOSED REVENUE',
      stat: '$418,240',
      rate: '4.82x ROAS',
      drop: '+$331k Net',
      color: '#FFFFFF',
      desc: 'Total Closed Return on $86,800 Ad Spend',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0A0A0C] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#FF1F1F] animate-ping" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            CONVERSION FUNNEL WATERFALL TELEMETRY
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            META CAPI + GA4 100% MATCH
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#C9CCD1]">
          <span>BLENDED CAC: <strong className="text-emerald-400">$34.10</strong></span>
          <span>NET ROAS: <strong className="text-[#FF1F1F]">4.82X</strong></span>
        </div>
      </div>

      {/* Waterfall Graph Bars */}
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            // Simulated heights for waterfall progression
            const heights = ['h-64', 'h-48', 'h-36', 'h-56'];

            return (
              <button
                key={st.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${heights[idx]} ${
                  isActive
                    ? 'bg-[#18181B] border-[#FF1F1F] shadow-[0_0_30px_rgba(255,31,31,0.25)] translate-y-[-4px]'
                    : 'bg-[#121214] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF1F1F]">
                    {st.step}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0A0A0A] text-[#C9CCD1] border border-white/10">
                    {st.rate}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-[#6E7177] block">
                    {st.name}
                  </span>
                  <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl sm:text-3xl font-extrabold text-white block">
                    {st.stat}
                  </span>
                  <span className="font-mono text-[10px] text-[#C9CCD1] block pt-1">
                    {st.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Telemetry Summary */}
      <div className="rounded-2xl border border-white/10 bg-[#121214] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF1F1F] flex items-center justify-center text-white font-bold">
            ⚡
          </div>
          <div>
            <span className="text-white font-bold block">{steps[activeStep].name}: {steps[activeStep].stat}</span>
            <span className="text-[#6E7177] text-[11px]">{steps[activeStep].desc}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[#6E7177]">
          <span>CONVERSION RATE: <strong className="text-white">{steps[activeStep].rate}</strong></span>
          <span className="text-[#FF1F1F] font-bold">ATTRIBUTION LOCKED</span>
        </div>
      </div>
    </div>
  );
}
