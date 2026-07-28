import type { Metadata } from 'next';
import { Section, Container, SectionHeading, Grid, Card, CardContent } from '@/components/ui';
import { paymentProviders } from '@/data';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Payment Accounts - LLC Limited Liability Company',
  description: 'Get expert guidance on setting up PayPal, Stripe, Wise, and Payoneer accounts for your business.',
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
      
      <Section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark to-blue-900 text-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Payment Account Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert guidance for setting up payment processing solutions for your business.
          </p>
        </Container>
      </Section>

      <Section className="pt-20 pb-16">
        <Container>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 font-semibold mb-1">Important Disclaimer</p>
                <p className="text-gray-700">
                  Account approval, availability, limits, verification, and service eligibility are determined solely by the respective payment provider. We assist with documentation and setup, but cannot guarantee approval.
                </p>
              </div>
            </div>
          </div>

          <SectionHeading title="Payment Solutions We Support" centered />

          <Grid cols={2} gap="lg">
            {paymentProviders.map((provider) => (
              <Card id={provider.id} key={provider.id} className="hover:shadow-lg transition h-full scroll-mt-28">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-blue-100 rounded-lg w-fit">
                    <CreditCard className="w-8 h-8 text-primary-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">{provider.name}</h3>
                  <p className="text-gray-600 mb-6">{provider.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary-dark mb-3">Setup Assistance</h4>
                    <p className="text-sm text-gray-600">{provider.setupAssistance}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary-dark mb-3">Verification Steps</h4>
                    <ul className="space-y-2">
                      {provider.verificationSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary-dark mb-3">Common Requirements</h4>
                    <ul className="space-y-2">
                      {provider.commonRequirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="pb-16 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-dark text-center mb-6">How We Can Help</h2>
            <Grid cols={2} gap="md">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary-dark mb-2">Documentation Preparation</h3>
                <p className="text-sm text-gray-600">We help prepare the documents needed for account applications</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary-dark mb-2">Application Guidance</h3>
                <p className="text-sm text-gray-600">Expert guidance through the account setup process</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary-dark mb-2">Information Verification</h3>
                <p className="text-sm text-gray-600">Ensuring all information is complete and accurate</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary-dark mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600">Assistance with any questions during the setup process</p>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <div className="bg-gradient-to-r from-primary-blue to-blue-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Set Up Your Payment Account?</h2>
            <p className="mb-6 text-blue-100">
              Our team can guide you through the setup process. Contact us for more information.
            </p>
            <a href="/contact-us" className="inline-block px-8 py-3 bg-white text-primary-blue font-bold rounded-lg hover:bg-gray-100 transition">
              Get Payment Account Assistance
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
