import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Capabilities & Services | NEXUS Growth',
  description: 'Explore the 11 integrated creative production capabilities of NEXUS Growth. Web development, mobile apps, AI automation, branding, paid media, and conversion funnels.',
  keywords: ['agency services', 'digital growth capabilities', 'full service agency', 'web development', 'paid ads', 'branding'],
};

const SERVICES = [
  {
    id: '01',
    title: 'Website Development',
    category: 'PRODUCT & CODE',
    flag: 'SPEC PROOF ENGINE',
    desc: 'Custom Next.js App Router & GSAP spatial experiences with sub-second Core Web Vitals and edge runtime routing.',
    specs: ['Next.js 16 + React 19', 'GSAP Hardware Motion', 'Headless CMS (Sanity)', 'FCP < 0.40s'],
    color: '#FF1F1F',
    href: '/services/web-development',
  },
  {
    id: '02',
    title: 'App Development',
    category: 'MOBILE SYSTEMS',
    desc: 'Native iOS & Android architectures built on React Native with fluid gesture physics and offline-first data sync.',
    specs: ['iOS & Android Native', 'React Native / Expo', 'Offline Sync & Cache', 'Biometric Auth'],
    color: '#CC1919',
    href: '/services/app-development',
  },
  {
    id: '03',
    title: 'Social Media Management',
    category: 'ORGANIC DISTRIBUTION',
    desc: 'Algorithmic short-form video production, TikTok & Instagram growth funnels, and high-retention community management.',
    specs: ['Short-Form Video Hub', 'Viral Hook Framework', 'Community Moderation', 'Cross-Platform Syndication'],
    color: '#8B0000',
    href: '/services/social-media-management',
  },
  {
    id: '04',
    title: 'Graphic Design',
    category: 'VISUAL ASSETS',
    desc: 'Brutalist, tactile, and editorial design collateral that commands instant visual authority across print and digital touchpoints.',
    specs: ['Tactile Packaging', 'Editorial 3D Typography', 'Marketing Collateral', 'Design Systems'],
    color: '#FF4444',
    href: '/services/graphic-design',
  },
  {
    id: '05',
    title: 'AI Automation',
    category: 'AUTONOMOUS TECH',
    flag: '⚡ CYBERNETIC ENGINE',
    desc: 'Autonomous LLM agent networks and intelligent workflow orchestration that eliminate manual operational friction.',
    specs: ['Multi-Agent Systems', 'Custom LLM Fine-Tuning', 'CRM & ERP Webhooks', 'Automated Lead Routing'],
    color: '#FF1F1F',
    href: '/services/ai-automation',
  },
  {
    id: '06',
    title: 'Branding & Design',
    category: 'BRAND IDENTITY',
    flag: '✦ UNIFIERS JAPAN UI',
    desc: 'Complete brand foundations, custom type design, tone-of-voice frameworks, and comprehensive brand guidelines.',
    specs: ['Visual Identity Systems', 'Custom Typography Design', 'Brand Story & Voice', 'Comprehensive Guidelines'],
    color: '#8B0000',
    href: '/services/branding-design',
  },
  {
    id: '07',
    title: 'Google & Meta Ads',
    category: 'PAID PERFORMANCE',
    desc: 'High-ROAS paid acquisition campaigns with creative fatigue protection, server-side tracking, and algorithmic budget scaling.',
    specs: ['Meta CAPI Tracking', 'Google Performance Max', 'Creative Testing Matrix', '4.2x Average ROAS'],
    color: '#E60000',
    href: '/services/google-meta-ads',
  },
  {
    id: '08',
    title: 'Video Production & Editing',
    category: 'PRODUCTION & FILM',
    flag: '✦ ENCHANTED CINEMA UI',
    desc: 'Cinematic brand films, high-energy product trailers, sound design, and vertical viral reels engineered for retention.',
    specs: ['4K Cinema Production', 'Vertical Social Cuts', 'Custom Sound Engineering', 'Motion Graphics 3D'],
    color: '#FF4444',
    href: '/services/video-production-editing',
  },
  {
    id: '09',
    title: 'Copywriting & Content Strategy',
    category: 'PERSUASION & MESSAGING',
    desc: 'High-converting sales pages, positioning manifestos, and email lifecycle sequences that turn readers into buyers.',
    specs: ['Landing Page Copy', 'Manifesto Positioning', 'Email Lifecycle Flows', 'SEO Topic Clusters'],
    color: '#CC1919',
    href: '/services/copywriting-content-strategy',
  },
  {
    id: '10',
    title: 'SEO (Search Engine Optimization)',
    category: 'ORGANIC DOMINANCE',
    desc: 'Technical Core Web Vitals optimization, programmatic search clusters, and high-authority link acquisition architectures.',
    specs: ['Technical SEO Audits', 'Programmatic Pages', 'Core Web Vitals 99+', 'Authority Outreach'],
    color: '#E60000',
    href: '/services/seo',
  },
  {
    id: '11',
    title: 'CRM & Sales Funnel Setup',
    category: 'CONVERSION OPS',
    flag: '✦ PIPELINE FUNNEL UI',
    desc: 'Multi-step automated checkout funnels, HubSpot/Klaviyo lifecycle integration, and end-to-end attribution pipelines.',
    specs: ['HubSpot & Klaviyo Ops', 'Multi-Step Funnel UI', 'Churn Reduction Flows', 'Attribution Tracking'],
    color: '#FF1F1F',
    href: '/services/crm-sales-funnel',
  },
];

