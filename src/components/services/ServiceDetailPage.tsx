import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';

interface DetailList {
  title: string;
  items: string[];
}

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface ServiceDetailPageProps {
  category: string;
  title: string;
  description: string;
  overviewHref: string;
  overviewLabel: string;
  summaryLabel: string;
  summary: string;
  notice: string;
  lists: DetailList[];
  related: RelatedService[];
}

export function ServiceDetailPage({
  category,
  title,
  description,
  overviewHref,
  overviewLabel,
  summaryLabel,
  summary,
  notice,
  lists,
  related,
}: ServiceDetailPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 size-[30rem] rounded-full bg-blue-600/20 blur-[110px]"
        />
        <Container className="relative">
          <Link
            href={overviewHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-blue-200 hover:text-cyan-100"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            {overviewLabel}
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            {category}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us" className={buttonStyles({ size: 'lg' })}>
              Get Free Consultation
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href={overviewHref}
              className={buttonStyles({ variant: 'secondary', size: 'lg' })}
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      <section className="light-grid bg-background py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.55fr] lg:items-start">
            <div>
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-card sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-electric">
                      {summaryLabel}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{summary}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {lists.map((list, index) => (
                  <article
                    key={list.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-7"
                  >
                    <span className="grid size-10 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-electric">
                      {index === 0 ? (
                        <ClipboardCheck aria-hidden="true" className="size-5" />
                      ) : (
                        <ShieldCheck aria-hidden="true" className="size-5" />
                      )}
                    </span>
                    <h2 className="mt-5 text-xl text-primary-dark">{list.title}</h2>
                    <ul className="mt-5 space-y-3">
                      {list.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-electric"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-card lg:sticky lg:top-28 sm:p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow">
                <MessageSquareText aria-hidden="true" className="size-5" />
              </span>
              <h2 className="mt-5 text-2xl text-primary-dark">Need guidance?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tell us about your business, ownership, residency, and current documentation. Our
                team can explain the next practical steps.
              </p>
              <Link
                href="/contact-us"
                className={buttonStyles({ size: 'md', className: 'mt-6 w-full' })}
              >
                Contact Our Team
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <p className="mt-5 border-t border-blue-100 pt-5 text-xs leading-6 text-slate-500">
                {notice}
              </p>
            </aside>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-electric">
                  Related services
                </p>
                <h2 className="mt-2 text-2xl text-primary-dark sm:text-3xl">Explore more options</h2>
              </div>
              <Link
                href={overviewHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-electric"
              >
                {overviewLabel}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card hover:-translate-y-0.5 hover:border-blue-300"
                >
                  <h3 className="text-base text-primary-dark group-hover:text-electric">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-electric">
                    View service
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
