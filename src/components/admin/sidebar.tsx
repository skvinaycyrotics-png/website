'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  Layers, 
  MessageSquare, 
  LogOut, 
  ChevronRight,
  ShieldCheck,
  Settings,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Job Openings', href: '/admin/jobs', icon: Briefcase },
  { label: 'Projects', href: '/admin/projects', icon: Layers },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { label: 'Team Accounts', href: '/admin/users', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <aside className="w-72 h-screen flex flex-col bg-background border-r border-border sticky top-0 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border flex flex-col gap-4">
        <Logo className="scale-90 origin-left" />
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 w-fit">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Admin Console</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between p-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("h-5 w-5", isActive ? "text-brand" : "group-hover:text-brand transition-colors")} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="h-4 w-4 opacity-50" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border mt-auto">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/5 gap-3 h-12 rounded-xl"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-bold">Sign Out</span>
        </Button>
      </div>
    </aside>
  );
}
