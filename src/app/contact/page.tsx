import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Terminal, 
  ArrowUpRight, 
  Globe2, 
  Zap, 
  CheckCircle2, 
  Mail, 
  MessageSquareCode,
  HelpCircle
} from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Initiate Transmission | Contact NEXUS Growth',
  description: 'Initiate a sprint inquiry with NEXUS Growth. No 3-week discovery delays or junior account reps. Direct senior practitioner access with a guaranteed 24-hour strategic review.',
  keywords: ['hire digital agency', 'Next.js agency inquiry', 'branding sprint contact', 'creative engineering sprint', 'growth agency contact'],
};

const GLOBAL_HUBS = [
  { city: 'NEW YORK', zone: 'EST (UTC-5)', status: 'ACTIVE DISPATCH' },
  { city: 'LONDON', zone: 'GMT (UTC+0)', status: 'CREATIVE LABS' },
  { city: 'DUBAI', zone: 'GST (UTC+4)', status: 'GROWTH TELEMETRY' },
  { city: 'SINGAPORE', zone: 'SGT (UTC+8)', status: 'AI NODE ENGINEERING' },
];

const FAQS = [
  {
    q: 'How fast can our team actually initiate sprint work?',
    a: 'Once your scope is agreed upon and mutual contracts are countersigned, Day 0 kickoff occurs within 48 to 72 hours. Your dedicated Slack/Discord war-room is provisioned immediately.'
  },
  {
    q: 'Do you execute mutual NDAs prior to deep technical discovery?',
    a: 'Yes. For proprietary architectures, unreleased hardware DTC, or confidential SaaS roadmaps, we issue and sign our bilateral standard NDA within 4 hours.'
  },
  {
    q: 'Can we hire NEXUS Growth for a single high-impact discipline (e.g. Next.js rebuild only)?',
    a: 'Absolutely. Over 60% of our enterprise clients start with a targeted 2-4 week sprint (such as headless storefront rebuild, ROAS creative overhaul, or multi-agent automation) before expanding to an all-in-one growth retainer.'
  },
  {
    q: 'How does billing and sprint milestone protection work?',
    a: 'We operate on transparent fixed-fee sprints or monthly dedicated pod retainers. Work is delivered against unambiguous milestones with zero hidden administrative fees.'
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 paper-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="sticker-badge bg-[#FF1F1F] text-white">
              <Sparkles className="h-3.5 w-3.5" />
              <span>TRANSMISSION FREQUENCY • DIRECT SPRINT DISPATCH</span>
            </div>
            <div className="sticker-badge bg-[#1A1A1A] text-white font-mono">
              <span className="h-2 w-2 rounded-full bg-[#FF1F1F] animate-pulse mr-1" />
              <span>STATUS: ACCEPTING Q3/Q4 SPRINT PARTNERS</span>
            </div>
          </div>

          <h1 className="u-title-100 text-white leading-[0.82] tracking-tight">
            INITIATE
            <br />
            <span className="text-[#FF1F1F] relative inline-block">
              TRANSMISSION
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FF1F1F] -z-10 -rotate-1 rounded-sm" />
            </span>
          </h1>

          <p className="mt-6 font-serif text-xl sm:text-2xl text-white max-w-3xl italic leading-snug">
            No 3-week discovery delays. No junior account handlers whispering through telephone games. 
            Specify your objective, timeline, and investment — our senior engineering & creative directors review your brief and respond within 24 hours.
          </p>
        </div>

        {/* 2-COLUMN ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* MAIN INTERACTIVE FORM COLUMN (7 COLS) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* ASYMMETRIC ASSURANCE & TELEMETRY SIDEBAR (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DIRECT PRACTITIONER ACCESS CARD */}
            <div className="tactile-card p-6 md:p-8 bg-[#0A0A0A] text-white border-3 border-white/10 shadow-[-6px_8px_0px_#FF1F1F]">
              <div className="flex items-center justify-between mb-4">
                <span className="sticker-badge bg-[#FF1F1F] text-white">
                  <Terminal className="h-3 w-3" />
                  <span>DIRECT EXECUTIVE LINE</span>
                </span>
                <span className="font-mono text-[10px] text-[#6E7177] uppercase tracking-widest">
                  NO PITCHMEN
                </span>
              </div>

              <h2 className="font-['Roboto_Flex'] text-2xl font-black uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight text-white mb-2">
                Talk Directly With Practitioners
              </h2>
              <p className="text-xs text-[#ecebe4] leading-relaxed mb-6 font-sans">
                The directors who review your brief are the same senior engineers and creative directors who design your systems and ship your code.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/15">
                <a 
                  href="mailto:inquiries@nexusgrowth.co" 
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 border border-white/20 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#FF1F1F]" />
                    <span className="font-mono text-xs text-white group-hover:text-[#FF1F1F] transition-colors">
                      inquiries@nexusgrowth.co
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#6E7177] group-hover:text-white transition-colors" />
                </a>

                <a 
                  href="mailto:founders@nexusgrowth.co" 
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 border border-white/20 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquareCode className="h-4 w-4 text-[#FF1F1F]" />
                    <span className="font-mono text-xs text-white group-hover:text-[#FF1F1F] transition-colors">
                      founders@nexusgrowth.co
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#6E7177] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* 4 OPERATING COMMITMENTS */}
            <div className="tactile-card p-6 md:p-8 bg-[#1A1A1A] border-3 border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-5 w-5 text-[#FF1F1F]" />
                <h3 className="font-['Roboto_Flex'] text-xl font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
                  The NEXUS Guarantee
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0A0A0A] border-2 border-white/10">
                  <div className="h-6 w-6 rounded bg-[#FF1F1F] border border-white/10 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white">24-Hour Strategic SLA</h4>
                    <p className="text-[11px] text-[#C9CCD1] mt-0.5">
                      Receive an honest diagnostic, feasibility check, and sprint timeline within 1 business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0A0A0A] border-2 border-white/10">
                  <div className="h-6 w-6 rounded bg-[#FF1F1F] border border-white/10 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white">100% IP & Asset Ownership</h4>
                    <p className="text-[11px] text-[#C9CCD1] mt-0.5">
                      Every line of code, Figma library, 3D asset, and ad campaign structure belongs entirely to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0A0A0A] border-2 border-white/10">
                  <div className="h-6 w-6 rounded bg-[#C9CCD1] border border-white/10 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white">Zero Lock-In Or Hostage Code</h4>
                    <p className="text-[11px] text-[#C9CCD1] mt-0.5">
                      Clean Git repositories, modern documentation, and modular architectures designed for your internal team to run seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0A0A0A] border-2 border-white/10">
                  <div className="h-6 w-6 rounded bg-[#FF1F1F] text-white border border-white/10 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-white">High-Velocity 5-Day Sprints</h4>
                    <p className="text-[11px] text-[#C9CCD1] mt-0.5">
                      We ship measurable production increments every single week. No multi-month black holes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GLOBAL DEPLOYMENT HUBS TELEMETRY */}
            <div className="tactile-card p-6 bg-[#121212] border-3 border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.15)]">
              <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-white" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Global Deployment Telemetry
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#FF1F1F] border border-white/10 px-2 py-0.5 rounded font-bold">
                  LIVE UTC
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {GLOBAL_HUBS.map((hub) => (
                  <div key={hub.city} className="p-3 rounded-xl bg-[#1A1A1A] border-2 border-white/10">
                    <div className="font-['Roboto_Flex'] text-base font-black [font-variation-settings:'wdth'_33] [font-stretch:33%] uppercase">
                      {hub.city}
                    </div>
                    <div className="font-mono text-[10px] text-[#C9CCD1]">{hub.zone}</div>
                    <div className="font-mono text-[9px] text-[#FF1F1F] font-bold mt-1 uppercase flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF1F1F] inline-block" />
                      {hub.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* FREQUENTLY ANSWERED INQUIRIES */}
        <div className="mt-20 pt-14 border-t-3 border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-[#FF1F1F]" />
              <h2 className="font-['Roboto_Flex'] text-3xl font-black uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] tracking-tight">
                Pre-Sprint Intelligence & Direct Answers
              </h2>
            </div>
            <span className="font-mono text-xs uppercase text-[#C9CCD1]">
              Common founder inquiries resolved
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="tactile-card p-6 bg-[#1A1A1A] border-2 border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.15)]"
              >
                <div className="font-mono text-xs font-bold text-[#C9CCD1] mb-2 uppercase">
                  QUESTION • 0{idx + 1}
                </div>
                <h3 className="font-['Roboto_Flex'] text-lg font-bold uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs text-[#C9CCD1] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM DIRECT DISPATCH BANNER */}
        <div className="mt-16 p-8 rounded-2xl bg-[#FF1F1F] border-3 border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-white block mb-1">
              HAVE AN URGENT RFP, FIGMA SPEC, OR PRIVATE DECK?
            </span>
            <h3 className="font-['Roboto_Flex'] text-3xl sm:text-4xl font-black uppercase [font-variation-settings:'wdth'_33] [font-stretch:33%] text-white tracking-tight">
              Email Our Leadership Directly
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-white mt-1">
              Send links or attachments directly to <strong className="font-mono not-italic font-bold">founders@nexusgrowth.co</strong> for rapid technical triage.
            </p>
          </div>

          <a 
            href="mailto:founders@nexusgrowth.co?subject=Urgent%20Sprint%20Inquiry%20-%20NEXUS%20Growth%20STUDIOS"
            className="c-button c-button-ink text-sm sm:text-base whitespace-nowrap"
          >
            Open Mail Client <ArrowUpRight className="h-4 w-4 text-[#FF1F1F]" />
          </a>
        </div>

      </div>
    </main>
  );
}
