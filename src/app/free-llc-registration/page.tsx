import type { Metadata } from 'next';
import { FormationServicePage } from '@/components/services/FormationServicePage';
import { getServiceBySlug } from '@/data';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const service = getServiceBySlug('free-llc-registration');

export const metadata: Metadata = generateSeoMetadata({
  title: 'Free LLC Registration Assistance - LLC Limited Liability Company',
  description: service.description,
  keywords: ['free LLC registration assistance', 'U.S. LLC formation', 'international founders'],
  canonical: 'https://llclimitedliabilitycompany.com/free-llc-registration',
});

export default function FreeLLCRegistrationPage() {
  return <FormationServicePage slug="free-llc-registration" />;
}
