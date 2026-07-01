import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function MobileCta() {
  return (
    <>
      {/* Floating WhatsApp (all screens) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 hidden h-13 w-13 items-center justify-center rounded-full bg-success text-white shadow-lift transition hover:-translate-y-0.5 lg:flex"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-success font-medium text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href="#contact"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand font-medium text-white"
        >
          Get quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
