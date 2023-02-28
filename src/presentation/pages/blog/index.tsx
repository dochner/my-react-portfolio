import Badge from "@/presentation/components/atoms/Badge";
import InputText from "@/presentation/components/atoms/InputText";
import PublicLayout from "@/presentation/components/template/PublicLayout";
import { useDebounce } from "@reactuses/core";

interface IBlogPageProps extends React.PropsWithChildren<{}> {}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    slug: "boot-your-conversion-rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: [{ title: "Nuxt.js", href: "#" }],
    lang: { title: "en-US", href: "#" },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    slug: "how-to-use-search-engine-optimization-to-drive-sales",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Abr 21, 2022",
    datetime: "2022-04-21",
    category: [{ title: "Vue.js", href: "#" }],
    lang: { title: "pt-BR", href: "#" },
  },
  {
    id: 3,
    title: "How to use search engine optimization to drive sales",
    slug: "how-to-use-search-engine-optimization-to-drive-sales",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Abr 21, 2022",
    datetime: "2022-04-21",
    category: [{ title: "Vue.js", href: "#" }],
    lang: { title: "pt-BR", href: "#" },
  },
  {
    id: 4,
    title: "How to use search engine optimization to drive sales",
    slug: "how-to-use-search-engine-optimization-to-drive-sales",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Abr 21, 2022",
    datetime: "2022-04-21",
    category: [{ title: "Vue.js", href: "#" }],
    lang: { title: "pt-BR", href: "#" },
  },
  {
    id: 5,
    title: "How to use search engine optimization to drive sales",
    slug: "how-to-use-search-engine-optimization-to-drive-sales",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Abr 21, 2022",
    datetime: "2022-04-21",
    category: [{ title: "Vue.js", href: "#" }],
    lang: { title: "pt-BR", href: "#" },
  },
];

const BlogPage = ({ children }: IBlogPageProps) => {
  const [search, setSearch] = useState<string>("");

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("search", e.target.value);
  };

  // I need to get to know how to type the form event
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <PublicLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl !leading-loose text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-secondary">
              My Blog posts
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-6 w-full mx-auto">
              <InputText
                name="search"
                label="Search"
                value={search}
                placeholder="Search by title, category, or language"
                onChange={handleInputSearch}
              />
            </div>
          </form>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 dark:border-dark-50 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="max-w-xl column items-start justify-between border-px border-gray-300 dark:border-dark-50 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  aria-hidden="true"
                  className="object-cover w-full h-56"
                />

                <div className="pa-md">
                  <div className="row justify-between w-full">
                    <time
                      dateTime={post.datetime}
                      className="text-gray-500 dark:text-gray-300"
                    >
                      {post.date}
                    </time>

                    <div className="row justify-end">
                      <Badge variant="primary">{post?.lang.title}</Badge>
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 h-12 text-lg font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
                      <Link to={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-3 h-18">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-md flex items-center gap-x-4 text-xs relative">
                    {post?.category &&
                      Array.isArray(post.category) &&
                      post?.category.map((category, idx) => (
                        <Link to={category.href} key={idx}>
                          <Badge>{category.title}</Badge>
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        {children}
      </div>
    </PublicLayout>
  );
};

export default BlogPage;
