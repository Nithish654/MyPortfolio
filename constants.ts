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