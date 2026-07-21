import { Header }        from "@/components/header";
import { Hero }           from "@/components/hero";
import { About }          from "@/components/about";
import { Projects }       from "@/components/projects";
import { Contact }        from "@/components/contact";
import { Footer }         from "@/components/footer";
import { DustParticles }  from "@/components/dust";

export default function Home() {
  return (
    <>
      {/* Subtle dust layer sits behind everything */}
      <DustParticles />

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
