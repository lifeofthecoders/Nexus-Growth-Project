import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  Gavel,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NEXUS Growth',
  description:
    'Terms and Conditions governing access to the NEXUS Growth website and use of its services.',
  keywords: [
    'NEXUS Growth terms',
    'terms and conditions',
    'website terms',
    'service terms',
  ],
};

const TERMS_SECTIONS = [
  {
    number: '01',
    icon: BriefcaseBusiness,
    title: 'USE OF THE WEBSITE',
    content:
      'You may access and use this website for lawful purposes and in accordance with these Terms. You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use the website in a manner that violates applicable law.',
  },
  {
    number: '02',
    icon: FileCheck2,
    title: 'SERVICES & PROJECT SCOPE',
    content:
      'Information presented on the website describes the types of services NEXUS Growth may provide. Specific deliverables, timelines, fees, responsibilities, intellectual property rights, and acceptance criteria are established through applicable project proposals, statements of work, contracts, or other written agreements.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'PROJECT COMMUNICATION',
    content:
      'Submitting an inquiry through the website does not automatically create a client relationship, contractual engagement, or obligation to provide services. A project relationship begins only when the applicable parties have agreed to the relevant commercial and contractual terms.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'WEBSITE CONTENT',
    content:
      'The website may contain descriptions, illustrations, examples, case-study material, technical information, or other content intended for general informational purposes. While reasonable efforts may be made to keep information current, specific results, timelines, or outcomes are not guaranteed solely by website content.',
  },
  {
    number: '05',
    icon: Gavel,
    title: 'INTELLECTUAL PROPERTY',
    content:
      'Unless otherwise stated or agreed in writing, website content, branding, graphics, interface elements, copy, code, and other materials presented through the website may be protected by applicable intellectual property laws. Website content may not be reproduced, redistributed, or commercially exploited without appropriate authorization.',
  },
  {
    number: '06',
    icon: Mail,
    title: 'CONTACT & INQUIRIES',
    content:
      'Information submitted through contact forms or direct communication should be accurate and provided with appropriate authority. NEXUS Growth may use submitted information to evaluate, respond to, and manage project inquiries and related business communications.',
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 paper-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#FF1F1F] text-white">
              <Gavel className="h-3.5 w-3.5" />
              OPERATING TERMS
            </span>

            <span className="sticker-badge bg-[#1A1A1A] text-white font-mono">
              EFFECTIVE • OCT 25 2026
            </span>
          </div>

          <h1 className="u-title-100 text-white leading-[0.82] tracking-tight">
            TERMS &
            <br />
            <span className="text-[#FF1F1F]">CONDITIONS.</span>
          </h1>

          <p className="mt-8 max-w-3xl font-serif text-xl sm:text-2xl text-white italic leading-snug">
            These Terms establish the basic rules governing access to the
            NEXUS Growth website and the relationship between website visitors,
            prospective clients, and NEXUS Growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="c-button">
              Start a Project
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <Link
              href="/privacy"
              className="c-button c-button-outline"
            >
              Privacy Policy
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* NOTICE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 tactile-card p-7 md:p-10 bg-[#121212]">
            <span className="u-label text-[#FF1F1F]">
              00 / AGREEMENT
            </span>

            <h2 className="u-title-300 text-white mt-4 mb-6">
              USE WITH
              <br />
              INTENT.
            </h2>

            <div className="space-y-5 text-sm md:text-base text-[#C9CCD1] leading-relaxed">
              <p>
                By accessing or using this website, you acknowledge that you
                have read and understood these Terms and agree to comply with
                them.
              </p>

              <p>
                If you do not agree with these Terms, you should discontinue
                use of the website.
              </p>

              <p>
                Project-specific commercial engagements may be subject to
                additional written agreements that take precedence over
                general website descriptions where applicable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 tactile-card p-7 md:p-8 bg-[#FF1F1F] text-white">
            <span className="u-label text-white">
              CORE PRINCIPLE
            </span>

            <div className="mt-10">
              <FileCheck2 className="h-10 w-10 mb-6" />

              <h2 className="font-['Roboto_Flex'] text-3xl md:text-4xl font-black uppercase leading-none">
                CLEAR
                <br />
                TERMS.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Project scope, deliverables, commercial terms, and
                responsibilities should be established in the applicable
                written agreement.
              </p>
            </div>
          </div>
        </section>

        {/* TERMS */}
        <section>
          <div className="mb-8">
            <span className="sticker-badge bg-[#1A1A1A] text-white">
              TERMS OF USE
            </span>

            <h2 className="u-title-200 text-white mt-5">
              THE
              <br />
              FRAMEWORK.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TERMS_SECTIONS.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="tactile-card p-6 md:p-8 bg-[#121212]"
                >
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <span className="font-mono text-xs text-[#FF1F1F]">
                      {section.number}
                    </span>

                    <Icon className="h-5 w-5 text-[#FF1F1F]" />
                  </div>

                  <h3 className="font-['Roboto_Flex'] text-2xl font-black uppercase tracking-tight text-white mb-4">
                    {section.title}
                  </h3>

                  <p className="text-sm text-[#C9CCD1] leading-relaxed">
                    {section.content}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* DISCLAIMERS */}
        <section className="mt-12">
          <div className="tactile-card p-7 md:p-10 bg-[#1A1A1A] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="sticker-badge bg-[#FF1F1F] text-white">
                  IMPORTANT
                </span>

                <h2 className="u-title-300 text-white mt-5">
                  LIMITS &
                  <br />
                  RESPONSIBILITY.
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-5 text-sm md:text-base text-[#C9CCD1] leading-relaxed">
                <p>
                  To the extent permitted by applicable law, website content
                  is provided on an informational basis and without guarantees
                  that the website will always be available, uninterrupted,
                  error-free, or completely secure.
                </p>

                <p>
                  Nothing on this website should be interpreted as a guarantee
                  of a particular commercial, marketing, advertising, search,
                  conversion, technical, or financial result.
                </p>

                <p>
                  Any limitations of liability, warranties, indemnities,
                  payment obligations, dispute procedures, governing law, and
                  other contractual matters relating to a specific engagement
                  are governed by the applicable written agreement for that
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UPDATES + CONTACT */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="tactile-card p-7 bg-[#121212]">
            <span className="u-label text-[#6E7177]">
              TERMS UPDATES
            </span>

            <p className="mt-4 text-sm text-[#C9CCD1] leading-relaxed">
              These Terms may be updated periodically to reflect changes to
              the website, services, operations, or applicable requirements.
              The current version will be published on this page.
            </p>
          </div>

          <div className="tactile-card p-7 bg-[#FF1F1F] text-white">
            <span className="u-label text-white">
              QUESTIONS
            </span>

            <p className="mt-4 text-sm text-white/90 leading-relaxed">
              For questions regarding these Terms or a potential engagement,
              contact the NEXUS Growth team.
            </p>

            <a
              href="mailto:inquiries@nexusgrowth.co"
              className="mt-5 inline-flex items-center gap-3 font-mono text-sm text-white hover:text-black transition-colors"
            >
              <Mail className="h-4 w-4" />
              inquiries@nexusgrowth.co
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}