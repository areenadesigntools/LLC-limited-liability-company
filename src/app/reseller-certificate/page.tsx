import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('reseller-certificate');

export const metadata: Metadata = generateSeoMetadata({
  title: 'Reseller Certificate Assistance - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/reseller-certificate',
});

export default function ResellerCertificatePage() {
  return <FormationServicePage slug="reseller-certificate" />;
}
