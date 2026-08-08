import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import {
  getPaymentProviderBySlug,
  getTaxServiceBySlug,
  paymentProviders,
  taxServices,
} from '@/data';
import {
  generateBreadcrumbSchema,
  generateMetadata as generateSeoMetadata,
  generateServiceSchema,
} from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{ serviceSlug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://llclimitedliabilitycompany.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...taxServices.map((service) => ({ serviceSlug: service.slug })),
    ...paymentProviders.map((provider) => ({ serviceSlug: provider.slug })),
  ];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const taxService = getTaxServiceBySlug(serviceSlug);

  if (taxService) {
    return generateSeoMetadata({
      title: `${taxService.name} - LLC Limited Liability Company`,
      description: taxService.description,
      canonical: `${siteUrl}/${taxService.slug}`,
    });
  }

  const provider = getPaymentProviderBySlug(serviceSlug);

  if (provider) {
    return generateSeoMetadata({
      title: `${provider.name} Setup Assistance - LLC Limited Liability Company`,
      description: provider.description,
      canonical: `${siteUrl}/${provider.slug}`,
    });
  }

  notFound();
}

export default async function IndividualServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const taxService = getTaxServiceBySlug(serviceSlug);

  if (taxService) {
    const pageUrl = `${siteUrl}/${taxService.slug}`;
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'Tax Services', url: `${siteUrl}/tax-services` },
      { name: taxService.name, url: pageUrl },
    ]);
    const serviceSchema = generateServiceSchema(
      taxService.name,
      taxService.description,
      taxService.slug
    );
    const related = taxServices
      .filter((service) => service.id !== taxService.id)
      .slice(0, 3)
      .map((service) => ({
        title: service.name,
        description: service.description,
        href: service.href,
      }));

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ServiceDetailPage
          category="Tax & Compliance"
          title={taxService.name}
          description={taxService.description}
          overviewHref="/tax-services"
          overviewLabel="All Tax Services"
          summaryLabel="Who this service is for"
          summary={taxService.typicalUsers}
          notice="Filing requirements depend on entity type, ownership, income, residency, and current regulations. Information is general and does not replace qualified tax or legal advice."
          heroPoints={[
            'Service-specific information checklist',
            'Organized filing-readiness review',
            'Clear follow-up and record guidance',
          ]}
          lists={[
            { title: 'Information commonly required', items: taxService.requiredInfo },
            { title: 'Important considerations', items: taxService.considerations },
          ]}
          process={[
            { title: 'Filing context review', description: 'Entity type, ownership, residency, reporting period, and the intended filing are confirmed.' },
            { title: 'Records checklist', description: 'You receive an organized list of the financial, ownership, and supporting information commonly required.' },
            { title: 'Preparation review', description: 'Available information is mapped to the filing and obvious gaps or follow-up questions are identified.' },
            { title: 'Filing and records', description: 'The submission path, confirmation, and ongoing recordkeeping considerations are communicated clearly.' },
          ]}
          faqs={[
            { question: `Who commonly uses ${taxService.name}?`, answer: taxService.typicalUsers },
            { question: 'What affects the preparation timeline?', answer: 'Timing depends on record completeness, transaction volume, ownership complexity, prior filings, requested clarifications, and the processing schedule of the relevant authority.' },
            { question: 'Does this replace tax or legal advice?', answer: 'No. The page provides general service information. Entity-specific tax positions, elections, treaty analysis, and legal decisions may require advice from an appropriately qualified professional.' },
          ]}
          related={related}
        />
      </>
    );
  }

  const provider = getPaymentProviderBySlug(serviceSlug);

  if (provider) {
    const pageUrl = `${siteUrl}/${provider.slug}`;
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'Payment Accounts', url: `${siteUrl}/payment-accounts` },
      { name: provider.name, url: pageUrl },
    ]);
    const serviceSchema = generateServiceSchema(
      `${provider.name} Setup Assistance`,
      provider.description,
      provider.slug
    );
    const related = paymentProviders
      .filter((item) => item.id !== provider.id)
      .slice(0, 3)
      .map((item) => ({
        title: item.name,
        description: item.description,
        href: item.href,
      }));

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ServiceDetailPage
          category="Payment Account Assistance"
          title={`${provider.name} Setup Assistance`}
          description={provider.description}
          overviewHref="/payment-accounts"
          overviewLabel="All Payment Services"
          summaryLabel="Setup assistance"
          summary={provider.setupAssistance}
          notice="Account availability, verification, limits, eligibility, and approval are determined solely by the payment provider. Assistance does not guarantee approval."
          heroPoints={[
            'Application-readiness checklist',
            'Business and identity information review',
            'Provider verification guidance',
          ]}
          lists={[
            { title: 'Common verification steps', items: provider.verificationSteps },
            { title: 'Common requirements', items: provider.commonRequirements },
          ]}
          process={[
            { title: 'Readiness review', description: 'We confirm the business model, target account, country context, and available company documents.' },
            { title: 'Information alignment', description: 'Business, representative, banking, website, and tax information is organized for consistency.' },
            { title: 'Application guidance', description: 'You receive practical support while completing the provider’s registration and verification flow.' },
            { title: 'Provider follow-up', description: 'We help interpret routine information requests while the provider retains sole approval authority.' },
          ]}
          faqs={[
            { question: `Can you guarantee approval for ${provider.name}?`, answer: 'No. Availability, eligibility, verification, account limits, and approval are determined solely by the provider under its current policies and risk controls.' },
            { question: 'What can improve application readiness?', answer: 'Consistent formation records, clear ownership information, a genuine business presence, an appropriate website, and verifiable banking and identity details can help reduce avoidable inconsistencies.' },
            { question: 'Will the provider request additional information?', answer: 'It may. Providers can request further identity, business-model, transaction, address, source-of-funds, or compliance information at any stage.' },
          ]}
          related={related}
        />
      </>
    );
  }

  notFound();
}
