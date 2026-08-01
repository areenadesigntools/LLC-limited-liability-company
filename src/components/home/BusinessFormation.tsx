import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import styles from './BusinessFormation.module.css';

const cardBanners: Record<string, string> = {
  'free-llc': '/images/Free LLC Registration Card Banner.webp',
  'llc-formation': '/images/LLC Formation Card Banner.webp',
  'ein-application': '/images/EIN Application Card Banner.webp',
  'itin-application': '/images/ITIN Application Card Banner.webp',
  'registered-agent': '/images/Registered Agent Card Banner.webp',
  'reseller-certificate': '/images/Reseller Certificate Banner.webp',
};

export function BusinessFormation() {
  return (
    <section className={styles.section} aria-labelledby="business-information-title">
      <div className={styles.ambient} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 id="business-information-title">Business Information</h2>
          <p className={styles.intro}>
            Practical support to form, identify and operate your company with confidence.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => {
            return (
              <Link
                key={service.id}
                href={service.href}
                className={styles.card}
                aria-label={`Explore ${service.title}`}
              >
                <div className={styles.illustration}>
                  <Image
                    src={cardBanners[service.id]}
                    alt={`${service.title} service banner`}
                    fill
                    sizes="(max-width: 800px) 33vw, (max-width: 1400px) 30vw, 26rem"
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <span className={styles.cta}>
                    Learn more
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
