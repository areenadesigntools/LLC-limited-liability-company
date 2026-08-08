import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('itin-application');

export const metadata: Metadata = generateSeoMetadata({
  title: 'ITIN Application Assistance - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/itin-application',
});

export default function ITINApplicationPage() {
  return <FormationServicePage slug="itin-application" />;
}
