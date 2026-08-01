import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { faqItems } from '@/data/faq';
import { Container, SectionIntro } from '@/components/ui';
import { FaqAccordion } from './FaqAccordion';

export function FaqPreview() {
  return (
    <section className="light-grid bg-background py-20 md:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Frequently asked questions"
            title="Clear answers before you begin"
            description="Understand common formation, fee, tax-ID, and account-assistance questions."
          />
          <Link
            href="/faq"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-electric"
          >
            View all FAQs
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div className="mt-12">
          <FaqAccordion items={faqItems.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
