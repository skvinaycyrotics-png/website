'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';
import { ShieldCheck, UserCircle, LogOut, LayoutDashboard, FolderKanban, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function PortalHeader({ session }: { session: any }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl">
      <div className="container h-20 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-12">
          <Logo className="scale-90 origin-left transition-transform hover:scale-95" />
          <nav className="hidden lg:flex items-center gap-2">
            {[
              { href: '/portal', label: 'Dashboard', icon: LayoutDashboard },
              { href: '/portal/projects', label: 'My Projects', icon: FolderKanban },
              { href: '/portal/support', label: 'Support Desk', icon: LifeBuoy },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-bold uppercase tracking-tight transition-all duration-300",
                    isActive 
                      ? "bg-brand text-white shadow-lg shadow-brand/20" 
                      : "text-muted-foreground hover:text-brand hover:bg-brand/5"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          {session.role === 'ADMIN' && (
            <Button variant="outline" size="sm" asChild className="hidden sm:flex gap-2 rounded-xl border-brand/20 bg-brand/5 text-brand hover:bg-brand/10 font-black uppercase tracking-widest text-[10px]">
              <Link href="/admin">
                <ShieldCheck className="h-4 w-4" />
                Admin Console
              </Link>
            </Button>
          )}
          
          <div className="h-8 w-px bg-slate-200 dark:bg-white/10 mx-2 hidden sm:block" />

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase">{session.name || 'User'}</span>
              <span className="text-[9px] font-bold text-brand uppercase tracking-[0.2em]">{session.role}</span>
            </div>
            <div className="h-11 w-11 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center font-black text-brand shadow-inner">
              {(session.name || 'U').charAt(0).toUpperCase()}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              className="h-11 w-11 rounded-2xl text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
