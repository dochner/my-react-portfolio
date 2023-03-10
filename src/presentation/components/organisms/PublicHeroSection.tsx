type Props = {};

const PublicHeroSection = (props: Props) => {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Douglas Gabriel Ochner
              </h1>
              <p className="mt-6 text-xl dark:text-gray-200">
                I am a skilled frontend developer with over 10 years of
                experience in the field of technology. During the past three
                years, I have focused on web development, specifically with
                Vue.js, and have built a solid reputation for creating dynamic
                and user-friendly interfaces for various applications.
              </p>
            </div>
            <p className="text-xl max-w-xl mt-md"></p>

            <div className="row space-x-sm mt-xl">
              <p className="text-lg max-w-xl mt-md">
                Do you want to discuss a project idea?
              </p>
            </div>
            <Link
              to="/contact-me"
              className="text-2xl fw-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary underline-1 underline-primary-500 underline-dashed underline"
            >
              Let's talk!
            </Link>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 dark:bg-dark-50/4 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-dark-50/20"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              {/* Add my avatar photo later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicHeroSection;
