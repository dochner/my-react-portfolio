type Props = {};
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Btn from "../atoms/Btn";
import InputText from "../atoms/InputText";
import TextArea from "../atoms/TextArea";

const PublicCtaContactMe = (props: Props) => {
  return (
    <section
      id="contact-me"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
              <a href="#contact-me">Get in touch</a>
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form or contact
              me via:
            </p>
            <dl className="mt-8 text-base text-gray-500 dark:text-gray-300">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <i
                    className="flex-shrink-0 h-6 w-6 i-carbon-logo-linkedin text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="https://www.linkedin.com/in/douglasochner/"
                    rel="noopener noreferrer"
                    className="underline underline-px underline-dashed ml-3"
                  >
                    in/douglasochner
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <i
                    className="flex-shrink-0 h-6 w-6 text-gray-400 i-carbon-at"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:douglas.ochner@gmail.com"
                    rel="noopener noreferrer"
                    className="underline underline-px underline-dashed ml-3"
                  >
                    douglas.ochner@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputText name="firstName" label="First Name" />
                <InputText name="lastName" label="Last Name" />
              </div>
              <div>
                <InputText name="email" label="E-mail" />
              </div>
              <div>
                <InputText name="phone" label="Phone" />
              </div>
              <div>
                <TextArea name="message" label="Message" />
              </div>
              <div>
                <Btn
                  type="submit"
                  label="Send"
                  iconRight="i-carbon-arrow-right"
                ></Btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicCtaContactMe;
