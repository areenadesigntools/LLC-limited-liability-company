import type { Metadata } from 'next';
import { ServiceOverviewPage } from '@/components/services/ServiceOverviewPage';
import { paymentProviders } from '@/data';
import { generateBreadcrumbSchema, generateMetadata as generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Payment Account Setup Assistance - LLC Limited Liability Company',
  description: 'Application-readiness and documentation guidance for PayPal, Stripe, Wise, and Payoneer business account setup and verification.',
  canonical: 'https://llclimitedliabilitycompany.com/payment-accounts',
});

export default function PaymentAccountsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Payment Accounts', url: 'https://llclimitedliabilitycompany.com/payment-accounts' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceOverviewPage
        variant="payment"
        eyebrow="Payment account readiness"
        title="Prepare stronger, more consistent payment account applications."
        description="Organize the company, owner, bank, website, tax, and verification information commonly requested by global payment providers."
        noticeTitle="Independent provider decision"
        notice="Account availability, country eligibility, verification, limits, reserves, ongoing reviews, and approval are controlled solely by the provider. Our documentation and setup assistance does not guarantee approval or continued account access."
        directoryTitle="Select the payment platform you want to prepare for"
        directoryDescription="Review the common requirements and verification flow for each provider before beginning an application."
        items={paymentProviders.map((provider) => ({
          title: provider.name,
          description: provider.description,
          href: provider.href,
          metaLabel: 'How we assist',
          meta: provider.setupAssistance,
          listLabel: 'Common verification areas',
          list: provider.verificationSteps,
        }))}
        process={[
          { title: 'Assess readiness', description: 'Review the company, target market, business model, website, and available documents.' },
          { title: 'Align information', description: 'Keep entity, owner, address, banking, tax, and website information consistent.' },
          { title: 'Complete the application', description: 'Follow the provider’s registration and verification flow with an organized checklist.' },
          { title: 'Respond to review', description: 'Prepare accurate follow-up information if the provider requests further verification.' },
        ]}
      />
    </>
  );
}
