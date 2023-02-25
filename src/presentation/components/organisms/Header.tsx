import Tabs from "../atoms/Tabs";
import ToggleDark from "../atoms/ToggleDark";

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
    label: "Contact me",
    name: "contact-me",
    to: "/contact-me",
  },
];

const Header = () => {
  return (
    <header className="h-82px row bg-black/4 backdrop-blur-sm dark:bg-white/4 border-black/12 dark:border-white/12 shadow-sm border-b-px">
      <div
        className="row items-center w-full px-4"
        un-w="col-12 md:col-10"
        un-offset="md:1"
      >
        <h1>
          <Link to="/" className="font-bold font-display text-2xl">
            Ochner
          </Link>
        </h1>

        <div className="flex-grow"></div>
        <div className="hidden md:flex h-full">
          <Tabs tabs={tabs}></Tabs>
        </div>
        <div className="flex-grow"></div>
        <div className="row items-center space-x-md">
          <ToggleDark></ToggleDark>

          <button className="row items-center justify-center h-12 w-12 rounded-full md:hidden">
            <span className="sr-only">Menu toggle button</span>
            <i className="i-carbon-menu text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
