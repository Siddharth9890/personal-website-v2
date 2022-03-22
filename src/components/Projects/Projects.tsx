import Fade from "react-reveal/Fade";
import { IconExternal, IconGitHub } from "../../assets/icons";

function Projects() {
  return (
    <section id="projects" className="py-12 bg-navy overflow-hidden lg:py-12">
      <Fade bottom>
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
              03 Some Things I’ve Built
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

                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightestSlate">
                      Data structures and algorithm tracker
                    </h2>
                    <p className="mt-4 text-lg text-lightSlate">
                      Take your data structures and algorithms skills to next
                      level with revision features.
                    </p>
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
                        href="https://cs-tracker.pages.dev/"
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
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={require("../../assets/cs-tracker.png")}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="lg:mx-auto pt-16 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="mt-12  sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full  rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={require("../../assets/start-web-app.png")}
                    alt="Inbox user interface"
                  />
                </div>
              </div>

              <div className="px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"></span>
                  </div>
                  <div className=" mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightestSlate">
                      Start web app
                    </h2>
                    <p className="mt-4 text-lg text-lightSlate">
                      It is a simpler way to create all your apps using react
                      and node. It's simple cli to manage all your project
                      installations. There are starter options given to start
                      with😊.
                    </p>
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
      </Fade>
    </section>
  );
}
export default Projects;
