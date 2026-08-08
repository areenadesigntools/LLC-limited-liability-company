import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('registered-agent');

export const metadata: Metadata = generateSeoMetadata({
  title: 'Registered Agent Service - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/registered-agent',
});

export default function RegisteredAgentPage() {
  return <FormationServicePage slug="registered-agent" />;
}
