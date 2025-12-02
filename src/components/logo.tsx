import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3 text-xl font-bold', className)}
    >
      <Image 
        src="/Cyrotics-Logo.png"
        alt="CYROTICS TECHNOLOGIES Logo"
        width={180}
        height={40}
        priority
      />
    </Link>
  );
}
