import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectComponent from "./ProjectComponent";

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setDeviceType("Mobile");
      } else if (width <= 1024) {
        setDeviceType("Tablet");
      } else {
        setDeviceType("PC");
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    slidesToShow: deviceType === "PC" ? 3 : deviceType === "Tablet" ? 2 : 1,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="min-h-screen ">
      <div className="flex  mx-auto justify-center font-roboto text-4xl font-bold my-8">
        Our Projects
      </div>
      <div className="xl:px-16 xl:mx-20 mt-40 h-[30rem]">
        <Slider {...settings} className="">
          {[...Array(9)].map((_, index) => (
            <ProjectComponent key={index} className="hover:scale-110" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Project;
