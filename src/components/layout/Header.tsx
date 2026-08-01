'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/company';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { cn } from '@/lib/cn';
import { HeaderBrand } from './HeaderBrand';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import {
  headerNavItems,
  type HeaderMenuId,
  type HeaderNavItem,
} from './headerNavigation';

const socialIconMap = {
  Facebook: FacebookIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  MessageCircle,
};

function isCurrentPath(pathname: string, href?: string) {
  if (!href) return false;
  const route = href.split('#')[0];
  return route === '/' ? pathname === '/' : pathname.startsWith(route);
}

function isNavItemActive(pathname: string, item: HeaderNavItem) {
  return (
    isCurrentPath(pathname, item.href) ||
    item.children?.some((child) => isCurrentPath(pathname, child.href)) ||
    false
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<HeaderMenuId | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<HeaderMenuId | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRefs = useRef<Partial<Record<HeaderMenuId, HTMLButtonElement | null>>>({});
  const suppressMenuFocusOpenRef = useRef(false);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearOpenTimer = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenuNow = (menu: HeaderMenuId) => {
    clearOpenTimer();
    clearCloseTimer();
    setOpenMenu(menu);
  };

  const scheduleMenuOpen = (menu: HeaderMenuId) => {
    clearOpenTimer();
    clearCloseTimer();
    openTimerRef.current = setTimeout(() => setOpenMenu(menu), 110);
  };

  const scheduleMenuClose = () => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 190);
  };

  const closeMenuNow = () => {
    clearOpenTimer();
    clearCloseTimer();
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenuInEffect = () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setOpenMenu(null);
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMenuInEffect();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !openMenu) return;
      const trigger = menuButtonRefs.current[openMenu];
      suppressMenuFocusOpenRef.current = true;
      closeMenuInEffect();
      trigger?.focus();
      requestAnimationFrame(() => {
        suppressMenuFocusOpenRef.current = false;
      });
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openMenu]);

  useEffect(
    () => () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    []
  );

  useEffect(() => {
    if (!isDrawerOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setMobileSubmenu(null);
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, menu: HeaderMenuId) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenuNow(menu);
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(`#desktop-${menu}-menu [data-mega-entry]`)?.focus();
      });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-[60] flex h-[5rem] items-center transition-[background-color,box-shadow,backdrop-filter] duration-300',
          isScrolled
            ? 'bg-white/94 shadow-[0_20px_54px_-32px_rgba(15,23,42,.38)] backdrop-blur-2xl'
            : 'bg-gradient-to-b from-slate-50 via-white to-blue-50/90 shadow-[0_18px_42px_-34px_rgba(15,23,42,.34)]'
        )}
      >
        <div className="h-full w-full px-2 sm:px-3 lg:px-4">
          <div className="flex h-full items-center">
            <div
              className={cn(
                'relative flex w-full items-center justify-between gap-2 overflow-visible rounded-[1.1rem] border px-3.5 transition-[height,background-color,border-color,box-shadow] duration-300 sm:px-4 min-[1536px]:gap-3',
                isScrolled
                  ? 'h-[4.1rem] border-blue-200/80 bg-white/96 shadow-[0_20px_55px_-30px_rgba(15,23,42,.32),0_0_0_1px_rgba(37,99,235,.035)]'
                  : 'h-[4.25rem] border-slate-200/90 bg-gradient-to-r from-white via-[#fbfdff] to-blue-50/80 shadow-[0_22px_60px_-34px_rgba(15,23,42,.34),0_0_0_1px_rgba(37,99,235,.035)] min-[1340px]:h-[4.5rem]'
              )}
            >
              <span
                aria-hidden="true"
                className="header-shell-sheen pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-transparent via-blue-200/28 to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/45 to-transparent"
              />

              <HeaderBrand className="relative z-10" onClick={closeMenuNow} />

              <nav
                aria-label="Primary navigation"
                className="relative z-10 hidden min-w-0 flex-1 items-center justify-center gap-0 min-[1340px]:flex min-[1536px]:gap-0.5"
              >
                {headerNavItems.map((item) => {
                  const isActive = isNavItemActive(pathname, item);

                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenuNow}
                        className={cn(
                          'group relative flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2 text-[0.74rem] font-semibold text-slate-600 transition duration-200 min-[1536px]:px-2.5 min-[1536px]:text-[0.8rem]',
                          'hover:bg-blue-50/90 hover:text-primary-dark',
                          ['About Us', 'Contact Us', 'FAQ'].includes(item.label) &&
                            'w-[4.75rem] shrink-0 px-1 min-[1536px]:w-20',
                          item.highlight &&
                            'mx-0.5 min-h-9 w-auto shrink-0 gap-1.5 overflow-hidden rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-2.5 font-bold text-white shadow-[0_10px_26px_-14px_rgba(37,99,235,.95)] hover:border-cyan-200/60 hover:bg-blue-600 hover:text-white hover:shadow-[0_13px_30px_-14px_rgba(37,99,235,1)] min-[1536px]:px-3.5',
                          isActive &&
                            (item.highlight
                              ? 'border-cyan-200/70 bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white shadow-[0_12px_30px_-13px_rgba(37,99,235,1)] hover:text-white'
                              : 'text-electric')
                        )}
                      >
                        {item.highlight && (
                          <Sparkles
                            aria-hidden="true"
                            className="size-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                          />
                        )}
                        {item.label}
                        {!item.highlight && (
                          <>
                            <span
                              aria-hidden="true"
                              className={cn(
                                'absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-electric to-cyan-400 opacity-0 shadow-[0_0_8px_rgba(37,99,235,.55)] transition duration-300 group-hover:scale-x-100 group-hover:opacity-70',
                                isActive && 'scale-x-100 opacity-100'
                              )}
                            />
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_10px_2px_rgba(37,99,235,.45)]"
                              />
                            )}
                          </>
                        )}
                      </Link>
                    );
                  }

                  const menu = item.menu as HeaderMenuId;
                  const isOpen = openMenu === menu;
                  return (
                    <div
                      key={item.label}
                      onMouseEnter={() => scheduleMenuOpen(menu)}
                      onMouseLeave={scheduleMenuClose}
                    >
                      <button
                        ref={(node) => {
                          menuButtonRefs.current[menu] = node;
                        }}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-controls={`desktop-${menu}-menu`}
                        onFocus={() => {
                          if (!suppressMenuFocusOpenRef.current) openMenuNow(menu);
                        }}
                        onClick={() => (isOpen ? closeMenuNow() : openMenuNow(menu))}
                        onKeyDown={(event) => handleMenuKeyDown(event, menu)}
                        className={cn(
                          'group relative flex min-h-10 items-center gap-1 whitespace-nowrap rounded-lg px-2 !text-[0.74rem] !font-semibold text-slate-600 transition duration-200 min-[1536px]:px-2.5 min-[1536px]:!text-[0.8rem]',
                          'hover:bg-blue-50/90 hover:text-primary-dark',
                          (isOpen || isActive) && 'bg-blue-50/90 text-electric'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            'size-3.5 text-slate-400 transition duration-200 group-hover:text-electric',
                            isOpen && 'rotate-180 text-electric'
                          )}
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            'absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-electric to-cyan-400 opacity-0 shadow-[0_0_8px_rgba(37,99,235,.55)] transition duration-300',
                            (isOpen || isActive) && 'scale-x-100 opacity-100'
                          )}
                        />
                      </button>
                    </div>
                  );
                })}
              </nav>

              <div className="relative z-10 flex shrink-0 items-center gap-2">
                <Link
                  href="/contact-us"
                  onClick={closeMenuNow}
                  className="header-consultation-cta group relative hidden min-h-10 items-center gap-2 overflow-hidden whitespace-nowrap rounded-xl border border-blue-300/25 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-3.5 text-xs font-bold text-white shadow-[0_14px_34px_-15px_rgba(37,99,235,.9)] hover:-translate-y-0.5 hover:border-cyan-200/35 sm:inline-flex min-[1536px]:px-4.5"
                >
                  <span
                    aria-hidden="true"
                    className="header-cta-sheen absolute inset-y-0 -left-16 w-12 skew-x-[-18deg] bg-white/25 blur-sm"
                  />
                  <span className="relative">Get Free Consultation</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="relative size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <button
                  type="button"
                  className="group grid size-11 place-items-center rounded-xl border border-slate-200 bg-white/85 text-primary-dark shadow-[0_8px_22px_-16px_rgba(15,23,42,.4)] hover:border-blue-300 hover:bg-blue-50 hover:text-electric min-[1340px]:hidden"
                  onClick={() => {
                    closeMenuNow();
                    setIsDrawerOpen(true);
                  }}
                  aria-label="Open navigation menu"
                  aria-expanded={isDrawerOpen}
                  aria-controls="mobile-navigation"
                >
                  <span className="relative block size-5">
                    <span className="absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-transform group-hover:translate-x-0.5" />
                    <span className="absolute left-1 top-[0.56rem] h-0.5 w-4 rounded-full bg-current transition-all group-hover:left-0 group-hover:w-5" />
                    <span className="absolute bottom-1 left-0 h-0.5 w-5 rounded-full bg-current transition-transform group-hover:-translate-x-0.5" />
                  </span>
                  <Menu aria-hidden="true" className="sr-only" />
                </button>
              </div>

              {headerNavItems
                .filter((item): item is HeaderNavItem & { menu: HeaderMenuId; children: NonNullable<HeaderNavItem['children']> } =>
                  Boolean(item.menu && item.children)
                )
                .map((item) => (
                  <HeaderMegaMenu
                    key={item.menu}
                    menu={item.menu}
                    entries={item.children}
                    isOpen={openMenu === item.menu}
                    onEnter={clearCloseTimer}
                    onLeave={scheduleMenuClose}
                    onNavigate={closeMenuNow}
                  />
                ))}
            </div>
          </div>
        </div>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-[90] min-[1340px]:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 cursor-default bg-navy-950/82 backdrop-blur-md"
            onClick={closeDrawer}
          />
          <div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-[min(92vw,27rem)] flex-col overflow-hidden border-l border-cyan-200/12 bg-[#07101f] text-white shadow-[0_0_100px_-35px_rgba(37,99,235,.65)]"
          >
            <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-40" />
            <div
              aria-hidden="true"
              className="absolute -right-24 top-12 size-64 rounded-full bg-blue-600/16 blur-3xl"
            />

            <div className="relative flex items-center justify-between border-b border-white/9 px-5 py-4">
              <HeaderBrand inverse onClick={closeDrawer} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDrawer}
                className="grid size-11 place-items-center rounded-xl border border-white/12 bg-white/[0.035] text-slate-300 hover:rotate-3 hover:border-cyan-200/25 hover:bg-blue-500/10 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="relative flex-1 overflow-y-auto px-4 pb-8 pt-4"
            >
              <div className="space-y-1">
                {headerNavItems.map((item) => {
                  const isActive = isNavItemActive(pathname, item);
                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDrawer}
                        className={cn(
                          'flex min-h-12 items-center rounded-xl px-4 text-[0.95rem] font-semibold text-slate-300 hover:bg-white/[0.055] hover:text-white',
                          item.highlight &&
                            'my-2 justify-center gap-2 border border-blue-400/30 bg-gradient-to-r from-blue-600/25 to-cyan-500/10 font-bold text-cyan-100 shadow-[0_12px_32px_-20px_rgba(37,99,235,.95)] hover:border-blue-300/50 hover:bg-blue-500/25',
                          isActive &&
                            (item.highlight
                              ? 'border-blue-300/60 bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                              : 'bg-blue-500/12 text-cyan-100')
                        )}
                      >
                        {item.highlight && <Sparkles aria-hidden="true" className="size-4" />}
                        {item.label}
                      </Link>
                    );
                  }

                  const menu = item.menu as HeaderMenuId;
                  const isOpen = mobileSubmenu === menu;
                  const submenuId = `mobile-${menu}-menu`;
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileSubmenu(isOpen ? null : menu)}
                        aria-expanded={isOpen}
                        aria-controls={submenuId}
                        className={cn(
                          'flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left !text-[0.95rem] !font-semibold text-slate-300 hover:bg-white/[0.055] hover:text-white',
                          (isOpen || isActive) && 'bg-blue-500/8 text-cyan-100'
                        )}
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                        />
                      </button>
                      {isOpen && (
                        <div
                          id={submenuId}
                          className="mb-2 ml-3 space-y-1 border-l border-blue-400/25 pl-3"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeDrawer}
                              className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-400 hover:bg-white/[0.055] hover:text-white"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 border-t border-white/9 pt-6">
                <p className="px-2 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-cyan-200">
                  Connect with our team
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  >
                    <Phone aria-hidden="true" className="size-4 text-cyan-300" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  >
                    <Mail aria-hidden="true" className="size-4 shrink-0 text-cyan-300" />
                    <span className="min-w-0 break-all">{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-slate-500">
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                    <span className="leading-5">{contactInfo.address}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 px-2">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${link.name}`}
                        className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-200/25 hover:bg-blue-500/10 hover:text-white"
                      >
                        <Icon aria-hidden="true" className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>

            <div className="relative border-t border-white/10 bg-navy-950/82 p-5 backdrop-blur-xl">
              <Link
                href="/contact-us"
                onClick={closeDrawer}
                className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-300/25 bg-gradient-to-r from-blue-600 to-blue-500 px-5 text-sm font-bold text-white shadow-[0_14px_36px_-16px_rgba(37,99,235,.9)]"
              >
                Get Free Consultation
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/free-llc-registration"
                onClick={closeDrawer}
                className="mt-3 flex min-h-10 items-center justify-center gap-2 text-xs font-bold text-cyan-100 hover:text-white"
              >
                Start Your LLC
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
              <p className="mt-2 text-center text-[0.65rem] leading-5 text-slate-500">
                Free registration assistance. Applicable state fees are paid by the client.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
