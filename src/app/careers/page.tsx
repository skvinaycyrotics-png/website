
'use client';

import { useState, useMemo } from 'react';
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
} from 'lucide-react';
import {
  JOB_OPENINGS,
  LOCATIONS,
  CAREER_LEVELS,
  JOB_TYPES,
  SPECIAL_JOB_TYPES,
  OCCUPATIONS,
  SEGMENTS,
  EXPERIENCE_LEVELS,
} from '@/lib/constants';

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
        filters.segments.includes(job.segment);
        
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
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Find Your Future at CYROTICS
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Explore opportunities to innovate, grow, and make an impact with a
            leading technology partner.
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container max-w-4xl mx-auto">
           <h2 className="font-headline text-3xl font-bold">
             ⭐ Join Our Team of Innovators
           </h2>
            <div className="mt-6 text-muted-foreground space-y-4 text-lg">
                <p>
                    At Cyrotics Technologies, we believe people are our greatest strength. We are building a team of innovators, problem-solvers, and future leaders who want to make a real impact in the world of IT, Cybersecurity, Automotive Engineering, and Smart Infrastructure.
                </p>
                <p>
                    Whether you are an experienced professional or just starting your journey, we welcome passionate individuals who dream big, think boldly, and are ready to grow with us.
                </p>
                <p className="font-semibold text-foreground">
                    Join us, and together we’ll create solutions that move industries forward, empower businesses, and shape a smarter digital future.
                </p>
                 <p className="font-semibold text-primary pt-4">
                   “Your career begins with a single opportunity — let’s build something extraordinary together.”
                </p>
            </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container max-w-6xl mx-auto">
           <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Search /> Find Your Next Role
                </CardTitle>
                 <CardDescription>
                    Use the filters below to find the perfect job for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Keyword Search */}
                    <div className="lg:col-span-4">
                        <Label htmlFor="keywordSearch" className="sr-only">Search by Keyword</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="keywordSearch"
                                placeholder="Search by job title, skill, or department..."
                                className="pl-10 h-12 text-base"
                                value={filters.keyword}
                                onChange={(e) =>
                                    setFilters({ ...filters, keyword: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    
                    {/* Location Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-11">
                          <span>
                            {filters.locations.length > 0
                              ? `${filters.locations.length} locations selected`
                              : 'Select Location'}
                          </span>
                          <ChevronDown />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0" align="start">
                        <ScrollArea className="h-72">
                          <div className="p-4">
                            {LOCATIONS.map((country) => (
                              <Accordion
                                type="single"
                                collapsible
                                key={country.name}
                              >
                                <AccordionItem value={country.name}>
                                  <AccordionTrigger className="py-2">
                                    {country.name}
                                  </AccordionTrigger>
                                  <AccordionContent className="pl-4">
                                    {country.states.map((state) => (
                                      <Accordion
                                        type="single"
                                        collapsible
                                        key={state.name}
                                      >
                                        <AccordionItem value={state.name}>
                                          <AccordionTrigger className="py-2 text-sm">
                                            {state.name}
                                          </AccordionTrigger>
                                          <AccordionContent className="pl-4">
                                            {state.cities.map((city) => (
                                              <div
                                                key={city}
                                                className="flex items-center space-x-2 py-1"
                                              >
                                                <Checkbox
                                                  id={`loc-${city}`}
                                                  checked={filters.locations.includes(
                                                    city
                                                  )}
                                                  onCheckedChange={() =>
                                                    handleMultiSelectChange(
                                                      'locations',
                                                      city
                                                    )
                                                  }
                                                />
                                                <Label htmlFor={`loc-${city}`} className="font-normal">
                                                  {city}
                                                </Label>
                                              </div>
                                            ))}
                                          </AccordionContent>
                                        </AccordionItem>
                                      </Accordion>
                                    ))}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            ))}
                          </div>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>

                    {/* Career Level Filter */}
                    <Select
                      value={filters.careerLevel}
                      onValueChange={(value) => setFilters({ ...filters, careerLevel: value, jobTypes: [] })}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Career Level" />
                      </SelectTrigger>
                      <SelectContent>
                        {CAREER_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Occupation Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-11">
                          <span>{filters.occupations.length > 0 ? `${filters.occupations.length} occupations selected` : 'Occupation'}</span>
                          <ChevronDown />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0" align="start">
                         <ScrollArea className="h-72">
                          <div className="p-4">
                            {OCCUPATIONS.map(group => (
                              <div key={group.level}>
                                <h4 className="font-semibold my-2">{group.level}</h4>
                                {group.roles.map(role => (
                                   <div key={role} className="flex items-center space-x-2 py-1 pl-2">
                                      <Checkbox
                                          id={`occ-${role}`}
                                          checked={filters.occupations.includes(role)}
                                          onCheckedChange={() => handleMultiSelectChange('occupations', role)}
                                      />
                                      <Label htmlFor={`occ-${role}`} className="font-normal">{role}</Label>
                                  </div>
                                ))}
                              </div>
                            ))}
                            </div>
                          </ScrollArea>
                      </PopoverContent>
                    </Popover>

                    {/* Reset Button */}
                    <Button onClick={resetFilters} variant="secondary" className="w-full h-11">Reset Filters</Button>
                </div>
              </CardContent>
           </Card>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
             Current Job Openings ({filteredJobs.length})
          </h2>
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 grid md:grid-cols-5 gap-4 items-center">
                      <div className="md:col-span-3">
                          <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                          <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 mt-2">
                             <span className="flex items-center gap-1.5"><Building /> {job.department}</span>
                              <span className="flex items-center gap-1.5"><MapPin /> {job.location}</span>
                          </div>
                      </div>
                       <div className="md:col-span-2 flex flex-col md:items-end gap-2">
                         <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{job.experienceLevel}</Badge>
                            <Badge variant="secondary">{job.type}</Badge>
                          </div>
                         <Button className="mt-2 w-full md:w-auto">Apply Now</Button>
                      </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-10 text-center">
                  <p className="text-lg text-muted-foreground">
                    Oops! We couldn’t find any matches. Try searching again with different filters.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

    