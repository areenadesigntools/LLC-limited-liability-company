'use client';

import React from 'react';
import Link from 'next/link';
import { contactInfo, socialLinks } from '@/data/company';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/cn';

export const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const iconMap: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="w-4 h-4" />,
    Linkedin: <Linkedin className="w-4 h-4" />,
    Instagram: <Instagram className="w-4 h-4" />,
    MessageCircle: <MessageCircle className="w-4 h-4" />,
  };

  return (
    <div
      className={cn(
        'bg-primary-dark text-white transition-all duration-300 hidden md:block',
        !isVisible && '-translate-y-full'
      )}
    >
      <Container>
        <div className="py-3 flex items-center justify-between">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-blue" />
              <span className="hover:text-primary-blue transition">{contactInfo.address}</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-primary-blue transition">
              <Phone className="w-4 h-4 text-primary-blue" />
              <span>{contactInfo.phone}</span>
            </a>
            <div className="h-4 w-px bg-gray-600"></div>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-primary-blue transition">
              <Mail className="w-4 h-4 text-primary-blue" />
              <span className="hidden lg:inline">{contactInfo.email}</span>
            </a>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-blue transition duration-300"
                aria-label={link.name}
                title={link.name}
              >
                {iconMap[link.icon] || <link.icon className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
