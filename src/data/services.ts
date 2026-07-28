import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'free-llc',
    slug: 'free-llc-registration',
    title: 'Free LLC Registration',
    shortDescription: 'Our LLC registration assistance is free. You only pay the applicable state filing fee.',
    description: 'Complete LLC registration assistance with transparent pricing. Our service fee is free - you only pay state government fees.',
    icon: 'FileCheck',
    href: '/free-llc-registration',
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'llc-formation',
    slug: 'llc-formation',
    title: 'LLC Formation',
    shortDescription: 'Professional LLC formation service for entrepreneurs worldwide.',
    description: 'Complete LLC formation service including business structure recommendations and documentation preparation.',
    icon: 'Building2',
    href: '/llc-formation',
    isFeatured: true,
  },
  {
    id: 'ein-application',
    slug: 'ein-application',
    title: 'EIN Application',
    shortDescription: 'Get your Employer Identification Number for your U.S. LLC.',
    description: 'Professional assistance with EIN (Federal Employer Identification Number) application.',
    icon: 'CreditCard',
    href: '/ein-application',
  },
  {
    id: 'itin-application',
    slug: 'itin-application',
    title: 'ITIN Application',
    shortDescription: 'ITIN number application assistance for non-U.S. residents.',
    description: 'Complete support for Individual Taxpayer Identification Number application.',
    icon: 'User',
    href: '/itin-application',
  },
  {
    id: 'registered-agent',
    slug: 'registered-agent',
    title: 'Registered Agent',
    shortDescription: 'Professional registered agent service for your LLC.',
    description: 'Registered agent service to maintain your legal presence in the state of incorporation.',
    icon: 'Shield',
    href: '/registered-agent',
  },
  {
    id: 'reseller-certificate',
    slug: 'reseller-certificate',
    title: 'Reseller Certificate',
    shortDescription: 'Obtain a Reseller Certificate for sales tax exemption.',
    description: 'Assistance with Reseller Certificate application for sales tax exemption eligibility.',
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
