'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Barcode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  textColor: string;
  href: string;
  metrics: string;
  rotation: number;
}

const CARDS: CardItem[] = [
  {
    id: '01',
    title: 'WEBSITE DEV',
    subtitle: 'Next.js 16 + GSAP spatial experiences',
    category: 'PRODUCT & CODE',
    color: '#FF1F1F',
    textColor: '#fff',
    href: '/services/web-development',
    metrics: '0.38s FCP ✦ 99+ VITALS',
    rotation: -10,
  },
  {
    id: '02',
    title: 'APP DEVELOPMENT',
    subtitle: 'React Native & native mobile platforms',
    category: 'MOBILE SYSTEMS',
    color: '#1A1A1A',
    textColor: '#fff',
    href: '/services/app-development',
    metrics: '42K MAU IN 90 DAYS',
    rotation: -5,
  },
  {
    id: '03',
    title: 'AI AUTOMATION',
    subtitle: 'Intelligent workflow & agent networks',
    category: 'AUTONOMOUS TECH',
    color: '#0A0A0A',
    textColor: '#fff',
    href: '/services/ai-automation',
    metrics: '85% FRICTION ELIMINATED',
    rotation: 0,
  },
  {
    id: '04',
    title: 'BRANDING & DESIGN',
    subtitle: 'Editorial identity & design systems',
    category: 'VISUAL ARCHITECTURE',
    color: '#8B0000',
    textColor: '#fff',
    href: '/services/branding-design',
    metrics: 'AWWWARDS SOTD LEVEL',
    rotation: 5,
  },
  {
    id: '05',
    title: 'PAID ACQUISITION',
    subtitle: 'Algorithmic Meta & Google Ads scale',
    category: 'GROWTH ENGINE',
    color: '#121212',
    textColor: '#C9CCD1',
    href: '/services/google-meta-ads',
    metrics: '4.2X AVERAGE ROAS',
    rotation: 10,
  },
];

export default function StackSpread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveCard(null);
      }}
      className="relative w-full max-w-6xl mx-auto py-12 px-4 min-h-[520px] flex items-center justify-center overflow-visible"
    >
      {/* Background hint */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-1 font-mono text-xs text-white/70 shadow-[0_0_16px_rgba(255,31,31,0.1)] z-0">
        <Sparkles className="h-3.5 w-3.5 text-[#FF1F1F]" />
        <span>HOVER OR SCROLL TO FAN OUT CAPABILITY DECK</span>
      </div>

      {/* The Stack */}
      <div className="relative w-full h-[420px] flex items-center justify-center mt-6">
        {CARDS.map((card, index) => {
          // Calculate spread positions
          const total = CARDS.length;
          const centerIndex = (total - 1) / 2;
          const offsetMultiplier = index - centerIndex;
          
          // Spread geometry when hovered or default
          const targetX = isHovered ? offsetMultiplier * 190 : offsetMultiplier * 36;
          const targetY = isHovered ? Math.abs(offsetMultiplier) * 14 : offsetMultiplier * 4;
          const targetRotate = isHovered ? offsetMultiplier * 7 : card.rotation;
          const targetScale = activeCard === index ? 1.06 : 1;

          // Determine if this card uses the red accent
          const isRedCard = card.color === '#FF1F1F' || card.color === '#8B0000';

          return (
            <motion.div
              key={card.id}
              animate={{
                x: targetX,
                y: targetY,
                rotate: targetRotate,
                scale: targetScale,
                zIndex: activeCard === index ? 40 : 10 + index,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 22,
              }}
              onHoverStart={() => setActiveCard(index)}
              className="absolute w-[270px] sm:w-[310px] h-[380px] rounded-3xl border border-white/10 p-6 cursor-pointer flex flex-col justify-between select-none"
              style={{
                backgroundColor: card.color,
                color: card.textColor,
                boxShadow: isRedCard 
                  ? '0 0 30px rgba(255, 31, 31, 0.25)' 
                  : '0 0 20px rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-current/20">
                  <span className="font-mono text-xs font-black uppercase tracking-wider">
                    DECK SPEC • #{card.id}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-current/30 font-bold uppercase">
                    {card.category}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-['Roboto_Flex'] [font-variation-settings:'wdth'_33] [font-stretch:33%] text-4xl sm:text-5xl font-extrabold uppercase leading-[0.88] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs font-medium opacity-70 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-current/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold">
                    <span>{card.metrics}</span>
                  </div>
                  <Link
                    href={card.href}
                    className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition-transform bg-[#1A1A1A] text-white hover:bg-[#FF1F1F] hover:border-[#FF1F1F]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
