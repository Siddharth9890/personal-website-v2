import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const bachelorsDetails = [
  "Pune University (Nowrosjee Wadia College).",
  "I am currently pursuing Bachelors in Computer Science from Nowrosjee Wadia College.",
  "CGPA(till 4 sem):9.6",
];

const collegeDetails = [
  "Nowrosjee Wadia College.",
  "Completed 12th class exams with a score: 79.4 %.",
];
const schoolDetails = [
  "J.N.Petit Technical High School.",
  "Completed 10th class exams with a score: 79.5 %.",
  "Perused Technical Education along with regular board exams and scored 80 % in Technical section.",
];

const education = [
  {
    name: "Bachelors of Computer Science",
    timeFrame: "June 2021 - Present",
    details: bachelorsDetails,
  },
  {
    name: "12th - Science",
    timeFrame: "2017 - 2019",
    details: collegeDetails,
  },
  {
    name: "10th - Boards",
    timeFrame: "2017",
    details: schoolDetails,
  },
];

function Experience() {
  return (
    <>
      <section id="education" className="bg-navy">
        <h2 className="text-center animate-fade-in-down text-3xl pb-12 leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
          02. Education
        </h2>
        <div className="w-full max-w-3xl mx-auto flex justify-center items-center px-2  sm:px-0">
          <Tab.Group vertical={true}>
            <Tab.List className="relative lg:pl-8 bg-navy">
              {education.map((edu) => (
                <Tab
                  key={edu.name}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-lightSlate",
                      "ring-green ring-opacity-60 ring-offset-2 ring-offset-green focus:outline-none focus:ring-2",
                      selected
                        ? "text-green shadow-xl"
                        : "hover:bg-green/[0.12] hover:text-white"
                    )
                  }
                >
                  {edu.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="ml-20 mt-2">
              {education.map((edu) => (
                <Tab.Panel key={edu.name} className={"rounded-xl bg-navy p-3"}>
                  <ul>
                    {edu.details.map((post, index) => (
                      <li key={post} className="relative rounded-md p-3">
                        {index === 0 && (
                          <h3 className="text-lg font-medium leading-5 text-green">
                            {post}
                          </h3>
                        )}
                        {index > 0 && (
                          <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-lightSlate">
                            <ChevronRightIcon className="h-6 w-6 text-green pb-1" />
                            <li>{post}</li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  );
}
export default Experience;
