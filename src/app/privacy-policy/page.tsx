import type { Metadata } from 'next';
import { Section, Container, SectionHeading } from '@/components/ui';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Privacy Policy - LLC Limited Liability Company',
  description: 'Privacy policy for LLC Limited Liability Company describing how we handle your personal data.',
  canonical: 'https://llclimitedliabilitycompany.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Privacy Policy', url: 'https://llclimitedliabilitycompany.com/privacy-policy' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20">
        <Container size="md">
          <SectionHeading title="Privacy Policy" centered />

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              LLC Limited Liability Company (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information from you in the following ways:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Personal information provided through application forms (name, email, phone, address)</li>
              <li>Business information (business name, type, structure)</li>
              <li>Financial information for payment processing</li>
              <li>Information about your business and compliance needs</li>
              <li>Communication records between us and you</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Process and fulfill your service requests</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send administrative and marketing communications</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and website</li>
              <li>Process payments and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              We may share your information with third-party service providers (payment processors, email services, government agencies) as necessary to provide our services. We require these providers to maintain the confidentiality of your information.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, update, or delete your personal information by contacting us. We will respond to your request within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600">
              For privacy concerns, contact us at info@llclimitedliabilitycompany.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
