import {
  BadgeDollarSign,
  ShieldCheck,
  MessagesSquare,
  Laptop,
  UserCheck,
  Scale,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/site/Services";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Pricing you can see",
    text: "Every service and package is priced upfront. The state fee is shown separately, never marked up.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-first",
    text: "We set you up to stay legal — not just to register and disappear.",
  },
  {
    icon: MessagesSquare,
    title: "Plain-English guidance",
    text: "We explain what each document is and why it matters. No jargon.",
  },
  {
    icon: Laptop,
    title: "Remote, end to end",
    text: "Everything is done online, on your timezone, over email and WhatsApp.",
  },
  {
    icon: UserCheck,
    title: "Real people",
    text: "A named point of contact, not a ticket number.",
  },
  {
    icon: Scale,
    title: "Professionals where it counts",
    text: "For tax and legal advice we work with licensed CPAs and attorneys.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why us"
          title="Why founders choose us"
          subtitle="A premium, transparent partner for your US company — not a commodity filing form."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <r.icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
