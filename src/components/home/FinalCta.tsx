import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <Container>
        <div className="dark-grid relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 text-center text-white shadow-[0_36px_90px_-46px_rgba(37,99,235,.72)] sm:px-10 lg:px-16 lg:py-18">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 size-64 rounded-full bg-blue-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -right-16 size-72 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="eyebrow eyebrow-dark mb-5">Start with a clear plan</span>
            <h2 className="text-balance text-3xl text-white sm:text-4xl lg:text-5xl">
              Ready to move your U.S. business forward?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Begin your LLC request or talk with our team about formation, tax, compliance, and
              payment-account setup assistance.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/free-llc-registration" className={buttonStyles({ size: 'lg' })}>
                Start Your LLC
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href={getWhatsAppUrl('Hello, I would like a free consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: 'secondary', size: 'lg' })}
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              No guaranteed approvals or fixed government processing times. Applicable state fees
              remain the client&apos;s responsibility.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
