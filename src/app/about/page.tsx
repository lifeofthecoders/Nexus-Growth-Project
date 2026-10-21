import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Check, 
  Target, 
  Cpu, 
  Terminal, 
  Users 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About & Manifesto | NEXUS Growth',
  description: 'The anti-agency built for founders who refuse slow corporate bureaucracy. Learn our operating philosophy, sprint methodology, and high-velocity ethos.',
  keywords: ['about NEXUS Growth', 'anti-agency manifesto', 'creative engineering team', 'digital growth agency team'],
};

const OPERATING_LAWS = [
  {
    num: '01',
    title: 'SPEED IS A PRIMARY MOAT',
    desc: 'While legacy agencies schedule 6 weeks of kickoff calls, our first production sprint ships within 5 days. Momentum compounds. Slow projects die.',
    color: '#FF1F1F',
  },
  {
    num: '02',
    title: 'CODE & BRAND ARE INSEPARABLE',
    desc: 'A gorgeous brand with 4-second mobile load times will starve. A lightning-fast website with generic template typography will be ignored. We engineer both simultaneously.',
    color: '#CC1919',
  },
  {
    num: '03',
    title: 'ZERO INTERMEDIARY BUREAUCRACY',
    desc: 'You work directly with senior creative directors and full-stack engineers who actually touch the code and pixels. No junior project coordinators whispering through telephone games.',
    color: '#8B0000',
  },
  {
    num: '04',
    title: 'OBSESSED WITH CASH COLLECTED',
    desc: 'We do not celebrate vanity metrics, awards that do not convert, or slide decks full of hypothetical promises. The only metric that matters is profitable enterprise scale.',
    color: '#FF4444',
  },
];

const LEADERSHIP = [
  {
    name: 'Yusuf M.',
    role: 'Founder & Head of Creative Engineering',
    background: 'Former Full-Stack Creative Director specializing in Next.js, WebGL architectures, and conversion physics.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
    color: '#E60000',
  },
  {
    name: 'Elena Rostova',
    role: 'Partner, Performance & Paid Growth',
    background: 'Managed $40M+ in algorithmic Meta & Google spend. Specializes in creative testing matrices and CAPI attribution.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    color: '#FF1F1F',
  },
  {
    name: 'Marcus Vance',
    role: 'Lead, Autonomous AI & Pipeline Systems',
    background: 'Specialist in multi-agent orchestration, LangGraph topologies, and high-throughput enterprise database webhooks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    color: '#CC1919',
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white paper-canvas ">
      {/* SECTION 1: HERO */}
      <section className="relative px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#FF1F1F] text-white rotate-[-2deg]">
              ✦ AGENCY MANIFESTO
            </span>
            <span className="sticker-badge bg-[#1A1A1A] text-white rotate-[1.5deg]">
              EST. 2026 • GLOBAL CREATIVE LABS
            </span>
            <span className="sticker-badge bg-[#C9CCD1] text-white">
              ZERO CORPORATE BUREAUCRACY
            </span>
          </div>

          <div className="w-full my-4">
            <h1 className="u-title-100 text-left tracking-tighter text-white">
              WE ARE THE ANTI-AGENCY.
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full my-6">
            <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-2xl font-bold uppercase text-white leading-tight">
              Traditional agencies are bloated holding company relics designed to bill for hours and protect retainers. We built NEXUS Growth for founders who want senior practitioners, 1-week deployment sprints, and ruthless market dominance.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="c-button text-sm py-3.5 px-7 shadow-[0_0_20px_rgba(255,31,31,0.15)]"
              >
                Work Directly With Us <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Performance Tape */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t-2 border-white/10 mt-6">
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-[#C9CCD1] block">Junior Staff Hand-Offs</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                0% ZERO
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#FF1F1F] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-white font-bold block">First Production Sprint</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                5 DAYS
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#C9CCD1] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-white font-bold block">Client Retention</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-white block mt-1">
                99.4% LTV
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <span className="font-mono text-xs text-[#C9CCD1] block">Core Disciplines</span>
              <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold text-[#FF1F1F] block mt-1">
                11 IN-HOUSE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 4 OPERATING LAWS */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 bg-[#121212] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="sticker-badge bg-[#FF1F1F] text-white mb-3">
              NON-NEGOTIABLE STANDARDS
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              The 4 Operating Laws of NEXUS
            </h2>
            <p className="mt-2 font-sans text-sm text-[#C9CCD1]">
              These are the foundational commitments we make to every founder, brand, and enterprise we partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {OPERATING_LAWS.map((law) => (
              <div
                key={law.num}
                className="tactile-card p-6 md:p-8 bg-[#1A1A1A] flex flex-col justify-between"
                style={{ borderLeftWidth: '8px', borderLeftColor: law.color }}
              >
                <div>
                  <span className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl font-black text-white block pb-2 border-b-2 border-white/10/10">
                    LAW • {law.num}
                  </span>
                  <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase text-white mt-4 leading-none">
                    {law.title}
                  </h3>
                  <p className="font-sans text-xs text-[#C9CCD1] mt-3 leading-relaxed font-medium">
                    {law.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10/10 font-mono text-[10px] text-white font-bold uppercase">
                  VERIFIED CULTURE COMMITMENT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP / SENIOR PRACTITIONERS */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="sticker-badge bg-[#C9CCD1] text-white mb-3">
              DIRECT PRACTITIONER ACCESS
            </span>
            <h2 className="u-title-200 tracking-tight text-white">
              Leadership &amp; Practice Leads
            </h2>
          </div>
          <p className="font-sans text-sm text-[#C9CCD1] max-w-md">
            No middle managers. Every partner leads client projects directly from sprint planning to production release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP.map((leader, i) => (
            <div
              key={i}
              className="tactile-card overflow-hidden bg-[#1A1A1A] flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden border-b-2 border-white/10">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="sticker-badge text-[10px] font-mono"
                    style={{ backgroundColor: leader.color, color: '#fff' }}
                  >
                    LEAD
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl font-extrabold uppercase text-white leading-none">
                  {leader.name}
                </h3>
                <p className="font-mono text-xs font-bold text-[#FF1F1F] mt-1 uppercase">
                  {leader.role}
                </p>
                <p className="font-sans text-xs text-[#C9CCD1] mt-3 font-medium leading-relaxed">
                  {leader.background}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <section className="relative px-4 py-24 md:px-8 md:py-32 max-w-6xl mx-auto my-12">
        <div className="rounded-3xl border border-white/10 bg-[#FF1F1F] p-8 md:p-16 shadow-[0_0_20px_rgba(255,31,31,0.15)] text-center flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-1 font-mono text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,31,31,0.15)] mb-6">
            <Sparkles className="h-4 w-4 text-[#FF1F1F]" /> JOIN OUR CLIENT ROSTER
          </div>

          <h2 className="u-title-100 text-white leading-none mb-6">
            READY FOR HIGH-VELOCITY PARTNERSHIP?
          </h2>

          <p className="max-w-xl mx-auto font-sans text-base md:text-lg text-white font-medium mb-8">
            Let's cut through the agency noise and get straight to building your growth engine. We reply within 24 hours.
          </p>

          <Link
            href="/contact"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Start Your Engagement <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
