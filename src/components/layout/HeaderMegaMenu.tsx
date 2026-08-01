import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Check,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  FileClock,
  FileDigit,
  FileText,
  Globe2,
  Landmark,
  LockKeyhole,
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

function FormationVisual() {
  return (
    <div className="relative h-full min-h-72 overflow-hidden rounded-2xl border border-blue-300/12 bg-[#081326] p-6">
      <div aria-hidden="true" className="absolute inset-0 dark-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-44 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cyan-200">
            Launch workspace
          </span>
          <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Guided
          </span>
        </div>
        <div className="header-visual-float mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-blue-500 text-white shadow-glow">
              <Building2 aria-hidden="true" className="size-4.5" />
            </span>
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.14em] text-slate-500">
                Company foundation
              </p>
              <p className="mt-1 text-sm font-bold text-white">U.S. business launch</p>
            </div>
          </div>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
          </div>
          <div className="mt-3 flex justify-between text-[0.56rem] font-semibold text-slate-500">
            <span>Formation</span>
            <span>Tax ID</span>
            <span>Compliance</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {['Documents organized', 'Next steps visible'].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.025] px-3 py-3 text-[0.65rem] font-semibold text-slate-300"
            >
              <Check aria-hidden="true" className="size-3.5 text-cyan-300" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaxVisual() {
  const rows = [
    { label: 'Information review', state: 'Ready' },
    { label: 'Filing category', state: 'Mapped' },
    { label: 'Document checklist', state: 'Secure' },
  ];

  return (
    <div className="relative h-full min-h-72 overflow-hidden rounded-2xl border border-cyan-300/12 bg-[#071423] p-6">
      <div aria-hidden="true" className="absolute inset-0 dark-grid opacity-45" />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-12 size-48 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cyan-200">
            Compliance dashboard
          </span>
          <LockKeyhole aria-hidden="true" className="size-4 text-blue-300" />
        </div>
        <div className="header-visual-float mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
          <div className="space-y-2.5">
            {rows.map((row, index) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[0.025] px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-lg bg-blue-500/12 text-[0.6rem] font-bold text-blue-200">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-200">{row.label}</span>
                </div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-emerald-300">
                  {row.state}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-blue-300/10 bg-blue-500/[0.055] p-3">
          <ShieldCheck aria-hidden="true" className="size-4 text-cyan-300" />
          <p className="text-[0.65rem] leading-5 text-slate-400">
            Filing needs depend on entity, ownership, income, and residency.
          </p>
        </div>
      </div>
    </div>
  );
}

function PaymentVisual() {
  return (
    <div className="relative h-full min-h-64 overflow-hidden rounded-2xl border border-blue-300/12 bg-[#081326] p-6">
      <div aria-hidden="true" className="absolute inset-0 dark-grid opacity-45" />
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full border border-dashed border-blue-300/15"
      />
      <div
        aria-hidden="true"
        className="header-orbit absolute inset-[23%] rounded-full border border-cyan-300/12"
      >
        <span className="absolute left-0 top-1/2 size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(34,211,238,.45)]" />
      </div>
      <div className="relative grid h-full min-h-52 place-items-center">
        <div className="grid size-24 place-items-center rounded-[1.6rem] border border-blue-300/18 bg-gradient-to-br from-blue-500/25 to-cyan-300/5 shadow-[0_26px_70px_-28px_rgba(37,99,235,.85)] backdrop-blur">
          <Globe2 aria-hidden="true" className="size-9 text-cyan-100" strokeWidth={1.4} />
        </div>
        {[
          'left-3 top-7',
          'right-3 top-14',
          'bottom-7 left-10',
          'bottom-4 right-10',
        ].map((position, index) => (
          <span
            key={position}
            className={cn(
              'absolute grid size-9 place-items-center rounded-xl border border-white/10 bg-navy-800 text-blue-200 shadow-xl',
              position
            )}
          >
            {index % 2 === 0 ? (
              <WalletCards aria-hidden="true" className="size-3.5" />
            ) : (
              <CircleDollarSign aria-hidden="true" className="size-3.5" />
            )}
          </span>
        ))}
      </div>
      <p className="relative text-center text-[0.62rem] font-medium leading-5 text-slate-500">
        Setup assistance only. Provider approval is not guaranteed.
      </p>
    </div>
  );
}

function MenuVisual({ menu }: { menu: HeaderMenuId }) {
  if (menu === 'formation') return <FormationVisual />;
  if (menu === 'tax') return <TaxVisual />;
  return <PaymentVisual />;
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
