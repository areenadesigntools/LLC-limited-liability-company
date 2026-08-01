import Link from 'next/link';
import { ArrowRight, Check, CircleDollarSign, Info, ReceiptText } from 'lucide-react';
import { buttonStyles, Container, SectionIntro } from '@/components/ui';

const included = [
  'Initial formation guidance',
  'Information and document checklist',
  'Filing-process assistance',
  'Clear communication on next steps',
];

export function FreeLlcExplainer() {
  return (
    <section className="light-grid bg-background py-20 md:py-28 lg:py-32">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
          <div className="grid lg:grid-cols-[1.08fr_.92fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <SectionIntro
                eyebrow="Free LLC registration assistance"
                title="Our basic registration assistance has no service fee"
                description="We help you organize and move through the LLC registration process. You remain responsible for the mandatory filing fee set by the state you choose."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check aria-hidden="true" className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-llc-registration"
                className={buttonStyles({ size: 'lg', className: 'mt-9 w-full sm:w-auto' })}
              >
                Start Your LLC
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="relative overflow-hidden bg-navy-900 p-7 text-white sm:p-10 lg:p-12">
              <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-60" />
              <div
                aria-hidden="true"
                className="absolute -right-28 -top-28 size-72 rounded-full bg-blue-500/20 blur-3xl"
              />
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-2xl border border-blue-300/18 bg-blue-500/12 text-cyan-200">
                  <CircleDollarSign aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                  Cost transparency
                </p>
                <h3 className="mt-3 text-3xl text-white">Service fee: $0</h3>
                <div className="my-7 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
                <div className="flex items-start gap-3">
                  <ReceiptText
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-cyan-300"
                  />
                  <div>
                    <p className="font-semibold text-white">State filing fee</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Paid by the client at the applicable government rate. The exact amount varies
                      by state and may change.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-blue-200" />
                  <p className="text-xs leading-5 text-slate-400">
                    Optional services, registered-agent coverage, and additional filings may have
                    separate charges that are disclosed before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
