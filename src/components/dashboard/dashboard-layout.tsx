'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FolderLock, 
  History, 
  Settings, 
  Bell, 
  Search,
  UserCircle,
  Menu,
  X,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  title: string;
  href: string;
  icon: any;
  roles: string[];
}

const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/admin', icon: LayoutDashboard, roles: ['ADMIN'] },
  { title: 'Project Console', href: '/portal', icon: LayoutDashboard, roles: ['CLIENT'] },
  { title: 'User Management', href: '/admin/users', icon: Users, roles: ['ADMIN'] },
  { title: 'Access Requests', href: '/admin/requests', icon: FolderLock, roles: ['ADMIN'] },
  { title: 'My Projects', href: '/portal/projects', icon: FolderLock, roles: ['CLIENT'] },
  { title: 'Audit Trails', href: '/admin/audit', icon: History, roles: ['ADMIN'] },
  { title: 'Settings', href: '/settings', icon: Settings, roles: ['ADMIN', 'CLIENT'] },
];

export function DashboardLayout({ 
  children, 
  role 
}: { 
  children: React.ReactNode, 
  role: 'ADMIN' | 'CLIENT' 
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const filteredNav = navItems.filter(item => item.roles.includes(role));

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar - Glass Light */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 glass-light m-4 rounded-3xl transition-transform duration-300 lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]"
      )}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2">
            {filteredNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group relative overflow-hidden",
                    isActive 
                      ? "bg-brand text-white shadow-lg shadow-brand/20" 
                      : "text-muted-foreground hover:bg-brand/5 hover:text-brand"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "group-hover:scale-110 transition-transform")} />
                  <span className="font-semibold text-sm">{item.title}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="active-pill" 
                      className="absolute right-2 h-1.5 w-1.5 rounded-full bg-white" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-brand/10">
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-2xl">
              <LogOut className="h-5 w-5" />
              <span className="font-semibold">Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-[20rem] p-4 lg:p-8">
        {/* Top Navbar */}
        <header className="flex items-center justify-between glass-light p-4 px-6 rounded-3xl mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-brand/5 border-none rounded-2xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand w-64 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative rounded-2xl bg-brand/5 text-brand">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand animate-ping" />
            </Button>
            <div className="h-8 w-[1px] bg-brand/10 mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-brand-dark leading-none">System {role}</p>
                <p className="text-[10px] font-bold text-brand uppercase tracking-widest mt-1">Authorized</p>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-brand/20">
                <UserCircle className="h-6 w-6" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Slot */}
        <div className="min-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}
