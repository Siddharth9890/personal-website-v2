import Image from "./Image";
import { IconExternal, IconGitHub } from "../public/assets/icons";
import CsTracker from "../public/assets/cs-tracker.png";
import StartWebApp from "../public/assets/start-web-app.png";

function Projects() {
  return (
    <section id="projects" className="py-12 bg-navy overflow-hidden lg:py-12">
      <div className="relative animate-fade-in-down max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
            03. Some Things I’ve Built
          </h2>
        </div>
      </div>
      <div className="relative bg-navy pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center "></span>
                </div>

                <div className="">
                  <p className="text-xl font-thin mb-2 tracking-tight text-green">
                    Featured Project
                  </p>
                  <div className="py-10 px-6 bg-lightNavy hover:bg-lightestNavy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightestSlate">
                      Data structures and algorithm tracker
                    </h2>
                    <p className="mt-4 text-lg text-lightSlate">
                      Take your data structures and algorithms skills to next
                      level with revision features.
                    </p>
                    <p className="text-xl font-thin tracking-tight text-lightSlate">
                      Node.js React Data-Structures Algorithms Tailwind
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://github.com/Siddharth9890/cs-tracker-fontend"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightestSlate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconGitHub />
                      </div>
                    </a>
                    <a
                      href="https://cs-tracker.vercel.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightestSlate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconExternal />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={CsTracker}
                  alt="cs-tracker"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto pt-16 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="mt-12  sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full  rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={StartWebApp}
                  alt="start-web-app"
                />
              </div>
            </div>

            <div className="px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"></span>
                </div>
                <div className="">
                  <p className="text-xl mb-2 font-thin tracking-tight text-green">
                    Featured Project
                  </p>
                  <div className="py-10 px-6 bg-lightNavy hover:bg-lightestNavy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightestSlate">
                      Start web app
                    </h2>
                    <p className="mt-4 text-lg text-lightSlate">
                      It is a simpler way to create all your apps using react
                      and node. It is simple cli to manage all your project
                      installations. There are starter options given to start
                      with😊.
                    </p>
                    <p className="text-xl font-thin tracking-tight text-lightSlate">
                      Node.js Cli Package Npmjs
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://github.com/Siddharth9890/start-web-app"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightestSlate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconGitHub />
                      </div>
                    </a>
                    <a
                      href="https://www.npmjs.com/package/start-web-app"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightestSlate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconExternal />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
