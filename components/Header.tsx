import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

function Header() {
  const primaryHeading = "Hi, my name is";
  const name = "Siddharth Singh.";
  const shortDescription = "I build things for the web.";
  const description =
    "Pursuing Graduation in Computer Science & interested in Full-Stack Software Development, AI";

  return (
    <section id="#header" className="bg-navy">
      <div className="max-w-7xl mx-auto animate-fade-in-up py-12 px-4 sm:px-6 lg:px-8">
        <div className="py-10 px-6 bg-lightNavy hover:bg-lightestNavy text-center rounded-2xl shadow-2xl xl:px-10 xl:text-left">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-xl font-extrabold text-white sm:text-xl">
                <span className="block">{primaryHeading}</span>
              </h2>
              <h2 className="text-5xl font-extrabold text-white sm:text-5xl">
                <span className="block mt-2">{name}</span>
              </h2>
              <p className="mt-4 leading-6 text-3xl text-green">
                {shortDescription}
              </p>
              <p className="mt-4 leading-6 text-xl text-green">{description}</p>
              <a
                href="#projects"
                className="mt-8 bg-lightSlate border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-#5cf6d2 hover:bg-[#5cf6d2]"
              >
                <ChevronDoubleDownIcon className="h-6 w-6 text-navy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
