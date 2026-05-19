import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
// import { getSession } from '@/lib/auth';
import { AdminSidebar } from '@/components/admin/sidebar';
import { NextRequest } from 'next/server';

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock session for frontend-only mode
  const session = {
    user: { name: 'Admin User', email: 'admin@cyrotics.in' },
    role: 'ADMIN'
  };


  return (
    <div className="flex min-h-screen bg-transparent text-slate-900 dark:text-slate-50 selection:bg-brand selection:text-white overflow-hidden relative">
      {/* Centered Decorative Glow - Matching Register Page */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <AdminSidebar />
      
      <main className="flex-1 relative z-10 overflow-y-auto custom-scrollbar h-screen">
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
