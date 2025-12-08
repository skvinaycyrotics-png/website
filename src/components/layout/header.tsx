'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <a
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                      pathname.startsWith(link.href)
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
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          )}
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
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <Logo />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) =>
                      link.subLinks ? (
                        <Accordion type="single" collapsible key={link.label}>
                          <AccordionItem value={link.label} className="border-b-0">
                            <AccordionTrigger className="py-0 text-lg font-medium hover:no-underline">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="pl-4">
                              <ul>
                                {link.subLinks.map((subLink) => (
                                  <li key={subLink.href}>
                                    <Link
                                      href={subLink.href}
                                      onClick={closeMobileMenu}
                                      className="text-muted-foreground hover:text-primary"
                                    >
                                      {subLink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === link.href
                              ? 'text-primary'
                              : 'text-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
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
