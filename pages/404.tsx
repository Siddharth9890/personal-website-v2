import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  BookOpenIcon,
  RssIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    title: "Projects",
    description: "All the projects made by me!",
    icon: BookOpenIcon,
    href: "/#projects",
  },
  {
    title: "Contact Me",
    description: "Visit the contact page!",
    icon: ListBulletIcon,
    href: "/#contact",
  },
  {
    title: "Blog",
    description: "Read our latest news and articles",
    icon: RssIcon,
    href: "/#blog",
  },
];

export default function Page404() {
  return (
    <div className="bg-navy">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-white uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-white">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-green tracking-wide uppercase">
              Popular pages
            </h2>
            <ul role="list">
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex mt-2 mb-2 bg-lightNavy hover:bg-lightestNavy rounded-2xl shadow-2xl overflow-hidden items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                      <link.icon
                        className="h-6 w-6 text-green"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-lightSlate">
                      <span className="rounded-sm">
                        <a href={link.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-lightSlate">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-10 w-6 text-green mr-4"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
