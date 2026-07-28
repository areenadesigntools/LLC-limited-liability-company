import type { Metadata } from 'next';
import { TemporaryServicePage } from '@/components/services/TemporaryServicePage';
import { getServiceBySlug } from '@/data';
import {
  generateBreadcrumbSchema,
  generateMetadata as generateSeoMetadata,
  generateServiceSchema,
} from '@/lib/seo';

const service = getServiceBySlug('reseller-certificate');

export const metadata: Metadata = generateSeoMetadata({
  title: 'Reseller Certificate - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/reseller-certificate',
});

export default function ResellerCertificatePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: service.title, url: 'https://llclimitedliabilitycompany.com/reseller-certificate' },
  ]);
  const serviceSchema = generateServiceSchema(
    service.title,
    service.description,
    service.slug
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <TemporaryServicePage service={service} />
    </>
  );
}
