import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/site/Services";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    price: "$249",
    note: "+ state fee",
    tagline: "For first-time founders.",
    features: [
      "LLC formation in your best state",
      "Registered agent (first year)",
      "EIN registration",
      "Operating agreement",
      "Digital document pack",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$449",
    note: "+ state fee",
    tagline: "For sellers and agencies.",
    features: [
      "Everything in Starter",
      "US business address (3 months)",
      "Bank account guidance",
      "Reseller certificate support",
      "Priority WhatsApp support",
    ],
    featured: true,
  },
  {
    name: "Compliance",
    price: "$899",
    note: "+ state fee",
    tagline: "For founders who want it all handled.",
    features: [
      "Everything in Growth",
      "Annual report filing",
      "BOI report filing",
      "US tax filing (1120 + 5472)",
      "Dedicated compliance calendar",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple packages, honest pricing"
          subtitle="State fees are shown separately and never marked up. Sample pricing — confirm your exact quote in a free consultation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-7 transition",
                p.featured
                  ? "border-brand shadow-lift lg:-translate-y-3"
                  : "border-line shadow-card"
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-slate">{p.tagline}</p>
              <div className="mt-5 flex items-end gap-1.5">
                <span className="font-display text-4xl font-bold text-ink">
                  {p.price}
                </span>
                <span className="mb-1 text-sm text-muted">{p.note}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={p.featured ? "primary" : "secondary"}
                size="lg"
                className="mt-7 w-full"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Need something custom?{" "}
          <a href="#contact" className="font-medium text-brand hover:underline">
            Book a free consultation
          </a>{" "}
          and we&apos;ll tailor a package to you.
        </p>
      </Container>
    </section>
  );
}
