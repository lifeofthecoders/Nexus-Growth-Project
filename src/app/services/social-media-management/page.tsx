import React from 'react';
import type { Metadata } from 'next';
import SocialMediaExperience from '@/components/services/social-media-management/SocialMediaExperience';

export const metadata: Metadata = {
  title: '📲 Social Media Management | NEXUS Growth',
  description: 'Algorithmic short-form video production, TikTok & Instagram growth systems, viral hook engineering, and active community building for consumer & B2B brands.',
  keywords: ['social media management', 'TikTok growth agency', 'Instagram reels agency', 'short form video production', 'viral content strategy', 'omnichannel social'],
};

export default function SocialMediaPage() {
  return <SocialMediaExperience />;
}
