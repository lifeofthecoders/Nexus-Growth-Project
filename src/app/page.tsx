'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, Zap, ShieldCheck, Cpu, Check, Barcode } from 'lucide-react';

import { gsap, ScrollTrigger } from '@/lib/gsap';
import VelocityMarquee from '@/components/ui/VelocityMarquee';
import StackSpread from '@/components/ui/StackSpread';
import { GridPulse, GridPulseDemo } from '@/components/ui/grid-pulse';

const SERVICES = [
  { id: '01', title: 'Website Development', desc: 'Custom Next.js App Router & GSAP hardware-accelerated flagships.', color: '#FF1F1F', tag: 'ENGINEERING', href: '/services/web-development' },
  { id: '02', title: 'App Development', desc: 'Native iOS & Android architectures built for zero friction.', color: '#C9CCD1', tag: 'MOBILE', href: '/services/app-development' },
  { id: '03', title: 'Social Media Management', desc: 'Algorithmic short-form content, viral distribution, and loyal community building.', color: '#FF4444', tag: 'ORGANIC', href: '/services/social-media-management' },
  { id: '04', title: 'Graphic Design', desc: 'Brutalist, editorial, and tactile visual assets that command immediate focus.', color: '#CC1919', tag: 'VISUALS', href: '/services/graphic-design' },
  { id: '05', title: 'AI Automation', desc: 'Autonomous agent networks and custom LLM workflows that kill manual toil.', color: '#FF1F1F', tag: 'AI TECH', href: '/services/ai-automation' },
  { id: '06', title: 'Branding & Design', desc: 'Complete brand systems, type design, guidelines, and cultural identity.', color: '#FF4444', tag: 'IDENTITY', href: '/services/branding-design' },
  { id: '07', title: 'Google & Meta Ads', desc: 'High-ROAS paid acquisition campaigns with creative fatigue protection.', color: '#8B0000', tag: 'PAID MEDIA', href: '/services/google-meta-ads' },
  { id: '08', title: 'Video Production & Editing', desc: 'Cinematic storytelling, pacing, sound design, and viral social clips.', color: '#CC1919', tag: 'PRODUCTION', href: '/services/video-production-editing' },
  { id: '09', title: 'Copywriting & Content Strategy', desc: 'Persuasive high-conversion sales copy, landing pages, and email flows.', color: '#C9CCD1', tag: 'MESSAGING', href: '/services/copywriting-content-strategy' },
  { id: '10', title: 'SEO', desc: 'Technical vitals hardening, programmatic SEO, and high-authority backlinks.', color: '#8B0000', tag: 'SEARCH', href: '/services/seo' },
  { id: '11', title: 'CRM & Sales Funnel Setup', desc: 'Multi-step conversion funnels, HubSpot/Klaviyo automation, and pipeline ops.', color: '#FF1F1F', tag: 'CONVERSION', href: '/services/crm-sales-funnel' },
];

const CASE_STUDIES = [
  {
    id: '01',
    title: 'AURA WEARABLES',
    category: 'E-COMMERCE • NEXT.JS',
    metric: '+340% CONVERSION LIFT',
    submetric: '0.38s FCP ✦ 100/100 LIGHTHOUSE',
    desc: 'Replacing a 4.2-second legacy Shopify theme with a custom headless Next.js flagship featuring 3D product exploration and instant edge checkout.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    color: '#FF1F1F',
  },
  {
    id: '02',
    title: 'KINETIC OS PLATFORM',
    category: 'SAAS • AI AUTOMATION',
    metric: '2.1s → 0.4s SPEEDUP',
    submetric: '85% AUTOMATED WORKFLOWS',
    desc: 'Ground-up redesign and autonomous workflow orchestration for an enterprise logistics platform processing $40M annually.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    color: '#8B0000',
  },
  {
    id: '03',
    title: 'SOLSTICE ROASTERS',
    category: 'BRANDING • SOCIAL VIRALITY',
    metric: '+890% ENGAGEMENT',
    submetric: '4.2X PAID AD ROAS',
    desc: 'Editorial packaging, brutalist social campaigns, and TikTok growth systems that drove a DTC subscription brand to national retail distribution.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    color: '#CC1919',
  },
  {
    id: '04',
    title: 'VERVE CREATIVE SUITE',
    category: 'MOBILE APP • CRM FUNNEL',
    metric: '42K MAU IN 90 DAYS',
    submetric: '$180K MRR LAUNCH RUNWAY',
    desc: 'Cross-platform mobile application and automated onboarding funnel designed for high retention and seamless organic invites.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    color: '#FF4444',
  },
];

