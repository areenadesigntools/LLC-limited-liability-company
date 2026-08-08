import Link from 'next/link';
import {
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { contactInfo, socialLinks, companyInfo, legalDisclaimer } from '@/data/company';
import { services } from '@/data/services';
import { taxServices } from '@/data/taxServices';
import { paymentProviders } from '@/data/paymentProviders';
import { Container } from '@/components/ui';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  socialIconToneClasses,
} from '@/components/ui/BrandIcons';
import { Brand } from './Brand';
import styles from './Footer.module.css';

const socialIconMap = {
  Facebook: FacebookIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  MessageCircle,
};

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Free LLC Registration', href: '/free-llc-registration' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-4 text-[0.68rem] font-bold uppercase leading-5 tracking-[0.1em] text-white sm:mb-5 sm:text-sm sm:tracking-[0.14em]">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="group -mx-2 inline-flex items-start gap-2 rounded-lg px-2 py-1 text-xs leading-5 text-slate-400 hover:translate-x-1 hover:bg-blue-500/10 hover:text-white sm:text-sm"
            >
              <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full border border-blue-400/25 bg-blue-500/10 text-blue-300 shadow-[0_7px_18px_-12px_rgba(37,99,235,.9)] transition duration-200 group-hover:scale-110 group-hover:border-blue-300 group-hover:bg-[#2563eb] group-hover:text-white group-hover:shadow-[0_0_14px_rgba(37,99,235,.55)]">
                <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
              </span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={`${styles.footer} relative overflow-hidden text-white`}>
      <div aria-hidden="true" className={styles.skylineBackdrop} />
      <div
        aria-hidden="true"
        className="absolute -left-36 top-40 size-96 rounded-full bg-blue-600/12 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 pb-7 pt-72 sm:gap-x-8 lg:grid-cols-12 lg:gap-8 lg:pb-8">
          <div className="col-span-2 lg:col-span-4 lg:pr-10">
            <Brand inverse />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">{companyInfo.description}</p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${link.name}`}
                    className={`group grid size-10 place-items-center rounded-xl border transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${socialIconToneClasses[link.name as keyof typeof socialIconToneClasses]}`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4 transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterLinks
              title="Business Formation"
              links={services.map((service) => ({ label: service.title, href: service.href }))}
            />
          </div>
          <div className="lg:col-span-2">
            <FooterLinks
              title="Tax & Compliance"
              links={taxServices.map((service) => ({ label: service.name, href: service.href }))}
            />
          </div>
          <div className="lg:col-span-2">
            <FooterLinks
              title="Payment Accounts"
              links={paymentProviders.map((provider) => ({
                label: provider.name,
                href: provider.href,
              }))}
            />
          </div>
          <div className="lg:col-span-2">
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>
        </div>

        <div
          className={`${styles.contactPanel} grid gap-3 p-4 md:grid-cols-2 lg:grid-cols-[0.95fr_0.8fr_1.25fr_1fr]`}
        >
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} data-tone="cyan">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Office</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{contactInfo.address}</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} data-tone="green">
              <Phone aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Call us</p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="mt-1 block text-sm text-slate-400 hover:text-white"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} data-tone="sky">
              <Mail aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-1 block break-words text-sm text-slate-400 hover:text-white"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon} data-tone="gold">
              <Clock3 aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Business hours</p>
              <p className="mt-1 text-sm text-slate-400">10:00 AM–07:00 PM (UTC+5)</p>
              <p className="mt-1 text-xs text-slate-500">Monday–Saturday</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-300" />
            <p className="text-xs leading-6 text-slate-400">
              {legalDisclaimer} LLC registration assistance is free; clients remain responsible
              for applicable government or state filing fees. Third-party account approvals and
              government processing times are outside our control.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 LLC Limited Liability Company. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
