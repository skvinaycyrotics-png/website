import type {
  NavLink,
  Service,
  Project,
  Testimonial,
  TeamMember,
  JobOpening,
  BlogPost,
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
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    slug: 'infrastructure-solutions',
    title: 'Infrastructure Solutions',
    shortDescription:
      'Robust data center, network, and IT infrastructure management.',
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
      'Integrated electronic security, surveillance, and fire safety systems.',
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
      'Advanced AV, conferencing, and digital signage solutions.',
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
    shortDescription: 'IoT and BMS for intelligent and efficient buildings.',
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
    shortDescription: 'Custom enterprise software, cloud, and mobile apps.',
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
    shortDescription: 'Solar power and energy storage solutions for enterprises.',
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
    id: 'proj-1',
    title: 'Enterprise Network Overhaul for a Financial Giant',
    client: 'Global Finance Corp',
    shortDescription:
      'Complete network transformation for 50+ branches, enhancing speed and security.',
    longDescription:
      'We executed a full-scale network migration for Global Finance Corp, replacing legacy systems with a modern SD-WAN architecture. The project involved zero-downtime migration, enhanced security protocols, and centralized management, resulting in a 40% reduction in operational costs.',
    imageUrl: 'https://picsum.photos/seed/proj1/600/400',
    imageHint: 'network servers',
    tags: ['Network Transformation', 'SD-WAN', 'Cybersecurity', 'Cisco'],
    timeline: '6 Months',
    results:
      '40% reduction in network operational costs and 3x increase in bandwidth.',
  },
  {
    id: 'proj-2',
    title: 'Integrated Security for a Tech Park',
    client: 'Innovate Tech Park',
    shortDescription:
      'Deployed a unified security platform including 1000+ cameras and biometric access.',
    longDescription:
      'For Innovate Tech Park, we designed and deployed a state-of-the-art integrated security system. This included IP CCTV, facial recognition access control, and an automated visitor management system, all controlled from a central command center. The solution improved security response times by 70%.',
    imageUrl: 'https://picsum.photos/seed/proj2/600/400',
    imageHint: 'modern office lobby',
    tags: [
      'Security & Surveillance',
      'Access Control',
      'CCTV',
      'Axis Communications',
    ],
    timeline: '9 Months',
    results: '70% faster security incident response time.',
  },
  {
    id: 'proj-3',
    title: 'Smart Building Automation for a Corporate HQ',
    client: 'Future Group',
    shortDescription:
      'Implemented a comprehensive BMS, reducing energy consumption by 25%.',
    longDescription:
      "Future Group's new headquarters was outfitted with our complete smart building solution. We integrated HVAC, lighting, and occupancy sensors into a unified Building Management System (BMS). The system uses machine learning to optimize energy usage in real-time.",
    imageUrl: 'https://picsum.photos/seed/proj3/600/400',
    imageHint: 'futuristic building',
    tags: ['Smart Building', 'BMS', 'IoT', 'Energy Management'],
    timeline: '12 Months',
    results: '25% reduction in annual energy consumption.',
  },
  {
    id: 'proj-4',
    title: 'Custom ERP Software for Manufacturing',
    client: 'Precision Parts Inc.',
    shortDescription:
      'Developed a bespoke ERP to digitize their entire production workflow.',
    longDescription:
      'We built a custom enterprise resource planning (ERP) system for Precision Parts Inc. that replaced their manual, paper-based processes. The new system manages inventory, production scheduling, quality control, and shipping, providing end-to-end visibility and improving production efficiency by 30%.',
    imageUrl: 'https://picsum.photos/seed/proj4/600/400',
    imageHint: 'factory automation',
    tags: ['Software Development', 'ERP', 'Cloud Solutions', 'React'],
    timeline: '8 Months',
    results: '30% improvement in production efficiency.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'CYROTICS TECHNOLOGIES transformed our IT infrastructure. Their professionalism and technical expertise are second to none. The project was delivered on time and exceeded our expectations.',
    name: 'Rajesh Kumar',
    title: 'CIO',
    company: 'Global Finance Corp',
    imageUrl: 'https://picsum.photos/seed/rajesh/100/100',
  },
  {
    quote:
      'The security system installed by CyroSecure is world-class. Their integrated approach gave us a level of control and visibility we never thought possible. Their team is knowledgeable and responsive.',
    name: 'Priya Sharma',
    title: 'Head of Operations',
    company: 'Innovate Tech Park',
    imageUrl: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    quote:
      'Our new smart building is a marvel of efficiency, thanks to the CyroSecure team. They are true experts in IoT and building automation. The energy savings have been substantial.',
    name: 'Anil Mehta',
    title: 'CEO',
    company: 'Future Group',
    imageUrl: 'https://picsum.photos/seed/anil/100/100',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Arjun Desai',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/seed/arjun/400/400',
    bio: 'With over 20 years in the technology sector, Arjun drives the company’s vision for innovation and excellence. His leadership is pivotal in establishing CyroSecure as a leader in technology solutions.',
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
    slug: 'the-future-of-enterprise-security-is-integrated',
    title: 'The Future of Enterprise Security is Integrated',
    author: 'Meera Iyer',
    authorImage: 'https://picsum.photos/seed/meera/100/100',
    date: '2024-07-15',
    excerpt: 'Moving beyond siloed security systems is no longer an option, it\'s a necessity. Discover how integrated platforms are revolutionizing corporate safety and operational efficiency.',
    imageUrl: 'https://picsum.photos/seed/blog1/800/450',
    imageHint: 'security command center',
    tags: ['Security', 'Integration', 'Technology Trends'],
    content: `
      <p>In today's complex threat landscape, relying on disparate, non-communicating security systems is a recipe for disaster. A fire alarm that doesn't automatically unlock emergency exits, or a CCTV system that can't share data with access control, creates critical vulnerabilities. The future, and indeed the present, of effective enterprise security lies in integration.</p>
      <h3>What is Integrated Security?</h3>
      <p>Integrated security means unifying various security components—such as video surveillance (CCTV), access control, intrusion detection, and fire safety systems—into a single, cohesive platform. This creates a "system of systems" where data is shared, actions are automated, and operators have a holistic view of the entire premises from a single pane of glass.</p>
      <blockquote>"An integrated system turns reactive security measures into a proactive, intelligent defense mechanism."</blockquote>
      <h3>Key Benefits of Integration</h3>
      <ul>
        <li><strong>Improved Situational Awareness:</strong> Operators can see an access-denied event on a map, pull up the nearest camera feed, and communicate via an integrated intercom instantly.</li>
        <li><strong>Automated, Faster Responses:</strong> A fire alarm can automatically trigger all doors to unlock, broadcast evacuation messages, and send a building layout to first responders.</li>
        <li><strong>Enhanced Investigations:</strong> Security teams can search for an individual across all camera feeds based on an access card swipe, streamlining forensic analysis from hours to minutes.</li>
        <li><strong>Reduced Operational Costs:</strong> A single platform reduces training requirements, streamlines maintenance, and provides data-driven insights for optimizing guard patrols and resource allocation.</li>
      </ul>
      <p>At CYROTICS, we specialize in designing and deploying these unified security platforms. We leverage open-architecture systems to ensure that your security infrastructure is not only robust today but also scalable and future-proof for the challenges of tomorrow.</p>
    `
  },
  {
    slug: 'demystifying-sd-wan-for-the-modern-enterprise',
    title: 'Demystifying SD-WAN for the Modern Enterprise',
    author: 'Arjun Desai',
    authorImage: 'https://picsum.photos/seed/arjun/100/100',
    date: '2024-06-28',
    excerpt: 'Software-Defined Wide Area Networking (SD-WAN) is a transformative technology, but what does it actually mean for your business? We break down the essentials.',
    imageUrl: 'https://picsum.photos/seed/blog2/800/450',
    imageHint: 'cloud network diagram',
    tags: ['Networking', 'SD-WAN', 'Infrastructure'],
    content: `
      <p>The term SD-WAN is everywhere, but what does it really mean for your business? In essence, Software-Defined Wide Area Networking (SD-WAN) is a virtualized network architecture that allows enterprises to leverage any combination of transport services – including MPLS, LTE, and broadband internet services – to securely connect users to applications.</p>
      <h3>Traditional WAN vs. SD-WAN</h3>
      <p>Traditional WANs were built for an era where applications resided in the corporate data center. Today, with the rise of cloud applications (SaaS & IaaS), this model creates a traffic "trombone" effect, backhauling cloud-destined traffic through the data center, which adds latency and degrades application performance.</p>
      <p>SD-WAN intelligently routes traffic to the cloud directly over the most efficient path, without sacrificing security. It simplifies management through a centralized controller, providing visibility and control over the entire network.</p>
      <h3>Core Advantages of SD-WAN</h3>
      <ul>
        <li><strong>Cost Savings:</strong> Reduce reliance on expensive MPLS circuits by augmenting with more affordable broadband and LTE.</li>
        <li><strong>Improved Performance:</strong> Dynamic path selection ensures applications use the best-performing link, improving user experience for services like Office 365 or Salesforce.</li>
        <li><strong>Simplified Management:</strong> Zero-touch provisioning and a centralized control plane drastically reduce the time and complexity of deploying and managing branch offices.</li>
        <li><strong>Enhanced Security:</strong> Integrated security features like next-gen firewalls, secure web gateways, and sandboxing are built-in, not bolted on.</li>
      </ul>
      <p>Migrating to SD-WAN is a strategic move that aligns your network with the realities of a cloud-first world. It's not just an IT upgrade; it's a business enabler that fosters agility and innovation. Our network transformation services can help you design and implement an SD-WAN strategy that is right for your organization.</p>
    `
  },
  {
    slug: 'roi-of-smart-building-technology',
    title: 'Calculating the ROI of Smart Building Technology',
    author: 'Vikram Singh',
    authorImage: 'https://picsum.photos/seed/vikram/100/100',
    date: '2024-05-19',
    excerpt: 'Investing in Building Management Systems (BMS) and IoT is not just about being modern; it\'s about tangible financial returns. Let\'s explore the ROI.',
    imageUrl: 'https://picsum.photos/seed/blog3/800/450',
    imageHint: 'energy saving lightbulb',
    tags: ['Smart Building', 'ROI', 'IoT'],
    content: `
      <p>When considering an investment in smart building technology, the conversation inevitably turns to Return on Investment (ROI). While the upfront cost can seem significant, the long-term financial benefits are compelling and multifaceted. It's not just about saving on the electricity bill; it's about fundamentally enhancing the value and efficiency of the asset.</p>
      <h3>Direct Cost Savings</h3>
      <p>The most immediate returns come from energy efficiency. An intelligent Building Management System (BMS) can:</p>
      <ul>
        <li>Optimize HVAC systems based on occupancy, time of day, and weather forecasts, reducing energy consumption by up to 30%.</li>
        <li>Implement smart lighting schedules and use daylight harvesting to minimize electricity usage.</li>
        <li>Detect water leaks early, preventing costly damage and water waste.</li>
      </ul>
      <h3>Operational Efficiency</h3>
      <p>A smart building streamlines facility management. Predictive maintenance, enabled by IoT sensors on equipment like elevators and HVAC units, allows for repairs before a critical failure occurs. This reduces downtime, lowers repair costs, and extends equipment lifespan.</p>
      <h3>Increased Asset Value & Occupant Well-being</h3>
      <blockquote>"A smart building is a more desirable building."</blockquote>
      <p>Properties with modern, efficient systems command higher rental and resale values. Furthermore, the ability to control temperature and lighting improves occupant comfort and productivity, making the space more attractive to premium tenants. Enhanced indoor air quality, monitored by IoT sensors, also contributes to a healthier and more productive workforce.</p>
      <p>Calculating the precise ROI involves analyzing your current operational costs against the potential savings and value-add from a new system. Our team can help you build a detailed business case for your specific property. Try our <a href="/roi-calculator">online ROI calculator</a> for a preliminary estimate.</p>
    `
  }
];
