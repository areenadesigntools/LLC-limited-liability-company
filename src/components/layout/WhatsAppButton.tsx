'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, generateMessageForService } from '@/lib/utils';
import { cn } from '@/lib/cn';

interface WhatsAppButtonProps {
  serviceSlug?: string;
  customMessage?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  serviceSlug,
  customMessage,
  className,
  size = 'md',
}) => {
  const message = customMessage || generateMessageForService(serviceSlug || 'general');
  const url = getWhatsAppUrl(message);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none z-30',
        sizeClasses[size],
        className
      )}
      aria-label="Contact on WhatsApp"
      title="Contact on WhatsApp"
    >
      <MessageCircle className={iconSizes[size]} />
    </Link>
  );
};

export default WhatsAppButton;
