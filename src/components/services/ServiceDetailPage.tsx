import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import type { ServiceFaq, ServiceProcessStep } from '@/data';
import { AnimatedHeroVisual } from './AnimatedHeroVisual';
import styles from './ServiceDetailPage.module.css';

interface DetailList { title: string; items: string[]; }
interface RelatedService { title: string; description: string; href: string; }

interface ServiceDetailPageProps {
  visualKey: string;
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
  heroPoints?: string[];
  process?: ServiceProcessStep[];
  faqs?: ServiceFaq[];
}

type ServiceTheme = CSSProperties & {
  '--service-accent': string;
  '--service-accent-2': string;
  '--service-surface': string;
  '--service-dark': string;
};

type LayoutVariant = 'standard' | 'reverse' | 'editorial' | 'wide';

const visualThemes: Record<string, { theme: ServiceTheme; layout: LayoutVariant }> = {
  'free-llc-registration': { theme: { '--service-accent': '#2563eb', '--service-accent-2': '#22d3ee', '--service-surface': '#f4f8ff', '--service-dark': '#061126' }, layout: 'standard' },
  'llc-formation': { theme: { '--service-accent': '#7c3aed', '--service-accent-2': '#38bdf8', '--service-surface': '#f8f5ff', '--service-dark': '#100a2b' }, layout: 'reverse' },
  'ein-application': { theme: { '--service-accent': '#0891b2', '--service-accent-2': '#60a5fa', '--service-surface': '#f1fbfd', '--service-dark': '#06212b' }, layout: 'editorial' },
  'itin-application': { theme: { '--service-accent': '#4f46e5', '--service-accent-2': '#2dd4bf', '--service-surface': '#f5f5ff', '--service-dark': '#0c1232' }, layout: 'wide' },
  'registered-agent': { theme: { '--service-accent': '#0f766e', '--service-accent-2': '#38bdf8', '--service-surface': '#f1faf8', '--service-dark': '#061f20' }, layout: 'reverse' },
  'reseller-certificate': { theme: { '--service-accent': '#c2410c', '--service-accent-2': '#facc15', '--service-surface': '#fff8f1', '--service-dark': '#281006' }, layout: 'editorial' },
  'state-tax-filing': { theme: { '--service-accent': '#0369a1', '--service-accent-2': '#2dd4bf', '--service-surface': '#f2f9fc', '--service-dark': '#061d2c' }, layout: 'wide' },
  'form-1065-filing': { theme: { '--service-accent': '#7c3aed', '--service-accent-2': '#f472b6', '--service-surface': '#fbf5ff', '--service-dark': '#190826' }, layout: 'reverse' },
  'form-1120-filing': { theme: { '--service-accent': '#1d4ed8', '--service-accent-2': '#a3e635', '--service-surface': '#f5f8ff', '--service-dark': '#071533' }, layout: 'standard' },
  'form-1120-proforma-5472': { theme: { '--service-accent': '#4338ca', '--service-accent-2': '#22d3ee', '--service-surface': '#f5f5ff', '--service-dark': '#0d1031' }, layout: 'editorial' },
  'form-1040-nr-filing': { theme: { '--service-accent': '#0f766e', '--service-accent-2': '#60a5fa', '--service-surface': '#f2fbf9', '--service-dark': '#052421' }, layout: 'reverse' },
  'form-5472-filing': { theme: { '--service-accent': '#be123c', '--service-accent-2': '#fb7185', '--service-surface': '#fff5f7', '--service-dark': '#290710' }, layout: 'wide' },
  'paypal-account': { theme: { '--service-accent': '#0070e0', '--service-accent-2': '#00a8ea', '--service-surface': '#f2f8ff', '--service-dark': '#041b35' }, layout: 'standard' },
  'stripe-account': { theme: { '--service-accent': '#635bff', '--service-accent-2': '#a5b4fc', '--service-surface': '#f6f5ff', '--service-dark': '#100d35' }, layout: 'reverse' },
  'wise-account': { theme: { '--service-accent': '#15803d', '--service-accent-2': '#9fe870', '--service-surface': '#f3fbf4', '--service-dark': '#06250f' }, layout: 'editorial' },
  'payoneer-account': { theme: { '--service-accent': '#c2410c', '--service-accent-2': '#ffb000', '--service-surface': '#fff7f1', '--service-dark': '#291005' }, layout: 'wide' },
};

const defaultHeroPoints = ['Clear service scope', 'Organized document checklist', 'Visible next-step guidance'];
const defaultProcess: ServiceProcessStep[] = [
  { title: 'Initial review', description: 'We confirm the service scope and the context relevant to your request.' },
  { title: 'Information collection', description: 'You receive a focused checklist for the details and documents commonly required.' },
  { title: 'Preparation and review', description: 'The information is organized and checked for obvious gaps before the next action.' },
  { title: 'Progress and next steps', description: 'We communicate the outcome, pending items, and practical follow-up requirements.' },
];
const listIcons = [ClipboardCheck, ShieldCheck, FileCheck2];

