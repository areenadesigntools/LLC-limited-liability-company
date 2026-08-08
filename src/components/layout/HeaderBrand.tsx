import Image from 'next/image';
import Link from 'next/link';
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
      className={cn(
        'group inline-flex shrink-0 items-center',
        inverse && 'rounded-xl bg-white/95 px-2 py-1.5 shadow-[0_14px_35px_-20px_rgba(37,99,235,.75)]',
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
          className="size-10 object-contain"
          priority
        />
      ) : (
        <Image
          src="/images/llc-logo.png"
          alt=""
          width={4244}
          height={1253}
          className="h-auto w-[11.25rem] object-contain sm:w-[12.5rem] lg:w-[13.25rem]"
          priority
        />
      )}
    </Link>
  );
}
