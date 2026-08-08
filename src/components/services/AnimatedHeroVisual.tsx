import Image from 'next/image';
import {
  BadgeDollarSign,
  Building2,
  CalendarDays,
  CircleHelp,
  FileDigit,
  FileText,
  Fingerprint,
  Globe2,
  Landmark,
  MailCheck,
  Network,
  ReceiptText,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Users,
  WalletCards,
} from 'lucide-react';
import styles from './AnimatedHeroVisual.module.css';

const formationImages: Record<string, string> = {
  'free-llc-registration': '/images/Free LLC Registration Card Banner.webp',
  'llc-formation': '/images/LLC Formation Card Banner.webp',
  'ein-application': '/images/EIN Application Card Banner.webp',
  'itin-application': '/images/ITIN Application Card Banner.webp',
  'registered-agent': '/images/Registered Agent Card Banner.webp',
  'reseller-certificate': '/images/Reseller Certificate Banner.webp',
};

const paymentLogos: Record<string, string> = {
  'paypal-account': '/images/payment-logos/paypal.svg',
  'stripe-account': '/images/payment-logos/stripe.svg',
  'wise-account': '/images/payment-logos/wise.svg',
  'payoneer-account': '/images/payment-logos/payoneer.svg',
};

const sceneConfig = {
  'state-tax-filing': { icon: CalendarDays, code: 'STATE', label: 'State filing map', meta: 'Nexus · returns · records' },
  'form-1065-filing': { icon: Users, code: '1065', label: 'Partnership return', meta: 'Members · K-1 · capital' },
  'form-1120-filing': { icon: Building2, code: '1120', label: 'Corporate return', meta: 'Income · assets · tax' },
  'form-1120-proforma-5472': { icon: Network, code: '1120 + 5472', label: 'Foreign-owned reporting', meta: 'Owner · entity · transactions' },
  'form-1040-nr-filing': { icon: Globe2, code: '1040-NR', label: 'Individual return', meta: 'Residency · income · treaty' },
  'form-5472-filing': { icon: FileDigit, code: '5472', label: 'Reportable transactions', meta: 'Related parties · records' },
  'tax-services': { icon: ReceiptText, code: 'TAX', label: 'U.S. filing pathways', meta: 'Federal · state · reporting' },
  'payment-accounts': { icon: WalletCards, code: 'PAY', label: 'Payment account setup', meta: 'Identity · business · banking' },
  'about-us': { icon: Globe2, code: 'GLOBAL', label: 'Founder support network', meta: 'Formation · tax · payments' },
  'contact-us': { icon: MailCheck, code: 'HELLO', label: 'Consultation desk', meta: 'Tell us what you need' },
  faq: { icon: CircleHelp, code: 'FAQ', label: 'Answer navigator', meta: 'Clear · useful · contextual' },
  privacy: { icon: Fingerprint, code: 'DATA', label: 'Information controls', meta: 'Collect · use · protect' },
  terms: { icon: Scale, code: 'TERMS', label: 'Service framework', meta: 'Scope · duties · limits' },
  refund: { icon: RefreshCcw, code: 'REFUND', label: 'Payment review flow', meta: 'Review · decision · route' },
} as const;

type SceneKey = keyof typeof sceneConfig;

interface AnimatedHeroVisualProps {
  visualKey: string;
  title: string;
  points?: string[];
}

function FormationScene({ visualKey, title }: { visualKey: string; title: string }) {
  return (
    <div className={styles.imageDeck}>
      <span className={styles.deckBack} />
      <span className={styles.deckMiddle} />
      <div className={styles.imageCard}>
        <Image src={formationImages[visualKey]} alt="" fill sizes="(max-width: 768px) 86vw, 430px" className={styles.heroImage} />
        <span className={styles.imageShade} />
        <span className={styles.imageLabel}><ShieldCheck aria-hidden="true" />Verified service path</span>
      </div>
      <span className={styles.floatingChip} data-position="top"><Landmark aria-hidden="true" />U.S. business</span>
      <span className={styles.floatingChip} data-position="bottom"><FileText aria-hidden="true" />{title}</span>
    </div>
  );
}

