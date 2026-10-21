import React from 'react';
import type { Metadata } from 'next';
import CopywritingExperience from '@/components/services/copywriting-content-strategy/CopywritingExperience';

export const metadata: Metadata = {
  title: '✍️ Copywriting & Content Strategy | NEXUS Growth',
  description: 'High-converting sales pages, brand positioning manifestos, and email lifecycle sequences that turn readers into loyal buyers.',
  keywords: ['conversion copywriting', 'direct response copywriting', 'content strategy agency', 'sales landing page copy', 'brand manifesto writer', 'objection teardowns'],
};

export default function CopywritingPage() {
  return <CopywritingExperience />;
}
