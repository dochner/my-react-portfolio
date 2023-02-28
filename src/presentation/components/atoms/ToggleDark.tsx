import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ToggleDark = () => {
  const [theme, setTheme] = useDarkMode<"light" | "dark">();

  const toggleDark = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleDark}
      className={classNames(
        theme === "dark" ? "bg-dark-100" : "bg-gray-200",
        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out outline-none ring-1 ring-transparent hover:ring-primary-500 focus:ring-primary-500"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          theme === "dark" ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-flex items-center justify-center text-xs h-5 w-5 rounded-full bg-white dark:bg-dark-500 shadow transform ring-0 transition ease-in-out duration-200"
        )}
      >
        <i
          className={classNames(
            theme === "dark" ? "i-bx-moon" : "i-bx-sun text-gray-500"
          )}
        ></i>
      </span>
    </Switch>
  );
};

export default ToggleDark;
