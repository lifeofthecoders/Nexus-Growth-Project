'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Smartphone, 
  WifiOff, 
  Fingerprint, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Battery,
  Wifi,
  Signal,
  CreditCard,
  Flame,
  Music,
  ShoppingBag,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Simulated App Screen Types
interface AppScreen {
  id: string;
  name: string;
  category: string;
  icon: any;
  color: string;
  accentBg: string;
  headerTitle: string;
  metrics: { label: string; val: string }[];
  highlight: string;
  details: string;
}

const APPS: AppScreen[] = [
  {
    id: 'pay',
    name: 'NEXUS Pay',
    category: 'FINTECH • COMMERCE',
    icon: CreditCard,
    color: '#FF1F1F',
    accentBg: 'from-red-600/30 via-red-900/40 to-black',
    headerTitle: 'Biometric Smart Wallet',
    metrics: [
      { label: 'CHECKOUT LATENCY', val: '180ms' },
      { label: 'AUTH PROTOCOL', val: 'FaceID Secure Enclave' },
      { label: 'CONVERSION LIFT', val: '+42.8%' },
    ],
    highlight: '1-Click Apple Pay & Google Pay Native Checkout Flow',
    details: 'Zero webview friction. Hardware-backed secure tokenization reduces checkout drop-off to under 3.2%.'
  },
  {
    id: 'kinetic',
    name: 'Pulse 120Hz',
    category: 'FITNESS • SENSORS',
    icon: Flame,
    color: '#FF9500',
    accentBg: 'from-orange-600/30 via-red-900/40 to-black',
    headerTitle: 'Sensor Telemetry OS',
    metrics: [
      { label: 'RENDER FRAME-RATE', val: '120 FPS' },
      { label: 'GESTURE PHYSICS', val: 'Skia Canvas GPU' },
      { label: 'BATTERY OVERHEAD', val: '< 1.4%/hr' },
    ],
    highlight: 'Fluid 120Hz Gesture Responders & Skia 2D Shaders',
    details: 'Locked 120FPS animations with zero jank. Complex fluid physics executed directly on device GPU.'
  },
  {
    id: 'audio',
    name: 'AudioVault',
    category: 'MEDIA • OFFLINE FIRST',
    icon: Music,
    color: '#C9CCD1',
    accentBg: 'from-stone-600/30 via-violet-900/40 to-black',
    headerTitle: 'Offline Sync Engine',
    metrics: [
      { label: 'LOCAL DB ENGINE', val: 'WatermelonDB SQLite' },
      { label: 'OFFLINE RETENTION', val: '100% Local' },
      { label: 'BACKGROUND SYNC', val: 'Smart Delta Mesh' },
    ],
    highlight: 'Zero-Latency Offline-First SQLite Architecture',
    details: 'Instant optimistic UI mutations. Users listen, edit, and create with zero internet connection dependency.'
  },
  {
    id: 'commerce',
    name: 'Atelier Luxe',
    category: 'COMMERCE • AR PREVIEW',
    icon: ShoppingBag,
    color: '#FF4444',
    accentBg: 'from-red-600/30 via-red-900/40 to-black',
    headerTitle: 'Spatial Luxury Store',
    metrics: [
      { label: 'AR LOAD SPEED', val: '0.42s' },
      { label: 'RETENTION DEPTH', val: '4.8x avg' },
      { label: 'CART CONVERSION', val: '12.4%' },
    ],
    highlight: 'Interactive 3D Product Viewers & Haptic Feedback',
    details: 'Tactile micro-interactions and high-resolution spatial rendering optimized for modern flagship mobile chips.'
  },
  {
    id: 'camera',
    name: 'RAW Studio',
    category: 'VISION • COMPUTE',
    icon: Sparkles,
    color: '#FF1F1F',
    accentBg: 'from-red-600/30 via-red-900/40 to-black',
    headerTitle: 'Spatial Vision Engine',
    metrics: [
      { label: 'COMPUTE LATENCY', val: '12ms' },
      { label: 'COLOR PROFILE', val: 'Apple ProRAW' },
      { label: 'HDR PIPELINE', val: '10-Bit DCI' },
    ],
    highlight: 'Hardware Direct Sensor Capture & HDR Shaders',
    details: 'Zero pipeline latency for camera buffer processing directly into Metal & Vulkan textures.'
  },
  {
    id: 'sync',
    name: 'SyncMesh',
    category: 'REALTIME • CLOUD',
    icon: Zap,
    color: '#C9CCD1',
    accentBg: 'from-zinc-600/30 via-neutral-900/40 to-black',
    headerTitle: 'Decentralized State',
    metrics: [
      { label: 'PEER LATENCY', val: '< 24ms' },
      { label: 'REPLICAS', val: 'Global Edge' },
      { label: 'UPTIME SLA', val: '99.99%' },
    ],
    highlight: 'CRDT Conflict-Free Real-time Collaborative State',
    details: 'Peer-to-peer optimistic replication with instantaneous sub-second global consistency.'
  }
];

