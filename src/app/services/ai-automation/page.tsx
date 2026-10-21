import React from 'react';
import type { Metadata } from 'next';
import { EyepuneAiExperience } from '@/components/services/ai-automation/EyepuneAiExperience';

export const metadata: Metadata = {
  title: 'Global AI Growth Engine | Autonomous Enterprise Automation | NEXUS Growth',
  description: 'Scale your enterprise globally with NEXUS Growth AI. We provide high-performance Multi-Model AI automation, autonomous sales pipelines, LangGraph multi-agent clusters, and NVIDIA NIM private inference.',
  keywords: ['AI automation agency', 'global AI growth engine', 'multi-agent orchestration', 'LangGraph automation', 'NVIDIA NIM enterprise', 'autonomous sales pipelines', 'GEO optimization', 'NEXUS Growth'],
};

export default function AiAutomationPage() {
  return (
    <div className="-mt-[var(--nav-offset)] w-full min-h-screen bg-[#030000]">
      <EyepuneAiExperience />
    </div>
  );
}
