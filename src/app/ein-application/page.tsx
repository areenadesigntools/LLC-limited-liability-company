import type { Metadata } from 'next';
import { TemporaryServicePage } from '@/components/services/TemporaryServicePage';
import { getServiceBySlug } from '@/data';
import {
  generateBreadcrumbSchema,
  generateMetadata as generateSeoMetadata,
  generateServiceSchema,
} from '@/lib/seo';

const service = getServiceBySlug('ein-application');

export const metadata: Metadata = generateSeoMetadata({
  title: 'EIN Application - LLC Limited Liability Company',
  description: service.description,
  canonical: 'https://llclimitedliabilitycompany.com/ein-application',
});

export default function EINApplicationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: service.title, url: 'https://llclimitedliabilitycompany.com/ein-application' },
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
