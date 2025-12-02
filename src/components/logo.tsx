import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center text-xl font-bold', className)}
    >
      <div style={{ width: '180px' }}>
        <Image
          src="/Cyrotics-Logo.png"
          alt="CYROTICS TECHNOLOGIES Logo"
          width={180}
          height={40}
          priority
          layout="responsive"
        />
      </div>
    </Link>
  );
}