const DELIVERABLES = [
  {
    icon: Smartphone,
    tag: 'NATIVE PERFORMANCE',
    title: 'Fluid 120Hz Gesture Physics',
    desc: 'Native iOS & Android interactions engineered with React Native Reanimated and Skia. Smooth 120FPS physics, zero frame drops, and tactile haptic feedback.',
    specs: ['React Native + Expo SDK', 'Skia 2D Canvas Engine', 'Haptic Touch Integration', 'Smooth Gesture Responders'],
    color: '#C9CCD1',
  },
  {
    icon: WifiOff,
    tag: 'ARCHITECTURE',
    title: 'Offline-First Local Sync Engine',
    desc: 'Local SQLite and WatermelonDB caching with background synchronization. Your users can browse, save, and create with zero connection latency.',
    specs: ['WatermelonDB / SQLite', 'Conflict Resolution Sync', 'Instant Local Mutation', 'Background Refresh'],
    color: '#FF1F1F',
  },
  {
    icon: Fingerprint,
    tag: 'SECURITY & AUTH',
    title: 'Biometrics & Secure Enclave Keys',
    desc: 'Hardware-backed security using FaceID, TouchID, and Android Biometrics with encrypted token storage in Apple Keychain and Android Keystore.',
    specs: ['FaceID & TouchID Auth', 'Hardware Key Storage', 'Zero Plaintext Tokens', 'OWASP Mobile Compliant'],
    color: '#FF1F1F',
  },
  {
    icon: Zap,
    tag: 'COMMERCE & IAP',
    title: 'In-App Subscriptions & Payments',
    desc: 'Frictionless Apple App Store and Google Play billing pipelines via RevenueCat with automated entitlement syncing and churn mitigation.',
    specs: ['Apple In-App Purchases', 'Google Play Billing', 'RevenueCat Telemetry', 'Paywall A/B Testing'],
    color: '#FF1F1F',
  },
  {
    icon: Layers,
    tag: 'GROWTH ENGINE',
    title: 'Smart Push & Retention Sequences',
    desc: 'Contextual, personalized push notifications and in-app messaging via OneSignal that re-engage dormant users and drive repeat session depth.',
    specs: ['Rich Media Push Alerts', 'Deep Link Routing', 'Behavioral Segments', 'Retention Heatmaps'],
    color: '#FF1F1F',
  },
  {
    icon: ShieldCheck,
    tag: 'DEPLOYMENT',
    title: 'App Store Optimization & Submissions',
    desc: 'Turnkey App Store & Google Play approval management. We handle metadata, screenshots, review appeals, and fast-track submission cycles.',
    specs: ['App Store Approval SLA', 'Google Play Verification', 'Keyword Optimization (ASO)', 'TestFlight Beta Pipelines'],
    color: '#C9CCD1',
  },
];

