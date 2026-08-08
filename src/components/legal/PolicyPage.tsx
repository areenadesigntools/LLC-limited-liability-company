import Link from 'next/link';
import { ArrowRight, FileText, Mail, Scale, ShieldCheck } from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import { contactInfo } from '@/data';
import { cn } from '@/lib/cn';
import { AnimatedHeroVisual } from '@/components/services/AnimatedHeroVisual';

export interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

interface PolicyPageProps {
  variant: 'privacy' | 'terms' | 'refund';
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: PolicySection[];
  closingTitle: string;
  closingText: string;
}

export function PolicyPage({
  variant,
  eyebrow,
  title,
  description,
  updated,
  sections,
  closingTitle,
  closingText,
}: PolicyPageProps) {
  return (
    <>
      <section className={cn('relative isolate overflow-hidden py-16 text-white md:py-20', variant === 'privacy' && 'bg-[#041c20]', variant === 'terms' && 'bg-[#0d1031]', variant === 'refund' && 'bg-[#291005]')}>
        <div aria-hidden="true" className="dark-grid absolute inset-0 -z-20 opacity-65" />
        <div aria-hidden="true" className="absolute -right-40 -top-64 -z-10 size-[38rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_.72fr]">
            <div className="max-w-4xl">
              <span className="eyebrow eyebrow-dark"><ShieldCheck aria-hidden="true" className="size-3.5" />{eyebrow}</span>
              <h1 className="mt-6 text-balance text-4xl leading-[1.04] tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
              <div className="mt-7 inline-flex rounded-2xl border border-white/10 bg-white/[.045] px-5 py-4 backdrop-blur-xl"><div><p className="text-[.62rem] font-extrabold uppercase tracking-[.15em] text-cyan-200">Last updated</p><p className="mt-1 text-sm font-semibold text-white">{updated}</p></div></div>
            </div>
            <AnimatedHeroVisual visualKey={variant} title={title} points={sections.slice(0, 3).map((section) => section.title)} />
          </div>
        </Container>
      </section>

      <section className="light-grid bg-[#f5f8fd] py-14 md:py-20">
        <Container>
          <div className={cn('grid gap-8 lg:items-start', variant === 'privacy' && 'lg:grid-cols-[17rem_minmax(0,1fr)]', variant === 'terms' && 'lg:grid-cols-1', variant === 'refund' && 'lg:grid-cols-[minmax(0,1fr)_17rem]')}>
            <aside className={cn('rounded-3xl border border-slate-200 bg-white p-5 shadow-card lg:sticky lg:top-24', variant === 'terms' && 'lg:z-10 lg:rounded-2xl lg:p-4', variant === 'refund' && 'lg:order-2')}>
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid size-10 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow"><FileText aria-hidden="true" className="size-4.5" /></span>
                <div><p className="text-[.6rem] font-extrabold uppercase tracking-[.13em] text-electric">On this page</p><p className="mt-0.5 text-sm font-bold text-primary-dark">Policy sections</p></div>
              </div>
              <nav aria-label={`${title} sections`} className="mt-4">
                <ol className={cn('space-y-1', variant === 'terms' && 'lg:grid lg:grid-cols-5 lg:gap-1 lg:space-y-0')}>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold leading-5 text-slate-600 hover:bg-blue-50 hover:text-electric">
                        <span className="mt-0.5 text-[.6rem] font-black tracking-wider text-blue-400">{String(index + 1).padStart(2, '0')}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className={cn('space-y-5', variant === 'refund' && 'lg:order-1')}>
              {sections.map((section, index) => (
                <article id={section.id} key={section.id} className={cn('scroll-mt-28 border border-slate-200 bg-white p-6 shadow-card sm:p-8', variant === 'privacy' && 'rounded-3xl', variant === 'terms' && (index % 2 === 0 ? 'rounded-[2rem_2rem_2rem_.5rem]' : 'rounded-[2rem_.5rem_2rem_2rem]'), variant === 'refund' && 'rounded-2xl border-l-4 border-l-amber-400')}>
                  <div className="flex items-start gap-4">
                    <span className={cn('grid size-10 shrink-0 place-items-center rounded-xl border text-xs font-black', variant === 'privacy' && 'border-teal-100 bg-teal-50 text-teal-700', variant === 'terms' && 'border-indigo-100 bg-indigo-50 text-indigo-700', variant === 'refund' && 'border-amber-100 bg-amber-50 text-amber-700')}>{String(index + 1).padStart(2, '0')}</span>
                    <div className="min-w-0">
                      <h2 className="text-xl text-primary-dark sm:text-2xl">{section.title}</h2>
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-slate-600">{paragraph}</p>)}
                      </div>
                      {section.bullets && (
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs leading-5 text-slate-600"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-electric" />{bullet}</li>)}
                        </ul>
                      )}
                      {section.note && <p className="mt-5 rounded-2xl border border-amber-200/80 bg-amber-50 p-4 text-xs leading-6 text-amber-900">{section.note}</p>}
                    </div>
                  </div>
                </article>
              ))}

              <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-[#071226] p-7 text-white shadow-[0_30px_80px_-45px_rgba(37,99,235,.75)] sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
                <div><span className="text-[.64rem] font-extrabold uppercase tracking-[.15em] text-cyan-300">Questions about this policy?</span><h2 className="mt-3 text-2xl text-white">{closingTitle}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{closingText}</p><a href={`mailto:${contactInfo.email}`} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-cyan-200 hover:text-white"><Mail aria-hidden="true" className="size-4" />{contactInfo.email}</a></div>
                <Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-slate-700">
                <Scale aria-hidden="true" className="mt-1 size-5 shrink-0 text-electric" />
                <p>These website policies provide general operational information. They should be reviewed by qualified legal counsel for the jurisdictions, services, and business practices that apply before production launch.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
