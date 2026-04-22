import Image from 'next/image';
import {
  Building,
  TrafficCone,
  Lightbulb,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import Link from 'next/link';

export const metadata = {
  title: 'Smart City Solutions | CYROTICS TECHNOLOGIES',
  description: 'Building the smart, sustainable, and resilient cities of tomorrow through integrated technology solutions for traffic, safety, and utilities.',
};

export default function SmartCityPage() {
  const solutions = [
    {
      title: 'Integrated Command & Control Center (ICCC)',
      icon: Globe,
      description:
        'We design and build centralized command centers that provide a unified view of all city operations, enabling data-driven decision-making and efficient resource management.',
    },
    {
      title: 'Intelligent Traffic Management',
      icon: TrafficCone,
      description:
        'Our solutions include AI-powered traffic monitoring, smart signaling, and real-time analytics to reduce congestion, improve traffic flow, and enhance road safety.',
    },
    {
      title: 'Smart Lighting',
      icon: Lightbulb,
      description:
        'We deploy energy-efficient smart lighting systems that adapt to real-time conditions, significantly reducing energy consumption and maintenance costs for municipalities.',
    },
    {
      title: 'Public Safety & Surveillance',
      icon: ShieldCheck,
      description:
        'City-wide surveillance with AI-driven analytics, emergency response systems, and integrated command and control centers to ensure the safety and security of citizens.',
    },
  ];

  return (
    <>
      <BottomCTA 
          title="Building Tomorrow's Cities"
          description="CYROTICS Technologies is at the forefront of the smart city revolution, providing the technology backbone for urban innovation. We partner with municipalities to create infrastructure that is efficient, scalable, secure, and sustainable."
          primaryButtonText="Request a Smart City Consultation"
        />
    </>
  );
}