export default function AppDevelopmentExperience() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const activeApp = APPS[activeAppIndex];

  // Cursor position with spring physics
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Detect touch / coarse pointer
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      const handleMouseDown = () => setIsPressed(true);
      const handleMouseUp = () => setIsPressed(false);

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [mouseX, mouseY]);

  // Scroll tied 3D device transform
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const deviceRotateX = useTransform(scrollYProgress, [0, 1], [8, -12]);
  const deviceRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 6, -4]);
  const deviceScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.04, 0.96]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Auto-advance apps when scrolling through hero
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v > 0.15 && v < 0.45 && activeAppIndex !== 1) {
        setActiveAppIndex(1);
      } else if (v >= 0.45 && v < 0.75 && activeAppIndex !== 2) {
        setActiveAppIndex(2);
      } else if (v >= 0.75 && activeAppIndex !== 3) {
        setActiveAppIndex(3);
      } else if (v <= 0.15 && activeAppIndex !== 0) {
        setActiveAppIndex(0);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeAppIndex]);

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FF1F1F] selection:text-white overflow-hidden">
      {/* 1. Touch-Pulse Custom Cursor */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          style={{ x: mouseX, y: mouseY }}
        >
          {/* Central Touch Point */}
          <motion.div 
            animate={{
              scale: isPressed ? 0.75 : 1,
              backgroundColor: activeApp.color,
            }}
            transition={{ duration: 0.15 }}
            className="w-3.5 h-3.5 rounded-full shadow-[0_0_12px_rgba(255,31,31,0.8)] border border-white/50"
          />
          {/* Expanding Tap Ripple Ring */}
          <motion.div 
            animate={{
              scale: isPressed ? 2.4 : [1, 1.35, 1],
              opacity: isPressed ? 0.9 : [0.4, 0.15, 0.4],
              borderColor: activeApp.color,
            }}
            transition={{
              duration: isPressed ? 0.2 : 2,
              repeat: isPressed ? 0 : Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-8 h-8 rounded-full border-2"
          />
        </motion.div>
      )}

      {/* 2. Soft Moving Gradient Mesh (App-icon style drifting colors) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-red-600/25 via-red-500/20 to-red-400/10 blur-[120px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-stone-600/20 via-pink-500/15 to-red-500/10 blur-[130px] will-change-transform"
        />
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header Breadcrumbs / Service Tag */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F1F] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
              DISCIPLINE 02 • NEXUS NATIVE CORE
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-semibold">
              EXPO SDK 52
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-semibold">
              REACT NATIVE 0.76
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400 font-semibold">
              120Hz SKIA READY
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section with 3D Phone Tilt Gallery */}
      <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-24 lg:min-h-[92vh] flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Hero Narrative & Interactive App Switcher */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hardware-Accelerated Mobile Engineering</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.88] text-white">
            Native iOS &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white mt-1 block">
              Android Architecture.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] max-w-lg leading-relaxed">
            Fluid 120Hz gesture physics engineered on Expo SDK 52.
          </p>

          {/* Interactive Screen Selector Dock (6 App Tiles) */}
          <div className="pt-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#6E7177] mb-3 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-[#FF1F1F]" />
              <span>Tap to Preview Screen Architectures:</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {APPS.map((app, idx) => {
                const Icon = app.icon;
                const isActive = idx === activeAppIndex;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveAppIndex(idx)}
                    className={cn(
                      "flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left group relative",
                      isActive 
                        ? "bg-white/15 border-red-400 shadow-[0_0_20px_rgba(255,31,31,0.4)]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: app.color }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-white truncate">{app.name}</p>
                      <p className="text-[10px] font-mono text-gray-400 truncate">{app.category.split('•')[0].trim()}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hardware Telemetry Dials */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <div className="p-3 rounded-xl bg-[#121214] border border-white/10 text-center">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#6E7177]">PROMOTION DISPLAY</span>
              <span className="block font-mono text-sm sm:text-base font-bold text-white mt-0.5">120 FPS Locked</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121214] border border-white/10 text-center">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#6E7177]">BATTERY OVERHEAD</span>
              <span className="block font-mono text-sm sm:text-base font-bold text-emerald-400 mt-0.5">&lt; 1.4%/hr</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121214] border border-white/10 text-center">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#6E7177]">BIOMETRIC AUTH</span>
              <span className="block font-mono text-sm sm:text-base font-bold text-[#FF1F1F] mt-0.5">180ms FaceID</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-red-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_25px_rgba(255,31,31,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Initiate App Sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="font-mono text-xs text-gray-400">
              ⚡ 4–8 week turnkey deployment SLA
            </span>
          </div>
        </div>

        {/* Right Column: 3D Perspective Device Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-6 [perspective:1400px]">
          <motion.div
            style={{
              rotateX: deviceRotateX,
              rotateY: deviceRotateY,
              scale: deviceScale,
              y: deviceY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[320px] sm:w-[360px] h-[660px] sm:h-[720px] rounded-[52px] p-3.5 bg-gradient-to-b from-[#2c2e38] via-[#1a1c24] to-[#0c0d12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,31,31,0.25)] border-[4px] border-[#3f4354] will-change-transform"
          >
            {/* Outer Glow Ring */}
            <motion.div 
              animate={{
                borderColor: [activeApp.color + '55', activeApp.color + 'cc', activeApp.color + '55'],
                boxShadow: [
                  `0 0 25px ${activeApp.color}33`,
                  `0 0 45px ${activeApp.color}66`,
                  `0 0 25px ${activeApp.color}33`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-[3px] rounded-[54px] border-[2px] pointer-events-none"
            />

            {/* Device Volume & Power Buttons */}
            <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-[#3a3d4c] rounded-l-sm" />
            <div className="absolute -left-[7px] top-42 w-[3px] h-14 bg-[#3a3d4c] rounded-l-sm" />
            <div className="absolute -left-[7px] top-60 w-[3px] h-14 bg-[#3a3d4c] rounded-l-sm" />
            <div className="absolute -right-[7px] top-36 w-[3px] h-18 bg-[#3a3d4c] rounded-r-sm" />

            {/* Inner Screen Bezel */}
            <div className="relative w-full h-full rounded-[44px] bg-[#090a0f] overflow-hidden flex flex-col border-[2px] border-white/10">
              {/* Dynamic Island / Speaker Pill */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-28 h-7 bg-black rounded-full flex items-center justify-between px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1c1d24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 animate-pulse" />
              </div>

              {/* Status Bar */}
              <div className="relative z-20 flex items-center justify-between px-7 pt-4 pb-2 text-[11px] font-mono text-white/80">
                <span className="font-bold tracking-tight">9:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Simulated Screen Content with Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp.id}
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.04, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex-1 flex flex-col justify-between p-6 bg-gradient-to-b",
                    activeApp.accentBg
                  )}
                >
                  {/* Screen Header */}
                  <div className="pt-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 border border-white/20 text-white">
                        {activeApp.category}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{activeApp.headerTitle}</h3>
                    <p className="text-xs text-white/80 font-mono leading-relaxed">{activeApp.highlight}</p>
                  </div>

                  {/* Interactive Card / Chart in Mobile Mockup */}
                  <div className="my-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/70">ARCHITECTURAL SPEC</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> VERIFIED
                      </span>
                    </div>

                    <p className="text-xs text-white/90 leading-relaxed">
                      {activeApp.details}
                    </p>

                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: activeApp.color }}
                      />
                    </div>
                  </div>

                  {/* Mock Action Bar in Screen */}
                  <div className="space-y-2.5 pb-2">
                    <button 
                      className="w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                      style={{ backgroundColor: activeApp.color }}
                    >
                      <span>Simulate {activeApp.name} Action</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[10px] font-mono text-center text-white/60">
                      Drag or swipe to preview adjacent architecture states
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Home Indicator Bar */}
              <div className="py-2 flex justify-center bg-black">
                <div className="w-32 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Grid with Soft Glows */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 border-t border-white/10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
            TECHNICAL ARTIFACTS &amp; DELIVERABLES
          </span>
          <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
            The 6 Mobile Engineering Pillars
          </h2>
          <p className="font-mono text-sm text-gray-400 mt-2 max-w-2xl">
            Every application built by NEXUS Growth ships with strict enterprise-grade performance SLAs, security certifications, and monetization flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((d, idx) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-7 backdrop-blur-sm transition-all overflow-hidden"
              >
                {/* Edge Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 30px ${d.color}22, 0 0 20px ${d.color}15`
                  }}
                />

                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/15"
                    style={{ backgroundColor: `${d.color}22`, color: d.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span 
                    className="font-mono text-[10px] font-bold px-2.5 py-1 rounded border"
                    style={{ borderColor: `${d.color}44`, color: d.color, backgroundColor: `${d.color}11` }}
                  >
                    {d.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                  {d.title}
                </h3>
                <p className="font-mono text-xs text-gray-400 leading-relaxed mt-2.5 mb-5">
                  {d.desc}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-white/10">
                  {d.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 font-mono text-[11px] text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Direct Call to Action Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="rounded-3xl border border-red-500/40 bg-gradient-to-r from-red-950/40 via-red-950/30 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_50px_rgba(255,31,31,0.2)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
              READY TO BUILD FOR 120HZ?
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Deploy Your Flagship Mobile Application.
            </h3>
            <p className="font-mono text-sm text-gray-300 leading-relaxed">
              Book a 30-minute mobile engineering sprint consult. We’ll review your Figma wireframes or legacy code, map gesture physics, and draft a 6-week release timeline.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-red-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(255,31,31,0.6)] transition-all"
              >
                <span>Schedule Mobile Triage</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-gray-400">
                Direct engineer consult • Zero sales fluff
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
