import Link from 'next/link';
import { ArrowRight, FileText, Scale, ShieldAlert } from 'lucide-react';
import { taxServices } from '@/data/taxServices';
import { buttonStyles, Container, SectionIntro } from '@/components/ui';

export function TaxCompliance() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28 lg:py-32">
      <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-44 top-0 size-[30rem] rounded-full bg-blue-600/14 blur-[110px]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Tax & compliance"
              title="Tax Services"
              description="Navigate common U.S. filing categories with structured assistance based on the information you provide."
              tone="dark"
            />
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/[0.055] p-4">
              <ShieldAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-200" />
              <p className="text-sm leading-6 text-slate-300">
                Filing needs vary by entity, ownership, income, and residency. Information is
                general and does not replace qualified tax or legal advice.
              </p>
            </div>
            <Link
              href="/tax-services"
              className={buttonStyles({ size: 'lg', className: 'mt-8 w-full sm:w-auto' })}
            >
              View Tax Services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {taxServices.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl border border-[#2563eb] bg-[#2563eb] text-white shadow-[0_10px_24px_-14px_rgba(37,99,235,.9)] transition group-hover:border-blue-300 group-hover:bg-[#2563eb] group-hover:text-white">
                    {index === 0 ? (
                      <Scale aria-hidden="true" className="size-4" />
                    ) : (
                      <FileText aria-hidden="true" className="size-4" />
                    )}
                  </span>
                  <span className="text-[0.65rem] font-bold tracking-[0.14em] text-slate-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base text-white">{service.name}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
