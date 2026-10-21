import React from 'react';
import type { Metadata } from 'next';
import AppDevelopmentExperience from '@/components/services/app-development/AppDevelopmentExperience';

export const metadata: Metadata = {
  title: '📱 App Development | NEXUS Growth',
  description: 'Native iOS & Android mobile applications engineered on React Native & Expo. Fluid 120Hz gesture physics, offline-first caching, and high-retention onboarding funnels.',
  keywords: ['mobile app development', 'React Native agency', 'iOS development', 'Android development', 'mobile UI UX design', '120Hz gestures'],
};

export default function AppDevelopmentPage() {
  return <AppDevelopmentExperience />;
}
