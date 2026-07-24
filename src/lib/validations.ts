import { z } from 'zod';

// Basic application form schema
export const baseApplicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  country: z.string().min(2, 'Please select a country'),
  selectedService: z.string().min(1, 'Please select a service'),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']),
  businessName: z.string().min(2, 'Business name is required').max(100),
  businessType: z.string().min(1, 'Please select business type'),
  businessActivity: z.string().min(10, 'Please describe business activity'),
  message: z.string().max(500, 'Message is too long').optional(),
  consent: z.boolean().refine((val) => val === true, 'You must consent to contact'),
  privacyAgreed: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

// LLC registration form schema (extends base)
export const llcRegistrationSchema = baseApplicationSchema.extend({
  preferredLLCName: z.string().min(2, 'LLC name is required'),
  alternativeLLCName: z.string().optional(),
  preferredState: z.string().min(2, 'Please select a state'),
  numberOfMembers: z.number().min(1, 'Number of members is required'),
  memberType: z.enum(['individual', 'business', 'mixed']),
  usAddressAvailability: z.boolean(),
  registeredAgentRequired: z.boolean(),
  einRequired: z.boolean(),
  businessDescription: z.string().min(10, 'Business description is required'),
});

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().optional(),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  consent: z.boolean().refine((val) => val === true, 'You must consent to contact'),
});

// Consultation form schema
export const consultationFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  country: z.string().min(2, 'Country is required'),
  preferredService: z.string().optional(),
  bestTimeToContact: z.enum(['morning', 'afternoon', 'evening']),
  consent: z.boolean().refine((val) => val === true, 'You must consent to contact'),
});

// Tax service inquiry schema
export const taxServiceInquirySchema = baseApplicationSchema.extend({
  taxServiceType: z.string().min(1, 'Please select a tax service'),
});

// Payment account inquiry schema
export const paymentAccountInquirySchema = baseApplicationSchema.extend({
  paymentProvider: z.string().min(1, 'Please select a payment provider'),
  currentlyHasAccount: z.boolean(),
});

// Newsletter signup schema
export const newsletterSchema = z.object({
  email: z.string().email('Valid email is required'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to receive updates'),
});

// EIN application schema
export const einApplicationSchema = baseApplicationSchema.extend({
  businessStructure: z.string().min(1, 'Please select business structure'),
  hasEIN: z.boolean(),
  requiresUrgentProcessing: z.boolean().optional(),
});

// ITIN application schema
export const itinApplicationSchema = baseApplicationSchema.extend({
  hasSSN: z.boolean(),
  incomeType: z.string().min(1, 'Please select income type'),
  requiresUrgentProcessing: z.boolean().optional(),
});

// Export type helpers
export type BaseApplication = z.infer<typeof baseApplicationSchema>;
export type LLCRegistration = z.infer<typeof llcRegistrationSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type ConsultationForm = z.infer<typeof consultationFormSchema>;
export type TaxServiceInquiry = z.infer<typeof taxServiceInquirySchema>;
export type PaymentAccountInquiry = z.infer<typeof paymentAccountInquirySchema>;
export type Newsletter = z.infer<typeof newsletterSchema>;
export type EINApplication = z.infer<typeof einApplicationSchema>;
export type ITINApplication = z.infer<typeof itinApplicationSchema>;
