export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Blog Platform API",
    description: "RESTful API built with Spring Boot featuring JWT authentication, role-based access control, and PostgreSQL integration. Deployed on AWS with S3 for media storage.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "AWS S3", "JWT"],
    github: "https://github.com/progFilthi",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Full-stack admin dashboard for managing products, orders, and analytics. Built with the MERN stack featuring real-time updates and responsive design.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/progFilthi",
  },
  {
    title: "Developer Portfolio",
    description: "Modern, minimal portfolio website built with Next.js 16 and Tailwind CSS. Features smooth animations and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/progFilthi",
  },
  {
    title: "Task Management API",
    description: "Microservices-based task management system with Spring Boot. Implements event-driven architecture using RabbitMQ for async processing.",
    tech: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Redis"],
    github: "https://github.com/progFilthi",
  },
];

export interface Skill {
  name: string;
  category: "backend" | "fullstack" | "cloud" | "tools";
}

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Microservices", category: "backend" },
  
  // Full Stack
  { name: "React", category: "fullstack" },
  { name: "Next.js", category: "fullstack" },
  { name: "Node.js", category: "fullstack" },
  { name: "TypeScript", category: "fullstack" },
  { name: "MongoDB", category: "fullstack" },
  
  // Cloud & DevOps
  { name: "AWS S3", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  
  // Tools
  { name: "Git", category: "tools" },
  { name: "Linux", category: "tools" },
];

export const socialLinks = {
  github: "https://github.com/progFilthi",
  linkedin: "https://www.linkedin.com/in/emma09/",
  email: "mailto:emmanuel.f0927@gmail.com",
  youtube: "https://www.youtube.com/@ProgrammerFilthi",
};
