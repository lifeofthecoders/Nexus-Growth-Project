'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Sparkles, 
  Film, 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  Cpu, 
  Zap, 
  Clock, 
  Sliders
} from 'lucide-react';
import { VideoTimelineLutSuite } from './VideoTimelineLutSuite';

interface ReelItem {
  id: string;
  title: string;
  category: 'brand' | 'commercial' | 'documentary' | 'motion' | 'podcast' | 'real-estate' | 'short-form';
  categoryLabel: string;
  videoSrc: string;
  duration: string;
  specs: string[];
  metric: string;
  submetric: string;
  desc: string;
  client: string;
  director: string;
  colorGrade: string;
  featured?: boolean;
}

const REELS: ReelItem[] = [
  {
    id: '01',
    title: 'AURA Wearables — The Horizon Vision',
    category: 'brand',
    categoryLabel: 'Brand Film',
    videoSrc: '/videos/video-production/brand-film.mp4',
    duration: '01:42',
    specs: ['ARRI Alexa Mini LF', 'Master Anamorphic 2.39:1', 'DaVinci 33-Point LUT', '4K 24FPS'],
    metric: '91.4% COMPLETION RATE',
    submetric: '+340% DIRECT CHECKOUT LIFT',
    desc: 'Cinematic brand film crafted for AURA’s global flagship unveiling. Organic golden hour lighting, slow-burn match cuts, and custom spatial score that grips subconscious attention.',
    client: 'AURA Biosystems',
    director: 'Marcus Thorne',
    colorGrade: 'Kodak 2383 Film Print Emulation',
    featured: true,
  },
  {
    id: '02',
    title: 'SOLSTICE Coffee — Cold Brew Nitro Velocity',
    category: 'commercial',
    categoryLabel: 'Commercial Reel',
    videoSrc: '/videos/video-production/commercial-reel.mp4',
    duration: '00:45',
    specs: ['RED V-Raptor 8K', '120FPS Phantom High-Speed', 'Kinetic Sound Design', '16:9 + 9:16 Master'],
    metric: '4.2X VERIFIED ROAS',
    submetric: '2.1M SOCIAL IMPRESSIONS',
    desc: 'High-energy commercial cut featuring speed ramps, tactile micro match-cuts, and liquid droplet Foley audio engineered to stop feeds and drive DTC purchasing velocity.',
    client: 'Solstice Roasters',
    director: 'Elena Rostova',
    colorGrade: 'Teal & Rich Amber Contrast',
    featured: true,
  },
  {
    id: '03',
    title: 'Legacy of the Craft — The Artisan Shokunin',
    category: 'documentary',
    categoryLabel: 'Documentary',
    videoSrc: '/videos/video-production/documentary.mp4',
    duration: '04:18',
    specs: ['Sony FX9 Full Frame', 'Cooke S4/i Prime Glass', 'Spatial Audio Foley', '4K HDR DCI'],
    metric: '14:20 AVG WATCH TIME',
    submetric: 'AWWWARDS SOTD FEATURED',
    desc: 'Long-form narrative documentary capturing multi-generational craftsmanship. Natural ambient light, profound emotional pacing, and resonant orchestral scoring.',
    client: 'Kyoto Atelier Guild',
    director: 'Yusuf M.',
    colorGrade: 'Muted Japanese Washi Tones',
  },
  {
    id: '04',
    title: 'KINETIC OS — Spatial Architecture 3D',
    category: 'motion',
    categoryLabel: '3D Motion Graphics',
    videoSrc: '/videos/video-production/motion-graphics.mp4',
    duration: '01:12',
    specs: ['Cinema 4D + Octane', 'After Effects 3D Space', 'Exploded CAD Meshes', 'Alpha Channel Ready'],
    metric: '340K+ ENGAGEMENTS',
    submetric: '85% LEAD FLOW VELOCITY',
    desc: 'Exploded 3D spatial device mechanics, holographic UI screen tracking, and fluid particle simulations designed for enterprise SaaS hardware launch.',
    client: 'Kinetic OS Platform',
    director: 'Studio VFX Team',
    colorGrade: 'Neon Cyber Blue & Pure Obsidian',
    featured: true,
  },
  {
    id: '05',
    title: 'Founders Uncut — Studio Dialogue Series',
    category: 'podcast',
    categoryLabel: 'Podcast & Interview',
    videoSrc: '/videos/video-production/podcast-editing.mp4',
    duration: '02:30',
    specs: ['3-Camera Sony FX6 Setup', '-14 LUFS Broadcast Audio', 'Smart Graphic Overlays', 'Multicam Cut'],
    metric: '78% 30-MIN RETENTION',
    submetric: '500K+ YOUTUBE REACH',
    desc: 'Broadcast-grade studio podcast mastering with dynamic multicam switching, algorithmic animated callouts, and audio normalized for studio AirPods clarity.',
    client: 'Ventures & Visionaries',
    director: 'Audio & Post Labs',
    colorGrade: 'Studio Tungsten & Slate Dark',
  },
  {
    id: '06',
    title: 'The Glass Pavilion — Luxury Architectural Showcase',
    category: 'real-estate',
    categoryLabel: 'Real Estate & Luxury',
    videoSrc: '/videos/video-production/real-estate.mp4',
    duration: '01:55',
    specs: ['DJI Ronin 4D 6K', 'Inspire 3 Cinema Drone', 'Golden Hour Gimbal Glide', '4K 60FPS HDR'],
    metric: '$12.5M ASSET CLOSED',
    submetric: '14 DAYS TO TRANSACTION',
    desc: 'Sweeping architectural walkthrough with seamless indoor-to-outdoor drone passes, sunset lens flares, and serene acoustic piano accompaniment.',
    client: 'Strata Architectural Properties',
    director: 'Marcus Thorne',
    colorGrade: 'Golden Hour Warmth & Deep Blacks',
  },
  {
    id: '07',
    title: 'Algorithmic Virality — The 3-Second Hook',
    category: 'short-form',
    categoryLabel: 'Short-Form Viral Reel',
    videoSrc: '/videos/video-production/short-form-reel.mp4',
    duration: '00:38',
    specs: ['9:16 Native Vertical', 'Kinetic Animated Typography', 'Sound FX Risers & Whooshes', '4K 60FPS'],
    metric: '2.4M ORGANIC VIEWS',
    submetric: '48K SHARES & SAVES',
    desc: 'Engineered retention framework: pattern interrupts every 1.8 seconds, animated kinetic typography, trending acoustic cues, and instant loop continuity.',
    client: 'Verve Mobile Studio',
    director: 'Viral Sprints Lab',
    colorGrade: 'High-Saturation Pop & Glow',
    featured: true,
  },
];

