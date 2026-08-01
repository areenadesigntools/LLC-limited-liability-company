import {
  ClipboardCheck,
  Globe2,
  Headphones,
  ListChecks,
  LockKeyhole,
  Waypoints,
} from 'lucide-react';
import { Container, SectionIntro } from '@/components/ui';

const reasons = [
  {
    icon: Waypoints,
    title: 'Transparent guidance',
    description: 'Know what is required, what it costs, and what happens next.',
  },
  {
    icon: Headphones,
    title: 'Dedicated support',
    description: 'A direct channel for questions throughout your service journey.',
  },
  {
    icon: Globe2,
    title: 'Global-client assistance',
    description: 'Remote-friendly communication for founders outside the United States.',
  },
  {
    icon: ListChecks,
    title: 'Structured process',
    description: 'Clear information requests and organized progress updates.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance-focused service',
    description: 'Attention to the documents and obligations tied to your request.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure communication',
    description: 'Business and personal details are handled with care.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <SectionIntro
          eyebrow="Why choose us"
          title="Professional support built around informed decisions"
          description="Our role is to help you move through complex business tasks with a clear, practical, and carefully qualified process."
          align="center"
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="group bg-white p-7 sm:p-8">
                <span className="icon-shell transition-transform group-hover:-translate-y-0.5">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-6 text-lg text-primary-dark">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
