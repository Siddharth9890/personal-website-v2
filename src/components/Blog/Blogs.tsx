import Fade from "react-reveal/Fade";

const posts = [
  {
    title:
      "Introducing start-web-app a simpler way to create all your apps using react and node",
    href: "https://theuniquecoder.hashnode.dev/introducing-start-web-app-a-simpler-way-to-create-all-your-apps-using-react-and-node",
    description: "A general introduction of npm package.",
    date: "Feb 10, 2022",
    readingTime: "1 min",
  },
  {
    title: "Architecture of our web app CS-TRACKER",
    href: "https://theuniquecoder.hashnode.dev/architecture-of-our-web-app-cs-tracker",
    description: "A general introduction of project cs-tracker.",
    date: "Jan 3, 2022",
    readingTime: "3 min",
  },
  {
    title: "Quick Revision of Javascript concepts with codedamn",
    href: "https://theuniquecoder.hashnode.dev/quick-revision-of-javascript-concepts-with-codedamn",
    description: "My first article on how to learn javascript",
    date: "Dec 5, 2021",
    readingTime: "1 min",
  },
];

function Blogs() {
  return (
    <section
      id="blog"
      className="relative bg-navy pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <Fade bottom>
        <div className="absolute inset-0">
          <div className="bg-navy h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-lightestSlate sm:text-4xl">
              04 From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-lightSlate sm:mt-4">
              Sometimes i love writing about projects that i made.
            </p>
          </div>
          <div className="mt-12 max-w-lg  mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col bg-navy hover:bg-lightNavy rounded-lg shadow-lg overflow-hidden"
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
        </div>
      </Fade>
    </section>
  );
}
export default Blogs;
