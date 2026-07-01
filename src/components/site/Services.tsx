import Link from "next/link";
import {
  Building2,
  Hash,
  IdCard,
  FileText,
  MapPin,
  Mailbox,
  Landmark,
  ReceiptText,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Building2,
  Hash,
  IdCard,
  FileText,
  MapPin,
  Mailbox,
  Landmark,
  ReceiptText,
  ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to start and run a US business"
          subtitle="Pick a single service or a complete package. Clear scope, clear price, no surprises."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon] ?? Building2;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="group relative rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  {s.blurb}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand">
                    {s.price}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-brand" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-slate"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
