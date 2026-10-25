import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | NEXUS Growth',
  description:
    'Privacy Policy for NEXUS Growth covering information collection, usage, security, communications, and privacy rights.',
  keywords: [
    'NEXUS Growth privacy policy',
    'privacy policy',
    'data privacy',
    'personal information',
  ],
};

const PRIVACY_SECTIONS = [
  {
    number: '01',
    icon: UserRound,
    title: 'INFORMATION YOU PROVIDE',
    content:
      'When you contact NEXUS Growth, submit a project inquiry, request information, or otherwise communicate with us, you may provide information such as your name, email address, company details, project requirements, timeline, budget information, and other information you voluntarily choose to submit.',
  },
  {
    number: '02',
    icon: Database,
    title: 'TECHNICAL INFORMATION',
    content:
      'When you access the website, certain technical information may be processed automatically by the website infrastructure or service providers supporting the platform. This may include browser type, device information, approximate location, IP address, referring pages, pages viewed, and general usage information.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'HOW INFORMATION IS USED',
    content:
      'Information may be used to respond to inquiries, evaluate project requirements, communicate about services, improve the website and user experience, maintain website security, administer business operations, and fulfill applicable contractual or legal obligations.',
  },
  {
    number: '04',
    icon: LockKeyhole,
    title: 'DATA SECURITY',
    content:
      'NEXUS Growth takes reasonable measures designed to protect information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'THIRD-PARTY SERVICES',
    content:
      'The website may rely on third-party infrastructure, hosting, analytics, communication, form-processing, or other service providers. Where such providers process information on behalf of the website, their processing may also be governed by their respective privacy policies and terms.',
  },
  {
    number: '06',
    icon: Mail,
    title: 'COMMUNICATIONS',
    content:
      'If you contact NEXUS Growth, information contained in your communication may be retained as necessary to respond to your request, manage an ongoing business relationship, maintain records, or comply with applicable obligations.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 paper-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="sticker-badge bg-[#FF1F1F] text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
              PRIVACY PROTOCOL
            </span>

            <span className="sticker-badge bg-[#1A1A1A] text-white font-mono">
              EFFECTIVE • OCT 25 2026
            </span>
          </div>

          <h1 className="u-title-100 text-white leading-[0.82] tracking-tight">
            PRIVACY
            <br />
            <span className="text-[#FF1F1F]">POLICY.</span>
          </h1>

          <p className="mt-8 max-w-3xl font-serif text-xl sm:text-2xl text-white italic leading-snug">
            This Privacy Policy explains how information may be collected,
            used, protected, and handled when you interact with the NEXUS
            Growth website and its services.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="c-button">
              Contact NEXUS Growth
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <Link
              href="/terms"
              className="c-button c-button-outline"
            >
              View Terms
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 tactile-card p-7 md:p-10 bg-[#121212]">
            <span className="u-label text-[#FF1F1F]">
              00 / OVERVIEW
            </span>

            <h2 className="u-title-300 text-white mt-4 mb-6">
              Your Information
              <br />
              Matters.
            </h2>

            <div className="space-y-5 text-sm md:text-base text-[#C9CCD1] leading-relaxed">
              <p>
                NEXUS Growth respects the importance of personal information
                and aims to handle information responsibly and transparently.
              </p>

              <p>
                This policy describes the categories of information that may
                be processed through the website, the purposes for which that
                information may be used, and the choices available to users.
              </p>

              <p>
                The specific information processed depends on how you interact
                with the website and which services or communication channels
                you use.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 tactile-card p-7 md:p-8 bg-[#FF1F1F] text-white">
            <span className="u-label text-white">
              DATA PRINCIPLE
            </span>

            <div className="mt-10">
              <LockKeyhole className="h-10 w-10 mb-6" />

              <h2 className="font-['Roboto_Flex'] text-3xl md:text-4xl font-black uppercase leading-none">
                PURPOSE
                <br />
                FIRST.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Information should be handled in connection with legitimate
                business, operational, security, communication, or legal
                purposes.
              </p>
            </div>
          </div>
        </section>

        {/* POLICY SECTIONS */}
        <section>
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="sticker-badge bg-[#1A1A1A] text-white">
                INFORMATION HANDLING
              </span>

              <h2 className="u-title-200 text-white mt-5">
                HOW DATA
                <br />
                IS HANDLED.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRIVACY_SECTIONS.map((section) => {
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

        {/* RIGHTS */}
        <section className="mt-12">
          <div className="tactile-card p-7 md:p-10 bg-[#1A1A1A] border border-white/10 shadow-[0_0_20px_rgba(255,31,31,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="sticker-badge bg-[#FF1F1F] text-white">
                  YOUR OPTIONS
                </span>

                <h2 className="u-title-300 text-white mt-5">
                  PRIVACY
                  <br />
                  REQUESTS.
                </h2>
              </div>

              <div className="lg:col-span-8 text-sm md:text-base text-[#C9CCD1] leading-relaxed space-y-5">
                <p>
                  Depending on applicable law and your circumstances, you may
                  have rights relating to personal information, including
                  requesting access, correction, deletion, restriction, or
                  information about how your data is handled.
                </p>

                <p>
                  Requests can be submitted through the contact channels
                  available on this website. Additional verification may be
                  required before a request is completed.
                </p>

                <a
                  href="mailto:inquiries@nexusgrowth.co"
                  className="inline-flex items-center gap-3 text-white hover:text-[#FF1F1F] transition-colors font-mono text-sm"
                >
                  <Mail className="h-4 w-4 text-[#FF1F1F]" />
                  inquiries@nexusgrowth.co
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CHANGES */}
        <section className="mt-12">
          <div className="border-t border-white/10 pt-8">
            <span className="u-label text-[#6E7177]">
              POLICY UPDATES
            </span>

            <p className="mt-4 max-w-4xl text-sm text-[#6E7177] leading-relaxed">
              This Privacy Policy may be updated from time to time to reflect
              changes in the website, services, operational practices, or
              applicable requirements. The updated version will be published
              on this page with an updated effective date...
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}