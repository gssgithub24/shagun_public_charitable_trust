import React ,{useEffect,useState}from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificateComponent from "./CertificateComponent";
const Certificate = () => {
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
  };
  return (
    <div className="xl:min-h-screen h-full py-10">
      <div className="flex flex-col items-center gap-10 font-roboto text-3xl   font-bold pt-16">
        <p className="text-center">Highlighting Our Achievements</p>
        <p className="text-sm px-4 xl:text-lg font-medium font-roboto text-center">
          Step into the world of our charitable trust's achievements through our
          Certification Showcase. Each certificate is a testament to our
          commitment to making a positive impact. Join us in celebrating the
          milestones that fuel our dedication to creating a better world through
          charitable endeavors.
        </p>
      </div>

      <div className="xl:px-16 xl:mx-20 h-[30rem]">
        <Slider {...settings} className="">
          {[...Array(9)].map((_, index) => (
            <CertificateComponent key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificate;
