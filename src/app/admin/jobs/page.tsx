'use client';

import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  MapPin, 
  Clock, 
  Users,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const JOBS = [
  { id: 1, title: 'Senior Cybersecurity Architect', department: 'Security Operations', location: 'Bangalore, IN (Hybrid)', applicants: 12, status: 'Active', posted: '2 days ago' },
  { id: 2, title: 'Cloud Infrastructure Engineer', department: 'Cloud Services', location: 'Remote', applicants: 45, status: 'Active', posted: '5 days ago' },
  { id: 3, title: 'AI/ML Solutions Lead', department: 'R&D', location: 'Bangalore, IN', applicants: 8, status: 'Draft', posted: 'Just now' },
];

export default function JobsPage() {
  return (
    <div className="p-10 space-y-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-8 border-b border-slate-200 dark:border-white/5">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-brand font-black font-headline text-[11px] tracking-widest bg-brand/5 w-fit px-5 py-2 rounded-full border border-brand/10">
            <Briefcase className="h-4 w-4" />
            Human Capital Management
          </div>
          <h1 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-xl leading-none">
            Career <span className="text-brand">Pipeline</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-xl leading-relaxed">Manage global career opportunities and talent acquisition pipelines.</p>
        </div>
        <div className="flex gap-4 pb-1">
          <Button className="h-16 px-10 bg-brand hover:bg-brand-dark text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand/20 transition-all active:scale-95 border-b-4 border-brand-dark/30">
            <Plus className="mr-3 h-6 w-6" />
            Create Opening
          </Button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-1 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-brand transition-colors" />
          <Input 
            placeholder="Filter by title, department, or keyword..." 
            className="h-16 pl-14 rounded-2xl bg-white/50 dark:bg-slate-900/50 border-white/20 dark:border-white/5 backdrop-blur-xl focus:bg-white dark:focus:bg-slate-900 transition-all font-bold text-brand-dark dark:text-white"
          />
        </div>
        <Button variant="outline" className="h-16 px-8 rounded-2xl border-white/20 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl gap-3 font-black uppercase tracking-widest text-xs">
          <Filter className="h-4 w-4" />
          Refine Results
        </Button>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6">
        {JOBS.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group p-8 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-brand/40 transition-all duration-500"
          >
            <div className="flex items-center gap-8">
              <div className="h-20 w-20 rounded-3xl bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-brand/20 transition-all shadow-inner">
                <Briefcase className="h-8 w-8 text-slate-400 group-hover:text-brand transition-colors" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight uppercase group-hover:text-brand transition-colors">
                    {job.title}
                  </h3>
                  <span className={cn(
                    "text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border",
                    job.status === 'Active' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                  )}>
                    {job.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand/60" />
                    <span className="text-brand-dark dark:text-slate-400 font-bold">{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Posted {job.posted}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Applications</p>
                <p className="text-xl font-black text-brand-dark dark:text-white">{job.applicants}</p>
              </div>
              <div className="h-10 w-px bg-slate-200 dark:bg-white/10 mx-4 hidden xl:block" />
              <div className="flex gap-3">
                <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/10 bg-white/50 dark:bg-slate-900/50 hover:bg-brand hover:text-white transition-all font-black uppercase tracking-widest text-[10px]">
                  Manage Candidates
                </Button>
                <Button variant="ghost" size="icon" className="h-14 w-14 rounded-2xl text-slate-400 hover:text-brand hover:bg-brand/5 border border-transparent hover:border-brand/10">
                  <MoreVertical className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Meta */}
      <div className="pt-12 border-t border-brand/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Showing {JOBS.length} active opportunities</p>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <button key={i} className={cn(
              "h-10 w-10 rounded-xl font-black text-xs transition-all",
              i === 1 ? "bg-brand text-white shadow-lg shadow-brand/20" : "bg-white/50 dark:bg-slate-900/50 text-slate-400 hover:text-brand"
            )}>
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
