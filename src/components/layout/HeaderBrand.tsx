import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface HeaderBrandProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
  inverse?: boolean;
}

export function HeaderBrand({
  className,
  onClick,
  compact = false,
  inverse = false,
}: HeaderBrandProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group inline-flex shrink-0 items-center gap-2.5', className)}
      aria-label="LLC Limited Liability Company home"
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-cyan-200/25 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white shadow-[0_10px_30px_-12px_rgba(37,99,235,.9)]">
        <span
          aria-hidden="true"
          className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
        />
        <span
          aria-hidden="true"
          className="absolute -right-3 -top-3 size-7 rounded-full bg-cyan-200/35 blur-md transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
        />
        <Building2 aria-hidden="true" className="relative size-[1.1rem]" strokeWidth={2.25} />
      </span>
      {!compact && (
        <span className="min-w-0">
          <span
            className={cn(
              'block whitespace-nowrap font-display text-[1.05rem] font-bold leading-none tracking-[-0.025em]',
              inverse ? 'text-white' : 'text-primary-dark'
            )}
          >
            LLC
          </span>
          <span
            className={cn(
              'mt-1 block whitespace-nowrap text-[0.56rem] font-bold uppercase tracking-[0.17em]',
              inverse ? 'text-slate-400' : 'text-slate-500'
            )}
          >
            Limited Liability Company
          </span>
        </span>
      )}
    </Link>
  );
}
