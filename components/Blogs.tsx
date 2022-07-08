const posts = [
  {
    title: "Start-web-app v2.0 You want tailwind support let's get it.",
    href: "https://theuniquecoder.hashnode.dev/start-web-app-v20-you-want-tailwind-support-lets-get-it",
    description: "Upgrade notes of start-web-app.",
    date: "Jul 1, 2022",
    readingTime: "2 min",
  },
  {
    title:
      "Why we shifted from cloudflare pages to vercel for our website cs-tracker.",
    href: "https://theuniquecoder.hashnode.dev/why-we-shifted-from-cloudflare-pages-to-vercel-for-our-website-cs-tracker",
    description: "Read about problems cloudflare pages has.",
    date: "Jun 20, 2022",
    readingTime: "3 min",
  },
  {
    title:
      "Coding Machine a online editor to write programs and to run it part 2.",
    href: "https://theuniquecoder.hashnode.dev/coding-machine-a-online-editor-to-write-programs-and-to-run-it-part-2lets-discuss-about-problems-and-architecture-of-the-app",
    description: "Let's discuss about problems and architecture of the app.",
    date: "Apr 11, 2022",
    readingTime: "3 min",
  },
];

function Blogs() {
  return (
    <section
      id="blog"
      className="relative bg-navy pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute animate-fade-in-down inset-0">
        <div className="bg-navy h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-lightestSlate sm:text-4xl">
            04. From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-lightSlate sm:mt-4">
            Sometimes i love writing about projects that i made.
          </p>
        </div>
        <div className="mt-12 max-w-lg  mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col bg-lightNavy hover:bg-lightestNavy rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex-1  p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-lightSlate">
                    {post.date}{" "}
                  </p>

                  <a
                    href={post.href}
                    target={"_blank"}
                    rel="noreferrer"
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-lightestSlate">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-lightestSlate">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="https://theuniquecoder.hashnode.dev/"
              target={"_blank"}
              rel="noreferrer"
              className="mt-5 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-#5cf6d2 hover:bg-[#5cf6d2]"
            >
              Read more!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blogs;
