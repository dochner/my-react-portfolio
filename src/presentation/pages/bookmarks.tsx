import React from "react";
import InputText from "../components/atoms/InputText";
import PublicLayout from "../components/template/PublicLayout";

interface IBookmarksPageProps extends React.PropsWithChildren<{}> {}

const bookmarks = [
  {
    title: "Design",
    links: [
      {
        title: "Figma",
        url: "https://www.figma.com/",
        description:
          "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
      },
      {
        title: "Canva",
        url: "https://www.canva.com/",
        description:
          "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, documents and other visual content.",
      },
      {
        title: "Adobe XD",
        url: "https://www.adobe.com/products/xd.html",
        description:
          "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.",
      },
    ],
  },
  {
    title: "Coloring",
    links: [
      {
        title: "Coolors",
        url: "https://coolors.co/",
        description:
          "The super fast color schemes generator! Create, save and share perfect palettes in seconds!",
      },
      {
        title: "Color Hunt",
        url: "https://colorhunt.co/",
        description:
          "A free and open platform for color inspiration with thousands of trendy hand-picked color palettes.",
      },
      {
        title: "Color Space",
        url: "https://mycolor.space/",
        description:
          "Color Space is a free color tool that allows you to create color schemes, color palettes, and color gradients.",
      },
    ],
  },
  {
    title: "UI | UX",
    links: [
      {
        title: "UI Movement",
        url: "https://uimovement.com/",
        description: "A daily dose of inspiration for UI designers.",
      },
      {
        title: "UI Faces",
        url: "https://uifaces.co/",

        description:
          "UI Faces is a collection of user avatars for you to use however you please.",
      },
      {
        title: "Tailwind UI",
        url: "https://tailwindui.com/",
        description:
          "Beautiful, completely customizable UI components, designed and built by the creators of Tailwind CSS.",
      },
    ],
  },
  {
    title: "Icons",
    links: [
      {
        title: "Icônes",
        url: "https://icones.js.org/",
        description: "Icon Explorer with Instant searching, powered by Iconify",
      },
      {
        title: "Iconify",
        url: "https://iconify.design/",
        description: "Icon library with 1000+ icons and 100+ icon sets.",
      },
    ],
  },
  {
    title: "Stock Photos & Videos",
    links: [
      {
        title: "Unsplash",
        url: "https://unsplash.com/",
        description: "The internet’s source of freely useable images.",
      },
      {
        title: "Pexels",
        url: "https://www.pexels.com/",
        description:
          "The best free stock photos & videos shared by talented creators.",
      },
    ],
  },
  {
    title: "Illustrations",
    links: [
      {
        title: "Undraw",
        url: "https://undraw.co/",
        description:
          "Undraw is a constantly updated collection of beautiful svg images that you can use completely free and without attribution.",
      },
    ],
  },
  {
    title: "Development",
    links: [
      {
        title: "Can I Use",
        url: "https://caniuse.com/",
        description:
          "Can I Use provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
      },
      {
        title: "Nibbler",
        url: "https://nibbler.silktide.com/",
        description:
          "Nibbler is a free tool that analyzes your website's technology stack and gives you a list of recommendations to improve it.",
      },
      {
        title: "Web.dev",
        url: "https://web.dev/",
        description:
          "Web.dev provides you with the knowledge and tools you need to build great web experiences.",
      },
      {
        title: "TinyPNG",
        url: "https://tinypng.com/",
        description:
          "For ultra fast image compression while preserving quality.",
      },
    ],
  },
  {
    title: "CSS",
    links: [
      {
        title: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        description:
          "A utility-first CSS framework for rapidly building custom designs.",
      },
      {
        title: "UnoCSS",
        url: "https://github.com/unocss/unocss",
        description: "The instant on-demand Atomic CSS engine.",
      },
      {
        title: "CSS Tricks",
        url: "https://css-tricks.com/",
        description:
          "CSS-Tricks is a website about web design, development and all things in between.",
      },
      {
        title: "Smooth Shadow",
        url: "https://shadows.brumm.af/",
        description:
          "Smooth Shadow is a tool to help you create smooth shadows for your designs.",
      },
      {
        title: "Tailwind Grid Generator",
        url: "https://tailwindgrids.com/",
        description:
          "Tailwind Grid Generator is a tool to help you create Tailwind CSS grid layouts.",
      },
    ],
  },
];

const BookmarksPage = (props: IBookmarksPageProps) => {
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const debouncedHandleFilter = useDebounceFn(handleFilter, 500);

  const filteredBookmarks = useMemo(() => {
    if (!filter) return bookmarks;

    const filtered = bookmarks.map((category) => {
      const links = category.links.filter((link) => {
        const title = link.title.toLowerCase();
        const description = link.description.toLowerCase();
        const search = filter.toLowerCase();

        return title.includes(search) || description.includes(search);
      });

      return {
        ...category,
        links,
      };
    });

    return filtered;
  }, [filter]);

  return (
    <PublicLayout>
      <article className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto column">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl !leading-loose text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-secondary">
            My Bookmarks
          </h1>
          <p className="mt-2 text-lg max-w-xl leading-8 text-gray-600 dark:text-light-300">
            I have a lot of bookmarks, but here are some of my favorites. You
            can find them all below in an organized away.
          </p>

          <div className="mt-8">
            <InputText
              onChange={debouncedHandleFilter}
              label="Search"
              placeholder="Search by Title, Description, or Category"
              name="search"
            />
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-12">
          <div className="space-y-xl columns-1 sm:columns-2 lg:columns-3 gap-10 [column-fill:_balance] mx-auto before:box-inherit after:box-inherit">
            {filteredBookmarks.map((bookmark) => (
              <div key={bookmark.title} className="break-inside-avoid">
                <div className="bg-white dark:bg-dark-800 shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-light-100">
                      {bookmark.title}
                    </h3>
                  </div>
                  <div className="border-t border-gray-200 dark:border-dark-700">
                    <dl>
                      {bookmark.links.map((link) => (
                        <div
                          key={link.title}
                          className="bg-white dark:bg-dark-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        >
                          <dt className="text-sm font-medium text-gray-500 dark:text-light-300">
                            {link.title}:
                          </dt>

                          <dd className="mt-1 text-sm text-gray-900 dark:text-light-100 sm:mt-0 sm:col-span-2 overflow-hidden">
                            <a href={link.url} className="link">
                              {link.url}
                            </a>
                            <p className="text-gray-500 dark:text-light-300">
                              {link.description}
                            </p>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </PublicLayout>
  );
};

export default BookmarksPage;
