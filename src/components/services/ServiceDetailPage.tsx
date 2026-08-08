import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { buttonStyles, Container } from '@/components/ui';
import type { ServiceFaq, ServiceProcessStep } from '@/data';
import styles from './ServiceDetailPage.module.css';

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
  heroPoints?: string[];
  process?: ServiceProcessStep[];
  faqs?: ServiceFaq[];
}

const defaultHeroPoints = [
  'Clear service scope',
  'Organized document checklist',
  'Visible next-step guidance',
];

const defaultProcess: ServiceProcessStep[] = [
  { title: 'Initial review', description: 'We confirm the service scope and the context relevant to your request.' },
  { title: 'Information collection', description: 'You receive a focused checklist for the details and documents commonly required.' },
  { title: 'Preparation and review', description: 'The information is organized and checked for obvious gaps before the next action.' },
  { title: 'Progress and next steps', description: 'We communicate the outcome, pending items, and practical follow-up requirements.' },
];

const listIcons = [ClipboardCheck, ShieldCheck, FileCheck2];

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
  heroPoints = defaultHeroPoints,
  process = defaultProcess,
  faqs = [],
}: ServiceDetailPageProps) {
  return (
    <>
      <section className={styles.hero}>
        <div aria-hidden="true" className={styles.heroGrid} />
        <div aria-hidden="true" className={styles.heroGlow} />
        <Container className={styles.heroContainer}>
          <Link href={overviewHref} className={styles.backLink}>
            <ArrowLeft aria-hidden="true" />
            {overviewLabel}
          </Link>

          <div className={styles.heroLayout}>
            <div>
              <span className={styles.eyebrow}>{category}</span>
              <h1>{title}</h1>
              <p className={styles.heroDescription}>{description}</p>
              <div className={styles.heroActions}>
                <Link href="/contact-us" className={buttonStyles({ size: 'lg' })}>
                  Get Free Consultation
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href={overviewHref}
                  className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                >
                  Explore Related Services
                </Link>
              </div>
            </div>

            <aside className={styles.blueprint} aria-label={`${title} service highlights`}>
              <div className={styles.blueprintTop}>
                <span>
                  <Sparkles aria-hidden="true" />
                  Service blueprint
                </span>
                <BadgeCheck aria-hidden="true" />
              </div>
              <div className={styles.blueprintTitle}>
                <span className={styles.blueprintIcon}>
                  <FileText aria-hidden="true" />
                </span>
                <div>
                  <small>Structured support</small>
                  <strong>{title}</strong>
                </div>
              </div>
              <ul>
                {heroPoints.map((point) => (
                  <li key={point}>
                    <Check aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className={styles.blueprintNote}>Clear scope · careful review · practical next steps</p>
            </aside>
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

          <div className={styles.contentLayout}>
            <div>
              <article className={styles.summaryCard}>
                <span><FileText aria-hidden="true" /></span>
                <div>
                  <p>{summaryLabel}</p>
                  <h2>A focused service path for your request</h2>
                  <div>{summary}</div>
                </div>
              </article>

              <div className={styles.listGrid}>
                {lists.map((list, index) => {
                  const Icon = listIcons[index % listIcons.length];
                  return (
                    <article key={list.title} className={styles.listCard}>
                      <span className={styles.listIcon}><Icon aria-hidden="true" /></span>
                      <h2>{list.title}</h2>
                      <ul>
                        {list.items.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className={styles.guidanceCard}>
              <span><MessageSquareText aria-hidden="true" /></span>
              <p className={styles.guidanceEyebrow}>Speak with our team</p>
              <h2>Not sure what applies?</h2>
              <p>
                Share your business, ownership, residency, and current-document context. We will
                help organize the next practical questions before you proceed.
              </p>
              <Link href="/contact-us" className={buttonStyles({ size: 'md', className: styles.fullButton })}>
                Discuss Your Requirements
                <ArrowRight aria-hidden="true" />
              </Link>
              <div className={styles.notice}>{notice}</div>
            </aside>
          </div>
        </Container>
      </section>

      <section className={styles.processSection}>
        <Container>
          <div className={styles.sectionIntro}>
            <span>How the service works</span>
            <h2>A structured path from inquiry to next steps</h2>
            <p>Every request is different, but the working process stays clear and organized.</p>
          </div>
          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <article key={step.title} className={styles.processCard}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {faqs.length > 0 ? (
        <section className={styles.faqSection}>
          <Container>
            <div className={styles.sectionIntro}>
              <span>Common questions</span>
              <h2>Helpful context before you begin</h2>
            </div>
            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className={styles.relatedSection}>
        <Container>
          <div className={styles.relatedHeading}>
            <div>
              <span>Related services</span>
              <h2>Continue building your support plan</h2>
            </div>
            <Link href={overviewHref}>
              {overviewLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.href} href={item.href} className={styles.relatedCard}>
                <span><FileCheck2 aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>View service <ArrowRight aria-hidden="true" /></strong>
              </Link>
            ))}
          </div>

          <div className={styles.finalCta}>
            <div>
              <span>Ready when you are</span>
              <h2>Get a clear starting point for your request.</h2>
              <p>No obligation. Tell us what you need and we will help organize the next steps.</p>
            </div>
            <Link href="/contact-us" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>
              Request a Free Consultation
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
