'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Palette, 
  Layers, 
  Box, 
  Maximize2, 
  Grid, 
  FileText, 
  Sparkles, 
  CheckCircle2,
  Copy,
  Check,
  Eye,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { PrintFinishSplitSlider } from './PrintFinishSplitSlider';
import { cn } from '@/lib/utils';

// Design Projects Showcase
interface DesignProject {
  id: string;
  title: string;
  category: string;
  year: string;
  color: string;
  aspect: string;
  desc: string;
  materials: string[];
  dimensions: string;
  previewUrl: string;
}

const PROJECTS: DesignProject[] = [
  {
    id: '01',
    title: 'Kurogane Botanical Packaging',
    category: 'PHYSICAL PRODUCT • LUXURY PACKAGING',
    year: '2026',
    color: '#FF1F1F',
    aspect: 'aspect-[4/5]',
    desc: 'Soft-touch matte black paperboard with micro-embossed gold foil typography, custom magnetic closure die-line, and 100% biodegradable seaweed fiber tray.',
    materials: ['G.F Smith 380gsm Colorplan', 'Matte Gold Hot Foil', 'Custom Die-Line #882'],
    dimensions: '140mm × 210mm × 45mm',
    previewUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80',
  },
  {
    id: '02',
    title: 'Tokyo Cyberpunk OOH Takeover',
    category: 'LARGE FORMAT • BILLBOARD CAMPAIGN',
    year: '2026',
    color: '#FF1F1F',
    aspect: 'aspect-[16/9]',
    desc: 'High-contrast typography billboard series deployed across Shibuya Crossing and Shinjuku station screens with ultra-bold grotesque lettering readable at 120 meters.',
    materials: ['Vector CMYK / 300DPI', 'Pantone 805 C Neon', 'Subway Lightbox Transparency'],
    dimensions: '12,000mm × 4,000mm',
    previewUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
  },
  {
    id: '03',
    title: 'Venture Keynote & Editorial Deck',
    category: 'DIGITAL ASSETS • PITCH ARCHITECTURE',
    year: '2026',
    color: '#C9CCD1',
    aspect: 'aspect-[16/10]',
    desc: '48-page executive investor pitch deck and brand bible. Minimalist grid layout turning complex distributed systems into digestible visual hierarchies.',
    materials: ['Figma Token System', 'Vector SVG Charts', 'Interactive Keynote Build'],
    dimensions: '1920px × 1080px (16:9)',
    previewUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
  },
  {
    id: '04',
    title: 'Bespoke Variable Type Specimen',
    category: 'TYPOGRAPHY • CUSTOM LETTERING',
    year: '2026',
    color: '#FF1F1F',
    aspect: 'aspect-square',
    desc: 'Custom geometric display typeface engineered with dual optical width and weight axes. Developed specifically for architectural and luxury studio collateral.',
    materials: ['OpenType .WOFF2 / .TTF', 'Variable Axis wdth: 20-100', 'Kerning Pair Optimization'],
    dimensions: 'Full Glyphs Matrix (840)',
    previewUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
  },
  {
    id: '05',
    title: 'Heavyweight Studio Capsule Merch',
    category: 'MERCHANDISE • APPAREL CURATION',
    year: '2026',
    color: '#FF1F1F',
    aspect: 'aspect-[3/4]',
    desc: '480gsm custom-milled organic French terry cotton hoodie with high-density puff print graphics, custom silicone aglets, and woven studio hangtags.',
    materials: ['480gsm Organic Cotton', 'Plastisol Puff Screenprint', 'Custom Woven Neck Labels'],
    dimensions: 'Boxy Drop-Shoulder Fit',
    previewUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80',
  },
  {
    id: '06',
    title: 'NEXUS Spatial Identity Manual',
    category: 'BRAND IDENTITY • SYSTEM RULES',
    year: '2026',
    color: '#FF1F1F',
    aspect: 'aspect-[4/3]',
    desc: '120-page clothbound hardback brand manual outlining grid systems, optical alignment principles, CMYK color profiles, and spatial packaging layouts.',
    materials: ['Clothbound Buckram Spine', 'Fedrigoni Arcoprint 150gsm', 'Debossed Foil Monogram'],
    dimensions: '240mm × 320mm',
    previewUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
  }
];

const SWATCH_PALETTE = [
  { name: 'NEXUS INK', hex: '#121214', cmyk: 'C70 M60 Y50 K90' },
  { name: 'ACID CITRON', hex: '#FF1F1F', cmyk: 'C10 M0 Y80 K0' },
  { name: 'HYPER CORAL', hex: '#FF1F1F', cmyk: 'C0 M80 Y60 K0' },
  { name: 'COBALT OVERDRIVE', hex: '#C9CCD1', cmyk: 'C95 M75 Y0 K0' },
  { name: 'ORCHID HAZE', hex: '#FF1F1F', cmyk: 'C10 M45 Y0 K0' },
  { name: 'WARM PARCHMENT', hex: '#f4f4f0', cmyk: 'C2 M2 Y4 K0' },
];

