import { Clock3, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { ContactFormComponent } from '@/components/forms/ContactForm';
import { Container, SectionIntro } from '@/components/ui';
import { contactInfo } from '@/data/company';
import { getWhatsAppUrl } from '@/lib/utils';

export function LeadInquiry() {
  return (
    <section id="inquiry" className="relative overflow-hidden bg-navy-900 py-20 md:py-28 lg:py-32">
      <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-55" />
      <div
        aria-hidden="true"
        className="absolute -left-48 top-24 size-[28rem] rounded-full bg-blue-600/13 blur-[110px]"
      />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <SectionIntro
              eyebrow="Service inquiry"
              title="Tell us what you are building"
              description="Share the service you need and the questions you have. We will review your inquiry and respond with practical next steps."
              tone="dark"
            />
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 rounded-2xl border border-white/9 bg-white/[0.03] p-4 text-slate-300 hover:border-blue-400/25 hover:bg-blue-500/7"
              >
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-cyan-300" />
                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">Email</span>
                  <span className="mt-1 block break-words text-sm font-semibold">
                    {contactInfo.email}
                  </span>
                </span>
              </a>
              <a
                href={getWhatsAppUrl('Hello, I would like to discuss a U.S. business service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-white/9 bg-white/[0.03] p-4 text-slate-300 hover:border-emerald-400/25 hover:bg-emerald-400/6"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-emerald-300"
                />
                <span>
                  <span className="block text-xs text-slate-500">WhatsApp</span>
                  <span className="mt-1 block text-sm font-semibold">Start a conversation</span>
                </span>
              </a>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex items-center gap-3 text-xs leading-5 text-slate-400">
                <ShieldCheck aria-hidden="true" className="size-4 shrink-0 text-blue-300" />
                Secure inquiry handling
              </div>
              <div className="flex items-center gap-3 text-xs leading-5 text-slate-400">
                <Clock3 aria-hidden="true" className="size-4 shrink-0 text-blue-300" />
                Hours: 10:00 AM–07:00 PM
              </div>
            </div>
          </div>

          <ContactFormComponent className="shadow-[0_35px_90px_-42px_rgba(37,99,235,.72)]" />
        </div>
      </Container>
    </section>
  );
}
