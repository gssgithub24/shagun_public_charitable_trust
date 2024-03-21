import React, { useContext, useEffect, useRef, useState } from "react";
import Project from "./Projects/Project";
import Aboutus from "./About/Aboutus";
import Welfare from "./Welfare/Welfare";
import Donate from "./Donate/Donate";
import Certificate from "./Certificate/Certificate";
import Banner from "./Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ListedDonationPage from "../../Pages/ListedDonationpage/ListedDonationPage";
import { HashLoader } from "react-spinners";
import LoadContext from "../../Context/LoadingAnimation/LoadingContext";
import NavigationContext from "../../Context/Navigation/NavigationContext";
const Home = () => {
  const [color, setColor] = useState("white");
  const { homeLoad } = useContext(LoadContext);
  const {
    aboutSection,
    closeaboutSection,
    projectSection,
    closeprojectSection,
    donateSection,
    closedonateSection,
  } = useContext(NavigationContext);
  const aboutUsRef = useRef();
  const projectRef = useRef();
  const donateRef = useRef();

  const scrollAbout = () => {
    if (aboutSection === true) {
      if (aboutUsRef.current) {
        aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
        closeaboutSection();
      }
    }
  };
  useEffect(() => scrollAbout(), []);
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollProject = () => {
    if (projectSection === true) {
      if (projectRef.current) {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        closeprojectSection();
      }
    }
  };
  useEffect(() => scrollProject(), []);
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollDonate = () => {
    if (donateSection === true) {
      if (donateRef.current) {
        donateRef.current.scrollIntoView({ behavior: "smooth" });
        closedonateSection();
      }
    }
  };
  useEffect(() => scrollDonate(), []);
  const scrollToDonate = () => {
    if (donateRef.current) {
      donateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="z-30 w-screen absolute top-0">
          <Header
            color={color}
            scrollToAboutUs={scrollToAboutUs}
            scrollToDonate={scrollToDonate}
          />
        </div>
        <div className="-z-10">
          <Banner />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={aboutUsRef}>
          <Aboutus />
        </div>
        <div>
          <Welfare />
        </div>
        <div ref={donateRef}>
          <Donate />
        </div>
        <div>
          <Certificate />
        </div>
        {homeLoad && (
          <div className=" inset-0 bg-opacity-65 w-full h-full fixed flex justify-center items-center bg-black">
            <HashLoader color="#eb9126" />
          </div>
        )}
        <Footer
          scrollToAboutUs={scrollToAboutUs}
          scrollToProject={scrollToProject}
          scrollToDonate={scrollToDonate}
        />
      </div>
    </>
  );
};

export default Home;
