import React from "react";
import img from "../../../Assets/svgs/Project image.svg";

function ProjectComponent({ isMiddle }) {
 

  return (
<div className="h-[32rem] mx-auto w-[90%] md:w-[85%] xl:w-[90%] rounded-lg shadow-xl  bg-white bg-opacity-70 flex flex-col  my-5 transform transition-transform hover:scale-105 duration-500">
      <div className="h-[60%] w-full bg-white rounded-lg overflow-hidden">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <p className="font-bold font-roboto text-2xl">Project Title Here</p>
        <p className="font-roboto text-base pt-4">
          Project description Here. Project description Here. Project
          description Here. Project description Here. Project description Here.
          Project description Here.
        </p>
      </div>
    </div>
  );
}

export default ProjectComponent;
