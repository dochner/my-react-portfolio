import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import Tabs from "../atoms/Tabs";
import ToggleDark from "../atoms/ToggleDark";
import Btn from "../atoms/Btn";

const tabs = [
  {
    label: "Home",
    name: "home",
    to: "/",
  },
  {
    label: "Projects",
    name: "projects",
    to: "/projects",
  },
  {
    label: "Blog",
    name: "blog",
    to: "/blog",
  },
  {
    label: "Bookmarks",
    name: "bookmarks",
    to: "/bookmarks",
  },
];

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark-300 h-20 border-b-1 border-gray-200 dark:border-dark-100 shadow-sm dark:shadow-dark-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 h-full lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Douglas Gabriel Ochner</span>
            <img className="w-auto rounded-full h-12" src="/avatar.webp" />
          </Link>
        </div>
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-dark dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 h-full">
          <Tabs tabs={tabs} className="hidden lg:flex lg:gap-x-12 text-lg" />
        </div>

        <div className="hidden lg:flex lg:flex-1 items-center lg:justify-end space-x-md">
          <ToggleDark />
          <Btn
            to="#contact-me"
            iconRight="i-carbon-arrow-right"
            variant="accent"
            size="sm"
            round
          >
            Contact me
          </Btn>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/4 dark:bg-black/12 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-dark-300 pl-4 pr-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between h-80px">
            <Link to="/" className="p-1.5">
              <span className="sr-only">Douglas Gabriel Ochner</span>
              <img className="w-auto rounded-full h-12" src="/avatar.webp" />
            </Link>

            <div className="space-x-md row items-center">
              <ToggleDark />

              <button
                type="button"
                className="rounded-md flex items-center p-2.5 text-dark dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {tabs &&
                  tabs.map((tab) => (
                    <Link
                      to={tab.to}
                      key={tab.name}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-dark-900 dark:text-white hover:bg-gray-50 hover:text-dark-900"
                    >
                      {tab.label}
                    </Link>
                  ))}
              </div>
              <div className="py-6">
                <Link
                  to="#contact-me"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-dark-900 dark:text-white hover:bg-gray-50 hover:text-dark-900"
                >
                  Contact-me
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