const SOFTWARE_STACK = [
  { name: 'DaVinci Resolve Studio', role: 'Color Grading & Mastering', icon: '🎨', tag: 'ACEScc' },
  { name: 'Adobe Premiere Pro', role: 'Precision Match-Cutting', icon: '✂️', tag: 'Native Timeline' },
  { name: 'Adobe After Effects', role: 'Kinetic 3D Motion & VFX', icon: '⚡', tag: 'Cinema Compositing' },
  { name: 'Cinema 4D / Blender', role: 'Spatial 3D & Product CGI', icon: '🧊', tag: 'Octane Shaders' },
  { name: 'Logic Pro & Pro Tools', role: 'Foley & -14 LUFS Sound', icon: '🔊', tag: 'Spatial Audio' },
  { name: 'Neural AI Studio', role: 'AI Upscaling & Frame Flow', icon: '🧠', tag: 'Topaz 4K Engine' },
];

const SPRINT_PLANS = [
  {
    tier: 'ESSENTIAL SPRINT',
    price: '$3,500',
    period: '/month',
    desc: 'For high-growth brands that need consistent, high-retention short-form video volume and weekly turnaround.',
    color: '#38bdf8',
    features: [
      '8x Vertical Short-Form Viral Reels (9:16)',
      'High-velocity animated captions & sound design',
      'Trending audio research & viral hook scripts',
      '48-hour sprint delivery per batch',
      'Frame.io visual feedback integration',
      'Full commercial audio licensing',
    ],
    cta: 'Select Essential Sprint',
  },
  {
    tier: 'ELITE PARTNER',
    badge: '✦ MOST POPULAR',
    price: '$7,500',
    period: '/month',
    desc: 'The complete creative video department for category leaders who require flagship commercials, 3D motion, and viral retention.',
    color: '#818cf8',
    highlighted: true,
    features: [
      '1x Flagship 4K Commercial or Brand Video (16:9)',
      '16x Vertical Short-Form Viral Reels (9:16)',
      'Custom 3D Motion Graphics & Product CGI',
      'Bespoke DaVinci Resolve 33-Point LUT Grade',
      'Original Sonic Score & Spatial Foley Design',
      'Dedicated Senior Director & Lead Colorist',
      'Real-time Slack channel & 24h sprint turns',
    ],
    cta: 'Deploy Elite Video Suite',
  },
  {
    tier: 'STUDIO CINEMATIC',
    badge: 'CUSTOM PRODUCTION',
    price: '$15,000+',
    period: '/engagement',
    desc: 'Full-scale on-location cinema productions: documentary films, multi-camera sets, TV spots, and master brand epics.',
    color: '#c084fc',
    features: [
      'Multi-day on-location cinema shoot (ARRI / RED)',
      'Full camera crew, gaffer, sound engineer & director',
      'Long-form documentary or TV broadcast commercial',
      'Complete raw footage handoff & ProRes 4444 Master',
      'Bespoke original orchestral score composition',
      'Executive creative direction & storyboard development',
    ],
    cta: 'Book Custom Production Call',
  },
];

