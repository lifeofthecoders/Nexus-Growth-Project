import React from 'react';
import type { Metadata } from 'next';
import GoogleMetaAdsExperience from '@/components/services/google-meta-ads/GoogleMetaAdsExperience';

export const metadata: Metadata = {
  title: '📢 Google & Meta Ads | NEXUS Growth',
  description: 'Data-driven paid media acquisition campaigns on Meta, Google Performance Max, and YouTube with creative fatigue protection and verified 4.2x average ROAS.',
  keywords: ['paid ads agency', 'Meta ads management', 'Google Performance Max agency', 'ROAS optimization', 'DTC performance marketing', 'NEXUS Growth MEDIA OS'],
};

export default function GoogleMetaAdsPage() {
  return <GoogleMetaAdsExperience />;
}
