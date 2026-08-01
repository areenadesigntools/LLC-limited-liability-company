'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface FaqPreviewItem {
  id: string;
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqPreviewItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-button-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-18 w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-primary-dark hover:bg-slate-50 sm:px-7"
              >
                <span>{item.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-electric">
                  <ChevronDown
                    aria-hidden="true"
                    className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-7"
            >
              <p className="max-w-3xl text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
