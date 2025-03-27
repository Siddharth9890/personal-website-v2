import Footer from "../components/Footer";
import { IconExternal } from "../public/assets/icons";

const projects = [
  {
    year: "2022",
    title: "Code Engine",
    techStack: "Node.js - Redis - Javascript - cli",
    madeAt: "Me",
    github: "https://github.com/Siddharth9890/code-engine",
  },
  {
    year: "2022",
    title: "Code Tracker frontend older version",
    techStack: "React - Javascript - Tailwind",
    madeAt: "Build Thoughts",
    github: "https://github.com/Siddharth9890/cs-tracker-frontend-old-version",
  },
  {
    year: "2022",
    title: "Personal website v1",
    techStack: "React - Javascript - Tailwind",
    madeAt: "Me",
    github: "https://github.com/Siddharth9890/personal-website",
  },
  {
    year: "2021",
    title: "Image processor",
    techStack: "React - Javascript - Tailwind - Node.js - MongoDb",
    madeAt: "Me",
    github: "https://github.com/varan5/image-processor",
  },
];

export default function Projects() {
  return (
    <div className="bg-navy">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate sm:text-4xl">
          <span className="block">Archive</span>
          <span className="block text-green">
            A list of things I&apos;ve worked on.
          </span>
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full  m-10 shadow-xl">
                <thead className="bg-navy">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-light-slate uppercase tracking-wider"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-light-slate uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-light-slate uppercase tracking-wider"
                    >
                      Made At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-light-slate uppercase tracking-wider"
                    >
                      Tech Stack
                    </th>
                    <th scope="col" className="relative px-6 py-3 text-slate">
                      <span className="sr-only">Link</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-navy divide-y divide-gray-20">
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium text-green">
                        {project.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg  text-light-slate">
                        {project.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-slate">
                        {project.madeAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-slate">
                        {project.techStack}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={project.github}
                          target={"_blank"}
                          rel="noreferrer"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <div className="h-6 w-6 text-green">
                            <IconExternal />
                          </div>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