export default function ServicesHubPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white paper-canvas selection:bg-[#FF1F1F] selection:text-white">
      {/* Header */}
      <section className="relative px-4 pt-16 pb-16 md:px-8 md:pt-20 md:pb-20 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="sticker-badge bg-[#FF1F1F] text-white rotate-[-2deg]">
            ✦ MASTER DIRECTORY
          </span>
          <span className="sticker-badge bg-[#1A1A1A] text-white rotate-[1.5deg]">
            11 INTEGRATED DISCIPLINES
          </span>
          <span className="sticker-badge bg-[#FF1F1F] text-white">
            HIGH-VELOCITY SPRINT TEAMS
          </span>
        </div>

        <h1 className="u-title-100 tracking-tighter text-white my-2">
          SERVICES DIRECTORY
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6 pb-8 border-b-2 border-white/10">
          <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-xl font-bold uppercase text-white leading-snug">
            We don't isolate design from engineering or growth from branding. Every capability connects into a unified revenue engine.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs font-bold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF1F1F] animate-pulse border border-white/10" />
            <span>ALL SPRINT TEAMS ACTIVE</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-28 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={srv.href}
              className="tactile-card group p-6 flex flex-col justify-between hover:translate-x-[-3px] hover:translate-y-[3px]"
              style={{ borderTopWidth: '8px', borderTopColor: srv.color }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-white/10/10">
                  <span className="font-mono text-xs font-black text-white">
                    SPEC • #{srv.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {srv.flag && (
                      <span className="font-mono text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-[#0A0A0A] text-[#FF1F1F]">
                        {srv.flag}
                      </span>
                    )}
                    <span className="sticker-badge text-[9px] py-0.5 px-2 bg-[#1A1A1A] text-white shadow-none">
                      {srv.category}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-3xl sm:text-4xl font-extrabold uppercase leading-none text-white group-hover:text-[#FF1F1F] transition-colors">
                  {srv.title}
                </h3>

                <p className="mt-3 font-sans text-xs text-[#C9CCD1] leading-relaxed font-medium">
                  {srv.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10/10">
                  <ul className="space-y-1.5 font-mono text-[11px] text-white">
                    {srv.specs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full border border-white/10" style={{ backgroundColor: srv.color }} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-white/10/10 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                  Inspect Capability Spec <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[10px] text-[#6E7177]">SPRINT READY</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl border-4 border-white/10 bg-[#FF1F1F] p-8 md:p-14 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)] flex flex-col items-center">
          <span className="sticker-badge bg-[#0A0A0A] text-white text-xs mb-3">UNIFIED CAPABILITIES</span>
          <h2 className="u-title-200 uppercase text-white leading-none mb-4">
            Need Multiple Capabilities Combined?
          </h2>
          <p className="max-w-xl mx-auto font-sans text-sm md:text-base text-white font-medium mb-8">
            Most client engagements combine 3–4 capabilities (e.g. Next.js Web + AI Automation + Paid Ads) into a single cross-functional sprint team.
          </p>
          <Link
            href="/contact"
            className="c-button text-base py-4 px-10 bg-[#0A0A0A] text-white shadow-[0_0_20px_rgba(255,31,31,0.15)]"
          >
            Design Your Custom Scope <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
