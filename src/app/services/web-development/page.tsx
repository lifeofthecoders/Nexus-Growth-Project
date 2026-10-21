import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight,
  Code2, 
  Cpu, 
  Zap, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Gauge, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import CodeEditorTerminal from '@/components/services/CodeEditorTerminal';
import WebDevelopmentTerminalCursor from '@/components/services/web-development/WebDevelopmentTerminalCursor';
import { WireframeLiveToggle, HorizontalSprintPipeline } from '@/components/services/web-development/WebDevVisualShowcase';

export const metadata: Metadata = {
  title: '🌐 Website Development | NEXUS Growth',
  description: 'Custom Next.js App Router & GSAP website engineering for high-growth brands. Sub-second performance, award-tier creative direction, and conversion architectures.',
  keywords: ['Next.js development', 'GSAP web animations', 'headless commerce', 'Awwwards portfolio', 'conversion rate optimization'],
};

const DELIVERABLES = [
  {
    icon: Code2,
    tag: 'ARCHITECTURE',
    title: 'Custom Next.js App Router Core',
    desc: 'React 19 server components. Zero layout shifts. Sub-second TTFB.',
    specs: ['React Server Components', 'Vercel Edge Network', 'Zero Layout Shift', 'Automated Image Optimization'],
    color: '#FF1F1F',
  },
  {
    icon: Sparkles,
    tag: 'MOTION & FEEL',
    title: 'Hardware-Accelerated GSAP & WebGL',
    desc: '60FPS inertia scrolling with pinned timelines and interactive canvas stages.',
    specs: ['ScrollTrigger Pinning', 'Lenis Smooth Scroll', '3D Model Viewers', 'Micro-Interactions'],
    color: '#CC1919',
  },
  {
    icon: Layers,
    tag: 'CONTENT & SCALE',
    title: 'Headless CMS & Commerce Pipelines',
    desc: 'Instant visual publishing and checkout pipelines without touching source code.',
    specs: ['Sanity / Strapi CMS', 'Shopify Storefront API', 'Stripe Payments', 'Incremental Static Regeneration'],
    color: '#8B0000',
  },
  {
    icon: Gauge,
    tag: 'PERFORMANCE',
    title: 'Core Web Vitals 99+ Hardening',
    desc: 'Guaranteed top-tier mobile Lighthouse metrics engineered for maximum conversion lift.',
    specs: ['FCP < 0.5s', 'LCP < 0.8s', 'CLS = 0.000', 'Perfect Mobile Score'],
    color: '#FF4444',
  },
  {
    icon: Zap,
    tag: 'DATA & GROWTH',
    title: 'Conversion Tracking & Event Telemetry',
    desc: 'Sub-second server-side CAPI telemetry with full funnel visibility.',
    specs: ['Server-Side CAPI', 'Custom DataLayer Events', 'PostHog / Mixpanel', 'Heatmap Ready'],
    color: '#E60000',
  },
  {
    icon: ShieldCheck,
    tag: 'RELIABILITY',
    title: 'Enterprise Security & CI/CD Pipelines',
    desc: 'Automated GitHub pull preview edge deployments with DDoS defense.',
    specs: ['Automated CI/CD', 'Edge Middleware', 'DDoS Protection', 'SOC2 Compliant Hosting'],
    color: '#FF1F1F',
  },
];
const TECH_STACK = [
  { name: 'Next.js 16', role: 'Full-Stack Framework', color: '#FF1F1F' },
  { name: 'React 19', role: 'Server Components', color: '#C9CCD1' },
  { name: 'TypeScript', role: 'Strict Type Safety', color: '#C9CCD1' },
  { name: 'GSAP 3', role: 'Choreographed Motion', color: '#FF1F1F' },
  { name: 'Tailwind CSS v4', role: 'Design Tokens', color: '#FF1F1F' },
  { name: 'Lenis', role: 'Smooth Inertia Scroll', color: '#FF1F1F' },
  { name: 'Three.js / WebGL', role: '3D Spatial Stages', color: '#C9CCD1' },
  { name: 'Vercel Edge', role: 'Low-Latency CDN', color: '#FF1F1F' },
  { name: 'Sanity CMS', role: 'Headless Content', color: '#C9CCD1' },
  { name: 'Shopify Storefront', role: 'Headless Commerce', color: '#FF1F1F' },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white paper-canvas ">
      {/* Terminal Block Custom Cursor */}
      <WebDevelopmentTerminalCursor />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          {/* Sticker Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#FF1F1F] text-white rotate-[-2deg]">
              ✦ SERVICE 01 / 11
            </span>
            <span className="sticker-badge bg-[#1A1A1A] text-white rotate-[1.5deg]">
              DIGITAL PRODUCT &amp; ENGINEERING
            </span>
            <span className="sticker-badge bg-[#C9CCD1] text-white">
              NEXT.JS 16 • GSAP 3 • TURBOPACK
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-white">
              WEBSITES ENGINEERED TO CONVERT.
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full my-4">
            <p className="font-['Space_Grotesk'] text-lg md:text-xl font-bold uppercase text-[#C9CCD1] leading-tight">
              Sub-second Next.js 16 architectures locked at 60FPS.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?service=web-development"
                className="c-button text-sm py-3.5 px-7"
              >
                Initiate Web Sprint <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Interactive Wireframe vs Live Morph Simulation */}
          <WireframeLiveToggle />

          {/* Performance Benchmark Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-white/10 mt-6">
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-[#C9CCD1] block">Core Web Vitals</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                99+ MOBILE
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#FF1F1F] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-white font-bold block">First Paint (FCP)</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                &lt; 0.40s
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#C9CCD1] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-white font-bold block">Motion Engine</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                GSAP 3 + LENIS
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-[#C9CCD1] block">Deployment Tier</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#FF1F1F] block mt-1">
                VERCEL EDGE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE MOTIF — INTERACTIVE CODE TERMINAL */}
      <section className="relative px-4 py-16 md:px-8 bg-[#121212] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-2">
              ENGINEERING MOTIF SPEC
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              Inspect the Production Architecture
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#C9CCD1]">
              Switch between source code specifications, animation choreography, and live simulated Google Lighthouse audit scores below.
            </p>
          </div>

          <CodeEditorTerminal />
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES / SCOPE OF WORK */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-3">
              SCOPE OF DELIVERABLES
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              What's Included in Every Build
            </h2>
          </div>
          <p className="font-sans text-sm text-[#C9CCD1] max-w-md">
            No junior outsourced code. Every web application is built ground-up by senior full-stack creative engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="tactile-card p-6 md:p-8 flex flex-col justify-between"
                style={{ borderTopWidth: '8px', borderTopColor: item.color }}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-white/10/10 mb-4">
                    <div className="h-10 w-10 rounded-xl border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,31,31,0.15)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="sticker-badge text-[9px] py-0.5 px-2 bg-[#1A1A1A] text-white shadow-none">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase leading-none text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#C9CCD1] leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-white/10/10">
                  <ul className="space-y-1.5 font-mono text-xs text-white">
                    {item.specs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full border border-white/10" style={{ backgroundColor: item.color }} />
                        <span className="font-semibold">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: 5-SPRINT METHODOLOGY */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 bg-[#121212] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="sticker-badge bg-[#C9CCD1] text-white mb-3">
              PRODUCTION TIMELINE
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              5 Sprints to Global Deployment
            </h2>
            <p className="mt-2 font-sans text-xs md:text-sm text-[#C9CCD1]">
              Weekly milestones locked to sub-second Core Web Vitals gates.
            </p>
          </div>

          <HorizontalSprintPipeline />
        </div>
      </section>

      {/* SECTION 5: CONCEPT CASE STUDY — AURA WEARABLES */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-3">
              FEATURED CAPABILITY SHOWCASE
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              Case Study: AURA Wearables
            </h2>
          </div>
          <span className="hidden md:inline-flex sticker-badge bg-[#1A1A1A] text-white font-mono">
            ● CONCEPT LAB SPEC
          </span>
        </div>

        <div className="tactile-card p-6 md:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A1A1A]">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="AURA Wearables Digital Flagship Mockup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-[#1A1A1A]/95 backdrop-blur-md p-3 border border-white/10">
              <span className="font-mono text-xs font-bold text-white">Spatial Hardware Flagship</span>
              <span className="sticker-badge text-[10px] bg-[#FF1F1F] text-white shadow-none">Next.js + Three.js</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] font-bold">
              Challenge &amp; Execution
            </span>
            <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-extrabold uppercase text-white leading-none">
              Turning a 4.2s storefront into a 0.38s sales engine.
            </h3>
            <p className="font-sans text-xs text-[#C9CCD1] font-medium leading-relaxed">
              Headless Next.js storefront backed by Shopify GraphQL, slashing cart abandonment by 42%.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-white/10">
              <div className="rounded-xl border border-white/10 bg-[#FF1F1F] p-3 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-white block">
                  +340%
                </span>
                <span className="font-mono text-[10px] text-white uppercase font-bold">Conversion Lift</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-3 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
                <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold text-white block">
                  0.38s
                </span>
                <span className="font-mono text-[10px] text-[#C9CCD1] uppercase font-bold">First Contentful Paint</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?service=web-development"
                className="c-button text-xs py-3 px-6"
              >
                Inquire About Custom Web Flagships <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECH STACK MATRIX */}
      <section className="relative px-4 py-20 md:px-8 border-t border-white/10 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-2">ENGINEERING STACK</span>
            <h2 className="u-title-200 tracking-tight text-white">Production Technologies</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)] hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <p className="font-mono text-xs font-black uppercase text-white">{tech.name}</p>
                <p className="font-mono text-[10px] text-[#C9CCD1] mt-1 uppercase font-medium">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CALL TO ACTION */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border border-white/10 bg-[#FF1F1F] p-8 md:p-16 shadow-[0_0_20px_rgba(255,31,31,0.15)] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-1 font-mono text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,31,31,0.15)] mb-6">
            <Sparkles className="h-4 w-4 text-[#FF1F1F]" /> READY TO SHIP NEXT-LEVEL TECH
          </div>

          <h2 className="u-title-100 text-white leading-none mb-6">
            HAVE A WEBSITE PROJECT IN MIND?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-white font-medium mb-8">
            Let's engineer a digital flagship that your competitors can't ignore. We'll reply within 24 hours with an architecture roadmap and sprint estimate.
          </p>

          <Link
            href="/contact?service=web-development"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Start Web Discussion <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
