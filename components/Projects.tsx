import Image from "./Image";
import { IconExternal, IconGitHub } from "../public/assets/icons";
import GraphQLSDKGenerator from "../public/assets/image.png";
import CodingMachine from "../public/assets/coding-machine.png";

function Projects() {
  return (
    <section id="projects" className="py-12 bg-navy overflow-hidden lg:py-12">
      <div className="relative animate-fade-in-down max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-lightest-slate sm:text-4xl">
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
                  <div className="py-10 px-6 bg-light-navy hover:bg-lightest-navy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightest-slate">
                      GraphQL SDK Generator.
                    </h2>
                    <p className="mt-4 text-lg text-light-slate">
                      The GraphQL SDK Generator converts GraphQL schemas into
                      JavaScript or TypeScript code, enabling smooth
                      autocomplete and validation for your GraphQL queries.
                    </p>
                    <p className="text-xl font-thin tracking-tight text-light-slate">
                      NODE.JS TYPESCRIPT GRAPHQL CLI.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://github.com/Siddharth9890/graphql-sdk-generator"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex mr-3 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightest-slate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconGitHub />
                      </div>
                    </a>
                    <a
                      href="https://www.npmjs.com/package/graphql-sdk-generator"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightest-slate bg-indigo-600 hover:bg-indigo-700"
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
                  src={GraphQLSDKGenerator}
                  alt="graphql-sdk-generator"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto pt-16 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-40 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full  rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={CodingMachine}
                  alt="coding-machine-image"
                />
              </div>
            </div>

            <div className="px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="">
                  <p className="text-xl font-thin mb-2 tracking-tight text-green">
                    Featured Project
                  </p>
                  <div className="py-10 px-6 bg-light-navy hover:bg-lightest-navy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-lightest-slate">
                      Coding Machine.
                    </h2>
                    <p className="mt-4 text-lg text-light-slate">
                      Coding machine a online editor to run programs aka
                      LeetCode engine.
                    </p>
                    <p className="text-xl font-thin tracking-tight text-light-slate">
                      REACT NODE.JS TYPESCRIPT DOCKER SQS AWS.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://github.com/Siddharth9890/coding-machine-frontend"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex mr-3 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightest-slate bg-indigo-600 hover:bg-indigo-700"
                    >
                      <div className="h-6 w-6">
                        <IconGitHub />
                      </div>
                    </a>
                    <a
                      href="https://coding-machine.pages.dev/"
                      target={"_blank"}
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-lightest-slate bg-indigo-600 hover:bg-indigo-700"
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
