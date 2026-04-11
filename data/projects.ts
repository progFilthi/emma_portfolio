export interface Project {
  title: string;
  tagline: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  githubFrontend?: string;
  live?: string;
  featured?: boolean;
  image?: string;
}

export interface DirtyBucketFeature {
  category: string;
  icon: string;
  items: string[];
}

export const dirtyBucketFeatures: DirtyBucketFeature[] = [
  {
    category: "Payment & Monetization",
    icon: "💳",
    items: [
      "Dodo Payments integration with 3-tier license system (Basic, Premium, Exclusive)",
      "Subscription plans: Starter (free, 10 uploads, 15% commission), Pro ($10/mo · $99/yr, 5% commission), Ultra ($19.99/mo · $199.99/yr, 0% commission)",
      "Dynamic commission calculation engine applied at checkout",
      "Resend for transactional emails on purchases and sales"
    ]
  },
  {
    category: "Media Processing Pipeline",
    icon: "🎧",
    items: [
      "RabbitMQ queue for async beat processing after upload",
      "FFmpeg converts WAV source → Preview clip · Full MP3 · Original WAV",
      "All artifacts stored on AWS S3 with pre-signed URL delivery",
      "Producers and artists receive instant download access after transaction"
    ]
  },
  {
    category: "Auth & Security",
    icon: "🔐",
    items: [
      "Google OAuth2 + JWT-based email/password authentication",
      "RBAC with three roles: Admin, Producer, Artist",
      "Spring Security securing all sensitive endpoints",
      "Role-gated upload limits and commission logic per subscription tier"
    ]
  },
  {
    category: "Infrastructure & DevOps",
    icon: "☁️",
    items: [
      "Java Spring Boot REST API with clean layered architecture deployed to Railway",
      "Dedicated headless worker service on Railway — isolated CPU lane for FFmpeg beat processing",
      "Docker + Docker Compose for reproducible local and production environments",
      "RabbitMQ as the central message broker decoupling upload from processing"
    ]
  },
  {
    category: "Hosting & Managed Services",
    icon: "🚂",
    items: [
      "Railway — hosts the Spring Boot API server with zero-config deployments",
      "Railway — second headless service dedicated to the FFmpeg worker (CPU-intensive, separated by design)",
      "Railway Managed PostgreSQL — production database with auto-backups and connection pooling",
      "AWS S3 for beat file blob storage with pre-signed URL delivery to artists and producers"
    ]
  },
  {
    category: "Frontend Architecture",
    icon: "⚡",
    items: [
      "Next.js 14 App Router with TypeScript and TanStack Query",
      "Tailwind CSS + shadcn/ui component library",
      "Server-side data fetching with optimistic updates",
      "Google OAuth2 social login flow on the frontend"
    ]
  }
];

export const dirtyBucketTechStack = [
  // Backend
  { name: "Java", color: "orange" },
  { name: "Spring Boot", color: "green" },
  { name: "Spring Security", color: "green" },
  { name: "JPA / Hibernate", color: "green" },
  { name: "RabbitMQ", color: "orange" },
  { name: "FFmpeg", color: "red" },
  // Auth
  { name: "JWT", color: "teal" },
  { name: "Google OAuth2", color: "teal" },
  { name: "RBAC", color: "teal" },
  // Frontend
  { name: "Next.js", color: "neutral" },
  { name: "TypeScript", color: "blue" },
  { name: "TanStack Query", color: "red" },
  { name: "Tailwind CSS", color: "blue" },
  { name: "shadcn/ui", color: "neutral" },
  // Hosting & Cloud
  { name: "Railway", color: "teal" },
  { name: "Railway Worker", color: "teal" },
  { name: "AWS S3", color: "orange" },
  { name: "Docker", color: "blue" },
  { name: "PostgreSQL", color: "blue" },
  // Services
  { name: "Dodo Payments", color: "teal" },
  { name: "Resend", color: "neutral" },
];

export const dirtyBucketLicenses = [
  {
    name: "Basic",
    price: "Affordable",
    description: "MP3 lease for content creators and demo artists",
    perks: ["MP3 deliverable", "Non-exclusive", "Limited distribution", "Stream-ready"]
  },
  {
    name: "Premium",
    price: "Mid-tier",
    description: "WAV + MP3 for emerging artists ready to release",
    perks: ["WAV + MP3 deliverables", "Non-exclusive", "Wide distribution", "Radio-ready"]
  },
  {
    name: "Exclusive",
    price: "Full rights",
    description: "Full ownership transfer — beat is taken off the market",
    perks: ["All file formats", "Exclusive rights", "Unlimited distribution", "Stems included"]
  }
];

