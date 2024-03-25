import { useState } from "react";
import Timeline from "./TimeLine";

// TODO ADD DIFFERENT COLOR TO BULLET POINTS and add company links
const masterDetails = [
  "Pune University (VIIT).",
  "Currently Pursing Bachelors in Computer Science from VIIT College.",
  "Average CGPA: 9.10",
];

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
  "Built and managed the complete backend API, boosting performance by 20% through dedicated server for file functions. And reduced backend build time by roughly 30%.",
  "Transformed the backend into microservices for improved efficiency.",
  "Created a Chrome extension for easy image saving to the app's asset library.",
  "Improved data retrieval and processing efficiency by optimizing database queries using indexes.",
  "Optimized database queries using limit.",
  "Successfully resolved frontend issues for a smoother user experience.",
];

const gatewayDetails = [
  "Achieved lightning-fast data parsing, processing 300k values in under 10 seconds by changing the CSV file parser and using streams.",
  "Added indexes for a 35% performance improvement.",
  "Introduced tab routes and boosted tracking efficiency by an impressive 80%.",
  "Working on a npm package i.e SDK to enhance accessibility and usability.",
  "Fixed 100+ bugs on backend GraphQL API.",
];

function Experience() {
  const [experienceToggle, setExperienceToggle] = useState(true);

  const experienceDetails = [
    {
      name: "Software Engineer @Gateway",
      timeFrame: "February 2023 - Present",
      details: gatewayDetails,
    },
    {
      name: "Full Stack Developer(Internship) @Project 28",
      timeFrame: "August 2022 - Jan 2023",
      details: project28Details,
    },
  ];

  const educationDetails = [
    {
      name: "Masters of Computer Science",
      timeFrame: "October 2022 - Present",
      details: masterDetails,
    },
    {
      name: "Bachelors of Computer Science",
      timeFrame: "June 2019 - October 2022",
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

  return (
    <>
      <section id="experience" className="bg-navy">
        <h2 className="text-center animate-fade-in-down text-3xl pb-12 leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
          02. Work Experience && Education
        </h2>
        <div className="mx-auto flex justify-around rounded-md shadow">
          <button
            onClick={() => {
              setExperienceToggle(!experienceToggle);
            }}
            className="bg-white border border-transparent rounded-md shadow px-3 py-1 inline-flex items-center text-base font-medium text-#5cf6d2 hover:bg-[#5cf6d2]"
          >
            View {experienceToggle ? "Education" : "Industry Experience"}
          </button>
        </div>
        <div className="w-full max-w-3xl mx-auto flex justify-around items-stretch px-2  sm:px-0">
          {experienceToggle ? (
            <Timeline steps={experienceDetails} />
          ) : (
            <Timeline steps={educationDetails} />
          )}
        </div>
      </section>
    </>
  );
}

export default Experience;
