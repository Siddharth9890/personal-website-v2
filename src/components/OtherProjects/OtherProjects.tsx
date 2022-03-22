import Fade from "react-reveal/Fade";
import { IconExternal, IconGitHub } from "../../assets/icons";

const projects = [
  {
    name: "All in One",
    role: "MERN STACK",
    description:
      "Convert images,Compress Images, download youtube videos. We have got you covered. Build using react and nodejs",
    githubUrl: "https://github.com/Siddharth9890/all-in-one",
    websiteUrl: "https://all-in-one.pages.dev/",
  },
  {
    name: "Admin Panel",
    role: "REACT",
    description:
      "A simple admin panel to view recent activities about projects like monitoring stuff",
    githubUrl: "https://github.com/Siddharth9890/admin-panel",
    websiteUrl: "https://admin-panel-all-in-one.pages.dev/",
  },
  {
    name: "Memory game",
    role: "REACT",
    description: "A simple memory game made in react",
    githubUrl: "https://github.com/Siddharth9890/memory-game",
    websiteUrl: "https://memory-game-djh.pages.dev/",
  },
];

function OtherProducts() {
  return (
    <div className="bg-navy">
      <Fade bottom>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
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
                  className="py-10 px-6 bg-lightNavy hover:bg-lightestNavy text-center rounded-lg xl:px-10 xl:text-left"
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
                        <p className="text-lightSlate">{project.role}</p>
                        <p className="text-slate">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default OtherProducts;
