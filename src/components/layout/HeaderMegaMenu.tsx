import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  FileClock,
  FileDigit,
  FileText,
  Globe2,
  Landmark,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  UserRoundCheck,
  WalletCards,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { HeaderMenuEntry, HeaderMenuId } from './headerNavigation';

const formationIcons: Record<string, LucideIcon> = {
  'free-llc': FileCheck2,
  'llc-formation': Building2,
  'ein-application': CreditCard,
  'itin-application': UserRoundCheck,
  'registered-agent': ShieldCheck,
  'reseller-certificate': PackageCheck,
};

const taxIcons: Record<string, LucideIcon> = {
  'state-tax-filing': Landmark,
  'form-1065': FileDigit,
  'form-1120': FileText,
  'form-1120-proforma': ReceiptText,
  'form-1040-nr': FileClock,
  'form-5472': ShieldCheck,
};

const paymentIcons: Record<string, LucideIcon> = {
  paypal: WalletCards,
  stripe: CreditCard,
  wise: Globe2,
  payoneer: CircleDollarSign,
};

const menuContent: Record<
  HeaderMenuId,
  {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  }
> = {
  formation: {
    eyebrow: 'Build your U.S. company',
    title: 'Formation essentials',
    description: 'A structured path from company registration to foundational business documents.',
    cta: 'Explore Formation Services',
    href: '/llc-formation',
  },
  tax: {
    eyebrow: 'Filing and reporting support',
    title: 'Tax & compliance',
    description: 'Organized assistance for common federal and state filing categories.',
    cta: 'Explore Tax Services',
    href: '/tax-services',
  },
  payment: {
    eyebrow: 'Application readiness',
    title: 'Payment account setup',
    description: 'Documentation and setup guidance for global payment platforms.',
    cta: 'Explore Payment Assistance',
    href: '/payment-accounts',
  },
};

const menuVisuals: Record<HeaderMenuId, { src: string; alt: string }> = {
  formation: {
    src: '/images/Business Information.webp',
    alt: 'Business information and U.S. company compliance services',
  },
  tax: {
    src: '/images/Tax Services Mega Manu.webp',
    alt: 'Tax services, filing checklist, and calculator',
  },
  payment: {
    src: '/images/Payment Account mega manu.webp',
    alt: 'Secure global payment account setup services',
  },
};

function MenuVisual({ menu }: { menu: HeaderMenuId }) {
  const visual = menuVisuals[menu];

  return (
    <div className="group relative min-h-72 overflow-hidden rounded-2xl border border-blue-300/15 bg-[#050d1b] shadow-[inset_0_1px_rgba(255,255,255,.06),0_22px_60px_-34px_rgba(37,99,235,.75)]">
      <div aria-hidden="true" className="absolute inset-0 dark-grid opacity-45" />
      <div
        aria-hidden="true"
        className="absolute inset-x-[12%] top-0 h-24 rounded-full bg-blue-500/18 blur-3xl"
      />
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(max-width: 1024px) 34vw, 390px"
        className="relative z-10 object-contain p-1.5 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl shadow-[inset_0_0_34px_rgba(2,8,23,.35)] ring-1 ring-inset ring-white/[0.035]"
      />
    </div>
  );
}

function getIcon(menu: HeaderMenuId, id: string) {
  if (menu === 'formation') return formationIcons[id] ?? FileCheck2;
  if (menu === 'tax') return taxIcons[id] ?? FileText;
  return paymentIcons[id] ?? WalletCards;
}

interface HeaderMegaMenuProps {
  menu: HeaderMenuId;
  entries: HeaderMenuEntry[];
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onNavigate: () => void;
}

export function HeaderMegaMenu({
  menu,
  entries,
  isOpen,
  onEnter,
  onLeave,
  onNavigate,
}: HeaderMegaMenuProps) {
  const content = menuContent[menu];
  const isPayment = menu === 'payment';

  return (
    <div
      id={`desktop-${menu}-menu`}
      role="region"
      aria-label={`${content.title} navigation`}
      aria-hidden={!isOpen}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        'absolute left-1/2 top-[calc(100%+0.7rem)] z-[80] -translate-x-1/2 transition-[opacity,transform,filter] duration-200',
        isPayment ? 'w-[min(64rem,calc(100vw-4rem))]' : 'w-[min(74rem,calc(100vw-4rem))]',
        isOpen
          ? 'visible translate-y-0 opacity-100 blur-none'
          : 'invisible -translate-y-1.5 opacity-0 blur-[2px]'
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-4 w-24 -translate-x-1/2 bg-gradient-to-b from-[#07101f] via-navy-950 to-navy-950 [clip-path:polygon(42%_0,58%_0,66%_100%,34%_100%)]"
      />
      <div className="relative overflow-hidden rounded-[1.4rem] border border-cyan-200/15 bg-navy-950/98 p-2 shadow-[0_34px_100px_-30px_rgba(2,8,23,.95),0_0_0_1px_rgba(37,99,235,.08)] backdrop-blur-2xl">
        <span
          aria-hidden="true"
          className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent"
        />
        <div
          className={cn(
            'grid gap-2',
            isPayment ? 'grid-cols-[1.25fr_.75fr]' : 'grid-cols-[1.38fr_.62fr]'
          )}
        >
          <div className="p-5">
            <div className="flex items-end justify-between gap-5 border-b border-white/8 pb-5">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-cyan-200">
                  {content.eyebrow}
                </p>
                <h2 className="mt-2 text-xl text-white">{content.title}</h2>
                <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-400">
                  {content.description}
                </p>
              </div>
              <Link
                href={content.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={onNavigate}
                className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-bold text-blue-200 hover:text-cyan-100"
              >
                {content.cta}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className={cn('mt-4 grid gap-2', isPayment ? 'grid-cols-2' : 'grid-cols-2')}>
              {entries.map((entry) => {
                const Icon = getIcon(menu, entry.id);
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    data-mega-entry
                    tabIndex={isOpen ? 0 : -1}
                    onClick={onNavigate}
                    className="group flex min-h-[5.1rem] items-start gap-3 rounded-xl border border-transparent p-3 transition duration-200 hover:border-blue-300/12 hover:bg-blue-500/[0.075] focus-visible:bg-blue-500/[0.075]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#2563eb] bg-[#2563eb] text-white shadow-[0_10px_24px_-14px_rgba(37,99,235,.9)] transition group-hover:border-blue-300 group-hover:bg-[#2563eb] group-hover:text-white">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-sm font-bold text-slate-100 group-hover:text-white">
                        {entry.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </span>
                      <span className="mt-1 line-clamp-2 block text-[0.67rem] leading-5 text-slate-500">
                        {entry.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <MenuVisual menu={menu} />
        </div>
      </div>
    </div>
  );
}
