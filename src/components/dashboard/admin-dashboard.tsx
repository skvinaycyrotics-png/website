'use client';

import React from 'react';
import { 
  Users, 
  Activity, 
  ShieldAlert, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  FolderLock,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
// FIXED: Added missing Button component imports below
import { Button } from '@/components/ui/button';

const stats = [
  { 
    title: 'Total Active Users', 
    value: '1,284', 
    change: '+12%', 
    trend: 'up', 
    icon: Users,
    color: 'bg-blue-500'
  },
  { 
    title: 'System Requests', 
    value: '45,203', 
    change: '+5.4%', 
    trend: 'up', 
    icon: Activity,
    color: 'bg-brand'
  },
  { 
    title: 'Security Alerts', 
    value: '2', 
    change: '-18%', 
    trend: 'down', 
    icon: ShieldAlert,
    color: 'bg-orange-500'
  },
  { 
    title: 'Active Sessions', 
    value: '342', 
    change: '+8%', 
    trend: 'up', 
    icon: Clock,
    color: 'bg-cyan-500'
  },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-brand-dark tracking-tight">System Overview</h1>
        <p className="text-muted-foreground font-medium">Welcome back, Admin. Here is what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-[2rem] group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg transition-transform group-hover:scale-110`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black uppercase tracking-wider ${stat.trend === 'up' ? 'text-green-600' : 'text-orange-500'}`}>
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-sm font-bold text-muted-foreground mb-1">{stat.title}</p>
            <h2 className="text-3xl font-black text-brand-dark">{stat.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Activity & Recent Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Visualization (Simplified for now) */}
        <div className="lg:col-span-2 glass-card p-8 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-brand-dark flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand" />
              Real-time Traffic
            </h3>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest">Live</div>
            </div>
          </div>
          
          <div className="h-[300px] w-full flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 55, 95, 75, 60, 85, 50, 40, 70, 45, 90, 65, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-brand/20 to-brand rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark text-white text-[10px] py-1 px-2 rounded-lg font-bold">
                  {h}k
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>

        {/* Access Requests Quick List */}
        <div className="glass-card p-8 rounded-[2.5rem]">
          <h3 className="text-xl font-black text-brand-dark mb-6 flex items-center gap-2">
            <FolderLock className="h-5 w-5 text-brand" />
            New Requests
          </h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-brand/5 flex items-center justify-center text-brand font-black text-sm group-hover:bg-brand group-hover:text-white transition-all">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-brand-dark">John Doe</p>
                  <p className="text-[10px] text-muted-foreground font-semibold">Tesla Inc. • Manager</p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-brand/10 text-brand">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
          <Button className="w-full mt-8 bg-brand/10 text-brand hover:bg-brand hover:text-white rounded-2xl font-bold transition-all">
            Review All Requests
          </Button>
        </div>
      </div>
    </div>
  );
}
