import AboutMe from "./components/About/AboutMe";
import Blogs from "./components/Blog/Blogs";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./components/ContactUs/ContactUs";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import anime from "animejs";
import { IconLoader } from "./assets/icons";

function App() {
  const [Loader, setLoader] = useState(true);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => setLoader(false),
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 0,
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };
  useEffect(() => {
    animate();
  }, []);

  return Loader ? (
    <div className="flex bg-navy h-screen  justify-center items-center ">
      <div className="h-40 w-40">
        <IconLoader />
      </div>
    </div>
  ) : (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <OtherProjects />
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
