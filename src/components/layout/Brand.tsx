import Image from 'next/image';
import Link from 'next/link';
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
      className={cn(
        'group inline-flex items-center',
        inverse && 'rounded-2xl bg-white/95 px-3 py-2 shadow-[0_18px_42px_-24px_rgba(37,99,235,.72)]',
        className
      )}
      aria-label="LLC Limited Liability Company home"
    >
      {compact ? (
        <Image
          src="/images/llc-favicon.png"
          alt=""
          width={1286}
          height={1253}
          className="size-11 object-contain"
        />
      ) : (
        <Image
          src="/images/llc-logo.png"
          alt=""
          width={4244}
          height={1253}
          className="h-auto w-[13.5rem] object-contain sm:w-[15rem]"
        />
      )}
    </Link>
  );
}
