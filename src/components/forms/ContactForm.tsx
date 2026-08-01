'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactForm } from '@/lib/validations';
import { Button, Input, Select, Textarea, Checkbox, Card } from '@/components/ui';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ContactFormComponentProps {
  onSuccess?: () => void;
  className?: string;
}

export const ContactFormComponent: React.FC<ContactFormComponentProps> = ({
  onSuccess,
  className,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null) as { error?: string } | null;

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
          onSuccess?.();
        }, 3000);
      } else {
        throw new Error(result?.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={cn('overflow-hidden border-white/70 bg-white p-5 sm:p-8', className)}>
      <div className="mb-7 border-b border-slate-200 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-electric">
          Free consultation request
        </p>
        <h2 className="mt-2 text-2xl text-primary-dark">How can we help?</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Required fields are validated before your inquiry is securely submitted.
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
              <a className="font-semibold text-electric underline-offset-2 hover:underline" href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </>
          }
          error={errors.consent?.message}
          {...register('consent')}
        />

        {submitStatus === 'success' && (
          <div
            className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="mt-0.5 size-5 shrink-0" />
            <span>Message sent successfully! We&apos;ll be in touch soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
            role="alert"
          >
            <AlertCircle className="mt-0.5 size-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
          {isSubmitting ? 'Sending securely...' : 'Send Inquiry'}
        </Button>
      </form>
    </Card>
  );
};
