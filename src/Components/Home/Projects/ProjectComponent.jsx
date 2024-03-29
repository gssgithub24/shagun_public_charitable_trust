import React from "react";
import img from "../../../Assets/svgs/Project image.svg";
import { BiMessageSquareEdit } from "react-icons/bi";

const OurProjectsComponents = ({ data }) => {
  var i = 0;
  const limitCharacters = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="h-[25rem] mx-auto w-[21rem] md:w-[23rem] xl:w-[23rem] rounded-lg shadow-xl  bg-white bg-opacity-70 flex flex-col  my-5 transform transition-transform hover:scale-105 duration-500 relative ">
     
      <div className="h-64 w-full bg-white rounded-t-lg overflow-hidden">
        <img
          src={data?.imageUrl}
          alt=""
          className="object-cover w-full h-full rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <p className="font-bold font-roboto text-xl text-truncate">
          {data?.title}
        </p>
        <p className="font-roboto text-base pt-4">
          {limitCharacters(data?.description, 100)}
        </p>
      </div>
    </div>
  );
};

export default OurProjectsComponents;
