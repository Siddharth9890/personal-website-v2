const posts = [
  {
    title: "MongoDB _id The most important thing that you should know",
    href: "https://theuniquecoder.hashnode.dev/mongodb-id-the-most-important-thing-that-you-should-know",
    description: "Importance of primary keys.",
    date: "Feb 27, 2023",
  },
  {
    title: "A Tale of Debugging: Debugging Chrome extension.",
    href: "https://theuniquecoder.hashnode.dev/a-tale-of-debugging-debugging-chrome-extension",
    description: "Unknown problem of chorme extension.",
    date: "Feb 25, 2023",
  },
  {
    title:
      "Coding Machine a online editor to write programs and to run it part 2.",
    href: "https://theuniquecoder.hashnode.dev/coding-machine-a-online-editor-to-write-programs-and-to-run-it-part-2lets-discuss-about-problems-and-architecture-of-the-app",
    description: "Let's discuss about problems and architecture of the app.",
    date: "Apr 11, 2022",
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
            Sometimes i love writing about tech && solutions that i made.
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
