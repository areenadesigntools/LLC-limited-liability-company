export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface FormationServicePageContent {
  summaryLabel: string;
  summary: string;
  notice: string;
  heroPoints: string[];
  lists: Array<{ title: string; items: string[] }>;
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export const formationServicePageContent: Record<string, FormationServicePageContent> = {
  'free-llc-registration': {
    summaryLabel: 'A transparent formation starting point',
    summary:
      'Our basic LLC registration assistance has no service fee. You remain responsible for the government filing fee charged by the state you select and any optional third-party services you request.',
    notice:
      'Government fees, registered agent charges, expedited processing, licenses, tax registrations, and other optional services are separate. State acceptance and processing times are controlled by the relevant authority.',
    heroPoints: [
      'No service fee for basic registration assistance',
      'Government charges presented separately',
      'Remote support for international founders',
    ],
    lists: [
      {
        title: 'What the basic assistance covers',
        items: [
          'Initial formation information checklist',
          'Guidance on preparing the state filing details',
          'Coordination of the basic registration submission',
          'Clear next-step guidance after formation',
        ],
      },
      {
        title: 'Information commonly requested',
        items: [
          'Proposed LLC name and alternative name',
          'Member or owner information',
          'Business activity and contact details',
          'Selected state and registered agent arrangement',
        ],
      },
    ],
    process: [
      { title: 'Confirm the scope', description: 'We explain what is included and identify any separate government or optional costs.' },
      { title: 'Organize the details', description: 'You provide the proposed business name, ownership, activity, and contact information.' },
      { title: 'Prepare the filing', description: 'The formation information is reviewed and organized for the selected state filing.' },
      { title: 'Receive next steps', description: 'After the authority responds, we explain the formation outcome and practical follow-up items.' },
    ],
    faqs: [
      { question: 'Is the state filing fee included?', answer: 'No. The state filing fee is a government charge and is paid separately. The amount varies by state and may change.' },
      { question: 'Can a non-U.S. resident use this service?', answer: 'Yes. Non-U.S. founders can generally own a U.S. LLC, subject to the documentation, registered agent, tax, and compliance requirements that apply to their circumstances.' },
      { question: 'Does free registration include every follow-up service?', answer: 'No. EIN, ITIN, registered agent, licenses, tax filings, expedited processing, and other third-party or professional services may be separate.' },
    ],
  },
  'llc-formation': {
    summaryLabel: 'Who this service is designed for',
    summary:
      'Entrepreneurs who want a structured path for establishing a U.S. limited liability company, including international founders who need remote coordination and a clear document checklist.',
    notice:
      'Entity selection, tax treatment, licensing, and legal obligations depend on your facts and jurisdiction. Formation assistance does not replace advice from a licensed attorney, accountant, or tax professional.',
    heroPoints: ['State-specific formation checklist', 'Organized ownership information', 'Post-formation action plan'],
    lists: [
      {
        title: 'Formation support may include',
        items: [
          'Proposed name and state-filing information review',
          'Articles or certificate of formation coordination',
          'Registered agent requirement guidance',
          'Post-formation compliance checklist',
        ],
      },
      {
        title: 'Information to prepare',
        items: [
          'Owner or member names and contact details',
          'Business purpose and planned activities',
          'Preferred state and principal address information',
          'Management structure and authorized contact',
        ],
      },
    ],
    process: [
      { title: 'Discovery', description: 'We collect the business, ownership, residency, and state-selection context.' },
      { title: 'Information review', description: 'The proposed name, structure, addresses, and required filing details are checked for completeness.' },
      { title: 'Formation coordination', description: 'The state filing is prepared and coordinated using the confirmed information.' },
      { title: 'Launch checklist', description: 'You receive practical next steps for tax IDs, banking, records, and ongoing compliance.' },
    ],
    faqs: [
      { question: 'Which state should I choose?', answer: 'The appropriate state depends on where the business will operate, where owners are located, costs, taxes, and compliance obligations. We can organize the comparison, but legal or tax advice may be needed.' },
      { question: 'Do I need a U.S. partner?', answer: 'A U.S. partner is not generally required solely to own an LLC. Other address, registered agent, tax, banking, and verification requirements may still apply.' },
      { question: 'What comes after formation?', answer: 'Common next steps include maintaining company records, obtaining an EIN where appropriate, arranging banking or payments, reviewing licenses, and tracking annual state and tax obligations.' },
    ],
  },
  'ein-application': {
    summaryLabel: 'Purpose of an EIN',
    summary:
      'An Employer Identification Number is a federal tax identifier commonly used for business tax administration, hiring, banking, and certain account-verification processes.',
    notice:
      'The IRS determines eligibility, processing, and issuance. Requirements and timelines vary, particularly where the responsible party does not have a U.S. Social Security Number or ITIN.',
    heroPoints: ['Responsible-party information review', 'Application detail checklist', 'IRS-response follow-up guidance'],
    lists: [
      {
        title: 'Information commonly required',
        items: [
          'Legal entity name and formation date',
          'State of formation and business address',
          'Responsible party details',
          'Entity activity and expected employee information',
        ],
      },
      {
        title: 'Important considerations',
        items: [
          'Entity must be formed before most EIN applications',
          'The legal name must match formation records',
          'Submission method affects expected processing time',
          'IRS issuance cannot be guaranteed or accelerated by us',
        ],
      },
    ],
    process: [
      { title: 'Entity check', description: 'Formation details and the intended tax identifier use are confirmed.' },
      { title: 'Responsible party review', description: 'Identity and address details are organized to match the application requirements.' },
      { title: 'Application preparation', description: 'The EIN application information is prepared and reviewed before submission.' },
      { title: 'Response guidance', description: 'We explain the response received and the next practical use of the EIN confirmation.' },
    ],
    faqs: [
      { question: 'Is an EIN the same as an ITIN?', answer: 'No. An EIN identifies a business or entity for federal tax administration, while an ITIN is an individual taxpayer identification number for eligible individuals who cannot obtain an SSN.' },
      { question: 'Can a non-U.S. resident apply?', answer: 'A foreign responsible party may be able to apply without an SSN, but the application method and supporting information differ. The IRS makes the final determination.' },
      { question: 'How quickly is an EIN issued?', answer: 'Timing depends on the application method, applicant circumstances, document accuracy, and IRS workload. No specific processing time can be guaranteed.' },
    ],
  },
  'itin-application': {
    summaryLabel: 'Who may need an ITIN',
    summary:
      'An Individual Taxpayer Identification Number may be relevant for an eligible person who has a U.S. federal tax purpose but is not eligible for a Social Security Number.',
    notice:
      'ITIN eligibility requires a qualifying federal tax purpose and supporting identity documentation. The IRS decides eligibility and may request additional information.',
    heroPoints: ['Eligibility-purpose review', 'Identity document checklist', 'Application package coordination'],
    lists: [
      {
        title: 'Common application elements',
        items: [
          'Completed applicant identity information',
          'Qualifying U.S. federal tax purpose',
          'Acceptable original or certified identity documents',
          'Tax return or permitted exception documentation',
        ],
      },
      {
        title: 'Important considerations',
        items: [
          'An ITIN does not provide work authorization',
          'Document certification rules are specific',
          'Name and date details must be consistent',
          'IRS review and processing times may vary',
        ],
      },
    ],
    process: [
      { title: 'Purpose assessment', description: 'We identify the stated federal tax purpose and the application route that may apply.' },
      { title: 'Document checklist', description: 'Identity and supporting tax documents are organized against the relevant requirements.' },
      { title: 'Package review', description: 'Application details are checked for consistency before the package is submitted.' },
      { title: 'Follow-up guidance', description: 'We help interpret routine status requests or correspondence received during processing.' },
    ],
    faqs: [
      { question: 'Does an ITIN authorize employment?', answer: 'No. An ITIN is for federal tax administration and does not provide immigration status, work authorization, or eligibility for Social Security benefits.' },
      { question: 'Can I apply only to open a bank account?', answer: 'An ITIN application requires a qualifying federal tax purpose under IRS rules. A banking preference by itself may not establish eligibility.' },
      { question: 'Are copies of identity documents accepted?', answer: 'Document rules are strict. Depending on the document and route, originals or copies certified by the issuing agency may be required.' },
    ],
  },
  'registered-agent': {
    summaryLabel: 'Why a registered agent matters',
    summary:
      'A registered agent provides the in-state address designated to receive official legal and state correspondence for the company during required business hours.',
    notice:
      'Registered agent service does not replace a business operating address, virtual office, mail-forwarding plan, or legal representation unless explicitly stated in the service scope.',
    heroPoints: ['In-state statutory presence', 'Official notice handling', 'Compliance reminder support'],
    lists: [
      {
        title: 'Core service functions',
        items: [
          'Maintain the required registered office presence',
          'Receive official state and legal correspondence',
          'Notify the authorized company contact',
          'Support continuity when owners are outside the state',
        ],
      },
      {
        title: 'Company responsibilities',
        items: [
          'Keep contact information current',
          'Respond promptly to delivered notices',
          'Maintain state reports and tax obligations',
          'Update the state if the registered agent changes',
        ],
      },
    ],
    process: [
      { title: 'Entity confirmation', description: 'We confirm the company, state, status, and authorized contact information.' },
      { title: 'Service activation', description: 'The registered agent details are coordinated for formation or a formal agent change.' },
      { title: 'State record update', description: 'Required information is placed on the relevant state filing or change document.' },
      { title: 'Ongoing notices', description: 'Official correspondence received is routed to the designated company contact.' },
    ],
    faqs: [
      { question: 'Is a registered agent required?', answer: 'U.S. states generally require registered entities to maintain a registered agent and registered office in the state. Exact rules vary.' },
      { question: 'Can the owner be the registered agent?', answer: 'In many states an eligible individual or entity with a physical in-state address can serve, but privacy, availability, and continuity should be considered.' },
      { question: 'Does the address work for all business mail?', answer: 'Not automatically. Registered agent service is primarily for official notices. General mail, banking, customer returns, and virtual-office services may require separate arrangements.' },
    ],
  },
  'reseller-certificate': {
    summaryLabel: 'What this registration supports',
    summary:
      'Sales-tax registration or a resale certificate may allow an eligible business to purchase qualifying inventory for resale without paying sales tax to the supplier at the time of purchase.',
    notice:
      'Terminology, eligibility, renewals, filing obligations, and permitted use vary by state. A resale certificate does not exempt a business from collecting and remitting sales tax where required.',
    heroPoints: ['State-specific requirement review', 'Business activity checklist', 'Registration and certificate guidance'],
    lists: [
      {
        title: 'Information commonly required',
        items: [
          'Legal business name and entity details',
          'EIN or other applicable tax identifier',
          'Business location and owner information',
          'Products, suppliers, and sales-channel details',
        ],
      },
      {
        title: 'Compliance considerations',
        items: [
          'Sales-tax nexus and registration state',
          'Permitted use of resale documentation',
          'Return-filing frequency and due dates',
          'Record retention for exempt purchases',
        ],
      },
    ],
    process: [
      { title: 'Activity review', description: 'We identify the products, sales channels, suppliers, and states involved.' },
      { title: 'Requirement mapping', description: 'The applicable registration or certificate route is organized for the relevant state.' },
      { title: 'Application support', description: 'Business and tax information is prepared for the state application process.' },
      { title: 'Usage guidance', description: 'We explain routine certificate use, recordkeeping, and follow-up filing considerations.' },
    ],
    faqs: [
      { question: 'Is a resale certificate the same in every state?', answer: 'No. Names, registration steps, accepted forms, renewal rules, and filing obligations differ by state.' },
      { question: 'Does it remove all sales-tax obligations?', answer: 'No. It generally relates to qualifying purchases for resale. A seller may still need to collect, report, and remit sales tax on taxable sales.' },
      { question: 'Can service businesses apply?', answer: 'Eligibility depends on the products or taxable services involved and the state rules. The business activity should be reviewed before applying.' },
    ],
  },
};

export function getFormationServicePageContent(slug: string) {
  const content = formationServicePageContent[slug];

  if (!content) {
    throw new Error(`Formation service page content is missing for slug: ${slug}`);
  }

  return content;
}
