import type { PaymentProvider } from '@/types';

export const paymentProviders: PaymentProvider[] = [
  {
    id: 'paypal',
    slug: 'paypal-account',
    name: 'PayPal Account',
    description: 'Business-account readiness and documentation guidance for PayPal applications and verification.',
    setupAssistance: 'We help organize the business, identity, banking, and tax information commonly requested during setup and verification.',
    verificationSteps: ['Business verification', 'Banking information', 'Identity confirmation', 'Tax documentation'],
    commonRequirements: ['Business registration', 'Tax ID or EIN', 'Bank account details', 'Address verification'],
    href: '/paypal-account',
  },
  {
    id: 'stripe',
    slug: 'stripe-account',
    name: 'Stripe Account',
    description: 'Application-readiness guidance for Stripe payment processing and business verification.',
    setupAssistance: 'We help organize the entity, representative, bank, website, and operating information commonly requested by Stripe.',
    verificationSteps: ['Business details', 'Personal identification', 'Banking information', 'Website verification'],
    commonRequirements: ['Business documentation', 'Government ID', 'Bank account', 'Business address'],
    href: '/stripe-account',
  },
  {
    id: 'wise',
    slug: 'wise-account',
    name: 'Wise Account',
    description: 'Documentation and verification guidance for Wise multi-currency business account applications.',
    setupAssistance: 'We help prepare the identity, address, business, and source-of-funds information that may be requested during review.',
    verificationSteps: ['Personal identification', 'Address verification', 'Source of funds verification', 'Contact confirmation'],
    commonRequirements: ['Government ID', 'Address proof', 'Phone number', 'Email address'],
    href: '/wise-account',
  },
  {
    id: 'payoneer',
    slug: 'payoneer-account',
    name: 'Payoneer Account',
    description: 'Application-readiness support for Payoneer business payment and receiving-account services.',
    setupAssistance: 'We help organize identity, tax, banking, and business-use information for the registration and verification process.',
    verificationSteps: ['Personal registration', 'Tax information', 'Payment details', 'Phone verification'],
    commonRequirements: ['Personal identification', 'Tax ID', 'Phone number', 'Bank account for withdrawals'],
    href: '/payoneer-account',
  },
];

export function getPaymentProviderBySlug(slug: string): PaymentProvider | undefined {
  return paymentProviders.find((provider) => provider.slug === slug);
}
