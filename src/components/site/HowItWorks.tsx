import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/site/Services";

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    text: "A short form or a quick call. We recommend the right state and services for you.",
  },
  {
    n: "02",
    title: "We prepare and file",
    text: "Formation documents, EIN and anything else you've chosen — prepared accurately.",
  },
  {
    n: "03",
    title: "You receive your documents",
    text: "Articles, EIN letter, operating agreement and a simple next-steps guide.",
  },
  {
    n: "04",
    title: "We keep you compliant",
    text: "Reminders and filing for annual reports, BOI and US tax deadlines.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-navy py-20 text-white sm:py-24">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <Container className="relative">
          <SectionHeading
            eyebrow="How it works"
            title="Four clear steps. No guesswork."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-brand/50 hover:bg-white/[0.07]">
                  <span className="font-display text-3xl font-bold text-brand">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {s.text}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-gradient-to-r from-brand to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
