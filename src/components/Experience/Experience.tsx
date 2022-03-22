import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Stepper, Step } from "@mantine/core";
const steps = [
  "Bachelors of Computer Science",
  "12th -Science",
  "10th - Boards",
];

const bachelorsDetails = [
  "Pune University (Nowrosjee Wadia College).",
  "I am currently pursing Bachelors in Computer Science from Nowrosjee Wadia College.",
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

const nextComponent = [
  <div>
    <h2 className="text-center text-xl leading-8  tracking-tight text-white">
      {steps[0]}
    </h2>
    <p className="text-center text-xl leading-8  tracking-tight text-white">
      June 2021 - Present
    </p>
    {bachelorsDetails.map((detail) => (
      <p className="pt-2">{detail}</p>
    ))}
  </div>,
  <div>
    <h2 className="text-center text-xl leading-8  tracking-tight text-white">
      {steps[1]}
    </h2>
    <p className="text-center text-xl leading-8  tracking-tight text-white">
      2017 - 2019
    </p>
    {collegeDetails.map((detail) => (
      <p className="pt-2">{detail}</p>
    ))}
  </div>,
  <div>
    <h2 className="text-center text-xl leading-8  tracking-tight text-white">
      {steps[2]}
    </h2>
    <p className="text-center text-xl leading-8  tracking-tight text-white">
      July 2019-july 2021
    </p>
    {schoolDetails.map((detail) => (
      <p className="pt-2">{detail}</p>
    ))}
  </div>,
];

function Experience() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <section id="education" className="bg-navy">
        <Fade bottom>
          <h2 className="text-center text-3xl pb-12 leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
            02 Education
          </h2>
          <div className="max-w-3xl grid grid-cols-2 mx-auto  sm:px-6 lg:px-8 bg-navy">
            <Stepper
              active={activeStep}
              onStepClick={setActiveStep}
              breakpoint="sm"
              orientation="vertical"
            >
              {steps.map((label, index) => (
                <Step key={label} loading={activeStep !== index ? true : false}>
                  <div className="text-lightestSlate ">{label}</div>
                </Step>
              ))}
            </Stepper>
            <div className="text-lightestSlate ">
              {nextComponent[activeStep]}
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}
export default Experience;
