'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronDown, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { SvgLogoConstructionCanvas } from './SvgLogoConstructionCanvas';

interface UnifierData {
  id: string;
  num: string;
  name: string;
  line1: string;
  line2: string;
  kanji: string;
  accent: string;
  secondary: string;
  crestSvg: string;
  crestTitle: string;
  warriorSvg: string;
  specs: { label: string; val: string }[];
  bio1: string;
  bio2: string;
  baseTitle: string;
  baseDesc: string;
  strategies: { title: string; desc: string }[];
  timeline: { year: string; title: string; desc: string; sub?: string }[];
}

const UNIFIERS: UnifierData[] = [
  {
    id: 'nobunaga',
    num: '01',
    name: 'Oda Nobunaga',
    line1: 'ODA',
    line2: 'NOBUNAGA',
    kanji: '織田信長',
    accent: '#FF1F1F',
    secondary: '#fffdde',
    crestSvg: '/unifiers/svg-76.svg',
    crestTitle: 'Crest of the Oda Clan',
    warriorSvg: '/unifiers/svg-28.svg',
    specs: [
      { label: 'Position', val: 'oda clan leader' },
      { label: 'timeline', val: '1534  —  1582' },
      { label: 'capital', val: 'azuchi castle' },
      { label: 'control', val: '1/3 of japan' },
      { label: 'power', val: '22 yrs in power' },
      { label: 'legacy', val: 'military innovation' },
    ],
    bio1: 'Oda Nobunaga is known as the first great unifier of japan - a daimyō who overthrew the ashikaga shogunate and ended years of feudal wars in japan.',
    bio2: 'He is said to be a tall, thin, and scantily bearded man. He is highly ambitious which made him ruthless but he is also said to be a realistic leader, admired for his ability to make difficult decisions.',
    baseTitle: 'Azuchi Castle served as a symbol of power and ambition',
    baseDesc: 'This is an incredibly strategic move by Nobunaga to select a new base overlooking Lake Biwa because it gave him a significant advantage and control over the Tokaido and Nakasendo roads - the key highways to Kyoto.',
    strategies: [
      {
        title: 'Encirclement Tactics',
        desc: "Nobunaga's encirclement tactics involved surrounding enemy forces to restrict their movement and apply pressure from all sides, leading to their defeat. Notably used in the Battle of Okehazama (1560)."
      },
      {
        title: 'Castle Siege Warfare',
        desc: "Nobunaga utilized innovative methods, including cannons and incendiary devices, to breach enemy fortresses' defenses. Demonstrated in the successful siege of Inabayama Castle in 1567."
      },
      {
        title: 'Divide and Conquer',
        desc: "Nobunaga employed a strategy of dividing his enemies and exploiting internal conflicts to weaken their resistance. By sowing discord among rivals and exploiting their weaknesses, he was able to expand his influence effectively."
      },
      {
        title: 'Innovative Use of Firearms',
        desc: "Nobunaga embraced the use of firearms on the battlefield, leveraging their destructive power to gain an advantage over traditional armies. His army's proficiency with firearms played a significant role in several key victories."
      }
    ],
    timeline: [
      {
        year: '1560',
        title: 'Battle of Okehazama',
        desc: "Nobunaga's decisive victory against the much larger Imagawa clan marked a turning point in his rise to power, demonstrating his military genius and establishing his reputation as a formidable warlord."
      },
      {
        year: '1567',
        title: 'Siege of Inabayama Castle',
        desc: "The Siege of Inabayama occurred in 1567 during Japan's Sengoku period. It pitted Oda Nobunaga against the warrior monks of Ishiyama Hongan-ji, led by Kennyo. Nobunaga's goal was to assert control over the region.",
        sub: 'Mt. Kinka - formerly Inabayama'
      },
      {
        year: '1568',
        title: 'Conquest of Kyoto',
        desc: "Nobunaga's forces successfully entered Kyoto, the capital of Japan at the time, marking a significant milestone in his ambition to unify the country. His control over Kyoto allowed him to exert influence over the imperial court and weaken his rivals' positions."
      },
      {
        year: '1575',
        title: 'Battle of Nagashino',
        desc: 'Nobunaga launched a brutal campaign against the warrior monks of Mount Hiei, who opposed his rule. The siege resulted in the destruction of the Enryaku-ji temple complex and the suppression of the militant Buddhist sects that had long been a challenge to central authority.'
      },
      {
        year: '1576',
        title: 'Establish Azuchi Castle',
        desc: "Nobunaga's construction of Azuchi Castle, a grand and innovative fortress, symbolized his power and ambition. It served as a political and cultural center, reflecting Nobunaga's desire to modernize and centralize Japan.",
        sub: 'Layout drawing of the castle'
      },
      {
        year: '1582',
        title: 'Honnō-ji Incident',
        desc: 'The treacherous betrayal and death of Nobunaga at the hands of Akechi Mitsuhide during the siege of Honnō-ji temple in Kyoto marked the tragic end of his reign and plunged Japan into a period of uncertainty and conflict.',
        sub: 'Honnō-ji Temple'
      }
    ]
  },
  {
    id: 'hideyoshi',
    num: '02',
    name: 'Toyotomi Hideyoshi',
    line1: 'TOYOTOMI',
    line2: 'HIDEYOSHI',
    kanji: '豊臣秀吉',
    accent: '#FF1F1F',
    secondary: '#fffdde',
    crestSvg: '/unifiers/svg-76.svg',
    crestTitle: 'Gosan no Kiri (Paulownia Crest)',
    warriorSvg: '/unifiers/svg-28.svg',
    specs: [
      { label: 'Position', val: 'taikō / imperial chancellor' },
      { label: 'timeline', val: '1537  —  1598' },
      { label: 'capital', val: 'osaka castle' },
      { label: 'control', val: 'all 66 provinces' },
      { label: 'power', val: '16 yrs in supreme power' },
      { label: 'legacy', val: 'monolithic unification' },
    ],
    bio1: 'Toyotomi Hideyoshi rose from humble peasant origins to become the supreme ruler of all Japan, completing the unification of the fractured feudal archipelago.',
    bio2: 'Famed for boundless energy, unparalleled diplomatic subtlety, and grand cultural patronage—commissioning the Golden Tea Room and harmonizing civil administration.',
    baseTitle: 'Osaka Castle stood as the golden citadel of supreme national cohesion',
    baseDesc: 'Constructed at the delta of the Yodo River with massive five-meter stone blocks, Osaka Castle commanded the commercial waterways of Japan, ensuring complete economic and trade dominance.',
    strategies: [
      {
        title: 'Water Siege & Inundation',
        desc: 'Hideyoshi diverted entire rivers to flood enemy castles without bloody attrition, as demonstrated in the famous siege of Takamatsu in 1582.'
      },
      {
        title: 'Diplomatic Alliance Architecture',
        desc: 'Neutralized hostile regional daimyo through marital diplomacy, imperial titles, and lavish chanoyu gatherings instead of destructive wars.'
      },
      {
        title: 'National Sword Hunt (Katana-gari)',
        desc: 'Confiscated weapons from civilian populations across all provinces, melting them into a giant bronze Buddha to seal domestic peace.'
      },
      {
        title: 'Taiko Land Cadastral Survey',
        desc: 'Standardized agricultural measurement and tax collection across all 66 provinces, establishing a unified economic baseline.'
      }
    ],
    timeline: [
      {
        year: '1582',
        title: 'Battle of Yamazaki',
        desc: "Marched his army 200 kilometers in five days (the Great Chugoku Return) to defeat Akechi Mitsuhide and claim Nobunaga's mantle."
      },
      {
        year: '1583',
        title: 'Battle of Shizugatake',
        desc: 'Decisive northern victory against Shibata Katsuie, securing undisputed control of central Honshu.'
      },
      {
        year: '1585',
        title: 'Imperial Regent (Kanpaku)',
        desc: 'Adopted into the noble Fujiwara clan and appointed Imperial Regent by the Emperor, legitimizing supreme civilian rule.'
      },
      {
        year: '1587',
        title: 'Pacification of Kyushu',
        desc: 'Compelled the powerful Shimazu clan of Satsuma to submit, uniting the southern islands under imperial order.'
      },
      {
        year: '1590',
        title: 'Siege of Odawara',
        desc: "Overcame the legendary Hojo clan's fortress with 200,000 unified troops, ending the Sengoku civil wars across all Japan."
      },
      {
        year: '1598',
        title: 'Daigo Cherry Blossom Gala',
        desc: 'Hosted the greatest cultural celebration in medieval history at Daigo-ji, gathering 1,300 aristocrats and establishing his eternal legend.'
      }
    ]
  },
  {
    id: 'ieyasu',
    num: '03',
    name: 'Tokugawa Ieyasu',
    line1: 'TOKUGAWA',
    line2: 'IEYASU',
    kanji: '徳川家康',
    accent: '#8B0000',
    secondary: '#fffdde',
    crestSvg: '/unifiers/svg-76.svg',
    crestTitle: 'Mitsuba Aoi (Triple Hollyhock)',
    warriorSvg: '/unifiers/svg-28.svg',
    specs: [
      { label: 'Position', val: 'first tokugawa shōgun' },
      { label: 'timeline', val: '1543  —  1616' },
      { label: 'capital', val: 'edo castle (tokyo)' },
      { label: 'control', val: '250-year unbroken peace' },
      { label: 'power', val: 'founder of pax tokugawa' },
      { label: 'legacy', val: 'perpetual governance' },
    ],
    bio1: 'Tokugawa Ieyasu transformed feudal conquest into an enduring 250-year golden dynasty of peace, urban flourishing, and profound craftsmanship.',
    bio2: 'A paragon of strategic patience and institutional foresight, Ieyasu famously said: "Life is like a long journey carrying a heavy burden; never hurry." He built frameworks designed to compound across centuries.',
    baseTitle: "Edo Castle established modern Tokyo as the world's greatest metropolis",
    baseDesc: 'Engineered with spiraling concentric waterways and defensive stone bastions, Edo Castle served as the nerve center for a stabilized realm connecting five national highways.',
    strategies: [
      {
        title: 'Strategic Patience & Biding Time',
        desc: 'Refused rash military ventures, allowing rivals to overextend and exhaust resources before executing decisive political solutions.'
      },
      {
        title: 'Alternate Attendance (Sankin-kōtai)',
        desc: 'Mandated all regional lords spend alternate years in Edo, anchoring logistical loyalty and preventing regional rebellion.'
      },
      {
        title: 'Buke Shohatto Governance Codex',
        desc: 'Instituted comprehensive legal codes governing samurai houses, marriages, and fortress maintenance to eliminate systemic entropy.'
      },
      {
        title: 'Red Seal Maritime Licensing',
        desc: 'Monopolized foreign trade through official Vermilion Seal permits (Shuinsen), protecting national sovereignty while fueling prosperity.'
      }
    ],
    timeline: [
      {
        year: '1570',
        title: 'Battle of Anegawa',
        desc: 'Fought steadfastly alongside Oda Nobunaga to break the combined forces of the Asai and Asakura clans.'
      },
      {
        year: '1584',
        title: 'Battle of Komaki & Nagakute',
        desc: 'Demonstrated tactical mastery by holding the field against Toyotomi Hideyoshi, forcing an honorable mutual peace.'
      },
      {
        year: '1590',
        title: 'Founding of Edo',
        desc: 'Accepted transfer to the undeveloped Kanto marshlands, immediately laying the civil engineering grid for modern Tokyo.'
      },
      {
        year: '1600',
        title: 'Battle of Sekigahara',
        desc: 'The largest and most consequential samurai battle in Japanese history; 160,000 warriors clashed, resulting in absolute Tokugawa triumph.'
      },
      {
        year: '1603',
        title: 'Inauguration of Shogunate',
        desc: 'Bestowed the supreme rank of Sei-i Taishōgun by the Emperor, inaugurating 250 years of uninterrupted Pax Tokugawa.'
      },
      {
        year: '1615',
        title: 'Siege of Osaka & Genna Enbu',
        desc: 'Finalized complete civil pacification, declaring the Genna Armistice—the official cessation of all domestic warfare.'
      }
    ]
  }
];

