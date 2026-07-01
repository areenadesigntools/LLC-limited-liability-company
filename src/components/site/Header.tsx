"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navServices, whatsappLink, site } from "@/lib/site";
import { cn } from "@/lib/cn";

const links = [
  { title: "How it works", href: "#how" },
  { title: "Pricing", href: "#pricing" },
  { title: "Who we help", href: "#who" },
  { title: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy font-display text-sm font-bold text-white">
            LLC
          </span>
          <span className="hidden text-sm font-semibold leading-tight text-ink sm:block">
            Limited Liability
            <br />
            <span className="text-muted">Company</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate hover:text-ink">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-[420px] pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-[0_20px_60px_-15px_rgba(2,6,23,0.25)]">
                  {navServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-lg px-3 py-2 text-sm text-slate transition-colors hover:bg-surface hover:text-brand"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate hover:text-ink"
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate hover:text-ink"
          >
            {site.phone}
          </a>
          <Button href="#contact">Get my free quote</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-white lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
        style={{ transition: "max-height 0.3s ease" }}
      >
        <Container className="flex flex-col gap-1 py-4">
          <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Services
          </p>
          <div className="grid grid-cols-2 gap-1">
            {navServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-slate hover:bg-surface"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="my-2 h-px bg-line" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-surface"
            >
              {l.title}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button href="#contact" size="lg">
              Get my free quote
            </Button>
            <Button href={whatsappLink} variant="whatsapp" size="lg" external>
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
