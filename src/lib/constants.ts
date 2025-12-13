
import type {
  NavLink,
  Service,
  Project,
  Testimonial,
  TeamMember,
  JobOpening,
  BlogPost,
  FAQ,
  LocationFilter,
  OccupationFilter,
  Benefit,
  CareerFAQ,
  EmployeeTestimonial,
} from './types';
import {
  Server,
  ShieldCheck,
  MonitorSpeaker,
  Building,
  Code,
  Sun,
  Cpu,
  Network,
  DatabaseZap,
  Cctv,
  Fingerprint,
  Flame,
  Volume2,
  Presentation,
  ScreenShare,
  Signal,
  Building2,
  Cloud,
  Smartphone,
  GitBranch,
  Rocket,
  Wrench,
  BatteryCharging,
  Combine,
  Video,
  Fan,
  PlugZap,
  Calendar,
  GanttChartSquare,
  HeartHandshake,
  Users,
  Globe,
  GraduationCap,
  PackageCheck,
  Bot,
  BrainCircuit,
  TrafficCone,
  Map,
  HardHat,
  Database,
  Expand,
  Zap,
  Layers3,
  ServerCog,
  Shield,
  Clock,
  Shuffle,
  CloudCog,
  FileCheck2,
  Car,
  CircuitBoard,
  Factory,
  MessageSquare,
  Share2,
  Phone,
  BookOpenCheck,
  Sparkles,
  Award,
  Eye,
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    subLinks: [
      { href: '/services/data-center-cloud-infrastructure-solutions', label: 'Data Center Infrastructure' },
      { href: '/services/cloud-hybrid-it-solutions', label: 'Cloud & Hybrid IT Solutions' },
      { href: '/services/scalable-storage-architecture', label: 'Scalable Storage Architecture' },
      { href: '/services/next-gen-cyber-security-solutions', label: 'Next Gen Cyber Security' },
      { href: '/services/security-surveillance', label: 'Security & Surveillance' },
      { href: '/services/audio-visual-communication', label: 'Audio-Visual & Communication' },
      { href: '/services/unified-communications', label: 'Unified Communications (UC)' },
      { href: '/services/smart-factory-building-solutions', label: 'Smart Factory & Building Solutions' },
      { href: '/services/smart-city-solutions', label: 'Smart City Solutions' },
      { href: '/services/software-development', label: 'Software Development' },
      { href: '/services/ai-ml-solutions', label: 'AI & ML Solutions' },
      { href: '/services/renewable-energy', label: 'Renewable Energy' },
      { href: '/services/automotive-engineering', label: 'Automotive Engineering' },
      { href: '/services/managed-services', label: 'Managed Services' },
    ],
  },
   {
    href: '#industry',
    label: 'Business Sectors',
    subLinks: [
      { href: '/business-sector/overview', label: 'Overview' },
       {
        href: '#industry-solutions',
        label: 'Industry Solution',
        subLinks: [
          { href: '/business-sector/urban-development', label: 'Urban Development' },
          { href: '/business-sector/telecom', label: 'Telecom' },
          { href: '/business-sector/logistics', label: 'Logistics' },
          { href: '/business-sector/education', label: 'Education' },
          { href: '/business-sector/health-pharmacy', label: 'Health & Pharmacy' },
          { href: '/business-sector/processing-units', label: 'Processing Units' },
          { href: '/business-sector/manufacturing-units', label: 'Manufacturing Units' },
          { href: '/business-sector/mobility-automotive-engineering', label: 'Mobility & Automotive' },
          { href: '/business-sector/energy', label: 'Energy' },
        ],
      },
      {
        href: '#public-solutions',
        label: 'Public Solution',
        subLinks: [
          { href: '/business-sector/defence', label: 'Defence' },
          { href: '/business-sector/smart-city', label: 'Smart City' },
          { href: '/business-sector/e-governance', label: 'E-Governance' },
          { href: '/business-sector/public-sector-undertakings', label: 'Public Sector Undertakings' },
        ],
      },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

export const SERVICES: Service[] = [
  {
    slug: 'data-center-cloud-infrastructure-solutions',
    title: 'Data Center Infrastructure Solutions',
    category: 'Data Center Infrastructure Solutions',
    shortDescription:
      'We architect and manage resilient IT infrastructures that power enterprise success. From modernizing data centers to transforming networks, our solutions ensure high availability, performance, and scalability.',
    description:
      'We architect and manage resilient IT infrastructures that power enterprise success. From modernizing data centers to transforming networks, our solutions ensure high availability, performance, and scalability.',
    icon: Server,
    imageUrl: 'https://picsum.photos/seed/infra/1200/800',
    imageHint: 'data center servers',
    features: [
      {
        title: 'End-to-End Data Center Build',
        description:
          'We provide complete turnkey data center construction, from initial design and civil work to electrical, cooling, and fire safety systems. Our service includes deploying all IT hardware, delivering a production-ready facility.',
        icon: HardHat,
      },
      {
        title: 'AI-Enabled Next-Gen Data Center',
        description:
          'Transform your data center into an intelligent, self-optimizing environment. We integrate AI for predictive analytics, automated workload balancing, and enhanced energy efficiency to ensure peak performance.',
        icon: BrainCircuit,
      },
      {
        title: 'Cloud Infrastructure Solutions',
        description:
          'Leverage the power of the cloud with our expert services in public, private, and hybrid cloud deployments. We design secure, scalable, and cost-effective cloud architectures on platforms like AWS, Azure, and GCP.',
        icon: Cloud,
      },
      {
        title: 'Data Center Modernization',
        description:
          'Optimize your data center for efficiency, cooling, and power with our modification and optimization services.',
        icon: Cpu,
      },
      {
        title: 'Network Transformation',
        description:
          'Seamlessly migrate to next-gen networks with our expertise in SD-WAN, cloud networking, and wireless solutions.',
        icon: Network,
      },
      {
        title: 'IT Infrastructure Management',
        description:
          'Proactive monitoring, management, and support for your entire IT stack, ensuring operational excellence.',
        icon: DatabaseZap,
      },
    ],
    techStack: ['Cisco', 'HPE', 'Dell EMC', 'VMware', 'Microsoft Azure', 'AWS', 'GCP'],
    caseStudies: [{ title: 'Enterprise Network Overhaul', slug: 'proj-1' }],
  },
  {
    slug: 'cloud-hybrid-it-solutions',
    title: 'Cloud & Hybrid IT Solutions',
    category: 'Data Center & Cloud Infrastructure Solutions',
    shortDescription:
      'Empowering enterprises with secure, scalable, and intelligent cloud and hybrid IT infrastructures designed for performance, resilience, and future growth.',
    description:
      'We design and implement Cloud and Hybrid IT solutions that seamlessly integrate on-premise systems with public and private cloud environments—enabling innovation without compromise.',
    icon: CloudCog,
    imageUrl: 'https://picsum.photos/seed/cloud-hybrid/1200/800',
    imageHint: 'hybrid cloud network',
    features: [
      {
        title: 'Cloud Architecture & Strategy',
        description:
          'Expert design for AWS, Azure & GCP. We provide cloud readiness assessment, and a detailed migration planning & execution strategy.',
        icon: Cloud,
      },
      {
        title: 'Hybrid IT Integration',
        description:
          'Seamless integration of on-premise & cloud environments with secure connectivity, workload balancing, and multi-cloud interoperability.',
        icon: GitBranch,
      },
      {
        title: 'Cloud Security & Compliance',
        description:
          'Implementation of Zero Trust cloud architecture, IAM, MFA, encryption, and firewall integration to meet government & industry standards.',
        icon: ShieldCheck,
      },
      {
        title: 'Cloud Operations & Optimization',
        description:
          'Continuous performance monitoring, cost optimization (FinOps), and automation & orchestration of cloud resources.',
        icon: ServerCog,
      },
      {
        title: 'Disaster Recovery & Business Continuity',
        description:
          'Robust cloud-based DR solutions, high-availability architecture, and automated backup & recovery processes to ensure business continuity.',
        icon: Shuffle,
      },
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'VMware', 'Kubernetes', 'Terraform'],
    caseStudies: [],
  },
  {
    slug: 'scalable-storage-architecture',
    title: 'Scalable Storage Architecture',
    category: 'Data Center & Cloud Infrastructure Solutions',
    shortDescription: 'Secure, scalable, and high-performance storage solutions for data centers, hospitals, airports, and government institutions, powering your critical IT infrastructure.',
    description: 'Enterprise-Grade Storage Solutions for Data Centers, Hospitals, Airports & Government Institutions. We design and deploy secure, scalable, high-performance storage for your critical IT infrastructure.',
    icon: Database,
    imageUrl: 'https://picsum.photos/seed/storage/1200/800',
    imageHint: 'data storage array',
    features: [
      {
        title: 'Easily scale from TB to multiple PB',
        description: 'Supports horizontal and vertical expansion, ideal for growing enterprise workloads.',
        icon: Expand,
      },
      {
        title: 'High-Performance Storage (All-Flash / Hybrid)',
        description: 'NVMe/SSD-based high-speed response with low-latency read/write operations, suitable for HPC, databases, VMs, and analytics.',
        icon: Zap,
      },
      {
        title: 'Multi-Tier Storage',
        description: 'Automated tiering based on data usage across high-performance SSD, cost-optimal SAS, and archival HDD storage.',
        icon: Layers3,
      },
      {
        title: 'SAN / NAS / Object Storage Support',
        description: 'Support for SAN (Fibre Channel, iSCSI), NAS (NFS, SMB/CIFS), and Object Storage (S3) for any workload.',
        icon: ServerCog,
      },
      {
        title: 'Storage Virtualization',
        description: 'Pool storage from multiple vendors into a single, centrally managed console to reduce hardware dependency.',
        icon: Combine,
      },
      {
        title: 'High Availability & Redundancy',
        description: 'Active-active/active-passive architecture with RAID 5/6/10 support and multipath I/O (MPIO) failover clusters.',
        icon: Shield,
      },
      {
        title: 'Data Protection & Disaster Recovery',
        description: 'Features snapshot replication, synchronous/asynchronous replication, offsite DR, and immutable storage for ransomware protection.',
        icon: Clock,
      },
      {
        title: 'Intelligent Data Management',
        description: 'Benefit from deduplication, compression, thin provisioning, and real-time monitoring and forecasting.',
        icon: BrainCircuit,
      },
      {
        title: 'Cloud-Ready Storage',
        description: 'Hybrid & multi-cloud integration with support for cloud backup (AWS, Azure, GCP) and cloud tiering.',
        icon: CloudCog,
      },
      {
        title: 'Secure Storage Architecture',
        description: 'AES-256 data-at-rest encryption, end-to-end data path encryption, and RBAC with MFA access control.',
        icon: FileCheck2,
      },
    ],
    techStack: ['Dell EMC', 'NetApp', 'HPE', 'Pure Storage', 'IBM Storage', 'Ceph', 'MinIO'],
    caseStudies: [],
  },
    {
    slug: 'next-gen-cyber-security-solutions',
    title: 'Next Gen Cyber Security Solutions',
    category: 'Network Security & Cyber Security',
    shortDescription: 'Defend your digital assets with our advanced, multi-layered cybersecurity services, powered by AI and a Zero Trust framework to protect against evolving threats.',
    description:
      'Defend your digital assets with our advanced, multi-layered cybersecurity services. We leverage AI-driven threat intelligence, proactive monitoring, and a Zero Trust framework to protect your infrastructure, data, and users against evolving cyber threats.',
    icon: ShieldCheck,
    imageUrl: 'https://picsum.photos/seed/cybersec/1200/800',
    imageHint: 'cyber security',
    features: [
      {
        title: 'Zero Trust Architecture',
        description: 'Implement a "never trust, always verify" model to secure your network, applications, and data by eliminating implicit trust and continuously validating every access request.',
        icon: Fingerprint,
      },
      {
        title: 'AI-Powered Threat Detection',
        description: 'Utilize machine learning and AI to proactively detect, analyze, and respond to threats in real-time, moving from a reactive to a predictive security posture.',
        icon: Bot,
      },
      {
        title: 'Managed Security Operations (SOC)',
        description: 'Our 24/7 Security Operations Center provides continuous monitoring, threat hunting, and incident response to safeguard your organization around the clock.',
        icon: BrainCircuit,
      },
    ],
    techStack: ['Palo Alto Networks', 'Fortinet', 'CrowdStrike', 'SIEM', 'SOAR'],
    caseStudies: [],
  },
  {
    slug: 'security-surveillance',
    title: 'Security & Surveillance',
    category: 'CCTV & ELV Systems',
    shortDescription:
      'Protect your assets, people, and operations with our comprehensive security solutions. We design and deploy integrated systems for surveillance, access control, and fire detection, providing a unified security posture.',
    description:
      'Protect your assets, people, and operations with our comprehensive security solutions. We design and deploy integrated systems for surveillance, access control, and fire detection, providing a unified security posture.',
    icon: Cctv,
    imageUrl: 'https://picsum.photos/seed/security/1200/800',
    imageHint: 'security camera',
    features: [
      {
        title: 'CCTV Surveillance Systems',
        description:
          'High-definition IP, Analog, and Hybrid camera systems with advanced video analytics and remote monitoring.',
        icon: Cctv,
      },
      {
        title: 'Access Control Systems',
        description:
          'Secure your premises with biometric, card-based, and mobile access control solutions for granular control.',
        icon: Fingerprint,
      },
      {
        title: 'Fire Detection & Safety',
        description:
          'Intelligent fire alarm and suppression systems that provide early detection and ensure regulatory compliance.',
        icon: Flame,
      },
      {
        title: 'Integrated Security Solutions',
        description: 'Unify all security systems onto a single platform for centralized command and control, improving situational awareness and response efficiency.',
        icon: Combine,
      },
    ],
    techStack: ['Hikvision', 'Bosch', 'Axis Communications', 'Honeywell'],
    caseStudies: [{ title: 'Corporate Campus Security', slug: 'proj-2' }],
  },
  {
    slug: 'audio-visual-communication',
    title: 'Audio-Visual & Communication',
    category: 'Audio-Visual & Communication',
    shortDescription:
      'Enhance communication and collaboration with our state-of-the-art audio-visual solutions. We create immersive experiences for boardrooms, auditoriums, and public spaces.',
    description:
      'Enhance communication and collaboration with our state-of-the-art audio-visual solutions. We create immersive experiences for boardrooms, auditoriums, and public spaces.',
    icon: MonitorSpeaker,
    imageUrl: 'https://picsum.photos/seed/av/1200/800',
    imageHint: 'conference room',
    features: [
      {
        title: 'Audio & Video Solutions',
        description: 'Design and installation of professional audio systems and high-definition video displays for auditoriums, boardrooms, and public spaces.',
        icon: Video,
      },
      {
        title: 'Conference Room Solutions',
        description:
          'Smart conference rooms with wireless presentation, video conferencing, and automated controls.',
        icon: Presentation,
      },
      {
        title: 'Digital Signage',
        description:
          'Dynamic and centrally managed digital signage networks for corporate communication, advertising, and wayfinding.',
        icon: ScreenShare,
      },
      {
        title: 'Public Address Systems',
        description:
          'Integrated public address and voice alarm systems for clear communication in any environment.',
        icon: Volume2,
      },
    ],
    techStack: ['Crestron', 'JBL', 'Polycom', 'Samsung Displays'],
    caseStudies: [],
  },
    {
    slug: 'unified-communications',
    title: 'Unified Communications (UC)',
    category: 'Audio-Visual & Communication',
    shortDescription:
      'Integrates all communication tools into a single, easy-to-use platform, enabling teams to collaborate efficiently from anywhere.',
    description:
      'Unified Communications (UC) integrates all communication tools into a single, easy-to-use platform, enabling teams to collaborate efficiently from anywhere. Whether your workforce is on-site, remote, or distributed across multiple locations, UC ensures smooth communication without the complexity of switching between multiple applications.',
    icon: Users,
    imageUrl: 'https://picsum.photos/seed/uc/1200/800',
    imageHint: 'team collaboration video call',
    features: [
      {
        title: 'Unified Voice & Video Calling',
        description: 'High-quality voice and video calls with advanced features like call routing, IVR, voicemail-to-email, and conference bridging.',
        icon: Phone,
      },
      {
        title: 'Instant Messaging & Presence',
        description: 'Send quick messages, share files, and check real-time availability of your team members.',
        icon: MessageSquare,
      },
      {
        title: 'Audio & Video Conferencing',
        description: 'Host secure meetings, webinars, and virtual discussions with HD-quality video and screen-sharing capabilities.',
        icon: Video,
      },
      {
        title: 'Collaboration Tools',
        description: 'Integrated platforms for group chats, document sharing, and collaborative workspaces to enhance teamwork.',
        icon: Users,
      },
       {
        title: 'Mobility & Remote Access',
        description: 'Access communication tools from smartphones, tablets, or laptops, ensuring uninterrupted communication on the move.',
        icon: Smartphone,
      },
       {
        title: 'Integration with Business Applications',
        description: 'Seamless integration with CRM, ERP, helpdesk systems, and project management tools for end-to-end communication flow.',
        icon: Share2,
      },
    ],
    techStack: ['Microsoft Teams', 'Cisco Webex', 'Zoom', 'Avaya', 'Poly'],
    caseStudies: [],
  },
  {
    slug: 'smart-factory-building-solutions',
    title: 'Smart Factory & Building Solutions',
    category: 'Smart Factory & Building Solutions',
    shortDescription:
      'Transform your building into a smart, responsive, and sustainable environment. Our solutions integrate HVAC, lighting, security, and energy systems into a single, intelligent platform.',
    description:
      'Transform your building into a smart, responsive, and sustainable environment. Our solutions integrate HVAC, lighting, security, and energy systems into a single, intelligent platform.',
    icon: Building,
    imageUrl: 'https://picsum.photos/seed/building/1200/800',
    imageHint: 'modern architecture',
    features: [
      {
        title: 'Building Management Systems (BMS)',
        description:
          'Centralized control and automation of your building’s core systems for operational efficiency.',
        icon: Building2,
      },
       {
        title: 'HVAC Control Systems',
        description: 'Intelligent control of heating, ventilation, and air conditioning to optimize comfort and reduce energy consumption.',
        icon: Fan,
      },
      {
        title: 'Energy Management',
        description:
          'Monitor, analyze, and optimize energy consumption to reduce costs and improve sustainability.',
        icon: BatteryCharging,
      },
      {
        title: 'IoT Integration',
        description:
          'Connect and manage a wide range of IoT sensors and devices for real-time insights and automation.',
        icon: Signal,
      },
    ],
    techStack: ['Schneider Electric', 'Siemens', 'Johnson Controls', 'LoRaWAN'],
    caseStudies: [],
  },
    {
    slug: 'smart-city-solutions',
    title: 'Smart City Solutions',
    category: 'Smart City Solutions',
    shortDescription: 'Empower urban environments with our integrated smart city solutions, enhancing public safety, traffic management, and resource efficiency through IoT and data analytics.',
    description:
      'We empower urban environments by designing and deploying integrated smart city solutions. From intelligent traffic management to city-wide surveillance and smart lighting, we use IoT, data analytics, and robust network infrastructure to create safer, more efficient, and sustainable cities.',
    icon: Building2,
    imageUrl: 'https://picsum.photos/seed/city/1200/800',
    imageHint: 'smart city',
    features: [
      {
        title: 'Intelligent Traffic Management',
        description: 'Deploy smart traffic signals, vehicle detection sensors, and centralized management platforms to reduce congestion and improve traffic flow.',
        icon: TrafficCone,
      },
      {
        title: 'City-Wide Surveillance',
        description: 'Implement a network of AI-powered cameras for public safety, incident detection, and crowd management with a central command and control center.',
        icon: Cctv,
      },
      {
        title: 'Smart Utilities & IoT',
        description: 'Integrate IoT sensors for smart lighting, waste management, and environmental monitoring to optimize resource usage and reduce operational costs.',
        icon: Map,
      },
    ],
    techStack: ['LoRaWAN', '5G', 'IoT Platforms', 'GIS', 'Video Analytics'],
    caseStudies: [],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    category: 'Software Development',
    shortDescription:
      'From enterprise applications to cloud-native solutions, our software development services are tailored to your unique business needs, driving innovation and efficiency.',
    description:
      'From enterprise applications to cloud-native solutions, our software development services are tailored to your unique business needs, driving innovation and efficiency.',
    icon: Code,
    imageUrl: 'https://picsum.photos/seed/software/1200/800',
    imageHint: 'code editor',
    features: [
      {
        title: 'Custom Enterprise Applications',
        description:
          'Bespoke software solutions designed to streamline your business processes and workflows.',
        icon: Rocket,
      },
      {
        title: 'Cloud & Mobile Solutions',
        description:
          'Develop and deploy scalable applications on the cloud and deliver seamless experiences on mobile devices.',
        icon: Smartphone,
      },
      {
        title: 'API Development & Integration',
        description:
          'Build and integrate robust APIs to connect your systems and unlock new business capabilities.',
        icon: GitBranch,
      },
    ],
    techStack: ['React', 'Node.js', 'Python', 'Docker', 'AWS'],
    caseStudies: [],
  },
  {
    slug: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    category: 'Software Development',
    shortDescription: 'Empower your business with our custom AI and Machine Learning solutions, from predictive analytics to intelligent automation.',
    description: 'At Cyrotics Technologies, we believe the future belongs to organizations that can think smarter, act faster, and innovate continuously. Our AI & ML solutions empower businesses to move beyond traditional automation and unlock real-time intelligence, predictive accuracy, and decision-making capabilities that scale effortlessly.',
    icon: BrainCircuit,
    imageUrl: 'https://picsum.photos/seed/ai-ml/1200/800',
    imageHint: 'artificial intelligence brain',
    features: [
      {
        title: 'AI-Powered Automation',
        description: 'Streamline repetitive workflows using intelligent automation systems that reduce manual effort, minimize errors, and deliver operational precision.',
        icon: Bot,
      },
      {
        title: 'Machine Learning Models',
        description: 'We build robust ML models engineered to understand data patterns, predict outcomes, and support strategic decisions.',
        icon: Layers3,
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Enable machines to see, analyze, and interpret real-world visuals with advanced vision models.',
        icon: Eye,
      },
      {
        title: 'Natural Language Processing (NLP)',
        description: 'Allow systems to comprehend human language and deliver intelligent, contextual responses, like chatbots and sentiment analysis.',
        icon: MessageSquare,
      },
      {
        title: 'AI for IoT & Smart Infrastructure',
        description: 'Integrate AI with IoT to unlock adaptive, self-learning environments for predictive maintenance and energy optimization.',
        icon: Signal,
      },
      {
        title: 'AI Consulting & Strategy',
        description: 'We guide organizations in developing future-proof AI strategies aligned with business KPIs, from readiness assessment to end-to-end solution design.',
        icon: Sparkles,
      },
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'AWS SageMaker', 'GCP AI Platform'],
    caseStudies: [],
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    category: 'Renewable Energy',
    shortDescription:
      'Harness the power of the sun with our end-to-end solar energy solutions. We help businesses reduce their carbon footprint and energy costs with reliable and efficient solar power systems.',
    description:
      'Harness the power of the sun with our end-to-end solar energy solutions. We help businesses reduce their carbon footprint and energy costs with reliable and efficient solar power systems.',
    icon: Sun,
    imageUrl: 'https://picsum.photos/seed/solar/1200/800',
    imageHint: 'solar panels',
    features: [
      {
        title: 'Solar Power Systems',
        description:
          'Design, installation, and commissioning of rooftop and ground-mounted solar power plants.',
        icon: Sun,
      },
      {
        title: 'Energy Storage Solutions',
        description:
          'Integrate battery storage to ensure power reliability and optimize energy usage.',
        icon: BatteryCharging,
      },
      {
        title: 'Grid-Tie Systems',
        description: 'Seamlessly integrate your solar power system with the public grid, enabling net metering and ensuring a stable power supply.',
        icon: PlugZap,
      },
      {
        title: 'Solar Maintenance',
        description:
          'Comprehensive O&M services to maximize the performance and lifespan of your solar assets.',
        icon: Wrench,
      },
    ],
    techStack: ['Trina Solar', 'SMA', 'Enphase', 'Tesla Powerwall'],
    caseStudies: [],
  },
  {
    slug: 'automotive-engineering',
    title: 'Automotive Engineering',
    category: 'Automotive Engineering',
    shortDescription: 'End-to-end automotive engineering, simulation, EV, and robotics solutions to accelerate innovation in the mobility sector.',
    description: 'Cyrotics Technologies delivers end-to-end automotive engineering solutions designed to enhance safety, improve vehicle performance, and accelerate digital transformation across the mobility sector. From mechanical design to embedded systems, we help OEMs, Tier-1 suppliers, and manufacturing units innovate with confidence.',
    icon: Car,
    imageUrl: 'https://picsum.photos/seed/auto-eng/1200/800',
    imageHint: 'automotive engineering design',
    features: [
      { title: 'Vehicle Design & Engineering', description: 'CAD modeling (BIW, Interiors, Chassis), GD&T, and structural optimization.', icon: Car },
      { title: 'CAE/Virtual Validation', description: 'Crashworthiness simulation, NVH analysis, and thermal simulation.', icon: Cpu },
      { title: 'Embedded & Automotive Electronics', description: 'ECU hardware design, AUTOSAR architecture support, and CAN/LIN/FlexRay integration.', icon: CircuitBoard },
      { title: 'Robotics & Industrial Automation', description: 'Industrial robotics, smart factory solutions, and PLC/SCADA control systems for manufacturing.', icon: Factory }
    ],
    techStack: ['ANSYS', 'HyperMesh', 'CATIA', 'Simulink', 'CANoe'],
    caseStudies: [],
  },
  {
    slug: 'managed-services',
    title: 'Managed Services',
    category: 'Managed Services',
    shortDescription: 'Proactive, predictive, and always-on managed services to keep your IT ecosystem secure, optimized, and operational.',
    description: 'Our Managed Services are designed to keep your IT ecosystem secure, optimized, and always operational—so you can focus on innovation while we manage complexity.',
    icon: ServerCog,
    imageUrl: 'https://picsum.photos/seed/managed/1200/800',
    imageHint: 'managed services control room',
    features: [
      {
        title: 'Network Managed Services',
        description: '24×7 NOC Monitoring, LAN/WAN/Wi-Fi Management, SD-WAN Operations, and Performance Optimization.',
        icon: Network,
      },
      {
        title: 'Cybersecurity Managed Services',
        description: 'SOC (L1, L2, L3) Operations, Firewall Management, SIEM/SOAR & Log Analytics, and Vulnerability Management.',
        icon: Shield,
      },
      {
        title: 'Data Center Managed Services',
        description: 'Tier-III Data Center Operations, Server/Storage/Virtualization Management, Backup & Disaster Recovery (DR).',
        icon: Database,
      },
      {
        title: 'Cloud & Hybrid IT Management',
        description: 'AWS/Azure/Private Cloud Operations, Hybrid Infrastructure Monitoring, Cost Optimization, and Security Governance.',
        icon: CloudCog,
      },
      {
        title: 'AV, ELV & Smart Infrastructure Management',
        description: 'Command & Control Centers, Digital Signage & AV Systems, CCTV Monitoring, and BMS/IBMS Solutions.',
        icon: Building,
      },
      {
        title: 'IoT & Automation Managed Services',
        description: 'Device Monitoring & Health Analytics, Edge Computing Support, and Predictive Maintenance Models.',
        icon: Bot,
      },
    ],
    techStack: ['ITIL', 'NOC', 'SOC', 'SIEM', 'SOAR', 'AWS', 'Azure', 'VMware'],
    caseStudies: [],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-cims',
    title: 'Chhindwara Institute of Medical Science – Madhya Pradesh',
    client: 'PWD',
    shortDescription:
      'Complete IT infrastructure development, including data center, networking, CCTV, and wireless infrastructure.',
    longDescription:
      "For the Chhindwara Institute of Medical Science in Madhya Pradesh, we executed a comprehensive IT infrastructure project. The scope included the full development of the IT infrastructure, migration and commissioning of the data center, setup of the network core and access layers, installation of CCTV and surveillance server infrastructure, and implementation of wireless infrastructure, passive cabling, and server management.",
    imageUrl: 'https://picsum.photos/seed/projcims/600/400',
    imageHint: 'hospital building',
    tags: ['IT Infrastructure', 'Data Center', 'Networking', 'CCTV', 'Smart Campus'],
    timeline: 'Ongoing',
    results: 'A state-of-the-art smart medical campus providing seamless connectivity, high-availability systems, and secure data accessibility to staff and students.',
  },
  {
    id: 'proj-gmc-chandrapur',
    title: 'Government Medical College – Chandrapur, Maharashtra',
    client: 'HSCC',
    shortDescription:
      'End-to-end IT & ELV infrastructure, Wi-Fi campus, network security, and IP CCTV with a monitoring command centre.',
    longDescription:
      'For the Government Medical College in Chandrapur, we provided a comprehensive turnkey solution. Our scope covered end-to-end IT and ELV infrastructure, including a campus-wide Wi-Fi deployment, a robust network security and firewall setup, and an advanced IP CCTV system complete with a central monitoring command centre. This project ensures the new medical college has a secure, scalable, and high-performance technology backbone.',
    imageUrl: 'https://picsum.photos/seed/gmc-chandrapur/600/400',
    imageHint: 'modern medical college',
    tags: [
      'IT Infrastructure',
      'Wi-Fi',
      'Network Security',
      'CCTV',
      'Smart Campus',
    ],
    timeline: '12 Months',
    results: 'Delivered a turnkey technology infrastructure solution for a new-build medical college, ensuring campus-wide connectivity and security from day one.',
  },
  {
    id: 'proj-3',
    title: 'Mahindra Enclave – Mumbai',
    client: 'Mahindra & Mahindra',
    shortDescription:
      'Comprehensive fire safety and smart security solutions, including fire alarms, public address systems, surveillance, and access control.',
    longDescription:
      "For the prestigious Mahindra Enclave in Mumbai, we provided an integrated safety and security solution. The project involved deploying a sophisticated Fire Alarm System coupled with a Public Address System for emergency coordination. We also installed a smart surveillance network and advanced access control systems to ensure the security and safety of the residents.",
    imageUrl: 'https://picsum.photos/seed/proj3/600/400',
    imageHint: 'modern apartment building',
    tags: ['Fire Safety', 'Surveillance', 'Access Control', 'Smart Building'],
    timeline: '18 Months',
    results: 'Enhanced resident safety and security with a unified, state-of-the-art system for fire detection, emergency communication, and premises monitoring.',
  },
  {
    id: 'proj-4',
    title: 'Bihar Animal Sciences University – Patna',
    client: 'ACIL',
    shortDescription:
      'Full campus technology deployment including networking, data center, fire alarm, PA system, access control, CCTV, and Wi-Fi.',
    longDescription:
      'We delivered a comprehensive technology overhaul for the Bihar Animal Sciences University campus. The project included complete campus networking, data center cabling & server setup, a fire alarm and public address system, access control, and the deployment of integrated CCTV and Wi-Fi systems to create a modern, secure, and connected learning environment.',
    imageUrl: 'https://picsum.photos/seed/proj4/600/400',
    imageHint: 'university campus',
    tags: ['Campus Networking', 'Data Center', 'Fire Safety', 'Access Control', 'CCTV', 'Wi-Fi'],
    timeline: '10 Months',
    results: 'Created a modern, secure, and fully connected campus environment.',
  },
  {
    id: 'bpgmc',
    title: 'Bhagwan Parshuram Government Medical College – Kaithal, Haryana',
    client: 'Bridge and Roof Company (India) Limited',
    shortDescription: 'Comprehensive IT & ELV infrastructure for a new medical college, including smart lecture halls, campus-wide networking, and integrated security systems.',
    longDescription: 'We provided a full turnkey solution for the Bhagwan Parshuram Government Medical College in Haryana. The project encompassed the entire IT and Extra-Low Voltage (ELV) infrastructure. This included smart lecture hall solutions, a high-speed fiber backbone and enterprise network, complete campus networking, data center cabling & server setup, Fire Alarm & Public Address System Solutions, Access Control System, and comprehensive CCTV, Wi-Fi & Access Control coverage across the campus.',
    imageUrl: 'https://picsum.photos/seed/bpgmc/600/400',
    imageHint: 'medical college building',
    tags: [
        'IT Infrastructure', 
        'ELV', 
        'Smart Lecture Hall', 
        'Networking', 
        'Data Center', 
        'Fire Safety', 
        'Access Control', 
        'CCTV', 
        'Wi-Fi'
    ],
    timeline: 'Ongoing',
    results: 'Delivering a cutting-edge, fully integrated technology backbone for a new government medical college, ensuring a secure, connected, and future-ready environment for learning and healthcare.',
  },
  {
    id: 'sgtb',
    title: 'Shri Guru Tegh Bahadur Sahib Government Medical College – Yamuna Nagar, Haryana',
    client: 'Government of Haryana',
    shortDescription: 'End-to-end smart campus solution, integrating IT, ELV, security, and data center infrastructure for a new government medical college.',
    longDescription: 'This project involves the delivery of a comprehensive technology infrastructure for a new medical college. The scope includes: Network & Security Infrastructure, CCTV & Video Surveillance System, Data Center Setup, IT & ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone & Enterprise Network, Smart Hospital IT Infrastructure, Campus Wi-Fi & Secure Network Backbone, CCTV Surveillance & Data Center Deployment, Complete Campus Networking, Data Center Cabling & Server Setup, Fire Alarm System & Public Address System Solutions, and an integrated Access Control System.',
    imageUrl: 'https://picsum.photos/seed/sgtb/600/400',
    imageHint: 'modern medical college',
    tags: [
        'IT Infrastructure',
        'ELV',
        'Smart Campus',
        'Data Center',
        'Network Security',
        'CCTV',
        'Fire Safety',
        'Access Control',
        'Wi-Fi'
    ],
    timeline: 'Ongoing',
    results: "The project delivers a state-of-the-art smart medical campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT and ELV infrastructure, the institution now benefits from:\n\n- Uninterrupted network performance for academic, administrative, and clinical operations\n\n- Secure and centralized data accessibility for staff, students, and medical professionals\n\n- Enhanced digital learning experiences through reliable communication systems\n\n- Improved operational efficiency driven by automation and modern network design\n\nThis transformation empowers the medical campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation.",
  },
  {
    id: 'nial-jewar',
    title: 'Noida International Airport Limited - Jewar, Uttar Pradesh',
    client: 'Noida International Airport Limited',
    shortDescription: 'Comprehensive data center and network infrastructure setup for the new international airport.',
    longDescription: 'For the new Noida International Airport, we are providing critical foundational technology infrastructure. This includes establishing the core Network & Security Infrastructure, setting up the primary Data Center, and executing the complete Data Center Cabling & Server Setup to ensure robust and scalable airport operations from day one.',
    imageUrl: 'https://picsum.photos/seed/nial/600/400',
    imageHint: 'airport terminal',
    tags: ['Data Center', 'Network Security', 'IT Infrastructure', 'Airport'],
    timeline: 'Ongoing',
    results: 'Building a future-ready, high-performance technology backbone to support one of India\'s largest greenfield airport projects.',
  },
  {
    id: 'techno-dc',
    title: 'Techno Data Center – Chennai',
    client: 'Techno Group, Chennai',
    shortDescription: 'Comprehensive data center build-out in Chennai, including network and security infrastructure, CCTV, and complete data center cabling and setup.',
    longDescription: 'We delivered a full-scale data center infrastructure project for Techno Group in Chennai. The scope included setting up the core Network & Security Infrastructure, a comprehensive CCTV & Video Surveillance System, the primary Data Center, and all supporting IT Infrastructure. We implemented a Fiber Backbone for high-speed connectivity, managed the complete data center networking, cabling, and server setup, and deployed a robust Wireless Solution with integrated Access Control and Wi-Fi.',
    imageUrl: 'https://picsum.photos/seed/technodc/600/400',
    imageHint: 'data center servers',
    tags: ['Data Center', 'Network Security', 'IT Infrastructure', 'CCTV', 'Wireless', 'Access Control'],
    timeline: 'Completed',
    results: "The project designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT infrastructure, the benefits from:\n\nUninterrupted network performance \n\nSecure and centralized data accessibility \n\nEnhanced digital learning experiences through reliable communication systems\n\nImproved operational efficiency driven by automation and modern network design",
  },
  {
    id: 'aiims-rajkot',
    title: 'All India Institute of Medical Sciences – Rajkot, Gujarat',
    client: 'AIIMS Rajkot',
    shortDescription: 'End-to-end smart hospital and campus infrastructure, including data center, networking, security, and smart classroom solutions.',
    longDescription: 'We are delivering a comprehensive, turnkey technology solution for the entire campus and hospital. The scope of work includes: Network & Security Infrastructure, CCTV & Video Surveillance System, Data Center Setup, IT & ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone & Enterprise Network, Smart Hospital IT Infrastructure, Campus Wi-Fi & Secure Network Backbone, CCTV Surveillance & Data Center Deployment, Complete Campus Networking, Data Center Cabling & Server Setup, Fire Alarm System & Public Address System Solutions, and an integrated Access Control System.',
    imageUrl: 'https://picsum.photos/seed/aiimsrajkot/600/400',
    imageHint: 'modern hospital building',
    tags: ['Smart Hospital', 'IT Infrastructure', 'Data Center', 'Network Security', 'Smart Campus', 'ELV', 'CCTV'],
    timeline: 'Ongoing',
    results: 'The project delivers a state-of-the-art smart medical campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT and ELV infrastructure, the institution now benefits from:\n\n- Uninterrupted network performance for academic, administrative, and clinical operations\n\n- Secure and centralized data accessibility for staff, students, and medical professionals\n\n- Enhanced digital learning experiences through reliable communication systems\n\n- Improved operational efficiency driven by automation and modern network design\n\nThis transformation empowers the medical campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation.',
  },
  {
    id: 'iim-bodh-gaya',
    title: 'IIM Bodh Gaya – Bihar',
    client: 'Indian Institute of Management Bodh Gaya',
    shortDescription: 'Comprehensive smart campus solution for IIM Bodh Gaya, integrating IT, security, and data center infrastructure.',
    longDescription: "For IIM Bodh Gaya, we are providing an end-to-end technology infrastructure solution. The scope includes Network & Security Infrastructure, CCTV & Video Surveillance, Data Center Setup, IT & ELV Infrastructure, Smart Lecture Hall Solutions, a Fiber Backbone & Enterprise Network, and a comprehensive Access Control System. This creates a fully integrated and modern campus environment fit for a premier management institute.",
    imageUrl: 'https://picsum.photos/seed/iim-gaya/600/400',
    imageHint: 'university campus building',
    tags: [
        'Smart Campus',
        'IT Infrastructure',
        'Data Center',
        'Network Security',
        'ELV',
        'CCTV'
    ],
    timeline: 'Ongoing',
    results: "The project delivers a state-of-the-art smart campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources for students and faculty. By integrating advanced IT and ELV infrastructure, the institution benefits from:\n\n- Uninterrupted network performance for academic and administrative operations.\n- Secure and centralized data accessibility for all stakeholders.\n- Enhanced digital learning experiences through reliable communication and smart classroom systems.\n- Improved operational efficiency driven by automation and modern network design.\n\nThis transformation empowers the campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation.",
  },
  {
    id: 'dlf-mall-goa',
    title: 'DLF Mall – Goa',
    client: 'DLF Limited',
    shortDescription: 'State-of-the-art Audio-Visual (AV) infrastructure for a seamless and immersive visitor experience.',
    longDescription: `Cyrotics Technologies successfully delivered a state-of-the-art Audio-Visual (AV) infrastructure for the prestigious DLF Mall – Goa, ensuring a seamless and immersive visitor experience. Our scope included the design, integration, testing, and commissioning of a complete smart AV ecosystem. This involved a centralized AV distribution system for multi-screen content routing, deployment of 4K digital signage and video walls, and a comprehensive Public Address & Background Music system with zonal controls. We also equipped the conference and control rooms with modern AV solutions, including wireless presentation and video conferencing capabilities, to streamline mall operations.`,
    imageUrl: 'https://picsum.photos/seed/dlf-goa/600/400',
    imageHint: 'shopping mall interior',
    tags: ['Smart AV', 'Digital Signage', 'Video Wall', 'Public Address System', 'Smart Building'],
    timeline: 'Completed',
    results: 'Delivered a fully integrated, centrally managed smart AV solution that enhances the visitor experience, improves operational efficiency, and provides a powerful platform for retail promotions and mall-wide communications.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Their end-to-end data center solution was a masterpiece of engineering. The migration was flawless, and our new infrastructure is faster, more secure, and ready for future AI workloads. Cyrotics is a partner you can trust with mission-critical projects.',
    name: 'CIO',
    title: 'Major Public Sector Bank',
    company: 'Apex Financial',
    imageUrl: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    quote:
      'The smart campus infrastructure Cyrotics delivered for our new medical college is world-class. From the data center to the ELV and security systems, everything is integrated seamlessly. Their team set a new benchmark for excellence and professionalism.',
    name: 'Project Director',
    title: 'Leading Government Medical College',
    company: 'Nova Labs',
    imageUrl: 'https://picsum.photos/seed/alok/100/100',
  },
  {
    quote:
      'The custom automation solution CYROTICS designed for our manufacturing line has been a game-changer, driving a 40% increase in productivity. They are more than just vendors; they are genuine innovation partners who deeply understand industrial needs. Highly recommended.',
    name: 'Sameer Verma',
    title: 'Property Manager',
    company: 'Innovate Towers',
    imageUrl: 'https://picsum.photos/seed/sameer/100/100',
  },
    {
    quote:
      'The bespoke ERP system CYROTICS developed for us has completely revolutionized our workflow. Production efficiency has increased by 30%, and we now have real-time visibility across our entire process. Their developers truly understood our unique challenges and delivered a perfect solution.',
    name: 'Kiran Desai',
    title: 'COO',
    company: 'Precision Parts Inc.',
    imageUrl: 'https://picsum.photos/seed/kiran/100/100',
  },
    {
    quote:
      'From network architecture to implementation, CYROTICS has been an indispensable partner. Their SD-WAN solution has dramatically increased our branch agility and significantly reduced connectivity costs. Their technical support is consistently responsive and highly knowledgeable.',
    name: 'Amit Patel',
    title: 'IT Director',
    company: 'Retail Chain Corp',
    imageUrl: 'https://picsum.photos/seed/amit/100/100',
  },
  {
    quote:
      'Our new medical college demanded a state-of-the-art IT and ELV infrastructure, and CYROTICS delivered flawlessly. Their smart campus solution, including an integrated data center and security systems, has established a new standard for educational institutions in our region.',
    name: 'Dr. R. Mathur',
    title: 'Dean',
    company: 'National Medical College',
    imageUrl: 'https://picsum.photos/seed/mathur/100/100',
  },
  {
    quote:
      'The solar power plant that CYROTICS installed has exceeded all our expectations. We have reduced our energy costs by over 70% and significantly lowered our carbon footprint. Their end-to-end project management was exceptionally professional and seamless.',
    name: 'Sunil Agarwal',
    title: 'Factory Head',
    company: 'Green Manufacturing Co.',
    imageUrl: 'https://picsum.photos/seed/sunil/100/100',
  },
  {
    quote:
      'CYROTICS’ expertise in automotive simulation and CAE is truly unmatched. Their virtual validation process identified critical design flaws early on, saving us months of development time and substantial prototyping costs. They are a genuine engineering partner.',
    name: 'Rajesh Nair',
    title: 'Head of R&D',
    company: 'Momentum EV',
    imageUrl: 'https://picsum.photos/seed/rajesh/100/100',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Arjun Desai',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/seed/arjun/400/400',
    bio: 'With over 20 years in the technology sector, Arjun drives the company’s vision for innovation and excellence. His leadership is pivotal in establishing CYROTICS as a leader in technology solutions.',
  },
  {
    name: 'Meera Iyer',
    role: 'Chief Technology Officer',
    imageUrl: 'https://picsum.photos/seed/meera/400/400',
    bio: 'Meera is the architectural mind behind our most complex solutions. With a deep expertise in infrastructure and security, she ensures our technical offerings remain at the cutting edge.',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Business Development',
    imageUrl: 'https://picsum.photos/seed/vikram/400/400',
    bio: 'Vikram leads our strategic growth and client relationship initiatives. His focus on understanding client needs ensures we deliver solutions that provide real, measurable value.',
  },
];

export const CAREER_LEVELS = [
  'Apprenticeship',
  'Graduates',
  'Internship / Working Students',
  'Manager',
  'Professionals',
];

export const JOB_TYPES = [
  'Full-time',
  'Remote',
  'Hybrid',
  'Part-time',
  'Contract',
];

export const SPECIAL_JOB_TYPES: { [key: string]: string[] } = {
  Apprenticeship: ['Apprenticeship', 'Training Integrated Studies'],
  'Internship / Working Students': [
    'Internship (Students)',
    'Working Student',
    'Part-time',
  ],
};

export const OCCUPATIONS: OccupationFilter[] = [
  {
    level: 'Executive',
    roles: [
      'Chief Executive Officer (CEO)',
      'Chief Technology Officer (CTO)',
      'Chief Operations Officer (COO)',
      'Chief Information Security Officer (CISO)',
      'Vice President – Operations',
      'Vice President – Projects',
      'Network Director',
      'DC Infrastructure Director',
      'Cybersecurity Director',
      'Head of AV Engineering',
      'ELV Project Director',
      'IoT Systems Director',
      'Software Engineering Director',
      'VP – Projects',
      'Director – Sales & Strategy',
      'HR Director',
      'Procurement Director',
      'CFO',
      'AI/ML Director',
      'Head of Automotive Engineering',
    ],
  },
  {
    level: 'Senior Level',
    roles: [
      'Network Architect',
      'Senior Network Engineer',
      'Security Architect',
      'SOC Manager',
      'AV Solutions Architect',
      'Senior AV Engineer',
      'ELV Project Manager',
      'Senior ELV Engineer',
      'IoT Solutions Architect',
      'Technical Lead',
      'Project Director',
      'Business Development Manager',
      'HR Manager',
      'Procurement Manager',
      'Senior Full Stack Developer',
      'Senior Accountant',
      'Senior AI Engineer',
      'Senior Robotics Engineer',
    ],
  },
  {
    level: 'Mid-Senior Level',
    roles: [
      'Network Engineer',
      'NOC Engineer',
      'SOC Analyst L2/L3',
      'Firewall Engineer',
      'AV Engineer',
      'ELV Engineer',
      'Embedded Systems Engineer',
      'Software Developer',
      'Project Manager',
      'Sales Executive',
      'HR Executive',
      'Purchase Executive',
      'Security Engineer',
      'IoT Engineer',
      'Sales Manager',
      'Accounts Executive',
      'Machine Learning Engineer',
      'EV/Robotics Engineer',
    ],
  },
  {
    level: 'Associate Level',
    roles: [
      'Network Associate',
      'SOC Analyst L1/L2',
      'AV Technician',
      'ELV Technician',
      'IoT Technician',
      'Junior Developer',
      'Project Coordinator',
      'Sales Executive',
      'HR Assistant',
      'Logistics Coordinator',
      'Billing Coordinator',
      'AI/ML Associate',
      'Automotive Technician',
    ],
  },
  {
    level: 'Entry Level',
    roles: [
      'Network Technician',
      'Security Analyst L1',
      'AV Technician',
      'CCTV Technician',
      'IoT Technician',
      'Web Developer Intern',
      'Site Supervisor',
      'Marketing Intern',
      'Office Assistant',
      'Inventory Assistant',
      'Cybersecurity Trainee',
      'AV Intern',
      'ELV Intern',
      'IoT Intern',
      'Software Intern',
      'Admin Intern',
      'Store Assistant',
      'Accounts Intern',
      'AI/ML Intern',
      'EV/Robotics Intern',
    ],
  },
  {
    level: 'Apprenticeship',
    roles: ['Apprenticeship'],
  },
  {
    level: 'Internship',
    roles: ['Internship (Students)'],
  },
];

export const SEGMENTS = [
  'Networking & Data Center',
  'Cybersecurity',
  'AV & Smart Solutions',
  'ELV',
  'IoT & Automation',
  'Software Development',
  'Project Management',
  'Sales & Marketing',
  'HR & Administration',
  'Procurement & Logistics',
  'Finance & Accounts',
  'AI & Machine Learning',
  'Automotive, EV & Robotics',
  'Executive',
  'Apprenticeship',
  'Internship (Students)',
];

export const EXPERIENCE_LEVELS = [
  'Executive',
  'Senior Level',
  'Mid-Senior Level',
  'Associate Level',
  'Entry Level',
  'Internship',
  'Apprenticeship',
];

export const LOCATIONS: LocationFilter[] = [
  {
    name: 'India',
    states: [
      { name: 'Delhi', cities: ['New Delhi'] },
      { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
      { name: 'Karnataka', cities: ['Bangalore'] },
      { name: 'Tamil Nadu', cities: ['Chennai'] },
      { name: 'Telangana', cities: ['Hyderabad'] },
      { name: 'Bihar', cities: ['Patna'] },
    ],
  },
  {
    name: 'UAE',
    states: [{ name: 'Dubai', cities: ['Dubai'] }, { name: 'Abu Dhabi', cities: ['Abu Dhabi'] }],
  },
  {
    name: 'Germany',
    states: [
      { name: 'Berlin', cities: ['Berlin'] },
      { name: 'Bavaria', cities: ['Munich'] },
      { name: 'Baden-Württemberg', cities: ['Stuttgart'] },
    ],
  },
  {
    name: 'USA',
    states: [
      { name: 'New York', cities: ['New York City'] },
      { name: 'Texas', cities: ['Houston', 'Dallas'] },
      { name: 'California', cities: ['Los Angeles', 'San Francisco'] },
    ],
  },
  { name: 'UK', states: [{ name: 'England', cities: ['London', 'Birmingham'] }] },
  { name: 'Singapore', states: [{ name: 'Singapore', cities: ['Singapore'] }] },
  { name: 'Canada', states: [{ name: 'Ontario', cities: ['Toronto'] }] },
  { name: 'Australia', states: [{ name: 'New South Wales', cities: ['Sydney'] }] },
];


export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'sn-eng-01',
    title: 'Senior Network Engineer',
    location: 'Bangalore, India',
    department: 'Networking',
    type: 'Full-time',
    description: 'Design, implement, and manage complex network solutions for our enterprise clients.',
    requirements: [
      '5+ years of experience with Cisco and Juniper technologies.',
      'CCNP or equivalent certification required.',
      'Strong knowledge of SD-WAN, BGP, and OSPF.',
      'Experience with network security and firewalls.',
    ],
    careerLevel: 'Professionals',
    occupation: 'Senior Network Engineer',
    segment: 'Networking & Data Center',
    experienceLevel: 'Senior Level',
  },
  {
    id: 'fs-dev-01',
    title: 'Full-Stack Developer (React & Node.js)',
    location: 'Remote',
    department: 'Software Development',
    type: 'Full-time',
    description: 'Join our software development team to build cutting-edge web and cloud applications for our diverse client base.',
    requirements: [
      '3+ years of professional experience with React and Node.js.',
      'Proficiency in TypeScript and GraphQL.',
      'Experience with Docker and AWS/GCP.',
      'Strong understanding of software design principles.',
    ],
    careerLevel: 'Professionals',
    occupation: 'Software Developer',
    segment: 'Software Development',
    experienceLevel: 'Mid-Senior Level',
  },
  {
    id: 'sec-tech-01',
    title: 'Security Systems Technician',
    location: 'Mumbai, India',
    department: 'ELV',
    type: 'Full-time',
    description: 'Install, configure, and maintain CCTV, access control, and fire alarm systems at client sites.',
    requirements: [
      '2+ years of hands-on experience with electronic security systems.',
      'Familiarity with brands like Hikvision, Bosch, Honeywell.',
      'Strong troubleshooting and problem-solving skills.',
      'Excellent communication and customer service skills.',
    ],
    careerLevel: 'Professionals',
    occupation: 'CCTV Technician',
    segment: 'ELV',
    experienceLevel: 'Entry Level',
  },
  {
    id: 'iot-sa-01',
    title: 'IoT Solutions Architect',
    location: 'Dubai, UAE',
    department: 'IoT & Automation',
    type: 'Full-time',
    description: 'Design and lead the implementation of large-scale IoT solutions for smart buildings and smart cities.',
    requirements: [
        '7+ years in IoT architecture.',
        'Expertise in LoRaWAN, MQTT, and cloud IoT platforms (AWS IoT, Azure IoT Hub).',
        'Strong understanding of sensor technology and edge computing.',
        'Proven track record of delivering complex IoT projects.',
    ],
    careerLevel: 'Professionals',
    occupation: 'IoT Solutions Architect',
    segment: 'IoT & Automation',
    experienceLevel: 'Senior Level',
  },
  {
    id: 'pm-01',
    title: 'Project Manager',
    location: 'New Delhi, India',
    department: 'Project Management',
    type: 'Full-time',
    description: 'Lead the planning, execution, and delivery of IT infrastructure projects, ensuring they are on time and within budget.',
    requirements: [
        '5+ years of project management experience in the IT sector.',
        'PMP or similar certification is highly desirable.',
        'Excellent leadership, communication, and stakeholder management skills.',
        'Experience with large-scale ELV, networking, or data center projects.',
    ],
    careerLevel: 'Manager',
    occupation: 'Project Manager',
    segment: 'Project Management',
    experienceLevel: 'Mid-Senior Level',
  },
  {
    id: 'intern-wd-01',
    title: 'Web Developer Intern',
    location: 'Patna, India',
    department: 'Software Development',
    type: 'Internship',
    description: 'Assist the development team in creating and maintaining web applications. A great opportunity to learn and grow.',
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript.',
      'Familiarity with a modern framework like React is a plus.',
      'Eagerness to learn and a strong work ethic.',
      'Currently pursuing a degree in Computer Science or related field.',
    ],
    careerLevel: 'Internship / Working Students',
    occupation: 'Web Developer Intern',
    segment: 'Internship (Students)',
    experienceLevel: 'Internship',
  },
];


