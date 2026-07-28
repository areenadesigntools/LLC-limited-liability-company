import Link from 'next/link';
import { Section, Container, SectionHeading } from '@/components/ui';
import type { Service } from '@/types';

interface TemporaryServicePageProps {
  service: Service;
}

/**
 * Phase 1 route bridge only.
 * Keep this page visually aligned with the existing site until the full redesign.
 */
export function TemporaryServicePage({ service }: TemporaryServicePageProps) {
  return (
    <div data-implementation-status="temporary-phase-1-service-page">
      <Section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark to-blue-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200 mb-4">
              Business Formation Service
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100">{service.shortDescription}</p>
          </div>
        </Container>
      </Section>

      <Section className="pt-20 pb-16">
        <Container size="md">
          <SectionHeading title={`About ${service.title}`} centered />
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="bg-blue-50 border-l-4 border-primary-blue p-6 rounded mb-8">
              <p className="text-gray-700">
                Detailed service information, requirements, timelines, and pricing will be
                completed during the upcoming visual redesign.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/contact-us"
                className="inline-block px-8 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us About {service.title}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
