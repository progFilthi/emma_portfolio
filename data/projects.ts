export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "dirtybucket",
    title: "DirtyBucket",
    tagline: "Beat selling platform for producers & artists",
    description:
      "A full-stack SaaS platform where music producers sell beats to artists. Built with an async media processing pipeline (RabbitMQ + FFmpeg), 3-tier licensing, subscription plans with dynamic commission rates, and OAuth2 + JWT authentication.",
    tech: ["Java", "Spring Boot", "RabbitMQ", "FFmpeg", "AWS S3", "PostgreSQL", "Next.js", "Docker"],
    github: "https://github.com/progFilthi",
    live: "https://dirtybucket.store",
    year: "2024",
  },
  {
    id: "filthilink",
    title: "FilthiLink",
    tagline: "URL shortener application",
    description:
      "A clean, fast URL shortener built for developers and power users. Generates short links, tracks click analytics, and handles redirects at speed. Simple API-first design with a polished frontend.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
    github: "https://github.com/progFilthi",
    live: "https://app.filthilink.store",
    year: "2025",
  },
];

export const socialLinks = {
  github: "https://github.com/progFilthi",
  linkedin: "https://www.linkedin.com/in/emma09/",
  email: "mailto:emmanuel.f0927@gmail.com",
  youtube: "https://www.youtube.com/@ProgrammerFilthi",
};

// ─── Skills data ──────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Spring Security", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "FFmpeg", category: "backend" },
  // Full Stack
  { name: "Next.js", category: "fullstack" },
  { name: "TypeScript", category: "fullstack" },
  { name: "React", category: "fullstack" },
  { name: "Tailwind CSS", category: "fullstack" },
  { name: "Node.js", category: "fullstack" },
  // Cloud & DevOps
  { name: "Docker", category: "cloud" },
  { name: "AWS (S3, EC2, RDS)", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "CI/CD", category: "cloud" },
  // Tools
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Linux", category: "tools" },
];

// ─── DirtyBucket showcase data ───────────────────────────────────────────────

export interface Feature {
  category: string;
  icon: string;
  items: string[];
}

export interface TechItem {
  name: string;
  color: string;
}

export interface License {
  name: string;
  price: string;
  description: string;
  perks: string[];
}

export interface Subscription {
  name: string;
  color: string;
  highlight?: boolean;
  monthly?: string;
  yearly?: string;
  price?: string;
  commission: string;
  uploads: string;
}

export const dirtyBucketFeatures: Feature[] = [
  {
    category: "Media Pipeline",
    icon: "🎧",
    items: [
      "Async beat processing via RabbitMQ",
      "FFmpeg transcoding to multiple formats",
      "Automatic waveform & thumbnail generation",
      "S3 storage with CDN delivery",
    ],
  },
  {
    category: "Licensing & Rights",
    icon: "📜",
    items: [
      "3-tier license per beat (Basic / Premium / Exclusive)",
      "License terms enforced at download",
      "Per-beat ownership tracking",
    ],
  },
  {
    category: "Subscription System",
    icon: "💳",
    items: [
      "Dynamic commission rates per tier",
      "Monthly & yearly billing cycles",
      "Upload limits enforced per plan",
    ],
  },
  {
    category: "Auth & Security",
    icon: "🔐",
    items: [
      "OAuth2 social login (Google, GitHub)",
      "JWT access + refresh token flow",
      "Role-based access (producer / admin)",
    ],
  },
  {
    category: "Producer Dashboard",
    icon: "📊",
    items: [
      "Real-time sales analytics",
      "Earnings & payout tracking",
      "Beat upload & management UI",
    ],
  },
  {
    category: "Artist Experience",
    icon: "🎤",
    items: [
      "Browse & preview beats by genre / mood",
      "Shopping cart with license selection",
      "Instant download after purchase",
    ],
  },
];

export const dirtyBucketTechStack: TechItem[] = [
  { name: "Java 17", color: "orange" },
  { name: "Spring Boot 3", color: "orange" },
  { name: "Spring Security", color: "orange" },
  { name: "PostgreSQL", color: "blue" },
  { name: "RabbitMQ", color: "teal" },
  { name: "FFmpeg", color: "neutral" },
  { name: "AWS S3", color: "orange" },
  { name: "Docker", color: "blue" },
  { name: "Next.js 14", color: "neutral" },
  { name: "TypeScript", color: "blue" },
  { name: "Tailwind CSS", color: "teal" },
  { name: "Stripe API", color: "purple" },
];

export const dirtyBucketLicenses: License[] = [
  {
    name: "Basic",
    price: "$29.99",
    description: "MP3 lease — up to 5,000 streams.",
    perks: [
      "MP3 file (320kbps)",
      "Up to 5,000 streams",
      "Non-profit use only",
      "Must credit producer",
    ],
  },
  {
    name: "Premium",
    price: "$79.99",
    description: "WAV lease — up to 50,000 streams.",
    perks: [
      "WAV + MP3 files",
      "Up to 50,000 streams",
      "Commercial use allowed",
      "Radio & podcast permitted",
    ],
  },
  {
    name: "Exclusive",
    price: "$299.99",
    description: "Full buyout — unlimited use, beat removed from store.",
    perks: [
      "All file formats (WAV + MP3 + Stems)",
      "Unlimited streams",
      "Full commercial rights",
      "Beat delisted after purchase",
      "Certificate of ownership",
    ],
  },
];

export const dirtyBucketSubscriptions: Subscription[] = [
  {
    name: "Starter",
    color: "neutral",
    monthly: "$9.99/mo",
    yearly: "$7.99/mo",
    commission: "25%",
    uploads: "10 beats/mo",
  },
  {
    name: "Pro",
    color: "teal",
    highlight: true,
    monthly: "$19.99/mo",
    yearly: "$14.99/mo",
    commission: "15%",
    uploads: "Unlimited",
  },
  {
    name: "Studio",
    color: "orange",
    monthly: "$39.99/mo",
    yearly: "$29.99/mo",
    commission: "8%",
    uploads: "Unlimited",
  },
];
