'use client';

import { Button } from '@/components/ui/button';
import { Phone, Headphones } from 'lucide-react';

export function FloatingSupport() {
  return (
    <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
      <Button
        id="support-desk-trigger-mobile"
        variant="outline"
        size="icon"
        className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-110"
      >
        <Headphones className="h-7 w-7 text-primary" />
        <span className="sr-only">Open Support Desk</span>
      </Button>
    </div>
  );
}
