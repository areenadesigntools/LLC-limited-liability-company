import Link from 'next/link';
import { ArrowRight, Check, Globe2, Languages, MessageCircle, UsersRound } from 'lucide-react';
import { buttonStyles, Container, SectionIntro } from '@/components/ui';

const points = [
  'Support for non-U.S. residents and global founders',
  'Remote communication through email, phone, and WhatsApp',
  'Guidance adapted to cross-border documentation needs',
];

export function GlobalSupport() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-[31rem]">
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.14),rgba(37,99,235,.025)_46%,transparent_69%)]"
            />
            <div
              aria-hidden="true"
              className="animate-orbit absolute inset-[13%] rounded-full border border-dashed border-blue-300"
            >
              <span className="absolute left-[13%] top-[4%] grid size-10 place-items-center rounded-xl border border-blue-200 bg-white text-electric shadow-card">
                <Languages className="size-4" />
              </span>
              <span className="absolute bottom-[6%] right-[9%] grid size-10 place-items-center rounded-xl border border-blue-200 bg-white text-electric shadow-card">
                <MessageCircle className="size-4" />
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-[27%] grid place-items-center rounded-full border border-blue-200 bg-navy-900 text-white shadow-[0_30px_80px_-32px_rgba(37,99,235,.72)]"
            >
              <div className="text-center">
                <Globe2 className="mx-auto size-12 text-cyan-200 sm:size-16" strokeWidth={1.4} />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Global access
                </p>
              </div>
            </div>
            <div className="absolute bottom-[16%] left-[2%] flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card backdrop-blur">
              <span className="icon-shell size-10">
                <UsersRound aria-hidden="true" className="size-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-primary-dark">Remote-first</p>
                <p className="mt-1 text-[0.68rem] text-muted">Founder support</p>
              </div>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Global entrepreneur support"
              title="Build in the United States, wherever you are"
              description="You do not need to navigate every formation and compliance question alone. We help international entrepreneurs organize the process and understand the next steps."
            />
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-blue-50 text-electric">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className={buttonStyles({ size: 'lg', className: 'mt-9' })}>
              Discuss Your Needs
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
