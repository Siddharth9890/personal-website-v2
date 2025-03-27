import { ChevronRightIcon } from "@heroicons/react/24/outline";

const technologies = [
  "Go",
  "Typescript/Javascript",
  "AWS",
  "Docker",
  "Postgres",
  "Node.js",
  "Rust",
  "Next.js",
];

const description =
  "Hello! My name is Siddharth and I enjoy creating softwares that solves problems. My interest in programming started back in 2017 during my college days writing C code. It taught me a lot about programming in general. ";

const shortDescription =
  "I have also done a full stack internship @Project28 and currently working as Software Engineer @Gateway.";

function AboutMe() {
  return (
    <section id="about" className="relative py-12 bg-navy overflow-hidden">
      <div className="relative animate-fade-in-down px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-lightest-slate sm:text-4xl">
              01. About Me
            </span>
          </h1>
          <p className="mt-8 text-xl text-light-slate leading-8">
            {description}
            {shortDescription}
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-lightest-slate mx-auto">
          <h2 className="text-xl font-extrabold text-center text-white">
            Here are a few technologies I’ve been working with recently:
          </h2>
          <div className="mt-6 mb-10 pt-10">
            <dl className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {technologies.map((technology, index) => (
                <div key={index} className="flex justify-center">
                  <ChevronRightIcon className="h-5 w-5 mr-2 pt-1 text-green" />
                  <dt className="text-lg leading-6 font-medium text-white">
                    {technology}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
