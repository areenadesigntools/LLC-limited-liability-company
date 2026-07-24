'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { cn } from '@/lib/cn';
import { services, taxServices } from '@/data';

interface NavLink {
  label: string;
  href?: string;
  submenu?: Array<{ label: string; href: string }>;
}

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    {
      label: 'Services',
      submenu: services.map((s) => ({ label: s.title, href: s.href })),
    },
    {
      label: 'Tax Services',
      submenu: taxServices.slice(0, 3).map((ts) => ({ label: ts.name, href: `/tax-services#${ts.slug}` })),
    },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
        )}
      >
        <Container>
          <div className="py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
                LLC
              </div>
              <div className="hidden sm:block">
                <div className="text-primary-dark font-bold">LLC</div>
                <div className="text-xs text-gray-600">Limited Liability Co.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-gray-700 hover:text-primary-blue transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button className="px-4 py-2 text-gray-700 hover:text-primary-blue transition-colors duration-200 flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}

                  {/* Mega Menu / Dropdown */}
                  {link.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-max">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:text-primary-blue hover:bg-blue-50 rounded transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Badge */}
            <div className="flex items-center gap-3">
              <Link href="/free-llc-registration">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex text-xs"
                >
                  Free LLC
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button size="sm" className="hidden md:inline-flex text-xs">
                  Get Consultation
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-primary-blue"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-md animate-in fade-in slide-in-from-top">
          <Container>
            <nav className="py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:text-primary-blue hover:bg-blue-50 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full text-left px-4 py-2 text-gray-700 hover:text-primary-blue hover:bg-blue-50 rounded transition-colors flex items-center justify-between"
                        onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn('w-4 h-4 transition-transform', activeSubmenu === link.label && 'rotate-180')}
                        />
                      </button>
                      {activeSubmenu === link.label && link.submenu && (
                        <div className="pl-4 bg-gray-50">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-blue transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 flex gap-2">
                <Link href="/free-llc-registration" className="flex-1">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Free LLC
                  </Button>
                </Link>
                <Link href="/contact-us" className="flex-1">
                  <Button
                    size="md"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </>
  );
};
