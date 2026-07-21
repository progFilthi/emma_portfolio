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
  title: "Emmanuel Francis — Software Engineer",
  description:
    "Emmanuel Francis is a backend-first software engineer building scalable products. Creator of DirtyBucket (beat marketplace) and FilthiLink (URL shortener).",
  keywords: [
    "Emmanuel Francis", "Software Engineer", "Backend Developer",
    "DirtyBucket", "FilthiLink", "Java", "Spring Boot", "Next.js"
  ],
  authors: [{ name: "Emmanuel Francis" }],
  creator: "Emmanuel Francis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emmanuel Francis — Software Engineer",
    description: "Backend-first engineer. Creator of DirtyBucket & FilthiLink.",
    siteName: "Emmanuel Francis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Francis — Software Engineer",
    description: "Backend-first engineer. Creator of DirtyBucket & FilthiLink.",
  },
  robots: { index: true, follow: true },
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
