import type { ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  address: 'B-206, Block A, North Nazimabad, Karachi',
  phone: '0371-2559501',
  email: 'info@llclimitedliabilitycompany.com',
  whatsappNumber: '+923712559501',
  businessHours: '10:00 am - 07:00 pm (UTC+5)',
  facebook: 'https://www.facebook.com/llclimitedliabilitycompany',
  linkedin: 'https://www.linkedin.com/company/llc-limited-liability-company',
  instagram: 'https://www.instagram.com/usallcofficial/',
};

export const socialLinks = [
  {
    name: 'Facebook',
    url: contactInfo.facebook,
    icon: 'Facebook',
  },
  {
    name: 'LinkedIn',
    url: contactInfo.linkedin,
    icon: 'Linkedin',
  },
  {
    name: 'Instagram',
    url: contactInfo.instagram,
    icon: 'Instagram',
  },
  {
    name: 'WhatsApp',
    url: `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`,
    icon: 'MessageCircle',
  },
];

export const companyInfo = {
  name: 'LLC Limited Liability Company',
  tagline: 'Helping entrepreneurs worldwide establish and manage U.S. companies',
  description: 'Professional business formation, tax, and compliance services for entrepreneurs and businesses worldwide.',
  founded: 2024,
  mission: 'To make U.S. business formation and compliance accessible and affordable for entrepreneurs globally.',
  vision: 'To be the trusted partner for entrepreneurs worldwide in establishing and managing their U.S. business presence.',
};

export const businessHours = {
  open: '10:00 AM',
  close: '7:00 PM',
  timezone: 'UTC+5 (Pakistan Standard Time)',
  workDays: 'Monday - Saturday',
  closedOn: 'Sunday and Public Holidays',
};

export const legalDisclaimer = 'Information on this website is provided for general informational purposes and does not replace advice from a qualified tax professional, attorney, or accountant.';

export const paymentTerms = {
  basicLLCRegistrationFee: 'Free',
  governmentStateFee: 'Varies by state ($50-$500 approx)',
  registeredAgent: 'Additional charge applies',
  premiumServices: 'Pricing varies',
};
