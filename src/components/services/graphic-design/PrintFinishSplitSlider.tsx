'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, Box, Layers, Check } from 'lucide-react';

export function PrintFinishSplitSlider() {
  const [splitPos, setSplitPos] = useState(50); // percentage

  return (
    <div className="w-full max-w-5xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0A0A0C] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#FF1F1F]" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            TACTILE PRINT SPECIMEN • BEFORE &amp; AFTER FINISH
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            FEDRIGONI 380GSM + RED HOT FOIL
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#6E7177]">
          <span>DIE-LINE: <strong className="text-white">#882-C</strong></span>
          <span>CURING: <strong className="text-[#FF1F1F]">UV SILK</strong></span>
        </div>
      </div>

      {/* Main Split-Slider View */}
      <div className="py-8 space-y-4">
        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-black select-none group">
          {/* Before: Raw Unbranded Mockup (Left Side) */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-75 brightness-75"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1000&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono text-[#6E7177]">
              BEFORE: RAW CARDBOARD
            </div>
          </div>

          {/* After: Luxury Embossed Foil Finish (Right Side, clipped) */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter saturate-125 contrast-125 brightness-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1000&q=80')`,
              clipPath: `inset(0 0 0 ${splitPos}%)`,
            }}
          >
            {/* Red Foil Sheen Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1F1F]/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#FF1F1F]/90 backdrop-blur border border-[#FF1F1F]/50 text-[10px] font-mono text-white font-bold">
              AFTER: DEBOSSED RED FOIL STAMP
            </div>
          </div>

          {/* Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(255,31,31,0.8)]"
            style={{ left: `${splitPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#FF1F1F] flex items-center justify-center text-white text-[10px] font-mono shadow-lg">
              ↔
            </div>
          </div>

          {/* Transparent Drag Input */}
          <input 
            type="range" 
            min="5" 
            max="95" 
            value={splitPos} 
            onChange={(e) => setSplitPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7177] px-2 max-w-4xl mx-auto">
          <span>◄ Drag slider to inspect embossed foil transformation ►</span>
          <span className="text-[#FF1F1F]">PHYSICAL PRINT CRAFTSMANSHIP</span>
        </div>
      </div>

      {/* Floating 3D Foil Material Attributes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-center font-mono text-[10px]">
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[#6E7177] block">PAPER STOCK</span>
          <span className="text-white font-bold mt-0.5 block">Fedrigoni 380gsm</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[#6E7177] block">STAMPING</span>
          <span className="text-[#FF1F1F] font-bold mt-0.5 block">Micro-Foil Hot Stamp</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[#6E7177] block">COLOR ACCURACY</span>
          <span className="text-white font-bold mt-0.5 block">100% Pantone Match</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[#6E7177] block">SUSTAINABILITY</span>
          <span className="text-emerald-400 font-bold mt-0.5 block">FSC Certified</span>
        </div>
      </div>
    </div>
  );
}
