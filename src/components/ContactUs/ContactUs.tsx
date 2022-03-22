import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

const supportLinks = [
  {
    name: "Email Me!",
    href: "mailto:siddharth.a9890@gmail.com",
    icon: PhoneIcon,
  },
  {
    name: "Whatsapp Me!",
    href: "https://api.whatsapp.com/send?phone=+917507294460",
    icon: SupportIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/siddharth-singh-563824202/",
    icon: NewspaperIcon,
  },
];

function ContactUs() {
  return (
    <section id="contact" className="bg-navy ">
      <Fade bottom>
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-lightestSlate sm:text-4xl">
            05 Contact Me
          </h2>
          <p className="text-center text-lightSlate">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you.
          </p>
          <p className="text-center text-lightSlate pb-10">
            You can select these three social media platforms to directly contact me.
          </p>
        </div>
        <main>
          <div className="bg-navy  ">
            <section
              className=" max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
              aria-labelledby="contact-heading"
            >
              <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {supportLinks.map((link) => (
                  <div
                    key={link.name}
                    className="flex flex-col hover:bg-lightestNavy  bg-lightNavy rounded-2xl shadow-xl"
                  >
                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                      <div className="absolute top-0 p-5 inline-block bg-navy rounded-xl shadow-lg transform -translate-y-1/2">
                        <link.icon
                          className="h-6 w-6 text-slate"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-lightestSlate">
                        {link.name}
                      </h3>
                    </div>
                    <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                      <a
                        href={link.href}
                        target={"_blank"}
                        rel="noreferrer"
                        className="text-base font-medium text-green "
                      >
                        Say Hi!<span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </Fade>
    </section>
  );
}
export default ContactUs;
