"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, whatsappLink } from "@/lib/site";

export function FinalCta() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-success/20 blur-[120px]" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start your US company?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Tell us a little about your business and we&apos;ll reply with the
            right next step for your situation — no pressure, no jargon.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            {[
              "Free consultation, no payment to get a quote",
              "Replies within 2 hours during business hours",
              "Your details stay private and secure",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-success" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={whatsappLink} variant="whatsapp" size="lg" external>
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp instead
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-6 text-ink shadow-glow sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-success" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                Thanks — we&apos;ve got it.
              </h3>
              <p className="mt-2 text-sm text-slate">
                A specialist will reach out shortly with your next step.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h3 className="font-display text-lg font-semibold">
                Get my free quote
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="WhatsApp / phone"
                  name="phone"
                  placeholder="+__ ___ _______"
                  required
                />
                <Field
                  label="Country of residence"
                  name="country"
                  placeholder="e.g. Pakistan"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Service you&apos;re interested in
                </label>
                <select
                  name="service"
                  className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand font-medium text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] transition hover:bg-brand-dark hover:-translate-y-0.5"
              >
                Get my free quote <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted">
                By submitting you agree to be contacted about your enquiry. We
                never share your details.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
