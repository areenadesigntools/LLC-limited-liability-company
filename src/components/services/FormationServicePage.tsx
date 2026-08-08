import { ServiceDetailPage } from './ServiceDetailPage';
import { getFormationServicePageContent, getServiceBySlug, services } from '@/data';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://llclimitedliabilitycompany.com';

export function FormationServicePage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const content = getFormationServicePageContent(slug);
  const pageUrl = `${siteUrl}/${service.slug}`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Business Formation', url: `${siteUrl}/llc-formation` },
    { name: service.title, url: pageUrl },
  ]);
  const serviceSchema = generateServiceSchema(service.title, service.description, service.slug);
  const related = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3)
    .map((item) => ({
      title: item.title,
      description: item.shortDescription,
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
        category={service.id === 'free-llc' ? 'Free LLC Registration Assistance' : 'Business Formation'}
        title={service.title}
        description={service.description}
        overviewHref="/llc-formation"
        overviewLabel="Business Formation Services"
        summaryLabel={content.summaryLabel}
        summary={content.summary}
        notice={content.notice}
        heroPoints={content.heroPoints}
        lists={content.lists}
        process={content.process}
        faqs={content.faqs}
        related={related}
      />
    </>
  );
}
