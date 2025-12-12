import { Fingerprint } from 'lucide-react';

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin panel for Cyrotics Technologies.',
};

export default function AdminPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-theme(spacing.20))] w-full items-center justify-center bg-gradient-to-br from-[#e8eef5] to-white">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Fingerprint className="h-auto w-3/4 text-primary/5" />
      </div>
      <div className="relative text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Admin Panel
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
