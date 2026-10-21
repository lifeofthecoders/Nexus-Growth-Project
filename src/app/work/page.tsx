import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Cpu 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selected Work & Concept Showcases | NEXUS Growth',
  description: 'Explore verified concept capability showcases built by NEXUS Growth across web development, native mobile apps, AI automation, and paid growth engines.',
  keywords: ['agency portfolio', 'case studies', 'creative engineering projects', 'Next.js portfolio', 'high-growth client work'],
};

const PROJECTS = [
  {
    id: '01',
    title: 'AURA WEARABLES',
    clientType: 'SPATIAL HARDWARE DTC',
    discipline: 'E-COMMERCE • NEXT.JS',
    metric: '+340% CONVERSION LIFT',
    submetric: '0.38s FCP ✦ 100/100 LIGHTHOUSE',
    desc: 'Replacing a 4.2-second legacy Shopify theme with a custom headless Next.js flagship featuring 3D product exploration and instant edge checkout.',
    challenge: 'AURA had a world-class spatial audio device but suffered from 4.2-second mobile load times and a 78% cart abandonment rate on standard Shopify.',
    solution: 'Engineered a headless Next.js 16 storefront utilizing Shopify Storefront GraphQL, 3D WebGL product inspection, and server-side edge rendering.',
    stack: ['Next.js 16', 'GSAP 3', 'Three.js / WebGL', 'Shopify Storefront GraphQL', 'Vercel Edge'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    color: '#FF1F1F',
  },
  {
    id: '02',
    title: 'KINETIC OS PLATFORM',
    clientType: 'ENTERPRISE SUPPLY TECH',
    discipline: 'SAAS • AI AUTOMATION',
    metric: '2.1s → 0.4s SPEEDUP',
    submetric: '85% MANUAL FRICTION ELIMINATED',
    desc: 'Ground-up redesign and autonomous workflow orchestration for an enterprise logistics platform processing $40M annually.',
    challenge: 'Operations teams spent 600+ engineer hours monthly manually reconciling shipping manifests and invoicing anomalies across 4 siloed software tools.',
    solution: 'Deployed a LangGraph multi-agent network with private pgvector memory that automates 85% of exception parsing and syncs directly into ERP databases.',
    stack: ['React 19', 'LangGraph', 'Python FastAPI', 'pgvector', 'Tailwind v4'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    color: '#CC1919',
  },
  {
    id: '03',
    title: 'SOLSTICE COFFEE ROASTERS',
    clientType: 'SPECIALTY COFFEE DTC',
    discipline: 'BRANDING • SOCIAL VIRALITY',
    metric: '+890% ENGAGEMENT',
    submetric: '14.2M VIEWS ✦ 4.2X AD ROAS',
    desc: 'Editorial packaging, brutalist social campaigns, and TikTok growth systems that drove a DTC subscription brand to national retail distribution.',
    challenge: 'SOLSTICE was trapped in expensive paid ad bidding wars with declining margins and an outdated pastel brand identity.',
    solution: 'Complete brand overhaul featuring bold editorial typography, tactile packaging die-lines, and a daily short-form video batching engine.',
    stack: ['Brand Identity', 'Custom Packaging', 'TikTok Studio Engine', 'Meta CAPI', 'Klaviyo Lifecycle'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    color: '#8B0000',
  },
  {
    id: '04',
    title: 'VERVE CREATIVE SUITE',
    clientType: 'CREATOR ECONOMY APP',
    discipline: 'MOBILE APP • CRM FUNNEL',
    metric: '42K MAU IN 90 DAYS',
    submetric: '4.9 ★ STORE RATING (3K REVIEWS)',
    desc: 'Cross-platform mobile application and automated onboarding funnel designed for high retention and seamless organic invites.',
    challenge: 'Early prototypes suffered from frame jitter during video editing on older iPhones and Android devices, causing high 24-hour churn.',
    solution: 'Re-architected from scratch using React Native Reanimated 3 and Skia 2D canvas, hitting a locked 120FPS touch response rate with local offline sync.',
    stack: ['React Native', 'Skia 2D', 'RevenueCat IAP', 'WatermelonDB', 'Expo SDK'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    color: '#FF4444',
  },
  {
    id: '05',
    title: 'LUMEN SPATIAL AUDIO',
    clientType: 'AUDIO TECH HARDWARE',
    discipline: 'WEB AUDIO • 3D STAGE',
    metric: '100/100 VITALS',
    submetric: 'SUB-10MS WEB AUDIO LATENCY',
    desc: 'Interactive browser audio equalizer and 3D acoustics simulator demonstrating spatial hardware sound profiles prior to purchase.',
    challenge: 'Prospective buyers could not experience spatial audio separation through standard e-commerce static landing pages.',
    solution: 'Engineered a Web Audio API binaural synthesizer with 3D Three.js acoustic chamber visualization operating at 60FPS.',
    stack: ['Web Audio API', 'Next.js App Router', 'Three.js / GLSL', 'GSAP ScrollTrigger'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    color: '#E60000',
  },
  {
    id: '06',
    title: 'STRATA FINTECH GATEWAY',
    clientType: 'B2B PAYMENTS INFRASTRUCTURE',
    discipline: 'ENTERPRISE CONVERSION OPS',
    metric: '$120M PROCESSED',
    submetric: '3.2X ENTERPRISE LEAD DEMO LIFT',
    desc: 'Multi-step onboarding funnel, high-security dashboard UI, and automated sales pipeline for high-volume cross-border payments.',
    challenge: 'Complex onboarding documentation resulted in 64% merchant drop-off during compliance and KYC submission stages.',
    solution: 'Designed an interactive multi-step onboarding portal with real-time compliance validation and instant Slack alert routing for sales reps.',
    stack: ['Next.js 16', 'HubSpot CRM Ops', 'Stripe Connect API', 'PostHog Telemetry'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
    color: '#FF1F1F',
  },
];

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white paper-canvas ">
      {/* Header */}
      <section className="relative px-4 pt-16 pb-16 md:px-8 md:pt-20 md:pb-20 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="sticker-badge bg-[#FF1F1F] text-white rotate-[-2deg]">
            ✦ SELECTED WORK &amp; CASE STUDIES
          </span>
          <span className="sticker-badge bg-[#1A1A1A] text-white rotate-[1.5deg]">
            VERIFIED CAPABILITY LABS
          </span>
          <span className="sticker-badge bg-[#C9CCD1] text-white">
            TOP 1% EXECUTION
          </span>
        </div>

        <h1 className="u-title-100 tracking-tighter text-white my-2">
          SELECTED CASE STUDIES
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6 pb-8 border-b-2 border-white/10">
          <p className="max-w-2xl font-['Space_Grotesk'] text-lg md:text-xl font-bold uppercase text-white leading-snug">
            A transparent exhibition of high-velocity capability showcases. Every project represents deep technical execution and measurable conversion lift.
          </p>
          <span className="font-mono text-xs font-bold text-[#C9CCD1]">
            6 CAPABILITY SHOWCASES
          </span>
        </div>
      </section>

      {/* Case Studies Deep-Dive List */}
      <section className="px-4 pb-28 md:px-8 max-w-7xl mx-auto space-y-16">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="tactile-card p-6 md:p-12 bg-[#1A1A1A] overflow-hidden"
            style={{ borderLeftWidth: '10px', borderLeftColor: project.color }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Column */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="sticker-badge bg-black text-white text-[10px] font-mono">
                    {project.discipline}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span
                    className="sticker-badge font-mono text-xs font-bold"
                    style={{ backgroundColor: project.color, color: '#fff' }}
                  >
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="font-mono text-xs text-[#C9CCD1] font-bold uppercase block mb-1">
                    CLIENT ARCHETYPE • {project.clientType}
                  </span>
                  <h2 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold uppercase text-white leading-none">
                    {project.title}
                  </h2>
                </div>

                <div className="space-y-3 font-sans text-xs text-[#C9CCD1]">
                  <p className="font-medium text-white text-sm">
                    {project.desc}
                  </p>
                  <p>
                    <strong className="text-white uppercase font-mono">Challenge:</strong> {project.challenge}
                  </p>
                  <p>
                    <strong className="text-white uppercase font-mono">NEXUS Solution:</strong> {project.solution}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-3 border-t-2 border-white/10/10">
                  <span className="font-mono text-[10px] text-white font-bold uppercase block mb-2">Technologies Deployed</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t, i) => (
                      <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/10 bg-[#0A0A0A] font-bold text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="c-button text-xs py-3 px-6 shadow-[0_0_20px_rgba(255,31,31,0.15)]"
                    style={{ backgroundColor: project.color, color: '#fff' }}
                  >
                    Discuss Similar Engagement <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Callout */}
        <div className="rounded-3xl border border-white/10 bg-[#FF1F1F] p-8 md:p-14 text-center shadow-[0_0_20px_rgba(255,31,31,0.15)] flex flex-col items-center">
          <span className="sticker-badge bg-black text-white text-xs mb-3">CUSTOM ENGAGEMENT</span>
          <h2 className="u-title-200 uppercase text-white leading-none mb-4">
            Have a Complex Project Requirement?
          </h2>
          <p className="max-w-xl mx-auto font-sans text-sm md:text-base text-white font-medium mb-8">
            Whether you need a 3D WebGL flagship, a cross-platform mobile app, or a multi-agent AI pipeline, we have the senior engineering depth to deliver.
          </p>
          <Link
            href="/contact"
            className="c-button text-base py-4 px-10 bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Start Project Discussion <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
