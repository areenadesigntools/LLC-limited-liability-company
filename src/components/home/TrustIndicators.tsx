'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BadgeCheck, Building2, FileKey2, ReceiptText } from 'lucide-react';
import { useInView, useReducedMotion } from 'framer-motion';
import styles from './TrustIndicators.module.css';

const launchSteps = [
  {
    number: '01',
    title: 'LLC Formation',
    href: '/llc-formation',
    icon: Building2,
  },
  {
    number: '02',
    title: 'EIN & ITIN',
    href: '/ein-application',
    icon: FileKey2,
  },
  {
    number: '03',
    title: 'Tax Compliance',
    href: '/tax-services',
    icon: ReceiptText,
  },
  {
    number: '04',
    title: 'Business Ready',
    href: '/payment-accounts',
    icon: BadgeCheck,
  },
] as const;

export function TrustIndicators() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % launchSteps.length);
    }, 2100);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isInView, reduceMotion]);

  const progress = `${(activeIndex / (launchSteps.length - 1)) * 100}%`;

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Your U.S. business launch path">
      <div className={styles.shell}>
        <div className={styles.journey}>
          <div className={styles.connector} aria-hidden="true">
            <span className={styles.connectorTrack} />
            <span className={styles.connectorProgress} style={{ width: progress }} />
            <span className={styles.connectorSpark} style={{ left: progress }} />
          </div>

          <div className={styles.steps}>
            {launchSteps.map((step, index) => {
              const Icon = step.icon;
              const state = index === activeIndex ? 'active' : index < activeIndex ? 'complete' : 'upcoming';

              return (
                <Link
                  key={step.title}
                  href={step.href}
                  className={styles.step}
                  data-state={state}
                  aria-current={state === 'active' ? 'step' : undefined}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className={styles.nodeFrame}>
                    <span className={styles.nodeOrbit} aria-hidden="true">
                      <i />
                    </span>
                    <span className={styles.node}>
                      <small>{step.number}</small>
                      <Icon aria-hidden="true" />
                    </span>
                  </span>
                  <strong>{step.title}</strong>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
