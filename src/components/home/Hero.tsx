import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import desktopHeroBanner from '../../../public/images/LLC Hero banner.webp';
import mobileHeroBanner from '../../../public/images/LLC Hero banner mobile.webp';
import styles from './HeroDesktopBanner.module.css';

const serviceLinks = [
  {
    label: 'Business Formation',
    href: '/llc-formation',
    desktopTop: '17.9%',
    mobileTop: '63.4%',
  },
  {
    label: 'Tax Filing',
    href: '/tax-services',
    desktopTop: '36.2%',
    mobileTop: '72%',
  },
  {
    label: 'Payment Setup',
    href: '/payment-accounts',
    desktopTop: '54.4%',
    mobileTop: '80.65%',
  },
  {
    label: 'Ongoing Support',
    href: '/contact-us',
    desktopTop: '72.7%',
    mobileTop: '89.3%',
  },
];

function DesktopHeroBanner() {
  return (
    <section
      aria-label="U.S. business services"
      className="relative hidden overflow-hidden bg-[#eaf3fd] lg:block"
    >
      <h1 className="sr-only">Start your U.S. business with the right support.</h1>
      <Image
        src={desktopHeroBanner}
        alt="U.S. business support for entrepreneurs, including formation, tax filing, payment setup and ongoing compliance support."
        sizes="(min-width: 1024px) 100vw, 1px"
        fetchPriority="high"
        loading="eager"
        className="h-auto w-full"
      />

      <div className="absolute left-[4.75%] top-[83.3%] z-10 grid h-[9.4%] w-[30.8%] grid-cols-[0.93fr_1.07fr] gap-[4.5%]">
        <Link
          href="/free-llc-registration"
          className={`${styles.primaryAction} group flex h-full min-w-0 items-center justify-center gap-[5%] overflow-hidden rounded-[clamp(.4rem,.75vw,.75rem)] border border-blue-400/30 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-[4%] font-semibold text-white shadow-[0_14px_34px_-16px_rgba(37,99,235,.9)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(37,99,235,.95)] focus-visible:-translate-y-0.5`}
          style={{ fontSize: 'clamp(0.625rem, 1.02vw, 1.125rem)' }}
        >
          <span className="relative z-10 whitespace-nowrap">Get Started</span>
          <ArrowRight
            aria-hidden="true"
            className="relative z-10 size-[clamp(.75rem,1.25vw,1.35rem)] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/contact-us"
          className={`${styles.secondaryAction} group flex h-full min-w-0 items-center justify-center rounded-[clamp(.4rem,.75vw,.75rem)] border border-blue-600 bg-white/85 px-[3%] font-semibold text-blue-700 shadow-[0_12px_30px_-20px_rgba(15,23,42,.65)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-800 hover:shadow-[0_18px_38px_-20px_rgba(37,99,235,.65)] focus-visible:-translate-y-0.5`}
          style={{ fontSize: 'clamp(0.625rem, 1.02vw, 1.125rem)' }}
        >
          <span className="whitespace-nowrap">Book a Free Consultation</span>
        </Link>
      </div>

      {serviceLinks.map(({ label, href, desktopTop }) => (
        <Link
          key={label}
          href={href}
          aria-label={`Explore ${label}`}
          data-hero-service={label}
          className={`${styles.cardLink} group absolute left-[78.05%] z-10 h-[16.5%] w-[18.9%] overflow-hidden rounded-[clamp(.55rem,1.15vw,1.2rem)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-600`}
          style={{ top: desktopTop }}
        >
          <span className="sr-only">{label}</span>
          <span className="absolute right-[4.5%] top-1/2 grid size-[clamp(1.1rem,1.8vw,2rem)] -translate-y-1/2 translate-x-1 place-items-center rounded-full bg-blue-600 text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
            <ArrowUpRight
              aria-hidden="true"
              className="size-[clamp(.65rem,1vw,1rem)]"
            />
          </span>
        </Link>
      ))}
    </section>
  );
}

function MobileHeroBanner() {
  return (
    <section
      aria-label="U.S. business services"
      className="overflow-hidden bg-[#00142c] lg:hidden"
    >
      <div className="relative mx-auto w-full max-w-[32rem] overflow-hidden">
        <h1 className="sr-only">Start your U.S. business with the right support.</h1>
        <Image
          src={mobileHeroBanner}
          alt="U.S. business support for entrepreneurs, including formation, tax filing, payment setup and ongoing compliance support."
          sizes="(max-width: 512px) 100vw, 512px"
          fetchPriority="high"
          loading="eager"
          className="h-auto w-full"
        />

        <div className="absolute left-[5.8%] top-[50.9%] z-10 grid h-[10.7%] w-[88.4%] grid-rows-2 gap-[8.5%]">
          <Link
            href="/free-llc-registration"
            className={`${styles.primaryAction} group flex h-full min-h-0 items-center justify-center gap-[5%] overflow-hidden rounded-[clamp(.45rem,2.3vw,.8rem)] border border-blue-300/60 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-[5%] font-semibold text-white shadow-[0_14px_34px_-16px_rgba(37,99,235,.95)] transition duration-300 active:scale-[0.99] active:bg-blue-700`}
            style={{ fontSize: 'clamp(0.72rem, 3.15vw, 1rem)' }}
          >
            <span className="relative z-10 whitespace-nowrap">Get Started</span>
            <ArrowRight
              aria-hidden="true"
              className="relative z-10 size-[clamp(.85rem,4vw,1.25rem)] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact-us"
            className={`${styles.secondaryAction} flex h-full min-h-0 items-center justify-center rounded-[clamp(.45rem,2.3vw,.8rem)] border border-blue-500 bg-[#00142c]/88 px-[4%] font-semibold text-blue-500 shadow-[0_12px_30px_-20px_rgba(37,99,235,.8)] backdrop-blur-sm transition duration-300 active:scale-[0.99] active:bg-blue-950`}
            style={{ fontSize: 'clamp(0.72rem, 3.15vw, 1rem)' }}
          >
            <span className="whitespace-nowrap">Book a Free Consultation</span>
          </Link>
        </div>

        {serviceLinks.map(({ label, href, mobileTop }) => (
          <Link
            key={label}
            href={href}
            aria-label={`Explore ${label}`}
            data-hero-mobile-service={label}
            className={`${styles.cardLink} absolute left-[5.8%] z-10 h-[7.85%] w-[88.4%] overflow-hidden rounded-[clamp(.6rem,2.6vw,1rem)] active:bg-blue-500/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-500`}
            style={{ top: mobileTop }}
          >
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <>
      <DesktopHeroBanner />
      <MobileHeroBanner />
    </>
  );
}
