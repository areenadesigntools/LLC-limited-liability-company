import type { Metadata } from 'next';
import {
  HeroSection,
  FeaturedServicesSection,
  WhyChooseUsSection,
  FreeLLCPromotionalSection,
  TaxServicesPreviewSection,
  HowItWorksSection,
  PaymentAccountsSection,
  FAQPreviewSection,
  ConsultationCTASection,
} from '@/components/home/Sections';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'LLC Limited Liability Company - Free LLC Registration & Business Formation',
  description: 'Start your U.S. business with free LLC registration. Professional business formation, EIN application, tax filing, and compliance services for entrepreneurs worldwide.',
  keywords: [
    'free LLC registration',
    'LLC formation',
    'U.S. business formation',
    'EIN application',
    'ITIN application',
    'registered agent',
    'tax services',
    'business incorporation',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <HeroSection />
      <FeaturedServicesSection />
      <WhyChooseUsSection />
      <FreeLLCPromotionalSection />
      <TaxServicesPreviewSection />
      <HowItWorksSection />
      <PaymentAccountsSection />
      <FAQPreviewSection />
      <ConsultationCTASection />
    </>
  );
}