export function ServiceDetailPage({
  visualKey,
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
  heroPoints = defaultHeroPoints,
  process = defaultProcess,
  faqs = [],
}: ServiceDetailPageProps) {
  const visualTheme = visualThemes[visualKey] ?? visualThemes['free-llc-registration'];

  return (
    <main className={styles.page} style={visualTheme.theme} data-visual={visualKey} data-layout={visualTheme.layout}>
      <section className={styles.hero} data-layout={visualTheme.layout}>
        <div aria-hidden="true" className={styles.heroGrid} />
        <div aria-hidden="true" className={styles.heroGlow} />
        <Container className={styles.heroContainer}>
          <Link href={overviewHref} className={styles.backLink}><ArrowLeft aria-hidden="true" />{overviewLabel}</Link>
          <div className={styles.heroLayout} data-layout={visualTheme.layout}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{category}</span>
              <h1>{title}</h1>
              <p className={styles.heroDescription}>{description}</p>
              <div className={styles.heroActions}>
                <Link href="/contact-us" className={buttonStyles({ size: 'lg' })}>Get Free Consultation <ArrowRight aria-hidden="true" /></Link>
                <Link href={overviewHref} className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Explore Related Services</Link>
              </div>
            </div>
            <div className={styles.visualWrap}><AnimatedHeroVisual compact visualKey={visualKey} title={title} points={heroPoints} /></div>
          </div>
        </Container>
      </section>

      <section className={styles.detailsSection}>
        <Container>
          <div className={styles.assuranceStrip}>
            <div><ClipboardCheck aria-hidden="true" /><span><strong>Clear requirements</strong><small>Know what to prepare</small></span></div>
            <div><ShieldCheck aria-hidden="true" /><span><strong>Careful handling</strong><small>Organized information review</small></span></div>
            <div><Globe2 aria-hidden="true" /><span><strong>Remote coordination</strong><small>Support for global founders</small></span></div>
          </div>

          <div className={styles.contentLayout} data-layout={visualTheme.layout}>
            <div className={styles.primaryContent}>
              <article className={styles.summaryCard}><span><FileText aria-hidden="true" /></span><div><p>{summaryLabel}</p><h2>A focused service path for your request</h2><div>{summary}</div></div></article>
              <div className={styles.listGrid}>
                {lists.map((list, index) => {
                  const Icon = listIcons[index % listIcons.length];
                  return <article key={list.title} className={styles.listCard}><span className={styles.listIcon}><Icon aria-hidden="true" /></span><h2>{list.title}</h2><ul>{list.items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" /><span>{item}</span></li>)}</ul></article>;
                })}
              </div>
            </div>

            <aside className={styles.guidanceCard}><span><MessageSquareText aria-hidden="true" /></span><p className={styles.guidanceEyebrow}>Speak with our team</p><h2>Not sure what applies?</h2><p>Share your business, ownership, residency, and current-document context. We will help organize the next practical questions before you proceed.</p><Link href="/contact-us" className={buttonStyles({ size: 'md', className: styles.fullButton })}>Discuss Your Requirements <ArrowRight aria-hidden="true" /></Link><div className={styles.notice}>{notice}</div></aside>
          </div>
        </Container>
      </section>

      <section className={styles.processSection}>
        <Container><div className={styles.sectionIntro}><span>How the service works</span><h2>A structured path from inquiry to next steps</h2><p>Every request is different, but the working process stays clear and organized.</p></div><div className={styles.processGrid}>{process.map((step, index) => <article key={step.title} className={styles.processCard}><span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></Container>
      </section>

      {faqs.length > 0 ? <section className={styles.faqSection}><Container><div className={styles.sectionIntro}><span>Common questions</span><h2>Helpful context before you begin</h2></div><div className={styles.faqGrid}>{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></Container></section> : null}

      <section className={styles.relatedSection}>
        <Container><div className={styles.relatedHeading}><div><span>Related services</span><h2>Continue building your support plan</h2></div><Link href={overviewHref}>{overviewLabel}<ArrowRight aria-hidden="true" /></Link></div><div className={styles.relatedGrid}>{related.map((item) => <Link key={item.href} href={item.href} className={styles.relatedCard}><span><FileCheck2 aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.description}</p><strong>View service <ArrowRight aria-hidden="true" /></strong></Link>)}</div><div className={styles.finalCta}><div><span>Ready when you are</span><h2>Get a clear starting point for your request.</h2><p>No obligation. Tell us what you need and we will help organize the next steps.</p></div><Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>Request a Free Consultation <ArrowRight aria-hidden="true" /></Link></div></Container>
      </section>
    </main>
  );
}
