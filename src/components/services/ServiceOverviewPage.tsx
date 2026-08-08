import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  FileText,
  MessageSquareText,
} from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import { cn } from '@/lib/cn';
import { AnimatedHeroVisual } from './AnimatedHeroVisual';

interface OverviewItem {
  title: string;
  description: string;
  href: string;
  metaLabel: string;
  meta: string;
  listLabel: string;
  list: string[];
}

interface OverviewStep {
  title: string;
  description: string;
}

interface ServiceOverviewPageProps {
  eyebrow: string;
  title: string;
  description: string;
  noticeTitle: string;
  notice: string;
  directoryTitle: string;
  directoryDescription: string;
  items: OverviewItem[];
  process: OverviewStep[];
  variant: 'tax' | 'payment';
}

export function ServiceOverviewPage({
  eyebrow,
  title,
  description,
  noticeTitle,
  notice,
  directoryTitle,
  directoryDescription,
  items,
  process,
  variant,
}: ServiceOverviewPageProps) {
  const DirectoryIcon = variant === 'tax' ? FileText : CreditCard;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#050b16] py-8 text-white md:py-12">
        <div aria-hidden="true" className="dark-grid absolute inset-0 -z-20 opacity-70" />
        <div aria-hidden="true" className="absolute -right-40 -top-52 -z-10 size-[42rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <Container>
          <div className={cn('grid items-center gap-7', variant === 'tax' ? 'lg:grid-cols-[1.05fr_.75fr]' : 'lg:grid-cols-[.92fr_.88fr]')}>
            <div>
              <span className="eyebrow eyebrow-dark"><span className="size-1.5 rounded-full bg-current" />{eyebrow}</span>
              <h1 className="mt-4 max-w-4xl text-balance text-4xl leading-[1.02] tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact-us" className={buttonStyles({ size: 'lg' })}>Get Free Consultation <ArrowRight aria-hidden="true" className="size-4" /></Link>
                <a href="#service-directory" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Explore Services</a>
              </div>
            </div>

            <AnimatedHeroVisual visualKey={variant === 'tax' ? 'tax-services' : 'payment-accounts'} title={title} points={[`${items.length} service pathways`, variant === 'tax' ? 'Records mapped to filing' : 'Provider-ready information', 'Remote coordination']} />
          </div>
        </Container>
      </section>

      <section id="service-directory" className={cn('scroll-mt-24 py-16 md:py-24', variant === 'tax' ? 'light-grid bg-[#f5f8fd]' : 'bg-white')}>
        <Container>
          <div className="mx-auto flex max-w-4xl items-start gap-4 rounded-2xl border border-amber-200/80 bg-amber-50 p-5 text-amber-950 shadow-card">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700"><CircleAlert aria-hidden="true" className="size-5" /></span>
            <div><h2 className="text-sm font-bold">{noticeTitle}</h2><p className="mt-1 text-xs leading-6 text-amber-900/75">{notice}</p></div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <span className="eyebrow"><span className="size-1.5 rounded-full bg-current" />Choose a service</span>
            <h2 className="mt-5 text-balance text-3xl text-primary-dark sm:text-4xl lg:text-5xl">{directoryTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{directoryDescription}</p>
          </div>

          <div className={cn('mt-10 grid gap-5 md:grid-cols-2', variant === 'tax' ? 'lg:grid-cols-3' : 'xl:grid-cols-2')}>
            {items.map((item) => (
              <article key={item.href} className={cn('group flex h-full flex-col border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_30px_70px_-38px_rgba(37,99,235,.5)]', variant === 'tax' ? 'rounded-3xl' : 'rounded-[2rem] md:grid md:grid-cols-[auto_1fr] md:gap-x-5')}>
                <span className="grid size-11 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow"><DirectoryIcon aria-hidden="true" className="size-5" /></span>
                <h3 className={cn('text-xl text-primary-dark group-hover:text-electric', variant === 'tax' ? 'mt-5' : 'mt-5 md:mt-0')}>{item.title}</h3>
                <p className={cn('mt-3 text-sm leading-6 text-muted', variant === 'payment' && 'md:col-start-2')}>{item.description}</p>
                <div className={cn('mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4', variant === 'payment' && 'md:col-span-2')}>
                  <p className="text-[.6rem] font-extrabold uppercase tracking-[.13em] text-electric">{item.metaLabel}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.meta}</p>
                </div>
                <div className={cn('mt-5', variant === 'payment' && 'md:col-span-2')}>
                  <p className="text-[.6rem] font-extrabold uppercase tracking-[.13em] text-slate-500">{item.listLabel}</p>
                  <ul className="mt-3 space-y-2.5">
                    {item.list.slice(0, 3).map((entry) => <li key={entry} className="flex items-start gap-2 text-xs leading-5 text-slate-600"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-electric" />{entry}</li>)}
                  </ul>
                </div>
                <Link href={item.href} className={cn('mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-electric', variant === 'payment' && 'md:col-span-2')}>View Service Details <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow"><span className="size-1.5 rounded-full bg-current" />Our working process</span>
            <h2 className="mt-5 text-3xl text-primary-dark sm:text-4xl">Clear coordination from first review to follow-up</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-card">
                <span className="text-xs font-black tracking-[.12em] text-blue-500">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-base text-primary-dark">{step.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#071226] p-7 text-white shadow-[0_34px_80px_-45px_rgba(37,99,235,.7)] md:grid-cols-[1fr_auto] md:p-10">
            <div><span className="text-xs font-extrabold uppercase tracking-[.15em] text-cyan-300">Need a clear starting point?</span><h2 className="mt-3 text-2xl text-white sm:text-3xl">Tell us what you are trying to accomplish.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">We will help organize the relevant service questions and the information you may need to prepare.</p></div>
            <Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}><MessageSquareText aria-hidden="true" className="size-4" />Request Consultation</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
