import type { Metadata } from 'next';
import {
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { ContactFormComponent } from '@/components/forms/ContactForm';
import { Container } from '@/components/ui';
import { contactInfo } from '@/data';
import { generateMetadata as generateSeoMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Us - LLC Limited Liability Company',
  description: 'Contact our team about U.S. business formation, tax-support, compliance, and payment-account setup assistance.',
  canonical: 'https://llclimitedliabilitycompany.com/contact-us',
});

const preparationPoints = [
  'The service or outcome you are considering',
  'Whether a business already exists and in which state',
  'Any deadline, notice, or provider request you have received',
  'The country from which you are coordinating the request',
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://llclimitedliabilitycompany.com' },
    { name: 'Contact Us', url: 'https://llclimitedliabilitycompany.com/contact-us' },
  ]);
  const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="light-grid bg-[#f5f8fd] py-14 md:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <a href={`tel:${contactInfo.phone}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-300"><span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-electric"><Phone aria-hidden="true" className="size-4.5" /></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.13em] text-slate-500">Call us</p><p className="mt-2 text-sm font-bold text-primary-dark group-hover:text-electric">{contactInfo.phone}</p></a>
            <a href={`mailto:${contactInfo.email}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-300"><span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-electric"><Mail aria-hidden="true" className="size-4.5" /></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.13em] text-slate-500">Email</p><p className="mt-2 break-words text-sm font-bold text-primary-dark group-hover:text-electric">{contactInfo.email}</p></a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald-300"><span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><MessageCircle aria-hidden="true" className="size-4.5" /></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.13em] text-slate-500">WhatsApp</p><p className="mt-2 text-sm font-bold text-primary-dark group-hover:text-emerald-600">Message our team</p></a>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"><span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-electric"><Clock3 aria-hidden="true" className="size-4.5" /></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.13em] text-slate-500">Business hours</p><p className="mt-2 text-sm font-bold text-primary-dark">Monday–Saturday</p><p className="mt-1 text-xs text-muted">{contactInfo.businessHours}</p></div>
          </div>

          <div id="contact-form" className="mt-12 scroll-mt-24 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div className="space-y-5 lg:sticky lg:top-24">
              <div><span className="eyebrow"><span className="size-1.5 rounded-full bg-current" />Prepare your inquiry</span><h2 className="mt-5 text-3xl text-primary-dark sm:text-4xl">A little context helps us guide you clearly.</h2><p className="mt-4 text-sm leading-7 text-muted">You do not need to have every document ready. Start with the key facts, and we can identify the next information needed for the selected service.</p></div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-electric">Helpful details to include</p><ul className="mt-5 space-y-3">{preparationPoints.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-electric" />{item}</li>)}</ul></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-5"><MapPin aria-hidden="true" className="size-5 text-electric" /><p className="mt-3 text-xs font-bold uppercase tracking-[.12em] text-slate-500">Office</p><p className="mt-2 text-sm leading-6 text-slate-700">{contactInfo.address}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><Globe2 aria-hidden="true" className="size-5 text-electric" /><p className="mt-3 text-xs font-bold uppercase tracking-[.12em] text-slate-500">Remote support</p><p className="mt-2 text-sm leading-6 text-slate-700">Email, phone, and WhatsApp coordination across time zones.</p></div></div>
            </div>
            <ContactFormComponent className="shadow-[0_30px_85px_-48px_rgba(37,99,235,.55)]" />
          </div>
        </Container>
      </section>
    </>
  );
}
