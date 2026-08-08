import type { Metadata } from 'next';
import {
  ArrowDown,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
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

      <section className="relative isolate overflow-hidden bg-[#050b16] py-20 text-white md:py-28">
        <div aria-hidden="true" className="dark-grid absolute inset-0 -z-20 opacity-70" />
        <div aria-hidden="true" className="absolute -right-44 -top-52 -z-10 size-[42rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.72fr]">
            <div><span className="eyebrow eyebrow-dark"><Send aria-hidden="true" className="size-3.5" />Start a conversation</span><h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.02] tracking-[-.055em] text-white sm:text-5xl lg:text-7xl">Talk through your next U.S. business step.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Share the service you need, where you are in the process, and any important timing. We will review your inquiry and help organize a practical starting point.</p><a href="#contact-form" className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-blue-400/25 bg-electric px-6 py-3 text-base font-semibold text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-500">Send an Inquiry <ArrowDown aria-hidden="true" className="size-4" /></a></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl"><div aria-hidden="true" className="dark-grid absolute inset-0 opacity-50" /><div className="relative"><div className="flex items-center justify-between"><p className="text-[.64rem] font-extrabold uppercase tracking-[.15em] text-cyan-200">Consultation desk</p><span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 text-[.6rem] font-bold text-emerald-300">Available remotely</span></div><div className="mt-6 rounded-2xl border border-white/10 bg-[#07162d]/80 p-5"><div className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-xl bg-[#2563eb] text-white shadow-glow"><MessageCircle aria-hidden="true" className="size-5" /></span><div><p className="text-[.6rem] uppercase tracking-[.13em] text-slate-500">Best first step</p><p className="mt-1 text-lg font-bold text-white">Send your service details</p></div></div></div><div className="mt-4 grid grid-cols-2 gap-3">{['Formation', 'Tax support', 'Payment setup', 'General inquiry'].map((item) => <span key={item} className="rounded-xl border border-white/8 bg-white/[.025] p-3 text-xs font-semibold text-slate-300">{item}</span>)}</div></div></div>
          </div>
        </Container>
      </section>

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
