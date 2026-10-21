import React from 'react';
import type { Metadata } from 'next';
import { EnchantedVideoExperience } from '@/components/services/video-production/EnchantedVideoExperience';

export const metadata: Metadata = {
  title: '🎥 Video Production & Editing | NEXUS Growth Enchanted Studio',
  description: 'Full-bleed atmospheric cinema, 4K brand commercials, high-velocity post-production, timeline color scrubbers, and vertical short-form suites engineered for viral retention.',
  keywords: [
    'Enchanted UI',
    'video production agency',
    'cinematic brand film',
    'commercial reel',
    'color grading DaVinci',
    'short-form reels',
    'NEXUS Growth',
    '4K video studio'
  ],
};

export default function VideoProductionPage() {
  return (
    <div className="-mt-[var(--nav-offset)] w-full min-h-screen bg-[#050508] text-white">
      <EnchantedVideoExperience />
    </div>
  );
}
