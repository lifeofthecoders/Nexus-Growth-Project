import React from 'react';
import type { Metadata } from 'next';
import { VartalaapCrmExperience } from '@/components/services/crm-sales-funnel/VartalaapCrmExperience';

export const metadata: Metadata = {
  title: '📈 Automated Sales Funnels & CRM Architecture | NEXUS Growth',
  description: 'Connect your commercial films, brand video campaigns, and ad traffic directly into automated sales funnels, HubSpot/Klaviyo lifecycle ops, and 1-click WhatsApp checkouts.',
  keywords: [
    'NEXUS Growth Pipeline',
    'production company sales funnel',
    'commercial video conversion funnel',
    'WhatsApp Business checkout',
    'HubSpot sales CRM setup',
    'Klaviyo lifecycle automation',
    'NEXUS Growth'
  ],
};

export default function CrmSalesFunnelPage() {
  return (
    <div className="-mt-[var(--nav-offset)] w-full min-h-screen bg-[#080c14] text-white">
      <VartalaapCrmExperience />
    </div>
  );
}
