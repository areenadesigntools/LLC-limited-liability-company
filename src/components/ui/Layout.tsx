import React from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
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
}) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)} {...props}>
      {badge && (
        <div className="mb-3 inline-block">
          <span className="px-3 py-1 text-sm font-semibold text-primary-blue bg-blue-100 rounded-full">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

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
    xl: 'max-w-7xl',
  };

  return (
    <div 
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)} 
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
    <div 
      className={cn('grid', colSizes[cols], gapSizes[gap], className)} 
      {...props}
    >
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <section
      className={cn('py-16 md:py-24 lg:py-32', className)}
      {...props}
    >
      {children}
    </section>
  );
};
