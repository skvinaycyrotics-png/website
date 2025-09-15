import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3 text-xl font-bold', className)}
    >
      <div className="flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            fill="#D92D20"
          />
          <path
            d="M33.0234 16.2793H14.9763V20.2793H21.9998V33.9997H25.9998V20.2793H33.0234V16.2793Z"
            fill="#BCC2C8"
          />
          <path
            d="M33.0234 16.2793L25.9998 20.2793H21.9998L14.9763 16.2793H33.0234Z"
            fill="#939AA1"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className="font-headline font-bold text-2xl"
          style={{ color: '#0C2C59' }}
        >
          CYROTICS
        </span>
        <div className="flex items-center gap-2">
          <div
            style={{
              height: '1px',
              width: '20px',
              background:
                'linear-gradient(to left, #D92D20, rgba(217, 45, 32, 0))',
            }}
          />
          <span
            className="text-xs font-semibold tracking-widest"
            style={{ color: '#939AA1' }}
          >
            TECHNOLOGIES
          </span>
          <div
            style={{
              height: '1px',
              width: '20px',
              background:
                'linear-gradient(to right, #D92D20, rgba(217, 45, 32, 0))',
            }}
          />
        </div>
      </div>
    </Link>
  );
}
