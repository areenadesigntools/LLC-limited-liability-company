import type { Metadata } from 'next';
import { Section, Container, SectionHeading } from '@/components/ui';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Terms & Conditions - LLC Limited Liability Company',
  description: 'Terms and conditions for using services provided by LLC Limited Liability Company.',
  canonical: 'https://llclimitedliabilitycompany.com/terms-and-conditions',
});

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Terms & Conditions', url: 'https://llclimitedliabilitycompany.com/terms-and-conditions' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20">
        <Container size="md">
          <SectionHeading title="Terms & Conditions" centered />

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using this website and our services, you accept and agree to be bound by and comply with these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6">
              The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">4. Limitations of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall LLC Limited Liability Company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">6. Modifications</h2>
            <p className="text-gray-600 mb-6">
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">7. Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions are governed by and construed in accordance with the laws of the United States.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
