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
  Users,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';

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
    <aside className="w-80 h-screen flex flex-col bg-slate-950/50 backdrop-blur-xl border-r border-white/5 sticky top-0 overflow-hidden z-50">
      {/* Premium Glow Effect */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Header */}
      <div className="p-8 border-b border-white/5 flex flex-col gap-6 relative z-10">
        <Logo className="scale-90 origin-left" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
            <ShieldCheck className="h-4 w-4 text-brand animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Admin Core</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-brand hover:bg-brand/5">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar relative z-10">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 px-3 mb-4">Infrastructure Control</p>
        {NAV_ITEMS.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 relative overflow-hidden",
                  isActive 
                    ? "bg-brand text-white shadow-xl shadow-brand/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark opacity-100 -z-10"
                  />
                )}
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2 rounded-xl transition-colors",
                    isActive ? "bg-white/20" : "bg-slate-900 group-hover:bg-brand/10"
                  )}>
                    <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "group-hover:text-brand transition-colors")} />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="h-4 w-4 opacity-50" />}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* User Status / Footer */}
      <div className="p-6 border-t border-white/5 bg-slate-900/50 mt-auto relative z-10">
        <div className="flex items-center gap-4 mb-6 px-2">
          <div className="h-10 w-10 rounded-2xl bg-brand/20 border border-brand/30 flex items-center justify-center font-black text-brand">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-white tracking-tight">System Admin</span>
            <span className="text-[9px] font-bold text-brand uppercase tracking-widest">Authorized</span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-slate-400 hover:text-destructive hover:bg-destructive/5 gap-4 h-14 rounded-2xl transition-all border border-transparent hover:border-destructive/10"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-black uppercase tracking-widest">Emergency Exit</span>
        </Button>
      </div>
    </aside>
  );
}
