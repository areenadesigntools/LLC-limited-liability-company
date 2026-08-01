import type { Metadata } from 'next';
import Link from 'next/link';
import { faqItems } from '@/data';
import { Section, Container, SectionHeading } from '@/components/ui';
import { Card } from '@/components/ui';
import { generateMetadata as generateSeoMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'FAQ - LLC Limited Liability Company',
  description: 'Find answers to frequently asked questions about LLC registration, business formation, EIN, ITIN, tax services, and more.',
  canonical: 'https://llclimitedliabilitycompany.com/faq',
});

// Group FAQs by category
function groupFAQsByCategory(items: typeof faqItems) {
  const grouped: Record<string, typeof faqItems> = {};
  items.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqItems.map((item) => ({ question: item.question, answer: item.answer })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'FAQ', url: 'https://llclimitedliabilitycompany.com/faq' },
  ]);

  const groupedFAQs = groupFAQsByCategory(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Section className="pt-24 pb-20">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to your questions about our services"
            centered
          />

          {Object.entries(groupedFAQs).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-primary-dark mb-6 pb-3 border-b-2 border-primary-blue">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="p-6 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-blue/20 text-primary-blue font-bold">
                          Q
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-primary-dark mb-3">{item.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-primary-dark mb-3">Didn&apos;t find your answer?</h3>
            <p className="text-gray-600 mb-4">
              Feel free to contact us directly. Our team is ready to help.
            </p>
            <Link href="/contact-us" className="inline-block text-primary-blue font-semibold hover:underline transition">
              Contact Us → 
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
