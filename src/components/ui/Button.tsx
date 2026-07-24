import React from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, disabled, className, children, ...props }, ref) => {
    const baseStyles = 'font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2';
    
    const variants = {
      primary: 'bg-primary-blue text-white hover:bg-blue-700 focus:ring-primary-blue disabled:bg-gray-400',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300 disabled:bg-gray-300',
      outline: 'border-2 border-primary-blue text-primary-blue hover:bg-blue-50 focus:ring-primary-blue disabled:border-gray-400 disabled:text-gray-400',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300 disabled:text-gray-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 disabled:bg-gray-400',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <span className="animate-spin">⟳</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
