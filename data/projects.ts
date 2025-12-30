export interface Project {
  title: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github: string;
  githubFrontend?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Blog Post Application",
    description: "A robust backend system for a blog platform built with modern Java practices. Features a complete RESTful API, secure authentication, and a clean layered architecture.",
    bullets: [
      "Developed a RESTful blog backend using **Java and Spring Boot**, implementing full CRUD APIs and supporting **20+ endpoints** following REST conventions.",
      "Implemented **JWT authentication and RBAC** with Spring Security, securing **100% of write operations** and enforcing role-based access for users and admins.",
      "Designed a **layered architecture (Controllers, Services, Repositories, DTOs)**, reducing controller complexity and enabling clear separation of concerns across **5+ domain modules**.",
      "Integrated **PostgreSQL with Spring Data JPA**, persisting relational data with entity mapping and handling **thousands of test records** during local development.",
      "Containerized the application using **Docker and Docker Compose**, enabling **one-command local setup** for the API and database and reducing environment setup time from ~30 minutes to under 2 minutes."
    ],
    tech: [
      "Java", "Spring Boot", "Spring Security", "REST APIs", "JWT",
      "PostgreSQL", "JPA / Hibernate",
      "Layered Architecture", "DTO Pattern",
      "Docker", "RBAC"
    ],
    github: "https://github.com/progFilthi/FilthiBlog",
    githubFrontend: "https://github.com/progFilthi/filthiblogClient",
    live: "https://filthiblog-client.vercel.app/",
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
