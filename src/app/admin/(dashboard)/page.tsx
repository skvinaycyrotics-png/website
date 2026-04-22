'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Layers, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const STATS = [
  { label: 'Total Jobs', value: '12', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Active Projects', value: '24', icon: Layers, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Testimonials', value: '48', icon: MessageSquare, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'Admin Users', value: '3', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

const RECENT_ACTIVITY = [
  { action: 'New Job Posted', item: 'Senior Cybersecurity Architect', time: '2 hours ago', icon: Briefcase },
  { action: 'Testimonial Approved', item: 'John Doe - Global Tech', time: '5 hours ago', icon: ShieldCheck },
  { action: 'Project Updated', item: 'Smart City Infrastructure', time: '1 day ago', icon: Layers },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back. Here is what's happening with the CYROTICS ecosystem today.</p>
        </div>
        <Button className="rounded-xl h-12 px-6 bg-brand hover:bg-brand/90 text-white font-bold transition-all">
          Generate System Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="border-border/50 hover:border-brand/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={cn("p-3 rounded-2xl transition-colors", stat.bg)}>
                    <stat.icon className={cn("h-6 w-6", stat.color)} />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3" />
                    +12%
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {RECENT_ACTIVITY.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <activity.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.item}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">{activity.time}</p>
                  <ArrowUpRight className="h-4 w-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-brand font-bold">View All Activity</Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 bg-brand/5 border-brand/10">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-border/50 gap-3">
              <Briefcase className="h-4 w-4" /> Add New Job
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-border/50 gap-3">
              <Layers className="h-4 w-4" /> Post New Project
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-border/50 gap-3">
              <MessageSquare className="h-4 w-4" /> Review Testimonials
            </Button>
            <div className="pt-4 mt-4 border-t border-brand/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand/60 text-center">System Status: Optimal</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Utility function (inline if not imported)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
