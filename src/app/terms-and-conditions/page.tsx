import type { Metadata } from 'next';
import { PolicyPage, type PolicySection } from '@/components/legal/PolicyPage';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Terms & Conditions - LLC Limited Liability Company',
  description: 'Terms governing use of the LLC Limited Liability Company website and the general framework for service inquiries and support.',
  canonical: 'https://llclimitedliabilitycompany.com/terms-and-conditions',
});

const sections: PolicySection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance and scope',
    paragraphs: [
      'These Terms and Conditions apply to use of this website and to general communications with LLC Limited Liability Company. By using the website, you agree to these terms to the extent permitted by applicable law.',
      'A quotation, order summary, engagement letter, invoice, or other written service confirmation may contain additional or more specific terms. If a conflict exists, the specific written terms for that service control to the extent stated in them.',
    ],
  },
  {
    id: 'service-role',
    title: 'Our service role',
    paragraphs: [
      'We provide administrative support, information collection, document coordination, application or filing assistance, and service-related communication within the confirmed scope of a request.',
      'Website content and general communications are informational. Unless expressly stated in a written engagement with an appropriately qualified professional, our services do not create an attorney-client relationship and do not replace legal, tax, accounting, immigration, investment, or financial advice.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client responsibilities',
    paragraphs: ['You are responsible for reviewing the scope, providing accurate and complete information, responding to reasonable follow-up requests, and obtaining professional advice where needed.'],
    bullets: [
      'Confirm names, addresses, ownership details, dates, and filing selections before authorization',
      'Provide documents that are authentic, current, and legally permitted to be used',
      'Maintain access to the email address and telephone number used for the request',
      'Review completed documents and report suspected errors promptly',
      'Meet obligations and deadlines outside the expressly agreed service scope',
      'Use accounts, registrations, and certificates only for lawful and authorized purposes',
    ],
  },
  {
    id: 'fees-payments',
    title: 'Fees, payments, and expenses',
    paragraphs: [
      'Our basic LLC registration assistance may be offered without a separate service charge. Government filing fees, registered-agent charges, taxes, professional-service fees, courier or certification costs, and third-party charges remain separate unless a written quote expressly includes them.',
      'Prices and third-party charges can change. Payment authorization, currency conversion, processor rules, and transaction timing may be governed by the relevant payment provider.',
    ],
  },
  {
    id: 'third-party-decisions',
    title: 'Government and third-party decisions',
    paragraphs: [
      'Government authorities, tax agencies, financial platforms, registered-agent providers, and other third parties independently control their requirements, review, timing, availability, approvals, rejections, account limits, and ongoing decisions.',
      'We do not guarantee that an application, filing, refund, tax position, payment account, or other third-party outcome will be accepted or completed within a particular period.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable website and service use',
    paragraphs: ['You may use the website and our communications only for lawful purposes and in a manner that does not interfere with the rights, security, or operations of another person or organization.'],
    bullets: [
      'Do not submit false, misleading, stolen, or unauthorized information',
      'Do not attempt to bypass security or gain unauthorized access',
      'Do not use the service to facilitate fraud, evasion, or prohibited activity',
      'Do not copy, scrape, republish, or exploit website material in violation of applicable rights',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Website content and intellectual property',
    paragraphs: [
      'The website design, original text, graphics, branding, and other materials are owned by or licensed to us unless another owner is identified. Limited personal use of the website does not transfer ownership or grant a right to commercially reproduce or distribute those materials.',
      'Third-party names, logos, forms, and platform references remain the property of their respective owners and do not imply endorsement or partnership.',
    ],
  },
  {
    id: 'disclaimers-liability',
    title: 'Disclaimers and limitations',
    paragraphs: [
      'The website is provided on an “as available” basis. We aim to keep information useful and current, but do not promise that every page will be complete, error-free, continuously available, or suitable for a particular decision.',
      'To the extent permitted by applicable law and any specific written engagement, responsibility for indirect, consequential, or provider-controlled losses may be limited. Nothing in these terms excludes a right or responsibility that cannot lawfully be excluded.',
    ],
  },
  {
    id: 'changes-termination-law',
    title: 'Changes, suspension, and applicable terms',
    paragraphs: [
      'We may update the website or these terms, and may suspend access or decline a request where information is incomplete, payment is outstanding, the proposed use is unlawful or high-risk, or continuing would conflict with an obligation or provider requirement.',
      'The law and dispute terms that apply may depend on the parties, location, service, and any written engagement. A generic reference to “U.S. law” does not identify a single governing jurisdiction. Any controlling jurisdiction should be stated in the applicable service agreement after legal review.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: ['Questions about these terms can be sent to info@llclimitedliabilitycompany.com. Include the service name and any relevant reference number, but do not send passwords or unnecessary sensitive credentials.'],
  },
];

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Terms & Conditions', url: 'https://llclimitedliabilitycompany.com/terms-and-conditions' },
  ]);

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PolicyPage variant="terms" eyebrow="Website and service framework" title="Terms & Conditions" description="The general terms for using this website, submitting an inquiry, and understanding the boundaries of our administrative support." updated="8 August 2026" sections={sections} closingTitle="Need clarification before you begin?" closingText="Ask us to explain the proposed service scope, listed charges, and information requirements before you authorize work." /></>;
}
