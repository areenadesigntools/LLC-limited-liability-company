import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'className'> = {}) {
  const baseStyles =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-55';

  const variants = {
    primary:
      'border border-blue-400/25 bg-electric text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_22px_50px_-22px_rgba(37,99,235,.75)]',
    secondary:
      'border border-white/65 bg-white text-primary-dark shadow-card hover:-translate-y-0.5 hover:bg-blue-50',
    outline:
      'border border-electric/35 bg-electric/5 text-electric hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10',
    ghost:
      'border border-transparent text-slate-700 hover:bg-slate-100 hover:text-primary-dark',
    danger: 'border border-red-500/20 bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'min-h-13 px-6 py-3 text-base',
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {isLoading && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
      {children}
    </button>
  )
);

Button.displayName = 'Button';
