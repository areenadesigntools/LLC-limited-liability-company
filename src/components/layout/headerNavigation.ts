import { paymentProviders } from '@/data/paymentProviders';
import { services } from '@/data/services';
import { taxServices } from '@/data/taxServices';

export type HeaderMenuId = 'formation' | 'tax' | 'payment';

export interface HeaderMenuEntry {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface HeaderNavItem {
  label: string;
  href?: string;
  menu?: HeaderMenuId;
  children?: HeaderMenuEntry[];
}

const formationEntries: HeaderMenuEntry[] = services.map((service) => ({
  id: service.id,
  title: service.title,
  description: service.shortDescription,
  href: service.href,
}));

const taxEntries: HeaderMenuEntry[] = taxServices.map((service) => ({
  id: service.id,
  title: service.name,
  description: service.description,
  href: service.href,
}));

const paymentEntries: HeaderMenuEntry[] = paymentProviders.map((provider) => ({
  id: provider.id,
  title: provider.name.replace(' Account', ''),
  description: `${provider.setupAssistance} Approval is determined by the provider.`,
  href: provider.href,
}));

export const headerNavItems: HeaderNavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Business Formation',
    menu: 'formation',
    children: formationEntries,
  },
  {
    label: 'Tax Services',
    menu: 'tax',
    children: taxEntries,
  },
  {
    label: 'Payment Accounts',
    menu: 'payment',
    children: paymentEntries,
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ', href: '/faq' },
];
