import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/company';
import { Container } from '@/components/ui';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  socialIconToneClasses,
} from '@/components/ui/BrandIcons';

const iconMap = {
  Facebook: FacebookIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  MessageCircle,
};

export function TopBar() {
  return (
    <div className="border-b border-white/8 bg-navy-950 text-slate-300">
      <Container>
        <div className="flex min-h-10 items-center justify-between gap-3 py-1.5 text-xs">
          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <span className="hidden min-w-0 items-center gap-2 xl:flex">
              <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-cyan-400" />
              <span className="truncate">{contactInfo.address}</span>
            </span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex shrink-0 items-center gap-2 hover:text-white"
            >
              <Phone aria-hidden="true" className="size-3.5 text-cyan-400" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden min-w-0 items-center gap-2 hover:text-white md:flex"
            >
              <Mail aria-hidden="true" className="size-3.5 shrink-0 text-cyan-400" />
              <span className="truncate">{contactInfo.email}</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid size-8 place-items-center rounded-lg border transition duration-300 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${socialIconToneClasses[link.name as keyof typeof socialIconToneClasses]}`}
                  aria-label={`Visit our ${link.name}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-3.5 transition-colors duration-300"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
