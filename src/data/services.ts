import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'free-llc',
    slug: 'free-llc-registration',
    title: 'Free LLC Registration',
    shortDescription: 'Basic LLC registration assistance with no service fee; applicable government charges remain separate.',
    description: 'Launch a U.S. LLC through a structured registration process with no fee for our basic assistance. Applicable state charges and optional services are presented separately.',
    icon: 'FileCheck',
    href: '/free-llc-registration',
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'llc-formation',
    slug: 'llc-formation',
    title: 'LLC Formation',
    shortDescription: 'Structured U.S. LLC formation coordination for founders worldwide.',
    description: 'Organize your U.S. LLC formation with a clear state-filing checklist, ownership-information review, registered-agent guidance, and practical post-formation next steps.',
    icon: 'Building2',
    href: '/llc-formation',
    isFeatured: true,
  },
  {
    id: 'ein-application',
    slug: 'ein-application',
    title: 'EIN Application',
    shortDescription: 'Organized assistance with the federal Employer Identification Number application process.',
    description: 'Prepare an EIN application using consistent entity and responsible-party information, with clear guidance for the submission route and IRS response.',
    icon: 'CreditCard',
    href: '/ein-application',
  },
  {
    id: 'itin-application',
    slug: 'itin-application',
    title: 'ITIN Application',
    shortDescription: 'ITIN application support for eligible individuals with a U.S. federal tax purpose.',
    description: 'Coordinate an Individual Taxpayer Identification Number application with an eligibility-purpose review, identity-document checklist, and application-package guidance.',
    icon: 'User',
    href: '/itin-application',
  },
  {
    id: 'registered-agent',
    slug: 'registered-agent',
    title: 'Registered Agent',
    shortDescription: 'Maintain the registered-agent presence required for your U.S. entity.',
    description: 'Establish or update your company’s registered-agent arrangement for official state and legal correspondence, with clear notice-routing expectations.',
    icon: 'Shield',
    href: '/registered-agent',
  },
  {
    id: 'reseller-certificate',
    slug: 'reseller-certificate',
    title: 'Reseller Certificate',
    shortDescription: 'State-specific guidance for resale registration and certificate requirements.',
    description: 'Review the business activity, state requirements, and information commonly needed for a resale certificate or related sales-tax registration.',
    icon: 'Package',
    href: '/reseller-certificate',
  },
];

export const basicServiceIds = ['free-llc', 'llc-formation', 'ein-application'];

export function getServiceBySlug(slug: string): Service {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Service data is missing for slug: ${slug}`);
  }

  return service;
}
