'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  MapPin,
  ChevronDown,
  Building,
  Mail,
  HelpCircle,
  Briefcase,
  Users,
  Trophy,
  Rocket,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  JOB_OPENINGS,
  LOCATIONS,
  CAREER_LEVELS,
  JOB_TYPES,
  SPECIAL_JOB_TYPES,
  OCCUPATIONS,
  SEGMENTS,
  EXPERIENCE_LEVELS,
  EMPLOYEE_TESTIMONIALS,
  CAREER_BENEFITS,
  CAREER_FAQS,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import { AnimatedSection, AnimatedItem } from '@/components/ui-patterns/animated-section';

type Filters = {
  keyword: string;
  locations: string[];
  careerLevel: string;
  jobTypes: string[];
  occupations: string[];
  segments: string[];
  experienceLevels: string[];
};

export default function CareersPage() {
  const [filters, setFilters] = useState<Filters>({
    keyword: '',
    locations: [],
    careerLevel: '',
    jobTypes: [],
    occupations: [],
    segments: [],
    experienceLevels: [],
  });
  
  const quickSegments = ['Networking', 'Cybersecurity', 'AV & Smart Solutions', 'Project Management', 'Software Development'];

  const handleMultiSelectChange = (
    filterKey: keyof Filters,
    value: string
  ) => {
    setFilters((prev) => {
      const newValues = prev[filterKey].includes(value)
        ? (prev[filterKey] as string[]).filter((item) => item !== value)
        : [...(prev[filterKey] as string[]), value];
      return { ...prev, [filterKey]: newValues };
    });
  };

  const handleQuickSegmentFilter = (segment: string) => {
    setFilters(prev => ({
        ...prev,
        segments: prev.segments.includes(segment) ? prev.segments.filter(s => s !== segment) : [segment]
    }));
  };

  const resetFilters = () => {
    setFilters({
      keyword: '',
      locations: [],
      careerLevel: '',
      jobTypes: [],
      occupations: [],
      segments: [],
      experienceLevels: [],
    });
  };

  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const keywordMatch =
        !filters.keyword ||
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.department.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.keyword.toLowerCase());

      const locationMatch =
        filters.locations.length === 0 ||
        filters.locations.some((loc) => job.location.includes(loc));
        
      const careerLevelMatch =
        !filters.careerLevel || job.careerLevel === filters.careerLevel;
        
      const jobTypeMatch =
        filters.jobTypes.length === 0 ||
        filters.jobTypes.includes(job.type);
        
      const occupationMatch =
        filters.occupations.length === 0 ||
        filters.occupations.includes(job.occupation);

      const segmentMatch =
        filters.segments.length === 0 ||
        filters.segments.some(seg => job.segment.includes(seg));
        
      const experienceLevelMatch =
        filters.experienceLevels.length === 0 ||
        filters.experienceLevels.includes(job.experienceLevel);
        
      return (
        keywordMatch &&
        locationMatch &&
        careerLevelMatch &&
        jobTypeMatch &&
        occupationMatch &&
        segmentMatch &&
        experienceLevelMatch
      );
    });
  }, [filters]);
  
  const availableJobTypes = filters.careerLevel ? SPECIAL_JOB_TYPES[filters.careerLevel] || JOB_TYPES : JOB_TYPES;

  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Shape the Future of Technology"
        description="Join a global team of innovators building secure, intelligent, and scalable infrastructure for the next generation of enterprises."
        heroImage="/career-hero.png"
      />

      {/* Intro Section */}
      <AnimatedSection className="py-20 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="px-4 py-1 text-brand border-brand/20 bg-brand/5">
              Why Join CYROTICS?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              A Culture of <span className="text-gradient">Continuous Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At CYROTICS, we don't just solve problems; we engineer possibilities. Our team is a diverse collective of dreamers, builders, and strategists dedicated to redefining what's possible in IT, Cybersecurity, and Smart Infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
              {[
                { icon: Rocket, title: "Accelerated Growth", desc: "Fast-track your career with exposure to cutting-edge technologies and enterprise-scale projects." },
                { icon: Users, title: "Collaborative Spirit", desc: "Work alongside industry veterans and visionary leaders in an environment that values every voice." },
                { icon: Trophy, title: "Meaningful Impact", desc: "Build solutions that power critical infrastructure, protect global brands, and shape the digital landscape." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border/50 bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Find Your Next Role Section */}
      <section className="py-24 bg-secondary/30 relative border-y border-border/50" id="jobs">
        <div className="container">
          <AnimatedItem>
            <Card className="w-full shadow-2xl border-none overflow-hidden rounded-3xl">
              <div className="bg-primary p-8 md:p-12 text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                    <Briefcase className="h-8 w-8 text-brand" />
                    Find Your Next Role
                  </h2>
                  <p className="text-primary-foreground/70 max-w-2xl text-lg">
                    Discover opportunities that align with your expertise and aspirations. Use our precision filters to navigate our current openings.
                  </p>
                </div>
              </div>
              <CardContent className="p-8 md:p-12 space-y-8 bg-card">
                <div className="space-y-6">
                  {/* Keyword Search */}
                  <div className="max-w-4xl mx-auto">
                    <Label htmlFor="keywordSearch" className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Keyword Search</Label>
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-brand transition-colors" />
                      <Input
                        id="keywordSearch"
                        placeholder="Job title, skills, or department..."
                        className="pl-12 h-14 text-lg border-border/50 focus:border-brand/50 focus:ring-brand/20 rounded-xl transition-all"
                        value={filters.keyword}
                        onChange={(e) =>
                          setFilters({ ...filters, keyword: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  
                  {/* Filters Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Location Filter */}
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Location</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-border/50 bg-background hover:bg-secondary/50">
                            <span className="truncate">
                              {filters.locations.length > 0
                                ? `${filters.locations.length} selected`
                                : 'Select Location'}
                            </span>
                            <MapPin className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 rounded-2xl shadow-2xl" align="start">
                          <ScrollArea className="h-80">
                            <div className="p-4">
                              {LOCATIONS.map((country) => (
                                <Accordion type="single" collapsible key={country.name} className="border-none">
                                  <AccordionItem value={country.name} className="border-none">
                                    <AccordionTrigger className="py-2 text-sm font-bold hover:no-underline">
                                      {country.name}
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-4">
                                      {country.states.map((state) => (
                                        <div key={state.name} className="space-y-2">
                                          <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{state.name}</p>
                                          {state.cities.map((city) => (
                                            <div key={city} className="flex items-center space-x-3 py-1.5">
                                              <Checkbox
                                                id={`loc-${city}`}
                                                checked={filters.locations.includes(city)}
                                                onCheckedChange={() => handleMultiSelectChange('locations', city)}
                                                className="border-border/50 data-[state=checked]:bg-brand data-[state=checked]:border-brand"
                                              />
                                              <Label htmlFor={`loc-${city}`} className="text-sm font-medium cursor-pointer">
                                                {city}
                                              </Label>
                                            </div>
                                          ))}
                                        </div>
                                      ))}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ))}
                            </div>
                          </ScrollArea>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Career Level Filter */}
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Career Level</Label>
                      <Select
                        value={filters.careerLevel}
                        onValueChange={(value) => setFilters({ ...filters, careerLevel: value, jobTypes: [] })}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background">
                          <SelectValue placeholder="Career Level" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {CAREER_LEVELS.map((level) => (
                            <SelectItem key={level} value={level} className="rounded-lg">
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Job Type Filter */}
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Job Type</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-border/50 bg-background">
                            <span className="truncate">{filters.jobTypes.length > 0 ? `${filters.jobTypes.length} selected` : 'Job Type'}</span>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-4 rounded-2xl shadow-2xl" align="start">
                          <div className="space-y-3">
                            {availableJobTypes.map(type => (
                              <div key={type} className="flex items-center space-x-3 py-1">
                                <Checkbox
                                  id={`type-${type}`}
                                  checked={filters.jobTypes.includes(type)}
                                  onCheckedChange={() => handleMultiSelectChange('jobTypes', type)}
                                />
                                <Label htmlFor={`type-${type}`} className="text-sm font-medium cursor-pointer">{type}</Label>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Segment Filter */}
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Sector / Segment</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-border/50 bg-background">
                            <span className="truncate">{filters.segments.length > 0 ? `${filters.segments.length} selected` : 'Select Sector'}</span>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 rounded-2xl shadow-2xl" align="start">
                          <ScrollArea className="h-72">
                            <div className="p-4 space-y-3">
                              {SEGMENTS.map(segment => (
                                <div key={segment} className="flex items-center space-x-3 py-1">
                                  <Checkbox
                                    id={`seg-${segment}`}
                                    checked={filters.segments.includes(segment)}
                                    onCheckedChange={() => handleMultiSelectChange('segments', segment)}
                                  />
                                  <Label htmlFor={`seg-${segment}`} className="text-sm font-medium cursor-pointer">{segment}</Label>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Reset & Quick Filters */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">Quick Access:</span>
                      {quickSegments.map(segment => (
                        <button
                          key={segment}
                          onClick={() => handleQuickSegmentFilter(segment)}
                          className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-bold transition-all border",
                            filters.segments.includes(segment) 
                              ? "bg-brand border-brand text-white shadow-lg shadow-brand/20" 
                              : "bg-secondary/50 border-border/50 text-muted-foreground hover:border-brand/50 hover:text-brand"
                          )}
                        >
                          {segment}
                        </button>
                      ))}
                    </div>
                    <Button onClick={resetFilters} variant="ghost" className="text-xs font-bold uppercase tracking-widest hover:text-destructive hover:bg-destructive/5">
                      Reset All Filters
                    </Button>
                  </div>
                </div>

                {/* Job Results List */}
                <div className="pt-12 space-y-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      Available Positions
                      <Badge variant="secondary" className="ml-2 bg-brand/10 text-brand border-none px-3">
                        {filteredJobs.length}
                      </Badge>
                    </h3>
                  </div>

                  <div className="grid gap-4">
                    <AnimatePresence mode="popLayout">
                      {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, idx) => (
                          <motion.div 
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Card className="group hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 border-border/50 overflow-hidden">
                              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4 max-w-xl">
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground group-hover:text-brand transition-colors">
                                      {job.department}
                                    </Badge>
                                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground">
                                      {job.type}
                                    </Badge>
                                  </div>
                                  <div>
                                    <h4 className="text-xl md:text-2xl font-bold group-hover:text-brand transition-colors mb-2">
                                      {job.title}
                                    </h4>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                      <span className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-brand" /> {job.location}
                                      </span>
                                      <span className="flex items-center gap-1.5">
                                        <Building className="h-4 w-4 text-brand" /> {job.segment}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 border-t md:border-t-0 pt-6 md:pt-0">
                                  <div className="text-right hidden md:block mr-4">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Experience</p>
                                    <p className="text-sm font-semibold">{job.experienceLevel}</p>
                                  </div>
                                  <Button className="rounded-xl h-12 px-8 bg-primary hover:bg-brand text-white font-bold group-hover:shadow-lg group-hover:shadow-brand/20 transition-all">
                                    Apply Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-20 text-center space-y-6"
                        >
                          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
                            <Search className="h-10 w-10 text-muted-foreground" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">No Matches Found</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                              Adjust your filters or keywords to explore other opportunities within our team.
                            </p>
                          </div>
                          <Button onClick={resetFilters} variant="outline" className="rounded-full">
                            Clear All Filters
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedItem>
        </div>
      </section>

      {/* Life at CYROTICS Gallery */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <AnimatedItem direction="left">
              <Badge className="mb-4 bg-brand/10 text-brand border-none px-4 py-1">Inside CYROTICS</Badge>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Where Technology Meets <span className="text-gradient">Passion</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join a workplace that celebrates creativity, embraces complexity, and rewards initiative. From collaborative whiteboarding sessions to global team-building events, we foster an environment where every individual can thrive and lead.
              </p>
            </AnimatedItem>
            <AnimatedItem direction="right" className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] group">
                  <Image src="/career-1.png" alt="Office Collaboration" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-end items-end">
                    <p className="text-white font-bold text-lg">Modern Collaboration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] group">
                  <Image src="/career-2.png" alt="Tech Infrastructure" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-end items-end">
                    <p className="text-white font-bold text-lg">Engineering Future</p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-32 bg-secondary/20 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Empowering Our People</h2>
            <p className="text-xl text-muted-foreground">
              We provide the environment, resources, and support you need to excel both professionally and personally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREER_BENEFITS.map((benefit, i) => (
              <AnimatedItem key={benefit.title} delay={i * 0.1}>
                <Card className="h-full border-border/50 hover:border-brand/30 hover:shadow-xl transition-all p-8 rounded-3xl group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-20">Voices from the Team</h2>
          <Carousel opts={{ loop: true, align: 'center' }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {EMPLOYEE_TESTIMONIALS.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-full lg:basis-full">
                  <div className="p-8 md:p-16 rounded-[40px] bg-secondary/30 relative">
                    <Sparkles className="absolute top-8 left-8 h-12 w-12 text-brand/20" />
                    <div className="relative z-10 text-center space-y-8">
                      <p className="text-2xl md:text-3xl font-medium italic leading-snug">
                        "{testimonial.quote}"
                      </p>
                      <div className="space-y-1">
                        <p className="text-xl font-bold text-brand">{testimonial.name}</p>
                        <p className="text-muted-foreground font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-border/50" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-border/50" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-secondary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <HelpCircle className="h-12 w-12 text-brand mx-auto mb-4" />
            <h2 className="text-4xl font-bold">Hiring Process & FAQ</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about starting your career with us.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {CAREER_FAQS.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={index} className="border border-border/50 bg-background px-6 rounded-2xl overflow-hidden">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <BottomCTA 
        title="Didn't Find Your Perfect Role?"
        description="We are always looking for exceptional talent. If you are passionate about technology and want to make an impact, send us your profile."
        primaryButtonText="Submit Your Resume"
        primaryButtonHref="mailto:career@cyrotics.in"
      />
    </div>
  );
}
