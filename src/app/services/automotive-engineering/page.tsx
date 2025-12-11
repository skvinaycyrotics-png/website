
import Image from 'next/image';
import {
  Car,
  CircuitBoard,
  Factory,
  Cpu,
  Scaling,
  TestTube2,
  Wind,
  BatteryCharging,
  ChargingStation,
  Construction,
  Bot,
  Warehouse,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
    title: 'Automotive Engineering | CYROTICS TECHNOLOGIES',
    description: 'End-to-end automotive engineering, simulation, EV, and robotics solutions to accelerate innovation in the mobility sector.',
};

const automotiveServices = [
    { title: 'Vehicle Design & Engineering', description: 'CAD modeling (BIW, Interiors, Chassis), GD&T, tolerance stack-up, and structural optimization.', icon: Car },
    { title: 'CAE/Virtual Validation', description: 'Crashworthiness simulation, NVH analysis, thermal simulation, and fatigue analysis.', icon: Cpu },
    { title: 'Embedded & Automotive Electronics', description: 'ECU hardware design, AUTOSAR architecture, and CAN/LIN/FlexRay integration.', icon: CircuitBoard },
    { title: 'ADAS & Autonomous Technology', description: 'Sensor integration (Camera, LiDAR, Radar), sensor fusion algorithms, and ADAS calibration.', icon: Bot },
    { title: 'Prototyping & Testing', description: 'Rapid prototyping, HiL/SiL/MiL testing, and on-road/track validation.', icon: TestTube2 },
];

const simulationServices = [
    { title: 'Structural CAE', description: 'Crash simulation (Front/Side/Rear impact), fatigue & durability analysis, and modal & frequency response.', icon: Construction },
    { title: 'Computational Fluid Dynamics (CFD)', description: 'Aerodynamics, drag reduction, thermal management, and battery/EV thermal simulations.', icon: Wind },
    { title: 'Multi-Body Dynamics (MBD)', description: 'Suspension kinematics, vehicle handling & ride analysis, and gear train simulation.', icon: Scaling },
];

const evServices = [
    { title: 'Battery System Engineering', description: 'Battery pack design, cell selection & balancing, thermal simulation, and BMS development.', icon: BatteryCharging },
    { title: 'EV Powertrain Development', description: 'Motor control engineering, inverter & converter design, and regenerative braking optimization.', icon: Zap },
    { title: 'Charging Infrastructure', description: 'Public charging station setup, AC/DC solutions, and charger communication (OCPP, ISO 15118).', icon: ChargingStation },
];

const automationServices = [
    { title: 'Industrial Robotics', description: 'Robotic arms for welding, assembly, material handling, and vision-based applications (ABB, FANUC, KUKA).', icon: Bot },
    { title: 'Smart Factory & Industry 4.0', description: 'Digital twin implementation, IoT-enabled machines, predictive maintenance, and real-time remote monitoring.', icon: Factory },
    { title: 'PLC, SCADA & Control Systems', description: 'PLC programming (Siemens, Allen-Bradley), SCADA dashboards, and distributed control systems.', icon: Cpu },
    { title: 'Warehouse & Logistics Automation', description: 'Automated Guided Vehicles (AGVs), AMRs, automated inventory management, and smart sorting systems.', icon: Warehouse },
];


export default function AutomotiveEngineeringPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Automotive Engineering Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Transforming automotive innovation with end-to-end engineering excellence in design, simulation, EV technology, and automation.
          </p>
        </div>
      </section>

      {/* Automotive Engineering */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Propelling the Future of Mobility
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cyrotics Technologies delivers end-to-end automotive engineering solutions designed to enhance safety, improve vehicle performance, and accelerate digital transformation across the mobility sector. From mechanical design to embedded systems, we help OEMs, Tier-1 suppliers, and manufacturing units innovate with confidence.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/auto-design/600/400"
              alt="Automotive design process"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="automotive design"
            />
          </div>
        </div>
         <div className="container mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {automotiveServices.map((service) => (
                    <Card key={service.title} className="flex items-start p-4">
                        <service.icon className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* Simulation Engineering */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-2">
            Simulation Engineering (CAE & CFD)
          </h2>
           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Accelerate product innovation with high-accuracy virtual engineering, reducing prototyping costs and enhancing design validation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {simulationServices.map((service) => (
              <Card key={service.title}>
                <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full w-fit">
                        <service.icon className="h-8 w-8 text-primary" />
                   </div>
                  <CardTitle className="pt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description} Our expertise includes tools like ANSYS, HyperMesh, Abaqus, LS-Dyna, and Star-CCM+.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* EV Engineering */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-2">
            Electric Vehicle (EV) Engineering
          </h2>
           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empowering the future of sustainable mobility with advanced engineering for battery systems, powertrains, and charging infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {evServices.map((service) => (
              <Card key={service.title}>
                <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full w-fit">
                        <service.icon className="h-8 w-8 text-primary" />
                   </div>
                  <CardTitle className="pt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description} We support OEMs and startups with AIS/BIS compliance, EMI/EMC testing, and real-world validation.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics & Industrial Automation */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Robotics & Industrial Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationServices.map((solution) => (
              <Card key={solution.title}>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-center pt-4">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section>
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Drive Your Automotive Vision Forward
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Partner with us to leverage cutting-edge engineering solutions that accelerate development and enhance vehicle performance.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Automotive Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
