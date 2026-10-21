'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Users, 
  TrendingUp, 
  Layers, 
  Radio, 
  Activity, 
  Clock, 
  Sliders, 
  Mail, 
  Smartphone, 
  Cpu, 
  Compass, 
  DollarSign, 
  BarChart3, 
  RefreshCw,
  ExternalLink,
  Film,
  Video,
  Clapperboard,
  Check,
  Send,
  MessageSquare
} from 'lucide-react';
import { KanbanPipelineBoard } from './KanbanPipelineBoard';

interface ChannelTab {
  id: string;
  name: string;
  iconSrc: string;
  badge: string;
  color: string;
  tagline: string;
  description: string;
  stats: string;
  sampleMessage: {
    sender: string;
    avatar: string;
    text: string;
    time: string;
    aiReply: string;
    outcome: string;
    revenue?: string;
  };
}

const CHANNELS: ChannelTab[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp 1-Click Checkout',
    iconSrc: '/vartalaap/hover-icons-1.svg',
    badge: '98% OPEN RATE',
    color: '#25D366',
    tagline: 'Direct Commercial Ad to Shoppable WhatsApp Cart',
    description: 'When viewers tap your video ad on Meta or YouTube, they drop into an automated WhatsApp sales thread with instant product verification and 1-click Apple Pay / Stripe checkout.',
    stats: '2.4M Messages / Mo',
    sampleMessage: {
      sender: 'Camille Dubois (Inbound Ad Click via Brand Film)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: 'Just watched your Horizon commercial reel! Is the Limited Obsidian Edition available in 750ml? Need it delivered before Friday.',
      time: '10:42 AM',
      aiReply: 'Bonjour Camille! Yes, 4 units are reserved at our Paris production hub. I have applied your 15% film launch code NEXUS15. Tap below to checkout via Apple Pay.',
      outcome: '✓ 1-Click Apple Pay Link Dispatched ($89.00 Closed in 22s)',
      revenue: '+$89.00 Closed',
    },
  },
  {
    id: 'instagram',
    name: 'Instagram Direct & Story Triggers',
    iconSrc: '/vartalaap/hover-icons-2.svg',
    badge: 'VIRAL RETENTION',
    color: '#E1306C',
    tagline: 'Comment-to-DM Funnel for Creative Releases',
    description: 'Auto-DM viewers who comment on your latest commercial release, founder podcast snippet, or product trailer with personalized private access links and instant lead qualification.',
    stats: '1.1M Automated DMs',
    sampleMessage: {
      sender: 'Elena Rostova (@elena_growth)',
      avatar: '/vartalaap/avatar_carla.webp',
      text: 'Watched your 3D product render reel! Where can our marketing team download your commercial production rate card?',
      time: '11:15 AM',
      aiReply: 'Hey Elena! Here is your direct VIP access link to NEXUS Growth’ 2026 Production & Funnel Deck + our interactive budget calculator: nexusgrowth.co/production-rates',
      outcome: '✓ Qualified Brand Tag Added to HubSpot + Attribution Logged to Campaign #REEL-42',
      revenue: 'Deal Est: $24,500',
    },
  },
  {
    id: 'sms',
    name: 'Carrier-Grade Priority SMS',
    iconSrc: '/vartalaap/hover-icons-3.svg',
    badge: '< 90S RESPONSE',
    color: '#C9CCD1',
    tagline: 'Automated Post-Purchase & Shoot Approvals',
    description: 'Automate post-production client signoffs, video review links, VIP drop countdown alerts, and abandoned cart recovery with 99.4% carrier delivery SLAs.',
    stats: '99.4% Delivery SLA',
    sampleMessage: {
      sender: 'Marcus Chen (+1 415-***-8821)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: 'Can we reschedule our commercial storyboard review session to Thursday 3:00 PM EST?',
      time: '02:08 PM',
      aiReply: 'Thursday 3:00 PM EST is open on Yusuf’s executive calendar! Updated your Google Calendar invite and notified the video production director.',
      outcome: '✓ Calendar Synced + HubSpot Deal Stage Updated to "Creative Review Confirmed"',
      revenue: 'Stage: Production Active',
    },
  },
  {
    id: 'webchat',
    name: 'High-Intent Webchat Radar',
    iconSrc: '/vartalaap/hover-icons-4.svg',
    badge: '0-LATENCY STREAM',
    color: '#8B0000',
    tagline: 'Cart Value & Dwell-Time Intent Trigger',
    description: 'Context-aware conversational widget that dynamically reads the user’s current service page, video watch completion percentage, and estimated project scope before initiating dialogue.',
    stats: '4.2x Higher CRO',
    sampleMessage: {
      sender: 'Visitor on /services/video-production-editing (Cart: $7,800)',
      avatar: '/vartalaap/avatar_carla.webp',
      text: 'Does the Growth Retainer include both 4K cinema commercials and 12 vertical social reels each month?',
      time: '04:30 PM',
      aiReply: 'Yes! The $7,800/mo Retainer includes 1 flagship 4K commercial film plus 12 high-retention vertical cuts with custom sound design, DaVinci color grading, and CRM checkout integration.',
      outcome: '✓ High-Intent Client Flagged -> Real-Time Alert Dispatched to Senior Producer in Slack',
      revenue: 'Deal Value: $7,800/mo',
    },
  },
  {
    id: 'voice',
    name: 'Voice Telephony AI Booking',
    iconSrc: '/vartalaap/hover-icons-5.svg',
    badge: '400MS SPEECH LATENCY',
    color: '#FF1F1F',
    tagline: 'Studio-Grade Phone Intake & Inbound Qualification',
    description: 'Sub-second inbound telephony agents with natural human breath pauses and studio audio cadence, booking qualified discovery calls and answering project inquiries 24/7.',
    stats: '15,000 Call Hours / Mo',
    sampleMessage: {
      sender: 'Inbound Inbound Telephony (+1 212-***-4481)',
      avatar: '/vartalaap/avatar_camille.webp',
      text: '[Caller Audio]: "Hi, we are launching a new consumer hardware product in Q3 and need full-service video production + an automated Shopify funnel."',
      time: '05:12 PM',
      aiReply: '[Synthesized Telephony Voice]: "We specialize in hardware commercial production and 1-click checkout funnels. I have matched your brief with our Creative Director Yusuf and sent an invite for Tuesday 2:00 PM EST."',
      outcome: '✓ Calendar Confirmation SMS Dispatched + Lead Enriched in Close CRM',
      revenue: 'Deal Scope: $35k–$50k',
    },
  },
];

