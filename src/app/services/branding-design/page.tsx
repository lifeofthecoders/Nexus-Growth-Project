import React from 'react';
import type { Metadata } from 'next';
import { JapaneseBrandingExperience } from '@/components/services/branding-design/JapaneseBrandingExperience';

export const metadata: Metadata = {
  title: 'Unifiers of Japan & Brand | NEXUS Growth Flagship Showcase',
  description: 'A theatrical celebration of ancient samurai strategy, editorial design systems, and brand unifiers. Inspired by the three unifiers of Japan: Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu.',
  keywords: ['Unifiers of Japan', 'editorial branding', 'Japanese design agency', 'brand identity', 'Sengoku period', 'Oda Nobunaga', 'NEXUS Growth'],
};

export default function BrandingDesignJapanesePage() {
  return (
    <div className="-mt-[var(--nav-offset)] w-full min-h-screen">
      <JapaneseBrandingExperience />
    </div>
  );
}
