import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Facebook,
  ShieldCheck,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { SERVICES, NAV_LINKS } from '@/lib/constants';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-primary/5">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Engineering a Secure & Connected Future.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-semibold tracking-wide">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide">Our Services</h3>
              <ul className="mt-4 space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {year} CYROTICS TECHNOLOGIES OPC PVT LTD. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
