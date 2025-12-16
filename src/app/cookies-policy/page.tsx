'use client';

import { useEffect, useState } from 'react';

export default function CookiesPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container max-w-4xl py-12 sm:py-16 lg:py-20">
      <h1 className="font-headline text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {currentDate || '...'}</p>

        <p>
          This is the Cookie Policy for CYROTICS TECHNOLOGIES OPC PVT LTD, accessible from www.cyrotics.com.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">What Are Cookies</h2>
        <p>
          As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">How We Use Cookies</h2>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Disabling Cookies</h2>
        <p>
          You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">The Cookies We Set</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
          </li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Third-Party Cookies</h2>
        <p>
          In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
          </li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">More Information</h2>
        <p>
          Hopefully, that has clarified things for you. If you are still looking for more information, you can contact us through one of our preferred contact methods:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Email: info@cyrotics.in</li>
        </ul>
      </div>
    </div>
  );
}
