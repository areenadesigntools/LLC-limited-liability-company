import { Container } from "@/components/ui/Container";

const partners = [
  "Mercury",
  "Wise",
  "Stripe",
  "Payoneer",
  "Amazon",
  "Shopify",
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
          Works with the tools you already use
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="font-display text-lg font-semibold text-slate/60 grayscale transition hover:text-slate"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
