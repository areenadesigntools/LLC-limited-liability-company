import type { Metadata } from 'next';
import { ContactFormComponent } from '@/components/forms/ContactForm';
import { Section, Container, SectionHeading } from '@/components/ui';
import { contactInfo } from '@/data';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Us - LLC Limited Liability Company',
  description: 'Get in touch with our team for business formation and tax services. Call, email, or use our contact form for a free consultation.',
  canonical: 'https://llclimitedliabilitycompany.com/contact-us',
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Contact Us', url: 'https://llclimitedliabilitycompany.com/contact-us' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <SectionHeading
            title="Contact Us"
            subtitle="We're here to help you start and grow your U.S. business"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-blue mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-primary-blue transition">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-blue mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary-blue transition">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-blue mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-blue mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Saturday</p>
                <p className="text-gray-600 text-sm">10:00 am - 7:00 pm (UTC+5)</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">Send us a Message</h2>
            <ContactFormComponent />
          </div>
        </Container>
      </Section>
    </>
  );
}