const FAQS = [
  {
    q: 'How fast is your video production and editing sprint turnaround?',
    a: 'For our monthly sprint partners (Essential & Elite), standard short-form reel batches deliver within 48 to 72 hours via Frame.io. High-production 4K commercials and brand films are produced and delivered within structured 1-week to 2-week sprint cycles with interactive staging reviews at every milestone.',
  },
  {
    q: 'Can we send you our existing raw footage, or do you shoot everything?',
    a: 'Both! You can upload your raw camera files, phone recordings, podcast logs, or 3D assets to our high-speed cloud drive, and our senior editing suite handles color grading, sound design, and match-cutting. Alternatively, our cinema production crew handles full on-location 4K/8K shooting with ARRI, RED, and drone cinematography.',
  },
  {
    q: 'How do you engineer videos for algorithmic retention?',
    a: 'We dissect viewer drop-off analytics with mathematical rigor. Every reel incorporates a 3-second hook frame, kinetic pattern interrupts every 1.8 seconds, animated dynamic typography, custom risers and sub-bass drops, and seamless loop transitions that trick social algorithms into replaying the video.',
  },
  {
    q: 'What camera and mastering specs do you deliver in?',
    a: 'We master in pristine 4K DCI (3840x2160 or 4096x2160) at 60FPS or cinematic 24FPS. We deliver Apple ProRes 422 HQ / 4444 masters alongside optimized H.264 / H.265 files formatted for web headers, YouTube, Instagram Reels, TikTok, and Meta Ads Manager with calibrated color profiles (Rec.709 & DCI-P3).',
  },
  {
    q: 'Do we own all rights and raw project files?',
    a: 'Yes, 100%. Upon final delivery, you receive all full commercial rights, licensed audio stems, final 4K renders, and optional DaVinci Resolve / Premiere project archives. Zero royalties, zero recurring licensing fees.',
  },
];

