import "@/presentation/styles/home.css";

export const LazyIndex = () => {
  const [theme, setTheme] = useDarkMode<"light" | "dark">();

  const toggleDark = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <article>
      <section className="home__hero">Hero</section>
      <button onClick={() => toggleDark}>toggle dark</button>
      <section className="home__about-me">About me</section>
      <section className="home__projects">Projects</section>
      <section className="home__contact-me">Contact-me</section>
      <section className="home__blog-posts">Blog posts</section>
    </article>
  );
};

export default LazyIndex;