export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'navigating-the-maze-of-data-center-modernization',
    title: 'Why Data Center Migration Is Critical for Modern Enterprises – Challenges, Strategy & Best Practices',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-07-24',
    category: 'Data Center Migration & Cloud Infrastructure Solutions',
    excerpt: 'In the rapidly evolving digital landscape, organizations are under constant pressure to modernize their IT infrastructure. Data Center Migration has emerged as a strategic necessity for businesses aiming to improve performance, security, and scalability.',
    imageUrl: 'https://picsum.photos/seed/blog1/800/450',
    imageHint: 'data center aisle',
    tags: ['Data Center', 'Infrastructure', 'Migration'],
    content: `
      <p>In the rapidly evolving digital landscape, organizations are under constant pressure to modernize their IT infrastructure. As applications grow, security threats intensify, and compliance standards become more stringent, enterprises can no longer rely on outdated on-premises infrastructure. Data Center Migration has emerged as a strategic necessity for businesses aiming to improve performance, security, and scalability.</p>
      <p>Cyrotics Technologies, having successfully delivered multiple large-scale national projects—including Multiple All India Govt Medical Hospital & college Projects, government institutions, Data Center Projects , and major airport and university infrastructures—brings deep expertise in executing complex migration projects with precision.</p>
      <p>This blog explores why data center migration is important, the risks involved, and the best practices for a smooth and secure transition.</p>
      <h3>⭐ What Is Data Center Migration?</h3>
      <p>data center migration refers to the process of transferring digital assets—applications, databases, workloads, storage, network components, and entire servers—from one environment to another. This could be:</p>
      <ul>
        <li>On-premises → Cloud</li>
        <li>Legacy data center → Modern data center</li>
        <li>One cloud provider → Another cloud provider</li>
        <li>Local servers → Colocation facility</li>
      </ul>
      <p>Migration is not just about shifting servers—it is about re-architecting for performance, resilience, and future growth.</p>
      <h3>⭐ Why Enterprises Need Data Center Migration Today</h3>
      <h4>1. Outdated Infrastructure Raises Security Risks</h4>
      <p>Legacy systems cannot keep up with today’s cybersecurity demands. Migration helps businesses adopt:</p>
      <ul>
        <li>Next-gen firewalls</li>
        <li>Cloud-native security</li>
        <li>Zero-trust architecture</li>
        <li>Advanced threat analytics</li>
      </ul>
      <p>Cyrotics Technologies has upgraded security infrastructures for hospitals, government institutions, and airports, ensuring complete protection against modern attacks.</p>
      <h4>2. Scalability Becomes Effortless</h4>
      <p>Modern workloads demand rapid scaling. Migration enables:</p>
      <ul>
        <li>On-demand compute resources</li>
        <li>Auto-scaling applications</li>
        <li>High availability and redundancy</li>
        <li>Future expansion without downtime</li>
      </ul>
      <p>This is especially critical in critical sectors such as healthcare, education, and aviation.</p>
      <h4>3. Significant Cost Optimization</h4>
      <p>Enterprises reduce:</p>
      <ul>
        <li>Hardware maintenance cost</li>
        <li>Power and cooling expenses</li>
        <li>Real estate footprint</li>
        <li>Staffing overhead</li>
      </ul>
      <p>Modern DCs and cloud platforms ensure pay-as-you-go efficiency.</p>
      <h4>4. Better Performance & Reliability</h4>
      <p>New-age data centers are built with:</p>
      <ul>
        <li>Redundant power feeds</li>
        <li>Advanced cooling</li>
        <li>Tier 3 & Tier 4 certifications</li>
        <li>99.995% uptime guarantees</li>
      </ul>
      <p>This is essential for projects like Chhindwara Medical College, AIIMS Rajkot, and NIAL Airport, where mission-critical applications must stay online 24×7.</p>
      <h3>⭐ Common Challenges in Data Center Migration</h3>
      <p>Even small mistakes can cause downtime or data loss. Common challenges include:</p>
      <ul>
        <li>Complex dependencies between applications</li>
        <li>Network misconfigurations</li>
        <li>Security policy mismatches</li>
        <li>Data corruption during transfer</li>
        <li>Incompatible hardware or OS versions</li>
        <li>Downtime during cutover</li>
        <li>Undocumented legacy systems</li>
      </ul>
      <p>This is why migrations should only be executed by experienced teams.</p>
      <h3>⭐ Cyrotics Technologies' Approach to Seamless Migration</h3>
      <p>With 10+ large-scale projects executed successfully across India, Cyrotics follows a structured methodology:</p>
      <h4>Phase 1: Assessment & Planning</h4>
      <p>We audit existing infrastructure, identify dependencies, analyze risks, prepare a project plan, and decide the migration type (Lift & shift, Re-platform, Re-architect). We also conduct cost & impact analysis to ensure a smooth transition.</p>
      <h4>Phase 2: Designing the Target Environment</h4>
      <p>This phase includes network architecture design, security hardening, load balancing, backup & disaster recovery strategy, and compliance alignment. Cyrotics ensures the new environment is fully optimized and future-ready.</p>
      <h4>Phase 3: Data & Application Migration</h4>
      <p>Using industry-leading tools for database replication, VM migration, storage synchronization, and application refactoring, we maintain multiple copies to avoid any data loss.</p>
      <h4>Phase 4: Testing & Validation</h4>
      <p>Before the final cutover, we test performance, functionality, security policies, failover, and application compatibility to guarantee a zero-downtime migration.</p>
      <h4>Phase 5: Go-Live & Support</h4>
      <p>Once migrated, we optimize performance, monitor logs, validate security compliance, and provide 24×7 support to ensure a stable environment.</p>
      <h3>⭐ Real-World Example: Cyrotics Migration at Chhindwara Institute of Medical Science (MP)</h3>
      <p>Cyrotics successfully migrated the entire IT ecosystem including the data center, network infrastructure, CCTV environment, NMS setup, and ELV systems. The result was a 40% improvement in system performance, 99.99% uptime, enhanced security, and simplified monitoring.</p>
      <h3>⭐ Conclusion</h3>
      <p>Data center migration is a strategic requirement for enterprises aiming to stay secure, agile, and competitive. With a structured approach, organizations can achieve higher performance, stronger security, lower costs, and greater scalability. Cyrotics Technologies has proven expertise in delivering high-end IT transformation projects nationwide.</p>
    `
  },
  {
    slug: 'zero-trust-architecture-a-paradigm-shift-in-cybersecurity',
    title: 'Zero Trust Architecture: A Paradigm Shift in Modern Cybersecurity',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-05-18',
    category: 'Network Security & Cyber Security',
    excerpt: 'The old castle-and-moat approach to security is broken. With perimeters dissolving and threats lurking inside and out, it\'s time for a new model: "Never trust, always verify." This introduction to Zero Trust Architecture (ZTA) explains why it\'s the future of enterprise security.',
    imageUrl: 'https://picsum.photos/seed/blog2/800/450',
    imageHint: 'digital security lock',
    tags: ['Cybersecurity', 'Zero Trust', 'Networking'],
    content: `
      <h3>Zero Trust Architecture: A Paradigm Shift in Modern Cybersecurity</h3>
      <p>In an era where digital transformation is accelerating at an unprecedented rate, traditional security frameworks are struggling to keep pace. The rapid adoption of cloud infrastructure, the rise of remote and hybrid workforces, the proliferation of IoT devices, and increasingly sophisticated cyberattacks have forced organizations to rethink their approach to cybersecurity.</p>
      <p>Zero Trust Architecture (ZTA) has emerged as the leading modern security framework — not as an industry buzzword, but as a strategic shift in how enterprises safeguard their digital ecosystems. It moves the industry away from implicit trust models and toward a more resilient, identity-centric approach.</p>
      <h3>What Is Zero Trust Architecture?</h3>
      <p>Zero Trust is founded on one core principle:</p>
      <blockquote>“Never Trust, Always Verify.”</blockquote>
      <p>Unlike traditional perimeter-based security — where anything inside the network is assumed to be trustworthy — Zero Trust assumes no user, device, system, or workload is trusted by default, whether inside or outside the organization.</p>
      <p>Zero Trust ensures that every access request is:</p>
      <ul>
        <li>Verified</li>
        <li>Authenticated</li>
        <li>Authorized</li>
        <li>Continuously monitored</li>
      </ul>
      <p>This approach ensures that access is only granted when required and only to the extent needed.</p>
      <h3>Why Zero Trust Has Become Essential</h3>
      <p>The shift toward Zero Trust is driven by modern IT challenges:</p>
      <h4>Remote & Hybrid Workforce</h4><p>Employees now access corporate applications from home networks, airports, cafés, and mobile devices. This dramatically expands the attack surface.</p>
      <h4>Cloud Adoption</h4><p>Cloud environments eliminate the concept of a fixed perimeter. Traditional firewalls alone can no longer secure modern environments.</p>
      <h4>Increasing Cyberattacks</h4><p>Ransomware, insider threats, phishing, and advanced persistent threats (APTs) now target every layer of an organization.</p>
      <h4>Device Explosion (IoT, BYOD, OT)</h4><p>Organizations manage thousands of diverse and unmanaged devices. Each device becomes a potential entry point for attackers.</p>
      <p>Traditional security models cannot support this level of scale and complexity. Zero Trust can.</p>
      <h3>Core Principles of Zero Trust Architecture</h3>
      <p>🔐 1. Continuous Verification: Access is always treated as untrusted, regardless of user location or previous approvals.</p>
      <p>🧱 2. Least Privilege Access: Users and applications receive only the minimum access necessary to perform their function.</p>
      <p>📍 3. Micro-Segmentation: Networks are divided into tightly controlled zones to prevent lateral movement.</p>
      <p>📊 4. Real-Time Monitoring & Analytics: User behavior, traffic flows, and access patterns are continuously analyzed for anomalies.</p>
      <p>📑 5. Strong Identity & Access Management (IAM): MFA, biometrics, SSO, and identity governance become central security components.</p>
      <p>🔄 6. Assume Breach: Zero Trust operates on the assumption that attackers may already be inside the network, and controls are built accordingly.</p>
      <h3>How Zero Trust Strengthens Security</h3>
      <p>✅ Prevents Insider Threats: Even internal users must undergo continuous verification.</p>
      <p>✅ Limits Lateral Movement: Micro-segmentation stops attackers from spreading across the network.</p>
      <p>✅ Enhances Visibility: Every request, session, and connection is logged and analyzed.</p>
      <p>✅ Protects Remote & Cloud Access: Zero Trust aligns perfectly with modern cloud-native environments.</p>
      <p>✅ Reduces Blast Radius: Any breach is contained within a small, isolated environment.</p>
      <h3>Industries Benefiting from Zero Trust</h3>
      <p>Zero Trust is now widely implemented across:</p>
      <ul>
        <li>Healthcare: EMR protection, patient data security</li>
        <li>Banking & Finance: Transaction integrity, compliance</li>
        <li>Government & Defense: National cybersecurity resilience</li>
        <li>Manufacturing & Automotive: Securing OT, robotics, and IoT</li>
        <li>IT & Data Centers: Cloud-native security and workload segmentation</li>
      </ul>
      <p>Even SMBs are adopting Zero Trust because of its flexibility and scalability.</p>
      <h3>Key Technologies Behind Zero Trust</h3>
      <p>Zero Trust is not a product — it is a comprehensive framework supported by:</p>
      <ul>
        <li>Identity & Access Management (IAM)</li>
        <li>Multi-Factor Authentication (MFA)</li>
        <li>Privileged Access Management (PAM)</li>
        <li>Endpoint Detection and Response (EDR)</li>
        <li>Secure Access Service Edge (SASE)</li>
        <li>Micro-segmentation & Next-Gen Firewalls</li>
        <li>Continuous Threat Monitoring</li>
        <li>Data Loss Prevention (DLP)</li>
      </ul>
      <p>Together, these components create a unified Zero Trust ecosystem.</p>
      <h3>Challenges in Implementing Zero Trust</h3>
      <p>Transitioning to Zero Trust may involve:</p>
      <ul>
        <li>Organizational culture changes</li>
        <li>Strong identity governance foundations</li>
        <li>Legacy system upgrades</li>
        <li>Clear security policies</li>
        <li>Skilled cybersecurity professionals</li>
      </ul>
      <p>Despite these challenges, Zero Trust offers unmatched long-term value.</p>
      <h3>Zero Trust Is the Future of Cybersecurity</h3>
      <p>Zero Trust represents a fundamental shift in how organizations defend themselves. It replaces outdated perimeter-centric models with a holistic, identity-first, data-centric approach designed for modern digital environments.</p>
      <p>Organizations that embrace Zero Trust benefit from:</p>
      <ul>
        <li>Stronger security posture</li>
        <li>Greater visibility across the network</li>
        <li>Reduced risks and faster detection</li>
        <li>Compliance with global cybersecurity standards</li>
        <li>Future-proof protection against evolving threats</li>
      </ul>
      <p>In today’s world, Zero Trust is no longer optional — it is essential.</p>
    `
  },
  {
    slug: 'the-roi-of-sustainability-how-solar-powers-your-bottom-line',
    title: 'The ROI of Sustainability: How Solar Powers Your Bottom Line',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-04-25',
    category: 'Renewable Energy',
    excerpt: 'Adopting solar energy is more than an environmental statement—it\'s a powerful financial strategy. From immediate operational savings to long-term brand enhancement, we explore how investing in renewable energy delivers a compelling return on investment that goes far beyond just the balance sheet.',
    imageUrl: 'https://picsum.photos/seed/blog3/800/450',
    imageHint: 'solar panels factory',
    tags: ['Renewable Energy', 'Solar', 'ROI'],
    content: `
      <p>In today’s competitive business environment, organizations are not only expected to increase revenue but also to operate responsibly and sustainably. Sustainability is no longer a “good-to-have” — it has become a strategic advantage. Among the many green technologies available, solar energy stands out as one of the most effective ways to reduce operational expenses, future-proof your infrastructure, and significantly boost long-term ROI.</p>
      <p>Whether you’re managing a hospital, government campus, manufacturing facility, commercial building, data center, or educational institution, embracing solar power can deliver measurable financial and environmental benefits.</p>
      <p>This blog explores how solar energy drives profitability while strengthening your commitment to sustainability.</p>
      <h3>🌞 Solar Energy: A Smart Financial Investment, Not Just an Eco-Choice</h3>
      <p>Solar is often perceived as an environmental initiative, but in reality, it is one of the strongest financial decisions a business can make.</p>
      <p>Here’s why:</p>
      <h3>✔ 1. Dramatic Reduction in Electricity Bills</h3>
      <p>Electricity costs are rising every year. For large facilities — hospitals, universities, IT companies, airports, and industrial plants — energy consumption is one of the largest operating expenses.</p>
      <p>Solar energy directly offsets this cost.</p>
      <ul>
        <li>Most commercial installations recover 30–60% of monthly bills instantly.</li>
        <li>Large projects can eliminate up to 80–90% of electricity expenditure.</li>
        <li>Savings grow over time as utility tariffs increase.</li>
      </ul>
      <p><strong>Result?</strong><br/>Lower operating expenses and higher profitability.</p>
      <h3>✔ 2. High & Stable Long-Term ROI</h3>
      <p>Solar systems deliver ROI in two ways:</p>
      <ul>
        <li>🔹 Direct savings from reduced electricity usage</li>
        <li>🔹 Revenue from government incentives & tax benefits</li>
      </ul>
      <p>Most commercial solar installations generate:</p>
      <ul>
        <li>18%–30% annual ROI</li>
        <li>Cost recovery within 3–5 years</li>
      </ul>
      <p>Once the initial investment is recovered, the next 20–25 years of electricity is virtually free.</p>
      <p>Few investments generate such stable, long-term returns.</p>
      <h3>✔ 3. Government Subsidies, Tax Benefits & Incentives</h3>
      <p>The Indian government provides several benefits for solar adoption:</p>
      <ul>
        <li>📌 Accelerated Depreciation (Up to 40%): Reduces taxable income significantly.</li>
        <li>📌 Subsidies for specific sectors (State/central schemes): Hospitals, universities, and agricultural facilities often qualify for additional subsidies.</li>
        <li>📌 Net Metering: Sell excess energy back to the grid and earn credits.</li>
      </ul>
      <p>These policies ensure that solar power delivers maximum financial impact from day one.</p>
      <h3>✔ 4. Increased Property Value</h3>
      <p>Buildings with solar installations offer:</p>
      <ul>
        <li>Lower operational expenses</li>
        <li>Energy independence</li>
        <li>Modern, sustainable infrastructure</li>
      </ul>
      <p>This leads to:</p>
      <ul>
        <li>🔺 Higher property valuation</li>
        <li>🔺 Better leasing attractiveness</li>
        <li>🔺 Long-term asset appreciation</li>
      </ul>
      <p>Companies that invest in solar typically outperform peers in total asset value.</p>
      <h3>✔ 5. Lower Maintenance Costs</h3>
      <p>Solar systems have:</p>
      <ul>
        <li>No moving parts</li>
        <li>Minimal maintenance cost</li>
        <li>Long system life (25+ years)</li>
      </ul>
      <p>This reduces OPEX and improves overall cost-efficiency.</p>
      <h3>✔ 6. Environmental Impact That Pays Off</h3>
      <p>Going solar reduces carbon footprint dramatically.</p>
      <ul>
        <li>🌍 Reduced CO₂ emissions</li>
        <li>🌱 Cleaner, greener power supply</li>
      </ul>
      <p>Many regulatory bodies and clients prefer working with organizations that follow sustainable practices.</p>
      <p>This can directly result in:</p>
      <ul>
        <li>Better brand reputation</li>
        <li>Higher customer trust</li>
        <li>Increased business opportunities</li>
        <li>Alignment with ESG (Environmental, Social & Governance) goals</li>
      </ul>
      <h3>💼 How Solar Strengthens Your Business Competitiveness</h3>
      <p>Solar is not just an energy solution — it's a strategic business enabler.</p>
      <ul>
        <li>🔶 Enhances corporate reputation: Clients prefer companies that adopt green energy.</li>
        <li>🔶 Ensures operational stability: Solar reduces dependency on grid and uncertain fuel costs.</li>
        <li>🔶 Supports future compliance: Upcoming government regulations will make sustainability mandatory for many sectors.</li>
        <li>🔶 Helps win more tenders: Most government and private tenders now give preference to sustainable vendors.</li>
      </ul>
      <h3>🔧 Why Businesses Choose Cyrotics Technologies for Solar Implementation</h3>
      <p>At Cyrotics Technologies (OPC) Pvt. Ltd., we provide end-to-end Solar Infrastructure Services:</p>
      <ul>
        <li>Solar Feasibility Study</li>
        <li>Detailed Engineering & Design</li>
        <li>Equipment Selection & Procurement</li>
        <li>Installation & Commissioning</li>
        <li>AMC & Remote Monitoring</li>
        <li>Hybrid and On-Grid Solutions</li>
        <li>Solar for Data Centers, Hospitals, Campuses & Commercial Buildings</li>
      </ul>
      <p>Our expertise ensures:</p>
      <ul>
        <li>Higher energy output</li>
        <li>Maximum ROI</li>
        <li>Long-term system reliability</li>
        <li>Compliance with safety & quality standards</li>
        <li>Seamless project execution</li>
      </ul>
      <h3>🚀 The Future is Solar — And the Future Starts Today</h3>
      <p>Solar power is no longer an alternative; it is becoming the primary energy strategy for future-ready organizations.</p>
      <p>By investing in solar today, businesses achieve:</p>
      <ul>
        <li>✔ Lower electricity bills</li>
        <li>✔ Strong long-term ROI</li>
        <li>✔ Energy independence</li>
        <li>✔ Sustainability and ESG alignment</li>
        <li>✔ Competitive advantage</li>
      </ul>
      <blockquote><b>Solar doesn’t just power your building...<br/><br/>It powers your profitability.</b></blockquote>
    `
  },
  {
    slug: 'beyond-the-video-call-crafting-the-modern-conference-room',
    title: 'Beyond the Video Call: Crafting the Modern Conference Room',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-06-12',
    category: 'Audio-Visual & Communication',
    excerpt: 'In the era of hybrid work, the conference room is no longer just a table with a speakerphone. It\'s a critical hub for collaboration between in-office and remote teams. This post dives into the key AV technologies and design principles for creating seamless, equitable, and productive meeting experiences.',
    imageUrl: 'https://picsum.photos/seed/blog4/800/450',
    imageHint: 'modern conference room',
    tags: ['Audio-Visual', 'Hybrid Work', 'Collaboration'],
    content: `
      <p>The workplace has changed — and with it, the expectations from a conference room. What was once a simple space with a table, chairs, and a projector is now the nerve center of collaboration, decision-making, client engagement, and global communication. The modern conference room is no longer “just a room.” It is a high-performance digital environment designed to enhance productivity, improve communication, and bring people together — whether they’re across the table or across the world.</p>
      <p>This blog explores how organizations can elevate ordinary meeting spaces into smart, seamless, future-ready conference rooms that go far beyond the traditional video call.</p>
      <h3>🎯 Why Modern Conference Rooms Matter More Than Ever</h3>
      <p>The shift to hybrid work models has created a unique challenge: How do we make remote and in-office participants feel equally connected and engaged?</p>
      <p>The answer lies in designing conference rooms that combine:</p>
      <ul>
        <li>Smart audio-visual systems</li>
        <li>Intelligent collaboration tools</li>
        <li>High-speed, secure networking</li>
        <li>Automated controls</li>
        <li>Unified communication platforms</li>
      </ul>
      <p>A well-designed conference room doesn’t just support meetings — it makes them smarter, faster, and more effective.</p>
      <h3>🛠️ The Core Elements of a Modern Conference Room</h3>
      <p>Transforming a traditional room into a smart collaboration space requires a strategic blend of technology, design, and user experience. Here are the essential components:</p>
      <h4>1. Intelligent Video Conferencing Systems</h4>
      <p>Today’s video conferencing goes beyond a simple camera and microphone. A modern room leverages:</p>
      <ul>
        <li>AI-powered cameras that auto-track speakers</li>
        <li>4K/Full HD video systems for crystal-clear communication</li>
        <li>Smart framing & noise cancellation</li>
        <li>Real-time meeting analytics</li>
      </ul>
      <p>Platforms like Zoom Rooms, Microsoft Teams Rooms, and Google Meet Rooms are redefining meeting productivity.</p>
      <h4>2. Acoustic Engineering and Professional Audio</h4>
      <p>Clear audio is non-negotiable. This includes:</p>
      <ul>
        <li>Ceiling array microphones</li>
        <li>Beamforming mic technology</li>
        <li>DSP processors</li>
        <li>Acoustic panels for echo and noise control</li>
        <li>High-fidelity speakers for immersive audio</li>
      </ul>
      <p>With the right design, every participant — remote or present — hears every voice with precision.</p>
      <h4>3. Collaborative Interactive Displays</h4>
      <p>Traditional projectors are being replaced with:</p>
      <ul>
        <li>Interactive 4K touch displays</li>
        <li>Wireless content sharing</li>
        <li>Digital whiteboarding</li>
        <li>Multi-user annotation</li>
        <li>Smart screen mirroring for all devices</li>
      </ul>
      <p>This fosters real-time brainstorming and dynamic team interaction.</p>
      <h4>4. Seamless Room Automation</h4>
      <p>Smart conference rooms simplify operations with:</p>
      <ul>
        <li>One-touch meeting start</li>
        <li>Automated lighting and blinds</li>
        <li>Environmental sensors</li>
        <li>Centralized AV & room control panels</li>
        <li>Voice-based control integration</li>
      </ul>
      <p>Automation ensures a frictionless meeting experience every time.</p>
      <h4>5. Secure & High-Speed Network Infrastructure</h4>
      <p>Behind every modern meeting room is a powerful IT backbone:</p>
      <ul>
        <li>Enterprise-grade Wi-Fi</li>
        <li>High-throughput switching</li>
        <li>Dedicated conferencing bandwidth</li>
        <li>VLAN network segmentation</li>
        <li>QoS for voice & video traffic</li>
      </ul>
      <p>Reliable connectivity ensures that meetings stay smooth and uninterrupted.</p>
      <h4>6. Integration With Unified Communication Platforms</h4>
      <p>Modern conference rooms integrate deeply with platforms like:</p>
      <ul>
        <li>Microsoft Teams</li>
        <li>Zoom</li>
        <li>Cisco Webex</li>
        <li>Google Workspace</li>
      </ul>
      <p>This ensures seamless scheduling, real-time collaboration, and cross-device consistency.</p>
      <h3>🌐 Types of Modern Conference Rooms</h3>
      <p>Organizations now demand multiple types of meeting environments:</p>
      <ul>
        <li>🔹 Huddle Rooms: Small spaces designed for 2–5 people; ideal for quick collaborations.</li>
        <li>🔹 Medium Meeting Rooms: Flexible spaces equipped with mid-range AV and collaboration tools.</li>
        <li>🔹 Boardrooms: Premium spaces with high-end video walls, advanced automation, and executive-level AV.</li>
        <li>🔹 Experience Centers & Training Rooms: Large-scale interactive environments for workshops, presentations, and virtual demonstrations.</li>
      </ul>
      <h3>💡 Benefits of Modern Conference Room Infrastructure</h3>
      <p>Upgrading your meeting spaces delivers long-term value:</p>
      <ul>
        <li>✔ Improved Communication & Engagement: Eliminates communication barriers for hybrid teams.</li>
        <li>✔ Enhanced Productivity: Meetings start faster, run smoother, and drive decisions quicker.</li>
        <li>✔ Professional Brand Image: High-quality AV systems create an impressive environment for clients.</li>
        <li>✔ Reduced Operational Cost: Automated systems and energy-efficient designs ensure long-term savings.</li>
        <li>✔ Future-Ready Collaboration: Supports AI tools, cloud conferencing, and emerging work models.</li>
      </ul>
      <h3>🏢 Industries Transforming Their Meeting Spaces</h3>
      <p>Conference room modernization is rapidly advancing across sectors:</p>
      <ul>
        <li>Corporate Offices</li>
        <li>Hospitals & Medical Colleges</li>
        <li>Data Centers</li>
        <li>Government Institutions</li>
        <li>Universities & Educational Campuses</li>
        <li>Hotels & Hospitality</li>
        <li>Manufacturing & Automotive</li>
        <li>Airports & Aviation</li>
        <li>Real Estate & Commercial Spaces</li>
      </ul>
      <p>Every industry needs smarter collaboration — and modern conference rooms deliver exactly that.</p>
      <h3>🚀 Why Cyrotics Technologies Leads in Modern Conference Room Solutions</h3>
      <p>At Cyrotics Technologies (OPC) Pvt. Ltd., we specialize in designing high-performance, integrated conference rooms that meet global standards.</p>
      <p>Our services include:</p>
      <ul>
        <li>AV design & engineering</li>
        <li>Boardroom and training room setup</li>
        <li>Video conferencing solutions</li>
        <li>Acoustic treatment</li>
        <li>Digital signage</li>
        <li>Structured cabling</li>
        <li>Networking & automation integration</li>
        <li>End-to-end project execution</li>
      </ul>
      <p>Our approach ensures:</p>
      <ul>
        <li>Aesthetically pleasing design</li>
        <li>User-friendly experience</li>
        <li>Scalable architecture</li>
        <li>Long-term support & maintenance</li>
      </ul>
      <p>From top medical institutes to corporate offices and government organizations across India, we have delivered smart, future-ready conferencing ecosystems.</p>
      <h3>📌 Conclusion: The Future of Meetings Is Hybrid, Smart, and Fully Connected</h3>
      <p>The era of simple video conferencing is over. Modern businesses need technologically advanced conference rooms that provide:</p>
      <ul>
        <li>✔ Intelligent collaboration</li>
        <li>✔ High-quality audio and video</li>
        <li>✔ Secure connectivity</li>
        <li>✔ Powerful automation</li>
        <li>✔ Seamless hybrid engagement</li>
      </ul>
      <blockquote>A well-designed conference room doesn’t just improve meetings —<br/>it transforms the way teams work, communicate, and innovate.</blockquote>
      <p>If your organization is ready to elevate its meeting spaces, Cyrotics Technologies is here to build the perfect modern conference room for you.</p>
    `
  },
   {
    slug: 'the-hidden-genius-of-your-building-an-intro-to-bms',
    title: 'The Hidden Genius of Your Building: An Introduction to BMS (Building Management System)',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-07-02',
    category: 'Smart Factory & Building Solutions',
    excerpt: 'What if your building could think? A Building Management System (BMS) is the brain that does just that, quietly optimizing everything from temperature to security. Discover how this hidden genius works to make buildings more efficient, comfortable, and sustainable.',
    imageUrl: 'https://picsum.photos/seed/blog5/800/450',
    imageHint: 'building blueprint',
    tags: ['Smart Building', 'BMS', 'IoT'],
    content: `
      <p>Modern buildings are no longer just four walls and a roof — they are intelligent, responsive, and interconnected ecosystems. Behind every efficient, safe, and comfortable space lies an invisible layer of intelligence that keeps everything functioning seamlessly. This silent technological backbone is known as the Building Management System (BMS).</p>
      <p>Whether it’s a hospital, data center, airport, school, corporate office, or industrial plant, BMS plays a critical role in ensuring operational excellence. In this blog, we unravel the fundamentals of BMS — the hidden genius that quietly runs your building.</p>
      <h3>🌐 What Is a Building Management System (BMS)?</h3>
      <p>A Building Management System is an integrated software and hardware platform that centrally monitors, controls, and automates the essential functions of a building. Think of BMS as the brain of the building — making decisions, analyzing data, responding to environmental changes, and ensuring safety and efficiency.</p>
      <p>A BMS typically manages:</p>
      <ul>
        <li>HVAC (Heating, Ventilation, Air Conditioning)</li>
        <li>Lighting automation</li>
        <li>Power & energy systems</li>
        <li>Elevators & movement control</li>
        <li>Fire alarm & life safety systems</li>
        <li>Water pumping & plumbing</li>
        <li>CCTV & access control integration (in advanced setups)</li>
        <li>Environmental quality sensors (CO₂, temperature, humidity)</li>
      </ul>
      <p>By connecting thousands of sensors and devices, a BMS brings everything together on a single, intelligent dashboard.</p>
      <h3>🎯 Why BMS is the Hidden Genius of Modern Infrastructure</h3>
      <p>A well-implemented BMS transforms a building from a passive structure to a smart, dynamic environment that responds in real time.</p>
      <p>Here’s how:</p>
      <h4>1. Centralized Control for Total Visibility</h4>
      <p>Imagine monitoring:</p>
      <ul>
        <li>Room temperatures</li>
        <li>Power consumption</li>
        <li>Fire alarms</li>
        <li>Water leak alerts</li>
        <li>Access logs</li>
        <li>Generator performance</li>
        <li>Battery backup status</li>
      </ul>
      <p>—all from one screen.</p>
      <p>BMS acts as a centralized command center that gives facility managers complete visibility and control over every system.</p>
      <h4>2. Energy Savings & Sustainability</h4>
      <p>Energy is often the biggest operational cost of any building.</p>
      <p>A smart BMS helps reduce this by:</p>
      <ul>
        <li>Adjusting HVAC based on occupancy</li>
        <li>Automating lighting</li>
        <li>Optimizing load distribution</li>
        <li>Reducing wastage during non-peak hours</li>
        <li>Predicting energy demand trends</li>
      </ul>
      <p>Buildings with BMS experience up to 30–40% energy savings, contributing directly to cost reduction and environmental sustainability.</p>
      <h4>3. Enhanced Safety & Risk Prevention</h4>
      <p>A BMS strengthens building safety through:</p>
      <ul>
        <li>Real-time fire alarm monitoring</li>
        <li>Emergency evacuation workflows</li>
        <li>Gas leak detection</li>
        <li>Fault prediction in electrical systems</li>
        <li>Intelligent lockdown controls</li>
      </ul>
      <p>When an incident occurs, the BMS responds instantly — far faster than any manual intervention.</p>
      <h4>4. Improved Comfort & Workplace Experience</h4>
      <p>Modern occupants expect smart, comfortable, and personalized spaces.
BMS takes care of this by regulating:</p>
      <ul>
        <li>Temperature</li>
        <li>Ventilation</li>
        <li>Air quality</li>
        <li>Lighting</li>
      </ul>
      <p>The result? Improved productivity, satisfaction, and overall environmental experience.</p>
      <h4>5. Predictive Maintenance — The Future of Facility Management</h4>
      <p>Instead of waiting for a fault to occur, BMS uses real-time analytics to:</p>
      <ul>
        <li>Predict equipment failure</li>
        <li>Monitor asset health</li>
        <li>Schedule maintenance activities</li>
        <li>Reduce downtime</li>
      </ul>
      <p>This proactive approach reduces repair costs and extends the lifespan of the infrastructure.</p>
      <h3>🧠 How a BMS Actually Works</h3>
      <p>A Building Management System uses a 4-layer architecture:</p>
      <ol>
        <li><strong>Sensors & Field Devices:</strong> Temperature sensors, smoke detectors, motion sensors, flow meters, etc.</li>
        <li><strong>Controllers:</strong> Programmable Logic Controllers (PLCs) and DDCs (Direct Digital Controllers) that interpret signals.</li>
        <li><strong>Communication Network:</strong> Protocols like BACnet, Modbus, KNX, LonWorks, IP networks.</li>
        <li><strong>Central Management Software:</strong> Dashboards, alerts, analytics, automation rules, reporting.</li>
      </ol>
      <p>These layers work together seamlessly to create an intelligent building ecosystem.</p>
      <h3>🏢 Where Is BMS Used?</h3>
      <p>BMS is essential in:</p>
      <ul>
        <li>Hospitals & Medical Colleges</li>
        <li>Corporate Offices & IT Parks</li>
        <li>Data Centers</li>
        <li>Airports & Metro Stations</li>
        <li>Smart Buildings & Shopping Malls</li>
        <li>Universities & Schools</li>
        <li>Hotels & Hospitality</li>
        <li>Manufacturing Plants</li>
        <li>Government Institutions</li>
      </ul>
      <p>Any facility with electrical, mechanical, or safety systems benefits from a smart BMS layer.</p>
      <h3>🚀 The Rise of iBMS: The Future of Smart Buildings</h3>
      <p>The next generation of BMS is iBMS (Integrated Building Management System) — which combines:</p>
      <ul>
        <li>IoT devices</li>
        <li>Cloud analytics</li>
        <li>AI-driven automation</li>
        <li>Cybersecurity protection</li>
        <li>Energy optimization</li>
        <li>Integrated ELV (CCTV, Access Control, PA)</li>
      </ul>
      <p>This delivers a holistic smart building environment capable of learning, predicting, and automatically improving operations.</p>
      <h3>💼 Why Choose Cyrotics Technologies for BMS Solutions?</h3>
      <p>At Cyrotics Technologies, we specialize in designing, integrating, and delivering advanced BMS and smart infrastructure solutions across India.</p>
      <p>Our expertise includes:</p>
      <ul>
        <li>Full-scale BMS consulting & design</li>
        <li>HVAC automation</li>
        <li>Lighting & energy optimization</li>
        <li>Access control & security integration</li>
        <li>Fire & safety system integration</li>
        <li>IoT-based smart building solutions</li>
        <li>Command center and monitoring setup</li>
        <li>End-to-end project execution</li>
      </ul>
      <p>Our team has successfully executed BMS and IT infrastructure at major institutions including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science</li>
        <li>Government Medical College Chandrapur</li>
        <li>Noida International Airport Limited</li>
        <li>AIIMS Rajkot</li>
        <li>Bihar Animal Science University</li>
        <li>And multiple private & public sector clients</li>
      </ul>
      <p>We ensure every project is future-ready, scalable, efficient, and compliant with global standards.</p>
      <h3>📌 Conclusion: The Building of the Future Is Smart, Responsive & Efficient</h3>
      <p>A Building Management System is not a luxury — it’s a strategic investment.</p>
      <p>It enhances:</p>
      <ul>
        <li>✔ Operational efficiency</li>
        <li>✔ Energy savings</li>
        <li>✔ Security & safety</li>
        <li>✔ Comfort & user experience</li>
        <li>✔ Predictive building intelligence</li>
      </ul>
      <p>The hidden genius of your building is already here — and with the right implementation, it can transform how your infrastructure performs for decades.</p>
      <p>If you're ready to build a smarter, safer, more efficient facility, Cyrotics Technologies is here to help you unlock the full power of BMS.</p>
    `
  },
  {
    slug: 'from-idea-to-app-the-journey-of-custom-software-development',
    title: 'From Idea to App: The Journey of Custom Software Development',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-06-01',
    category: 'Software Development',
    excerpt: 'Off-the-shelf software can only take you so far. When your business processes are unique, a custom-built application is the key to unlocking true efficiency. This post outlines the typical lifecycle of a custom software project, from initial discovery and design to deployment and beyond.',
    imageUrl: 'https://picsum.photos/seed/blog6/800/450',
    imageHint: 'ui design wireframe',
    tags: ['Software Development', 'Agile', 'Cloud'],
    content: `
      <p>In today’s digital era, businesses are no longer asking whether they need digital solutions — they are asking how fast they can build them. Whether it’s a mobile app, a web platform, a mission-critical enterprise tool, or an automation system, the journey from concept to deployment requires expertise, strategy, and innovation.</p>
      <p>At Cyrotics Technologies, we specialize in transforming ideas into fully functional, scalable, and secure applications. This blog walks you through the complete journey of custom software development — from the very first spark of an idea to delivering a production-ready application.</p>
      <h3>1. Ideation & Requirement Discovery</h3>
      <p>Every great app begins with a clear vision. During this phase, we work closely with the client to understand:</p>
      <ul>
        <li>The business problem</li>
        <li>Target users</li>
        <li>Key functional requirements</li>
        <li>Expected outcomes</li>
        <li>Technical feasibility</li>
        <li>Budget and timelines</li>
      </ul>
      <p>Through structured discovery workshops, brainstorming sessions, and competitor analysis, we convert ideas into a defined project scope. This forms the foundation of all future development activities.</p>
      <h3>2. Planning, Documentation & Architecture Design</h3>
      <p>Once the idea is validated, our team creates a detailed blueprint of the solution, which includes:</p>
      <ul>
        <li><strong>✔ Technical Architecture:</strong> Defines system components, databases, APIs, and integrations.</li>
        <li><strong>✔ UI/UX Wireframes:</strong> Visual outlines of how users will interact with the application.</li>
        <li><strong>✔ Project Plan & Milestones:</strong> Agile sprint planning, deliverable timelines, resource allocation.</li>
        <li><strong>✔ Technology Stack Selection:</strong> Choosing the most suitable tools (React, Node.js, Python, Flutter, AWS, etc.) based on performance, scalability, and cost.</li>
      </ul>
      <p>This phase ensures clarity, transparency, and predictable project execution.</p>
      <h3>3. UI/UX Design: Crafting a Seamless User Experience</h3>
      <p>A successful app is not just functional — it must be intuitive and delightful. Our UI/UX designers build:</p>
      <ul>
        <li>High-fidelity screens</li>
        <li>Interactive prototypes</li>
        <li>Responsive layouts</li>
        <li>User journey maps</li>
        <li>Brand-aligned theme guides</li>
      </ul>
      <p>The goal is to create a design that is modern, user-friendly, and aligned with the brand identity of our client.</p>
      <h3>4. Development: Where the Code Comes to Life</h3>
      <p>This is the phase where the real engineering begins. Using Agile methodology, our development cycles include:</p>
      <h4>🔹 Front-end Development</h4>
      <p>Crafting user interfaces using modern frameworks like React, Angular, or Flutter.</p>
      <h4>🔹 Back-end Development</h4>
      <p>Developing secure, high-performance APIs, databases, and business logic using:</p>
      <ul>
        <li>Node.js</li>
        <li>Python Django / Flask</li>
        <li>Java / .NET</li>
        <li>PHP Laravel</li>
      </ul>
      <h4>🔹 Database & Cloud Deployment</h4>
      <p>Designing scalable data structures on platforms like:</p>
      <ul>
        <li>AWS</li>
        <li>Google Cloud</li>
        <li>Azure</li>
      </ul>
      <p>We ensure every feature is built modularly, tested thoroughly, and optimized for speed.</p>
      <h3>5. Testing & Quality Assurance</h3>
      <p>Quality is non-negotiable in custom software development. Our QA engineers perform:</p>
      <ul>
        <li>Functional testing</li>
        <li>Performance testing</li>
        <li>UI/UX testing</li>
        <li>Security testing</li>
        <li>API testing</li>
        <li>Cross-platform and cross-device testing</li>
      </ul>
      <p>Our objective: zero bugs and maximum reliability. Every feature undergoes rigorous validation before moving to production.</p>
      <h3>6. Deployment & Go-Live</h3>
      <p>Once the application passes all quality checkpoints, we prepare for deployment. This includes:</p>
      <ul>
        <li>Server setup and cloud configuration</li>
        <li>CI/CD pipeline execution</li>
        <li>Database migration</li>
        <li>Load testing</li>
        <li>Go-live readiness checks</li>
      </ul>
      <p>After deployment, we monitor the application to ensure smooth performance and immediate issue resolution if needed.</p>
      <h3>7. Post-Launch Support, Upgrades & Scaling</h3>
      <p>Software development does not end at launch — it evolves. We offer long-term support through:</p>
      <ul>
        <li>Continuous monitoring</li>
        <li>Security patches</li>
        <li>Performance enhancements</li>
        <li>New feature releases</li>
        <li>Scalability upgrades</li>
      </ul>
      <p>This ensures your app remains secure, relevant, and future-ready.</p>
      <h3>Why Businesses Choose Custom Software Development</h3>
      <p>Custom-built applications offer unmatched benefits:</p>
      <ul>
        <li>✔ Tailored to your business needs</li>
        <li>✔ More secure than off-the-shelf solutions</li>
        <li>✔ Scalable for future growth</li>
        <li>✔ Integrated with your existing systems</li>
        <li>✔ Competitive advantage in your industry</li>
      </ul>
      <p>Whether you're building an operational automation tool, a mobile app for customers, or a complete enterprise system — custom software gives you full control and long-term value.</p>
      <h3>Cyrotics Technologies: Your Partner in Custom Software Excellence</h3>
      <p>With experience across healthcare, aviation, education, corporate, and government sectors, we deliver solutions that are:</p>
      <ul>
        <li>Robust</li>
        <li>Scalable</li>
        <li>Secure</li>
        <li>User-centric</li>
        <li>Cost-efficient</li>
      </ul>
      <p>Our team excels in end-to-end IT and software development — from concept consulting to long-term maintenance.</p>
      <h3>Final Thoughts</h3>
      <p>Turning an idea into a powerful application is a journey that requires creativity, engineering expertise, and a clear strategy. At Cyrotics Technologies, we take pride in converting concepts into digital products that drive business success.</p>
      <p>If you’re planning to develop a custom app or a software platform, our team is ready to help you bring your vision to life.</p>
    `
  },
  {
    slug: 'the-role-of-it-infrastructure-in-modern-medical-colleges-and-hospitals',
    title: 'The Role of IT Infrastructure in Modern Medical Colleges and Hospitals (With Cyrotics Project Insights)',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-05-20',
    category: 'CCTV & ELV Systems',
    excerpt: 'Healthcare is transforming rapidly—and modern medical colleges, teaching hospitals, and research institutions now depend heavily on robust IT & ELV infrastructure to deliver efficient clinical care, secure data management, and smooth institutional functioning.',
    imageUrl: 'https://picsum.photos/seed/blog9/800/450',
    imageHint: 'doctor using tablet',
    tags: ['Healthcare', 'IT Infrastructure', 'Smart Hospital'],
    content: `
      <p>Healthcare is transforming rapidly—and modern medical colleges, teaching hospitals, and research institutions now depend heavily on robust IT & ELV infrastructure to deliver efficient clinical care, secure data management, and smooth institutional functioning.</p>
      <p>From electronic medical records to advanced CCTV surveillance, from high-speed campus networks to smart classrooms—technology is at the heart of every modern healthcare institution.</p>
      <p>At Cyrotics Technologies, we have successfully built and delivered complete IT & ELV infrastructures for leading medical institutions across India, including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science (MP)</li>
        <li>Govt. Medical College Chandrapur (MH)</li>
        <li>Bhagwan Parshuram Govt. Medical College Kaithal (HR)</li>
        <li>Shri Guru Tegh Bahadur Govt. Medical College Yamunanagar (HR)</li>
        <li>AIIMS Rajkot (Gujarat)</li>
        <li>IIM Bodhgaya</li>
        <li>Bihar Animal Science University</li>
      </ul>
      <p>This blog explains the critical role of IT infrastructure in healthcare institutions—supported with real examples from our executed projects.</p>
      <h3>⭐ 1. High-Speed Network Backbone – The Digital Nervous System of a Medical College</h3>
      <p>A medical college runs thousands of devices every day:</p>
      <ul>
        <li>Student computers</li>
        <li>Smart classrooms</li>
        <li>Labs & simulation centers</li>
        <li>Hospital OPD/IPD systems</li>
        <li>Diagnostic machines</li>
        <li>Faculty & administration systems</li>
      </ul>
      <p>A high-speed, redundant network is mandatory.</p>
      <h4>What Cyrotics Provides:</h4>
      <ul>
        <li>✔ Campus-wide fiber backbone</li>
        <li>✔ Redundant core switching</li>
        <li>✔ Secure Wi-Fi 6 coverage</li>
        <li>✔ Segmented VLAN architecture</li>
        <li>✔ High availability Internet links</li>
      </ul>
      <p><strong>Project Example:</strong> At Govt. Medical College Chandrapur, we built a multi-gigabit fiber network covering hostels, classrooms, OPD/IPD blocks, exam halls, and labs.</p>
      <h3>⭐ 2. Data Centers & Server Rooms – The Heart of Healthcare Data</h3>
      <p>Modern healthcare requires centralized processing and storage for:</p>
      <ul>
        <li>EMR/EHR systems</li>
        <li>PACS/RIS imaging systems</li>
        <li>HRMS/Accounts/ERP</li>
        <li>Attendance & RFID tracking</li>
        <li>CCTV video retention</li>
        <li>Lab & diagnostic databases</li>
      </ul>
      <h4>Cyrotics Expertise:</h4>
      <ul>
        <li>✔ Tier-based server room setup</li>
        <li>✔ Environmental control (PAC, humidity sensors)</li>
        <li>✔ Redundant power & UPS</li>
        <li>✔ Structured cabling</li>
        <li>✔ Blade/virtualized servers</li>
        <li>✔ Firewall security</li>
      </ul>
      <p><strong>Project Example:</strong> Chhindwara Institute of Medical Science received a full data center migration, including server upgrades, CCTV storage servers, and virtualized infrastructure.</p>
      <h3>⭐ 3. Smart Classroom & E-Learning Integration</h3>
      <p>Medical colleges today rely on:</p>
      <ul>
        <li>Smart boards</li>
        <li>High-resolution projectors</li>
        <li>Lecture recording systems</li>
        <li>Online teaching platforms</li>
        <li>Video conferencing</li>
      </ul>
      <h4>Our Deliverables:</h4>
      <ul>
        <li>✔ Classroom automation</li>
        <li>✔ Audio & video integration</li>
        <li>✔ High-bandwidth Wi-Fi</li>
        <li>✔ Central monitoring & control</li>
      </ul>
      <p>Smart classrooms enable better learning, real-time online sessions, and digital skill development for medical students.</p>
      <h3>⭐ 4. Hospital & Campus Security Through ELV Systems</h3>
      <p>Security is extremely critical in medical environments.</p>
      <h4>We Deploy Full ELV Ecosystems:</h4>
      <ul>
        <li>✔ CCTV surveillance (NVR-based or VMS-based)</li>
        <li>✔ Fire alarm & smoke detection systems</li>
        <li>✔ Access control & biometric systems</li>
        <li>✔ Public announcement systems</li>
        <li>✔ IP-based intercom solutions</li>
      </ul>
      <p><strong>Real Example:</strong> At Shri Guru Tegh Bahadur Govt. Medical College Yamunanagar, we deployed:</p>
      <ul>
        <li>800+ CCTV cameras</li>
        <li>Server-based surveillance with long-term storage</li>
        <li>Complete access control & fire alarm integration</li>
      </ul>
      <p>This ensured a fully-secure medical campus with 24×7 monitoring.</p>
      <h3>⭐ 5. IT Integration for Clinical Departments</h3>
      <p>Departments such as:</p>
      <ul>
        <li>Pathology</li>
        <li>Radiology</li>
        <li>Orthopedics</li>
        <li>Anatomy</li>
        <li>Pharmacology</li>
      </ul>
      <p>…need specialized digital connectivity.</p>
      <h4>How We Support:</h4>
      <ul>
        <li>✔ Network links for diagnostic machines</li>
        <li>✔ PACS/RIS compatibility</li>
        <li>✔ EMR integration</li>
        <li>✔ High-speed data transfer for imaging</li>
        <li>✔ Smart labs setup</li>
      </ul>
      <p>With our IT design, all departments get seamless digital data exchange.</p>
      <h3>⭐ 6. Scalable Infrastructure for Future Expansion</h3>
      <p>Medical colleges expand frequently:</p>
      <ul>
        <li>New labs</li>
        <li>Hostels</li>
        <li>OPD blocks</li>
        <li>Research centers</li>
        <li>Additional hospitals</li>
      </ul>
      <h4>Cyrotics Ensures Future-Ready Design:</h4>
      <ul>
        <li>✔ Modular data centers</li>
        <li>✔ Tier-based expansion possibility</li>
        <li>✔ Extra fiber cores & spare capacity</li>
        <li>✔ Flexible VLAN/IP schemas</li>
        <li>✔ Cloud-ready infrastructure</li>
      </ul>
      <p>Our infrastructures are designed to scale effortlessly for 5–10 years.</p>
      <h3>⭐ 7. Ensuring 24×7 Availability & IT Security</h3>
      <p>Healthcare cannot afford downtime or cyber risks.</p>
      <h4>We provide:</h4>
      <ul>
        <li>✔ Redundant Internet</li>
        <li>✔ Failover routing</li>
        <li>✔ Firewall & UTM protection</li>
        <li>✔ Regular security audits</li>
        <li>✔ Data backups & DR solutions</li>
      </ul>
      <p>This ensures uninterrupted hospital operations and protection against cyberattacks.</p>
      <h3>⭐ Conclusion</h3>
      <p>Modern medical colleges are not just educational institutions—they are technology-driven ecosystems that require strong, secure, and scalable IT & ELV infrastructure.</p>
      <p>Cyrotics Technologies helps healthcare institutions achieve:</p>
      <ul>
        <li>✔ Faster operations</li>
        <li>✔ Higher security</li>
        <li>✔ Better learning environments</li>
        <li>✔ Efficient patient care</li>
        <li>✔ Long-term scalability</li>
      </ul>
      <p>From data centers to CCTV, from networking to automation—we are proud to empower India's leading medical institutions with future-ready digital infrastructure.</p>
    `
  },
  {
    slug: 'how-smart-elv-systems-improve-security',
    title: 'How Smart ELV Systems Improve Security & Efficiency in Government and Corporate Campuses',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-04-10',
    category: 'CCTV & ELV Systems',
    excerpt: 'In today’s rapidly evolving environment, security is no longer limited to guards and manual checks. Government institutions, medical campuses, and corporate offices now rely on Smart ELV (Extra Low Voltage) Systems for 360° safety and operational efficiency.',
    imageUrl: 'https://picsum.photos/seed/blog10/800/450',
    imageHint: 'security control room',
    tags: ['ELV', 'Security', 'Smart Campus', 'Government'],
    content: `
      <p>In today’s rapidly evolving environment, security is no longer limited to guards, manual registers, and physical checks. Government institutions, medical campuses, corporate offices, airports, universities, and large public facilities now rely heavily on Smart ELV (Extra Low Voltage) Systems to ensure 360° safety, operational efficiency, and intelligent monitoring.</p>
      <p>From AI-enabled CCTV to automated access control, ELV systems form the digital backbone of modern campuses.</p>
      <p>At Cyrotics Technologies, we have successfully deployed full-scale ELV infrastructures across India at top institutions, including:</p>
      <ul>
        <li>Chhindwara Institute of Medical Science (MP)</li>
        <li>Government Medical College Chandrapur (MH)</li>
        <li>Bhagwan Parshuram Govt. Medical College Kaithal</li>
        <li>SGTS Govt. Medical College Yamunanagar</li>
        <li>Noida International Airport</li>
        <li>Techno Data Center Chennai</li>
        <li>Bihar Animal Sciences University</li>
        <li>Multiple Corporate Facilities</li>
      </ul>
      <p>This article explains how Smart ELV Systems enhance both security and operational efficiency for large campuses.</p>
      <h3>⭐ 1. AI-Powered CCTV Surveillance</h3>
      <p>CCTV is no longer just about recording—modern AI-enabled surveillance is capable of:</p>
      <h4>Key Features:</h4>
      <ul>
        <li>✔ Facial recognition</li>
        <li>✔ Motion & intrusion detection</li>
        <li>✔ Perimeter breach alerts</li>
        <li>✔ Crowd detection</li>
        <li>✔ Number plate recognition</li>
        <li>✔ Abnormal behavior detection</li>
      </ul>
      <h4>Benefits for Campuses:</h4>
      <ul>
        <li>Real-time threat detection</li>
        <li>Automated alerts reduce manpower dependency</li>
        <li>Evidence-based decision-making</li>
        <li>Safer hostels, academic areas, parking, and patient zones</li>
      </ul>
      <p><strong>Example Project:</strong> At SGTBS Govt. Medical College Yamunanagar, Cyrotics deployed 800+ cameras with server-based long-term storage and AI analytics.</p>
      <h3>⭐ 2. Access Control & Biometric Security</h3>
      <p>Managing entry and exit in sensitive areas is critical.</p>
      <h4>Smart Access Systems Include:</h4>
      <ul>
        <li>✔ Biometric/Face entry</li>
        <li>✔ RFID-based smart access cards</li>
        <li>✔ Visitor management systems</li>
        <li>✔ Elevator access control</li>
        <li>✔ Door interlocking solutions</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Prevents unauthorized access</li>
        <li>Maintains digital entry logs</li>
        <li>Enhances employee/student safety</li>
        <li>Ideal for labs, server rooms, ICUs, data centers, hostels</li>
      </ul>
      <p><strong>Example:</strong> At Chhindwara Institute of Medical Science, we implemented multi-layer biometric access for server rooms and critical departments.</p>
      <h3>⭐ 3. Public Address (PA) & Emergency Announcement Systems</h3>
      <p>A smart PA system is essential for emergency alerts and routine announcements.</p>
      <h4>Capabilities:</h4>
      <ul>
        <li>✔ Zonal announcements</li>
        <li>✔ Fire alarm integration</li>
        <li>✔ Automated scheduled announcements</li>
        <li>✔ Centralized control</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Faster emergency response</li>
        <li>Clear communication across large areas</li>
        <li>Important for hospitals, hostels, admin blocks, and public areas</li>
      </ul>
      <h3>⭐ 4. Fire Alarm & Smoke Detection Systems</h3>
      <p>Modern campuses demand advanced fire protection.</p>
      <h4>ELV Fire Systems Include:</h4>
      <ul>
        <li>✔ Addressable fire alarm panels</li>
        <li>✔ Heat & smoke sensors</li>
        <li>✔ Water leak detection</li>
        <li>✔ Gas leak detection</li>
        <li>✔ Emergency evacuation systems</li>
      </ul>
      <h4>Advantages:</h4>
      <ul>
        <li>Instant alerts help avoid major damage</li>
        <li>Reduces risk to life and infrastructure</li>
        <li>Integrated with BMS, CCTV, and PA systems</li>
      </ul>
      <h3>⭐ 5. Structured Cabling & Communication Infrastructure</h3>
      <p>All ELV devices rely on a strong cabling backbone.</p>
      <h4>Cyrotics Provides:</h4>
      <ul>
        <li>✔ OFC backbone</li>
        <li>✔ CAT6/CAT6A copper network</li>
        <li>✔ Patch panel & racks</li>
        <li>✔ End-to-end certified cabling</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>High-speed data transfer for CCTV, Wi-Fi, access control</li>
        <li>Zero downtime</li>
        <li>Better scalability for future devices</li>
      </ul>
      <h3>⭐ 6. Smart Energy & Building Automation Integration</h3>
      <p>ELV systems are now integrated with:</p>
      <ul>
        <li>BMS (Building Management System)</li>
        <li>HVAC controls</li>
        <li>IoT sensors</li>
        <li>Energy management dashboards</li>
      </ul>
      <h4>Outcomes:</h4>
      <ul>
        <li>✔ Energy savings</li>
        <li>✔ Reduced operational cost</li>
        <li>✔ Improved sustainability</li>
      </ul>
      <p>This is especially useful for government buildings focusing on green initiatives.</p>
      <h3>⭐ 7. Visitor & Vehicle Management Systems (VMS)</h3>
      <p>Managing large footfall requires automation.</p>
      <h4>ELV Helps Automate:</h4>
      <ul>
        <li>✔ Visitor registration with QR codes</li>
        <li>✔ Parking management</li>
        <li>✔ ANPR (Automatic Number Plate Recognition)</li>
        <li>✔ Entry approval workflows</li>
      </ul>
      <h4>Benefits:</h4>
      <ul>
        <li>Zero manual errors</li>
        <li>Higher security</li>
        <li>Smooth movement of staff, students, visitors, and vehicles</li>
      </ul>
      <h3>⭐ 8. Improved Operational Efficiency Across the Campus</h3>
      <p>ELV systems reduce dependency on manual processes and enable:</p>
      <ul>
        <li>✔ 24×7 automated monitoring</li>
        <li>✔ Faster incident detection</li>
        <li>✔ Better control over assets and operations</li>
        <li>✔ Data-driven security management</li>
        <li>✔ Staff productivity improvement</li>
        <li>✔ Reduced downtime</li>
      </ul>
      <p>This makes campuses safer, smarter, and more efficient.</p>
      <h3>⭐ Conclusion</h3>
      <p>Smart ELV systems are no longer optional—they are essential for any government or corporate campus aiming for world-class safety and operational standards.</p>
      <p>At Cyrotics Technologies, we design and deploy end-to-end ELV ecosystems that include:</p>
      <ul>
        <li>AI CCTV Surveillance</li>
        <li>Access Control & Biometric Systems</li>
        <li>Fire Alarm & Smoke Detection</li>
        <li>PA & Emergency Alert Systems</li>
        <li>Visitor & Vehicle Management</li>
        <li>Structured Cabling</li>
        <li>Integrated Command Centers</li>
      </ul>
      <p>Our solutions have helped institutions across India operate with higher security, improved efficiency, and future-ready digital infrastructure.</p>
    `
  },
  {
    slug: 'importance-of-data-center-migration-and-modernization',
    title: 'The Importance of Data Center Migration & Modernization for Future-Ready Businesses',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-06-23',
    category: 'Data Center Migration & Cloud Infrastructure Solutions',
    excerpt: 'In today’s digital-first era, businesses cannot afford downtime, legacy systems, or inefficient computing environments. Data Center Migration and Modernization has become a necessity.',
    imageUrl: 'https://picsum.photos/seed/blog11/800/450',
    imageHint: 'modern data center',
    tags: ['Data Center', 'Modernization', 'Cloud'],
    content: `
      <p>In today’s digital-first era, businesses cannot afford downtime, legacy systems, or inefficient computing environments. Data Center Migration and Modernization has become a necessity. At Cyrotics Technologies (OPC) Pvt. Ltd., our experience with complex data center projects across India highlights the critical importance of this process.</p>
      <h3>⭐ Why Data Center Migration Is Crucial Today</h3>
      <p>A data center is the heart of any organization. Modernization is unavoidable for several reasons:</p>
      <ul>
        <li><strong>Legacy Infrastructure Causes Downtime:</strong> Old hardware creates performance bottlenecks. Migration upgrades your environment to high-availability, redundant architectures.</li>
        <li><strong>Security Threats Are Increasing:</strong> Modern data centers offer Next-Gen Firewalls, Zero Trust Architecture, and end-to-end encryption to combat evolving cyberattacks.</li>
        <li><strong>Cloud Adoption Is a Priority:</strong> Modernization enables smooth integration with AWS, Azure, GCP, and hybrid cloud solutions.</li>
        <li><strong>Scalability Needs Are Higher Than Ever:</strong> A modernized data center easily scales to handle more users, new applications, and exponential data growth.</li>
      </ul>
      <h3>⭐ How Cyrotics Technologies Performs Seamless Data Center Migration</h3>
      <p>Our expertise ensures zero data loss and minimal downtime. Our step-by-step approach includes Assessment & Audit, Design & Architecture, Migration Planning, Execution & Deployment, Testing & Validation, and Go-Live & Optimization.</p>
      <h3>⭐ Benefits of Modernizing Your Data Center</h3>
      <p>Modernization brings immediate and long-term advantages, including enhanced performance, improved security, reduced operational costs, better business continuity, and a future-proof IT environment ready for AI, IoT, and 5G.</p>
      <h3>⭐ Conclusion</h3>
      <p>Data Center Migration and Modernization is a strategic move to build a resilient, secure, and scalable foundation for the future. At Cyrotics Technologies, we bring expertise in complex national-level projects, a structured migration framework, and a zero-downtime approach. Your digital transformation journey begins with the right infrastructure—let us build it for you.</p>
    `
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What industries do you specialize in?",
    answer: "We work with a wide range of industries, but we have deep expertise in Finance, Healthcare, Manufacturing, Real Estate, and Education. Our solutions are adaptable and can be tailored to meet the specific compliance and operational needs of any sector."
  },
  {
    question: "How do you begin a new project with a client?",
    answer: "Every project starts with a detailed consultation and discovery phase. Our primary goal is to understand your business, challenges, and objectives. We then conduct a thorough assessment of your existing systems before designing a solution and presenting a detailed proposal with a clear scope, timeline, and budget."
  },
  {
    question: "Do you provide ongoing support and maintenance after a project is completed?",
    answer: "Yes, absolutely. We view our clients as long-term partners. We offer a range of customizable support and maintenance packages, including 24/7 monitoring, preventive maintenance, and on-demand technical support to ensure your systems operate at peak performance."
  },
  {
    question: "How does CYROTICS ensure the security of the solutions you implement?",
    answer: "Security is at the core of everything we do. We follow a 'security-by-design' methodology, integrating best practices and robust security controls from the very beginning of a project. This includes risk assessments, secure coding practices, and adhering to industry standards like ISO 27001 and Zero Trust principles."
  },
  {
    question: "Can you integrate your solutions with our existing legacy systems?",
    answer: "Yes. We understand that a complete rip-and-replace is not always feasible. Our engineers are highly experienced in system integration and can develop custom APIs and middleware to ensure our modern solutions communicate seamlessly with your existing legacy applications and infrastructure, allowing for a phased and cost-effective modernization approach."
  }
];