interface VideoReel {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
  duration: string;
  metrics: {
    stat: string;
    label: string;
  }[];
  description: string;
}

const VIDEO_SHOWCASES: VideoReel[] = [
  {
    id: 'customer-journey',
    title: 'From Video Commercial to Closed Revenue',
    subtitle: 'High-energy commercial reel showcasing live multi-platform customer acquisition and frictionless checkouts',
    category: 'COMMERCIAL FUNNEL REEL',
    src: '/videos/vartalaap/customer-journey-reel.mp4',
    duration: '01:12',
    metrics: [
      { stat: '+34%', label: 'Conversion Lift' },
      { stat: '4.2X', label: 'Verified ROAS' },
      { stat: '14s', label: 'Avg Checkout Time' },
    ],
    description: 'Most production agencies produce a gorgeous commercial, hand you an .MP4 file, and walk away. NEXUS Growth bridges the gap: our commercial films are directly tied to click-to-WhatsApp funnels and 1-click checkout flows that turn viewers into paying customers in seconds.',
  },
  {
    id: 'ai-core',
    title: 'NEXUS Neural Core • 3D Product & Data Sync',
    subtitle: 'Real-time classification, inventory verification, and CRM webhook routing across 100k+ concurrent buyer threads',
    category: '3D KINETIC AI DEMO',
    src: '/videos/vartalaap/ai-core-motion.mp4',
    duration: '00:45',
    metrics: [
      { stat: '0.4s', label: 'Inference Latency' },
      { stat: '94.8%', label: 'Intent Accuracy' },
      { stat: '100%', label: 'CRM Vector Sync' },
    ],
    description: 'Watch how NEXUS Pipeline AI parses high-volume customer inquiries generated from paid social video campaigns — verifying real-time warehouse inventory, calculating shipping, and triggering automated Stripe and HubSpot database events.',
  },
  {
    id: 'voice-agent',
    title: 'Voice Telephony AI • Studio Audio Cadence',
    subtitle: 'Human-grade phone dialogue engineered with sub-500ms voice synthesis and intelligent interruptibility',
    category: 'VOICE AGENT REEL',
    src: '/videos/vartalaap/conversational-voice-demo.mp4',
    duration: '01:30',
    metrics: [
      { stat: '< 450ms', label: 'Voice Response' },
      { stat: '97.2%', label: 'Caller Satisfaction' },
      { stat: '-62%', label: 'Support Overhead' },
    ],
    description: 'Listen to human-grade conversational cadence. Our telephony voice stack handles natural pauses, interruptions, and live database lookups without robotic latency, qualifying production clients and booking high-ticket discovery sessions 24/7.',
  },
  {
    id: 'enterprise-suite',
    title: 'Enterprise Brand Overhaul • Global Scale Operations',
    subtitle: 'Flagship brand film demonstrating multi-brand customer engagement and CRM governance',
    category: 'ENTERPRISE PRODUCTION SUITE',
    src: '/videos/vartalaap/enterprise-omnichannel.mp4',
    duration: '01:45',
    metrics: [
      { stat: '1.28M', label: 'Daily Threads' },
      { stat: 'SOC2', label: 'Type II Compliant' },
      { stat: '99.99%', label: 'Uptime SLA' },
    ],
    description: 'Architected for enterprise consumer brands, luxury real estate developers, and high-growth venture companies requiring full-bleed cinema video campaigns coupled with bulletproof CRM data privacy and multi-channel conversion funnels.',
  },
];

interface UseCaseItem {
  id: string;
  tag: string;
  title: string;
  cursiveAccent: string;
  subtitle: string;
  imageSrc: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  metric: string;
  metricLabel: string;
  badge: string;
}

