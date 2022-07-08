import type { NextPage } from "next";
import { useEffect, useState } from "react";

import anime from "animejs";

import { IconLoader } from "../public/assets/icons";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

import Projects from "../components/Projects";
import OtherProjects from "../components/OtherProjects";

import Blogs from "../components/Blogs";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
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
    <div className="flex bg-black h-screen justify-center items-center ">
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
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
