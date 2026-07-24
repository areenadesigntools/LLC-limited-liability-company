'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactForm } from '@/lib/validations';
import { Button, Input, Select, Textarea, Checkbox, Card, CardContent } from '@/components/ui';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormComponentProps {
  onSuccess?: () => void;
}

export const ContactFormComponent: React.FC<ContactFormComponentProps> = ({ onSuccess }) => {
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

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
          onSuccess?.();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 000-0000"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <Select
            label="Service of Interest"
            options={[
              { value: 'free-llc', label: 'Free LLC Registration' },
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
          label="I agree to be contacted and to the Privacy Policy"
          error={errors.consent?.message}
          {...register('consent')}
        />

        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! We'll be in touch soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
};
