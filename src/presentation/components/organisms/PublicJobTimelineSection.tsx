import { CheckIcon } from "@heroicons/react/24/solid";
import Badge from "../atoms/Badge";

const steps = [
  {
    name: "IT Consultant / Aubay Portugal · 2022 → Present",
    description:
      "React, Angular, Angular Material, TypeScript, SASS, Node.js, Vue.js, Nuxt.js, Quasar, Agile Methodologies, Vue.js",
    href: "#",
    status: "current",
  },
  {
    name: "Freelancer · 2020 → Present",
    description:
      "Nuxt.js, Quasar, React, Angular, TypeScript, SASS, Node.js, Vue.js",
    href: "#",
    status: "current",
  },
  {
    name: "Fullstack Developer → Frontend Devloper / Multiplier · 2020 → 2022",
    description: "Nuxt.js, Quasar, Agile Methodologies, JavaScript, Vue.js",
    href: "#",
    status: "complete",
  },
  {
    name: "IT Support Analyst / Lunelli  · 2013 → 2020",
    description:
      "Inèdit Software, Lansweeper, Bitdefender, Users training, IT Support, Helpdesk, ITIL",
    href: "#",
    status: "complete",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const PublicJobTimelineSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
          TIMELINE
        </h2>
        <p className="mt-2 text-3xl font-extrabold">My Experience</p>
      </div>
      <div className="mt-12 lg:mt-0 lg:col-span-2">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(
                  stepIdx !== steps.length - 1 ? "pb-10" : "",
                  "relative"
                )}
              >
                {step.status === "complete" ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-start group">
                      <span className="h-9 flex items-center">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                          <CheckIcon
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase">
                          {step.name}
                        </span>
                        <div className="row gap-sm mt-sm">
                          {step?.description &&
                            step.description.split(",").map((item, index) => (
                              <Badge key={index} variant="info">
                                {item}
                              </Badge>
                            ))}
                        </div>
                      </span>
                    </div>
                  </>
                ) : step.status === "current" ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div
                      className="relative flex items-start group"
                      aria-current="step"
                    >
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                          <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
                          {step.name}
                        </span>
                        <div className="row gap-sm mt-sm">
                          {step?.description &&
                            step.description.split(",").map((item, index) => (
                              <Badge key={index} variant="info">
                                {item}
                              </Badge>
                            ))}
                        </div>
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="relative flex items-start group"
                    >
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                          {step.name}
                        </span>
                        <div className="row gap-sm mt-sm">
                          {step?.description &&
                            step.description.split(",").map((item, index) => (
                              <Badge key={index} variant="info">
                                {item}
                              </Badge>
                            ))}
                        </div>
                      </span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PublicJobTimelineSection;
