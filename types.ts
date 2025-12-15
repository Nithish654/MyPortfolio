export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Software' | 'Hardware';
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  techStack: string[];
  type: 'Internship' | 'Full Time';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string[]; // Made optional as school entries might not need detailed description lists
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string; // Made optional
  link?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: 'Language' | 'Backend/BaaS' | 'Development Tools';
}

export interface NavItem {
  label: string;
  path: string;
}