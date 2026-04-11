import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { DirtyBucketShowcase } from "@/components/dirtybucket";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MouseEffect } from "@/components/mouse-effect";

export default function Home() {
  return (
    <>
      {/* Mouse particle effect — fixed, z-0, behind all content */}
      <MouseEffect />
      <Header />
      <main className="relative z-10">
        <Hero />
        <DirtyBucketShowcase />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
