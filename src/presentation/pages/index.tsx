import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

export const Index = () => {
  return (
    <PublicLayout>
      <article>
        <section className="home__hero">Hero</section>
        <section id="about-me" className="home__about-me">
          About me
        </section>
        <section id="projects" className="home__projects">
          Projects
        </section>
        <section id="contact-me" className="home__contact-me">
          Contact-me
        </section>
        <section id="blog" className="home__blog-posts">
          Blog posts
        </section>
      </article>
    </PublicLayout>
  );
};

export default Index;
