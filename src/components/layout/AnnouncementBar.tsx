import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui';

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Free LLC registration announcement"
      className="relative overflow-hidden border-b border-blue-400/15 bg-electric text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,.1)_48%,transparent_76%)]"
      />
      <Container>
        <div className="relative flex min-h-10 items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
          <Sparkles aria-hidden="true" className="hidden size-4 text-cyan-100 sm:block" />
          <span>
            Free LLC registration assistance
            <span className="hidden sm:inline"> — you pay only applicable government or state fees.</span>
          </span>
          <Link
            href="/free-llc-registration"
            className="inline-flex shrink-0 items-center gap-1 border-b border-white/60 font-bold hover:border-white"
          >
            Learn more
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </Container>
    </aside>
  );
}
