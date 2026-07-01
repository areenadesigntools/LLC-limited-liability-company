import {
  Star,
  Globe,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  CalendarClock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-success/20 blur-[120px]" />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <Globe className="h-3.5 w-3.5 text-success" />
            Built for founders without a US address
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Launch your US company from{" "}
            <span className="bg-gradient-to-r from-brand to-success bg-clip-text text-transparent">
              anywhere
            </span>{" "}
            in the world.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            LLC formation, EIN, ITIN, US tax filing and ongoing compliance —
            prepared and filed correctly, explained in plain English, with
            pricing you can see upfront.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Start my company <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#pricing" variant="ghost" size="lg">
              See pricing
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </span>
              Rated by founders in 50+ countries
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-success" /> Secure &
              confidential
            </span>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="relative lg:pl-6">
          <div className="animate-floaty rounded-2xl border border-white/10 bg-navy-700/80 p-5 shadow-glow backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs text-white/50">Company status</p>
                <p className="font-display text-sm font-semibold">
                  Northwind Trading LLC
                </p>
              </div>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
                Active
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {[
                { label: "Articles filed (Wyoming)", done: true },
                { label: "EIN issued", done: true },
                { label: "Bank account guidance", done: true },
                { label: "Annual compliance", done: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
                >
                  <CheckCircle2
                    className={`h-5 w-5 ${
                      row.done ? "text-success" : "text-white/25"
                    }`}
                  />
                  <span className="text-sm text-white/80">{row.label}</span>
                  <span className="ml-auto text-xs text-white/40">
                    {row.done ? "Done" : "Scheduled"}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs text-white/50">EIN</p>
                <p className="font-mono text-sm text-white">88-XXXXXXX</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center gap-1.5 text-xs text-amber">
                  <CalendarClock className="h-3.5 w-3.5" /> Next deadline
                </div>
                <p className="text-sm text-white">Apr 15 · Form 5472</p>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-4 -left-2 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-xs font-medium text-ink shadow-lift sm:flex">
            <MessageCircle className="h-4 w-4 text-success" />
            Replies within 2 hours
          </div>
        </div>
      </Container>

      <a
        href={whatsappLink}
        className="sr-only"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </section>
  );
}
