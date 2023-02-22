import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

const bachelorsDetails = [
  "Pune University (Nowrosjee Wadia College).",
  "Completed Bachelors in Computer Science from Nowrosjee Wadia College.",
  "Final Percentage: 89.59%",
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

const project28Details = [
  "Implementing micro-services to convert the whole backend to various services.",
  "Build the whole backend API for the company.And improved the performance of backend by 20%.",
  "Improved the build time of backend by 30%.",
  "Build a chrome extension which helps users to save the images which users download in asset library page on their application.",
  "Optimized database queries using limit.",
  "Fixed lots of bugs in frontend application.",
];

const gatewayDetails = [
  "Working as Junior Full Stack Web Developer fixing bugs and implementing new features",
];

function Experience() {
  const [details, setDetails] = useState([
    {
      name: "Junior Full Stack Web Developer @Gateway",
      timeFrame: "February 2023 - Present",
      details: gatewayDetails,
      selected: true,
    },
    {
      name: "Full Stack Web Developer(Internship) @Project 28",
      timeFrame: "August 2022 - Jan 2023",
      details: project28Details,
      selected: false,
    },
    {
      name: "Bachelors of Computer Science",
      timeFrame: "June 2021 - October 2022",
      details: bachelorsDetails,
      selected: false,
    },
    {
      name: "12th - Science",
      timeFrame: "2017 - 2019",
      details: collegeDetails,
      selected: false,
    },
    {
      name: "10th - Boards",
      timeFrame: "2017",
      details: schoolDetails,
      selected: false,
    },
  ]);

  const updateDetails = (index: number) => {
    const t = [...details];
    t.map((s) => (s.selected = false));
    t[index].selected = true;
    setDetails(t);
  };

  return (
    <>
      <section id="education" className="bg-navy">
        <h2 className="text-center animate-fade-in-down text-3xl pb-12 leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
          02. Work Experience/Education
        </h2>
        <div className="w-full max-w-3xl mx-auto flex   justify-around items-stretch px-2  sm:px-0">
          <ul role="list" className="divide-y divide-gray-200">
            {details.map((activity, index) => (
              <li
                key={index}
                onClick={(e) => updateDetails(index)}
                className="py-4 px-4 border-0 hover:cursor-pointer hover:border-2 hover:border-green/[0.24] hover:text-white hover:rounded-xl "
              >
                <div className="flex space-x-3 ">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-lightSlate">
                        {activity.name}
                      </h3>
                      <p className="text-sm text-white"></p>
                    </div>
                    <p className="text-sm text-lightSlate">
                      {activity.timeFrame}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="overflow-hidden mx-5 shadow border-2 border-green sm:rounded-lg">
            <div className="">
              <dl>
                {details.map(
                  (details) =>
                    details.selected &&
                    details.details.map((d) => (
                      <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          <ChevronRightIcon className="h-6 w-6 text-green" />
                        </dt>
                        <dd className="mt-1 text-sm text-green sm:col-span-2 sm:mt-0">
                          {d}
                        </dd>
                      </div>
                    ))
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
