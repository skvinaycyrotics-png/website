'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

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
import { NAV_LINKS } from '@/lib/constants';
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


const renderNavLinks = (links: NavLink[], isMobile: boolean, closeMobileMenu?: () => void) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  const DesktopSubMenu = ({ subLinks, label }: { subLinks: NavLink[], label: string }) => (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        {label}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subLinks.map(subLink => (
            <DropdownMenuItem key={subLink.href} asChild>
              <Link href={subLink.href} onClick={handleLinkClick}>{subLink.label}</Link>
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
          <DropdownMenuContent>
             {link.subLinks.map((subLink) => (
                subLink.subLinks ? (
                  <DesktopSubMenu key={subLink.href} subLinks={subLink.subLinks} label={subLink.label} />
                ) : (
                  <DropdownMenuItem key={subLink.href} asChild>
                    <Link href={subLink.href}>{subLink.label}</Link>
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


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {renderNavLinks(NAV_LINKS, false)}
        </nav>
        <div className="ml-4 hidden md:flex">
          <Button asChild>
            <a href="tel:+919999295636">
              <Phone className="mr-2 h-4 w-4" /> +91-9999295636
            </a>
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
                    {renderNavLinks(NAV_LINKS, true, closeMobileMenu)}
                  </div>
                  <Button asChild size="lg" onClick={closeMobileMenu}>
                    <a href="tel:+919999295636">
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </a>
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
