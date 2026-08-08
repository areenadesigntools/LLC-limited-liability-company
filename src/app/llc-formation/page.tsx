import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('llc-formation');

export const metadata: Metadata = generateSeoMetadata({
  title: 'LLC Formation - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/llc-formation',
});

export default function LLCFormationPage() {
  return <FormationServicePage slug="llc-formation" />;
}
