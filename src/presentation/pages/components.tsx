import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid";
import Btn from "../components/atoms/Btn";
import Badge from "../components/atoms/Badge";
import InputText from "../components/atoms/InputText";

export const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <PublicLayout>
      <article>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-40 relative md:row items-center">
          <div className="w-full column space-y-xl mt-xl">
            <div className="row space-x-sm">
              <h1 className="w-full section-title pb-md">Button</h1>

              <Btn label="Get in Touch" variant="secondary" size="xs"></Btn>
              <Btn label="Get in Touch" variant="primary"></Btn>
              <Btn label="Get in Touch" variant="white"></Btn>
              <Btn label="Get in Touch" round>
                Oipaosdkasdksa
              </Btn>
              <Btn icon="i-carbon-person" fab></Btn>
            </div>

            <div className="row space-x-sm">
              <h1 className="w-full section-title pb-md">Badge</h1>
              <Badge showRemoveButton>Badge</Badge>
              <Badge variant="primary">Badge</Badge>
              <Badge variant="secondary">Badge</Badge>
              <Badge variant="success">Badge</Badge>
              <Badge variant="error">Badge</Badge>
              <Badge variant="warning">Badge</Badge>
              <Badge variant="info">Badge</Badge>
            </div>

            <div className="row space-x-sm">
              <h1 className="w-full section-title pb-md">Inputs</h1>
              <InputText
                name="name"
                label="Type your full name"
                placeholder="Your name here"
                value={name}
                error={
                  name.length > 1 && name.length < 3 ? "Name is too short" : ""
                }
                onChange={(e) => setName(e.target.value)}
              ></InputText>

              <InputText
                name="email"
                label="Type your email"
                placeholder="Your email here"
                value={email}
                prependIcon="i-carbon-person"
                appendIcon="i-carbon-arrow-right"
                error={
                  email.length > 1 && email.length < 3
                    ? "Email is too short"
                    : ""
                }
                onChange={(e) => setEmail(e.target.value)}
              ></InputText>
            </div>
          </div>
        </section>
      </article>
    </PublicLayout>
  );
};

export default Index;
