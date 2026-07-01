import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navServices, site } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "State comparison", href: "/guides/state-comparison" },
      { label: "Compliance calendar", href: "/compliance-calendar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Refund policy", href: "/refund" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white font-display text-sm font-bold text-navy">
                LLC
              </span>
              <span className="font-display text-sm font-semibold">
                Limited Liability Company
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              US company formation, EIN, ITIN, tax filing and compliance for
              founders without a US address.
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/60">
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {navServices.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {columns.slice(0, 2).map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-white/55">
          <strong className="text-white/75">Disclaimer.</strong> {site.name} is a
          third-party business formation and document-preparation service. We are
          not a law firm, accounting firm, or government agency, and we do not
          provide legal advice. Information on this site is general and not a
          substitute for advice from a licensed attorney, CPA, or Enrolled Agent.
          Where individualized tax or legal advice is required, we work with or
          refer you to licensed professionals. Government and IRS processing times
          and approvals are outside our control; we do not guarantee any
          government outcome, approval, or timeline. Prices shown are our service
          fees and exclude government/state filing fees, which are listed
          separately.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {columns[2].links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
