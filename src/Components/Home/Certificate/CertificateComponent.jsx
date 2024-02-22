import React from 'react'
import img from '../../../Assets/Images/Certificate.png'
const CertificateComponent = () => {
  return (
    <div className=" mx-auto w-[90%] md:w-[85%] xl:w-[90%] rounded-lg shadow-xl  bg-white bg-opacity-70 flex flex-col  my-10 transform transition-transform hover:scale-105 duration-500">
      <div className="h-[60%] w-full bg-white rounded-lg">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4">
        <p className="font-bold font-roboto text-xl md:text-2xl xl:text-2xl">Certificate Title Here</p>
        <p className="font-roboto text-sm md:text-base xl:text-base  py-4 ">
          Project description Here. Project description Here. Project
          description Here. Project description Here. Project description Here.
          Project description Here.
        </p>
      </div>
    </div>
  );
}

export default CertificateComponent