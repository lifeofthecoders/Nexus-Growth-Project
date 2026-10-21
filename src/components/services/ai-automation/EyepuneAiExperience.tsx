'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Megaphone, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Globe, 
  Workflow, 
  Database,
  BarChart3,
  Calendar,
  Search,
  ExternalLink,
  ChevronDown,
  Activity,
  Code2,
  Sliders,
  Check,
  Building2,
  PhoneCall,
  FileSpreadsheet,
  Network
} from 'lucide-react';
import { LangGraphWorkflowVisual } from './LangGraphWorkflowVisual';

export function EyepuneAiExperience() {
  // Cursor tracking state
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [eyePos, setEyePos] = useState({ x: -100, y: -100 });
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Growth Audit Calculator State
  const [auditStep, setAuditStep] = useState(1);
  const [companyScale, setCompanyScale] = useState('$50k - $200k/mo');
  const [primaryBottleneck, setPrimaryBottleneck] = useState('Outbound Lead Gen & Sales');
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Mouse Listener & Smooth Lerp Loop
  useEffect(() => {
    let animFrame: number;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, [role="button"], .cursor-pointer');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth Lerp for trailing ring & eye follower
    let currentTrailX = -100;
    let currentTrailY = -100;
    let currentEyeX = -100;
    let currentEyeY = -100;

    const loop = () => {
      // Lerp for outer ring (faster)
      currentTrailX += (targetX - currentTrailX) * 0.22;
      currentTrailY += (targetY - currentTrailY) * 0.22;
      setTrailingPos({ x: currentTrailX, y: currentTrailY });

      // Lerp for cybernetic eye (slower, organic floating inertia)
      currentEyeX += (targetX - currentEyeX) * 0.12;
      currentEyeY += (targetY - currentEyeY) * 0.12;
      setEyePos({ x: currentEyeX, y: currentEyeY });

      // Pupil reaction (look towards cursor displacement)
      const dx = targetX - currentEyeX;
      const dy = targetY - currentEyeY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(4, Math.hypot(dx, dy) * 0.08);
      setPupilOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });

      animFrame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [cursorVisible]);

  return (
    <div className="relative min-h-screen bg-transparent text-white font-['Outfit',sans-serif] selection:bg-[#FF1F1F] selection:text-white overflow-hidden">
      
      {/* 1. NOISE & FILM GRAIN OVERLAY */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* 2. BACKGROUND CRIMSON GLOW NEBULAE */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-red-800/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-red-600/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(220,20,60,0.06)_0%,transparent_70%)] blur-[90px]" />
      </div>

      {/* 3. SIGNATURE CYBERNETIC CURSOR EFFECT */}
      {/* Lead Red Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-red-600 rounded-full pointer-events-none z-[100] hidden md:block drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
        style={{
          transform: `translate3d(${mousePos.x - 6}px, ${mousePos.y - 6}px, 0)`,
          opacity: cursorVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Trailing Outline Ring */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[99] hidden md:block backdrop-invert-[0.05]"
        style={{
          transform: `translate3d(${trailingPos.x - 20}px, ${trailingPos.y - 20}px, 0) scale(${isHovering ? 1.45 : 1})`,
          borderColor: isHovering ? 'rgba(220, 20, 60, 0.85)' : 'rgba(239, 68, 68, 0.35)',
          backgroundColor: isHovering ? 'rgba(220, 20, 60, 0.08)' : 'transparent',
          opacity: cursorVisible ? 1 : 0,
          transition: 'transform 0.12s ease-out, border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
        }}
      />

      {/* The Cybernetic Eye Cursor Follower */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        <div 
          className="absolute w-[50px] h-[50px] flex items-center justify-center pointer-events-none"
          style={{
            transform: `translate3d(${eyePos.x - 25}px, ${eyePos.y - 25}px, 0) scale(${isHovering ? 1.25 : 1})`,
            transition: 'transform 0.18s ease-out',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(220,20,60,0.65)]">
            <g stroke="#FF1F1F" strokeWidth="6" strokeLinecap="round" opacity="0.75">
              <line x1="15" y1="47" x2="5" y2="36" />
              <line x1="27" y1="40" x2="18" y2="28" />
              <line x1="38" y1="36" x2="33" y2="22" />
              <line x1="50" y1="35" x2="50" y2="20" />
              <line x1="62" y1="36" x2="67" y2="22" />
              <line x1="73" y1="40" x2="82" y2="28" />
              <line x1="85" y1="47" x2="95" y2="36" />
            </g>
            <path 
              d="M 5 55 Q 50 15 95 55 Q 50 95 5 55 Z" 
              stroke="#FF1F1F" 
              strokeWidth="6" 
              strokeLinejoin="round" 
              fill="rgba(5, 5, 5, 0.55)" 
            />
            {/* Iris */}
            <circle 
              cx="50" 
              cy="55" 
              r="14" 
              stroke="#FF1F1F" 
              strokeWidth="5" 
              fill="#120003"
              style={{
                transform: `scale(${isHovering ? 1.2 : 1})`,
                transformOrigin: '50px 55px',
                transition: 'transform 0.25s ease',
              }}
            />
            {/* Pupil (tracks displacement) */}
            <circle 
              cx={50 + pupilOffset.x} 
              cy={55 + pupilOffset.y} 
              r={isHovering ? 6.5 : 5} 
              fill="#FF1F1F" 
            />
          </svg>
        </div>

        {/* Crimson Radial Glow Halo behind Eye */}
        <div 
          className="absolute w-24 h-24 bg-[#FF1F1F]/20 rounded-full blur-2xl pointer-events-none"
          style={{
            transform: `translate3d(${eyePos.x - 48}px, ${eyePos.y - 48}px, 0)`,
            opacity: isHovering ? 0.35 : 0.18,
            transition: 'opacity 0.2s ease',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO [ Growth for Global Visionaries ] */}
      {/* ========================================================================= */}
      <section 
        id="hero" 
        className="relative min-h-[100svh] pt-36 pb-24 flex items-center justify-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-200 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-lg shadow-red-950/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              GLOBAL AI GROWTH ENGINE • ENTERPRISE SCALE
            </div>

            {/* Colossal Animated Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] mb-4 tracking-tight drop-shadow-2xl">
              Autonomous Multi-Agent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                Neural Workflows.
              </span>
            </h1>

            {/* High-Conviction Lead Copy */}
            <p className="text-base sm:text-lg text-[#C9CCD1] mb-8 max-w-xl font-mono leading-relaxed">
              Self-correcting LangGraph pipelines replacing repetitive enterprise workflows.
            </p>

            {/* Interactive Global AI Audit Bar */}
            <div className="w-full max-w-2xl mb-8">
              <div className="relative group">
                {/* Glowing Aura */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000] to-[#FF1F1F] rounded-2xl sm:rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-[#0a0000] border border-white/10 rounded-2xl sm:rounded-full p-2 gap-2 sm:gap-0 focus-within:border-red-600/70 transition-all shadow-2xl">
                  <div className="flex items-center flex-1 px-4">
                    <Search className="w-5 h-5 text-gray-500 mr-2 shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Enter your global business URL or work email..." 
                      className="bg-transparent border-none text-white text-base py-3 px-1 flex-1 placeholder:text-gray-600 outline-none w-full"
                    />
                  </div>

                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="relative overflow-hidden group/btn bg-red-600 hover:bg-red-700 text-white rounded-xl sm:rounded-full px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] hover:scale-[1.02] active:scale-95 duration-300 w-full justify-center border border-red-500/50 flex items-center gap-2">
                      <span className="relative z-10 font-black tracking-wide">
                        Start Global AI Audit ➔
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-[11px] text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-red-500">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant Multi-Model Analysis
                </span>
                <span>•</span>
                <span>Zero Hallucination Guardrails</span>
                <span>•</span>
                <span>SOC2 Type II Isolation</span>
              </div>
            </div>

            {/* Interactive LangGraph Node Stream Visual */}
            <LangGraphWorkflowVisual />

            {/* Live Metrics Ticker Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-10 mt-4 w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">100+</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">Global Brands Automated</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">99.4%</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">Multi-Agent Precision</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">10x</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">Average Pipeline Velocity</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">$15M+</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">Automated Client Revenue</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FULL-STACK GROWTH ENGINE [ 01 - 06 Rows ] */}
      {/* ========================================================================= */}
      <section id="services" className="py-32 relative overflow-hidden">
        {/* Massive Background Watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[180px] font-black text-white/[0.015] select-none pointer-events-none leading-none">
          SERVICES
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-10">
            <div>
              <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase block mb-3">
                What We Do
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Full-Stack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">
                  Growth Engine
                </span>
              </h2>
            </div>

            <Link href="/contact">
              <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-white transition-all text-sm font-medium bg-[#1A1A1A]/[0.02]">
                Explore Custom Deployment
                <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* 6 High-Tech Service Rows */}
          <div className="space-y-0 border-t border-white/[0.06]">
            {[
              {
                num: '01',
                title: 'Autonomous Sales Pipelines & Lead Scoring',
                desc: '24/7 autonomous B2B lead discovery, LinkedIn enrichment, and calendar booking.',
                tags: ['Apollo / Instantly', 'Smartlead Multi-Inbox', 'HubSpot / Salesforce Sync', 'Auto-Calendar Booking'],
                icon: <Workflow className="w-6 h-6 text-red-500" />
              },
              {
                num: '02',
                title: 'Multi-Agent Workflow Orchestration',
                desc: 'LangGraph & CrewAI multi-agent clusters with real-time verification and zero hallucination.',
                tags: ['LangGraph', 'CrewAI', 'pgvector Memory', 'Human-in-the-Loop Safeguards'],
                icon: <Bot className="w-6 h-6 text-red-500" />
              },
              {
                num: '03',
                title: 'Realtime Voice Agents & Custom Knowledge Chatbots',
                desc: 'Sub-second conversational voice reception and custom vector knowledge agents.',
                tags: ['OpenAI Realtime', 'Deepgram Nova-2', 'Cartesia Sonic', 'Live Calendar Booking'],
                icon: <PhoneCall className="w-6 h-6 text-red-500" />
              },
              {
                num: '04',
                title: 'Enterprise Document Intelligence & RPA',
                desc: 'Automated invoice reconciliation, multi-page PDF parsing, and ERP sync.',
                tags: ['Gemini 2.5 Vision', 'FastAPI Microservices', 'Webhook Automation', 'SAP / QuickBooks'],
                icon: <FileSpreadsheet className="w-6 h-6 text-red-500" />
              },
              {
                num: '05',
                title: 'Generative Engine Optimization (GEO & AEO)',
                desc: 'Dominating AI search citations across ChatGPT, Perplexity, and Gemini Overviews.',
                tags: ['Answer Engine SEO', 'Perplexity Citations', 'Schema Graph 2.0', 'Entity Authority'],
                icon: <Sparkles className="w-6 h-6 text-red-500" />
              },
              {
                num: '06',
                title: 'Private Enterprise RAG & Vector Knowledge Bases',
                desc: 'Isolated SOC2 vector memory connecting Slack, Jira, and Notion securely.',
                tags: ['pgvector', 'Pinecone Serverless', 'SOC2 Isolation', 'Zero Data Leakage'],
                icon: <Database className="w-6 h-6 text-red-500" />
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-white/[0.06] hover:border-red-500/30 transition-all cursor-pointer px-4 sm:px-6 hover:bg-[#1A1A1A]/[0.02]"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="text-red-400/50 group-hover:text-red-400 font-black text-xl w-10 shrink-0 transition-colors">
                    {service.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-[#1A1A1A]/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-all">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#1A1A1A]/[0.04] text-gray-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-white/[0.1] group-hover:border-red-500/50 group-hover:bg-red-500/10 flex items-center justify-center shrink-0 transition-all self-end md:self-center">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WE'RE NOT AN AGENCY. WE'RE YOUR GROWTH TEAM. */}
      {/* ========================================================================= */}
      <section id="why-us" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Manifesto */}
            <div className="space-y-8">
              <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase block">
                Why NEXUS Growth
              </span>
              
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                We&apos;re Not an <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">
                  Agency.
                </span>
                <br />
                We&apos;re Your Growth Team.
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Most agencies execute low-impact manual tasks. We engineer <strong className="text-white">autonomous systems that compound</strong>. When you scale, we win — so we treat your revenue pipeline like our own.
              </p>

              <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-400 mb-1">
                    100+
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-mono">
                    Systems Scaled
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-400 mb-1">
                    $15M+
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-mono">
                    Revenue Driven
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-400 mb-1">
                    5x
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-mono">
                    Average ROI
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 High-Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  title: 'Results, Not Hours',
                  desc: "We're measured strictly by your enterprise revenue velocity and operational friction eliminated. Every autonomous workflow is engineered to compound.",
                  icon: <TrendingUp className="w-5 h-5 text-red-500" />
                },
                {
                  num: '02',
                  title: 'Multi-Model Frontier Depth',
                  desc: 'We never lock you into a single LLM vendor. We dynamically orchestrate Claude 3.7, DeepSeek R1 on NVIDIA NIM, Gemini 2.5, and OpenAI Realtime.',
                  icon: <Cpu className="w-5 h-5 text-red-500" />
                },
                {
                  num: '03',
                  title: 'All-In-One Unified Architecture',
                  desc: 'Zero disjointed freelancers or brittle Zapier scripts. We architect production-grade Python and TypeScript microservices built to handle scale.',
                  icon: <Layers className="w-5 h-5 text-red-500" />
                },
                {
                  num: '04',
                  title: 'Long-Term Partner',
                  desc: 'Continuous prompt optimization, vector index re-indexing, and agent performance monitoring so your automated systems remain state-of-the-art.',
                  icon: <ShieldCheck className="w-5 h-5 text-red-500" />
                }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  className="group p-8 rounded-3xl bg-[#1A1A1A]/[0.02] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/[0.03] transition-all duration-500 relative shadow-xl"
                >
                  <span className="text-4xl font-black text-red-500/20 group-hover:text-red-500/40 block mb-4 transition-colors font-mono">
                    {card.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: REAL CLIENTS, REAL RESULTS */}
      {/* ========================================================================= */}
      <section className="py-32 relative bg-transparent border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase block">
              Case Proof
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Real Clients, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">
                Real Results
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'AURA SPATIAL SAAS',
                stat: '+480%',
                label: 'PIPELINE SCALE',
                sub: '0.18s Inbound Voice Response',
                quote: 'The multi-agent outreach cluster booked 84 qualified enterprise demos in month one with zero human manual typing.',
                tech: 'LangGraph · Cartesia · HubSpot'
              },
              {
                client: 'APEX HEALTH LOGISTICS',
                stat: '84%',
                label: 'OPEX REDUCTION',
                sub: '99.8% Extraction Accuracy',
                quote: 'Automated 2,400 monthly medical invoices and hospital reconciliations. Eradicated weeks of manual backlog in 48 hours.',
                tech: 'Gemini 2.5 Vision · FastAPI · PostgreSQL'
              },
              {
                client: 'METRIC CAPITAL DTC',
                stat: '4.8x',
                label: 'ROAS EXPANSION',
                sub: '14.2k Automated Leads',
                quote: 'Replaced traditional agency guesswork with an autonomous creative testing and bidding engine that scales around the clock.',
                tech: 'Meta Graph API · Claude 3.7 · pgvector'
              }
            ].map((proof, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-red-500/40 backdrop-blur-md transition-all space-y-6 group hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    {proof.client}
                  </span>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-5xl font-black text-white tracking-tight mb-1">
                    {proof.stat}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                    {proof.label} • {proof.sub}
                  </div>
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed">
                  &ldquo;{proof.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-gray-500 uppercase tracking-widest">
                  STACK: {proof.tech}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: THE VISION FEED [ Research & Intelligence Hub ] */}
      {/* ========================================================================= */}
      <section id="feed" className="py-32 relative overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase block mb-3">
                Research & Engineering
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">Vision Feed</span>
              </h2>
            </div>
            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
              Updated Weekly • 2026 Editions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: 'MULTI-AGENT ARCHITECTURE',
                date: '15 JUN 2026',
                time: '6 MIN READ',
                title: 'Autonomous Sales Pipelines: How Multi-Model AI Growth Engines are Replacing the Traditional B2B Funnel',
                desc: 'Deep dive into LangGraph orchestration, recursive memory validation, and why linear CRM funnels are obsolete.'
              },
              {
                tag: 'PRIVATE ENTERPRISE INFERENCE',
                date: '02 JUN 2026',
                time: '8 MIN READ',
                title: 'Accelerating Enterprise SaaS Scale with NVIDIA NIM and Headless Digital Infrastructure',
                desc: 'Deploying DeepSeek R1 and Llama 3.3 locally on private compute with zero customer data leakage.'
              },
              {
                tag: 'SEARCH 2.0 & GEO',
                date: '21 MAY 2026',
                time: '5 MIN READ',
                title: 'The Ultimate Guide to Generative Engine Optimization (GEO) in ChatGPT & Perplexity',
                desc: 'How modern brands ensure they are cited as the undisputed primary authority by AI answer engines.'
              }
            ].map((art, i) => (
              <div 
                key={i}
                className="group p-8 rounded-3xl bg-[#1A1A1A]/[0.02] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#1A1A1A]/[0.04] transition-all duration-500 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-[11px] text-gray-500">
                    <span className="text-red-400 font-bold uppercase tracking-wider">{art.tag}</span>
                    <span>{art.time}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-white">
                  <span>READ ARCHITECTURE</span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: INTERACTIVE GROWTH AUDIT CALCULATOR [ Stop Guessing. Start Scaling. ] */}
      {/* ========================================================================= */}
      <section id="audit" className="py-32 relative overflow-hidden border-t border-white/[0.06] bg-[#050002]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-black/60 border border-white/10 p-8 sm:p-14 rounded-3xl backdrop-blur-xl shadow-2xl relative">
            <div className="absolute -inset-px bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20 rounded-3xl pointer-events-none" />

            {/* Left Col: Explainer */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 font-mono text-xs uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 text-red-400" />
                FREE GLOBAL AI AUDIT
              </div>

              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Stop Guessing. <br />
                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">Scaling.</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
                Claim your custom AI &amp; Growth Audit. We&apos;ll analyze your current marketing stack and show you exactly how to automate your workflows and 5x your ROI.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 text-xs font-mono uppercase tracking-wider text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" /> No commitment required
                </div>
                <div>•</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" /> 100% Custom Blueprint
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Assessment Card */}
            <div className="lg:col-span-6 bg-[#080103] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                  STEP {auditStep} OF 2 • ARCHITECTURE BENCHMARK
                </span>
                <span className="text-xs text-gray-500 font-mono">LIVE PREDICTOR</span>
              </div>

              {auditStep === 1 ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                      1. Current Monthly Revenue Stage:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['<$50k/mo', '$50k - $200k/mo', '$200k+/mo'].map((val) => (
                        <button
                          key={val}
                          onClick={() => setCompanyScale(val)}
                          className={`p-3 rounded-xl border font-mono text-xs text-center transition-all cursor-pointer ${
                            companyScale === val 
                              ? 'bg-red-600 text-white border-red-500 font-bold shadow-lg shadow-red-900/40' 
                              : 'bg-[#1A1A1A]/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                      2. Primary Operational Friction:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Outbound Lead Gen & Sales',
                        'Customer Inbound & Voice',
                        'Document Processing / ERP',
                        'Multi-Team Coordination'
                      ].map((val) => (
                        <button
                          key={val}
                          onClick={() => setPrimaryBottleneck(val)}
                          className={`p-3 rounded-xl border font-mono text-xs text-left transition-all cursor-pointer ${
                            primaryBottleneck === val 
                              ? 'bg-red-600 text-white border-red-500 font-bold shadow-lg shadow-red-900/40' 
                              : 'bg-[#1A1A1A]/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setAuditStep(2)}
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold font-mono text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
                  >
                    CALCULATE AUTOMATION PROJECTION ➔
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-red-950/40 border border-red-800/40 space-y-4">
                    <span className="font-mono text-xs text-red-400 uppercase tracking-widest block font-bold">
                      PROJECTED ARCHITECTURAL YIELD:
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-black text-white">160+ hrs</div>
                        <div className="text-[10px] text-gray-400 uppercase font-mono">Monthly Labor Automated</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">4.2x</div>
                        <div className="text-[10px] text-gray-400 uppercase font-mono">Pipeline Velocity Lift</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-300 font-mono space-y-1">
                    <div>RECOMMENDED STACK: LangGraph + NVIDIA NIM + pgvector</div>
                    <div>SECURITY: SOC2 Type II Data Isolation</div>
                  </div>

                  <Link href="/contact" className="block">
                    <button className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold font-mono text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                      CLAIM COMPLETE BLUEPRINT ➔
                    </button>
                  </Link>

                  <button 
                    onClick={() => setAuditStep(1)} 
                    className="w-full text-center font-mono text-[11px] text-gray-500 hover:text-white uppercase cursor-pointer"
                  >
                    ← Recalculate Parameters
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: EVERYTHING YOU NEED TO KNOW [ FAQ Accordion ] */}
      {/* ========================================================================= */}
      <section id="faq" className="py-32 px-6 relative overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase block">
              AI Intelligence Hub
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Everything You Need to Know About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Global AI Growth
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What services does the NEXUS Global AI Growth Engine provide?',
                a: 'We engineer end-to-end autonomous business systems: Multi-Model AI Sales Pipelines, Multi-Agent LangGraph Orchestration, Private Enterprise RAG with pgvector, Sub-second Voice Agents (OpenAI Realtime & Cartesia), and Generative Engine Optimization (GEO).'
              },
              {
                q: 'How does multi-agent orchestration differ from simple Zapier / Make.com automations?',
                a: 'Traditional tools are fragile, rigid if-then triggers that break when webhooks or data formats change. Our multi-agent clusters have autonomous self-correcting logic, recursive reasoning loops, and private vector memory that can dynamically handle ambiguity and execute complex tasks.'
              },
              {
                q: 'How do you guarantee enterprise data privacy and SOC2 compliance?',
                a: 'We leverage private inference clusters via NVIDIA NIM and self-hosted open-weights models (DeepSeek R1, Llama 3.3). Zero customer data is ever transmitted to public LLM training datasets, maintaining total SOC2 and GDPR isolation.'
              },
              {
                q: 'What is the deployment timeline for an autonomous sales pipeline?',
                a: 'Our rapid deployment sprint delivers live production pipelines within 14 business days. This includes multi-inbox setup, DNS warmup, vector knowledge base ingestion, and automated CRM sync.'
              },
              {
                q: 'What is Generative Engine Optimization (GEO)?',
                a: 'GEO is the modern evolution of SEO. As users migrate from Google 10 blue links to ChatGPT Search, Perplexity Pro, and Gemini, GEO ensures your brand is indexed and cited as the #1 authoritative recommendation by LLMs.'
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border transition-all duration-300 overflow-hidden bg-[#1A1A1A]/[0.015] border-white/5 hover:border-white/15"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-6 cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-bold text-white hover:text-red-400 transition-colors">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-red-600 border-red-500 text-white rotate-180' : 'bg-[#1A1A1A]/5 border-white/10 text-gray-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: LET'S BUILD SOMETHING BIG [ Conversion Horizon ] */}
      {/* ========================================================================= */}
      <section className="py-32 relative overflow-hidden border-t border-white/[0.06]">
        {/* Glowing Horizon Arc */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-300 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            ENTERPRISE SCALE AWAITS
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-[0.9]">
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500">
              Something Big.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ready to turn manual operational friction into compounding automated pipeline growth? Book your dedicated architectural session.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="relative overflow-hidden group/btn bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all hover:scale-105 active:scale-95 duration-300 w-full justify-center border border-red-500/50 cursor-pointer">
                <span className="relative z-10">
                  Deploy Your AI Engine ➔
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700" />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HIGH-TECH FOOTER */}
      {/* ========================================================================= */}
      <footer className="relative z-30 bg-[#020001] border-t border-white/[0.06] py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-7 h-7 drop-shadow-[0_0_6px_rgba(220,20,60,0.8)]">
                <path d="M 5 55 Q 50 15 95 55 Q 50 95 5 55 Z" stroke="#FF1F1F" strokeWidth="6" fill="transparent" />
                <circle cx="50" cy="55" r="14" stroke="#FF1F1F" strokeWidth="5" />
                <circle cx="50" cy="55" r="6" fill="#FF1F1F" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                NEXUS<span className="text-[#FF1F1F]">AI</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-red-500 font-bold mt-0.5">
                Global Growth Engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-2 text-red-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Autonomous Pipelines Operational
            </span>
            <span>•</span>
            <span>99.98% System Uptime</span>
          </div>

          <div className="text-xs font-mono text-gray-600">
            &copy; {new Date().getFullYear()} NEXUS Growth. ALL RIGHTS RESERVED.
          </div>

        </div>
      </footer>

    </div>
  );
}
