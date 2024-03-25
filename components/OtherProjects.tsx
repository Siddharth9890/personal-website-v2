import { useRouter } from "next/router";
import { IconExternal, IconGitHub } from "../public/assets/icons";

const projects = [
  {
    name: "Start web app",
    techStack: "Node.js Cli Package Npmjs",
    githubUrl: "https://github.com/Siddharth9890/start-web-app",
    websiteUrl: "https://www.npmjs.com/package/start-web-app",
  },
  {
    name: "Eazy Challenges Solution's",
    techStack: "NEXT.JS",
    description: "All the solutions for the challenges taken by Shrey Batra.",
    githubUrl: "https://github.com/Siddharth9890/eazy-challenges-solutions",
    websiteUrl: "https://eazy-challenges-solutions.vercel.app",
  },
  {
    name: "Memory game",
    techStack: "REACT",
    description: "A simple memory game made in react with score.",
    githubUrl: "https://github.com/Siddharth9890/memory-game",
    websiteUrl: "https://memory-game-djh.pages.dev/",
  },
];

function OtherProjects() {
  const router = useRouter();
  return (
    <div className="bg-navy">
      <div className="mx-auto animate-fade-in-down pb-12 px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
              Other Noteworthy Projects
            </h2>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {projects.map((project) => (
              <li
                key={project.name}
                className="py-10 px-6 bg-lightNavy hover:bg-lightestNavy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <div className="flex flex-row justify-between ">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green hover:text-gray-300"
                    >
                      <div className="h-6 w-6">
                        <IconGitHub />
                      </div>
                    </a>
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green hover:text-gray-300"
                    >
                      <div className="h-6 w-6">
                        <IconExternal />
                      </div>
                    </a>
                  </div>
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-lightestSlate">{project.name}</h3>
                      <p className="text-slate">{project.description}</p>
                      <p className="text-lightSlate pt-10">
                        {project.techStack}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => router.push("/projects")}
                className="mt-5 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-#5cf6d2 hover:bg-[#5cf6d2]"
              >
                View Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OtherProjects;
