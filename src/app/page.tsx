import type { Metadata } from 'next';
import {
  BusinessFormation,
  FaqPreview,
  FinalCta,
  FreeLlcExplainer,
  GlobalSupport,
  Hero,
  LaunchJourney,
  LeadInquiry,
  PaymentAssistance,
  TaxCompliance,
  TrustIndicators,
  WhyChooseUs,
  WorkingProcess,
} from '@/components/home';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'U.S. LLC Formation, Tax & Compliance Support | LLC Limited Liability Company',
  description:
    'Launch and manage a U.S. business with LLC formation, EIN, tax, compliance, and payment-account setup assistance for entrepreneurs worldwide.',
  keywords: [
    'free LLC registration assistance',
    'LLC formation',
    'U.S. business formation',
    'EIN application',
    'ITIN application',
    'registered agent',
    'tax filing assistance',
    'business compliance',
  ],
  canonical: 'https://llclimitedliabilitycompany.com',
  twitterCard: 'summary_large_image',
});

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <TrustIndicators />
      <LaunchJourney />
      <BusinessFormation />
      <TaxCompliance />
      <PaymentAssistance />
      <WhyChooseUs />
      <WorkingProcess />
      <GlobalSupport />
      <FreeLlcExplainer />
      <LeadInquiry />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
