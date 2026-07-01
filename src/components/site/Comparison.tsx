import { Check, Minus, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/site/Services";

const rows = [
  { label: "Choose the right state for you", diy: false, generic: "partial", us: true },
  { label: "EIN without an SSN", diy: "partial", generic: "partial", us: true },
  { label: "Plain-English help at every step", diy: false, generic: "partial", us: true },
  { label: "Ongoing compliance built in", diy: false, generic: false, us: true },
  { label: "Transparent pricing upfront", diy: "na", generic: false, us: true },
];

function Cell({ value }: { value: boolean | "partial" | "na" }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-success" aria-label="Yes" />;
  if (value === "partial")
    return <Minus className="mx-auto h-5 w-5 text-amber" aria-label="Limited" />;
  if (value === "na")
    return <span className="text-xs text-muted">n/a</span>;
  return <X className="mx-auto h-5 w-5 text-muted/60" aria-label="No" />;
}

export function Comparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="Three ways to do this. One that actually fits."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-line shadow-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="p-4 font-medium text-slate sm:p-5">Capability</th>
                <th className="p-4 text-center font-medium text-slate sm:p-5">
                  Do it yourself
                </th>
                <th className="p-4 text-center font-medium text-slate sm:p-5">
                  Generic filer
                </th>
                <th className="bg-brand/5 p-4 text-center font-semibold text-brand sm:p-5">
                  Us
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={i % 2 ? "bg-white" : "bg-surface/40"}
                >
                  <td className="p-4 text-ink sm:p-5">{r.label}</td>
                  <td className="p-4 text-center sm:p-5">
                    <Cell value={r.diy as boolean} />
                  </td>
                  <td className="p-4 text-center sm:p-5">
                    <Cell value={r.generic as boolean} />
                  </td>
                  <td className="bg-brand/5 p-4 text-center sm:p-5">
                    <Cell value={r.us as boolean} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
