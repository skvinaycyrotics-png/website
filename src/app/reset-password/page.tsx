'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Lock, Loader2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    router.push('/login?reset=success');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md z-10">
        <Card className="glass-card border-white/20 dark:border-white/10">
          <CardHeader className="text-center">
            <Logo className="justify-center mb-8" />
            <CardTitle className="text-3xl font-black text-brand-dark tracking-tight uppercase">Set New Key</CardTitle>
            <CardDescription className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest mt-2">
              Update Security Credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark ml-1">New Security Key</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-14 bg-brand/5 border-brand/10 pl-11 rounded-2xl focus:bg-white dark:focus:bg-slate-900 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark ml-1">Confirm Key</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-14 bg-brand/5 border-brand/10 pl-11 rounded-2xl focus:bg-white dark:focus:bg-slate-900 transition-all"
                  />
                </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex gap-3">
                <ShieldAlert className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-[9px] font-bold text-orange-600 uppercase tracking-tight leading-relaxed">
                  Ensure your new key is strong and unique to prevent unauthorized access.
                </p>
              </div>

              <Button type="submit" className="w-full h-14 bg-brand text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand/20" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Update Security Key'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
