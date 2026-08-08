import type { Metadata } from 'next';
import { PolicyPage, type PolicySection } from '@/components/legal/PolicyPage';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Privacy Policy - LLC Limited Liability Company',
  description: 'Learn what information LLC Limited Liability Company may collect, why it is used, when it may be shared, and how to contact us about privacy.',
  canonical: 'https://llclimitedliabilitycompany.com/privacy-policy',
});

const sections: PolicySection[] = [
  {
    id: 'scope',
    title: 'Scope and purpose',
    paragraphs: [
      'This Privacy Policy describes how LLC Limited Liability Company (the “Company,” “we,” “us,” or “our”) handles information collected through this website, inquiry forms, and communications relating to our business-formation, tax-support, compliance, and payment-account assistance services.',
      'The information required for a particular request depends on the selected service, the relevant authority or provider, and the stage of the engagement.',
    ],
  },
  {
    id: 'information-collected',
    title: 'Information we may collect',
    paragraphs: ['We may collect information that you provide directly, information generated through service communications, and limited technical information associated with website use.'],
    bullets: [
      'Contact details such as name, email address, telephone number, and mailing address',
      'Business details such as proposed or existing company name, state, ownership, and activities',
      'Identity, tax, or supporting documents when relevant to an agreed service request',
      'Inquiry details, messages, status communications, and records of instructions',
      'Transaction references or payment status where a paid service applies',
      'Technical information such as browser, device, IP address, and website interaction data where collected',
    ],
  },
  {
    id: 'use-of-information',
    title: 'How information may be used',
    paragraphs: ['We use information for legitimate operational purposes connected with the website, your inquiry, and any service you ask us to coordinate.'],
    bullets: [
      'Review and respond to inquiries',
      'Assess the requested service and prepare relevant checklists',
      'Coordinate applications, filings, or provider setup within the agreed scope',
      'Communicate status, follow-up questions, and administrative notices',
      'Process authorized payments and maintain business records',
      'Protect the website, prevent misuse, and comply with applicable obligations',
    ],
  },
  {
    id: 'disclosures',
    title: 'When information may be disclosed',
    paragraphs: [
      'Information may be shared only as reasonably necessary to operate the website, deliver an authorized service, comply with applicable requirements, protect legitimate interests, or complete an action you request.',
      'Recipients may include contracted service providers, professional advisers, government authorities, state filing offices, tax authorities, payment or identity-verification providers, and other parties involved in the selected service. Each recipient may have its own privacy terms and legal responsibilities.',
    ],
    note: 'We do not control the independent privacy practices or approval decisions of government authorities and third-party platforms.',
  },
  {
    id: 'security-retention',
    title: 'Security and retention',
    paragraphs: [
      'We aim to use administrative, organizational, and technical safeguards appropriate to the nature of information and our operations. Access should be limited to people and providers who need the information for an authorized purpose.',
      'Information is retained for as long as reasonably necessary for the service, recordkeeping, dispute management, fraud prevention, or applicable obligations, and then deleted or otherwise handled according to operational requirements. No storage or transmission method can be guaranteed to be completely secure.',
    ],
  },
  {
    id: 'cookies-technology',
    title: 'Cookies and website technology',
    paragraphs: [
      'The website may use essential storage, cookies, logs, or similar technology needed for security, functionality, performance, and preference management. If analytics or marketing technologies are introduced, their use and available choices should be reflected in the website consent and settings experience.',
    ],
  },
  {
    id: 'choices-rights',
    title: 'Your choices and privacy requests',
    paragraphs: [
      'Depending on the law that applies, you may be able to request access, correction, deletion, restriction, or a copy of certain personal information, or object to particular processing. Some information may need to be retained where permitted or required for legal, security, transaction, or recordkeeping reasons.',
      'To make a request, contact us using the published email address and provide enough detail for us to identify the relevant records and verify the request. We will respond in accordance with applicable requirements.',
    ],
  },
  {
    id: 'international-processing',
    title: 'International processing',
    paragraphs: [
      'Because our services may involve international founders, U.S. authorities, and service providers in different locations, information may be processed outside the country where it was originally provided. Privacy and data-protection rules can differ between jurisdictions.',
    ],
  },
  {
    id: 'updates-contact',
    title: 'Policy updates and contact',
    paragraphs: [
      'We may update this policy as the website, service workflow, technology, or applicable requirements change. The revised date displayed on this page identifies the current published version.',
      'For a privacy question or request, email info@llclimitedliabilitycompany.com. Please do not include unnecessary passwords, full payment-card details, or unrelated sensitive information in an initial email.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Privacy Policy', url: 'https://llclimitedliabilitycompany.com/privacy-policy' },
  ]);

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PolicyPage variant="privacy" eyebrow="Privacy and information handling" title="Privacy Policy" description="A clear overview of the information our website and service process may use, the reasons it may be needed, and the choices available to you." updated="8 August 2026" sections={sections} closingTitle="Contact us about your information." closingText="Send a privacy question or request from the email address connected with your inquiry so that we can identify the relevant records." /></>;
}
