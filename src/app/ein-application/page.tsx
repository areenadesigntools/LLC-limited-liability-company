import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('ein-application');

export const metadata: Metadata = generateSeoMetadata({
  title: 'EIN Application Assistance - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/ein-application',
});

export default function EINApplicationPage() {
  return <FormationServicePage slug="ein-application" />;
}
