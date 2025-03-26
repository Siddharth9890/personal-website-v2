import { useState } from "react";
import Timeline from "./TimeLine";

// TODO ADD DIFFERENT COLOR TO BULLET POINTS and add company links
const masterDetails = [
  "Savitribai Phule Pune University (VIIT).",
  "Completed Masters in Computer Science from VIIT College.",
  "Grade: 9.33 CGPA",
];

const bachelorsDetails = [
  "Savitribai Phule Pune University (Nowrosjee Wadia College).",
  "Completed Bachelors in Computer Science from Nowrosjee Wadia College.",
  "Grade: 9.45 CGPA",
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
  "Built backend API boosting performance by 20% through dedicated file server and reducing build time by 30%",
  "Transformed monolithic backend into microservices architecture for improved efficiency",
  "Developed Chrome extension enabling easy image saving to the application’s asset library",
  "Optimized database performance through query refinement and proper indexing",
];

const gatewayDetails = [
  "Reduced AWS infrastructure costs by $500+ monthly through serverless architecture implementation and resource optimization",
  "Optimized CSV parser to process 300k values in under 10 seconds using streaming techniques",
  "Redesigned TypeScript SDK reducing installation size by 82% (300MB to 54MB); extended to Go and Rust platforms with Swagger generation",
  "Developed RESTful APIs using Golang with Swagger documentation, improving system scalability and performance",
  "Created proof-of-concept applications and implemented smart contracts according to business requirements",
];

function Experience() {
  const [experienceToggle, setExperienceToggle] = useState(true);

  const experienceDetails = [
    {
      name: "Software Engineer @Gateway",
      timeFrame: "Feb 2023 - April 2025",
      details: gatewayDetails,
    },
    {
      name: "Full Stack Developer(Internship) @Project 28",
      timeFrame: "Aug 2022 - Dec 2022",
      details: project28Details,
    },
  ];

  const educationDetails = [
    {
      name: "Masters of Computer Science",
      timeFrame: "Oct 2022 - Jul 2024",
      details: masterDetails,
    },
    {
      name: "Bachelors of Computer Science",
      timeFrame: "Jun 2019 - Oct 2022",
      details: bachelorsDetails,
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
