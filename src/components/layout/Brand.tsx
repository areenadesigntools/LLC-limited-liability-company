import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface BrandProps {
  className?: string;
  inverse?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

export function Brand({ className, inverse = false, compact = false, onClick }: BrandProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label="LLC Limited Liability Company home"
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-glow">
        <span
          aria-hidden="true"
          className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"
        />
        <Building2 aria-hidden="true" className="size-5" strokeWidth={2.2} />
      </span>
      {!compact && (
        <span className="min-w-0">
          <span
            className={cn(
              'block font-display text-base font-bold leading-none tracking-[-0.02em]',
              inverse ? 'text-white' : 'text-primary-dark'
            )}
          >
            LLC
          </span>
          <span
            className={cn(
              'mt-1 block text-[0.63rem] font-semibold uppercase tracking-[0.16em]',
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
