'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // Use a timeout to avoid hydration issues and to delay the popup slightly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-end justify-center animate-in fade-in-0">
      <div
        className={cn(
          'w-full max-w-4xl m-4 p-6 bg-card text-card-foreground rounded-xl shadow-2xl',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:slide-out-to-bottom-2 data-[state=open]:slide-in-from-bottom-2'
        )}
        data-state={isVisible ? 'open' : 'closed'}
      >
        <div className="md:flex md:items-center md:gap-6">
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">We Value Your Privacy</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We use cookies to enhance your experience, analyze site traffic, and provide personalized content. By continuing to use our site, you agree to our use of cookies. Read our{' '}
              <Link href="/cookies-policy" className="underline hover:text-primary">
                Cookies Policy
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex-shrink-0 flex items-center gap-4 justify-end">
            <Button variant="outline" onClick={declineCookies} className="bg-muted hover:bg-muted/80">
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
