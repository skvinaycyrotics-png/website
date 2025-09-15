import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-primary',
        className
      )}
    >
      <ShieldCheck className="h-7 w-7" />
      <span className="font-headline">CyroSecure</span>
    </Link>
  );
}