export default function GraphicDesignExperience() {
  const [activeColor, setActiveColor] = useState('#FF1F1F');
  const [hoveredProject, setHoveredProject] = useState<DesignProject | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Spring cursor coordinates
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  // Floating preview coordinates with slightly more lag for organic float
  const previewX = useSpring(0, { stiffness: 220, damping: 22 });
  const previewY = useSpring(0, { stiffness: 220, damping: 22 });

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        previewX.set(e.clientX + 24);
        previewY.set(e.clientY + 24);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY, previewX, previewY]);

  // Section Scroll Tied Gradient Shift
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth hue shifting background
  const bgHue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#121214', '#151310', '#0a101a', '#140c14', '#0d0d0f']
  );

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setActiveColor(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor: bgHue }}
      className="relative min-h-screen text-white selection:bg-[#FF1F1F] selection:text-white overflow-hidden transition-colors duration-700"
    >
      {/* 1. Paint Swatch / Brush Dot Custom Cursor */}
      {!isTouch && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-2 -translate-x-1/2 -translate-y-1/2"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div 
              animate={{ 
                backgroundColor: hoveredProject ? hoveredProject.color : activeColor,
                scale: hoveredProject ? 1.4 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
            {hoveredProject && (
              <motion.span 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-2 py-0.5 rounded bg-black/90 text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-white/20 whitespace-nowrap backdrop-blur-md"
              >
                {hoveredProject.title.slice(0, 20)}...
              </motion.span>
            )}
          </motion.div>

          {/* Cursor-Follow Image Preview Reveal */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ x: previewX, y: previewY }}
                className="fixed top-0 left-0 pointer-events-none z-40 w-64 h-44 rounded-2xl overflow-hidden border-2 border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black"
              >
                <Image
                  src={hoveredProject.previewUrl}
                  alt={hoveredProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                  <span className="text-[10px] font-mono text-white/80">{hoveredProject.dimensions}</span>
                  <span className="text-xs font-bold text-white truncate">{hoveredProject.title}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* 2. Moving Shifting Gradient Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF1F1F]/15 via-[#FF1F1F]/10 to-transparent blur-[140px] will-change-transform"
        />
        <motion.div 
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 70, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#C9CCD1]/15 via-[#FF1F1F]/10 to-transparent blur-[150px] will-change-transform"
        />
      </div>

      {/* Header Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F1F] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
              DISCIPLINE 05 • TACTILE EDITORIAL GRAPHICS
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-gray-400">
            <span>CMYK PRINT READY</span>
            <span>•</span>
            <span>CUSTOM DIELINES</span>
            <span>•</span>
            <span>VARIABLE TYPE</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 font-mono text-xs">
            <Palette className="w-3.5 h-3.5" />
            <span>Uncompromising Physical &amp; Digital Craft</span>
          </div>

          <h1 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.86] text-white">
            Tactile Spatial &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F1F] via-[#C9CCD1] to-white">
              Visual Identity.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#C9CCD1] max-w-xl leading-relaxed">
            Physical print packaging, typography systems, and luxury brand manuals.
          </p>
        </div>

        {/* Interactive Before & After Print Specimen Slider */}
        <PrintFinishSplitSlider />

        {/* Live Interactive Color Palette Bar */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-red-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                Studio Ink Library • Click Swatch to Sample
              </span>
            </div>
            {copiedHex && (
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied {copiedHex} to clipboard
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SWATCH_PALETTE.map((swatch) => (
              <button
                key={swatch.hex}
                onClick={() => copyColor(swatch.hex)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all group flex flex-col justify-between h-24",
                  activeColor === swatch.hex 
                    ? "border-white bg-white/10 scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "border-white/10 bg-black/40 hover:border-white/30"
                )}
              >
                <div className="flex items-center justify-between">
                  <div 
                    className="w-6 h-6 rounded-full border border-white/30 shadow-sm"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <Copy className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="font-bold text-xs text-white truncate">{swatch.name}</p>
                  <p className="font-mono text-[10px] text-gray-400">{swatch.hex}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Portfolio Grid with Hover Reveals */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              CURATED SHOWCASE
            </span>
            <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-2">
              Physical &amp; Digital Portfolio
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Hover over projects to trigger the cursor-follow magnifying reveal and inspect tactile specs.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onMouseEnter={() => {
                setHoveredProject(proj);
                setActiveColor(proj.color);
              }}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-6 backdrop-blur-sm transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Neon Edge Lighting Glow on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 40px ${proj.color}25, 0 0 30px ${proj.color}15`
                }}
              />

              {/* Card Image Display */}
              <div className={cn("relative w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-black/40", proj.aspect)}>
                <Image
                  src={proj.previewUrl}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-md border border-white/20">
                  {proj.id} • {proj.year}
                </div>
              </div>

              {/* Project Metadata */}
              <div className="space-y-3">
                <span 
                  className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border inline-block"
                  style={{ borderColor: `${proj.color}55`, color: proj.color, backgroundColor: `${proj.color}15` }}
                >
                  {proj.category}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF1F1F] transition-colors">
                  {proj.title}
                </h3>

                <p className="font-mono text-xs text-gray-400 leading-relaxed">
                  {proj.desc}
                </p>

                {/* Materials Specs */}
                <div className="pt-3 border-t border-white/10 space-y-1">
                  {proj.materials.map((mat) => (
                    <div key={mat} className="flex items-center gap-2 font-mono text-[11px] text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: proj.color }} />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/40 via-red-950/30 to-black p-8 md:p-14 relative overflow-hidden shadow-[0_0_60px_rgba(255,31,31,0.15)]">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              PHYSICAL &amp; DIGITAL COLLATERAL SPRINTS
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl md:text-5xl font-black uppercase text-white leading-none">
              Commission Your Studio Design System.
            </h3>
            <p className="font-mono text-sm text-gray-300 leading-relaxed">
              From unboxing packaging die-lines to global billboard takes and custom typography, NEXUS Growth delivers publication-grade creative assets with guaranteed print readiness.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1F1F] hover:bg-[#e4eb4d] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(255,31,31,0.5)] transition-all"
              >
                <span>Initiate Graphic Sprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-gray-400">
                Vendor-ready print files • Zero formatting errors
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
