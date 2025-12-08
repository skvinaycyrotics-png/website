
import type {
  NavLink,
  Service,
  Project,
  Testimonial,
  TeamMember,
  JobOpening,
  BlogPost,
  FAQ,
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
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    subLinks: [
      { href: '/about', label: 'About Us' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  {
    href: '/services',
    label: 'Services',
    subLinks: [
      { href: '/services/infrastructure-solutions', label: 'Infrastructure Solutions' },
      { href: '/services/security-surveillance', label: 'Security & Surveillance' },
      { href: '/services/audio-visual-communication', label: 'Audio-Visual & Communication' },
      { href: '/services/smart-building-solutions', label: 'Smart Building Solutions' },
      { href: '/services/software-development', label: 'Software Development' },
      { href: '/services/renewable-energy', label: 'Renewable Energy' },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    slug: 'infrastructure-solutions',
    title: 'Infrastructure Solutions',
    shortDescription:
      'We architect and manage resilient IT infrastructures that power enterprise success. From modernizing data centers to transforming networks, our solutions ensure high availability, performance, and scalability.',
    description:
      'We architect and manage resilient IT infrastructures that power enterprise success. From modernizing data centers to transforming networks, our solutions ensure high availability, performance, and scalability.',
    icon: Server,
    imageUrl: 'https://picsum.photos/seed/infra/1200/800',
    imageHint: 'data center servers',
    features: [
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
    techStack: ['Cisco', 'HPE', 'Dell EMC', 'VMware', 'Microsoft Azure'],
    caseStudies: [{ title: 'Enterprise Network Overhaul', slug: 'proj-1' }],
  },
  {
    slug: 'security-surveillance',
    title: 'Security & Surveillance',
    shortDescription:
      'Protect your assets, people, and operations with our comprehensive security solutions. We design and deploy integrated systems for surveillance, access control, and fire detection, providing a unified security posture.',
    description:
      'Protect your assets, people, and operations with our comprehensive security solutions. We design and deploy integrated systems for surveillance, access control, and fire detection, providing a unified security posture.',
    icon: ShieldCheck,
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
    slug: 'smart-building-solutions',
    title: 'Smart Building Solutions',
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
    slug: 'software-development',
    title: 'Software Development',
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
    slug: 'renewable-energy',
    title: 'Renewable Energy',
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
      'For the Government Medical College in Chandrapur, we provided a comprehensive turnkey solution. Our scope covered end-to-end IT and ELV infrastructure, including a campus-wide Wi-Fi deployment, robust network security and firewall setup, and an advanced IP CCTV system complete with a central monitoring command centre. This project ensures the new medical college has a secure, scalable, and high-performance technology backbone.',
    imageUrl: 'https://picsum.photos/seed/gmc-chandrapur/600/400',
    imageHint: 'modern university campus',
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
    id: 'proj-bpgmc',
    title: 'Bhagwan Parshuram Government Medical College – Kaithal, Haryana',
    client: 'Bridge and Roof Company (India) Limited',
    shortDescription: 'Comprehensive IT & ELV infrastructure for a new medical college, including smart lecture halls, campus-wide networking, and integrated security systems.',
    longDescription: 'We provided a full turnkey solution for the Bhagwan Parshuram Government Medical College in Haryana. The project encompassed the entire IT and Extra-Low Voltage (ELV) infrastructure. This included smart lecture hall solutions, a high-speed fiber backbone, enterprise networking, data center setup, fire and safety systems (Fire Alarm, Public Address), robust access control, and comprehensive CCTV, Wi-Fi, and access control coverage across the campus.',
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
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The CYROTICS team are true professionals. Their data center modernization project was a game-changer for our operations. Their expertise and meticulous execution resulted in significant cost savings and a far more resilient system. We saw a 35% increase in power efficiency almost immediately.',
    name: 'Priya Mehta',
    title: 'CTO',
    company: 'Apex Financial',
    imageUrl: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    quote:
      'Security and compliance are paramount in our industry. CYROTICS delivered an integrated security solution that exceeded our expectations. The platform is robust, intuitive, and has streamlined our operations, improving our incident response time by over 60%.',
    name: 'Dr. Alok Sharma',
    title: 'Director of Facilities',
    company: 'Nova Labs',
    imageUrl: 'https://picsum.photos/seed/alok/100/100',
  },
  {
    quote:
      'Transforming our building with CYROTICS was a fantastic investment. The energy savings were immediate, and our tenants love the new smart features. Their team managed the entire process flawlessly, from design to implementation. Tenant satisfaction is up 15%!',
    name: 'Sameer Verma',
    title: 'Property Manager',
    company: 'Innovate Towers',
    imageUrl: 'https://picsum.photos/seed/sameer/100/100',
  },
    {
    quote:
      'The custom ERP system CYROTICS built for us has revolutionized our workflow. Production efficiency is up by 30%, and we have real-time visibility into our entire process. Their developers understood our unique needs and delivered a perfect solution.',
    name: 'Kiran Desai',
    title: 'COO',
    company: 'Precision Parts Inc.',
    imageUrl: 'https://picsum.photos/seed/kiran/100/100',
  },
    {
    quote:
      'From network design to implementation, CYROTICS has been an invaluable partner. Their SD-WAN solution has increased our branch agility and significantly lowered our connectivity costs. Their technical support is always responsive and knowledgeable.',
    name: 'Amit Patel',
    title: 'IT Director',
    company: 'Retail Chain Corp',
    imageUrl: 'https://picsum.photos/seed/amit/100/100',
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

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: 'Senior Network Engineer',
    location: 'Bangalore, India',
    type: 'Full-time',
    description:
      'We are seeking an experienced Network Engineer to design, implement, and manage complex network solutions for our enterprise clients.',
    requirements: [
      '5+ years of experience with Cisco and Juniper technologies.',
      'CCNP or equivalent certification required.',
      'Strong knowledge of SD-WAN, BGP, and OSPF.',
      'Experience with network security and firewalls.',
    ],
  },
  {
    title: 'Full-Stack Developer (React & Node.js)',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Join our software development team to build cutting-edge web and cloud applications for our diverse client base.',
    requirements: [
      '3+ years of professional experience with React and Node.js.',
      'Proficiency in TypeScript and GraphQL.',
      'Experience with Docker and AWS/GCP.',
      'Strong understanding of software design principles.',
    ],
  },
  {
    title: 'Security Systems Technician',
    location: 'Mumbai, India',
    type: 'Full-time',
    description:
      'Install, configure, and maintain CCTV, access control, and fire alarm systems at client sites.',
    requirements: [
      '2+ years of hands-on experience with electronic security systems.',
      'Familiarity with brands like Hikvision, Bosch, Honeywell.',
      'Strong troubleshooting and problem-solving skills.',
      'Excellent communication and customer service skills.',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'navigating-the-maze-of-data-center-modernization',
    title: 'Navigating the Maze of Data Center Modernization',
    author: 'Meera Iyer',
    authorImage: 'https://picsum.photos/seed/meera/100/100',
    date: '2024-07-20',
    excerpt: 'Is your data center an asset or a liability? In the age of cloud and edge computing, modernizing your data center isn\'t just an upgrade—it\'s a strategic necessity for survival and growth. This post explores the key drivers, challenges, and pathways to a successful data center transformation.',
    imageUrl: 'https://picsum.photos/seed/blog1/800/450',
    imageHint: 'data center aisle',
    tags: ['Data Center', 'Infrastructure', 'Modernization'],
    content: `
      <p>In today\'s digital-first economy, the data center remains the heart of the enterprise. However, many legacy data centers are struggling to keep pace with the demands of modern workloads, from AI and machine learning to hybrid cloud environments. This operational friction can stifle innovation and inflate costs. Data center modernization is the process of updating and optimizing your infrastructure to create a more agile, efficient, and resilient foundation for your business.</p>
      <p>It goes beyond simply replacing old servers. True modernization involves a holistic approach, re-evaluating everything from power and cooling to network architecture and management software. Key technologies like hyper-converged infrastructure (HCI), software-defined networking (SDN), and advanced data center infrastructure management (DCIM) tools are central to this transformation. The goal is to create a software-defined, automated environment that can dynamically allocate resources, predict failures before they happen, and provide deep visibility into performance and costs. At CYROTICS, we guide organizations through this complex journey, ensuring their data center evolves from a cost center into a powerful engine for business innovation.</p>
    `
  },
    {
    slug: 'zero-trust-architecture-a-paradigm-shift-in-cybersecurity',
    title: 'Zero Trust Architecture: A Paradigm Shift in Cybersecurity',
    author: 'Arjun Desai',
    authorImage: 'https://picsum.photos/seed/arjun/100/100',
    date: '2024-07-18',
    excerpt: 'The old castle-and-moat approach to security is broken. With perimeters dissolving and threats lurking inside and out, it\'s time for a new model: "Never trust, always verify." This introduction to Zero Trust Architecture (ZTA) explains why it\'s the future of enterprise security.',
    imageUrl: 'https://picsum.photos/seed/blog2/800/450',
    imageHint: 'digital security lock',
    tags: ['Cybersecurity', 'Zero Trust', 'Networking'],
    content: `
      <p>For decades, network security was built on a simple premise: trust anyone and anything inside the network, and be suspicious of everything outside. This "castle-and-moat" model is fundamentally broken in a world of cloud applications, remote work, and sophisticated insider threats. Zero Trust Architecture (ZTA) flips this model on its head with a simple but powerful principle: never trust, always verify. It assumes that threats exist both outside and inside the traditional network perimeter.</p>
      <p>In a Zero Trust model, every request for access—regardless of its origin—must be rigorously authenticated, authorized, and encrypted before access is granted. This is not a single product, but a strategic approach to security that leverages technologies like multi-factor authentication (MFA), identity and access management (IAM), and micro-segmentation. Micro-segmentation is key, as it involves dividing the network into small, isolated zones to limit the lateral movement of attackers. If one segment is compromised, the breach is contained and cannot spread across the entire network. Implementing ZTA is a journey that enhances security posture, simplifies compliance, and provides the agility businesses need to operate securely in a perimeter-less world.</p>
    `
  },
  {
    slug: 'the-roi-of-sustainability-how-solar-powers-your-bottom-line',
    title: 'The ROI of Sustainability: How Solar Powers Your Bottom Line',
    author: 'Vikram Singh',
    authorImage: 'https://picsum.photos/seed/vikram/100/100',
    date: '2024-06-25',
    excerpt: 'Adopting solar energy is more than an environmental statement—it\'s a powerful financial strategy. From immediate operational savings to long-term brand enhancement, we explore how investing in renewable energy delivers a compelling return on investment that goes far beyond just the balance sheet.',
    imageUrl: 'https://picsum.photos/seed/blog3/800/450',
    imageHint: 'solar panels factory',
    tags: ['Renewable Energy', 'Solar', 'ROI'],
    content: `
      <p>While corporate sustainability goals are a major driver for adopting solar energy, the financial business case is often what seals the deal. Investing in a commercial solar power system is a strategic move that delivers tangible returns, making it one of the smartest capital investments a business can make today. The most direct benefit is a significant reduction in electricity bills. By generating your own clean power on-site, you reduce your reliance on the grid and hedge against volatile utility rate hikes, leading to predictable, lower operational costs for decades.</p>
      <p>Beyond the immediate savings, solar assets increase your property value and offer attractive tax incentives and accelerated depreciation benefits that can shorten the payback period significantly. Furthermore, a commitment to sustainability enhances your brand image, attracting environmentally conscious customers and talent. In a competitive market, being a green leader is a powerful differentiator. When you combine the operational savings, financial incentives, and brand enhancement, the return on investment for solar energy becomes undeniable. It\'s a strategic investment in a more profitable and sustainable future.</p>
    `
  },
  {
    slug: 'beyond-the-video-call-crafting-the-modern-conference-room',
    title: 'Beyond the Video Call: Crafting the Modern Conference Room',
    author: 'Meera Iyer',
    authorImage: 'https://picsum.photos/seed/meera/100/100',
    date: '2024-06-10',
    excerpt: 'In the era of hybrid work, the conference room is no longer just a table with a speakerphone. It\'s a critical hub for collaboration between in-office and remote teams. This post dives into the key AV technologies and design principles for creating seamless, equitable, and productive meeting experiences.',
    imageUrl: 'https://picsum.photos/seed/blog4/800/450',
    imageHint: 'modern conference room',
    tags: ['Audio-Visual', 'Hybrid Work', 'Collaboration'],
    content: `
      <p>The rise of hybrid work has transformed the purpose of the office. It\'s no longer just a place to work, but a hub for collaboration. At the heart of this collaborative hub is the conference room, and the old setup of a long table and a speakerphone in the middle simply won\'t cut it. A modern conference room must provide an equitable experience for all participants, whether they are in the room or joining remotely. This requires a thoughtful integration of audio-visual technology.</p>
      <p>Key elements include intelligent cameras that can automatically frame the active speaker, ensuring remote participants feel engaged. High-quality microphone arrays and soundbars are essential to capture clear audio from everyone in the room without anyone needing to shout. Wireless presentation systems eliminate the frustrating hunt for the right dongle, allowing anyone to share their screen with a single click. And it all needs to be tied together with an intuitive control system that makes starting a meeting effortless. Investing in these technologies transforms your meeting rooms from sources of frustration into powerful engines of productivity and collaboration.</p>
    `
  },
   {
    slug: 'the-hidden-genius-of-your-building-an-intro-to-bms',
    title: 'The Hidden Genius of Your Building: An Intro to BMS',
    author: 'Arjun Desai',
    authorImage: 'https://picsum.photos/seed/arjun/100/100',
    date: '2024-05-22',
    excerpt: 'What if your building could think? A Building Management System (BMS) is the brain that does just that, quietly optimizing everything from temperature to security. Discover how this hidden genius works to make buildings more efficient, comfortable, and sustainable.',
    imageUrl: 'https://picsum.photos/seed/blog5/800/450',
    imageHint: 'building blueprint',
    tags: ['Smart Building', 'BMS', 'IoT'],
    content: `
      <p>Every large commercial building has a nervous system—a complex web of HVAC, lighting, and security systems. But without a brain to control it, this system is inefficient and chaotic. A Building Management System (BMS), also known as a Building Automation System (BAS), is the central intelligence that orchestrates these disparate components, turning a simple structure into a smart, responsive environment.</p>
      <p>At its core, a BMS is a computer-based system that monitors and controls a building\'s mechanical and electrical equipment. It gathers data from sensors throughout the facility—measuring temperature, occupancy, light levels, and more—and uses that data to make intelligent decisions. For example, if it detects that a meeting room is empty, it can automatically dim the lights and adjust the thermostat, saving energy. If a fire alarm is triggered, it can instantly unlock emergency exits and shut down ventilation fans to prevent smoke from spreading. By providing centralized control and automation, a BMS not only creates significant energy and operational savings but also ensures a safer, more comfortable environment for occupants. It\'s the unseen intelligence that makes modern buildings work.</p>
    `
  },
  {
    slug: 'from-idea-to-app-the-journey-of-custom-software-development',
    title: 'From Idea to App: The Journey of Custom Software Development',
    author: 'Vikram Singh',
    authorImage: 'https://picsum.photos/seed/vikram/100/100',
    date: '2024-05-05',
    excerpt: 'Off-the-shelf software can only take you so far. When your business processes are unique, a custom-built application is the key to unlocking true efficiency. This post outlines the typical lifecycle of a custom software project, from initial discovery and design to deployment and beyond.',
    imageUrl: 'https://picsum.photos/seed/blog6/800/450',
    imageHint: 'ui design wireframe',
    tags: ['Software Development', 'Agile', 'Cloud'],
    content: `
      <p>Every business has unique challenges and workflows that generic, off-the-shelf software can\'t effectively address. This is where custom software development comes in—creating a solution perfectly tailored to your specific needs. But how does an idea become a fully functional application? The journey typically follows a structured, agile process to ensure the final product meets and exceeds expectations.</p>
      <p>It begins with a Discovery phase, where we immerse ourselves in your business to understand your goals, challenges, and user needs. This leads to the Design phase, where we create wireframes and prototypes to map out the user experience and interface. Once the blueprint is approved, we move into Development, writing the code and building the application in iterative cycles or "sprints." Each sprint ends with a functional piece of the application that you can test and provide feedback on. This agile approach ensures the project stays on track and aligned with your vision. After rigorous testing and quality assurance, the application is deployed. But the journey doesn\'t end there; we provide ongoing support and maintenance to ensure your software continues to evolve with your business.</p>
    `
  }
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

    

    




    

    