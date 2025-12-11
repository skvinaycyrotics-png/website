
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
  Globe,
  GraduationCap,
  PackageCheck,
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
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
  { href: '/careers', label: 'Careers' },
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
    longDescription: 'We provided a full turnkey solution for the Bhagwan Parshuram Government Medical College in Haryana. The project encompassed the entire IT and Extra-Low Voltage (ELV) infrastructure. This included smart lecture hall solutions, a high-speed fiber backbone and enterprise network, complete campus networking, data center cabling & server setup, Fire Alarm & Public Address System solutions, Access Control System, and comprehensive CCTV, Wi-Fi & Access Control coverage across the campus.',
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
    longDescription: 'This project involves the delivery of a comprehensive technology infrastructure for a new medical college. The scope includes Network & Security Infrastructure, CCTV & Video Surveillance System, Data Center Setup, IT & ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone & Enterprise Network, Complete Campus Networking, Data Center Cabling & Server Setup, Fire Alarm & Public Address System Solutions, Access Control System, CCTV, Wi-Fi & Access Control.',
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
    results: "The project delivers a state-of-the-art smart medical campus, designed to ensure seamless connectivity, high system availability, and secure access to digital resources. By integrating advanced IT and ELV infrastructure, the institution now benefits from:\n\n- Uninterrupted network performance for academic, administrative, and clinical operations\n- Secure and centralized data accessibility for staff, students, and medical professionals\n- Enhanced digital learning experiences through reliable communication systems\n- Improved operational efficiency driven by automation and modern network design\n\nThis transformation empowers the medical campus to operate as a modern, technology-enabled institution capable of supporting future growth and innovation.",
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
    longDescription: 'For AIIMS Rajkot, we are delivering a comprehensive, turnkey technology solution for the entire campus and hospital. The scope of work includes: Network & Security Infrastructure, CCTV & Video Surveillance System, Data Center Setup, IT & ELV Infrastructure, Smart Lecture Hall Solutions, Fiber Backbone & Enterprise Network, Smart Hospital IT Infrastructure, Campus Wi-Fi & Secure Network Backbone, CCTV Surveillance & Data Center Deployment, Complete Campus Networking, Data Center Cabling & Server Setup, Fire Alarm System & Public Address System Solutions, and an integrated Access Control System.',
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
    title: 'Why Data Center Migration Is Critical for Modern Enterprises – Challenges, Strategy & Best Practices',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-07-20',
    excerpt: 'In the rapidly evolving digital landscape, organizations are under constant pressure to modernize their IT infrastructure. Data Center Migration has emerged as a strategic necessity for businesses aiming to improve performance, security, and scalability.',
    imageUrl: 'https://picsum.photos/seed/blog1/800/450',
    imageHint: 'data center aisle',
    tags: ['Data Center', 'Infrastructure', 'Migration'],
    content: `
      <p>In the rapidly evolving digital landscape, organizations are under constant pressure to modernize their IT infrastructure. As applications grow, security threats intensify, and compliance standards become more stringent, enterprises can no longer rely on outdated on-premises infrastructure. Data Center Migration has emerged as a strategic necessity for businesses aiming to improve performance, security, and scalability.</p>
      <p>Cyrotics Technologies, having successfully delivered multiple large-scale national projects—including Multiple All India Govt Medical Hospital & college Projects, government institutions, Data Center Projects , and major airport and university infrastructures—brings deep expertise in executing complex migration projects with precision.</p>
      <p>This blog explores why data center migration is important, the risks involved, and the best practices for a smooth and secure transition.</p>
      <h3>⭐ What Is Data Center Migration?</h3>
      <p>Data center migration refers to the process of transferring digital assets—applications, databases, workloads, storage, network components, and entire servers—from one environment to another. This could be:</p>
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
      <h3>⭐ Best Practices for a Successful Data Center Migration</h3>
      <ul>
        <li>✔ Create a detailed inventory of every application, cable, switch, and database.</li>
        <li>✔ Perform dependency mapping to identify what connects to what.</li>
        <li>✔ Implement parallel systems, keeping old and new running simultaneously.</li>
        <li>✔ Schedule migrations during low-traffic hours to minimize business impact.</li>
        <li>✔ Use encryption everywhere to protect in-transit and at-rest data.</li>
        <li>✔ Always take multiple backups.</li>
      </ul>
      <h3>⭐ Conclusion</h3>
      <p>Data center migration is a strategic requirement for enterprises aiming to stay secure, agile, and competitive. With a structured approach, organizations can achieve higher performance, stronger security, lower costs, and greater scalability. Cyrotics Technologies has proven expertise in delivering high-end IT transformation projects nationwide.</p>
    `
  },
  {
    slug: 'zero-trust-architecture-a-paradigm-shift-in-cybersecurity',
    title: 'Zero Trust Architecture: A Paradigm Shift in Modern Cybersecurity',
    author: 'Cyrotics Technologies (OPC) Pvt. Ltd.',
    authorImage: 'https://picsum.photos/seed/logo/100/100',
    date: '2024-07-18',
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
    date: '2024-06-25',
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
    date: '2024-06-10',
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
    date: '2024-05-22',
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
        <li>Bihar Animal Science University Patna</li>
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
    date: '2024-05-05',
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
      <p>If you’re planning to develop a custom app or software platform, our team is ready to help you bring your vision to life.</p>
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

    

    




    

    



    