export const SALUTATIONS = ['Mr', 'Ms', 'Mx', 'Dr', 'Er', 'Prof'];

export const CONTACT_SUBJECTS = [
  'General Inquiry',
  'Sales / New Project',
  'Technical Support',
  'Billing & Accounts',
  'Vendor Registration',
  'Partnership / Collaboration',
  'Feedback / Complaint',
  'Order Issues',
  'Others',
];

export const DEPARTMENTS = [
  'Sales Team',
  'Support Team',
  'Project Execution Team',
  'Finance / Billing',
  'HR / Recruitment',
  'Procurement / Vendor Management',
];

export const PROJECT_TYPES = [
  'IT Networking',
  'Data Center',
  'Audio-Visual / Smart Classroom',
  'CCTV & Surveillance',
  'Smart Building Solutions',
  'Smart City Solutions',
  'Software Development',
  'Mobile App Development',
  'AI / Automation',
  'Cloud / Cybersecurity',
  'Renewable Energy / Solar',
  'Annual Maintenance Contract (AMC)',
];

export const BUDGET_RANGES = [
  '< ₹1 Lakh',
  '₹1–10 Lakh',
  '₹10–50 Lakh',
  '₹50 Lakh–1 Cr',
  '₹1 Cr - 50 Cr',
  '₹50 Cr - 150 Cr',
];

