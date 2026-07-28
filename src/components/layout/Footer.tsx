'use client';

import React from 'react';
import Link from 'next/link';
import { contactInfo, socialLinks, companyInfo } from '@/data/company';
import { services } from '@/data/services';
import { taxServices } from '@/data/taxServices';
import { paymentProviders } from '@/data/paymentProviders';
import { Container } from '@/components/ui';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/BrandIcons';

export const Footer: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Facebook: <FacebookIcon className="w-5 h-5" />,
    Linkedin: <LinkedInIcon className="w-5 h-5" />,
    Instagram: <InstagramIcon className="w-5 h-5" />,
    MessageCircle: <MessageCircle className="w-5 h-5" />,
  };

  const trustBadges = [
    'SSL Secured',
    'Secure Payments',
    '100% Confidential',
    'Global Support',
    'Fast Processing',
  ];

  return (
    <footer className="bg-primary-dark text-white mt-20">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <div className="mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-blue-700 rounded-lg flex items-center justify-center font-bold mb-2">
                LLC
              </div>
              <h3 className="font-bold text-lg mb-2">LLC Limited Liability Company</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{companyInfo.description}</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-primary-blue transition">
                <Phone className="w-4 h-4 text-primary-blue flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-primary-blue transition">
                <Mail className="w-4 h-4 text-primary-blue flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary-blue transition duration-300"
                  aria-label={link.name}
                  title={link.name}
                >
                  {iconMap[link.icon] ?? null}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Business Formation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Business Formation</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-blue transition text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Tax & Compliance */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tax & Compliance</h4>
            <ul className="space-y-2">
              {taxServices.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-blue transition text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Payment Accounts */}
          <div>
            <h4 className="font-bold text-lg mb-4">Payment Accounts</h4>
            <ul className="space-y-2">
              {paymentProviders.map((provider) => (
                <li key={provider.id}>
                  <Link
                    href={provider.href}
                    className="text-gray-400 hover:text-primary-blue transition text-sm"
                  >
                    {provider.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-primary-blue transition text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Trust Badges */}
      <div className="border-t border-gray-700 py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {trustBadges.map((badge) => (
              <div key={badge} className="text-sm text-gray-400">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                </div>
                {badge}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 bg-black/50">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2026 LLC Limited Liability Company. All Rights Reserved.</p>
            <p>Designed & Developed by Areena360</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
