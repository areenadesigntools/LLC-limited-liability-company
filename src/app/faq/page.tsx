import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CircleHelp, FileText, Landmark, MessageSquareText, WalletCards } from 'lucide-react';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { AnimatedHeroVisual } from '@/components/services/AnimatedHeroVisual';
import { buttonStyles, Container } from '@/components/ui';
import { faqItems } from '@/data';
import { generateMetadata as generateSeoMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Frequently Asked Questions - LLC Limited Liability Company',
  description: 'Clear answers about U.S. LLC formation, EIN and ITIN support, tax services, payment accounts, fees, timelines, and international founder assistance.',
  canonical: 'https://llclimitedliabilitycompany.com/faq',
});

function groupFAQsByCategory(items: typeof faqItems) {
  return items.reduce<Record<string, typeof faqItems>>((groups, item) => {
    (groups[item.category] ??= []).push(item);
    return groups;
  }, {});
}

function categoryId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const topicCards = [
  { icon: Landmark, title: 'Formation', text: 'LLC setup, state fees, registered agents, and tax IDs.' },
  { icon: FileText, title: 'Tax support', text: 'Filing coordination, document requirements, and service limits.' },
  { icon: WalletCards, title: 'Payment accounts', text: 'Preparation support and third-party approval expectations.' },
];

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqItems.map((item) => ({ question: item.question, answer: item.answer })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'FAQ', url: 'https://llclimitedliabilitycompany.com/faq' },
  ]);
  const groupedFAQs = groupFAQsByCategory(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative isolate overflow-hidden bg-[#050b16] py-8 text-white md:py-12">
        <div aria-hidden="true" className="dark-grid absolute inset-0 -z-20 opacity-70" /><div aria-hidden="true" className="absolute -right-44 -top-52 -z-10 size-[42rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <Container><div className="grid items-center gap-7 lg:grid-cols-[1fr_.66fr]"><div><span className="eyebrow eyebrow-dark"><CircleHelp aria-hidden="true" className="size-3.5" />Knowledge centre</span><h1 className="mt-4 text-balance text-4xl leading-[1.02] tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">Questions answered with useful context.</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Review common questions about our service process, documents, fees, tax identifiers, and provider-controlled outcomes before you begin.</p></div><AnimatedHeroVisual visualKey="faq" title="Answer navigator" points={['Formation questions', 'Tax and compliance', 'Payment accounts']} /></div></Container>
      </section>

      <section className="light-grid bg-[#f5f8fd] py-14 md:py-20">
        <Container>
          <div className="mb-8 grid gap-4 md:grid-cols-3">{topicCards.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card"><span className="grid size-10 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow"><Icon aria-hidden="true" className="size-4.5" /></span><h2 className="mt-4 text-base text-primary-dark">{title}</h2><p className="mt-2 text-xs leading-6 text-muted">{text}</p></div>)}</div>
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-card"><p className="text-[.62rem] font-extrabold uppercase tracking-[.15em] text-electric">Browse by topic</p><nav aria-label="FAQ categories" className="mt-4 flex flex-wrap gap-2">{Object.keys(groupedFAQs).map((category) => <a key={category} href={`#${categoryId(category)}`} className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-100 hover:text-electric">{category}</a>)}</nav></div>

          <div className="mx-auto mt-10 max-w-6xl space-y-8">
            {Object.entries(groupedFAQs).map(([category, items], index) => (
              <section id={categoryId(category)} key={category} className="scroll-mt-28 grid gap-5 lg:grid-cols-[15rem_minmax(0,1fr)]">
                <div className="pt-2"><span className="text-[.62rem] font-black uppercase tracking-[.16em] text-blue-500">Topic {String(index + 1).padStart(2, '0')}</span><h2 className="mt-2 text-2xl text-primary-dark">{category}</h2><p className="mt-2 text-xs leading-6 text-muted">Open a question to review the complete answer.</p></div>
                <FaqAccordion items={items} />
              </section>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[#071226] p-7 text-white shadow-[0_34px_80px_-45px_rgba(37,99,235,.7)] md:grid-cols-[1fr_auto] md:p-10"><div><span className="text-xs font-extrabold uppercase tracking-[.15em] text-cyan-300">Need a service-specific answer?</span><h2 className="mt-3 text-2xl text-white sm:text-3xl">Share the details of your situation.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">We can help identify the relevant service questions and information you may need to prepare.</p></div><Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}><MessageSquareText aria-hidden="true" className="size-4" />Contact Our Team <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
        </Container>
      </section>
    </>
  );
}
