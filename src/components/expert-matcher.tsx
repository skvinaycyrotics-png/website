'use client';

import {
  BrainCircuit,
  Share2,
  LocateFixed,
  Zap,
  ShieldCheck,
  Server,
  Cloud,
  Code,
  Building,
  Car,
  Sun,
} from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const features = [
  {
    icon: BrainCircuit,
    title: 'Smart Requirement Understanding',
    description:
      'AI understands client requirements using natural language and contextual intelligence.',
  },
  {
    icon: Share2,
    title: 'Expert Intelligence Mapping',
    description:
      'Expert profiles are mapped using skills, certifications, industry exposure, and project success data.',
  },
  {
    icon: LocateFixed,
    title: 'Precision AI Matching',
    description:
      'Advanced algorithms connect each request with the most relevant expert or delivery team.',
  },
  {
    icon: Zap,
    title: 'Seamless Engagement',
    description:
      'Instant activation of consultation, solution design, or project execution.',
  },
];

const expertiseAreas = [
    { icon: Server, label: 'Data Center & Cloud' },
    { icon: ShieldCheck, label: 'Cybersecurity' },
    { icon: Code, label: 'AI & Software' },
    { icon: Building, label: 'Smart Infrastructure' },
    { icon: Car, label: 'Automotive' },
    { icon: Sun, label: 'Renewable Energy' },
];

const impactStats = [
    { value: '99%', label: 'Matching Accuracy' },
    { value: '80%', label: 'Faster Project Kickoff' },
    { value: '100%', label: 'Enterprise-Grade Compliance' },
    { value: '12+', label: 'Multi-Industry Coverage' },
]

export default function ExpertMatcher() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            AI-Powered Expert Matcher™
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Intelligent expertise, precisely aligned to your business needs.
          </p>
          <p className="mt-4 text-gray-400">
            Our AI-Powered Expert Matcher™ is a proprietary intelligence layer built into our digital ecosystem, designed to connect clients with the right domain experts, engineers, architects, and consultants—instantly and precisely.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Intelligence Panel */}
          <div className="relative rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
             <div className="absolute inset-0 bg-blue-900/20 rounded-xl animate-pulse"></div>
             <div className="relative grid grid-cols-2 gap-8 text-center">
                {expertiseAreas.map(area => (
                    <div key={area.label} className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
                        <div className="p-3 bg-blue-500/20 rounded-full border border-blue-400/50">
                            <area.icon className="h-8 w-8 text-cyan-300" />
                        </div>
                        <span className="font-semibold text-gray-200">{area.label}</span>
                    </div>
                ))}
             </div>
          </div>

          {/* Right Column: Feature Explanation Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all hover:bg-white/10 hover:border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-500/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Business Impact Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {impactStats.map(stat => (
                <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <Link href="/contact">Find Your Expert Instantly</Link>
          </Button>
          <p className="mt-4">
             <Link href="/services" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors">
                Explore Our Expertise &rarr;
             </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
