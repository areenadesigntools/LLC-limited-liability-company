import type { Metadata } from 'next';
import { Section, Container, SectionHeading } from '@/components/ui';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Refund Policy - LLC Limited Liability Company',
  description: 'Refund policy for LLC Limited Liability Company services and payments.',
  canonical: 'https://llclimitedliabilitycompany.com/refund-policy',
});

export default function RefundPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Refund Policy', url: 'https://llclimitedliabilitycompany.com/refund-policy' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20">
        <Container size="md">
          <SectionHeading title="Refund Policy" centered />

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">1. Refund Eligibility</h2>
            <p className="text-gray-600 mb-6">
              Refund eligibility depends on the type of service rendered:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Government Filing Fees:</strong> Non-refundable once submitted to government agencies</li>
              <li><strong>Our Service Fees:</strong> Subject to our refund policy under specific conditions</li>
              <li><strong>Payment Provider Fees:</strong> Determined by the payment provider's policies</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">2. LLC Registration Service Refunds</h2>
            <p className="text-gray-600 mb-6">
              Since our LLC registration assistance is free, there is no service fee to refund. However, government state filing fees are non-refundable once submitted to the state authorities.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">3. Premium Service Refunds</h2>
            <p className="text-gray-600 mb-6">
              For premium services with associated fees, refunds may be available if:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>The service has not yet been initiated</li>
              <li>The refund is requested within 7 days of payment</li>
              <li>No work has been completed on your behalf</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">4. Non-Refundable Charges</h2>
            <p className="text-gray-600 mb-6">
              The following charges are non-refundable:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>State government filing fees</li>
              <li>Federal EIN application fees</li>
              <li>ITIN application fees</li>
              <li>Services already provided</li>
              <li>Third-party service provider fees</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">5. Refund Process</h2>
            <p className="text-gray-600 mb-6">
              To request a refund, contact us at info@llclimitedliabilitycompany.com with your transaction details. Approved refunds will be processed within 7-10 business days to your original payment method.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">6. Third-Party Service Refunds</h2>
            <p className="text-gray-600 mb-6">
              For payment account setup services, refund policies are determined by the respective payment providers (PayPal, Stripe, Wise, Payoneer). We recommend reviewing their individual refund policies.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
