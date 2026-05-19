import { headers } from 'next/headers';
// import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { PortalHeader } from '@/components/portal/header';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock session for frontend-only mode
  const session = {
    user: { name: 'Demo User', email: 'demo@example.com' },
    role: 'USER'
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-50 selection:bg-brand selection:text-white relative overflow-hidden">
      {/* Centered Decorative Glow - Matching Register Page */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
      
      <PortalHeader session={session} />
      <main className="container relative z-10 py-12 px-4 md:px-8">
        {children}
      </main>
    </div>
  );
}
