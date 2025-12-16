
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BrainCircuit,
  CheckCircle,
  Cpu,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const sections = [
  {
    title: 'What It Does',
    content:
      'The AI-Powered Expert Matcher analyzes client requirements in real time and intelligently aligns them with the most suitable specialists from our expert ecosystem—based on technical skills, industry experience, project complexity, and business context.',
    subContent:
      'This ensures faster engagement, higher accuracy, and consistently superior project outcomes.',
  },
  {
    title: 'Why It Matters for Enterprises',
    points: [
      'Faster Time-to-Expert: No delays, no manual routing',
      'High-Accuracy Matching: Right expertise for the right challenge',
      'Enterprise-Grade Efficiency: Optimized resource utilization',
      'Consistent Quality Delivery: Reduced risk and improved outcomes',
      'Scalable & Adaptive: Learns continuously from every engagement',
    ],
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Intelligent Requirement Understanding',
    description:
      'Advanced AI and Natural Language Processing (NLP) interpret client inputs—whether technical, operational, or strategic.',
  },
  {
    step: 2,
    title: 'Domain-Specific Expertise Mapping',
    description:
      'Our experts are dynamically profiled across a wide range of domains to ensure the perfect match.',
  },
  {
    step: 3,
    title: 'Precision AI Matching Engine',
    description:
      'The system evaluates skills, certifications, project history, and sector relevance to deliver the best-fit expert or team.',
  },
  {
    step: 4,
    title: 'Rapid Engagement & Execution',
    description:
      'Clients are connected instantly, reducing response times and accelerating decision-making.',
  },
];

const domains = [
    { icon: Cpu, text: 'Data Center & Cloud Infrastructure' },
    { icon: ShieldCheck, text: 'Cybersecurity & Network Architecture' },
    { icon: BrainCircuit, text: 'AI, ML & Software Engineering' },
    { icon: Zap, text: 'Smart Factory, Buildings & Urban Systems' },
    { icon: Layers3, text: 'Audio-Visual & Unified Communications' },
];

export default function ExpertMatcher() {
  return (
    <Card className="max-w-6xl mx-auto border-none shadow-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-headline flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          AI-Powered Expert Matcher
        </CardTitle>
        <CardDescription className="text-lg md:text-xl font-medium text-primary">
          Connecting Vision with the Right Expertise — Instantly
        </CardDescription>
        <p className="pt-2 text-muted-foreground max-w-4xl mx-auto">
          Our AI-Powered Expert Matcher is an intelligent digital capability
          designed to connect businesses with the right domain experts,
          engineers, and consultants—precisely when and where they are needed.
          Built for enterprise-scale operations, it seamlessly bridges client
          requirements with our multidisciplinary expertise.
        </p>
      </CardHeader>
      <CardContent className="mt-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                {section.content && <p className="text-muted-foreground">{section.content}</p>}
                {section.subContent && <p className="mt-2 text-muted-foreground">{section.subContent}</p>}
                {section.points && (
                  <ul className="mt-4 space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
             <div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                  A Smarter Way to Collaborate
                </h3>
                <p className="text-muted-foreground">
                    By combining human expertise with artificial intelligence, we deliver a smarter, faster, and more reliable collaboration model—ensuring every client engagement is backed by deep domain knowledge and proven experience. The result is better decisions, faster execution, and measurable business impact.
                </p>
             </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
             <div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                  How It Works
                </h3>
                 <div className="relative border-l-2 border-primary/20 ml-4">
                    {howItWorks.map((item, index) => (
                        <div key={item.step} className="mb-8 pl-10 relative">
                             <div className="absolute -left-[14px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                {item.step}
                            </div>
                            <h4 className="font-semibold text-lg text-foreground">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    ))}
                 </div>
             </div>
             <div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                  Expertise Domains
                </h3>
                 <div className="space-y-3">
                    {domains.map(domain => (
                        <div key={domain.text} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                           <domain.icon className="h-6 w-6 text-primary flex-shrink-0" />
                           <span className="font-medium text-foreground">{domain.text}</span>
                        </div>
                    ))}
                 </div>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="font-bold text-xl text-primary tracking-wider uppercase">
                Future-Ready. Expert-Driven. AI-Enabled.
            </h3>
        </div>
      </CardContent>
    </Card>
  );
}