const USE_CASES: UseCaseItem[] = [
  {
    id: 'd2c',
    tag: 'D2C E-COMMERCE & PRODUCT DROPS',
    title: 'Turn video views into instant',
    cursiveAccent: 'orders.',
    subtitle: 'Connect your TikTok, Instagram Reels, and YouTube ads directly into WhatsApp 1-click checkouts with automated abandoned cart recovery.',
    imageSrc: '/vartalaap/card-img-1.webp',
    bullet1: '1-Click WhatsApp Apple Pay link generation triggered directly from video ad clicks',
    bullet2: 'Proactive shipping tracking updates that reduce "Where Is My Order" tickets by 72%',
    bullet3: 'Conversational size & shade recommendations that cut return rates in half',
    metric: '+38% AOV',
    metricLabel: 'Average Cart Lift via Conversational Upsells',
    badge: 'HIGH-VELOCITY D2C',
  },
  {
    id: 'creators',
    tag: 'CREATOR ECONOMY & COHORTS',
    title: 'Monetize high-ticket coaching with',
    cursiveAccent: 'zero DM fatigue.',
    subtitle: 'Turn YouTube views, podcast listeners, and Instagram comments into high-ticket mastermind members and cohort applications.',
    imageSrc: '/vartalaap/card-img-2.webp',
    bullet1: 'Automated comment-to-DM triggers delivering masterclass resources in under 3 seconds',
    bullet2: 'Conversational budget qualification that filters high-value clients from freebie seekers',
    bullet3: 'Personalized audio memos with your voice tone that build instant rapport and trust',
    metric: '4.8X',
    metricLabel: 'DM-to-Checkout Funnel Velocity',
    badge: 'CREATOR FAVORITE',
  },
  {
    id: 'real-estate',
    tag: 'LUXURY REAL ESTATE & ARCHITECTURE',
    title: 'Book private property tours while you',
    cursiveAccent: 'sleep.',
    subtitle: 'Combine cinematic FPV drone architectural videos with an automated qualification funnel that verifies financing and books VIP walkthroughs.',
    imageSrc: '/vartalaap/card-img-3.webp',
    bullet1: 'Automated buyer timeline & budget questionnaire directly inside WhatsApp',
    bullet2: 'Dynamic property brochure dispatch with trackable PDF engagement telemetry',
    bullet3: 'Calendar scheduling synced with broker availability and private gate access codes',
    metric: '82%',
    metricLabel: 'Show-Up Rate on Verified Tours',
    badge: 'HIGH-TICKET PROOF',
  },
  {
    id: 'enterprise',
    tag: 'HIGH-GROWTH B2B & PRODUCTION CLIENTS',
    title: 'Scale client acquisition with automated',
    cursiveAccent: 'precision.',
    subtitle: 'Deploy full-bleed cinematic brand commercials coupled with multi-channel inbound routing that feeds qualified deals into HubSpot and Salesforce.',
    imageSrc: '/vartalaap/card-img-4.webp',
    bullet1: 'Sub-second data lookup across Salesforce, HubSpot, Zendesk, and Stripe',
    bullet2: 'Automated sentiment escalation: high-friction accounts routed instantly to executive partners',
    bullet3: 'Encrypted audit logs with PII masking and zero LLM training retention',
    metric: '68%',
    metricLabel: 'Inbound Inquiries Auto-Qualified & Booked',
    badge: 'ENTERPRISE CRM',
  },
];

const FAQS = [
  {
    q: 'Why does a creative production company need a CRM & Sales Funnel service?',
    a: 'Most creative production agencies deliver a beautiful 4K video file or brand deck and abandon you with no mechanism to convert viewers into paying customers. At NEXUS Growth, code, creative, and cash collected are inseparable. We build the high-conversion sales funnels, automated CRM routing, and WhatsApp checkout mechanisms that ensure your commercial films, paid ads, and web experiences generate measurable, closed revenue 24/7.',
  },
  {
    q: 'How does the video ad to WhatsApp checkout funnel work?',
    a: 'When a prospective customer watches your commercial reel or product video on Instagram, TikTok, or YouTube, they click the primary call to action (Click-to-WhatsApp). Instead of landing on a slow, generic 5-second mobile webpage that causes 70% drop-off, a native WhatsApp chat opens instantly. NEXUS Pipeline AI answers their sizing, color, or shipping questions, applies a dynamic discount code, and sends a 1-click Apple Pay link. Average checkout time is under 20 seconds.',
  },
  {
    q: 'Which CRM platforms do you integrate with?',
    a: 'We engineer official, bi-directional pipelines with HubSpot, Salesforce, Klaviyo, Shopify, WooCommerce, Close, Zoho, Stripe, and custom PostgreSQL/REST backends. When a customer purchases or confirms an appointment, your CRM deals, customer tags, and ERP inventory sync in under 400 milliseconds.',
  },
  {
    q: 'How fast does the Conversational Voice AI answer phone calls?',
    a: 'Our voice telephony agents operate with an end-to-end voice latency of under 450 milliseconds. This includes real-time speech-to-text, neural reasoning, database query lookup, and neural voice synthesis. The dialogue has natural human breath pauses, handles caller interruptions gracefully, and transfers to a live human rep when appropriate.',
  },
  {
    q: 'What is the setup timeline for our production funnel sprint?',
    a: 'Our typical Sprint Launchpad takes 10 to 14 business days from kickoff to live production deployment. This includes channel verification, CRM topology mapping, custom knowledge vector ingestion, tone-of-voice alignment, and end-to-end stress-testing.',
  },
];

