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
  role: "Front-End Developer",
  tagline: "I build scalable, real-world web applications.",
  typingTexts: ["Front-End Developer", "React Specialist", "JavaScript Developer", "UI/UX Enthusiast"],
  stats: [
    { label: "Web Projects", value: "3+" },
    { label: "Hardware Projects", value: "3+" },
    { label: "Internship Exp", value: "Yes" }
  ]
};

export const PROJECTS: Project[] = [
  // SOFTWARE PROJECTS
  {
    id: '1',
    title: 'Fitencyclo',
    description: 'A comprehensive fitness tracking platform featuring workout guides, diet plans, and progress monitoring.',
    techStack: ['React', 'CSS', 'JavaScript'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/FitEncyclo/',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'CampusCoreX',
    description: 'A campus management solution designed to streamline student data, attendance, and academic resources.',
    techStack: ['React', 'Tailwind', 'Vite'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/CampusCoreX/',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'IndiKart',
    description: 'A modern e-commerce frontend interface providing a seamless shopping experience with product listings and cart functionality.',
    techStack: ['React', 'Redux', 'Bootstrap'],
    category: 'Software',
    githubLink: 'https://github.com/nithish654',
    liveLink: 'https://nithish654.github.io/IndiKart/',
    image: 'https://picsum.photos/600/400?random=3'
  },
  // HARDWARE PROJECTS
  {
    id: '4',
    title: 'LoRa-Based Communication',
    description: 'Developed a long-range communication system for agricultural monitoring using LoRa technology to transmit sensor data efficiently.',
    techStack: ['LoRa', 'IoT', 'Sensors'],
    category: 'Hardware',
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: '5',
    title: 'SOS Helmet',
    description: 'A smart safety helmet integrated with Arduino and GSM modules to detect accidents and send automated SOS alerts with location data.',
    techStack: ['Arduino', 'GSM Module', 'Embedded C'],
    category: 'Hardware',
    image: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: '6',
    title: 'SPR-Based Sensor',
    description: 'Designed a D-Shaped Dual-Core Refractive Index sensor using Surface Plasmon Resonance for high-sensitivity detection applications.',
    techStack: ['Optical Sensors', 'Simulation', 'Research'],
    category: 'Hardware',
    image: 'https://picsum.photos/600/400?random=6'
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
    degree: 'Electronics and Communication Engineering – CGPA: 7.4',
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
    id: '1',
    title: 'Java Developer Certificate',
    issuer: 'NIIT',
    date: '2023',
  },
  {
    id: '2',
    title: 'GraphQL Developer Certificate',
    issuer: 'Apollo GraphQL',
    date: '2023',
  },
  {
    id: '3',
    title: 'API Designer Certificate',
    issuer: 'API Academy',
    date: '2023',
  },
  {
    id: '4',
    title: 'API Security Architect Certificate',
    issuer: 'API Academy',
    date: '2024',
  },
  {
    id: '5',
    title: 'Web Development Certificate',
    issuer: 'Infosys Springboard',
    date: '2024',
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 90, category: 'Language' },
  { name: 'Java', level: 85, category: 'Language' },
  
  // Backend / BaaS
  { name: 'Supabase', level: 80, category: 'Backend/BaaS' },
  { name: 'Appwrite', level: 75, category: 'Backend/BaaS' },
  { name: 'Firebase', level: 80, category: 'Backend/BaaS' },
  
  // Development Tools
  { name: 'VS Code', level: 95, category: 'Development Tools' },
  { name: 'IntelliJ IDEA', level: 85, category: 'Development Tools' },
  { name: 'Android Studio', level: 70, category: 'Development Tools' },
];

export const MARQUEE_ITEMS = [
  "JavaScript", "React", "Java", "Tailwind", "Supabase", "Firebase", "Appwrite", "Git", "VS Code", "API Design"
];