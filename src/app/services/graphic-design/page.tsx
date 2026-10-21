import React from 'react';
import type { Metadata } from 'next';
import GraphicDesignExperience from '@/components/services/graphic-design/GraphicDesignExperience';

export const metadata: Metadata = {
  title: '🎨 Graphic Design | NEXUS Growth',
  description: 'Brutalist, tactile, and editorial graphic design systems. Packaging, bespoke merchandise, 3D typography, and high-impact digital collateral.',
  keywords: ['graphic design agency', 'brand collateral design', 'packaging design', 'editorial typography', 'tactile branding', 'CMYK print production'],
};

export default function GraphicDesignPage() {
  return <GraphicDesignExperience />;
}
