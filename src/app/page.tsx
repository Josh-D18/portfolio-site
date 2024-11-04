import Contact from "@/components/Contact/Contact";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import LangExperience from "@/components/LangExperience/LangExperience";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <section>
      <Navigation />
      <Hero />
      <LangExperience />
      <Projects />
      <Contact />
    </section>
  );
}
