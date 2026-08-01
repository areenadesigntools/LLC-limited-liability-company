import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDollarSign, CreditCard, WalletCards } from 'lucide-react';
import { paymentProviders } from '@/data/paymentProviders';
import { buttonStyles, Container, SectionIntro } from '@/components/ui';

const providerMarks: Record<string, string> = {
  paypal: 'P',
  stripe: 'S',
  wise: 'W',
  payoneer: 'P',
};

export function PaymentAssistance() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28 lg:py-32">
      <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -left-52 bottom-0 size-[32rem] rounded-full bg-cyan-400/8 blur-[120px]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Payment account assistance"
              title="Prepare stronger account applications"
              description="Get support organizing business details and understanding common setup requirements for widely used payment platforms."
              tone="dark"
            />
            <div className="mt-8 space-y-3">
              {[
                'Documentation preparation',
                'Application and setup guidance',
                'Requirement and verification review',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/9 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  <CheckCircle2 aria-hidden="true" className="size-4 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              Provider eligibility, verification, limits, and approval decisions remain solely
              with each payment platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {paymentProviders.map((provider, index) => (
              <article
                key={provider.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 size-24 rounded-full bg-blue-500/10 blur-2xl"
                />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-blue-300/18 bg-blue-500/12 font-display text-sm font-bold text-cyan-100">
                    {providerMarks[provider.id]}
                  </span>
                  {index % 2 === 0 ? (
                    <WalletCards aria-hidden="true" className="size-4 text-slate-600" />
                  ) : (
                    <CircleDollarSign aria-hidden="true" className="size-4 text-slate-600" />
                  )}
                </div>
                <h3 className="relative mt-6 text-lg text-white">{provider.name}</h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-400">
                  {provider.description}
                </p>
                <Link
                  href={provider.href}
                  className="relative mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-200 hover:text-cyan-100"
                >
                  Setup assistance
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-400/15 bg-blue-500/[0.055] p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <CreditCard aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-200" />
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Need help identifying the documents commonly requested for your business and
              preferred platform?
            </p>
          </div>
          <Link
            href="/payment-accounts"
            className={buttonStyles({
              variant: 'secondary',
              size: 'sm',
              className: 'w-full shrink-0 sm:w-auto',
            })}
          >
            View Payment Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
