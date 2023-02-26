import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {};

const features = [
  {
    name: "HTML/CSS",
    description:
      "With over 3 years of experience in HTML and CSS, I can design beautiful and responsive websites that showcase your brand and vision.",
  },
  {
    name: "Javascript",
    description:
      "My expertise in Javascript, Typescript, and Node.js allows me to create dynamic and interactive applications that meet your business needs.",
  },
  {
    name: "Vue.js ecosystem",
    description:
      "I have great experience with Vue.js, Vuex, Vue Router, Quasar, and Nuxt.js, allowing me to develop powerful applications with ease and efficiency.",
  },
  {
    name: "React.js ecosystem",
    description:
      "Although I'm currently learning and executing personal projects with React.js, I have experience with React.js, React Router, and Next.js, and I'm eager to expand my knowledge in this area.",
  },
  {
    name: "Git",
    description:
      "With over 3 years of experience with Git and Github, I ensure that your project is managed efficiently and effectively.",
  },
  {
    name: "Testing",
    description:
      "Although I'm currently learning Jest, Cypress, and Storybook, I can write reliable tests for your application, ensuring that it is stable and secure.",
  },
];

const PublicLanguagesSection = (props: Props) => {
  return (
    <section
      id="my-skills"
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
    >
      <div>
        <h2 className="mt-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
          <a href="#my-skills">My Skillset</a>
        </h2>
      </div>
      <div className="mt-12 lg:mt-20 lg:col-span-2">
        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-primary-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500 dark:text-gray-300">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default PublicLanguagesSection;
