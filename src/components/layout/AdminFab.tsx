'use client';

import Link from 'next/link';
import { Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function AdminFab() {
  const pathname = usePathname();

  // Don't render the FAB on the admin page itself
  if (pathname === '/admin') {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        variant="outline"
        size="icon"
        className="h-14 w-14 rounded-full bg-background shadow-lg transition-transform hover:scale-110"
      >
        <Link href="/admin">
          <Fingerprint className="h-8 w-8 text-primary" />
          <span className="sr-only">Admin Panel</span>
        </Link>
      </Button>
    </div>
  );
}
