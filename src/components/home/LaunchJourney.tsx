'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  FileKey2,
  Landmark,
  ReceiptText,
} from 'lucide-react';
import { useInView, useReducedMotion } from 'framer-motion';
import nasaEarth from '../../../public/images/nasa-blue-marble-earth.jpg';
import styles from './LaunchJourney.module.css';

const phases = [
  { label: 'Discover', duration: 3400 },
  { label: 'United States', duration: 3800 },
  { label: 'Zoom in', duration: 2600 },
  { label: 'Launch', duration: 4400 },
] as const;

const launchSteps = [
  {
    number: '01',
    title: 'LLC Formation',
    detail: 'Build your legal foundation',
    icon: Building2,
    href: '/llc-formation',
  },
  {
    number: '02',
    title: 'EIN & ITIN',
    detail: 'Establish your tax identity',
    icon: FileKey2,
    href: '/ein-application',
  },
  {
    number: '03',
    title: 'Tax & Compliance',
    detail: 'Stay ready to operate',
    icon: ReceiptText,
    href: '/tax-services',
  },
] as const;

const starPositions = [
  ['5%', '16%', '0s'],
  ['12%', '68%', '1.4s'],
  ['19%', '34%', '2.7s'],
  ['27%', '82%', '0.7s'],
  ['36%', '13%', '2s'],
  ['42%', '61%', '3.1s'],
  ['53%', '24%', '1s'],
  ['59%', '78%', '2.2s'],
  ['67%', '9%', '0.4s'],
  ['73%', '52%', '2.9s'],
  ['82%', '20%', '1.7s'],
  ['88%', '72%', '0.9s'],
  ['94%', '39%', '2.4s'],
] as const;

export function LaunchJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.28 });
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const timer = window.setTimeout(() => {
      setPhase((current) => (current + 1) % phases.length);
    }, phases[phase].duration);

    return () => window.clearTimeout(timer);
  }, [isInView, phase, reduceMotion]);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="journey-heading">
      <h2 id="journey-heading" className="sr-only">
        Explore your U.S. business launch journey
      </h2>

      <div className={styles.browserFrame}>
        <div className={`${styles.scene} ${styles[`scenePhase${phase}`]}`}>
          <div className={styles.deepSpace} aria-hidden="true">
            {starPositions.map(([left, top, delay]) => (
              <span key={`${left}-${top}`} style={{ left, top, animationDelay: delay }} />
            ))}
          </div>

          <div className={styles.heroWords} aria-hidden={phase !== 0}>
            <span>Explore your</span>
            <strong>U.S. BUSINESS</strong>
          </div>

          <div className={styles.earthWrap} aria-hidden="true">
            <span className={styles.earthAura} />
            <span className={styles.orbitOne} />
            <span className={styles.orbitTwo} />
            <div className={styles.realEarth}>
              <Image
                src={nasaEarth}
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 86vw"
                className={styles.earthImage}
              />
            </div>
            <span className={styles.usaBeacon}>
              <i />
            </span>
          </div>

          <div className={styles.countryLabel} aria-hidden={phase !== 1}>
            <span>Selected destination</span>
            <strong>UNITED STATES</strong>
            <small>38.9072° N&nbsp;&nbsp; 77.0369° W</small>
          </div>

          <aside className={styles.journeyTimeline} aria-hidden={phase !== 1}>
            <p>YOUR U.S. LAUNCH PATH</p>
            <div className={styles.timelineLine} aria-hidden="true" />
            {launchSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Link key={step.title} href={step.href} className={styles.timelineStep}>
                  <span className={styles.timelineDot} />
                  <span className={styles.timelineIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <small>{step.number}</small>
                    <strong>{step.title}</strong>
                    <em>{step.detail}</em>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              );
            })}
          </aside>

          <div className={styles.zoomInterface} aria-hidden={phase !== 2}>
            <span className={styles.scanRingOne} />
            <span className={styles.scanRingTwo} />
            <span className={styles.scanCrosshair} />
            <div className={styles.zoomCaption}>
              <small>ENTERING BUSINESS ZONE</small>
              <strong>UNITED STATES</strong>
              <span>Formation pathway detected</span>
            </div>
          </div>

          <div className={styles.finalScene} aria-hidden={phase !== 3}>
            <div className={styles.finalCopy}>
              <span className={styles.finalEyebrow}>YOUR NEXT CHAPTER STARTS HERE</span>
              <h3>
                UNITED
                <strong>STATES</strong>
              </h3>
              <p>Launch your U.S. company with every essential step mapped clearly.</p>
              <div className={styles.finalChecks}>
                <span><Check aria-hidden="true" /> Guided formation</span>
                <span><Check aria-hidden="true" /> Worldwide support</span>
              </div>
            </div>

            <div className={styles.launchPanel}>
              <div className={styles.panelHeading}>
                <span className={styles.panelIcon}><Landmark aria-hidden="true" /></span>
                <span>
                  <small>BUILD YOUR U.S. COMPANY</small>
                  <strong>Start your launch</strong>
                </span>
                <CircleCheckBig aria-hidden="true" className={styles.verifiedIcon} />
              </div>

              <div className={styles.selectionRow}>
                <span>
                  <small>SERVICE</small>
                  <strong>LLC Formation</strong>
                </span>
                <ChevronDown aria-hidden="true" />
              </div>
              <div className={styles.selectionRow}>
                <span>
                  <small>ADD-ON SUPPORT</small>
                  <strong>EIN & Tax ID</strong>
                </span>
                <ChevronDown aria-hidden="true" />
              </div>

              <Link href="/free-llc-registration" className={styles.launchButton}>
                Begin free LLC assistance
                <ArrowRight aria-hidden="true" />
              </Link>
              <p className={styles.panelNote}>You pay only applicable government or state fees.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
