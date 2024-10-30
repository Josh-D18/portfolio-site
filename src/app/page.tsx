import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import LangExperience from "@/components/LangExperience/LangExperience";

export default function Home() {
  return (
    <section className="bg-primary h-screen">
      <Header />
      <Hero />
      <LangExperience />

      <section>
        Projects Contact me Design portfolio HTML CSS View project View code
        E-learning landing page HTML CSS View project View code Todo web app
        HTML CSS JavaScript View project View code Entertainment web app HTML
        CSS JavaScript View project View code Memory Game HTML CSS JavaScript
        View project View code Art gallery showcase HTML CSS JavaScript View
        project View code
      </section>

      <section>
        Contact I would love to hear about your project and how I could help.
        Please fill in the form, and I’ll get back to you as soon as possible.
        Name Email Message Send message
      </section>

      <section>Josh Date</section>
    </section>
  );
}
