'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Check, RefreshCw, Eye } from 'lucide-react';

export function SvgLogoConstructionCanvas() {
  const [showGrid, setShowGrid] = useState(true);
  const [activeSwatch, setActiveSwatch] = useState(0);

  const swatches = [
    { name: 'SHU CRIMSON', hex: '#FF1F1F', desc: 'Imperial vermilion accent' },
    { name: 'KURO OBSIDIAN', hex: '#0A0A0A', desc: 'Deep warm architectural base' },
    { name: 'GIN STEEL', hex: '#C9CCD1', desc: 'Japanese lacquer metallic fold' },
    { name: 'HAKU PURE', hex: '#FFFFFF', desc: 'High-contrast editorial white' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0E0E10] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      {/* Canvas Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#FF1F1F]" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            GEOMETRIC MONOGRAM CONSTRUCTION
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            GOLDEN RATIO 1:1.618
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/10 hover:border-white/30 text-xs font-mono text-white transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-[#FF1F1F]" />
            {showGrid ? 'CAD GUIDES: ON' : 'CAD GUIDES: OFF'}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* SVG Drawing Canvas */}
        <div className="lg:col-span-7 aspect-square max-w-[420px] mx-auto w-full relative flex items-center justify-center rounded-2xl bg-[#070709] border border-white/10 p-6">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full overflow-visible"
          >
            {/* Construction Grid Lines */}
            {showGrid && (
              <g stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3">
                <line x1="0" y1="150" x2="300" y2="150" />
                <line x1="150" y1="0" x2="150" y2="300" />
                <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(255, 31, 31, 0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="150" cy="150" r="90" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="150" cy="150" r="50" fill="none" stroke="rgba(255, 31, 31, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="20" y1="20" x2="280" y2="280" />
                <line x1="280" y1="20" x2="20" y2="280" />
              </g>
            )}

            {/* Solid Monogram Geometry (NEXUS Fold) */}
            <motion.path
              d="M 85 220 L 85 80 L 135 80 L 195 190 L 195 80 L 225 80 L 225 220 L 175 220 L 115 110 L 115 220 Z"
              fill={swatches[activeSwatch].hex === '#0A0A0A' ? '#1F1F1F' : swatches[activeSwatch].hex}
              stroke="#FFFFFF"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Vermilion Direction Arrow Accent */}
            <motion.path
              d="M 195 125 L 245 75 L 245 125 Z"
              fill="#FF1F1F"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          </svg>

          {/* Golden Angle Marker */}
          <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#6E7177]">
            R = 1.618033 • ∠ 51.8°
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#FF1F1F]">
            VECTOR PASS: VERIFIED
          </div>
        </div>

        {/* Lacquer Swatch Palette & Attributes */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#FF1F1F] font-bold tracking-widest uppercase">
              TACTILE COLOR SYSTEM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%]">
              Lacquer &amp; Mineral Swatches
            </h3>
            <p className="text-xs text-[#C9CCD1] font-mono">
              Click to preview color dominance on vector monogram.
            </p>
          </div>

          {/* Interactive Swatch Stack */}
          <div className="space-y-2.5">
            {swatches.map((swatch, idx) => (
              <button
                key={swatch.name}
                onClick={() => setActiveSwatch(idx)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                  activeSwatch === idx
                    ? 'bg-[#1A1A1A] border-[#FF1F1F] shadow-[0_0_16px_rgba(255,31,31,0.2)]'
                    : 'bg-[#121214] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg border border-white/20 shadow-inner"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="text-left">
                    <span className="font-mono text-xs font-bold text-white block">
                      {swatch.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#6E7177]">
                      {swatch.desc}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs text-[#C9CCD1]">
                  {swatch.hex}
                </span>
              </button>
            ))}
          </div>

          {/* Clan Triad Attributes */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono text-[10px]">
            <div className="p-2 rounded-lg bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] block font-bold">UNCOMPROMISING</span>
              <span className="text-white">Precision</span>
            </div>
            <div className="p-2 rounded-lg bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] block font-bold">ZERO TREND</span>
              <span className="text-white">Chasing</span>
            </div>
            <div className="p-2 rounded-lg bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] block font-bold">GENERATIONAL</span>
              <span className="text-white">Recall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
