import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
} from 'lucide-react';
import { paymentProviders } from '@/data/paymentProviders';
import styles from './PaymentAssistance.module.css';

const providerVisuals: Record<string, { logo: string; label: string }> = {
  paypal: { logo: '/images/payment-logos/paypal.svg', label: 'Global checkout' },
  stripe: { logo: '/images/payment-logos/stripe.svg', label: 'Card payments' },
  wise: { logo: '/images/payment-logos/wise.svg', label: 'Multi-currency' },
  payoneer: { logo: '/images/payment-logos/payoneer.svg', label: 'Global payouts' },
};

export function PaymentAssistance() {
  return (
    <section className={styles.section} aria-labelledby="payment-accounts-title">
      <div className={styles.ambientLeft} aria-hidden="true" />
      <div className={styles.ambientRight} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Payment account assistance</span>
            <h2 id="payment-accounts-title">Payment Accounts</h2>
            <p>
              Guided setup support for trusted global payment platforms used by U.S. businesses.
            </p>
          </div>
          <Link href="/payment-accounts" className={styles.overviewLink}>
            Explore all accounts
            <ArrowRight aria-hidden="true" />
          </Link>
        </header>

        <div className={styles.flowStage}>
          <svg
            aria-hidden="true"
            className={styles.flowLine}
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="payment-flow-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="0.5" stopColor="#22d3ee" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <path
              className={styles.flowBase}
              d="M0 180 C70 180 65 28 150 28 C238 28 232 332 300 332 C370 332 364 28 450 28 C538 28 532 332 600 332 C670 332 664 28 750 28 C838 28 832 332 900 332 C970 332 964 28 1050 28 C1138 28 1132 180 1200 180"
            />
            <path
              className={styles.flowPulse}
              pathLength="1"
              d="M0 180 C70 180 65 28 150 28 C238 28 232 332 300 332 C370 332 364 28 450 28 C538 28 532 332 600 332 C670 332 664 28 750 28 C838 28 832 332 900 332 C970 332 964 28 1050 28 C1138 28 1132 180 1200 180"
            />
          </svg>

          <div className={styles.providerGrid}>
            {paymentProviders.map((provider, index) => {
              const visual = providerVisuals[provider.id];

              return (
                <Link
                  key={provider.id}
                  href={provider.href}
                  className={styles.providerCard}
                  data-position={index % 2 === 0 ? 'top' : 'bottom'}
                  aria-label={`Explore ${provider.name} setup assistance`}
                >
                  <span className={styles.cardShine} aria-hidden="true" />
                  <span className={styles.iconRing}>
                    <span className={styles.iconCore}>
                      <Image
                        src={visual.logo}
                        alt={`${provider.name} logo`}
                        width={38}
                        height={38}
                        className={styles.providerLogo}
                      />
                    </span>
                  </span>

                  <span className={styles.cardContent}>
                    <span className={styles.providerType}>{visual.label}</span>
                    <strong>{provider.name}</strong>
                    <span className={styles.providerDescription}>{provider.description}</span>
                    <span className={styles.cardLink}>
                      View setup
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.disclaimer}>
          <span aria-hidden="true" className={styles.disclaimerIcon}>
            <CreditCard />
          </span>
          <p>
            We assist with preparation and setup guidance. Eligibility, verification and approval
            decisions remain with each payment provider.
          </p>
        </div>
      </div>
    </section>
  );
}