const METHOD_STEPS = [
  {
    num: '01',
    tag: 'TEARDOWN',
    title: 'AUDIT & DECONSTRUCT',
    desc: 'We ruthlessly tear apart existing funnel leaks, code bloat, ad fatigue, and brand disconnects. You receive a brutal, transparent diagnosis.',
    color: '#FF1F1F',
  },
  {
    num: '02',
    tag: 'ARCHITECTURE',
    title: 'STRATEGY & SYSTEMS',
    desc: 'We map the full acquisition architecture: brand positioning, Next.js tech stack, automated lifecycle flows, and creative testing matrix.',
    color: '#FF4444',
  },
  {
    num: '03',
    tag: 'EXECUTION',
    title: 'HIGH-VELOCITY SPRINT',
    desc: 'Rapid production in 1-week sprints. Zero corporate bureaucracy. Real-time staging links, interactive prototypes, and production code.',
    color: '#8B0000',
  },
  {
    num: '04',
    tag: 'SCALE',
    title: 'ALGORITHMIC DOMINANCE',
    desc: 'Once live, we optimize Core Web Vitals, run continuous multivariate creative tests, and scale ad spend with mathematical rigor.',
    color: '#CC1919',
  },
];

export default function Home() {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const pinMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinSectionRef.current || !pinMediaRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pinMediaRef.current,
        {
          width: '72%',
          borderRadius: '32px',
          scale: 0.94,
        },
        {
          width: '100%',
          borderRadius: '0px',
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 0.6,
            pin: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-transparent text-white overflow-hidden paper-canvas">
      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative px-4 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Angled Retro Sticker Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="sticker-badge bg-[#FF1F1F] rotate-[-2deg] text-white">
            ✦ FULL-SERVICE GROWTH ENGINE
          </span>
          <span className="sticker-badge bg-[#1A1A1A] border border-[#FF1F1F]/30 rotate-[1.5deg] text-white">
            TOP 1% CREATIVE DIRECTION
          </span>
          <span className="sticker-badge bg-[#1A1A1A] rotate-[-1deg] text-white">
            EST. 2026 • AWWWARDS SOTD LEVEL
          </span>
        </div>

        {/* Massive Ultra-Compressed Decathlon-Tier Headline */}
        <h1 className="u-title-100 text-center tracking-tighter text-white my-2">
          NEXUS GROWTH
        </h1>

        <div className="max-w-3xl mx-auto my-6">
          <p className="font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
            We don't build standard agency brochures.{' '}
            <span className="bg-[#FF1F1F] px-2 py-0.5 border border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.15)] text-white">
              We engineer high-conversion revenue engines.
            </span>
          </p>
          <p className="mt-3 font-sans text-sm md:text-base text-[#C9CCD1] font-medium max-w-xl mx-auto">
            Next.js web applications, high-ROAS paid media, viral social distribution, and autonomous AI systems built for founders who refuse to settle for mediocre numbers.
          </p>
        </div>

        {/* Tactile Brutalist Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 mb-14">
          <Link href="/contact" className="c-button text-sm py-4 px-8">
            Start Your Engagement <ArrowUpRight className="h-5 w-5" />
          </Link>
          <Link href="/services/web-development" className="c-button c-button-pink text-sm py-4 px-8">
            View Website Spec Proof ↗
          </Link>
        </div>

        {/* Floating Live Metric Stickers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-white/10">
          <div className="rounded-2xl border-2 border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
            <span className="font-mono text-xs uppercase text-[#C9CCD1] block">Proven ROAS</span>
            <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white mt-1 block">
              4.2X AVG
            </span>
          </div>
          <div className="rounded-2xl border-2 border-white/10 bg-[#FF1F1F] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
            <span className="font-mono text-xs uppercase text-white font-bold block">First Contentful Paint</span>
            <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white mt-1 block">
              &lt; 0.40s
            </span>
          </div>
          <div className="rounded-2xl border-2 border-white/10 bg-[#1A1A1A] border border-[#FF1F1F]/30 p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
            <span className="font-mono text-xs uppercase text-white font-bold block">Full Stack</span>
            <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white mt-1 block">
              11 SERVICES
            </span>
          </div>
          <div className="rounded-2xl border-2 border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
            <span className="font-mono text-xs uppercase text-[#C9CCD1] block">Delivery Speed</span>
            <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#FF1F1F] mt-1 block">
              1-WK SPRINTS
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: PINNED VIDEO REVEAL (hero-scroll-video-pin-reveal) */}
      <section ref={pinSectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-16">
        <div
          ref={pinMediaRef}
          className="relative h-[80vh] overflow-hidden border-4 border-white/10 shadow-[0_30px_100px_rgba(255,31,31,0.1)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
            alt="NEXUS Growth Creative Production & Engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Overlay Text Inside Media */}
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between text-white pointer-events-none">
            <div className="flex items-center justify-between">
              <span className="sticker-badge bg-[#FF1F1F] text-white">
                ● LIVE PRODUCTION RUNTIME
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F]">
                SCROLL-PINNED REVEAL
              </span>
            </div>

            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF1F1F] mb-2 block">
                THE NEXUS DIFFERENCE
              </span>
              <h2 className="u-title-200 text-white tracking-tight uppercase">
                Zero bloated templates. High-impact creative science.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TACTILE VELOCITY MARQUEE RIBBONS */}
      <section className="relative w-full my-8">
        <VelocityMarquee
          tilt
          rows={[
            {
              items: ['WEBSITE DEV', 'NATIVE APPS', 'AI AUTOMATION', 'PAID MEDIA', 'BRAND SYSTEMS', 'CRM FUNNELS'],
              velocity: 35,
              bg: '#FF1F1F',
              textColor: '#fff',
            },
            {
              items: ['AWWWARDS STANDARD', 'SUB-SECOND VITALS', 'GROWTH ENGINES', 'ZERO BUREAUCRACY', 'SCALE FASTER'],
              velocity: -30,
              bg: '#1A1A1A',
              textColor: '#fff',
            },
          ]}
        />
      </section>

      {/* SECTION: 21ST.DEV GRID PULSE (carolinaraulino/grid-pulse) */}
      <section className="relative px-4 py-12 md:px-8 max-w-7xl mx-auto">
        <GridPulseDemo />
      </section>

      {/* SECTION 4: INTERACTIVE CAPABILITIES STACK (StackSpread) */}
      <section id="services" className="relative px-4 py-20 md:px-8 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-[#1A1A1A] px-4 py-1 font-mono text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,31,31,0.15)] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#FF1F1F]" /> 21ST.DEV • STACK SPREAD
          </div>
          <h2 className="u-title-200 tracking-tight text-white">
            The Growth Capability Deck
          </h2>
          <p className="mt-3 font-sans text-base text-[#C9CCD1]">
            Interact with our primary capabilities below. Hover over the deck to fan out the cards and view real engineering specifications.
          </p>
        </div>

        <StackSpread />
      </section>

      {/* SECTION 5: MANIFESTO & PHILOSOPHY */}
      <section id="about" className="relative w-full bg-transparent text-white py-24 md:py-36 px-4 md:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="sticker-badge bg-[#FF1F1F] text-white">
              AGENCY MANIFESTO
            </span>
            <h2 className="u-title-200 text-white tracking-tight uppercase leading-[0.88]">
              Most agencies bill for hours. We engineer your market dominance.
            </h2>
            <p className="text-lg text-[#6E7177] font-light leading-relaxed">
              Traditional agencies are designed to protect their retainer by moving slowly and burying you in slide decks. We operate as a high-velocity product &amp; acquisition team: senior engineers, top 1% creative directors, and performance marketers working directly with founders.
            </p>

            {/* Contrast Table */}
            <div className="mt-8 rounded-2xl border-2 border-white/10 bg-[#121212] p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/20 text-[#FF1F1F] font-bold">
                <span>TRADITIONAL AGENCY</span>
                <span>NEXUS GROWTH LABS</span>
              </div>
              <div className="flex items-center justify-between text-[#6E7177]">
                <span>3-Month Strategy Decks</span>
                <span className="text-[#FF1F1F] font-bold">1-Week Deployable Sprints</span>
              </div>
              <div className="flex items-center justify-between text-[#6E7177]">
                <span>Junior Account Managers</span>
                <span className="text-[#FF1F1F] font-bold">Direct Access to Senior Leads</span>
              </div>
              <div className="flex items-center justify-between text-[#6E7177]">
                <span>Generic WordPress/Webflow</span>
                <span className="text-[#FF1F1F] font-bold">Sub-Second Next.js &amp; GSAP</span>
              </div>
              <div className="flex items-center justify-between text-[#6E7177]">
                <span>Vanity Impressions</span>
                <span className="text-[#FF1F1F] font-bold">Revenue &amp; High-LTV Customers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-white/10 bg-[#1A1A1A] p-4 shadow-[0_0_24px_rgba(255,31,31,0.25)] rotate-[2deg]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Telemetry Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-white">
                <span className="font-bold">SYSTEM METRICS • Q3 AUDIT</span>
                <span className="text-[#FF1F1F] font-bold">+340% VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ALL 11 CAPABILITIES TICKET DIRECTORY */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-3">
              COMPLETE SERVICE DIRECTORY
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              11 Capabilities. One Growth System.
            </h2>
          </div>
          <p className="font-sans text-sm text-[#C9CCD1] max-w-md">
            Click into any capability to view dedicated technical specifications, sprint timelines, deliverables, and concept case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={srv.href}
              className="tactile-card group p-6 flex flex-col justify-between border border-white/10 hover:border-[#FF1F1F]/50 bg-[#1A1A1A]"
              style={{ borderTopWidth: '8px', borderTopColor: srv.color }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-white/10">
                  <span className="font-mono text-xs font-black text-white">
                    #{srv.id} • SPEC
                  </span>
                  <span className="sticker-badge text-[9px] py-0.5 px-2 bg-[#121212] text-white shadow-none">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="mt-4 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase leading-none text-white group-hover:text-[#FF1F1F] transition-colors">
                  {srv.title}
                </h3>

                <p className="mt-3 font-sans text-xs text-[#C9CCD1] leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-white/10 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                  View Full Spec <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[10px] text-[#6E7177]">SPRINT READY</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 7: FEATURED CONCEPT CASE STUDIES */}
      <section id="work" className="relative w-full bg-[#121212] py-24 md:py-36 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="sticker-badge bg-[#1A1A1A] border border-[#FF1F1F]/30 text-white mb-3">
                CONCEPT CAPABILITY LABS
              </span>
              <h2 className="u-title-200 tracking-tight text-white">
                Selected Work &amp; Case Studies
              </h2>
            </div>
            <span className="font-mono text-xs text-[#C9CCD1] max-w-sm">
              All projects represent high-velocity concept capability showcases demonstrating verifiable technical execution.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="tactile-card overflow-hidden group bg-[#1A1A1A] border border-white/10 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-white/10">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="sticker-badge bg-[#0A0A0A] text-white font-mono text-[10px]">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span
                      className="sticker-badge font-mono text-xs font-bold"
                      style={{ backgroundColor: study.color, color: '#fff' }}
                    >
                      {study.metric}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl md:text-4xl font-extrabold uppercase text-white leading-none mb-3">
                      {study.title}
                    </h3>
                    <p className="font-sans text-xs text-[#C9CCD1] leading-relaxed mb-6 font-medium">
                      {study.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#FF1F1F] font-bold">{study.submetric}</span>
                    <Link
                      href="/services/web-development"
                      className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#FF1F1F] transition-colors"
                    >
                      Inspect Tech <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: GROWTH OPERATING SYSTEM (HOW WE WORK) */}
      <section id="process" className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="sticker-badge bg-[#FF1F1F] text-white mb-3">
            SPRINT METHODOLOGY
          </span>
          <h2 className="u-title-200 tracking-tight text-white">
            The Growth Operating System
          </h2>
          <p className="mt-3 font-sans text-base text-[#C9CCD1]">
            How we take you from bottlenecked to market dominance in 4 disciplined phases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHOD_STEPS.map((step) => (
            <div
              key={step.num}
              className="tactile-card p-6 flex flex-col justify-between border border-white/10"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-white/10">
                  <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-black text-white">
                    {step.num}.
                  </span>
                  <span
                    className="sticker-badge font-mono text-[9px] py-0.5 px-2"
                    style={{ backgroundColor: step.color, color: '#fff' }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-2xl font-extrabold uppercase leading-none text-white">
                  {step.title}
                </h3>

                <p className="mt-3 font-sans text-xs text-[#C9CCD1] leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-white/10 font-mono text-[10px] text-[#6E7177] uppercase">
                GUARANTEED QUALITY GATE
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: CLOSING HIGH-CONVERSION TICKET CTA */}
      <section className="relative px-4 py-20 md:px-8 md:py-28 max-w-6xl mx-auto my-12">
        <div 
          className="rounded-3xl border border-white/10 p-8 md:p-16 shadow-[0_0_24px_rgba(255,31,31,0.25)] text-center flex flex-col items-center text-white"
          style={{ background: 'linear-gradient(135deg, #FF1F1F, #8B0000)' }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-1 font-mono text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,31,31,0.15)] mb-6">
            <Sparkles className="h-4 w-4 text-[#FF1F1F]" /> READY FOR PRODUCTION SPRINT
          </div>

          <h2 className="u-title-100 text-white leading-none mb-6">
            LET'S BUILD SOMETHING EXTRAORDINARY.
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-white font-medium mb-8">
            Tell us about your next project, current bottleneck, or growth targets. We'll respond with a sprint roadmap within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="c-button text-base py-4 px-10 bg-[#0A0A0A] text-white shadow-[0_0_20px_rgba(255,31,31,0.15)]"
            >
              Start Your Project <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services/web-development"
              className="c-button c-button-white text-base py-4 px-8"
            >
              Inspect Website Proof ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