export const PRIORITY_LEVELS = ['Normal', 'High', 'Critical'];

export const CONTACT_METHODS = ['Email', 'Phone Call', 'WhatsApp', 'Google Meet', 'Zoom'];

export const CONTACT_TIMES = ['Morning (9 AM – 12 PM)', 'Afternoon (12 PM – 5 PM)', 'Evening (5 PM – 8 PM)', 'Anytime'];

export const HEAR_ABOUT_US_OPTIONS = [
  'Google Search',
  'LinkedIn',
  'Referral',
  'Existing Client',
  'Exhibition/Event',
  'Email Campaign',
  'Other',
];

export const COUNTRY_CODES = [
  "+91", "+1", "+44", "+971", "+65", "+61", "+49", "+81", "+86"
];

export const EMPLOYEE_TESTIMONIALS: EmployeeTestimonial[] = [
    {
        quote: "Working at Cyrotics has been a phenomenal growth journey. The exposure to large-scale, mission-critical projects is unparalleled, and the leadership team truly invests in your professional development.",
        name: "Anjali Sharma",
        role: "Senior Network Architect",
    },
    {
        quote: "The culture here is all about innovation and collaboration. I get to work with cutting-edge technologies in cybersecurity and smart infrastructure, and my voice is always heard.",
        name: "Rajiv Menon",
        role: "Cybersecurity Analyst",
    },
    {
        quote: "As a software developer, I appreciate the creative freedom and the emphasis on quality. We're not just coding; we're building solutions that solve real-world problems for major clients.",
        name: "Priya Singh",
        role: "Software Engineer",
    },
];

