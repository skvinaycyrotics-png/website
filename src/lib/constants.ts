
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
    author: 'Meera Iyer',
    authorImage: 'https://picsum.photos/seed/meera/100/100',
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
      <p><em>By Cyrotics Technologies (OPC) Pvt. Ltd.</em></p>
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
      <h4>1. Remote & Hybrid Workforce</h4>
      <p>Employees now access corporate applications from home networks, airports, cafés, and mobile devices. This dramatically expands the attack surface.</p>
      <h4>2. Cloud Adoption</h4>
      <p>Cloud environments eliminate the concept of a fixed perimeter. Traditional firewalls alone can no longer secure modern environments.</p>
      <h4>3. Increasing Cyberattacks</h4>
      <p>Ransomware, insider threats, phishing, and advanced persistent threats (APTs) now target every layer of an organization.</p>
      <h4>4. Device Explosion (IoT, BYOD, OT)</h4>
      <p>Organizations manage thousands of diverse and unmanaged devices. Each device becomes a potential entry point for attackers.</p>
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

    

    




    

    
