import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ToggleDark = () => {
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    const prefferedTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const setting = localStorage.getItem("reactuses-color-scheme") || "auto";

    if (setting === "dark" || (prefferedTheme && setting !== "light")) {
      document.documentElement.classList.toggle("dark", true);
    } else {
      document.documentElement.classList.toggle("dark", false);
    }
  }, [theme]);

  return (
    <Menu as="div" className="relative flex text-left">
      <>
        <Menu.Button className="inline-flex pa-xs w-full justify-center rounded-md border border-gray-300 dark:border-dark-50 dark:bg-dark-200 ">
          <span className="sr-only">Open theme options</span>
          {theme === "light" ? (
            <SunIcon className="h-5 w-5" aria-hidden="true" />
          ) : theme === "dark" ? (
            <MoonIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ComputerDesktopIcon className="h-5 w-5 " aria-hidden="true" />
          )}
        </Menu.Button>
      </>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-8 w-40 pa-sm origin-top-right rounded-md bg-white dark:bg-dark-300 ring-1 border-1 border-gray-300 dark:border-dark-100 ring-black ring-opacity-5 focus:outline-none space-y-xs">
          <Menu.Item>
            <div
              onClick={() => setTheme("light")}
              className={classNames(
                "pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer",
                theme === "light" ? "bg-gray-200 dark:bg-dark-50" : ""
              )}
            >
              <SunIcon
                className="h-6 w-6  rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300"
                aria-hidden="true"
              />
              <div>Light</div>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              onClick={() => setTheme("dark")}
              className={classNames(
                "pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer",
                theme === "dark" ? "bg-gray-200 dark:bg-dark-50" : ""
              )}
            >
              <MoonIcon
                className="h-6 w-6  rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300"
                aria-hidden="true"
              />
              <div>Dark</div>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              onClick={() => setTheme("auto")}
              className={classNames(
                "pa-sm row space-x-md items-center rounded-lg hover:bg-gray-200 dark:hover:bg-dark-100 cursor-pointer",
                theme === "auto" ? "bg-gray-200 dark:bg-dark-50" : ""
              )}
            >
              <ComputerDesktopIcon
                className="h-6 w-6  rounded-lg border border-gray-300 dark:border-dark-100 pa-xs bg-white dark:bg-dark-300"
                aria-hidden="true"
              />
              <div>System</div>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ToggleDark;
