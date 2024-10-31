import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import LangExperience from "@/components/LangExperience/LangExperience";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <LangExperience />
      <Projects />

      <section>
        Contact I would love to hear about your project and how I could help.
        Please fill in the form, and I’ll get back to you as soon as possible.
        Name Email Message Send message
      </section>

      <section>Josh Date</section>
    </section>
  );
}
