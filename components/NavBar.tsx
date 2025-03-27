import { Fragment } from "react";

import Image from "./Image";

import { Popover, Transition } from "@headlessui/react";
import { Bars4Icon, XCircleIcon } from "@heroicons/react/24/outline";
import ProfilePhoto from "../public/assets/ProfilePic.jpg";

const sections = [
  {
    name: "01. About",
    href: "#about",
  },
  {
    name: "02. Experience",
    href: "#experience",
  },
  {
    name: "03. Projects",
    href: "#projects",
  },
  {
    name: "04. Blog",
    href: "#blog",
  },
  {
    name: "05. Contact",
    href: "#contact",
  },
];

function NavBar() {
  return (
    <Popover className="relative bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="h-10 w-10">
              <Image src={ProfilePhoto} alt="Profile Photo" />
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars4Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {sections.map((section, index) => (
              <a
                key={index}
                href={section.href}
                className="text-base font-medium text-lightSlate hover:text-green"
              >
                {section.name}
              </a>
            ))}
            <a
              href={"/Siddharth_Singh_Resume.pdf"}
              download={true}
              className="text-base font-medium text-lightSlate hover:text-green"
            >
              Resume
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-navy divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-10 w-10 sm:h-10">
                    <Image src={ProfilePhoto} alt="Profile picture" />
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={section.href}
                    className="text-base font-medium text-lightSlate hover:text-green"
                  >
                    {section.name}
                  </a>
                ))}
                <a
                  href={"/Siddharth_Singh_Resume.pdf"}
                  download={true}
                  className="text-base font-medium  text-lightSlate hover:text-green"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default NavBar;
