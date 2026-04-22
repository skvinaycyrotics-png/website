import Image from 'next/image';
import {
  Factory,
  Bot,
  Cpu,
  Network,
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
  title: 'Manufacturing Units | CYROTICS TECHNOLOGIES',
  description: 'Driving Industry 4.0 with smart factory solutions, industrial automation, and robust IT/OT infrastructure for modern manufacturing units.',
};

export default function ManufacturingUnitsPage() {
  const solutions = [
    {
      title: 'Smart Factory & Industry 4.0',
      icon: Factory,
      description: 'Implementing digital twin technology, IoT-enabled machinery, and predictive maintenance to create intelligent and efficient manufacturing environments.',
    },
    {
      title: 'Industrial Robotics & Automation',
      icon: Bot,
      description: 'Deploying robotic arms for welding, assembly, and material handling, alongside PLC and SCADA systems for process control and automation.',
    },
    {
      title: 'IT/OT Converged Networks',
      icon: Network,
      description: 'Designing secure and high-performance converged networks that allow seamless communication between information technology (IT) and operational technology (OT) systems.',
    },
    {
      title: 'Manufacturing Execution Systems (MES)',
      icon: Cpu,
      description: 'Developing and integrating MES to monitor and manage work-in-progress on the factory floor, improving production efficiency and quality control.',
    },
  ];

  return (
    <>
      <BottomCTA 
          title="Embracing Industry 4.0"
          description="CYROTICS Technologies empowers manufacturing units to embrace the fourth industrial revolution. We provide end-to-end solutions for industrial automation and smart factory infrastructure, helping businesses increase productivity, reduce costs, and improve quality."
          primaryButtonText="Consult with an Industry 4.0 Expert"
        />
    </>
  );
}