export const CAREER_BENEFITS: Benefit[] = [
    {
        icon: Globe,
        title: "Work-Life Balance",
        description: "We promote a healthy work-life balance with flexible work arrangements and a supportive environment.",
    },
    {
        icon: BookOpenCheck,
        title: "Skill Development",
        description: "Continuous learning is in our DNA. We provide access to training, workshops, and certifications.",
    },
    {
        icon: Rocket,
        title: "Career Growth",
        description: "We offer clear career paths and opportunities for advancement within the company.",
    },
    {
        icon: Sparkles,
        title: "Innovative Projects",
        description: "Work on exciting, challenging projects that are shaping the future of technology in India.",
    },
    {
        icon: Award,
        title: "Rewards & Recognition",
        description: "We believe in recognizing and rewarding our employees for their hard work and dedication.",
    },
    {
        icon: Users,
        title: "Collaborative Culture",
        description: "Join a team of talented professionals who are passionate about what they do.",
    }
];

export const CAREER_FAQS: CareerFAQ[] = [
    {
        question: "What is the hiring process at Cyrotics?",
        answer: "Our hiring process typically includes an initial screening, a technical interview, and a final HR round. For senior roles, there may be an additional leadership interview. We aim to keep the process transparent and efficient."
    },
    {
        question: "How long does it take to hear back after applying?",
        answer: "We strive to review all applications within two weeks. If your profile matches our requirements, our HR team will get in touch with you to schedule the next steps."
    },
    {
        question: "Can I apply for multiple roles at the same time?",
        answer: "Yes, you can apply for multiple positions that you believe are a good fit for your skills and experience. However, we recommend tailoring your application for each specific role to highlight your relevant qualifications."
    },
    {
        question: "Do you offer internships or programs for fresh graduates?",
        answer: "Absolutely! We have dedicated internship and graduate trainee programs. These are great opportunities to gain hands-on experience and kick-start your career in the technology industry. Keep an eye on our careers page for openings."
    }
];
    

    
