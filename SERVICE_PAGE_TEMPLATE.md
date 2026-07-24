import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card';
import { Container, Section, SectionHeading, Grid } from '@/components/ui/Layout';
import { generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

/**
 * TEMPLATE SERVICE PAGE
 * 
 * Copy this file to create individual service pages:
 * - /app/llc-formation/page.tsx
 * - /app/ein-application/page.tsx
 * - /app/itin-application/page.tsx
 * - /app/registered-agent/page.tsx
 * - /app/reseller-certificate/page.tsx
 * 
 * Instructions:
 * 1. Replace SERVICE_SLUG with actual service slug (e.g., 'llc-formation')
 * 2. Replace the service data with details from src/data/services.ts
 * 3. Update the metadata, title, description, and benefits
 * 4. Customize the process steps and eligibility requirements
 * 5. Update FAQs relevant to that service
 */

const SERVICE_SLUG = 'service-slug'; // CHANGE THIS
const SERVICE_NAME = 'Service Name'; // CHANGE THIS
const SERVICE_DESCRIPTION = 'Service description here'; // CHANGE THIS
const SERVICE_ICON = '🎯'; // CHANGE THIS

export const metadata: Metadata = generateSeoMetadata({
  title: `${SERVICE_NAME} - LLC Limited Liability Company`,
  description: SERVICE_DESCRIPTION,
  path: `/${SERVICE_SLUG}`,
  keywords: ['LLC', SERVICE_NAME.toLowerCase()],
});

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

interface EligibilityRequirement {
  label: string;
  included: boolean;
}

// CUSTOMIZE THIS DATA FOR YOUR SERVICE
const benefits: ServiceBenefit[] = [
  {
    icon: '✓',
    title: 'Professional Guidance',
    description: 'Expert assistance throughout the process',
  },
  {
    icon: '⚡',
    title: 'Fast Processing',
    description: 'Quick turnaround on applications and submissions',
  },
  {
    icon: '🛡️',
    title: 'Secure Handling',
    description: 'All sensitive information handled securely',
  },
];

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'We assess your specific needs and explain the process',
  },
  {
    number: 2,
    title: 'Document Preparation',
    description: 'We prepare all required documents and forms',
  },
  {
    number: 3,
    title: 'Submission & Follow-up',
    description: 'We submit documents and track the status',
  },
];

const eligibilityRequirements: EligibilityRequirement[] = [
  { label: 'US Citizenship or ITIN holder', included: true },
  { label: 'Valid identification', included: true },
  { label: 'Bank account information', included: false },
  { label: 'Business address in US', included: true },
];

const serviceFAQ = [
  {
    question: 'What is the typical timeline?',
    answer: 'Timeline varies, typically 5-10 business days from submission.',
  },
  {
    question: 'What documents do I need?',
    answer: 'We will provide a complete checklist during your consultation.',
  },
  {
    question: 'Can I do this internationally?',
    answer: 'Yes, we assist clients from over 100 countries.',
  },
  {
    question: 'What is the cost?',
    answer: 'Service fees are competitive and transparent. Government fees vary by jurisdiction.',
  },
  {
    question: 'Is there a guarantee?',
    answer: 'We handle all aspects professionally. Approval depends on government processing.',
  },
  {
    question: 'Can you expedite the process?',
    answer: 'Yes, rush processing options are available for additional fees.',
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: SERVICE_NAME, url: `/${SERVICE_SLUG}` },
          ])),
        }}
      />

      {/* Hero Section */}
      <Section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark to-blue-900">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="text-5xl mb-4">{SERVICE_ICON}</div>
            <Badge className="mb-4" variant="primary">
              {SERVICE_NAME}
            </Badge>
            <h1 className="text-5xl font-bold mb-6 font-display">
              Get Started with {SERVICE_NAME}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {SERVICE_DESCRIPTION}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            title="Why Choose Our Service?"
            subtitle="Experience professional assistance with"
            centered
          />
          <Grid columns={3} gap={6} className="mt-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="How It Works"
            subtitle="Our simple process to get you started"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-primary-blue to-transparent" />
                )}
                <div className="relative bg-white p-8 rounded-lg border-2 border-primary-blue">
                  <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Eligibility Section */}
      <Section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Eligibility Requirements"
            subtitle="Check if you qualify for this service"
            centered
          />
          <div className="mt-12 space-y-4">
            {eligibilityRequirements.map((req, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                {req.included ? (
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                  <div className="w-6 h-6 rounded border-2 border-gray-300 flex-shrink-0" />
                )}
                <span
                  className={`text-lg ${
                    req.included ? 'text-gray-700' : 'text-gray-500'
                  }`}
                >
                  {req.label}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Not sure if you're eligible?</p>
            <Button variant="secondary" size="lg">
              Talk to Our Experts
            </Button>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about this service"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-4 max-w-3xl mx-auto">
            {serviceFAQ.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-6 hover:bg-blue-50 transition-colors">
                    <h3 className="font-bold text-primary-dark text-lg">
                      {item.question}
                    </h3>
                    <span className="transition group-open:rotate-180">
                      <svg
                        className="h-5 w-5 text-primary-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-gray-200 px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-dark to-blue-900">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a free consultation and learn how we can help
              you with {SERVICE_NAME.toLowerCase()}.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-white/10 p-8 rounded-lg backdrop-blur">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-primary-blue" />
                <div>
                  <div className="text-sm text-gray-200">Call us</div>
                  <div className="text-xl font-bold">
                    <a
                      href="tel:+923712559501"
                      className="hover:text-primary-blue transition-colors"
                    >
                      +92 371 2559501
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-primary-blue" />
                <div>
                  <div className="text-sm text-gray-200">Email us</div>
                  <div className="text-xl font-bold">
                    <a
                      href="mailto:info@llclimitedliabilitycompany.com"
                      className="hover:text-primary-blue transition-colors"
                    >
                      info@llc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact-us">
                <Button variant="primary" size="lg">
                  Get Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Related Services */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            title="Related Services"
            subtitle="Other services that might interest you"
            centered
          />
          <Grid columns={3} gap={6} className="mt-12">
            <Card className="group hover:border-primary-blue transition-colors cursor-pointer">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-blue transition-colors">
                  Related Service 1
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Description of related service here
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/related-service-1" className="text-primary-blue hover:underline font-semibold">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
            <Card className="group hover:border-primary-blue transition-colors cursor-pointer">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-blue transition-colors">
                  Related Service 2
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Description of related service here
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/related-service-2" className="text-primary-blue hover:underline font-semibold">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
            <Card className="group hover:border-primary-blue transition-colors cursor-pointer">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-blue transition-colors">
                  Related Service 3
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Description of related service here
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/related-service-3" className="text-primary-blue hover:underline font-semibold">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