function PaymentScene({ visualKey, title }: { visualKey: string; title: string }) {
  return (
    <div className={styles.paymentTerminal}>
      <span className={styles.terminalBack} />
      <div className={styles.terminalScreen}>
        <div className={styles.terminalBar}><span /><span /><span /></div>
        <div className={styles.logoPlate}><Image src={paymentLogos[visualKey]} alt={`${title} logo`} width={180} height={64} /></div>
        <div className={styles.verificationRow}><ShieldCheck aria-hidden="true" /><span><small>Application status</small><strong>Ready for review</strong></span><i /></div>
        <div className={styles.terminalLines}><span /><span /><span /></div>
      </div>
      <span className={styles.paymentCard}><BadgeDollarSign aria-hidden="true" /><small>Business profile</small><strong>Aligned</strong></span>
      <span className={styles.paymentPulse} />
    </div>
  );
}

function DocumentScene({ visualKey, points }: { visualKey: SceneKey; points: string[] }) {
  const config = sceneConfig[visualKey];
  const Icon = config.icon;

  return (
    <div className={styles.documentOrbit}>
      <span className={styles.orbitRing} />
      <span className={styles.orbitDot} />
      <div className={styles.documentBack} />
      <div className={styles.documentCard}>
        <div className={styles.documentHead}><span><Icon aria-hidden="true" /></span><small>{config.code}</small></div>
        <p>{config.label}</p>
        <strong>{config.meta}</strong>
        <div className={styles.formLines}><span /><span /><span /><span /></div>
        <div className={styles.documentSeal}><ShieldCheck aria-hidden="true" />Review ready</div>
      </div>
      <span className={styles.satellite} data-position="left"><FileText aria-hidden="true" /><small>Records</small><strong>{points[0] ?? 'Organized'}</strong></span>
      <span className={styles.satellite} data-position="right"><Network aria-hidden="true" /><small>Next step</small><strong>{points[1] ?? 'Mapped'}</strong></span>
    </div>
  );
}

function SymbolScene({ visualKey, points }: { visualKey: SceneKey; points: string[] }) {
  const config = sceneConfig[visualKey];
  const Icon = config.icon;
  return (
    <div className={styles.symbolScene}>
      <span className={styles.symbolRing} data-ring="outer" />
      <span className={styles.symbolRing} data-ring="inner" />
      <div className={styles.symbolCore}><Icon aria-hidden="true" /><small>{config.code}</small><strong>{config.label}</strong></div>
      <span className={styles.symbolPanel} data-position="one"><ShieldCheck aria-hidden="true" /><small>{points[0] ?? config.meta}</small></span>
      <span className={styles.symbolPanel} data-position="two"><Network aria-hidden="true" /><small>{points[1] ?? 'Clear next steps'}</small></span>
      <span className={styles.symbolPanel} data-position="three"><FileText aria-hidden="true" /><small>{points[2] ?? 'Practical support'}</small></span>
    </div>
  );
}

export function AnimatedHeroVisual({ visualKey, title, points = [] }: AnimatedHeroVisualProps) {
  const isFormation = Boolean(formationImages[visualKey]);
  const isPayment = Boolean(paymentLogos[visualKey]);
  const isDocument = visualKey in sceneConfig && (visualKey.includes('tax') || visualKey.includes('form-'));
  const sceneKey = (visualKey in sceneConfig ? visualKey : 'about-us') as SceneKey;

  return (
    <div className={styles.scene} data-scene={visualKey} aria-hidden={isPayment ? undefined : true}>
      <span className={styles.ambient} />
      <span className={styles.floor} />
      {isFormation ? <FormationScene visualKey={visualKey} title={title} /> : null}
      {isPayment ? <PaymentScene visualKey={visualKey} title={title} /> : null}
      {isDocument ? <DocumentScene visualKey={sceneKey} points={points} /> : null}
      {!isFormation && !isPayment && !isDocument ? <SymbolScene visualKey={sceneKey} points={points} /> : null}
    </div>
  );
}
