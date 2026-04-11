import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Francis | Software Engineer",
  description:
    "Backend-first software engineer who ships full-stack products. Built DirtyBucket — a beat marketplace SaaS with Java, Spring Boot, RabbitMQ, FFmpeg, Next.js, and AWS S3.",
  keywords: [
    "Software Engineer", "Backend Developer", "Full Stack Developer",
    "Java", "Spring Boot", "Next.js", "AWS", "RabbitMQ", "FFmpeg",
    "DirtyBucket", "Beat Marketplace", "SaaS"
  ],
  authors: [{ name: "Emmanuel Francis" }],
  creator: "Emmanuel Francis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emmanuel Francis | Software Engineer",
    description:
      "Backend-first engineer who builds scalable systems. Creator of DirtyBucket — beat marketplace SaaS.",
    siteName: "Emmanuel Francis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Francis | Software Engineer",
    description:
      "Backend-first engineer who builds scalable systems. Creator of DirtyBucket beat marketplace.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
