'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Check,
  Fingerprint,
  Landmark,
  MessageCircle,
  Plus,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import { Container } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';
import styles from './GlobalSupport.module.css';

const services = [
  {
    id: 'llc-formation',
    icon: Building2,
    label: 'LLC Formation',
    description: 'Professional company formation support.',
    href: '/llc-formation',
    tag: 'Starting point',
  },
  {
    id: 'ein-application',
    icon: Landmark,
    label: 'EIN Application',
    description: 'Employer tax identification assistance.',
    href: '/ein-application',
  },
  {
    id: 'itin-application',
    icon: Fingerprint,
    label: 'ITIN Application',
    description: 'Taxpayer ID support for eligible individuals.',
    href: '/itin-application',
  },
  {
    id: 'registered-agent',
    icon: ShieldCheck,
    label: 'Registered Agent',
    description: 'Registered-agent service for your LLC.',
    href: '/registered-agent',
  },
  {
    id: 'tax-services',
    icon: ReceiptText,
    label: 'Tax & Compliance',
    description: 'Federal, state, and compliance support.',
    href: '/tax-services',
  },
  {
    id: 'payment-accounts',
    icon: WalletCards,
    label: 'Payment Accounts',
    description: 'PayPal, Stripe, Wise, and account support.',
    href: '/payment-accounts',
  },
] as const;

type ServiceId = (typeof services)[number]['id'];

export function GlobalSupport() {
  const [selectedIds, setSelectedIds] = useState<ServiceId[]>(['llc-formation']);
  const selectedServices = services.filter((service) => selectedIds.includes(service.id));
  const serviceNames = selectedServices.map((service) => service.label).join(', ');
  const whatsappUrl = getWhatsAppUrl(
    `Hello, I would like a custom service plan for: ${serviceNames}. Please guide me on the requirements and next steps.`,
  );

  const toggleService = (serviceId: ServiceId) => {
    setSelectedIds((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
  };

  return (
    <section className={styles.section} aria-labelledby="business-stack-title">
      <Container>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>
            <Sparkles aria-hidden="true" />
            Build your service plan
          </span>
          <h2 id="business-stack-title">
            Build the support package your business <span>actually needs</span>
          </h2>
          <p>
            Select the services you need and send one organized request to our team for clear next
            steps.
          </p>
        </header>

        <div className={styles.builder}>
          <div className={styles.servicePanel}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.stepLabel}>Step 01</span>
                <h3>Select your services</h3>
              </div>
              <span className={styles.selectionHint}>Choose one or more</span>
            </div>

            <div className={styles.serviceGrid} aria-label="Services for your custom plan">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedIds.includes(service.id);

                return (
                  <button
                    key={service.id}
                    type="button"
                    className={`${styles.serviceCard} ${isSelected ? styles.serviceSelected : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => toggleService(service.id)}
                  >
                    <span className={styles.cardControl} aria-hidden="true">
                      {isSelected ? <Check /> : <Plus />}
                    </span>
                    <span className={styles.serviceIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    {'tag' in service ? <span className={styles.cardTag}>{service.tag}</span> : null}
                    <strong>{service.label}</strong>
                    <small>{service.description}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className={styles.summaryPanel} aria-live="polite">
            <div className={styles.summaryTop}>
              <span className={styles.summaryIcon}>
                <Building2 aria-hidden="true" />
              </span>
              <div>
                <span>Step 02</span>
                <h3>Your business stack</h3>
              </div>
              <span className={styles.serviceCount}>
                {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'}
              </span>
            </div>

            <div className={styles.summaryDivider} />

            {selectedServices.length > 0 ? (
              <div className={styles.selectedList}>
                {selectedServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <Link key={service.id} href={service.href}>
                      <span className={styles.selectedNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.selectedIcon}>
                        <Icon aria-hidden="true" />
                      </span>
                      <span>{service.label}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Plus aria-hidden="true" />
                <strong>Select at least one service</strong>
                <span>Your custom request will appear here.</span>
              </div>
            )}

            <div className={styles.planBenefits}>
              <span>
                <Check aria-hidden="true" /> One organized request
              </span>
              <span>
                <Check aria-hidden="true" /> Clear next-step guidance
              </span>
            </div>

            <a
              href={selectedServices.length > 0 ? whatsappUrl : undefined}
              target={selectedServices.length > 0 ? '_blank' : undefined}
              rel={selectedServices.length > 0 ? 'noopener noreferrer' : undefined}
              className={`${styles.primaryAction} ${selectedServices.length === 0 ? styles.actionDisabled : ''}`}
              aria-disabled={selectedServices.length === 0}
              tabIndex={selectedServices.length === 0 ? -1 : undefined}
            >
              <MessageCircle aria-hidden="true" />
              Get My Custom Service Plan
              <ArrowUpRight aria-hidden="true" />
            </a>

            <Link href="/contact-us" className={styles.secondaryAction}>
              Book Free Consultation
              <ArrowUpRight aria-hidden="true" />
            </Link>

            <p className={styles.summaryNote}>
              No payment is collected here. Your selected requirements are reviewed first.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
