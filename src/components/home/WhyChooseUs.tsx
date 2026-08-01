import Image from 'next/image';
import { Container } from '@/components/ui';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    title: 'Transparent',
    description:
      'Clear requirements, pricing guidance, and next steps before your service begins.',
    image: '/images/LLC Formation Card Banner.webp',
    alt: 'LLC formation documents arranged on a professional desk',
  },
  {
    title: 'Structured',
    description:
      'One organized process for sharing information, reviewing documents, and tracking progress.',
    image: '/images/EIN Application Card Banner.webp',
    alt: 'EIN application documents prepared for review',
  },
  {
    title: 'Secure',
    description:
      'Your business and personal information is handled carefully throughout every request.',
    image: '/images/Registered Agent Card Banner.webp',
    alt: 'Professional registered agent service workspace',
  },
  {
    title: 'Reliable',
    description:
      'Practical updates and responsive support keep your U.S. business journey moving forward.',
    image: '/images/Reseller Certificate Banner.webp',
    alt: 'Reseller certificate and business compliance materials',
  },
];

function Connector({ side }: { side: 'left' | 'right' }) {
  return (
    <svg
      className={`${styles.connector} ${styles[side]}`}
      viewBox="0 0 120 78"
      aria-hidden="true"
    >
      <path d="M20 2C18 35 17 54 52 55C71 55 74 73 52 75C36 76 32 62 43 57C56 51 77 62 99 68" />
      <path className={styles.arrow} d="m91 62 9 6-10 3" />
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-title">
      <Container>
        <header className={styles.heading}>
          <h2 id="why-choose-us-title">Why Choose Us?</h2>
          <p>Four reasons founders trust us with their next U.S. business step.</p>
        </header>

        <div className={styles.timeline}>
          {reasons.map((reason, index) => (
            <div key={reason.title} className={styles.item}>
              <article className={styles.card}>
                <div className={styles.content}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>

                <div className={styles.imageWrap}>
                  <Image
                    src={reason.image}
                    alt={reason.alt}
                    fill
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 34vw, 360px"
                  />
                  <span aria-hidden="true" />
                </div>
              </article>

              {index < reasons.length - 1 ? (
                <Connector side={index % 2 === 0 ? 'left' : 'right'} />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
