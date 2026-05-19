'use client';

import { RequestAccessForm } from '@/components/auth/request-access-form';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative background element for auth pages */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <RequestAccessForm />
      </div>
    </div>
  );
}
