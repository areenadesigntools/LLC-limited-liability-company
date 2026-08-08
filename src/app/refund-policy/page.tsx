import type { Metadata } from 'next';
import { PolicyPage, type PolicySection } from '@/components/legal/PolicyPage';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Refund Policy - LLC Limited Liability Company',
  description: 'Understand how refund requests are assessed for service fees, government filing fees, and third-party charges.',
  canonical: 'https://llclimitedliabilitycompany.com/refund-policy',
});

const sections: PolicySection[] = [
  {
    id: 'scope',
    title: 'Policy scope',
    paragraphs: [
      'This policy explains the general approach to cancellation and refund requests involving services coordinated by LLC Limited Liability Company. Eligibility depends on the item paid, the written service terms, work already performed, commitments made to third parties, and applicable law.',
    ],
  },
  {
    id: 'free-assistance',
    title: 'Free LLC registration assistance',
    paragraphs: [
      'Where basic LLC registration assistance is provided without a service charge, there is no service fee from us to refund. The client remains responsible for separate government, state, registered-agent, payment-processor, or optional service charges.',
    ],
  },
  {
    id: 'government-third-party',
    title: 'Government and third-party charges',
    paragraphs: [
      'Fees paid or committed to government authorities, state filing offices, registered-agent providers, couriers, certification services, tax authorities, payment platforms, or other third parties are governed by the recipient’s rules.',
      'Once a filing, order, verification, or payment has been transmitted or the third party has started work, the related charge may be non-refundable or only refundable by that third party. We cannot promise that an authority or provider will approve a refund.',
    ],
    note: 'Before authorizing submission, review which charges are paid to us and which are paid or passed through to another organization.',
  },
  {
    id: 'paid-service-review',
    title: 'Paid service refund assessment',
    paragraphs: [
      'A request involving our paid service fee will be assessed against the written scope and the status of work. Relevant factors may include whether intake or document review began, forms or work product were prepared, professional or third-party resources were reserved, a submission was made, or a deliverable was provided.',
      'If a paid service has not begun and no non-recoverable cost has been incurred, cancellation may be eligible for a full or partial refund subject to the applicable order terms. If work is partly complete, any approved amount may reflect the completed work and committed costs.',
    ],
  },
  {
    id: 'normally-not-refundable',
    title: 'Items normally not refundable',
    paragraphs: ['Subject to applicable law and the specific written service terms, the following are normally not refundable after the relevant action or cost occurs:'],
    bullets: [
      'Government and state filing fees after authorization or submission',
      'Third-party, registered-agent, certification, courier, or provider charges already incurred',
      'Completed document review, preparation, consultation, or filing work',
      'Fees associated with inaccurate, incomplete, delayed, or unauthorized client information',
      'Charges for an outcome denied or delayed by an independent authority or provider',
      'Currency-conversion, banking, or payment-processor charges outside our control',
    ],
  },
  {
    id: 'request-process',
    title: 'How to request review',
    paragraphs: [
      'Send the request to info@llclimitedliabilitycompany.com from the email address used for the service. Include the client name, service, payment date, transaction or order reference, reason for the request, and any supporting information.',
      'We may ask for additional details to verify the request and determine the status of work and external payments. Submitting a request does not itself confirm eligibility or an approved amount.',
    ],
  },
  {
    id: 'approved-refunds',
    title: 'Approved refunds',
    paragraphs: [
      'If a refund is approved, we will communicate the amount and intended payment route. Processing time depends on the original payment method, banks, card networks, currency conversion, compliance checks, and other providers. We do not promise a fixed posting date controlled by those systems.',
    ],
  },
  {
    id: 'provider-disputes',
    title: 'Provider issues and payment disputes',
    paragraphs: [
      'A refund request concerning a PayPal, Stripe, Wise, Payoneer, government, or other independent platform may need to be made directly under that provider’s process. Our setup assistance does not make us responsible for a provider’s account restriction, rejection, reserve, fee, or refund decision.',
      'Contact us before initiating a payment dispute so that we can review the transaction and service record. This does not limit any right that cannot legally be limited.',
    ],
  },
  {
    id: 'updates-contact',
    title: 'Updates and contact',
    paragraphs: [
      'This policy may be updated as services and payment methods change. The revised date identifies the current published version. Questions can be sent to info@llclimitedliabilitycompany.com before payment or submission.',
    ],
  },
];

export default function RefundPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Refund Policy', url: 'https://llclimitedliabilitycompany.com/refund-policy' },
  ]);

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><PolicyPage eyebrow="Payments and cancellations" title="Refund Policy" description="How service fees, completed work, government payments, and third-party charges are considered when a refund request is reviewed." updated="8 August 2026" sections={sections} closingTitle="Ask before authorizing a payment." closingText="We can identify which amount relates to our service and which charges will be paid or committed to an authority or third party." /></>;
}
