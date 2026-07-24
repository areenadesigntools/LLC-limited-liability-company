import type { Metadata } from 'next';
import { Section, Container, SectionHeading, Grid, Card, CardContent } from '@/components/ui';
import { taxServices } from '@/data';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { FileText, Users, Zap } from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Tax Services - LLC Limited Liability Company',
  description: 'Professional tax filing services including Form 1065, Form 1120, 1040-NR, and Form 5472 filing support.',
  canonical: 'https://llclimitedliabilitycompany.com/tax-services',
});

export default function TaxServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Tax Services', url: 'https://llclimitedliabilitycompany.com/tax-services' },
  ]);

  const disclaimer = 'Information on this website is provided for general informational purposes and does not replace advice from a qualified tax professional.';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark to-blue-900 text-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Tax and Compliance Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Professional tax filing and compliance assistance for U.S. businesses and individuals.
          </p>
        </Container>
      </Section>

      <Section className="pt-20 pb-16">
        <Container>
          <div className="bg-blue-50 border-l-4 border-primary-blue p-6 rounded-lg mb-12">
            <p className="text-gray-700">
              <strong>Disclaimer:</strong> {disclaimer}
            </p>
          </div>

          <SectionHeading title="Our Tax Services" centered />

          <Grid cols={3} gap="md">
            {taxServices.map((service, index) => (
              <Card key={service.id} className="hover:shadow-lg transition h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                    <FileText className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-3">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">TYPICAL USERS:</p>
                    <p className="text-sm text-gray-600">{service.typicalUsers}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">REQUIRED INFO:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.requiredInfo.slice(0, 2).map((info, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-blue mt-1">•</span>
                          <span>{info}</span>
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

      <Section className="pb-16 bg-gray-50">
        <Container>
          <SectionHeading title="Why Choose Our Tax Services" centered />
          <Grid cols={3} gap="md">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="font-bold text-primary-dark mb-2">Expert Professionals</h3>
              <p className="text-gray-600 text-sm">Experienced tax specialists ready to assist</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="font-bold text-primary-dark mb-2">Accurate Filing</h3>
              <p className="text-gray-600 text-sm">Precision and accuracy in all tax documents</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="font-bold text-primary-dark mb-2">Fast Service</h3>
              <p className="text-gray-600 text-sm">Quick turnaround on tax filings</p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Need Tax Assistance?</h2>
            <p className="text-gray-700 mb-6">
              Contact us today for a free consultation on your tax needs.
            </p>
            <a href="/contact-us" className="inline-block px-8 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Get Tax Consultation
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
