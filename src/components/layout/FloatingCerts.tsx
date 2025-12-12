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
import { Award, Trophy, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function FloatingCerts() {
  return (
    <div className="fixed right-4 top-1/2 z-50 -translate-y-[-20%]">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg"
          >
            <Award className="h-6 w-6" />
            <span className="sr-only">Open Certifications Panel</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[320px]">
          <SheetHeader>
            <SheetTitle className="text-2xl">Our Certifications</SheetTitle>
            <SheetDescription>
              A testament to our commitment to quality and excellence.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 space-y-4">
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                <Award className="h-8 w-8 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    MSME Registration
                  </span>
                   <Button variant="link" asChild className="p-0 h-auto justify-start">
                     <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                   </Button>
                </div>
              </div>
              <Separator />
               <div className="flex items-center gap-4">
                <Trophy className="h-8 w-8 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    Startup India Recognition
                  </span>
                   <Button variant="link" asChild className="p-0 h-auto justify-start">
                     <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                   </Button>
                </div>
              </div>
               <Separator />
               <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    GST Registration
                  </span>
                   <Button variant="link" asChild className="p-0 h-auto justify-start">
                     <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
