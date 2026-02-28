import { Project, Experience, Education, Certificate, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Internship', path: '/internship' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contacts', path: '/contact' },
];

export const HERO_DATA = {
  name: "Nithish V J",
  role: "Full Stack Developer",
  tagline: "I build scalable, real-world web applications.",
  typingTexts: ["Full Stack Software Developer", "Front-End Developer", "React Specialist", "JavaScript Developer", "UI/UX Enthusiast"],
  stats: [
    { label: "Web Projects", value: "3+" },
    { label: "Hardware Projects", value: "3+" },
    { label: "Internship Exp", value: "Yes" }
  ]
};

export const PROJECTS: Project[] = [
  // SOFTWARE PROJECTS
  {
    id: 'bugnexus-ai',
    title: 'BugNexus AI',
    description: 'Built a Full-Stack AI-powered automated QA testing web application that analyzes websites and generates instant functional test reports using intelligent agents and dynamic URL-based automation.',
    techStack: ['React', 'Node.js', 'Puppeteer', 'AI-based automation logic'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/BugNexus/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '1',
    title: 'Fitencyclo',
    description: 'A comprehensive fitness tracking platform featuring workout guides, diet plans, and progress monitoring.',
    techStack: ['React', 'CSS', 'JavaScript'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/FitEncyclo/',
    image: 'https://t4.ftcdn.net/jpg/01/14/80/25/360_F_114802596_jo16wrf2ByFzfHQOMmU2Edgc0IlYhSuH.jpg'
  },
  {
    id: '2',
    title: 'CampusCoreX',
    description: 'A campus management solution designed to streamline student data, attendance, and academic resources.',
    techStack: ['React', 'Tailwind', 'Vite'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/CampusCoreX/',
    image: 'https://media.istockphoto.com/id/1159030397/vector/vector-of-a-child-a-boy-looking-at-the-stairs-leading-to-the-door-of-modern-digital-world.jpg?s=612x612&w=0&k=20&c=cPMvHwuxLy3rWZaHzhiXY_TFZXkl0KGp-wHGFA8vak4='
  },
  {
    id: '3',
    title: 'IndiKart',
    description: 'A modern e-commerce frontend interface providing a seamless shopping experience with product listings and cart functionality.',
    techStack: ['React', 'Redux', 'Bootstrap'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/IndiKart/',
    image: 'https://media.istockphoto.com/id/1471521270/photo/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping-increasing.jpg?s=612x612&w=0&k=20&c=cxRKLCrn4mNrZlnsc7m5ANBB0pRfB3YaBsfHkuj8HAg='
  },
  // HARDWARE PROJECTS
  {
    id: '4',
    title: 'LoRa-Based Communication',
    description: 'Developed a long-range communication system for agricultural monitoring using LoRa technology to transmit sensor data efficiently.',
    techStack: ['LoRa', 'IoT', 'Sensors'],
    category: 'Hardware',
    image: 'https://www.vhv.rs/dpng/d/544-5447876_riot-weblogos-03-lora-logo-hd-png-download.png'
  },
  {
    id: '5',
    title: 'SOS Helmet',
    description: 'A smart safety helmet integrated with Arduino and GSM modules to detect accidents and send automated SOS alerts with location data.',
    techStack: ['Arduino', 'GSM Module', 'Embedded C'],
    category: 'Hardware',
    image: 'https://justtotaltech.com/wp-content/uploads/2021/03/images-42.jpeg'
  },
  {
    id: '6',
    title: 'SPR-Based Sensor',
    description: 'Designed a D-Shaped Dual-Core Refractive Index sensor using Surface Plasmon Resonance for high-sensitivity detection applications.',
    techStack: ['Optical Sensors', 'Simulation', 'Research'],
    category: 'Hardware',
    image: 'https://media.istockphoto.com/id/1257429592/photo/blood-cells.jpg?s=612x612&w=0&k=20&c=QsR4mElj5XVhiHWfq_8Kgn3PKP7WDQ7_7N2MWAl1RGs='
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Software Intern',
    company: 'Retech Pvt Limited',
    location: 'West Tambaram, Chennai',
    duration: '15 Days',
    type: 'Internship',
    description: [
      'Assisted in frontend and application-level development tasks.',
      'Gained exposure to real-world project workflows.',
      'Improved understanding of software development practices.'
    ],
    techStack: ['Frontend', 'Application Development']
  },
  {
    id: '2',
    role: 'App Developer',
    company: 'NATIONAL SMALL INDUSTRIES CORPORATION (NSIC)',
    duration: 'June 2024 – July 2024 (1 Month)',
    type: 'Internship',
    description: [
      'Gained hands-on experience in software development and database management.',
      'Worked with Java, SQL, and front-end technologies to develop and enhance applications.',
      'Improved debugging and problem-solving skills while ensuring a seamless user experience.'
    ],
    techStack: ['Java', 'SQL', 'Frontend Technologies']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: "St. Joseph's Institute of Technology",
    year: '2021 – 2025',
    degree: 'Electronics and Communication Engineering – CGPA: 7.6',
    description: ['Focus on embedded systems and software engineering principles.']
  },
  {
    id: '2',
    institution: 'St. Joseph’s Hr. Sec. School, Chengalpattu',
    year: '2020 – 2021',
    degree: 'HSC – 81%',
    description: ['specialized in Mathematics and Computer Science.']
  },
  {
    id: '3',
    institution: 'St. Joseph’s Hr. Sec. School, Chengalpattu',
    year: '2017 – 2018',
    degree: 'SSLC – 77%',
    description: ['Secondary School Leaving Certificate.']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'ibm-fullstack-prof',
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'Coursera | IBM',
    date: '2026',
    link: 'https://coursera.org/verify/professional-cert/MQ8P5F0K0TTT'
  },
  {
    id: 'azure-ai-agent',
    title: 'AI Agent Fundamentals with Azure AI Foundry',
    issuer: 'Microsoft',
    date: '2026',
    link: 'https://coursera.org/verify/63WB0DTJKAUQ'
  },
  {
    id: 'java-dev-niit',
    title: 'Java Developer Certificate',
    issuer: 'NIIT',
    date: '2023',
  },
  {
    id: 'graphql-apollo',
    title: 'GraphQL Developer Certificate',
    issuer: 'Apollo GraphQL',
    date: '2024',
  },
  {
    id: 'ibm-career-guide',
    title: 'Software Developer Career Guide & Interview Preparation',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/HR0MXS7WXH2L'
  },
  {
    id: 'ibm-gen-ai',
    title: 'Generative AI – Elevate Your Software Development Career',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/NLV98D4AIQEI'
  },
  {
    id: 'ibm-assessment',
    title: 'Full Stack Software Developer Assessment',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/E9G0C85EODJF'
  },
  {
    id: 'ibm-capstone',
    title: 'Full Stack Application Development Capstone Project',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/O3WBNJ670S0B'
  },
  {
    id: 'ibm-microservices',
    title: 'Application Development using Microservices and Serverless',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/GPQQBJMQK1JG'
  },
  {
    id: 'ibm-containers',
    title: 'Introduction to Containers (Docker, Kubernetes & OpenShift)',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/XAAAE77L2141'
  },
  {
    id: 'ibm-django',
    title: 'Django Application Development with SQL and Databases',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/IA9E5MMR7O8S'
  },
  {
    id: 'ibm-ai-flask',
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/W68H95MUC74R'
  },
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/3KNK25J2OCO6'
  },
  {
    id: 'ibm-node-backend',
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/A5R8P1QAJLZV'
  },
  {
    id: 'ibm-react-frontend',
    title: 'Developing Front-End Apps with React',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/6GKGW052QLD1'
  },
  {
    id: 'ibm-git-github',
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/3TL8XHGMD89E'
  },
  {
    id: 'ibm-html-css-js',
    title: 'Introduction to HTML, CSS & JavaScript',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/YD9BOD93E191'
  },
  {
    id: 'ibm-cloud-intro',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/1S9OCYMGBFR2'
  },
  {
    id: 'ibm-se-intro',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM | Coursera',
    date: '2026',
    link: 'https://coursera.org/verify/MMBS7EUTG9ER'
  },
  {
    id: 'api-security-architect',
    title: 'API Security Architect Certificate',
    issuer: 'API Academy',
    date: '2024',
  },
  {
    id: 'api-designer',
    title: 'API Designer Certificate',
    issuer: 'API Academy',
    date: '2025',
  },
  {
    id: 'web-dev-infosys',
    title: 'Web Development Certificate',
    issuer: 'Infosys Springboard',
    date: '2025',
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'TypeScript', level: 85, category: 'Language' },
  { name: 'JavaScript', level: 90, category: 'Language' },
  { name: 'Python', level: 80, category: 'Language' },
  { name: 'Java', level: 85, category: 'Language' },
  
  // Backend / BaaS
  { name: 'Django', level: 75, category: 'Backend/BaaS' },
  { name: 'Docker', level: 70, category: 'Backend/BaaS' },
  { name: 'Supabase', level: 80, category: 'Backend/BaaS' },
  { name: 'Appwrite', level: 75, category: 'Backend/BaaS' },
  { name: 'Firebase', level: 80, category: 'Backend/BaaS' },
  
  // Development Tools
  { name: 'VS Code', level: 95, category: 'Development Tools' },
  { name: 'IntelliJ IDEA', level: 85, category: 'Development Tools' },
  { name: 'Android Studio', level: 70, category: 'Development Tools' },
];

export const MARQUEE_ITEMS = [
  "JavaScript", "React", "Java", "Tailwind", "Supabase", "Firebase", "Appwrite", "Git", "VS Code", "API Design", "Django", "Docker", "TypeScript", "Python"
];
