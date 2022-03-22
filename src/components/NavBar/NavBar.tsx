import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const sections = [
  {
    name: "01.About",
    section: "#about",
  },
  {
    name: "02.Education",
    section: "#education",
  },
  {
    name: "03.Projects",
    section: "#projects",
  },
  {
    name: "04.Blog",
    section: "#blog",
  },
  {
    name: "05.Contact",
    section: "#contact",
  },
];

function NavBar() {
  return (
    <Popover className="relative bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-8 w-auto sm:h-10"
                src={require("../../assets/ProfilePicturePhoto.jpg")}
                alt="Profile Photo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {sections.map((section) => (
              <a
                key={section.section}
                href={section.section}
                className="text-base font-medium text-lightSlate hover:text-green"
              >
                {section.name}
              </a>
            ))}
            <a
              href={require("../../assets/cv.pdf")}
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
                  <img
                    className="h-8 w-auto"
                    src={require("../../assets/ProfilePicturePhoto.jpg")}
                    alt="Profile picture"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {sections.map((section) => (
                  <a
                    key={section.section}
                    href={section.section}
                    className="text-base font-medium text-lightSlate hover:text-green"
                  >
                    {section.name}
                  </a>
                ))}
                <a
                  href={require("../../assets/cv.pdf")}
                  download={true}
                  className="text-base font-medium text-lightSlate hover:text-green"
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
