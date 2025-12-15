import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Emmanuel Francis | Software Engineer",
  description: "Backend-first software engineer specializing in Java, Spring Boot, and full-stack development with MERN and Next.js. Building scalable systems and creating content on YouTube.",
  keywords: ["Software Engineer", "Backend Developer", "Full Stack Developer", "Java", "Spring Boot", "MERN", "Next.js", "AWS"],
  authors: [{ name: "Emmanuel Francis" }],
  creator: "Emmanuel Francis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emmanuel Francis | Software Engineer",
    description: "Backend-first software engineer specializing in Java, Spring Boot, and full-stack development.",
    siteName: "Emmanuel Francis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Francis | Software Engineer",
    description: "Backend-first software engineer specializing in Java, Spring Boot, and full-stack development.",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="https://www.glancelytics.com/js/script.js" data-domain="emma-portfolio-three.vercel.app" defer></script>
      </body>
    </html>
  );
}
