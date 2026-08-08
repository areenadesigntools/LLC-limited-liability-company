import type { Metadata } from 'next';
import { ServiceOverviewPage } from '@/components/services/ServiceOverviewPage';
import { taxServices } from '@/data';
import { generateBreadcrumbSchema, generateMetadata as generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'U.S. Tax Filing Support - LLC Limited Liability Company',
  description: 'Structured support for common U.S. business and individual tax filing categories, including partnership, corporate, non-resident, state, and foreign-ownership reporting.',
  canonical: 'https://llclimitedliabilitycompany.com/tax-services',
});

export default function TaxServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Tax Services', url: 'https://llclimitedliabilitycompany.com/tax-services' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceOverviewPage
        variant="tax"
        eyebrow="Tax & compliance support"
        title="U.S. tax filing support built around your reporting context."
        description="Organize common federal, state, individual, corporate, partnership, and foreign-ownership filing requirements through a clear information and document-review process."
        noticeTitle="General tax information notice"
        notice="Tax requirements depend on entity classification, ownership, residency, income source, transactions, elections, and current law. Website content is general and does not replace advice from a qualified tax professional, accountant, or attorney."
        directoryTitle="Choose the filing category that matches your situation"
        directoryDescription="Each service page explains the typical users, information commonly requested, key considerations, and the preparation process."
        items={taxServices.map((service) => ({
          title: service.name,
          description: service.description,
          href: service.href,
          metaLabel: 'Commonly relevant for',
          meta: service.typicalUsers,
          listLabel: 'Information to prepare',
          list: service.requiredInfo,
        }))}
        process={[
          { title: 'Identify the filing', description: 'Confirm the entity, ownership, residency, reporting period, and filing category.' },
          { title: 'Organize records', description: 'Collect the financial, ownership, transaction, and prior-filing information commonly required.' },
          { title: 'Review and prepare', description: 'Map the available information to the filing and resolve obvious gaps or inconsistencies.' },
          { title: 'File and retain', description: 'Coordinate the filing path and maintain confirmations and supporting records.' },
        ]}
      />
    </>
  );
}
