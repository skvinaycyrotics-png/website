
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Headphones, FileText, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { PRIMARY_NAV_LINKS, SECONDARY_NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu';
import type { NavLink } from '@/lib/types';


const renderNavLinks = (links: NavLink[], isMobile: boolean, handleLinkClick: () => void) => {
  const pathname = usePathname();

  const DesktopSubMenu = ({ subLinks, label, icon: Icon }: { subLinks: NavLink[], label: string, icon?: React.ElementType }) => (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        {Icon && <Icon className="mr-2 h-4 w-4 text-muted-foreground" />}
        <span>{label}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subLinks.map(subLink => (
            <DropdownMenuItem key={subLink.href} asChild>
              <Link href={subLink.href} onClick={handleLinkClick} className="flex items-center gap-2">
                 {subLink.icon && <subLink.icon className="h-4 w-4 text-muted-foreground" />}
                 <span>{subLink.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );

  return links.map((link) => {
    if (link.subLinks) {
      if (isMobile) {
        return (
          <Accordion type="single" collapsible key={link.href} className="w-full">
            <AccordionItem value={link.label} className="border-b-0">
              <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {link.label}
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <ul className="flex flex-col gap-2">
                  {link.subLinks.map((subLink) => (
                     subLink.subLinks ? (
                        <li key={subLink.href} className="text-muted-foreground hover:text-primary">
                          <Accordion type="single" collapsible className="w-full">
                             <AccordionItem value={subLink.label} className="border-b-0">
                               <AccordionTrigger className="py-2 text-base font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                {subLink.label}
                              </AccordionTrigger>
                              <AccordionContent className="pl-4">
                                <ul className="flex flex-col gap-2">
                                  {subLink.subLinks.map(innerSub => (
                                      <li key={innerSub.href}>
                                        <Link href={innerSub.href} onClick={handleLinkClick} className="text-muted-foreground hover:text-primary">{innerSub.label}</Link>
                                      </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </li>
                     ) : (
                      <li key={subLink.href}>
                        <Link href={subLink.href} onClick={handleLinkClick} className="text-muted-foreground hover:text-primary">{subLink.label}</Link>
                      </li>
                     )
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      }
      // Desktop
      return (
        <DropdownMenu key={link.href}>
          <DropdownMenuTrigger asChild>
            <a
              href={link.href.startsWith('#') ? undefined : link.href}
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                pathname.startsWith(link.href) && !link.href.startsWith('#')
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
             {link.subLinks.map((subLink) => (
                subLink.subLinks ? (
                  <DesktopSubMenu key={subLink.href} subLinks={subLink.subLinks} label={subLink.label} icon={subLink.icon} />
                ) : (
                  <DropdownMenuItem key={subLink.href} asChild>
                    <Link href={subLink.href} className="flex items-center gap-2">
                      {subLink.icon && <subLink.icon className="h-4 w-4 text-muted-foreground" />}
                      <span>{subLink.label}</span>
                    </Link>
                  </DropdownMenuItem>
                )
             ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    // No sublinks
    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={handleLinkClick}
        className={cn(
          isMobile ? 'text-lg font-medium' : 'text-sm font-medium',
          'transition-colors hover:text-primary',
           pathname === link.href
            ? 'text-primary'
            : isMobile ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {link.label}
      </Link>
    );
  });
};

const credentialsLinks = [
  { href: '/msme-certificate.pdf', label: 'MSME Certificate' },
  { href: '/startup-india-certificate.pdf', label: 'Startup India Certificate' },
  { href: '/gst-certificate.pdf', label: 'GST Certificate' },
  { href: '/cyrotics-brochure.pdf', label: 'Company Business Brochure' },
];


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);



  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Logo className="transition-transform hover:scale-105" />
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {renderNavLinks(PRIMARY_NAV_LINKS, false, handleLinkClick)}
        </nav>
        <div className="ml-4 hidden items-center gap-2 md:flex">
          <Button id="support-desk-trigger-desktop">
            <Headphones /> Support Desk
          </Button>
        </div>
        <div className="ml-auto flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Select a page to navigate to.
                </SheetDescription>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <Logo />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    {renderNavLinks(PRIMARY_NAV_LINKS, true, handleLinkClick)}
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="other-links" className="border-b-0">
                        <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                            More
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                            <ul className="flex flex-col gap-4">
                            {SECONDARY_NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                <Link href={link.href} onClick={handleLinkClick} className="text-muted-foreground hover:text-primary">{link.label}</Link>
                                </li>
                            ))}
                            </ul>
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  </div>
                   <Button id="support-desk-trigger-mobile" size="lg" onClick={closeMobileMenu}>
                     <Headphones /> Support Desk
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
