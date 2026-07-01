import { Globe2, ShoppingCart, Briefcase, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/site/Services";

const personas = [
  {
    icon: Globe2,
    title: "Non-US residents",
    text: "Start a legitimate US company remotely, with every step explained in plain English.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce sellers",
    text: "Get a US entity and payments sorted for Amazon, Shopify and Etsy.",
  },
  {
    icon: Briefcase,
    title: "Freelancers & agencies",
    text: "Invoice US clients and accept Stripe or PayPal with a proper structure.",
  },
  {
    icon: Rocket,
    title: "Startups & entrepreneurs",
    text: "Set the company up correctly from day one — no cleanup later.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="who" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for founders without a US address"
          subtitle="If you're operating from outside the US, we make the paperwork simple and correct."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-surface p-6 transition hover:border-brand/40 hover:bg-white hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