export function EnchantedVideoExperience() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);
  const [mutedReels, setMutedReels] = useState<{ [key: string]: boolean }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [colorGradeSplit, setColorGradeSplit] = useState<number>(55);

  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll controls
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgMountainY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const midMountainY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const fgMountainY = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const smokeY = useTransform(scrollYProgress, [0, 1], ['0%', '75%']);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalReel(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered reels
  const filteredReels = selectedCategory === 'all'
    ? REELS
    : REELS.filter((r) => r.category === selectedCategory);

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedReels((prev) => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id],
    }));
  };

  return (
    <div className="relative w-full bg-transparent text-white selection:bg-[#C9CCD1] selection:text-white font-sans overflow-x-hidden min-h-screen">
      

      {/* ========================================================================= */}
      {/* 2. ATMOSPHERIC PARALLAX MOUNTAIN HERO */}
      {/* ========================================================================= */}
      <section 
        ref={heroRef}
        id="hero"
        className="relative min-h-[110vh] flex flex-col justify-between items-center pt-32 pb-16 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, #1e1b4b 0%, #0c0a20 45%, #050508 100%)'
        }}
      >
        {/* Ambient Top Violet Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#C9CCD1]/30 via-[#C9CCD1]/20 to-[#C9CCD1]/10 blur-[140px] rounded-full pointer-events-none opacity-40" />

        {/* Parallax Layer 1: Background Mountain Transition */}
        <motion.div 
          style={{ y: bgMountainY }}
          className="absolute inset-x-0 bottom-0 h-[80vh] pointer-events-none select-none z-10"
        >
          <Image
            src="/enchanted/mountains/mountain-bg.webp"
            alt="Enchanted Horizon Mountains"
            fill
            priority
            className="object-cover object-bottom opacity-75"
          />
        </motion.div>

        {/* Parallax Layer 2: Mid-Ground Ridges */}
        <motion.div 
          style={{ y: midMountainY }}
          className="absolute inset-x-0 bottom-0 h-[65vh] pointer-events-none select-none z-20"
        >
          <Image
            src="/enchanted/mountains/mountain-mid.webp"
            alt="Enchanted Midground Peaks"
            fill
            priority
            className="object-cover object-bottom opacity-85"
          />
        </motion.div>

        {/* Parallax Layer 3: Smokes / Atmospheric Mist */}
        <motion.div 
          style={{ y: smokeY }}
          className="absolute inset-x-0 bottom-0 h-[50vh] pointer-events-none select-none z-25 opacity-90"
        >
          <Image
            src="/enchanted/mountains/smokes.webp"
            alt="Atmospheric Mist"
            fill
            className="object-cover object-bottom"
          />
        </motion.div>

        {/* Parallax Layer 4: Foreground Mountain Peaks */}
        <motion.div 
          style={{ y: fgMountainY }}
          className="absolute inset-x-0 bottom-0 h-[38vh] pointer-events-none select-none z-30"
        >
          <Image
            src="/enchanted/mountains/mountain-fg.webp"
            alt="Foreground Obsidian Rock"
            fill
            className="object-cover object-bottom"
          />
        </motion.div>

        {/* Perspective Grid Floor Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-72 z-35 pointer-events-none opacity-20 overflow-hidden">
          <Image
            src="/enchanted/grid-perspective.svg"
            alt="Perspective Grid"
            fill
            className="object-cover object-bottom mix-blend-screen"
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-40 max-w-5xl mx-auto text-center flex flex-col items-center mt-10"
        >
          {/* Glowing Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A1A]/[0.06] border border-white/15 backdrop-blur-xl shadow-[0_0_20px_rgba(201,204,209,0.25)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9CCD1] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-200 font-semibold">
              ✦ NEXUS Growth Cinematic Labs • 4K PRODUCTION & POST
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Cinematic Film &amp; <br />
            <span className="font-serif normal-case italic font-normal tracking-normal bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,31,31,0.4)]">
              High-Retention Reels.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-sm sm:text-base text-[#C9CCD1] font-mono leading-relaxed">
            4K DCI cinematography engineered for algorithmic audience grip.
          </p>

          {/* Hero CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#showcase"
              className="relative overflow-hidden group bg-[#FF1F1F] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-[0_0_24px_rgba(255,31,31,0.4)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Reel Showcase</span>
              <Play className="w-3.5 h-3.5 fill-white text-white group-hover:translate-x-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#222] border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>Book 30-Min Sprint Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9CCD1]" />
            </Link>
          </div>

          {/* 4K Timeline Scrubber & Kodak 2383 LUT Suite */}
          <VideoTimelineLutSuite />

          {/* Quick Metrics Ticker */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 border-t border-white/10 pt-8 w-full max-w-4xl text-left">
            <div>
              <span className="font-mono text-xs uppercase text-gray-400 block">Average Retention</span>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 block">85.4%</span>
              <span className="text-[11px] text-[#C9CCD1] font-mono">Top 1% Benchmark</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-gray-400 block">Master Quality</span>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 block">4K 60FPS</span>
              <span className="text-[11px] text-[#C9CCD1] font-mono">DCI Color Calibrated</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-gray-400 block">Engagement Lift</span>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 block">4.2x ROAS</span>
              <span className="text-[11px] text-[#C9CCD1] font-mono">Paid Media Verified</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-gray-400 block">Delivery Velocity</span>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 block">1-WK SPRINTS</span>
              <span className="text-[11px] text-[#C9CCD1] font-mono">Frame.io Realtime</span>
            </div>
          </div>
        </motion.div>

        {/* Ambient bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050508] to-transparent z-40 pointer-events-none" />
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE 7-GENRE VIDEO SHOWCASE GRID */}
      {/* ========================================================================= */}
      <section id="showcase" className="relative px-4 py-24 md:px-8 md:py-32 max-w-7xl mx-auto z-40">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9CCD1] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9CCD1] font-bold">
                PORTFOLIO SHOWCASE • CLIENT MASTERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              7 Disciplines. Zero Template Fluff.
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400 font-normal leading-relaxed">
            Hover over any reel to preview motion playback. Click to launch the Full-Screen Cinema Theater Modal with audio stems and timeline breakdowns.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
          {[
            { key: 'all', label: 'All 7 Works' },
            { key: 'brand', label: 'Brand Films' },
            { key: 'commercial', label: 'Commercial Reels' },
            { key: 'documentary', label: 'Documentary' },
            { key: 'motion', label: '3D Motion Graphics' },
            { key: 'podcast', label: 'Podcasts' },
            { key: 'real-estate', label: 'Real Estate & Luxury' },
            { key: 'short-form', label: 'Viral Short-Form' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.key
                  ? 'bg-[#C9CCD1] text-white shadow-[0_0_20px_rgba(201,204,209,0.5)] border border-[#C9CCD1]'
                  : 'bg-[#1A1A1A]/[0.05] text-gray-400 hover:text-white hover:bg-[#1A1A1A]/[0.1] border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredReels.map((reel) => {
            const isMuted = mutedReels[reel.id] !== false;

            return (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredReelId(reel.id)}
                onMouseLeave={() => setHoveredReelId(null)}
                onClick={() => setActiveModalReel(reel)}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#12111d] to-[#0a0a12] border border-white/10 hover:border-[#C9CCD1]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(201,204,209,0.2)] flex flex-col justify-between cursor-pointer"
              >
                {/* Top Video Player Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/80">
                  <video
                    src={reel.videoSrc}
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12111d] via-transparent to-black/40 pointer-events-none" />

                  {/* Top Tags inside Video */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {reel.categoryLabel}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => toggleMute(reel.id, e)}
                        title={isMuted ? 'Unmute' : 'Mute'}
                        className="p-1.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-[#C9CCD1] border border-white/20 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-gray-300" />}
                      </button>

                      <span className="px-2 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-gray-300 border border-white/20">
                        {reel.duration}
                      </span>
                    </div>
                  </div>

                  {/* Play Trigger Badge Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A]/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(201,204,209,0.6)]">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Performance Metric Pill */}
                    <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-white/10 text-xs font-mono">
                      <span className="text-[#C9CCD1] font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#C9CCD1]" />
                        {reel.metric}
                      </span>
                      <span className="text-[10px] text-gray-400">#{reel.id}</span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-gray-300 transition-colors line-clamp-1">
                      {reel.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-400 font-normal line-clamp-2 leading-relaxed">
                      {reel.desc}
                    </p>
                  </div>

                  {/* Specs & Expand Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {reel.specs.slice(0, 2).map((s, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A1A1A]/[0.05] text-gray-300 border border-white/10">
                          {s}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-mono font-bold text-[#C9CCD1] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                      Theater <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CINEMA THEATER MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalReel(null)}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#0d0c15] border border-[#C9CCD1]/40 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(201,204,209,0.3)] flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#C9CCD1] text-white">
                    {activeModalReel.categoryLabel}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight truncate max-w-md">
                    {activeModalReel.title}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalReel(null)}
                  className="p-2 rounded-full bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Native Video Player with Controls */}
              <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
                <video
                  src={activeModalReel.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Project Spec Breakdown */}
              <div className="p-6 overflow-y-auto bg-gradient-to-b from-[#0d0c15] to-[#07060c]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Client / Brand</span>
                    <span className="text-white font-bold">{activeModalReel.client}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Creative Director</span>
                    <span className="text-white font-bold">{activeModalReel.director}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Color Grade Stack</span>
                    <span className="text-gray-300 font-bold">{activeModalReel.colorGrade}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-2xl font-normal">
                      {activeModalReel.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {activeModalReel.specs.map((s, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#1A1A1A]/[0.08] text-gray-200 border border-[#C9CCD1]/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setActiveModalReel(null)}
                    className="shrink-0 px-5 py-2.5 rounded-full bg-[#C9CCD1] hover:bg-[#C9CCD1] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(201,204,209,0.5)] transition-all flex items-center gap-1.5"
                  >
                    <span>Commission This Style ➔</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE BENTO GRID: THE 4 RETENTION ENGINES */}
      {/* ========================================================================= */}
      <section id="capabilities" className="relative px-4 py-20 md:px-8 md:py-28 max-w-7xl mx-auto z-40">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9CCD1]/10 border border-[#C9CCD1]/30 text-gray-300 text-xs font-mono uppercase tracking-widest mb-4">
            ✦ HIGH-VELOCITY PRODUCTION SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            The 4 Retention Engines of NEXUS Cinema
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-normal leading-relaxed">
            Every frame is deliberately engineered for subconscious engagement. We fuse raw Hollywood optical craft with algorithmic digital distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Match-Cut Subconscious Pacing (7 cols) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-gradient-to-br from-[#121122] via-[#0d0c18] to-[#07060f] border border-white/10 hover:border-[#C9CCD1]/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#C9CCD1] font-bold">
                  ENGINE 01 • TEMPORAL DYNAMICS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9CCD1]/20 text-gray-300 border border-[#C9CCD1]/30 font-bold">
                  85.4% Retention
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Match-Cut Pacing & Subconscious Retention
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Generic editors cut to beats. We cut to psychological eyetrace vectors. When visual focal points remain aligned across high-speed match cuts, the viewer's brain consumes the video effortlessly without subconscious fatigue.
              </p>
            </div>

            {/* Interactive Timeline Scrub Visualization */}
            <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span>TIMELINE TRACK: 4K 60FPS SEQUENCE</span>
                <span className="text-[#C9CCD1] font-bold">LOCKED 23.976 DCI</span>
              </div>
              
              <div className="space-y-1.5">
                <div className="h-6 w-full rounded bg-gray-800/80 border border-[#C9CCD1]/30 flex items-center px-3 text-[10px] text-gray-300 justify-between">
                  <span>V1 • A-CAM ANAMORPHIC CUTS</span>
                  <span>1.8s AVG DURATION</span>
                </div>
                <div className="h-6 w-full rounded bg-purple-950/80 border border-[#C9CCD1]/30 flex items-center px-3 text-[10px] text-gray-300 justify-between">
                  <span>V2 • 3D HUD & MOTION OVERLAYS</span>
                  <span>DYNAMIC BLEND</span>
                </div>
                <div className="h-6 w-full rounded bg-blue-950/80 border border-[#C9CCD1]/30 flex items-center px-3 text-[10px] text-gray-300 justify-between">
                  <span>A1 • FOLEY RISERS & SUB-BASS TRANSIENTS</span>
                  <span>-14 LUFS CALIBRATED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Interactive Color Grade Scrubber (5 cols) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-gradient-to-br from-[#121122] via-[#0d0c18] to-[#07060f] border border-white/10 hover:border-[#C9CCD1]/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-bold">
                  ENGINE 02 • COLOR SCIENCE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9CCD1]/20 text-gray-300 border border-[#C9CCD1]/30 font-bold">
                  DaVinci ACEScc
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                33-Point Film Print Color Emulation
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Drag the interactive slider below to inspect RAW camera sensor latitude versus our bespoke Kodak 2383 film grain print emulation.
              </p>
            </div>

            {/* Interactive Before/After Splitter */}
            <div className="mt-6">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/20 select-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/90 via-purple-900/80 to-blue-900/70 flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="font-mono text-xs uppercase font-bold text-white tracking-widest block">
                      GRADED: KODAK 2383 PRINT
                    </span>
                    <span className="text-[10px] text-gray-300 font-mono mt-1 block">
                      Rich Shadows · Halation Glow · Organic Saturation
                    </span>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-700 flex items-center justify-center p-4 border-r-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ width: `${colorGradeSplit}%` }}
                >
                  <div className="text-center truncate">
                    <span className="font-mono text-xs uppercase font-bold text-gray-300 tracking-widest block">
                      LOG SENSOR RAW
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono mt-1 block">
                      Flat Contrast · 16 Stops Dynamic Range
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Input */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>RAW Flat Log</span>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={colorGradeSplit}
                  onChange={(e) => setColorGradeSplit(Number(e.target.value))}
                  className="w-44 accent-[#C9CCD1] cursor-ew-resize"
                />
                <span className="text-[#C9CCD1] font-bold">Film Print Grade</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: 3D Motion Graphics & Product CGI (5 cols) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-gradient-to-br from-[#121122] via-[#0d0c18] to-[#07060f] border border-white/10 hover:border-[#C9CCD1]/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold">
                  ENGINE 03 • SPATIAL CGI
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9CCD1]/20 text-gray-300 border border-[#C9CCD1]/30 font-bold">
                  Cinema 4D + Octane
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Spatial 3D & Explosive Product CGI
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Explode physical hardware into floating mechanical layers. We composite 3D models with physical camera tracking to illustrate internal engineering without taking things apart.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9CCD1]/20 border border-[#C9CCD1]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-[#C9CCD1]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-white block">OCTANE PHOTOREALISM</span>
                <span className="text-[11px] text-gray-400 block">Sub-surface raytracing & anisotropic metal reflections.</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Algorithmic Short-Form Packaging (7 cols) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-gradient-to-br from-[#121122] via-[#0d0c18] to-[#07060f] border border-white/10 hover:border-[#C9CCD1]/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#C9CCD1] font-bold">
                  ENGINE 04 • VIRAL PACKAGING
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C9CCD1]/20 text-gray-300 border border-[#C9CCD1]/30 font-bold">
                  9:16 Social Engine
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Algorithmic Short-Form Packaging for Scale
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Every video is packaged into high-yield vertical derivatives for TikTok, YouTube Shorts, and Instagram Reels. We engineer dynamic animated subtitles, pattern interrupt sound effects, and loop hooks that maximize watch-time multipliers.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-center">
                <span className="text-lg font-black text-[#C9CCD1] block">0.8s</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Hook Window</span>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-center">
                <span className="text-lg font-black text-purple-400 block">100%</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Loop Pacing</span>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-center">
                <span className="text-lg font-black text-blue-400 block">4K 60</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Mobile Crispness</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SOFTWARE & CRAFT KINETIC STACK */}
      {/* ========================================================================= */}
      <section className="relative px-4 py-16 md:px-8 border-y border-white/10 bg-black/40 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9CCD1] font-bold">
                POST-PRODUCTION ARSENAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
                Zero Compromise Tooling.
              </h3>
            </div>
            <p className="text-xs text-gray-400 max-w-md font-normal">
              Every editor on our team works in dedicated studio suites equipped with calibrated OLED reference monitors and hardware color panels.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SOFTWARE_STACK.map((soft, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#1A1A1A]/[0.03] border border-white/10 hover:border-[#C9CCD1]/50 hover:bg-[#1A1A1A]/[0.06] transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-2xl mb-2 block">{soft.icon}</span>
                  <h4 className="font-bold text-xs uppercase text-white group-hover:text-gray-300 transition-colors">
                    {soft.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-1 font-mono leading-tight">
                    {soft.role}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/10">
                  <span className="text-[9px] font-mono text-[#C9CCD1] font-bold">
                    {soft.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. 4-STEP PRODUCTION PIPELINE STEPPER */}
      {/* ========================================================================= */}
      <section id="pipeline" className="relative px-4 py-24 md:px-8 md:py-32 max-w-7xl mx-auto z-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9CCD1]/10 border border-[#C9CCD1]/30 text-gray-300 text-xs font-mono uppercase tracking-widest mb-3">
              ✦ SPRINT METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              The 4-Step Production Pipeline
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md font-normal">
            From creative storyboard to final 4K master delivery in rapid 1-week to 2-week sprint cycles. Transparent, iterative, zero delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Concept & Storyboard Architecture',
              desc: 'We map the visual narrative, target retention curves, visual metaphors, script pacing, and technical camera shoot manifests.',
              tag: 'BLUEPRINT',
            },
            {
              step: '02',
              title: 'Cinema Shooting & Asset Capture',
              desc: 'On-location or studio 4K shooting with ARRI / RED cinema cameras, lighting design, high-speed gimbals, and multitrack audio.',
              tag: 'PRODUCTION',
            },
            {
              step: '03',
              title: 'High-Velocity Match-Cut Assembly',
              desc: 'Aggressive pacing, temporal match-cuts, kinetic typography overlays, and custom Foley sound design to lock subconsciously.',
              tag: 'POST-PRODUCTION',
            },
            {
              step: '04',
              title: 'DaVinci Color & Multi-Platform Master',
              desc: '33-point film print emulation grading, -14 LUFS audio normalization, and multi-ratio exports for Web, Broadcast, and Social.',
              tag: 'DELIVERY',
            },
          ].map((pipe, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-gradient-to-b from-[#11101d] to-[#090812] border border-white/10 hover:border-[#C9CCD1]/50 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-2xl font-black text-[#C9CCD1]">
                    #{pipe.step}
                  </span>
                  <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-[#1A1A1A]/[0.08] text-gray-300">
                    {pipe.tag}
                  </span>
                </div>

                <h4 className="mt-4 font-extrabold text-lg uppercase text-white group-hover:text-gray-300 transition-colors">
                  {pipe.title}
                </h4>

                <p className="mt-2 text-xs text-gray-400 leading-relaxed font-normal">
                  {pipe.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Phase SLA</span>
                <span className="text-gray-300 font-bold">Verified Sprint Gate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SPRINT ENGAGEMENT PLANS & PRICING */}
      {/* ========================================================================= */}
      <section id="pricing" className="relative px-4 py-24 md:px-8 md:py-32 max-w-7xl mx-auto z-40">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C9CCD1] font-bold block mb-2">
            PREDICTABLE INVESTMENT • ZERO AGENCY HIDDEN FEES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Sprint Engagement Tiers
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-normal leading-relaxed">
            One flat fee per sprint or monthly retainer. Scale up your video output without managing internal camera crews or freelance contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPRINT_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#181630] via-[#100e24] to-[#0a0918] border-2 border-[#C9CCD1] shadow-[0_0_50px_rgba(201,204,209,0.35)] scale-105 z-10'
                  : 'bg-gradient-to-b from-[#100f1c] to-[#080712] border border-white/10 hover:border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C9CCD1] to-[#C9CCD1] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="pb-4 border-b border-white/10">
                  <span className="font-mono text-xs uppercase tracking-wider font-bold" style={{ color: plan.color }}>
                    {plan.tier}
                  </span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-xs text-gray-400 leading-relaxed font-normal">
                    {plan.desc}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">
                    Deliverables Included:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-[#C9CCD1]/20 text-[#C9CCD1] flex items-center justify-center shrink-0 mt-0.5 border border-[#C9CCD1]/30">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-[#C9CCD1] hover:bg-[#C9CCD1] text-white shadow-[0_0_25px_rgba(201,204,209,0.6)]'
                      : 'bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/20 text-white border border-white/20'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. INTERACTIVE VIDEO FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section id="faq" className="relative px-4 py-20 md:px-8 md:py-28 max-w-4xl mx-auto z-40">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C9CCD1] font-bold block mb-2">
            ANSWERS & SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f0e1b] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-white pr-4">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-[#1A1A1A]/[0.05] border border-white/10 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#C9CCD1] text-white' : 'text-gray-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 font-normal leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CLOSING CINEMATIC ENCHANTED CTA */}
      {/* ========================================================================= */}
      <section className="relative px-4 py-28 md:px-8 md:py-36 overflow-hidden z-40 border-t border-white/10 bg-gradient-to-b from-[#050508] via-[#0d0a20] to-[#050508]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9CCD1]/30 blur-[130px] rounded-full pointer-events-none opacity-30" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#C9CCD1] to-[#C9CCD1] p-0.5 shadow-[0_0_35px_rgba(201,204,209,0.6)] mb-8 flex items-center justify-center">
            <div className="w-full h-full bg-[#0d0c15] rounded-[22px] flex items-center justify-center">
              <Film className="w-8 h-8 text-[#C9CCD1]" />
            </div>
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-gray-300 font-bold block mb-3">
            ELEVATE YOUR VISUAL STANDARD • 2026 ROADMAP
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Ready to Turn Viewers Into High-LTV Buyers?
          </h2>

          <p className="mt-6 max-w-xl text-base text-gray-300 font-normal leading-relaxed">
            Stop losing leads to boring, generic footage. Let our cinema engineering team script, shoot, and cut your next high-converting video flagship.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative overflow-hidden group bg-gradient-to-r from-[#C9CCD1] via-[#C9CCD1] to-[#C9CCD1] text-white font-black text-sm uppercase tracking-wider px-9 py-4 rounded-full shadow-[0_10px_40px_rgba(201,204,209,0.6)] hover:shadow-[0_15px_50px_rgba(201,204,209,0.9)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate Video Sprint <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 rounded-full bg-[#1A1A1A]/[0.08] hover:bg-[#1A1A1A]/[0.15] border border-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-xl transition-all"
            >
              Explore All 11 Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. ENCHANTED FOOTER DIRECTORY */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#020204] border-t border-white/10 px-4 py-12 md:px-8 z-40 text-xs font-mono text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9CCD1] animate-pulse" />
            <span className="text-white font-bold">NEXUS Growth • ENCHANTED VIDEO LABS</span>
            <span className="text-gray-500 hidden md:inline">| 4K Cinema Production Suite</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Agency Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              All Capabilities (Index)
            </Link>
            <Link href="/services/ai-automation" className="hover:text-white transition-colors">
              AI Automation
            </Link>
            <Link href="/services/branding-design" className="hover:text-white transition-colors">
              Branding & Design
            </Link>
            <Link href="/contact" className="text-[#C9CCD1] hover:underline font-bold">
              Book Project ➔
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
