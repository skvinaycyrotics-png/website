'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md z-10">
        <Card className="glass-card border-white/20 dark:border-white/10">
          <CardHeader className="text-center">
            <Logo className="justify-center mb-8" />
            <CardTitle className="text-3xl font-black text-brand-dark tracking-tight uppercase">Recover Access</CardTitle>
            <CardDescription className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest mt-2">
              Identity Verification Required
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-foreground ml-1">Recovery Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 bg-brand/5 border-brand/10 pl-11 rounded-2xl focus:bg-white dark:focus:bg-slate-900 transition-all"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full h-14 bg-brand text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand/20" disabled={isLoading}>
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Send Recovery Link'}
                </Button>
                <Link href="/login" className="flex items-center justify-center gap-2 text-[10px] font-black uppercase text-muted-foreground hover:text-brand transition-colors">
                  <ArrowLeft className="h-3 w-3" /> Back to Sign In
                </Link>
              </form>
            ) : (
              <div className="text-center space-y-6 py-4">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-brand-dark">Recovery Email Sent</p>
                  <p className="text-xs text-muted-foreground font-medium">Please check your inbox for instructions to reset your security key.</p>
                </div>
                <Button asChild variant="outline" className="w-full h-12 rounded-2xl border-brand/20 text-brand font-bold">
                  <Link href="/login">Return to Login</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
