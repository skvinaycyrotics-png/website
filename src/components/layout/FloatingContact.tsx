'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export function FloatingContact() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed left-4 top-1/2 z-50 h-14 w-14 -translate-y-1/2 rounded-full shadow-lg"
        >
          <Phone className="h-6 w-6" />
          <span className="sr-only">Open Contact Panel</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-2xl">Contact Information</SheetTitle>
          <SheetDescription>
            We're here to help. Reach out to us anytime.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <a
            href="tel:+919999295636"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
            <span className="flex flex-col">
              <span className="font-semibold text-foreground">Phone</span>
              <span>+91-9999295636</span>
            </span>
          </a>
          <a
            href="mailto:info@cyrotics.in"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
            <span className="flex flex-col">
              <span className="font-semibold text-foreground">Email</span>
              <span>info@cyrotics.in</span>
            </span>
          </a>
          <div className="flex items-center gap-4 text-muted-foreground">
            <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
            <span className="flex flex-col">
              <span className="font-semibold text-foreground">Our Office</span>
              <span>
                86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension,
                Badarpur Bordar, New Delhi-110044, India
              </span>
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
