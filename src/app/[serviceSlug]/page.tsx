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
          lists={[
            { title: 'Information commonly required', items: taxService.requiredInfo },
            { title: 'Important considerations', items: taxService.considerations },
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
          title={provider.name}
          description={provider.description}
          overviewHref="/payment-accounts"
          overviewLabel="All Payment Services"
          summaryLabel="Setup assistance"
          summary={provider.setupAssistance}
          notice="Account availability, verification, limits, eligibility, and approval are determined solely by the payment provider. Assistance does not guarantee approval."
          lists={[
            { title: 'Common verification steps', items: provider.verificationSteps },
            { title: 'Common requirements', items: provider.commonRequirements },
          ]}
          related={related}
        />
      </>
    );
  }

  notFound();
}
