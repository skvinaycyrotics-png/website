'use client';

import { NAV_LINKS } from "@/lib/constants";
import type { NavLink } from "@/lib/types";
import Link from "next/link";

const renderLinks = (links: NavLink[], level = 0) => {
    return (
        <ul className={`${level > 0 ? 'pl-6' : ''} space-y-2`}>
            {links.map(link => {
                if (link.href.startsWith('#')) return null;
                return (
                    <li key={link.href}>
                        <Link href={link.href} className="text-primary hover:underline">
                            {link.label}
                        </Link>
                        {link.subLinks && renderLinks(link.subLinks, level + 1)}
                    </li>
                )
            })}
        </ul>
    )
}


export default function SitemapPage() {

  const mainLinks = NAV_LINKS;
  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookies-policy", label: "Cookies Policy" },
    { href: "/legal-terms", label: "Legal Terms" },
    { href: "/refund-policy", label: "Refund & Cancellation" },
];

  return (
    <div className="container max-w-4xl py-12 sm:py-16 lg:py-20">
      <h1 className="font-headline text-4xl font-bold mb-8">Sitemap</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h2 className="text-foreground text-2xl font-semibold mb-4">Main Navigation</h2>
            {renderLinks(mainLinks)}
        </div>
        <div>
            <h2 className="text-foreground text-2xl font-semibold mb-4">Legal & Compliance</h2>
            {renderLinks(legalLinks)}
        </div>
      </div>
    </div>
  );
}
