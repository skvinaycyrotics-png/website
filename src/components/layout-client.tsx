'use client';

import dynamic from 'next/dynamic';

const AnimatedBg = dynamic(() => import('@/components/ui-patterns/animated-bg').then(mod => mod.AnimatedBg), { ssr: false, loading: () => null });
const SupportDesk = dynamic(() => import('@/components/layout/SupportDesk').then(mod => mod.SupportDesk), { ssr: false, loading: () => null });
const CookieConsent = dynamic(() => import('@/components/cookie-consent'), { ssr: false, loading: () => null });

export function LayoutClient() {
  return (
    <>
      <AnimatedBg />
      <SupportDesk />
      <CookieConsent />
    </>
  );
}
