import type { SVGProps } from 'react';

type BrandIconProps = SVGProps<SVGSVGElement>;

export const socialIconToneClasses = {
  Facebook:
    'border-blue-400/25 bg-blue-500/10 text-blue-300 hover:border-blue-300/70 hover:bg-[#1877f2] hover:text-white hover:shadow-[0_10px_28px_-12px_rgba(24,119,242,.9)]',
  LinkedIn:
    'border-sky-400/25 bg-sky-500/10 text-sky-300 hover:border-sky-300/70 hover:bg-[#0a66c2] hover:text-white hover:shadow-[0_10px_28px_-12px_rgba(10,102,194,.9)]',
  Instagram:
    'border-pink-400/25 bg-pink-500/10 text-pink-300 hover:border-pink-300/70 hover:bg-[#d946ef] hover:text-white hover:shadow-[0_10px_28px_-12px_rgba(217,70,239,.9)]',
  WhatsApp:
    'border-emerald-400/25 bg-emerald-500/10 text-emerald-300 hover:border-emerald-300/70 hover:bg-[#16a66a] hover:text-white hover:shadow-[0_10px_28px_-12px_rgba(22,166,106,.9)]',
} as const;

const sharedProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function FacebookIcon(props: BrandIconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function LinkedInIcon(props: BrandIconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function InstagramIcon(props: BrandIconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
