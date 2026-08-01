import React from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  badge,
  className,
  ...props
}) => (
  <div className={cn('mb-12', centered && 'text-center', className)} {...props}>
    {badge && <span className="eyebrow mb-3">{badge}</span>}
    <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-4xl">{title}</h2>
    {subtitle && (
      <p className={cn('max-w-2xl text-lg text-muted', centered && 'mx-auto')}>{subtitle}</p>
    )}
  </div>
);

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-[80rem]',
  };

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  className,
  ...props
}) => {
  const colSizes = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const gapSizes = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={cn('grid', colSizes[cols], gapSizes[gap], className)} {...props}>
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => (
  <section className={cn('py-20 md:py-24 lg:py-32', className)} {...props}>
    {children}
  </section>
);

interface SectionIntroProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
  ...props
}) => (
  <div
    className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    {...props}
  >
    {eyebrow && (
      <span className={cn('eyebrow mb-5', tone === 'dark' && 'eyebrow-dark')}>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
        {eyebrow}
      </span>
    )}
    <h2
      className={cn(
        'text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl',
        tone === 'dark' ? 'text-white' : 'text-primary-dark'
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          'mt-5 text-base leading-7 sm:text-lg',
          tone === 'dark' ? 'text-slate-300' : 'text-muted'
        )}
      >
        {description}
      </p>
    )}
  </div>
);
