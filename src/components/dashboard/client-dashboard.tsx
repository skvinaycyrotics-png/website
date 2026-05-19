'use client';

import React from 'react';
import { 
  BarChart3, 
  Database, 
  ShieldCheck, 
  Zap, 
  FileText, 
  PlusCircle,
  Clock,
  History,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function ClientDashboard() {
  const { toast } = useToast();

  const handleAction = (title: string) => {
    toast({
      title: "Action Initiated",
      description: `Triggering ${title} on infrastructure node BLR-01...`,
    });
  };

  return (
    <div className="space-y-12">
      {/* Client Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-8 border-b border-slate-200 dark:border-white/5"
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-brand font-black font-headline text-[11px] tracking-widest bg-brand/5 w-fit px-5 py-2 rounded-full border border-brand/10 whitespace-nowrap">
            <Database className="h-4 w-4 animate-pulse" />
            Infrastructure Node: BLR-01
          </div>
          <h1 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-xl leading-none">
            Service <span className="text-brand">Command</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl text-xl leading-relaxed">Monitoring your primary secure infrastructure cluster in Bangalore East.</p>
        </div>
        <div className="flex gap-4 pb-1">
          <Button 
            onClick={() => handleAction("New Resource Provisioning")}
            className="bg-brand hover:bg-brand-dark text-white rounded-2xl font-black uppercase tracking-[0.2em] h-16 px-10 shadow-2xl shadow-brand/20 transition-all active:scale-95 border-b-4 border-brand-dark/30"
          >
            <PlusCircle className="mr-3 h-6 w-6" />
            Provision Resource
          </Button>
        </div>
      </motion.div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Uptime', value: '99.99%', icon: Zap, color: 'bg-emerald-500' },
          { label: 'Security Health', value: 'Optimal', icon: ShieldCheck, color: 'bg-brand' },
          { label: 'Storage Usage', value: '42.8 TB', icon: Database, color: 'bg-blue-500' },
          { label: 'Network Load', value: '1.2 GB/s', icon: BarChart3, color: 'bg-cyan-500' },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => handleAction(`${kpi.label} Diagnostics`)}
            className="glass-card p-10 rounded-[3rem] group cursor-pointer hover:border-brand/40 transition-all duration-500"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500", kpi.color)}>
                <kpi.icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-black text-brand-dark dark:text-white tracking-tighter">{kpi.value}</h3>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className={cn("h-full", kpi.color)} 
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-10 rounded-[3rem]">
          <h3 className="text-2xl font-black text-brand-dark dark:text-white mb-8 flex items-center gap-4 uppercase tracking-tight">
            <History className="h-6 w-6 text-brand" />
            Operations Pulse
          </h3>
          <div className="space-y-6">
            {[
              { title: 'Security Scan Completed', time: '12 mins ago', type: 'System' },
              { title: 'New Storage Volume Provisioned', time: '2 hours ago', type: 'Manual' },
              { title: 'Network Optimization Sync', time: '5 hours ago', type: 'Auto' },
            ].map((activity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                onClick={() => handleAction("Log Review")}
                className="flex items-center justify-between p-6 rounded-2xl bg-brand/5 border border-transparent hover:border-brand/20 transition-all cursor-pointer group hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand shadow-inner">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-brand-dark dark:text-white tracking-tight">{activity.title}</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{activity.type} • {activity.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Files */}
        <div className="glass-card p-10 rounded-[3rem] flex flex-col">
          <h3 className="text-2xl font-black text-brand-dark dark:text-white mb-8 flex items-center gap-4 uppercase tracking-tight">
            <FileText className="h-6 w-6 text-brand" />
            Nexus Vault
          </h3>
          <div className="space-y-4 flex-1">
            {[
              'SLA_Agreement_2026.pdf',
              'Architecture_Diagram_V3.svg',
              'Security_Audit_Report.pdf'
            ].map((file, i) => (
              <div 
                key={i} 
                onClick={() => handleAction(`Downloading ${file}`)}
                className="flex items-center justify-between p-5 rounded-2xl bg-brand/5 border border-transparent hover:border-brand/30 hover:bg-white dark:hover:bg-slate-900 transition-all cursor-pointer group shadow-sm hover:shadow-xl hover:translate-y-[-2px] duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand shadow-inner border border-brand/10">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-black text-brand-dark dark:text-slate-300 group-hover:text-brand transition-colors">{file}</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-brand/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronRight className="h-4 w-4 text-brand" />
                </div>
              </div>
            ))}
          </div>
          <Button 
            onClick={() => handleAction("Archive Access Request")}
            className="w-full mt-10 h-14 bg-slate-950 dark:bg-brand/10 text-white dark:text-brand border border-white/5 dark:border-brand/20 rounded-2xl font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all shadow-lg"
          >
            Access Resource Archive
          </Button>
        </div>
      </div>
    </div>
  );
}
