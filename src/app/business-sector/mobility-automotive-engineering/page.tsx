import Image from 'next/image';
import {
  Car,
  Factory,
  Network,
  ShieldCheck,
  Bot,
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

export default function MobilityPage() {
  const solutions = [
    {
      title: 'Smart Factory & Industry 4.0',
      icon: Factory,
      description: 'Designing and implementing the IT and OT infrastructure for smart factories, including industrial networking, IoT integration, and process automation for automotive manufacturing.',
    },
    {
      title: 'Connected Vehicle Infrastructure',
      icon: Network,
      description: 'Building the robust network and data center backbone required to support connected vehicle technologies, including V2X (Vehicle-to-Everything) communication and telematics.',
    },
    {
      title: 'Cybersecurity for Automotive',
      icon: ShieldCheck,
      description: 'Securing the entire automotive ecosystem, from the factory floor to the connected car, against cyber threats to ensure product integrity and driver safety.',
    },
    {
      title: 'AI in Automotive Engineering',
      icon: Bot,
      description: 'Leveraging AI and machine learning for predictive maintenance in manufacturing, quality control through computer vision, and data analytics for improving vehicle design and performance.',
    },
  ];

  return (
    <>
      <BottomCTA 
          title="Engineering the Next Generation of Vehicles"
          description="The automotive industry is undergoing a massive transformation, driven by connectivity, electrification, and automation. CYROTICS Technologies provides the critical technology infrastructure that automotive companies need to innovate and compete in this new era of mobility."
          primaryButtonText="Partner with Cyrotics"
        />
    </>
  );
}
