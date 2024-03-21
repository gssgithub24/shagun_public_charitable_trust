import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import NavigationContext from "../../Context/Navigation/NavigationContext";
import { useLocation, useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";
function Footer({ scrollToAboutUs, scrollToProject ,scrollToDonate}) {
  const navigate = useNavigate();
  const { openaboutSection, openprojectSection ,opendonateSection} =
    useContext(NavigationContext);
  const location = useLocation();
  const scrollToAbout = () => {
    if (location.pathname === "/") {
      scrollToAboutUs();
    } else {
      navigate("/");
      openaboutSection();
    }
  };
  const scrollToProjectSection = () => {
    if (location.pathname === "/") {
      scrollToProject();
    } else {
      navigate("/");
      openprojectSection();
    }
  };
  const scrollToDonateSection = () => {
    if (location.pathname === "/") {
      scrollToDonate();
    } else {
      navigate("/");
      opendonateSection();
    }
  };
  return (
    <footer className="bg-black w-full ">
      <div className="flex flex-col md:flex-row xl:flex-row text-gray-300 justify-between py-14 px-8 md:px-16 xl:px-16 font-roboto text-sm xl:text-base">
        <div className="pt-10 md:pt-0 xl:pt-0">
          <p className="font-bold">Contact Us</p>
          <div className="mt-5  flex flex-col gap-2 text-gray-400">
            <a
              href="https://wa.me/8879685345"
              className="hover:text-orange-500"
            >
              8879685345
            </a>
            <a
              href="mailto:ngoshagun@gmail.com"
              className="hover:text-orange-500"
            >
              ngoshagun@gmail.com
            </a>
            <a
              href="mailto:ganga.sagar@gmail.com"
              className="hover:text-orange-500"
            >
              ganga.sagar@gmail.com
            </a>
          </div>
        </div>
        <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
          <p>About</p>
          <div className="mt-5  flex flex-col gap-2 text-gray-400">
            <div
              className="hover:text-orange-500 cursor-pointer"
              onClick={scrollToAbout}
            >
              Charity
            </div>
            <a href="/trusteeMember" className="hover:text-orange-500">
              Our Team
            </a>
            <a href="/futureprojects" className="hover:text-orange-500">
              Future Projects
            </a>
            <div
              className="hover:text-orange-500 cursor-pointer "
              onClick={scrollToProjectSection}
            >
              Acommplished Projects
            </div>
          </div>
        </div>
        <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
          <p>Quick Link</p>
          <div className="mt-5 flex flex-col gap-2 text-gray-400">
            <div
              onClick={scrollToDonateSection}
              className="hover:text-orange-500 cursor-pointer"
            >
              Donate Now
            </div>
            <a href="/trusteeRegister" className="hover:text-orange-500">
              Become a volunteer
            </a>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
          </div>
        </div>
        <Newsletter/>
      </div>
    </footer>
  );
}

export default Footer;