export const dirtyBucketSubscriptions = [
  {
    name: "Starter",
    price: "Free",
    commission: "15%",
    uploads: "10 uploads max",
    color: "neutral",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: "$10/mo",
    yearly: "$99/yr",
    commission: "5%",
    uploads: "Unlimited uploads",
    color: "teal",
    highlight: true,
  },
  {
    name: "Ultra",
    monthly: "$19.99/mo",
    yearly: "$199.99/yr",
    commission: "0%",
    uploads: "Unlimited uploads",
    color: "orange",
    highlight: false,
  }
];

export const projects: Project[] = [
  {
    title: "DirtyBucket",
    tagline: "Beat marketplace SaaS for producers & artists",
    description:
      "A full-stack SaaS platform where music producers sell beats to artists. Features a complete async media processing pipeline, subscription tiers with commission logic, 3-tier licensing, OAuth2 + JWT security, and Dodo Payments integration.",
    bullets: [
      "Architected an **async beat processing pipeline** using **RabbitMQ** — WAV files queued post-upload, then **FFmpeg** converts them into preview clips, full MP3s, and original WAV files, all stored on **AWS S3**.",
      "Implemented a **3-tier subscription model** (Starter/Pro/Ultra) with dynamic commission rates (15% / 5% / 0%) enforced server-side, integrated with **Dodo Payments** for recurring billing.",
      "Built a **3-license system** (Basic · Premium · Exclusive) with per-beat pricing, rights management, and automatic beat removal from marketplace on exclusive purchase.",
      "Secured the platform with **Google OAuth2 + JWT authentication** and **RBAC** across three roles (Admin, Producer, Artist) using Spring Security.",
      "Delivered a **Next.js + TanStack Query** frontend with optimistic updates, a real-time producer dashboard showing earnings, upload stats, and commission breakdowns.",
      "Containerized with **Docker + Docker Compose**; **Resend** handles all transactional emails for purchases and sales receipts.",
    ],
    tech: [
      "Java", "Spring Boot", "Spring Security", "JWT", "Google OAuth2", "RBAC",
      "RabbitMQ", "FFmpeg", "AWS S3", "PostgreSQL", "JPA / Hibernate",
      "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "shadcn/ui",
      "Docker", "Dodo Payments", "Resend"
    ],
    github: "https://github.com/progFilthi",
    live: "https://dirtybucket.shop",
    featured: true,
    image: "/dashboard-preview.png",
  },
  {
    title: "Blog Post Application",
    tagline: "Production-grade Java REST API with full auth",
    description:
      "A robust backend system for a blog platform built with modern Java practices. Complete RESTful API, JWT authentication, RBAC, and a clean layered architecture — containerized with Docker.",
    bullets: [
      "Developed a **RESTful blog backend** using **Java and Spring Boot**, implementing full CRUD APIs with **20+ endpoints** following REST conventions.",
      "Implemented **JWT authentication and RBAC** with Spring Security, securing **100% of write operations** and enforcing role-based access for users and admins.",
      "Designed a **layered architecture** (Controllers → Services → Repositories → DTOs), reducing controller complexity across **5+ domain modules**.",
      "Integrated **PostgreSQL with Spring Data JPA**, persisting relational data with entity mapping.",
      "Containerized with **Docker and Docker Compose** for **one-command local setup** — reduced environment setup from ~30 minutes to under 2 minutes.",
    ],
    tech: [
      "Java", "Spring Boot", "Spring Security", "REST APIs", "JWT",
      "PostgreSQL", "JPA / Hibernate", "DTO Pattern", "Docker", "RBAC"
    ],
    github: "https://github.com/progFilthi/FilthiBlog",
    githubFrontend: "https://github.com/progFilthi/filthiblogClient",
    live: "https://filthiblog-client.vercel.app/",
    featured: false,
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
  { name: "Spring Security", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Microservices", category: "backend" },
  { name: "RabbitMQ", category: "backend" },

  // Full Stack
  { name: "React", category: "fullstack" },
  { name: "Next.js", category: "fullstack" },
  { name: "TypeScript", category: "fullstack" },
  { name: "TanStack Query", category: "fullstack" },
  { name: "Tailwind CSS", category: "fullstack" },

  // Cloud & DevOps
  { name: "AWS S3", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Docker Compose", category: "cloud" },
  { name: "FFmpeg", category: "cloud" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "JWT / OAuth2", category: "tools" },
];

export const socialLinks = {
  github: "https://github.com/progFilthi",
  linkedin: "https://www.linkedin.com/in/emma09/",
  email: "mailto:emmanuel.f0927@gmail.com",
  youtube: "https://www.youtube.com/@ProgrammerFilthi",
};
