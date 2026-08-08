import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Landmark,
  MessageSquareText,
  Scale,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import { AnimatedHeroVisual } from '@/components/services/AnimatedHeroVisual';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Us - LLC Limited Liability Company',
  description: 'Learn how LLC Limited Liability Company coordinates U.S. business formation, tax support, and payment-account setup for founders worldwide.',
  canonical: 'https://llclimitedliabilitycompany.com/about-us',
});

const servicePillars = [
  {
    icon: Landmark,
    title: 'Business formation',
    description: 'Organized assistance for LLC formation, EIN, ITIN, registered-agent, and reseller-certificate requests.',
    href: '/llc-formation',
  },
  {
    icon: FileCheck2,
    title: 'Tax and compliance',
    description: 'A structured intake and document-coordination process for federal and state filing support.',
    href: '/tax-services',
  },
  {
    icon: WalletCards,
    title: 'Payment account setup',
    description: 'Practical preparation support for PayPal, Stripe, Wise, and Payoneer applications.',
    href: '/payment-accounts',
  },
];

const values = [
  { icon: MessageSquareText, title: 'Clear communication', description: 'We explain requested information, next actions, and known limitations in plain language.' },
  { icon: ShieldCheck, title: 'Careful handling', description: 'Business and personal information is requested only when relevant to the selected service.' },
  { icon: Globe2, title: 'Remote-first support', description: 'Our workflow is designed for founders coordinating a U.S. business from different time zones.' },
  { icon: Scale, title: 'Responsible guidance', description: 'We distinguish administrative support from decisions that require licensed legal or tax advice.' },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'About Us', url: 'https://llclimitedliabilitycompany.com/about-us' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative isolate overflow-hidden bg-[#050b16] py-8 text-white md:py-6">
        <div aria-hidden="true" className="dark-grid absolute inset-0 -z-20 opacity-70" />
        <div aria-hidden="true" className="absolute -right-44 -top-52 -z-10 size-[42rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <Container>
          <div className="grid items-center gap-5 lg:grid-cols-[1.08fr_.66fr]">
            <div>
              <span className="eyebrow eyebrow-dark"><BadgeCheck aria-hidden="true" className="size-3.5" />About our company</span>
              <h1 className="mt-2 max-w-4xl text-balance text-4xl leading-[1.02] tracking-[-.055em] text-white sm:text-5xl">Clearer coordination for your U.S. business journey.</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 lg:line-clamp-2">LLC Limited Liability Company helps founders organize formation, tax-support, and payment-account requests through one practical, remote-first service experience.</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact-us" className={buttonStyles({ size: 'lg' })}>Discuss Your Needs <ArrowRight aria-hidden="true" className="size-4" /></Link>
                <Link href="/free-llc-registration" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Explore Free LLC Assistance</Link>
              </div>
            </div>

            <AnimatedHeroVisual compact visualKey="about-us" title="Global founder support" points={['Remote-first coordination', 'Formation · Tax · Payments', 'Practical next steps']} />
          </div>
        </Container>
      </section>

      <section className="light-grid bg-[#f5f8fd] py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><span className="eyebrow"><span className="size-1.5 rounded-full bg-current" />What guides our work</span><h2 className="mt-5 text-balance text-3xl text-primary-dark sm:text-4xl lg:text-5xl">Support built around clarity, not guesswork.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-electric">Our mission</p><p className="mt-3 text-sm leading-7 text-slate-600">Make U.S. business support easier to navigate by organizing information, documents, and next steps into a clear service process.</p></div><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-electric">Our approach</p><p className="mt-3 text-sm leading-7 text-slate-600">Set realistic expectations, communicate what is known, and identify when a licensed professional or third-party provider controls the outcome.</p></div></div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {servicePillars.map(({ icon: Icon, title, description, href }) => (
              <article key={title} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_28px_70px_-40px_rgba(37,99,235,.55)]">
                <span className="grid size-12 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow"><Icon aria-hidden="true" className="size-5" /></span><h3 className="mt-6 text-xl text-primary-dark">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p><Link href={href} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-electric">View services <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><span className="eyebrow"><span className="size-1.5 rounded-full bg-current" />Our working principles</span><h2 className="mt-5 text-3xl text-primary-dark sm:text-4xl lg:text-5xl">Professional support with clear boundaries.</h2><p className="mt-4 text-sm leading-7 text-muted sm:text-base">A reliable service experience starts with knowing what we coordinate—and what remains with authorities, providers, and licensed advisers.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-card"><span className="grid size-10 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-electric"><Icon aria-hidden="true" className="size-4.5" /></span><h3 className="mt-5 text-base text-primary-dark">{title}</h3><p className="mt-2 text-xs leading-6 text-muted">{description}</p></article>)}</div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/65 p-6"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-emerald-700">What our support can include</p><ul className="mt-5 space-y-3">{['Service selection and intake guidance', 'Document and information checklists', 'Application or filing coordination within the agreed scope', 'Progress communication and practical follow-up steps'].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-emerald-950"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald-600" />{item}</li>)}</ul></div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-amber-800">Important service boundaries</p><p className="mt-5 text-sm leading-7 text-amber-950/80">We do not promise government processing times, payment-provider approval, or a particular tax or legal result. Website information is general and does not replace advice from a qualified attorney, accountant, or tax professional.</p></div>
          </div>

          <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#071226] p-7 text-white shadow-[0_34px_80px_-45px_rgba(37,99,235,.7)] md:grid-cols-[1fr_auto] md:p-10"><div><span className="text-xs font-extrabold uppercase tracking-[.15em] text-cyan-300">Ready to organize your next step?</span><h2 className="mt-3 text-2xl text-white sm:text-3xl">Start with a clear conversation about your needs.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Tell us where you are in the process, and we will help identify the most relevant service pathway.</p></div><Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Get Free Consultation <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
        </Container>
      </section>
    </>
  );
}
