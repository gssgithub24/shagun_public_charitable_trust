import React, { useState, useEffect } from "react";
import school from "../../../Assets/Images/c1.JPG";
import college from "../../../Assets/Images/c4.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
   const settings = {
     slidesToShow: 1,
     infinite: true,
     autoplay: true,
     slidesToScroll: 1,
     autoplaySpeed: 2000,
     centerMode: true,
     centerPadding: 0,

   };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="relative">
            <img
              src={school}
              alt=""
              className="h-screen w-screen object-cover "
            />

            <div className="absolute top-0 bg-opacity-60 bg-black h-screen w-screen"></div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src={college}
              alt=""
              className="h-screen w-screen object-cover "
            />

            <div className="absolute top-0 bg-opacity-60 bg-black h-screen w-screen">
              <div className="h-full m-auto flex justify-center text-2xl text-white items-center">
                Text
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Banner;
