import Fade from "react-reveal/Fade";

function Header() {
  const primaryHeading = "Hi, my name is";
  const name = "Siddharth Singh.";
  const shortDescription = "I build things for the web.";
  const description =
    "Pursuing Graduation in Computer Science & interested in Full-Stack Software Development, AI";

  return (
    <section id="#header" className="bg-navy">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-lightNavy rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <Fade bottom>
              <div className="lg:self-center">
                <h2 className="text-xl font-extrabold text-green sm:text-xl">
                  <span className="block">{primaryHeading}</span>
                </h2>
                <h2 className="text-5xl font-extrabold text-lightestSlate sm:text-5xl">
                  <span className="block mt-2">{name}</span>
                </h2>
                <p className="mt-4 leading-6 text-3xl text-lightSlate">
                  {shortDescription}
                </p>
                <p className="mt-4 leading-6 text-xl text-lightSlate">
                  {description}
                </p>
                <a
                  href="#projects"
                  className="mt-8 bg-slate border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-#5cf6d2 hover:bg-[#5cf6d2]"
                >
                  Let's explore
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
