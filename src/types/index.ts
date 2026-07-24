// Types for the application

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  isFeatured?: boolean;
  isPopular?: boolean;
};

export type TaxService = {
  id: string;
  slug: string;
  name: string;
  description: string;
  typicalUsers: string;
  requiredInfo: string[];
  considerations: string[];
  href: string;
};

export type PaymentProvider = {
  id: string;
  name: string;
  description: string;
  setupAssistance: string;
  verificationSteps: string[];
  commonRequirements: string[];
  href: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'phone' | 'select' | 'textarea' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: any;
};

export type ApplicationFormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  selectedService: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  businessName: string;
  businessType: string;
  businessActivity: string;
  message: string;
  consent: boolean;
  privacyAgreed: boolean;
};

export type LLCApplicationFormData = ApplicationFormData & {
  preferredLLCName: string;
  alternativeLLCName: string;
  preferredState: string;
  numberOfMembers: number;
  memberType: string;
  usAddressAvailability: boolean;
  registeredAgentRequired: boolean;
  einRequired: boolean;
  businessDescription: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  businessHours: string;
  facebook: string;
  linkedin: string;
  instagram: string;
};

export type SeoMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
};

export type SchemaOrg = {
  '@context': string;
  '@type': string;
  [key: string]: any;
};
