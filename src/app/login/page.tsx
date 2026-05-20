'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import { AlertCircle, Loader2, ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';

import { Suspense } from 'react';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = searchParams.get('from') || '/portal';
  const isAdminLogin = from.startsWith('/admin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock login for frontend-only
    setTimeout(() => {
      setIsLoading(false);
      router.push(from);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-transparent selection:bg-brand selection:text-white">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl z-10"
      >
        <div className="text-center mb-10 space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Logo className="justify-center mb-10" />
          </motion.div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tighter uppercase leading-none font-headline">
            {isAdminLogin ? 'Nexus' : 'Secure'} <span className="text-brand">Portal</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
            {isAdminLogin 
              ? 'Authorized administrative infrastructure access.' 
              : 'Enterprise resource management & project tracking.'}
          </p>
        </div>

        <div className="glass-card p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl border-white/20 dark:border-white/5 bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl">
          {isAdminLogin && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-10 py-2.5 rounded-b-3xl bg-brand/10 border-x border-b border-brand/20 flex items-center gap-3 whitespace-nowrap shadow-2xl backdrop-blur-xl">
              <ShieldCheck className="h-5 w-5 text-brand animate-pulse" />
              <span className="text-[11px] font-black text-brand font-headline tracking-[0.2em] uppercase">Secure Management Console</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ height: 0, opacity: 0, marginBottom: 0 }} 
                animate={{ height: 'auto', opacity: 1, marginBottom: 24 }} 
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                className="overflow-hidden"
              >
                <Alert variant="destructive" className="border-destructive/20 bg-destructive/5 rounded-2xl py-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="font-bold text-xs uppercase tracking-tight">{error}</AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label className="text-xs font-black uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200 ml-1">Identity Email</Label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand transition-all group-focus-within:scale-110 group-focus-within:text-brand">
                  <Mail className="h-full w-full" />
                </div>
                <Input
                  type="email"
                  placeholder="Enter your registered identity"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-16 bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 pl-14 rounded-2xl focus:ring-4 focus:ring-brand/10 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <Label className="text-xs font-black uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200">Security Password</Label>
                <Link href="/forgot-password" className="text-[10px] font-black uppercase text-brand hover:text-brand-dark transition-colors tracking-widest">
                  Reset Password
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand transition-all group-focus-within:scale-110 group-focus-within:text-brand">
                  <Lock className="h-full w-full" />
                </div>
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  disabled={isLoading}
                  className="h-16 bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 pl-14 rounded-2xl focus:ring-4 focus:ring-brand/10 transition-all font-bold text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-16 bg-brand hover:bg-[#075985] dark:hover:bg-[#082f49] text-white font-black uppercase tracking-widest rounded-2xl transition-all active:scale-[0.98] text-sm group shadow-2xl shadow-brand/20 border-0" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <span>{isAdminLogin ? 'Unlock Nexus' : 'Secure Sign In'}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              New to the platform?{' '}
              <Link href="/register" className="font-black text-brand hover:text-brand-dark transition-colors">
                Request Authorization
              </Link>
            </p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] pointer-events-none"
        >
          © 2026 CYROTICS TECHNOLOGY CORP. ALL RIGHTS RESERVED.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-brand" /></div>}>
      <LoginContent />
    </Suspense>
  );
}
