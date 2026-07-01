import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/site/Services";

const reviews = [
  {
    quote:
      "They picked the right state for me, filed everything, and explained each document. My Mercury account was approved on the first try.",
    name: "Hamza R.",
    role: "Amazon seller",
    country: "Pakistan",
  },
  {
    quote:
      "I had no idea about Form 5472 until they flagged it. They handled my filing before the deadline and saved me from a penalty.",
    name: "Sara M.",
    role: "Agency owner",
    country: "UAE",
  },
  {
    quote:
      "Clear pricing, no surprises, and someone actually answered my WhatsApp messages. Worth every dollar.",
    name: "Daniel K.",
    role: "SaaS founder",
    country: "UK",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Founders, in their words"
          subtitle="A few of the people we've helped set up and run their US companies."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-card"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-semibold text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-muted">
                    {r.role} · {r.country}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
