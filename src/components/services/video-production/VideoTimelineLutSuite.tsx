'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Sliders, 
  Film, 
  Sparkles, 
  Volume2, 
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';

export function VideoTimelineLutSuite() {
  const [lutSplit, setLutSplit] = useState(50); // percentage split for before/after LUT
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrubberPos, setScrubberPos] = useState(28); // percentage

  return (
    <div className="w-full max-w-6xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0A0A0C] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_70px_rgba(255,31,31,0.08)]">
      {/* Studio Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#FF1F1F] animate-pulse" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            DAVINCI COLOR &amp; RETENTION LAB
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            KODAK 2383 33-POINT 3D LUT
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#C9CCD1]">
          <span>TC: <strong className="text-white">00:00:42:18</strong></span>
          <span>FPS: <strong className="text-[#FF1F1F]">23.976 DCI</strong></span>
        </div>
      </div>

      {/* Main Dual Stage: LUT Split-Screen Preview + Retention Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center">
        {/* Left / Top: Interactive LUT Split-Screen View */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 bg-black select-none group">
            {/* Raw Rec.709 Image (Left Side) */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter grayscale-[35%] brightness-90 contrast-90"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1000&q=80')`,
              }}
            />

            {/* Graded Kodak 2383 Emulation (Right Side, clipped) */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter saturate-150 contrast-125 brightness-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1000&q=80')`,
                clipPath: `inset(0 0 0 ${lutSplit}%)`,
              }}
            />

            {/* Split Slider Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(255,31,31,0.8)]"
              style={{ left: `${lutSplit}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#FF1F1F] flex items-center justify-center text-white text-[10px] font-mono shadow-lg">
                LUT
              </div>
            </div>

            {/* Transparent Drag Overlay */}
            <input 
              type="range" 
              min="5" 
              max="95" 
              value={lutSplit} 
              onChange={(e) => setLutSplit(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono text-[#C9CCD1] pointer-events-none">
              RAW LOG
            </div>
            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#FF1F1F]/80 backdrop-blur border border-[#FF1F1F]/40 text-[10px] font-mono text-white font-bold pointer-events-none">
              KODAK 2383 GRADE
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7177] px-1">
            <span>◄ Drag slider to compare Raw Log vs Kodak 2383 Grade ►</span>
            <span className="text-[#FF1F1F]">ARRI ALEXA MINI LF</span>
          </div>
        </div>

        {/* Right / Bottom: Algorithmic Retention Decay Curve */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#FF1F1F] font-bold tracking-widest uppercase">
              RETENTION ARCHITECTURE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%]">
              Algorithmic Audience Grip
            </h3>
            <p className="text-xs text-[#C9CCD1] font-mono">
              Pacing engineered to beat feed drop-off in the critical 3-second window.
            </p>
          </div>

          {/* Retention Curve Chart Visual */}
          <div className="rounded-2xl border border-white/10 bg-[#121214] p-5 space-y-4">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-bold">RETENTION AT 3 SECONDS</span>
              <span className="text-[#FF1F1F] font-black text-sm">92.4% (TOP 1%)</span>
            </div>

            {/* Waveform / Curve Visualization */}
            <div className="relative h-24 w-full flex items-end gap-1.5 pt-2">
              {[95, 94, 92, 91, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 82, 84].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className={`w-full rounded-t transition-all ${
                      i < 3 
                        ? 'bg-[#FF1F1F] shadow-[0_0_8px_rgba(255,31,31,0.5)]' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    style={{ height: `${h * 0.8}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[10px] font-mono text-[#6E7177] pt-2 border-t border-white/10">
              <span>00:00 (HOOK)</span>
              <span>00:30 (CORE)</span>
              <span>01:00 (CTA DROP)</span>
            </div>
          </div>

          {/* Metric Triad */}
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
            <div className="p-2.5 rounded-xl bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] text-xs font-black block">4.2X</span>
              <span className="text-white">ROAS Lift</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] text-xs font-black block">85.4%</span>
              <span className="text-white">Completion</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#121214] border border-white/10">
              <span className="text-[#FF1F1F] text-xs font-black block">24FPS</span>
              <span className="text-white">Cinematic</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Timeline Scrubber Bar */}
      <div className="mt-4 pt-6 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-[#C9CCD1]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-[#FF1F1F] text-white flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_12px_rgba(255,31,31,0.4)]"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            </button>
            <span className="text-white font-bold">V1: AURA_HORIZON_MASTER_4K.MOV</span>
          </div>
          <span className="text-[#6E7177]">TIMELINE SCRUBBER</span>
        </div>

        {/* Scrubber Track */}
        <div className="relative h-7 bg-[#121214] rounded-lg border border-white/10 overflow-hidden flex items-center px-2">
          {/* Audio Waveform Mock Bars */}
          <div className="absolute inset-0 flex items-center justify-between px-3 opacity-20 pointer-events-none">
            {Array.from({ length: 48 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-white rounded"
                style={{ height: `${20 + ((i * 7) % 65)}%` }}
              />
            ))}
          </div>

          {/* Scrubber Playhead */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-[#FF1F1F] shadow-[0_0_10px_#FF1F1F]"
            style={{ left: `${scrubberPos}%` }}
          >
            <div className="w-3 h-3 rounded-full bg-[#FF1F1F] -translate-x-1.5 -translate-y-1 shadow-md" />
          </div>

          {/* Scrubber Input */}
          <input 
            type="range"
            min="0"
            max="100"
            value={scrubberPos}
            onChange={(e) => setScrubberPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
          />
        </div>
      </div>
    </div>
  );
}
