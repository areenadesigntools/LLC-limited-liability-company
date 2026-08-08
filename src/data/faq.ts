import type { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    id: 'is-llc-registration-free',
    question: 'What does “Free LLC Registration” mean?',
    answer: 'Our basic LLC registration assistance does not include a separate service charge. The client remains responsible for the applicable state filing fee and for any optional, government, registered-agent, or third-party charges selected for the request. We confirm the scope before submission.',
    category: 'Getting Started',
  },
  {
    id: 'what-to-pay',
    question: 'Which costs may still apply?',
    answer: 'Costs depend on the state, service, and third parties involved. They may include state filing fees, registered-agent charges, document certification or mailing costs, professional tax-service fees, and provider charges. Government and third-party fees are separate from our free basic registration assistance.',
    category: 'Getting Started',
  },
  {
    id: 'what-is-state-filing-fee',
    question: 'What is a state filing fee?',
    answer: 'A state filing fee is charged by the relevant state authority to process a business-formation filing. The amount, payment method, processing options, and refund rules vary by state and can change. We confirm the applicable authority and fee during the service review rather than relying on a fixed website estimate.',
    category: 'Getting Started',
  },
  {
    id: 'how-long-does-it-take',
    question: 'How long does a service request take?',
    answer: 'Timing depends on the selected service, document readiness, state or federal authority, filing method, seasonal volume, and any follow-up request. We can communicate the known status of work within our scope, but government and third-party processing times are outside our control.',
    category: 'Getting Started',
  },
  {
    id: 'what-documents-needed',
    question: 'What information should I prepare?',
    answer: 'Requirements vary by service. A formation request commonly starts with proposed business details, member or responsible-party information, contact details, and identity or address documents where required. Tax and payment-account requests may need additional records. We provide a service-specific checklist after reviewing the request.',
    category: 'Getting Started',
  },
  {
    id: 'non-us-resident-llc',
    question: 'Can a non-U.S. resident own a U.S. LLC?',
    answer: 'Non-U.S. persons can generally own U.S. LLC interests, but the formation, registered-agent, tax, banking, licensing, and reporting requirements depend on the state, ownership, activities, and individual circumstances. We help organize the formation process and recommend qualified legal or tax advice for situation-specific decisions.',
    category: 'Business Formation',
  },
  {
    id: 'do-i-need-registered-agent',
    question: 'Why does an LLC need a registered agent?',
    answer: 'An LLC must maintain a registered agent that meets the rules of its formation state and can receive official notices at an eligible in-state address. The precise requirements vary by state. A founder may qualify personally in some circumstances, or may choose an eligible professional service.',
    category: 'Business Formation',
  },
  {
    id: 'after-llc-formation',
    question: 'What may need attention after formation?',
    answer: 'Possible next steps include reviewing formation evidence, preparing internal company records, obtaining a tax identifier where required, considering licenses and registrations, opening suitable financial accounts, and planning ongoing federal and state filings. The correct steps depend on the company and its activities.',
    category: 'Business Formation',
  },
  {
    id: 'do-i-need-ein',
    question: 'What is an EIN, and when might it be needed?',
    answer: 'An Employer Identification Number is a federal tax identification number issued by the IRS for businesses and other entities. Whether and when an entity needs one depends on its structure and activities. We can help organize the relevant information and application pathway; issuance is controlled by the IRS.',
    category: 'Tax Identifiers',
  },
  {
    id: 'what-is-itin',
    question: 'What is an ITIN?',
    answer: 'An Individual Taxpayer Identification Number is issued by the IRS for federal tax purposes to an individual who needs a U.S. taxpayer identification number but is not eligible for a Social Security number. It does not provide immigration status, work authorization, or identification outside the federal tax system.',
    category: 'Tax Identifiers',
  },
  {
    id: 'what-is-reseller-certificate',
    question: 'What is a reseller certificate?',
    answer: 'The term commonly refers to state documentation used in connection with purchases for resale or sales-tax administration. Names, eligibility, registrations, and permitted use vary by state. We first identify the relevant state and business activity before describing the appropriate application pathway.',
    category: 'Tax & Compliance',
  },
  {
    id: 'tax-filing-non-resident',
    question: 'Does a non-U.S. owner have U.S. filing obligations?',
    answer: 'Possible federal, state, informational, and individual filing obligations depend on the entity classification, ownership, elections, transactions, income, activities, and tax residency. Formation alone is not enough to determine the answer. A qualified tax professional should review the specific facts.',
    category: 'Tax & Compliance',
  },
  {
    id: 'payment-account-approval',
    question: 'Is approval for PayPal, Stripe, Wise, or Payoneer guaranteed?',
    answer: 'No. Each provider independently controls availability, identity and business verification, account approval, features, reserves, limits, and ongoing account decisions. Our assistance is limited to preparation and setup coordination and cannot guarantee a provider outcome.',
    category: 'Payment Accounts',
  },
  {
    id: 'security-information',
    question: 'How should sensitive information be shared?',
    answer: 'Only provide information requested for the relevant service and use the communication or document channel identified by our team. No online method can be described as risk-free. If a request appears unusual or asks for unrelated credentials, confirm it with us using the contact details published on this website before responding.',
    category: 'Working With Us',
  },
  {
    id: 'international-support',
    question: 'Can your team coordinate with international founders?',
    answer: 'Our workflow supports remote communication with founders in different countries and time zones. Service availability can still depend on sanctions, local laws, U.S. requirements, provider eligibility, document availability, and the nature of the request. We confirm feasibility after an initial review.',
    category: 'Working With Us',
  },
];
