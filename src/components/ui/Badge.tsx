import React from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const variants = {
      primary: 'border-blue-200 bg-blue-50 text-blue-700',
      success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      warning: 'border-amber-200 bg-amber-50 text-amber-800',
      danger: 'border-red-200 bg-red-50 text-red-700',
      neutral: 'border-slate-200 bg-slate-100 text-slate-700',
      dark: 'border-blue-400/20 bg-blue-500/10 text-cyan-100',
    };

    const sizes = {
      sm: 'px-2.5 py-1 text-[0.68rem] uppercase tracking-wider',
      md: 'px-3 py-1.5 text-xs uppercase tracking-wider',
      lg: 'px-4 py-2 text-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-full border font-bold',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
