import { ClipboardList, FileSearch, MessageSquareText, Send } from 'lucide-react';
import { Container, SectionIntro } from '@/components/ui';

const steps = [
  {
    icon: ClipboardList,
    title: 'Select a service',
    description: 'Choose the formation, tax, compliance, or account support that fits your need.',
  },
  {
    icon: Send,
    title: 'Submit required information',
    description: 'Share the relevant details and documents through the guided request process.',
  },
  {
    icon: FileSearch,
    title: 'Review and processing',
    description: 'We review the submission, clarify missing items, and support the next actions.',
  },
  {
    icon: MessageSquareText,
    title: 'Updates and completion support',
    description: 'Receive progress communication and practical guidance for follow-up steps.',
  },
];

export function WorkingProcess() {
  return (
    <section className="light-grid bg-surface-muted py-20 md:py-28 lg:py-32">
      <Container>
        <SectionIntro
          eyebrow="How it works"
          title="A simple, visible path from request to next steps"
          description="Timelines depend on the service, authorities, and third-party review. The workflow stays clear throughout."
          align="center"
        />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent lg:block"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="icon-shell relative z-10 bg-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-blue-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-lg text-primary-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
