import React from 'react';
import type { Metadata } from 'next';
import SeoExperience from '@/components/services/seo/SeoExperience';

export const metadata: Metadata = {
  title: '🔍 Search Engine Optimization (SEO) | NEXUS Growth',
  description: 'Technical Core Web Vitals optimization, programmatic search clusters, and high-authority link acquisition architectures for organic market dominance.',
  keywords: ['SEO agency', 'technical SEO', 'programmatic SEO', 'Core Web Vitals agency', 'organic search growth', 'SERP dominance'],
};

export default function SeoPage() {
  return <SeoExperience />;
}
