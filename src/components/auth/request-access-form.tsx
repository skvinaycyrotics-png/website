'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Building2, 
  Mail, 
  User, 
  FileEdit,
  ArrowRight,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Logo } from '@/components/logo';

export function RequestAccessForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="mx-auto h-20 w-20 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-600 shadow-lg shadow-green-500/10">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-brand-dark">Request Submitted</h2>
          <p className="text-muted-foreground font-medium">Your request is being reviewed by our security team. We will contact you via email shortly.</p>
        </div>
        <Button asChild className="bg-brand text-white rounded-2xl h-12 px-8 font-bold">
          <Link href="/login">Return to Login</Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-10 space-y-4">
        <Logo className="justify-center mb-8" />
        <h1 className="text-4xl font-black text-brand-dark tracking-tight">Request Platform Access</h1>
        <p className="text-muted-foreground font-medium">Join the CYROTICS technology ecosystem. All requests undergo rigorous security validation.</p>
      </div>

      <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand/5">
          <motion.div 
            className="h-full bg-brand"
            initial={{ width: '33%' }}
            animate={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mt-4">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                      <Input placeholder="John Doe" className="pl-11 h-14 rounded-2xl border-brand/10 bg-brand/5 focus:bg-white transition-all text-brand-dark placeholder:text-muted-foreground" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Work Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                      <Input type="email" placeholder="john@enterprise.com" className="pl-11 h-14 rounded-2xl border-brand/10 bg-brand/5 focus:bg-white transition-all text-brand-dark placeholder:text-muted-foreground" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Organization</Label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                    <Input placeholder="Company Name" className="pl-11 h-14 rounded-2xl border-brand/10 bg-brand/5 focus:bg-white transition-all text-brand-dark placeholder:text-muted-foreground" required />
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full h-14 bg-brand text-white rounded-2xl font-bold shadow-lg shadow-brand/20">
                  Next Step <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Purpose of Access</Label>
                  <div className="relative">
                    <FileEdit className="absolute left-4 top-6 h-4 w-4 text-brand" />
                    <Textarea 
                      placeholder="Describe your infrastructure needs and projects..." 
                      className="pl-11 min-h-[150px] rounded-2xl border-brand/10 bg-brand/5 focus:bg-white transition-all py-5 text-brand-dark placeholder:text-muted-foreground" 
                      required 
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand/5 border border-brand/10 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-brand mt-0.5" />
                  <p className="text-[10px] font-bold text-brand-dark leading-relaxed uppercase tracking-tight">
                    By submitting, you agree to our security protocols and identity verification process.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)} className="flex-1 h-14 rounded-2xl font-bold text-muted-foreground">
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="flex-[2] h-14 bg-brand text-white rounded-2xl font-bold shadow-lg shadow-brand/20">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
        Already have access? <Link href="/login" className="text-brand font-black hover:underline uppercase tracking-tighter">Sign In</Link>
      </p>
    </div>
  );
}
