import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, generateMessageForService } from '@/lib/utils';
import { cn } from '@/lib/cn';

interface WhatsAppButtonProps {
  serviceSlug?: string;
  customMessage?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function WhatsAppButton({
  serviceSlug,
  customMessage,
  className,
  size = 'md',
}: WhatsAppButtonProps) {
  const message = customMessage || generateMessageForService(serviceSlug || 'general');
  const url = getWhatsAppUrl(message);

  const sizes = {
    sm: 'size-12',
    md: 'size-13 sm:size-14',
    lg: 'size-15 sm:size-16',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group fixed bottom-6 right-6 z-40 hidden place-items-center rounded-2xl border border-emerald-300/30 bg-emerald-500 text-white shadow-[0_18px_42px_-14px_rgba(16,185,129,.72)] hover:-translate-y-1 hover:bg-emerald-600 sm:grid',
        sizes[size],
        className
      )}
      aria-label="Contact LLC Limited Liability Company on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-signal rounded-2xl bg-emerald-400/40 blur-md"
      />
      <MessageCircle aria-hidden="true" className="size-6 sm:size-7" />
    </a>
  );
}

export default WhatsAppButton;