export function VartalaapCrmExperience() {
  const [activeChannel, setActiveChannel] = useState<string>('whatsapp');
  const [activeUseCase, setActiveUseCase] = useState<string>('d2c');
  const [activeVideo, setActiveVideo] = useState<string>('customer-journey');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'synthesizing'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const cycleOrbState = () => {
    if (orbState === 'idle') setOrbState('listening');
    else if (orbState === 'listening') setOrbState('synthesizing');
    else setOrbState('idle');
  };

  const currentChannel = CHANNELS.find(c => c.id === activeChannel) || CHANNELS[0];
  const currentVideo = VIDEO_SHOWCASES.find(v => v.id === activeVideo) || VIDEO_SHOWCASES[0];

  return (
    <div className="relative min-h-screen bg-transparent text-[#f8fafc] selection:bg-[#FF1F1F] selection:text-white overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. ATMOSPHERIC NEON EDGE GLOW & AMBIENT RADIAL LIGHTING */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-[#FF1F1F]/15 via-[#8B0000]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-[#FF1F1F]/15 via-[#8B0000]/10 to-transparent blur-[160px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-[#FF1F1F]/10 via-[#FF1F1F]/10 to-transparent blur-[180px]" />
        
        {/* Subtle decorative grid dots */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#FF1F1F 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>


      {/* ========================================================================= */}
      {/* 3. HERO SECTION: ASYMMETRIC EDITORIAL WITH DYNAMIC WAVE & FLOATING CARDS */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-4 md:px-8 z-10 overflow-hidden">
        
        {/* Dynamic Hero Wave Background */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1920px] h-[550px] pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
          <Image
            src="/vartalaap/hero-wave.webp"
            alt="Hero Wave Energy"
            width={1920}
            height={888}
            priority
            className="w-full h-full object-cover animate-pulse [animation-duration:8s]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Asymmetric Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FF1F1F]/10 border border-[#FF1F1F]/30 text-red-300 text-xs font-mono mb-8 shadow-[0_0_25px_rgba(255,31,31,0.25)] rotate-[-1deg]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="tracking-widest uppercase">NEXUS PIPELINE OS • SERVICE 11: AUTOMATED CONVERSION ARCHITECTURE</span>
          </motion.div>

          {/* Central Interactive Holographic Orb with Floating Dialogue Avatars */}
          <div className="relative my-4 flex items-center justify-center w-full max-w-4xl">
            
            {/* Floating Dialogue Card 1 (Left - Camille) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -left-4 lg:left-8 top-4 md:top-8 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-red-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,31,31,0.2)] rotate-[-3deg] hover:rotate-0 transition-transform max-w-[280px] text-left"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-red-400 shadow-[0_0_12px_rgba(255,31,31,0.5)]">
                <Image
                  src="/vartalaap/avatar_camille.webp"
                  alt="Camille VIP Buyer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-red-300 mb-0.5">
                  <span>Camille D.</span>
                  <span className="text-green-400 font-bold">+$89.00</span>
                </div>
                <p className="text-gray-200 text-[11px] leading-tight">
                  &quot;Watched your commercial reel! Is the Obsidian Flask available?&quot;
                </p>
                <div className="text-[9px] font-mono text-red-400/90 mt-1 flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 text-green-400" />
                  <span>Paid in 18s via Apple Pay</span>
                </div>
              </div>
            </motion.div>

            {/* Central Holographic 3D Orb */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={cycleOrbState}
              className="relative cursor-pointer group my-2 z-10"
              title="Click to interact with NEXUS Pipeline Core"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-red-500/25 via-red-600/35 to-stone-600/25 blur-3xl group-hover:blur-[70px] transition-all duration-500 animate-pulse" />
              
              {/* Rotating Orbital Rings */}
              <div className="absolute -inset-5 rounded-full border border-red-500/30 border-dashed animate-spin [animation-duration:35s]" />
              <div className="absolute -inset-3 rounded-full border border-red-400/35 border-dotted animate-spin [animation-duration:20s] [animation-direction:reverse]" />

              {/* Central Holographic Orb Box */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#8B0000] via-[#8B0000] to-[#FF1F1F] p-1 shadow-[0_0_60px_rgba(255,31,31,0.6),inset_0_0_35px_rgba(255,255,255,0.4)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#080c14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  
                  {/* Internal dynamic wave graphic */}
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/15 via-transparent to-red-950/60" />
                  
                  <TrendingUp className="w-12 h-12 text-[#FF1F1F] mb-2 drop-shadow-[0_0_15px_rgba(255,31,31,0.9)] group-hover:scale-110 transition-transform" />
                  
                  {/* Voice Status Pill */}
                  <span className="font-mono text-[11px] font-bold tracking-widest text-red-300 uppercase">
                    {orbState === 'idle' && 'NEXUS Pipeline Core'}
                    {orbState === 'listening' && 'Listening...'}
                    {orbState === 'synthesizing' && 'Synthesizing...'}
                  </span>

                  {/* Animated sound wave bars */}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-1 h-3 bg-red-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-1 h-5 bg-red-300 rounded-full animate-bounce [animation-delay:0.3s]" />
                    <span className="w-1 h-7 bg-[#FF1F1F] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-4 bg-red-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    <span className="w-1 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                  </div>

                  <span className="text-[9px] font-mono text-gray-400 mt-2">
                    Click bubble to test
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Dialogue Card 2 (Right - Carla) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -right-4 lg:right-8 bottom-4 md:bottom-8 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-red-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,31,31,0.2)] rotate-[2.5deg] hover:rotate-0 transition-transform max-w-[290px] text-left"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-red-400 shadow-[0_0_12px_rgba(255,31,31,0.5)]">
                <Image
                  src="/vartalaap/avatar_carla.webp"
                  alt="Carla Enterprise VP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-red-300 mb-0.5">
                  <span>Carla M. (Marketing VP)</span>
                  <span className="text-red-400 font-bold">$24.5k Deal</span>
                </div>
                <p className="text-gray-200 text-[11px] leading-tight">
                  &quot;Watched your 3D trailer. Need video production + Shopify funnel.&quot;
                </p>
                <div className="text-[9px] font-mono text-red-400/90 mt-1 flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 text-red-400" />
                  <span>Discovery Call Booked on Calendar</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Mixed Typography Master Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-5xl"
          >
            <h1 className="font-['Syne'] font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight">
              Conversational Pipelines &amp; <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-[#8B0000] tracking-normal drop-shadow-[0_0_35px_rgba(255,31,31,0.4)]">
                Instant Checkout.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-2xl text-[#C9CCD1] leading-relaxed text-sm sm:text-base font-mono"
          >
            Turning commercial video traffic into WhatsApp revenue in seconds.
          </motion.div>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF1F1F] via-[#8B0000] to-[#C9CCD1] text-white font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(255,31,31,0.5)] hover:shadow-[0_0_55px_rgba(255,31,31,0.8)] transition-all flex items-center justify-center gap-2 group hover:scale-105"
            >
              <span>Build My Conversion Funnel</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#video-showcase"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-red-400" />
              <span>Watch Funnel Commercial Reel</span>
            </a>
          </motion.div>

          {/* Interactive Kanban Pipeline Board */}
          <KanbanPipelineBoard />

          {/* Trust Telemetry Bar with Large Numeric Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl w-full"
          >
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-white font-mono">1.28M+</div>
              <div className="text-xs text-gray-400 mt-1">Automated Buyer Interactions</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-red-400 font-mono">+34%</div>
              <div className="text-xs text-gray-400 mt-1">Verified Video Ad CRO Lift</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-red-400 font-mono">4.2X</div>
              <div className="text-xs text-gray-400 mt-1">Average ROAS Across Funnels</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-['Syne'] text-3xl font-extrabold text-stone-400 font-mono">&lt; 400ms</div>
              <div className="text-xs text-gray-400 mt-1">Inference &amp; Database Sync</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM SHEET: LIVE CONVERSATIONAL FUNNEL SIMULATOR */}
      {/* ========================================================================= */}
      <section id="conversions" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              CONVERSION ARCHITECTURE
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              From creative video impression to{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                cash collected.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              See how our production company clients convert high-production commercials, 3D animations, and social reels into immediate closed sales.
            </p>
          </div>

          {/* Asymmetric 3-Track Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Track 1: D2C E-Commerce 1-Click Purchase */}
            <div className="rounded-3xl bg-[#0a101f] border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(255,31,31,0.15)] group hover:border-red-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-red-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    TRACK 01 • D2C VIDEO DROP
                  </span>
                  <span>Click-to-WhatsApp Ad</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/card-img-5.webp"
                    alt="Conversational Checkout UI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Live Video Cart #8492</span>
                    <span className="text-green-400 font-bold">$43,817.16 REV</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">INCOMING FROM COMMERCIAL AD</div>
                    &quot;Watched the nitro coffee commercial on Instagram! Can I order a 12-pack with the weekend launch discount?&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-100">
                    <div className="text-[10px] font-mono text-red-400 mb-1 flex items-center gap-1 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> NEXUS FUNNEL BOT
                    </div>
                    &quot;Yes! 6 boxes reserved at our local warehouse. Applied 15% launch code NITRO15. Tap below to checkout via Apple Pay.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-green-400 font-mono">$43,817.16</div>
                  <div className="text-[10px] text-gray-400">Attributed Monthly Revenue</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-xs font-mono font-bold">
                  ✓ PAID IN 14s
                </div>
              </div>
            </div>

            {/* Track 2: B2B High-Ticket Production Client Qualification */}
            <div className="rounded-3xl bg-[#0a101f] border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(255,31,31,0.15)] group hover:border-red-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-red-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    TRACK 02 • AGENCY PIPELINE
                  </span>
                  <span>HubSpot / Close Sync</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/card-img-6.webp"
                    alt="B2B CRM Pipeline UI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Salesforce Pipeline Router</span>
                    <span className="text-red-400 font-bold">$24,500 DEAL</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">FOUNDER / CMO BRIEF</div>
                    &quot;We loved your AURA Wearables brand film. We need full-bleed video production + an automated Klaviyo lifecycle funnel for our launch.&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-100">
                    <div className="text-[10px] font-mono text-red-400 mb-1 flex items-center gap-1 font-bold">
                      <Bot className="w-3.5 h-3.5" /> NEXUS QUALIFIER
                    </div>
                    &quot;Qualified Flagship Tier ($24.5k scope). Synced brief, verified domain, and reserved an executive strategy session on Yusuf’s calendar for Tuesday.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-red-400 font-mono">$24,500</div>
                  <div className="text-[10px] text-gray-400">Production Contract Value</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-mono font-bold">
                  ✓ STRATEGY BOOKED
                </div>
              </div>
            </div>

            {/* Track 3: Tier-1 & Tier-2 Support Auto-Triage */}
            <div className="rounded-3xl bg-[#0a101f] border border-stone-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(201,204,209,0.15)] group hover:border-stone-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-stone-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-gray-400">
                  <span className="flex items-center gap-1.5 text-stone-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-stone-400 animate-pulse" />
                    TRACK 03 • 24/7 CLIENT OPS
                  </span>
                  <span>Automated Asset Delivery</span>
                </div>

                <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black">
                  <Image
                    src="/vartalaap/img-product-5.webp"
                    alt="Support Automation Hub"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-gray-300">Deliverable Asset Portal</span>
                    <span className="text-stone-400 font-bold">0.38S DISPATCH</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">CLIENT REVIEW REQUEST</div>
                    &quot;Where can our media team grab the final 4K ProRes master and vertical 9:16 cuts for our TikTok ads launch?&quot;
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-500/15 border border-stone-500/30 text-stone-100">
                    <div className="text-[10px] font-mono text-stone-400 mb-1 flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> NEXUS CLIENT OPS
                    </div>
                    &quot;Your color-graded DaVinci masters and 12 vertical cuts have cleared QA! Generated secure 10Gbps download tokens and synced with your Drive.&quot;
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-['Syne'] text-2xl font-bold text-stone-400 font-mono">0.38s Latency</div>
                  <div className="text-[10px] text-gray-400">Average Asset Retrieval Speed</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-stone-500/15 border border-stone-500/40 text-stone-400 text-xs font-mono font-bold">
                  ✓ 100% DISPATCHED
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OMNICHANNEL COMMAND CENTER (TABS & INTERACTIVE SIMULATION) */}
      {/* ========================================================================= */}
      <section id="omnichannel" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                UNIFIED MESSAGING LAYER
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                From video viewer to paying client{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                  in seconds.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              One unified intelligence brain connected across all your agency&apos;s customer acquisition touchpoints.
            </p>
          </div>

          {/* Interactive Channel Selector Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {CHANNELS.map(ch => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs font-mono transition-all border ${
                  activeChannel === ch.id
                    ? 'bg-gradient-to-r from-[#FF1F1F] via-[#8B0000] to-[#C9CCD1] text-white font-bold border-red-400 shadow-[0_0_30px_rgba(255,31,31,0.4)] scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                }`}
              >
                <div className="w-5 h-5 relative shrink-0">
                  <Image
                    src={ch.iconSrc}
                    alt={ch.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span>{ch.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeChannel === ch.id ? 'bg-black text-red-300 font-bold' : 'bg-white/10 text-gray-400'}`}>
                  {ch.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active Channel Detailed Interactive Workspace */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChannel.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#0a101f] border border-red-500/30 p-6 md:p-10 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(255,31,31,0.15)]"
            >
              {/* Background ambient lighting */}
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: currentChannel.color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Channel Specs & Features */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: currentChannel.color }}>
                      <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentChannel.color }} />
                      <span>{currentChannel.stats}</span>
                    </div>
                    
                    <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
                      {currentChannel.name}
                    </h3>

                    <div className="font-serif italic text-red-300 text-lg mt-1 font-normal">
                      {currentChannel.tagline}
                    </div>

                    <p className="mt-3 text-sm text-gray-300 leading-relaxed font-sans">
                      {currentChannel.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Direct video ad to WhatsApp trigger</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Bi-directional HubSpot, Shopify &amp; Stripe synchronization</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Full conversation telemetry logged to customer profile</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact?service=crm-sales-funnel"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/40 text-red-300 text-xs font-mono font-bold transition-all hover:scale-105"
                    >
                      <span>Deploy {currentChannel.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Live Conversation Simulation Card with Real Avatar */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-[#060a12] border border-white/10 p-5 md:p-6 shadow-2xl relative">
                    
                    {/* Fake App Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-gray-400 ml-2">NEXUS CONVERSATIONAL RUNTIME</span>
                      </div>
                      <span className="text-green-400 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Chat Stream with Real Avatars */}
                    <div className="space-y-4">
                      {/* Incoming Customer Message */}
                      <div className="flex items-start gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
                          <Image
                            src={currentChannel.sampleMessage.avatar}
                            alt={currentChannel.sampleMessage.sender}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="max-w-md rounded-2xl rounded-tl-none bg-white/10 border border-white/10 p-4 text-xs text-white">
                          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1 font-mono">
                            <span>{currentChannel.sampleMessage.sender}</span>
                            <span>{currentChannel.sampleMessage.time}</span>
                          </div>
                          <p className="leading-relaxed">{currentChannel.sampleMessage.text}</p>
                        </div>
                      </div>

                      {/* AI Response Message */}
                      <div className="flex items-start gap-3 justify-end">
                        <div className="max-w-md rounded-2xl rounded-tr-none bg-gradient-to-r from-red-900/60 to-red-900/60 border border-red-500/40 p-4 text-xs text-red-100 shadow-[0_0_25px_rgba(255,31,31,0.15)]">
                          <div className="flex items-center justify-between text-[10px] text-red-400 mb-1">
                            <span className="flex items-center gap-1 font-mono font-bold">
                              <TrendingUp className="w-3 h-3" /> NEXUS CONVERSION ENGINE
                            </span>
                            <span className="font-mono">Just now (0.32s)</span>
                          </div>
                          <p className="leading-relaxed">{currentChannel.sampleMessage.aiReply}</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-500 to-red-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-[0_0_15px_rgba(255,31,31,0.5)]">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Automated CRM Outcome Banner */}
                      <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-xs font-mono flex items-center justify-between">
                        <span className="flex items-center gap-2 font-bold">
                          <Zap className="w-4 h-4 text-green-400 shrink-0" />
                          {currentChannel.sampleMessage.outcome}
                        </span>
                        {currentChannel.sampleMessage.revenue && (
                          <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-extrabold">
                            {currentChannel.sampleMessage.revenue}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE VIDEO SHOWCASE (CLIENT VIDEOS INTEGRATED) */}
      {/* ========================================================================= */}
      <section id="video-showcase" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                PRODUCTION STUDIO REELS
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                Our creative productions,{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                  engineered to sell.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              Watch how our flagship commercial films, 3D animations, and podcast productions connect directly into automated revenue funnels.
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {VIDEO_SHOWCASES.map(v => (
              <button
                key={v.id}
                onClick={() => setActiveVideo(v.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  activeVideo === v.id
                    ? 'bg-red-500/20 border-red-400 text-white shadow-[0_0_30px_rgba(255,31,31,0.3)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-400'
                }`}
              >
                <div className="text-[10px] font-mono text-red-400 font-bold mb-1">{v.category}</div>
                <div className="text-xs font-bold text-white line-clamp-1">{v.title}</div>
                <div className="text-[10px] text-gray-400 mt-1 font-mono">{v.duration}</div>
              </button>
            ))}
          </div>

          {/* Main Video Cinema Theater Card */}
          <div className="rounded-3xl bg-[#090e1a] border border-red-500/30 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.85),0_0_45px_rgba(255,31,31,0.25)]">
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src={currentVideo.src}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted={isMuted}
              />

              {/* Video Overlay Controls & Specs */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

              {/* Top Header Information */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white pointer-events-auto">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span>{currentVideo.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-red-400" />}
                  </button>
                </div>
              </div>

              {/* Center Large Play/Pause overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-red-400 hover:bg-red-300 text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,31,31,0.9)] transition-all hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>
              </div>

              {/* Bottom Video Metadata Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto text-xs font-mono">
                <div>
                  <h4 className="text-base font-bold text-white font-['Syne']">{currentVideo.title}</h4>
                  <p className="text-gray-300 text-xs mt-0.5 font-sans hidden sm:block">{currentVideo.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  {currentVideo.metrics.map((m, idx) => (
                    <div key={idx} className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-red-400 font-bold text-sm font-mono">{m.stat}</div>
                      <div className="text-[9px] text-gray-400 uppercase font-sans">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Description Footnote */}
            <div className="p-6 bg-[#060a12] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-gray-300">
              <p className="max-w-3xl leading-relaxed font-sans">
                {currentVideo.description}
              </p>
              <Link
                href="/contact?service=crm-sales-funnel"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/40 text-red-300 font-mono font-bold transition-all flex items-center gap-2"
              >
                <span>Request Custom Pipeline Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ASYMMETRIC CLIENT SECTOR ARCHITECTURES */}
      {/* ========================================================================= */}
      <section id="verticals" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              CLIENT SECTOR ARCHITECTURES
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Where our creative funnels create{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                outsized ROI.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
              Tailored conversion mechanisms connecting high-production film assets to high-velocity checkout engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveUseCase(item.id)}
                className={`p-6 rounded-3xl bg-[#0a101f] border transition-all cursor-pointer flex flex-col justify-between ${
                  activeUseCase === item.id
                    ? 'border-red-400 shadow-[0_0_40px_rgba(255,31,31,0.3)] scale-[1.02]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-red-400 mb-3">
                    <span>{item.tag}</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 font-bold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Feature Image Artwork */}
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                  </div>

                  <h3 className="font-['Syne'] text-base font-bold text-white mb-1 leading-snug">
                    {item.title}{' '}
                    <span className="font-serif italic text-red-300 font-normal">
                      {item.cursiveAccent}
                    </span>
                  </h3>

                  <p className="text-xs text-gray-400 mb-4 leading-relaxed font-sans">
                    {item.subtitle}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-300 font-sans">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span>{item.bullet1}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span>{item.bullet2}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span>{item.bullet3}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <div>
                    <div className="font-['Syne'] text-xl font-bold text-red-300 font-mono">{item.metric}</div>
                    <div className="text-[10px] text-gray-400">{item.metricLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PERFORMANCE STATS BENTO GRID */}
      {/* ========================================================================= */}
      <section id="bento-metrics" className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                PROVEN AGENCY RESULTS
              </span>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                Real outcomes from brands{' '}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                  powered by NEXUS Pipeline.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-sans">
              Tested at massive concurrency across hundreds of thousands of daily consumer checkout events and high-ticket B2B deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-red-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(255,31,31,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>BUYER CONVERSATIONS</span>
                  <span className="text-green-400 font-bold">+18% vs LAST WEEK</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  1.28M
                </div>
                <div className="text-xs font-mono text-red-400 mt-2 uppercase tracking-widest">
                  Daily Autonomous Messages Processed
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                Seamlessly handled across WhatsApp Cloud API, Instagram DMs, SMS, and Webchat with zero queuing bottlenecks.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-red-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(255,31,31,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>COMMERCIAL AD ROAS</span>
                  <span className="text-red-400 font-bold">VERIFIED ATTRIBUTION</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-red-300 tracking-tight">
                  +34%
                </div>
                <div className="text-xs font-mono text-red-400 mt-2 uppercase tracking-widest">
                  Lift Across Omnichannel Funnels
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                1-click interactive checkout links sent in under 20 seconds eliminate mobile cart abandonment friction.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-stone-500/30 relative overflow-hidden shadow-[0_0_45px_rgba(201,204,209,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6">
                  <span>TIER-1 &amp; TIER-2 RESOLUTION</span>
                  <span className="text-stone-400 font-bold">&lt; 0.4S RESPONSE</span>
                </div>
                <div className="font-['Syne'] text-5xl sm:text-6xl font-extrabold text-stone-300 tracking-tight">
                  68%
                </div>
                <div className="text-xs font-mono text-stone-400 mt-2 uppercase tracking-widest">
                  Resolved Without Human Reps
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-6 pt-4 border-t border-white/10 font-sans leading-relaxed">
                Instant order tracking, address verification, and delivery guidance with automatic human rep handoff.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SPRINT DEPLOYMENT PACKAGES & PRICING */}
      {/* ========================================================================= */}
      <section id="pricing" className="relative py-24 px-4 md:px-8 z-10 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              DEPLOYMENT SPRINTS
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Clear, transparent{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
                sprint plans.
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
              No endless retainers. We architect, integrate, and stress-test your autonomous conversation engine with a dedicated engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Plan 1: Launchpad */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-gray-400 mb-2">TIER 01 • FOUNDATION</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Starter Funnel Launchpad</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-white mt-4">$3,800</div>
                <div className="text-xs text-gray-400 mt-1 font-mono">One-time sprint delivery (10 business days)</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>WhatsApp Business Cloud API setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>HubSpot or Klaviyo lifecycle synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>3 core conversion flows (Video Ad, Cart, Support)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>14-day post-launch telemetry monitoring</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=starter"
                className="mt-8 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs text-center transition-all"
              >
                Select Starter ➔
              </Link>
            </div>

            {/* Plan 2: Omnichannel Growth (Featured) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#090e1a] border-2 border-red-400 relative flex flex-col justify-between shadow-[0_0_55px_rgba(255,31,31,0.35)]">
              <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-red-400 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-[0_0_15px_rgba(255,31,31,0.8)]">
                MOST POPULAR
              </div>

              <div>
                <div className="text-xs font-mono text-red-400 mb-2">TIER 02 • SCALE ENGINE</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Omnichannel Growth Engine</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-red-300 mt-4">$6,500 <span className="text-base text-gray-400 font-sans font-normal">/ mo</span></div>
                <div className="text-xs text-gray-400 mt-1 font-mono">Full engineering team + continuous optimization</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-200 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>WhatsApp, Instagram DMs, SMS &amp; Webchat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NEXUS Telephony Voice AI Call Intake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Bi-directional Salesforce / HubSpot / Shopify</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Dynamic 1-click cart recovery &amp; checkout links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Dedicated Slack channel with founding engineering team</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=growth"
                className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF1F1F] to-[#8B0000] text-white font-mono font-bold text-xs text-center shadow-[0_0_25px_rgba(255,31,31,0.5)] transition-all hover:scale-105"
              >
                Launch Growth Engine ➔
              </Link>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-stone-400 mb-2">TIER 03 • ENTERPRISE</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">Enterprise Architecture</h3>
                <div className="font-['Syne'] text-4xl font-extrabold text-stone-300 mt-4">$12,500</div>
                <div className="text-xs text-gray-400 mt-1 font-mono">Custom VPC / On-Prem / Unlimited Threads</div>

                <div className="space-y-3 mt-8 pt-6 border-t border-white/10 text-xs text-gray-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Private isolated vector memory &amp; fine-tuned LLMs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>SOC2 Type II &amp; HIPAA compliance architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>99.99% uptime guarantee with 15-min SLA response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Custom legacy ERP / database integrations</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?service=crm-sales-funnel&plan=enterprise"
                className="mt-8 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs text-center transition-all"
              >
                Inquire Enterprise ➔
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-[#060a12]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest text-red-400 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Everything you need to know.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0a101f] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-bold text-white font-['Syne']">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-red-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 font-sans"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. 24/7 SUPPORT & FAST BOOKING CTA */}
      {/* ========================================================================= */}
      <section className="relative py-24 px-4 md:px-8 border-t border-white/10 z-10 bg-gradient-to-b from-[#060a12] to-[#04060a]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-red-900/30 via-red-900/20 to-stone-900/30 border border-red-500/40 p-8 md:p-14 text-center relative overflow-hidden shadow-[0_0_80px_rgba(255,31,31,0.15)]">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>24/7 ARCHITECTURE SUPPORT FROM SENIOR ENGINEERS — 97% SATISFACTION</span>
          </div>

          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Ready to turn your video campaigns into{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] to-[#8B0000]">
              cash collected?
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto font-sans">
            Book a 20-minute technical architecture call with our lead engineering and creative team. We’ll map your conversion topology and show you live ROI projections.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=crm-sales-funnel"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF1F1F] via-[#8B0000] to-[#C9CCD1] text-white font-bold text-sm shadow-[0_0_30px_rgba(255,31,31,0.5)] hover:shadow-[0_0_50px_rgba(255,31,31,0.8)] transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All 11 Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. VARTALAAP FOOTER & TELEMETRY */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#04060a] border-t border-white/10 px-4 py-12 md:px-8 z-10 text-xs font-mono text-gray-400 overflow-hidden">
        
        {/* Luminous Footer Glow Image Asset */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[300px] pointer-events-none opacity-50 mix-blend-screen">
          <Image
            src="/vartalaap/footer-glow.webp"
            alt="Footer Glow"
            width={1920}
            height={1210}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-white font-bold">NEXUS Growth • PIPELINE CONVERSION SUITE</span>
            <span className="text-gray-500 hidden md:inline">| Service 11 Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Agency Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services Directory
            </Link>
            <Link href="/services/video-production-editing" className="hover:text-white transition-colors">
              Video Production
            </Link>
            <Link href="/services/ai-automation" className="hover:text-white transition-colors">
              AI Automation
            </Link>
            <Link href="/contact" className="text-red-400 hover:underline font-bold">
              Book Project ➔
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
