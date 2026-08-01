import type { PaymentProvider } from '@/types';

export const paymentProviders: PaymentProvider[] = [
  {
    id: 'paypal',
    slug: 'paypal-account',
    name: 'PayPal Account',
    description: 'Global payment solutions and business account setup assistance.',
    setupAssistance: 'We assist with documentation preparation and account setup guidance.',
    verificationSteps: ['Business verification', 'Banking information', 'Identity confirmation', 'Tax documentation'],
    commonRequirements: ['Business registration', 'Tax ID or EIN', 'Bank account details', 'Address verification'],
    href: '/paypal-account',
  },
  {
    id: 'stripe',
    slug: 'stripe-account',
    name: 'Stripe Account',
    description: 'Payment processing and online payment solutions.',
    setupAssistance: 'We guide you through documentation and account application process.',
    verificationSteps: ['Business details', 'Personal identification', 'Banking information', 'Website verification'],
    commonRequirements: ['Business documentation', 'Government ID', 'Bank account', 'Business address'],
    href: '/stripe-account',
  },
  {
    id: 'wise',
    slug: 'wise-account',
    name: 'Wise Account',
    description: 'International money transfers and multi-currency business accounts.',
    setupAssistance: 'We assist with account setup and documentation requirements.',
    verificationSteps: ['Personal identification', 'Address verification', 'Source of funds verification', 'Contact confirmation'],
    commonRequirements: ['Government ID', 'Address proof', 'Phone number', 'Email address'],
    href: '/wise-account',
  },
  {
    id: 'payoneer',
    slug: 'payoneer-account',
    name: 'Payoneer Account',
    description: 'Global payment platform for freelancers and businesses.',
    setupAssistance: 'We provide guidance on documentation and account registration process.',
    verificationSteps: ['Personal registration', 'Tax information', 'Payment details', 'Phone verification'],
    commonRequirements: ['Personal identification', 'Tax ID', 'Phone number', 'Bank account for withdrawals'],
    href: '/payoneer-account',
  },
];

export function getPaymentProviderBySlug(slug: string): PaymentProvider | undefined {
  return paymentProviders.find((provider) => provider.slug === slug);
}
