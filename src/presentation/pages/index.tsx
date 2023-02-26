import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid";
import Btn from "../components/atoms/Btn";
import Badge from "../components/atoms/Badge";
import InputText from "../components/atoms/InputText";
import PublicHeroSection from "../components/organisms/PublicHeroSection";

export const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <PublicLayout>
      <article>
        {/* <section className="home__hero max-w-7xl mx-auto px-6 lg:px-8 py-40 relative md:row items-center">
          <div>
            <h1 className="text-5xl fw-black">Douglas Ochner</h1>
            <p className="text-lg max-w-xl mt-xl">
              I'm a frontend developer who loves to create beautiful websites
              and applications. With over 3 years of experience in Vue.js,
              JavaScript, HTML, and CSS I have a passion for bringing design
              ideas to life.
            </p>
            <p className="text-xl max-w-xl mt-md"></p>

            <div className="row space-x-sm mt-xl">
              <p className="text-lg max-w-xl mt-md">
                Do you want to discuss a project idea?
              </p>
            </div>
            <Link
              to="/contact-me"
              className="text-2xl fw-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary"
            >
              Let's talk!
            </Link>
          </div>
        </section> */}

        <PublicHeroSection />
      </article>
    </PublicLayout>
  );
};

export default Index;
