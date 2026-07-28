import type { Metadata } from 'next';
import type { SeoMetadata } from '@/types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://llclimitedliabilitycompany.com';
const siteName = 'LLC Limited Liability Company';
const siteDescription = 'Helping entrepreneurs worldwide establish and manage U.S. companies through business formation, tax, and compliance services.';

export function generateMetadata(meta: SeoMetadata): Metadata {
  const canonical = meta.canonical || `${siteUrl}`;
  const image = meta.ogImage;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName,
      type: meta.ogType || 'website',
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: meta.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: (meta.twitterCard as 'summary' | 'summary_large_image' | 'app' | 'player') || 'summary_large_image',
      title: meta.title,
      description: meta.description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LLC Limited Liability Company',
    description: 'Business formation and tax compliance services',
    url: siteUrl,
    sameAs: [
      'https://www.facebook.com/llclimitedliabilitycompany',
      'https://www.linkedin.com/company/llc-limited-liability-company',
      'https://www.instagram.com/usallcofficial/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+923712559501',
      contactType: 'Customer Service',
      email: 'info@llclimitedliabilitycompany.com',
      areaServed: 'Worldwide',
    },
  };
}

// LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LLC Limited Liability Company',
    description: 'Business formation and tax compliance services',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-206, Block A, North Nazimabad',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    telephone: '+923712559501',
    email: 'info@llclimitedliabilitycompany.com',
    url: siteUrl,
    sameAs: [
      'https://www.facebook.com/llclimitedliabilitycompany',
      'https://www.linkedin.com/company/llc-limited-liability-company',
    ],
  };
}

// Service Schema
export function generateServiceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'LLC Limited Liability Company',
    },
    serviceType: 'Business Services',
    areaServed: 'Worldwide',
  };
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LLC Limited Liability Company',
    url: siteUrl,
    description: siteDescription,
  };
}

// ProfessionalService Schema
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LLC Limited Liability Company',
    description: siteDescription,
    url: siteUrl,
    telephone: '+923712559501',
    email: 'info@llclimitedliabilitycompany.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-206, Block A, North Nazimabad',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    areaServed: 'Worldwide',
    serviceType: 'Business Formation, Tax Filing, Compliance Services',
  };
}
