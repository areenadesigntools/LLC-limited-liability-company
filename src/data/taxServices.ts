import type { TaxService } from '@/types';

export const taxServices: TaxService[] = [
  {
    id: 'state-tax-filing',
    slug: 'state-tax-filing',
    name: 'State Tax Filing',
    description: 'Organized support for state-level income, franchise, or related business filing requirements that may apply to your LLC.',
    typicalUsers: 'LLCs conducting business in multiple states',
    requiredInfo: ['LLC formation documents', 'State business registration', 'Income records', 'Business expenses'],
    considerations: ['File in states where you do business', 'Estimated tax deadlines', 'Nexus requirements'],
    href: '/state-tax-filing',
  },
  {
    id: 'form-1065',
    slug: 'form-1065-filing',
    name: 'Form 1065 Filing',
    description: 'Preparation support for the federal partnership return commonly associated with multi-member LLCs taxed as partnerships.',
    typicalUsers: 'Multi-member LLCs taxed as partnerships',
    requiredInfo: ['Member information', 'Income and deductions', 'Capital accounts', 'Member distributions'],
    considerations: ['Pass-through entity taxation', 'K-1 schedule requirements', 'Estimated tax payments'],
    href: '/form-1065-filing',
  },
  {
    id: 'form-1120',
    slug: 'form-1120-filing',
    name: 'Form 1120 Filing',
    description: 'Corporate income tax return preparation support for entities taxed as C corporations.',
    typicalUsers: 'LLCs electing corporate taxation, small corporations',
    requiredInfo: ['Business income records', 'Corporate deductions', 'Asset information', 'Shareholder details'],
    considerations: ['Corporate tax rates', 'Estimated payments', 'Double taxation implications'],
    href: '/form-1120-filing',
  },
  {
    id: 'form-1120-proforma',
    slug: 'form-1120-proforma-5472',
    name: '1120 Pro Forma + 5472',
    description: 'Coordinated pro forma Form 1120 and foreign-owned U.S. disregarded-entity information reporting support.',
    typicalUsers: 'U.S. corporations with foreign ownership',
    requiredInfo: ['Ownership structure', 'Foreign owner details', 'Intercompany transactions', 'Corporate records'],
    considerations: ['Foreign ownership reporting', 'Transfer pricing', 'Withholding requirements'],
    href: '/form-1120-proforma-5472',
  },
  {
    id: 'form-1040-nr',
    slug: 'form-1040-nr-filing',
    name: '1040 / 1040-NR Filing',
    description: 'Individual federal return preparation support based on residency status and U.S. income-reporting requirements.',
    typicalUsers: 'Individual business owners, freelancers, non-resident aliens',
    requiredInfo: ['Income records', 'Business expenses', 'Investment income', 'Tax documents'],
    considerations: ['Residency status', 'U.S. income determination', 'Tax treaty implications'],
    href: '/form-1040-nr-filing',
  },
  {
    id: 'form-5472',
    slug: 'form-5472-filing',
    name: 'Form 5472 Filing',
    description: 'Information-return support for reportable foreign ownership and related-party transactions involving a U.S. entity.',
    typicalUsers: 'U.S. entities with foreign owners or transactions',
    requiredInfo: ['Foreign owner information', 'Related party transactions', 'Ownership percentages'],
    considerations: ['Transfer pricing compliance', 'Documentation requirements', 'Penalty implications'],
    href: '/form-5472-filing',
  },
];

export function getTaxServiceBySlug(slug: string): TaxService | undefined {
  return taxServices.find((service) => service.slug === slug);
}
