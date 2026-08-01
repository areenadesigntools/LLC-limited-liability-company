import {
  ArrowRight,
  Building2,
  Check,
  FileCheck2,
  Fingerprint,
  Globe2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import styles from './HeroBusinessVisual.module.css';

const processSteps = [
  { icon: FileCheck2, label: 'Formation filing', animation: styles.statusOne },
  { icon: Fingerprint, label: 'EIN application', animation: styles.statusTwo },
  { icon: ShieldCheck, label: 'Compliance setup', animation: styles.statusThree },
];

export function HeroBusinessVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[20rem] w-full max-w-[40rem] sm:h-[25rem] lg:ml-auto lg:h-[27rem] xl:h-[29rem]"
    >
      <div
        className={`${styles.softLight} absolute inset-[7%] rounded-[35%] bg-blue-400/24 blur-3xl`}
      />

      <div className="light-grid relative h-full overflow-hidden rounded-[1.6rem] border border-white/85 bg-[linear-gradient(145deg,rgba(255,255,255,.96),rgba(237,247,255,.94))] shadow-[0_34px_90px_-42px_rgba(30,64,175,.62)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
        <div className="absolute -right-[8%] top-[10%] text-[8rem] font-bold leading-none tracking-[-0.08em] text-blue-600/[0.035] sm:text-[12rem]">
          US
        </div>

        <div className="relative flex h-full flex-col p-4 sm:p-5 lg:p-6">
          <div className="flex items-center gap-3 rounded-xl border border-blue-100/90 bg-white/78 px-3 py-2 shadow-[0_12px_35px_-28px_rgba(15,23,42,.45)] backdrop-blur-sm sm:px-4 sm:py-2.5">
            <div className="flex shrink-0 items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-navy-900 text-cyan-200 sm:size-9">
                <Globe2 className="size-4" />
              </span>
              <div>
                <p className="text-[0.52rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Starting point
                </p>
                <p className="text-[0.68rem] font-bold text-navy-900 sm:text-xs">
                  Global Founder
                </p>
              </div>
            </div>

            <div className={`${styles.entryLine} relative h-px min-w-7 flex-1 bg-blue-200`}>
              <ArrowRight className="absolute -right-1 -top-[0.42rem] size-3.5 text-electric" />
            </div>

            <div className="flex shrink-0 items-center gap-2 text-right">
              <div>
                <p className="text-[0.52rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Destination
                </p>
                <p className="text-[0.68rem] font-bold text-navy-900 sm:text-xs">
                  United States
                </p>
              </div>
              <span className="grid size-8 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-electric sm:size-9">
                <MapPin className="size-4" />
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3">
            <div className="w-[4.5rem] shrink-0 text-center sm:w-[6rem]">
              <span className="mx-auto grid size-10 place-items-center rounded-full border border-blue-200 bg-white text-electric shadow-[0_12px_28px_-20px_rgba(37,99,235,.8)] sm:size-12">
                <Globe2 className="size-4 sm:size-5" />
              </span>
              <p className="mt-1.5 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 sm:text-[0.66rem]">
                Founder
              </p>
            </div>

            <div className="relative h-px min-w-3 flex-1 bg-gradient-to-r from-blue-200 to-blue-400">
              <ArrowRight className="absolute -right-1.5 -top-[0.42rem] size-3.5 text-electric" />
            </div>

            <div className="relative h-[6.6rem] w-[8rem] shrink-0 [perspective:800px] sm:h-[9.2rem] sm:w-[11rem]">
              <div
                className={`${styles.documentBack} absolute inset-x-2 bottom-1 top-3 rounded-xl border border-blue-200 bg-blue-100`}
              />
              <div
                className={`${styles.documentMiddle} absolute inset-x-1 bottom-2 top-2 rounded-xl border border-blue-200 bg-blue-50`}
              />
              <div
                className={`${styles.documentFront} absolute inset-0 overflow-hidden rounded-xl border border-blue-200 bg-white shadow-[0_25px_45px_-24px_rgba(37,99,235,.65)]`}
              >
                <div className="flex items-center justify-between bg-navy-900 px-3 py-2 text-white sm:px-4 sm:py-3">
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:text-[0.66rem]">
                    U.S. LLC
                  </span>
                  <Building2 className="size-3.5 sm:size-4" />
                </div>
                <div className="px-3 py-2.5 sm:px-4 sm:py-3">
                  <p className="text-[0.64rem] font-bold text-navy-900 sm:text-xs">
                    Formation document
                  </p>
                  <div className="mt-2 space-y-1.5">
                    <span className="block h-1 rounded-full bg-slate-200" />
                    <span className="block h-1 w-3/4 rounded-full bg-blue-100" />
                  </div>
                  <div className="mt-2 hidden items-center gap-1 text-[0.56rem] font-semibold text-emerald-700 sm:flex">
                    <Check className="size-3" />
                    Secure guided process
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-px min-w-3 flex-1 bg-gradient-to-r from-blue-400 to-cyan-300">
              <ArrowRight className="absolute -right-1.5 -top-[0.42rem] size-3.5 text-electric" />
            </div>

            <div className="w-[4.5rem] shrink-0 text-center sm:w-[6rem]">
              <span className={`${styles.readyNode} mx-auto grid size-10 place-items-center rounded-full bg-navy-900 text-cyan-200 shadow-[0_14px_32px_-18px_rgba(15,23,42,.8)] sm:size-12`}>
                <Building2 className="size-4 sm:size-5" />
              </span>
              <p className="mt-1.5 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-navy-900 sm:text-[0.66rem]">
                Business Ready
              </p>
            </div>
          </div>

          <div className="relative mt-3 sm:mt-4">
            <div className="absolute left-[15%] right-[15%] top-4 h-px bg-blue-100 sm:top-5" />
            <div
              className={`${styles.processProgress} absolute left-[15%] right-[15%] top-4 h-px bg-gradient-to-r from-blue-500 to-cyan-400 sm:top-5`}
            />
            <div className="relative grid grid-cols-3 gap-1">
              {processSteps.map(({ icon: Icon, label, animation }) => (
                <div key={label} className="text-center">
                  <span
                    className={`${animation} mx-auto grid size-8 place-items-center rounded-full border border-blue-100 bg-white text-electric shadow-sm sm:size-10`}
                  >
                    <Icon className="size-3.5 sm:size-4" />
                  </span>
                  <p className="mt-1.5 text-[0.54rem] font-semibold leading-tight text-slate-600 sm:text-[0.66rem]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 rounded-xl bg-navy-900 px-3.5 py-2.5 text-white shadow-[0_18px_34px_-24px_rgba(15,23,42,.8)] sm:px-4 sm:py-3">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200 sm:size-9">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <p className="text-[0.52rem] font-bold uppercase tracking-[0.15em] text-blue-200">
                  Guided outcome
                </p>
                <p className="text-[0.68rem] font-bold sm:text-xs">Business-ready foundation</p>
              </div>
            </div>
            <p className="hidden text-right text-[0.6rem] leading-4 text-slate-400 sm:block">
              Formation · Tax ID
              <br />
              Compliance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
