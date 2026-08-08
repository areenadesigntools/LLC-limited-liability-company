'use client';

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactForm } from '@/lib/validations';
import { Button, Input, Select, Textarea, Checkbox, Card } from '@/components/ui';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/cn';
import { getWhatsAppUrl } from '@/lib/utils';

interface ContactFormComponentProps {
  onSuccess?: () => void;
  className?: string;
}

export const ContactFormComponent: React.FC<ContactFormComponentProps> = ({
  onSuccess,
  className,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactForm) => {
    const serviceLabels: Record<string, string> = {
      'free-llc': 'Free LLC Registration',
      'llc-formation': 'LLC Formation',
      'ein-application': 'EIN Application',
      'itin-application': 'ITIN Application',
      'tax-services': 'Tax Services',
      'payment-accounts': 'Payment Accounts',
      other: 'Other',
    };

    const whatsappMessage = [
      'Hello, I would like to submit a free consultation request.',
      '',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${serviceLabels[data.service || ''] || 'Not specified'}`,
      `Subject: ${data.subject}`,
      '',
      'Message:',
      data.message,
    ].join('\n');

    onSuccess?.();
    window.location.assign(getWhatsAppUrl(whatsappMessage));
  };

  return (
    <Card className={cn('overflow-hidden border-white/70 bg-white p-5 sm:p-8', className)}>
      <div className="mb-7 border-b border-slate-200 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-electric">
          Free consultation request
        </p>
        <h2 className="mt-2 text-2xl text-primary-dark">How can we help?</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Complete the form and continue directly to WhatsApp with your inquiry ready to send.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register('website')}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Full Name"
            placeholder="Your name"
            autoComplete="name"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <Select
            label="Service of Interest"
            options={[
              { value: 'free-llc', label: 'Free LLC Registration' },
              { value: 'llc-formation', label: 'LLC Formation' },
              { value: 'ein-application', label: 'EIN Application' },
              { value: 'itin-application', label: 'ITIN Application' },
              { value: 'tax-services', label: 'Tax Services' },
              { value: 'payment-accounts', label: 'Payment Accounts' },
              { value: 'other', label: 'Other' },
            ]}
            error={errors.service?.message}
            {...register('service')}
          />
        </div>

        <Input
          label="Subject"
          placeholder="What is this about?"
          error={errors.subject?.message}
          {...register('subject')}
        />

        <Textarea
          label="Message"
          placeholder="Tell us more about your inquiry..."
          rows={6}
          error={errors.message?.message}
          {...register('message')}
        />

        <Checkbox
          label={
            <>
              I agree to be contacted and accept the{' '}
              <Link className="font-semibold text-electric underline-offset-2 hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>
              .
            </>
          }
          error={errors.consent?.message}
          {...register('consent')}
        />

        <Button type="submit" size="lg" className="w-full">
          <MessageCircle aria-hidden="true" className="size-5" />
          Send via WhatsApp
        </Button>
      </form>
    </Card>
  );
};
