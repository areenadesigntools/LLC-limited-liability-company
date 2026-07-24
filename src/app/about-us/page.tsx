import type { Metadata } from 'next';
import { Section, Container, SectionHeading, Grid } from '@/components/ui';
import { companyInfo, contactInfo } from '@/data';
import { Users, Zap, Globe, Shield } from 'lucide-react';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Us - LLC Limited Liability Company',
  description: 'Learn about LLC Limited Liability Company - our mission, values, and commitment to helping entrepreneurs worldwide establish U.S. businesses.',
  canonical: 'https://llclimitedliabilitycompany.com/about-us',
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'About Us', url: 'https://llclimitedliabilitycompany.com/about-us' },
  ]);

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all business dealings',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We serve entrepreneurs worldwide with culturally sensitive support',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our success - we are committed to your growth',
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20">
        <Container>
          <SectionHeading title="About LLC Limited Liability Company" centered />

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are dedicated to making U.S. business formation and compliance services accessible to entrepreneurs around the world. Our team brings expertise in business formation, tax compliance, and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>

          <SectionHeading title="Our Values" centered className="mb-12" />

          <Grid cols={4} gap="md" className="mb-16">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <Icon className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </Grid>

          <div className="bg-blue-50 border-l-4 border-primary-blue p-8 rounded mb-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary-dark mb-4">What We Offer</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">✓</span>
                <span><strong>Free LLC Registration Assistance:</strong> No hidden charges for basic LLC formation guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">✓</span>
                <span><strong>Comprehensive Tax Services:</strong> From Form 1065 to 1040-NR filing support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">✓</span>
                <span><strong>Payment Account Guidance:</strong> PayPal, Stripe, Wise, and Payoneer setup assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">✓</span>
                <span><strong>Global Support:</strong> Available to clients in any country</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">✓</span>
                <span><strong>Transparent Communication:</strong> Clear fees, no surprises</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Ready to start your U.S. business journey? Contact us today!
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> {contactInfo.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {contactInfo.phone}
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> {contactInfo.address}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
