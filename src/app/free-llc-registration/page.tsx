import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, Container, SectionHeading, Grid } from '@/components/ui';
import { usStates } from '@/data';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { CheckCircle, DollarSign, Clock, FileText } from 'lucide-react';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Free LLC Registration - LLC Limited Liability Company',
  description: 'Start your FREE LLC registration with us. No service fees - you only pay state government fees. Complete guidance for non-U.S. residents.',
  keywords: ['free LLC registration', 'LLC formation', 'business registration', 'state fees'],
  canonical: 'https://llclimitedliabilitycompany.com/free-llc-registration',
});

export default function FreeLLCRegistrationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Free LLC Registration', url: 'https://llclimitedliabilitycompany.com/free-llc-registration' },
  ]);

  const benefits = [
    { icon: DollarSign, title: 'Free Service', description: 'No hidden charges for our LLC registration guidance' },
    { icon: CheckCircle, title: 'Expert Support', description: 'Professional guidance throughout the process' },
    { icon: Clock, title: 'Fast Processing', description: 'Quick turnaround times' },
    { icon: FileText, title: 'Complete Documents', description: 'All necessary paperwork prepared' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark to-blue-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free LLC Registration</h1>
            <p className="text-xl text-blue-100 mb-6">
              Start your U.S. business with free LLC registration assistance. You only pay the state government filing fee.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4">
              <p className="text-white">
                <strong>Important:</strong> Our basic LLC registration assistance is completely FREE. State government fees vary by location and are not included in our free service.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-20 pb-16">
        <Container>
          <SectionHeading title="Why Free LLC Registration?" centered />
          <Grid cols={4} gap="md" className="mb-16">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <Icon className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="font-bold text-primary-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section className="pb-16 bg-gray-50">
        <Container>
          <SectionHeading title="State Filing Fees" subtitle="Transparent breakdown of government charges" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {usStates.slice(0, 12).map((state) => (
              <div key={state.code} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
                <h3 className="font-bold text-primary-dark mb-2">{state.name}</h3>
                <p className="text-2xl font-bold text-primary-blue mb-2">${state.fee.fee}</p>
                <p className="text-sm text-gray-600">Processing: {state.fee.processingTime}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Note: These are government filing fees only. Our service assistance is FREE.
          </p>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <SectionHeading title="What's Included in Free LLC Registration" centered />
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Business Registration Guidance</h3>
                <p className="text-gray-600 text-sm">Professional advice on LLC formation and requirements</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Documentation Preparation</h3>
                <p className="text-gray-600 text-sm">Help preparing required forms and documents</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary-dark mb-1">State Selection Support</h3>
                <p className="text-gray-600 text-sm">Guidance on choosing the best state for your business</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Follow-up Support</h3>
                <p className="text-gray-600 text-sm">Ongoing assistance after your LLC is formed</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-16 bg-blue-50">
        <Container>
          <SectionHeading title="Who Can Register?" centered />
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-700 text-center mb-6">
              You can form an LLC as a non-U.S. resident. Here&apos;s what you need:
            </p>
            <div className="grid gap-4">
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary-blue">
                <h3 className="font-bold text-primary-dark mb-1">Personal Identification</h3>
                <p className="text-gray-600 text-sm">Valid passport or government-issued ID</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary-blue">
                <h3 className="font-bold text-primary-dark mb-1">Business Name</h3>
                <p className="text-gray-600 text-sm">Desired LLC name (we check availability)</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary-blue">
                <h3 className="font-bold text-primary-dark mb-1">LLC Address</h3>
                <p className="text-gray-600 text-sm">Can use a registered agent address</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary-blue">
                <h3 className="font-bold text-primary-dark mb-1">Business Information</h3>
                <p className="text-gray-600 text-sm">Purpose and activities of your LLC</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <div className="bg-gradient-to-r from-primary-blue to-blue-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Free LLC Registration?</h2>
            <p className="mb-6 text-blue-100">
              Reach out to our team today and let&apos;s get your business started.
            </p>
            <Link href="/contact-us" className="inline-block px-8 py-3 bg-white text-primary-blue font-bold rounded-lg hover:bg-gray-100 transition">
              Start Your LLC Registration
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
