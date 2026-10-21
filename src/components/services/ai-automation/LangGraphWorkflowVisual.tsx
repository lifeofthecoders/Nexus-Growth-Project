'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Workflow, 
  Send, 
  Play, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Activity,
  ArrowRight,
  Server
} from 'lucide-react';

export function LangGraphWorkflowVisual() {
  const [activeNode, setActiveNode] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [packetProgress, setPacketProgress] = useState(0);

  const nodes = [
    {
      id: 0,
      label: '01 INGESTION',
      sub: 'Multi-Source Webhook',
      icon: Database,
      status: '200 OK',
      latency: '18ms',
      metric: '5.2k events/sec',
      detail: 'Webhook payload parsed, verified against HMAC signature, sanitized into JSON schema.',
    },
    {
      id: 1,
      label: '02 NEURAL REASONER',
      sub: 'LangGraph + Claude 3.7',
      icon: Cpu,
      status: 'ACTIVE',
      latency: '142ms',
      metric: '99.4% confidence',
      detail: 'Autonomous chain of thought reasoning with zero hallucination guardrails.',
    },
    {
      id: 2,
      label: '03 VECTOR MEMORY',
      sub: 'pgvector + Hybrid RAG',
      icon: Server,
      status: 'INDEXED',
      latency: '34ms',
      metric: 'Cosine sim > 0.89',
      detail: 'Context retrieved from persistent company embeddings and deal history.',
    },
    {
      id: 3,
      label: '04 ACTION DISPATCH',
      sub: 'WhatsApp & CRM Sync',
      icon: Send,
      status: 'RESOLVED',
      latency: '62ms',
      metric: '0 human touches',
      detail: 'Outbound WhatsApp conversation triggered, CRM deal stage updated automatically.',
    },
  ];

  // Auto-cycle through nodes simulating continuous live execution
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-full max-w-6xl mx-auto my-12 rounded-3xl border border-white/10 bg-[#0E0E10] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.08)]">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 31, 31, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#FF1F1F] animate-ping" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            LIVE LANGGRAPH NEURAL STREAM
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] font-mono text-[#C9CCD1]">
            SUB-SECOND PIPELINE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/10 hover:border-white/30 text-xs font-mono text-white transition-all"
          >
            <Activity className={`w-3.5 h-3.5 ${isRunning ? 'text-emerald-400' : 'text-[#6E7177]'}`} />
            {isRunning ? 'EXECUTION RUNNING' : 'PAUSED'}
          </button>
        </div>
      </div>

      {/* Nodes & Connector Flow Diagram */}
      <div className="py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeNode === idx;
            return (
              <div key={node.id} className="relative flex flex-col">
                <button
                  onClick={() => setActiveNode(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex-1 ${
                    isActive
                      ? 'bg-[#18181B] border-[#FF1F1F] shadow-[0_0_30px_rgba(255,31,31,0.25)] translate-y-[-4px]'
                      : 'bg-[#121214] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Active Crimson Top Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]" />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${
                      isActive 
                        ? 'bg-[#FF1F1F] border-[#FF1F1F] text-white' 
                        : 'bg-[#1A1A1A] border-white/10 text-[#C9CCD1]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0A0A0A] border border-white/10 text-[#C9CCD1]">
                      {node.latency}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] font-bold text-[#FF1F1F] block">
                    {node.label}
                  </span>
                  <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white mt-0.5">
                    {node.sub}
                  </h4>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[10px] font-mono">
                    <span className="text-[#6E7177]">{node.metric}</span>
                    <span className={isActive ? 'text-emerald-400 font-bold' : 'text-[#6E7177]'}>
                      {node.status}
                    </span>
                  </div>
                </button>

                {/* Arrow Connector for Desktop */}
                {idx < nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0E0E10] border border-white/20 items-center justify-center text-[#FF1F1F]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Node Telemetry Terminal */}
      <div className="rounded-2xl border border-white/10 bg-[#070709] p-5 sm:p-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#6E7177]">ACTIVE STATE:</span>
            <span className="text-white font-bold">{nodes[activeNode].label}</span>
            <span className="text-[#FF1F1F]">({nodes[activeNode].sub})</span>
          </div>
          <div className="flex items-center gap-4 text-[#6E7177]">
            <span>LATENCY: <strong className="text-white">{nodes[activeNode].latency}</strong></span>
            <span>METRIC: <strong className="text-white">{nodes[activeNode].metric}</strong></span>
          </div>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] leading-relaxed">
          {nodes[activeNode].detail}
        </p>
      </div>
    </div>
  );
}
