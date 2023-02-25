import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid";

export const Index = () => {
  return (
    <PublicLayout>
      <article>
        <section className="home__hero w-col-12 md:w-col-10 md:offset-1 px-md py-40 relative md:row items-center">
          <div>
            <h1 className="text-5xl font-display fw-black">Douglas Ochner</h1>
            <p className="text-xl font-display fw-thin font-display max-w-xl mt-xl">
              I'm a frontend developer who loves to create beautiful websites
              and applications. With over 3 years of experience in Vue.js,
              JavaScript, HTML, and CSS, I have a passion for bringing design
              ideas to life.
            </p>
          </div>

          <img
            src="/avatar.webp"
            alt=""
            className="rounded-full max-w-xl ml-auto hidden md:block"
          />

          <div className="rounded-full h-50 w-40 bg-secondary-500 blur-100px -right-xl top-200px absolute z--1"></div>
          <div className="rounded-full h-40 w-40 bg-primary-500 blur-100px left-0 top-0 absolute z--1"></div>
          {/* Btn Cta */}
        </section>
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
