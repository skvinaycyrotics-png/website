'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const AnimatedBg = dynamic(() => import('@/components/ui-patterns/animated-bg').then(mod => mod.AnimatedBg), { ssr: false, loading: () => null });
const SupportDesk = dynamic(() => import('@/components/layout/SupportDesk').then(mod => mod.SupportDesk), { ssr: false, loading: () => null });
const CookieConsent = dynamic(() => import('@/components/cookie-consent'), { ssr: false, loading: () => null });
const Header = dynamic(() => import('@/components/layout/header').then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/footer').then(mod => mod.Footer), { ssr: false });
const TechBackground = dynamic(() => import('@/components/ui-patterns/tech-background').then(mod => mod.TechBackground), { ssr: false });

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TechBackground />
      <div className="flex min-h-screen flex-col bg-transparent relative z-10">
        <AnimatedBg />
        <Header />
        <main className="flex-1 bg-transparent">{children}</main>
        <Footer />
      </div>
      <SupportDesk />
      <CookieConsent />
    </>
  );
}