const PROVINCES = [
  'kyoto', 'osaka', 'gifu', 'nagano', 'yamanashi', 
  'shizuoka', 'toyama', 'aichi', 'fukui', 'mie', 
  'nara', 'hyogo', 'wakayama', 'tokushima', 'okayama', 
  'tottori', 'shiga'
];

export function JapaneseBrandingExperience() {
  const [activeUnifier, setActiveUnifier] = useState<UnifierData>(UNIFIERS[0]);
  const [selectedProvince, setSelectedProvince] = useState<string>('kyoto');

  return (
    <div className="relative w-full bg-transparent text-[#FFFFFF] overflow-hidden selection:bg-[#FF1F1F] selection:text-[#fffdde]">
      

      {/* 0. FIXED ROTATING CIRCULAR BADGE (Bottom-Left) */}
      <aside 
        aria-label="Interactive Shogunate Badge" 
        className="fixed bottom-8 left-8 z-40 hidden md:block select-none"
      >
        <div className="relative w-24 h-24 rounded-full bg-black/90 backdrop-blur-md shadow-2xl border border-white/20 flex items-center justify-center p-1 group hover:scale-105 transition-transform">
          {/* Subtle Conic Gradient Outer Glow Ring */}
          <div 
            className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
            style={{
              background: 'conic-gradient(rgb(255, 255, 255) 0deg, rgb(235, 189, 215) 90deg, rgb(196, 189, 228) 115deg, rgb(183, 230, 247) 178deg, rgb(233, 224, 185) 217deg, rgb(235, 195, 188) 284deg, rgb(255, 255, 255) 360deg)'
            }}
          />
          {/* Inner Dark Circular Plate */}
          <div className="absolute inset-[3px] rounded-full bg-black border border-white/10" />

          {/* Rotating Circular Text Path */}
          <svg 
            className="w-full h-full animate-[spin_20s_linear_infinite]" 
            viewBox="0 0 100 100" 
            overflow="visible"
          >
            <path 
              id="badge-curve-circle" 
              d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" 
              fill="transparent" 
            />
            <text className="text-[7.2px] fill-white tracking-[0.24em] uppercase font-bold" style={{ fontFamily: 'Panchang, sans-serif' }}>
              <textPath href="#badge-curve-circle" startOffset="0%">
                UNIFIERS OF JAPAN ✦ NEXUS ✦
              </textPath>
            </text>
          </svg>

          {/* Center Mon Mark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white text-xs font-serif italic">破</span>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* SECTION 1: COVER HERO [ 01 / 05 ] */}
      {/* ========================================================================= */}
      <section 
        id="hero"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden transition-colors duration-700"
        style={{ backgroundColor: activeUnifier.accent }}
      >
        {/* Floating Sakura Petals Drifting in Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-4 bg-[#fffdde]/40 rounded-full blur-[0.5px] animate-[pulse_4s_ease-in-out_infinite]"
              style={{
                top: `${(i * 7.5 + 4) % 100}%`,
                left: `${(i * 13 + 8) % 100}%`,
                transform: `rotate(${i * 35}deg) scale(${0.7 + (i % 4) * 0.2})`,
                opacity: 0.25 + (i % 3) * 0.2,
              }}
            />
          ))}
        </div>

        {/* Top Spacer for Nav */}
        <div className="w-full h-24" />

        {/* Central Stage: Typography + Warrior SVG */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto w-full">
          
          {/* Service Hero Headline & Subline */}
          <div className="mb-6 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs text-[#FF1F1F] tracking-[0.3em] uppercase block mb-2 font-bold">
              SERVICE 06 • BRAND ARCHITECTURE
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] leading-none">
              Enduring Identity &amp; Spatial Monograms.
            </h1>
            <p className="mt-3 font-mono text-xs sm:text-sm text-[#C9CCD1] uppercase tracking-wider">
              Timeless brand architecture rooted in Japanese editorial craftsmanship.
            </p>
          </div>

          {/* Top Kanji Calligraphy */}
          <div className="mb-2 sm:mb-4 text-center">
            <h2 
              className="text-4xl sm:text-6xl md:text-7xl tracking-widest text-[#fffdde] drop-shadow-sm select-none"
              style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}
            >
              {activeUnifier.kanji}
            </h2>
          </div>

          {/* Stacked Colossal Typography + Central Samurai Vector Layer */}
          <div className="relative w-full flex flex-col items-center justify-center">
            
            {/* Massive Display Text Line 1 */}
            <div 
              className="text-[#fffdde] text-center leading-[0.82] select-none font-bold tracking-tight uppercase"
              style={{ 
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(5rem, 16vw, 15rem)',
              }}
            >
              {activeUnifier.line1}
            </div>

            {/* Central Layered Samurai Illustration (Overlaps Text) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 lg:w-[460px] pointer-events-none z-30 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
              <Image 
                src={activeUnifier.warriorSvg}
                alt={activeUnifier.name}
                width={524}
                height={676}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Massive Display Text Line 2 */}
            <div 
              className="text-[#fffdde] text-center leading-[0.82] select-none font-bold tracking-tight uppercase relative z-10"
              style={{ 
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(5rem, 16vw, 15rem)',
              }}
            >
              {activeUnifier.line2}
            </div>
          </div>
        </div>

        {/* Dual Vertical Side Rails (Left & Right) */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-12 text-[#fffdde]/90 select-none z-30">
          <span className="font-mono text-xs tracking-[0.3em] [writing-mode:vertical-rl] uppercase">
            01 &nbsp; / &nbsp; 05
          </span>
          <div className="w-[1px] h-16 bg-[#fffdde]/40" />
          <span className="font-mono text-xs tracking-[0.3em] [writing-mode:vertical-rl] uppercase">
            unification of japan
          </span>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-12 text-[#fffdde]/90 select-none z-30">
          <span className="font-mono text-xs tracking-[0.3em] [writing-mode:vertical-rl] uppercase">
            {activeUnifier.name}
          </span>
          <div className="w-[1px] h-16 bg-[#fffdde]/40" />
          <span className="font-mono text-xs tracking-[0.3em] [writing-mode:vertical-rl] uppercase">
            01 &nbsp; / &nbsp; 05
          </span>
        </div>

        {/* Bottom Rail Details */}
        <div className="w-full border-t border-[#fffdde]/25 px-6 sm:px-12 py-4 flex items-center justify-between text-[#fffdde]/80 font-mono text-xs z-20">
          <span>CHAPTER 01 • OVERVIEW</span>
          <span className="tracking-widest uppercase">NEXUS Growth • BRAND IDENTITY SHOWCASE</span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: DOSSIER & CLAN CREST [ 02 / 05 ] */}
      {/* ========================================================================= */}
      <section 
        id="dossier" 
        className="relative w-full border-t border-[#FF1F1F] py-20 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]"
      >
        {/* Section Number Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/15">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-[#FF1F1F] font-bold">
              02 &nbsp; / &nbsp; 05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF]/60">
              clan dossier & metadata
            </span>
          </div>
          <span className="font-mono text-xs text-[#FFFFFF]/50 uppercase tracking-widest">
            {activeUnifier.name}
          </span>
        </div>

        {/* Interactive SVG Monogram Construction Canvas */}
        <SvgLogoConstructionCanvas />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Clan Crest Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-10 border border-white/20 bg-[#121212] rounded-none relative">
            <div className="w-48 h-48 sm:w-60 sm:h-60 relative flex items-center justify-center">
              <Image 
                src={activeUnifier.crestSvg}
                alt={activeUnifier.crestTitle}
                width={292}
                height={286}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <span className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-[#FFFFFF]/80 text-center font-semibold">
              {activeUnifier.crestTitle}
            </span>
          </div>

          {/* Right Column: Structured Specification Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#FF1F1F]">
              {activeUnifier.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="p-6 border-b border-r border-[#FF1F1F] bg-[#0A0A0A] hover:bg-[#121212] transition-colors"
                >
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#FFFFFF]/60 mb-2">
                    {spec.label}
                  </span>
                  <span 
                    className="block font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF]"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Bio Quotes */}
            <div className="mt-10 p-6 border-l-2 border-[#FF1F1F] bg-[#121212]/50 space-y-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#FFFFFF] leading-relaxed">
                &ldquo;{activeUnifier.bio1}&rdquo;
              </p>
              <p className="text-xs sm:text-sm font-sans text-[#FFFFFF]/80 leading-relaxed">
                {activeUnifier.bio2}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TERRITORY & DOMINION MAP [ 03 / 05 ] */}
      {/* ========================================================================= */}
      <section 
        id="dominion" 
        className="relative w-full border-t border-[#FF1F1F] py-20 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/15">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-[#FF1F1F] font-bold">
              03 &nbsp; / &nbsp; 05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF]/60">
              territory & dominion map
            </span>
          </div>
          <span className="font-mono text-xs text-[#FFFFFF]/50 uppercase tracking-widest">
            feudal provinces
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Map Vector Graphic + Province Coordinate Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-white/20 p-6 sm:p-10">
            
            {/* Map Graphic (Col 7) */}
            <div className="lg:col-span-7 relative flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[460px]">
              <div className="w-full max-w-[540px] aspect-square relative flex items-center justify-center">
                <Image 
                  src="/unifiers/svg-77.svg"
                  alt="Feudal Japan Dominion Map"
                  width={1972}
                  height={1972}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>

            {/* Strategic Castle Note (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF1F1F] text-[#fffdde] font-mono text-[11px] uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" />
                STRATEGIC STRONGHOLD
              </div>

              <h3 
                className="text-2xl sm:text-4xl font-bold uppercase text-[#FFFFFF] leading-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {activeUnifier.baseTitle}
              </h3>

              <p className="text-sm text-[#FFFFFF]/80 leading-relaxed">
                {activeUnifier.baseDesc}
              </p>

              {/* Province Pills */}
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#FFFFFF]/60 mb-3">
                  CONTROLLED FEUDAL PROVINCES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PROVINCES.map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvince(prov)}
                      className={`font-mono text-xs px-2.5 py-1 uppercase tracking-wider border transition-all cursor-pointer ${
                        selectedProvince === prov
                          ? 'bg-[#FF1F1F] text-white border-[#FF1F1F]'
                          : 'bg-[#1A1A1A]/60 text-[#FFFFFF]/80 border-white/15 hover:border-[#FF1F1F]'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: BATTLE STRATEGY & TACTICS [ 04 / 05 ] */}
      {/* ========================================================================= */}
      <section 
        id="strategy" 
        className="relative w-full border-t border-[#FF1F1F] py-20 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/15">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-[#FF1F1F] font-bold">
              04 &nbsp; / &nbsp; 05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF]/60">
              battle strategy & tactical doctrine
            </span>
          </div>
          <span className="font-mono text-xs text-[#FFFFFF]/50 uppercase tracking-widest">
            tactics
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Colossal Section Title */}
          <div className="space-y-4">
            <h2 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-[#FFFFFF] tracking-tight leading-[0.88]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              BATTLE <br />
              <span className="text-[#FF1F1F]">STRATEGY</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg font-serif italic text-[#FFFFFF]/80 leading-relaxed">
              &ldquo;Nobunaga&apos;s battle strategy was marked by innovation and aggression. His surprise attacks, use of firearms and willingness to adopt new technologies gave him a significant edge on the battlefield.&rdquo;
            </p>
          </div>

          {/* 4 Japanese-Framed Tactical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {activeUnifier.strategies.map((strat, i) => (
              <div 
                key={i}
                className="group relative p-8 sm:p-10 border border-white/20 bg-[#121212] hover:bg-[#fffdde] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Traditional Japanese Corner Accents */}
                <div className="absolute top-2 left-2 font-mono text-xs text-[#FF1F1F]/60 select-none">⌜</div>
                <div className="absolute top-2 right-2 font-mono text-xs text-[#FF1F1F]/60 select-none">⌝</div>
                <div className="absolute bottom-2 left-2 font-mono text-xs text-[#FF1F1F]/60 select-none">⌞</div>
                <div className="absolute bottom-2 right-2 font-mono text-xs text-[#FF1F1F]/60 select-none">⌟</div>

                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#FF1F1F] font-bold tracking-widest">
                    DOCTRINE 0{i + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF1F1F]" />
                </div>

                <h3 
                  className="text-2xl sm:text-3xl font-bold uppercase text-[#FFFFFF] mb-4 tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {strat.title}
                </h3>

                <p className="text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
                  {strat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: PIVOTAL MOMENTS [ 05 / 05 ] */}
      {/* ========================================================================= */}
      <section 
        id="moments" 
        className="relative w-full border-t border-[#FF1F1F] py-20 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/15">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-[#FF1F1F] font-bold">
              05 &nbsp; / &nbsp; 05
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF]/60">
              chronological timeline
            </span>
          </div>
          <span className="font-mono text-xs text-[#FFFFFF]/50 uppercase tracking-widest">
            turning points
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Colossal Section Title */}
          <div className="space-y-4">
            <h2 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-[#FFFFFF] tracking-tight leading-[0.88]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              PIVOTAL <br />
              <span className="text-[#FF1F1F]">MOMENTS</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg font-serif italic text-[#FFFFFF]/80 leading-relaxed">
              &ldquo;Nobunaga&apos;s pivotal moments during his reign were marked by strategic victories, ambitious projects, and ruthless suppression of opposition.&rdquo;
            </p>
          </div>

          {/* Timeline List Items */}
          <div className="border-t border-[#FF1F1F]">
            {activeUnifier.timeline.map((item, idx) => (
              <div 
                key={idx}
                className="py-8 sm:py-10 border-b border-[#FF1F1F] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#121212]/60 transition-colors px-2"
              >
                {/* Year Col */}
                <div className="lg:col-span-3">
                  <span 
                    className="text-4xl sm:text-6xl font-black text-[#FF1F1F] tracking-tight block leading-none"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-9 space-y-2">
                  <h4 
                    className="text-2xl sm:text-3xl font-bold uppercase text-[#FFFFFF] tracking-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                  {item.sub && (
                    <span className="inline-block font-mono text-xs text-[#FFFFFF]/60 uppercase tracking-widest mt-1">
                      ✦ {item.sub}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER & BRAND UNIFICATION CTA */}
      {/* ========================================================================= */}
      <footer className="w-full border-t border-[#FF1F1F] bg-[#0A0A0A] py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF1F1F] font-bold block">
              NEXUS Growth ✦ BRAND IDENTITY & UNIFICATION
            </span>
            <p className="text-sm text-[#FFFFFF]/70 max-w-md">
              Bringing centuries of Yamato architectural discipline and visual authority to modern high-growth brands.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-[#FF1F1F] hover:bg-[#c2002f] text-[#fffdde] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:scale-105"
            >
              INITIATE BRAND CODEX ➔
            </Link>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[#FFFFFF]/50 font-mono text-[11px] gap-4">
          <span>&copy; {new Date().getFullYear()} NEXUS Growth. ALL RIGHTS RESERVED.</span>
          <span>INSPIRATION: UNIFIERS OF JAPAN ✦ TOFU DESIGN</span>
        </div>
      </footer>

    </div>
  );
}
