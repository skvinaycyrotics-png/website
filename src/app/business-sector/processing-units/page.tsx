import Image from 'next/image';
import {
  Cog,
  Bot,
  Cpu,
  ShieldCheck,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import Link from 'next/link';

export const metadata = {
  title: 'Processing Units | CYROTICS TECHNOLOGIES',
  description: 'Specialized technology solutions for processing units, including process automation, quality control, and robust IT infrastructure.',
};

export default function ProcessingUnitsPage() {
  const solutions = [
    {
      title: 'Process Automation & Control',
      icon: Cog,
      description: 'Implementing PLC, SCADA, and DCS systems to automate and control critical processes, ensuring consistency, efficiency, and safety.',
    },
    {
      title: 'AI-Based Quality Control',
      icon: Bot,
      description: 'Using computer vision and AI algorithms to automate quality inspection, detect defects, and ensure products meet high standards.',
    },
    {
      title: 'Real-Time Monitoring & Data Analytics',
      icon: Cpu,
      description: 'Deploying IoT sensors and data analytics platforms to monitor process parameters in real-time, enabling predictive maintenance and optimization.',
    },
    {
      title: 'Secure & Resilient Infrastructure',
      icon: ShieldCheck,
      description: 'Building robust and secure IT and OT networks to ensure the continuous and safe operation of your processing facility.',
    },
  ];

  return (
    <>
      <BottomCTA 
          title="Optimizing Your Operations"
          description="CYROTICS Technologies provides specialized solutions for processing units across various sectors, including food processing, pharmaceuticals, and chemicals. We help businesses automate their operations, improve quality control, and ensure a safe and compliant environment."
          primaryButtonText="Request a Consultation"
        />
    </>
  );
}
