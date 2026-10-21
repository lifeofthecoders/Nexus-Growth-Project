'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  MessageSquare, 
  Zap, 
  Activity, 
  Clock,
  Sparkles,
  Smartphone
} from 'lucide-react';

interface DealCard {
  id: string;
  name: string;
  avatar: string;
  source: string;
  value: string;
  stage: number; // 0: Ad Click, 1: WhatsApp AI, 2: Checkout, 3: Closed
  time: string;
}

export function KanbanPipelineBoard() {
  const [deals, setDeals] = useState<DealCard[]>([
    {
      id: 'd1',
      name: 'Camille Dubois',
      avatar: 'CD',
      source: 'Instagram 4K Reel',
      value: '$4,850',
      stage: 3,
      time: '12s ago',
    },
    {
      id: 'd2',
      name: 'Julian Vance',
      avatar: 'JV',
      source: 'YouTube Pre-Roll',
      value: '$12,400',
      stage: 2,
      time: '45s ago',
    },
    {
      id: 'd3',
      name: 'Sophia Sterling',
      avatar: 'SS',
      source: 'Meta Retargeting',
      value: '$3,200',
      stage: 1,
      time: '1m ago',
    },
    {
      id: 'd4',
      name: 'Liam Zhang',
      avatar: 'LZ',
      source: 'Direct Webchat Radar',
      value: '$8,900',
      stage: 0,
      time: 'Just now',
    },
  ]);

  const stages = [
    { title: '01 AD IMPRESSION', color: '#6E7177' },
    { title: '02 WHATSAPP AI', color: '#25D366' },
    { title: '03 1-CLICK CHECKOUT', color: '#FF1F1F' },
    { title: '04 CLOSED REVENUE', color: '#FFFFFF' },
  ];

  // Auto-advance stages to show live pipeline velocity
  useEffect(() => {
    const interval = setInterval(() => {
      setDeals((prev) =>
        prev.map((deal) => {
          if (deal.stage < 3) {
            return { ...deal, stage: deal.stage + 1, time: 'Just now' };
          } else {
            return { ...deal, stage: 0, time: 'New cycle' };
          }
        })
      );
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0A0A0C] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      {/* Pipeline Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            AUTONOMOUS CONVERSATIONAL KANBAN
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            WHATSAPP + APPLE PAY LIVE
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#C9CCD1]">
          <span>CYCLE VELOCITY: <strong className="text-white">&lt; 90 SECONDS</strong></span>
          <span>ARR PIPELINE: <strong className="text-[#FF1F1F]">$148,000 / WK</strong></span>
        </div>
      </div>

      {/* 4-Column Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        {stages.map((st, colIdx) => (
          <div key={st.title} className="rounded-2xl border border-white/10 bg-[#121214] p-4 flex flex-col min-h-[320px]">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="font-mono text-[10px] font-black uppercase text-white">
                {st.title}
              </span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: st.color }} />
            </div>

            {/* Cards inside this stage */}
            <div className="space-y-3 flex-1">
              <AnimatePresence>
                {deals
                  .filter((d) => d.stage === colIdx)
                  .map((d) => (
                    <motion.div
                      key={d.id}
                      layout
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="p-3.5 rounded-xl bg-[#1A1A1D] border border-white/10 shadow-lg space-y-2 hover:border-[#FF1F1F]/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#FF1F1F] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                            {d.avatar}
                          </div>
                          <span className="text-xs font-bold text-white">{d.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-[#6E7177]">{d.time}</span>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono pt-1">
                        <span className="text-[#C9CCD1]">{d.source}</span>
                        <span className="text-[#FF1F1F] font-bold">{d.value}</span>
                      </div>

                      {colIdx === 3 && (
                        <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded px-1.5 py-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Auto-Synced to CRM
                        </div>
                      )}
                    </motion.div>
                  ))}
              </AnimatePresence>

              {deals.filter((d) => d.stage === colIdx).length === 0 && (
                <div className="h-full flex items-center justify-center py-12 text-[#6E7177] font-mono text-[10px]">
                  Awaiting next deal...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center font-mono">
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[10px] text-[#6E7177] block">WHATSAPP OPEN RATE</span>
          <span className="text-base font-bold text-emerald-400">98.2%</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[10px] text-[#6E7177] block">AVG CHECKOUT TIME</span>
          <span className="text-base font-bold text-[#FF1F1F]">22 Seconds</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[10px] text-[#6E7177] block">AUTOMATED RECOVERY</span>
          <span className="text-base font-bold text-white">+42.8%</span>
        </div>
        <div className="p-3 rounded-xl bg-[#121214] border border-white/10">
          <span className="text-[10px] text-[#6E7177] block">HUMAN INTERVENTION</span>
          <span className="text-base font-bold text-white">0 Touches</span>
        </div>
      </div>
    </div>
  );
}
