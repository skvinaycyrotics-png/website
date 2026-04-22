import * as React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  linkText?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  linkText = 'Learn More',
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn('h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-premium dark:hover:shadow-premium-dark border border-transparent hover:border-brand/20 shadow-soft bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl overflow-hidden group relative', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <CardHeader className="p-8 pb-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-brand/10 p-4 rounded-2xl text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <CardTitle className="font-headline text-2xl font-bold">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-4 flex-grow flex flex-col">
        <CardDescription className="flex-grow text-base leading-relaxed text-muted-foreground mb-6">
          {description}
        </CardDescription>
        {href && (
          <Button
            asChild
            variant="ghost"
            className="self-start group-hover:text-brand px-0 font-semibold"
          >
            <Link href={href}>
              {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
