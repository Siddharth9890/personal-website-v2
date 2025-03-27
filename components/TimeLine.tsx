import React from "react";

const Timeline = ({
  steps,
}: {
  steps: {
    name: string;
    timeFrame: string;
    details: string[];
  }[];
}) => {
  return (
    <ul role="list" className="m-8 max-w-screen-md">
      {steps.map((step, index) => (
        <li
          key={index}
          className="group relative flex flex-col pb-6 pl-7 last:pb-0"
        >
          <div className="absolute bottom-0 left-[calc(0.5rem-0.5px)] top-0 w-px bg-white group-first:top-3"></div>
          <div className="absolute left-0  top-2 h-4 w-4  rounded-full border border-green bg-green"></div>
          <h3 className="mt-1 mb-1.5 text-xl order-first font-semibold text-lightSlate">
            {step.name}
          </h3>
          <p className="font-display text-sm mb-2 text-lightSlate">
            <time dateTime={step.timeFrame}>{step.timeFrame}</time>
          </p>
          {step.details.map((detail, index) => (
            <p key={index} className="mt-0.5 text-xl text-lightSlate">
              - {detail}
            </p>
          ))}
          {/* TODO ADD OPTION TO DOWNLOAD OFFER LETTER AND FINAL LETTER */}
          {/* <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              className="w-3.5 h-3.5 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>{" "}
            Download ZIP
          </a> */}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
