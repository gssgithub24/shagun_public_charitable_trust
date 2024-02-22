import React from "react";
import logo from "../../Assets/Images/SPCT Logo.png";
import Headercomponent from "./Headercomponent";
function Header({ color }) {
  console.log(color);
  return (
    <header className="w-full h-11 sticky top-0 bg-transparent">
      <div
        className={`flex my-4 px-8 justify-between items-center ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <div className="hover:scale-125 transition-all transform duration-[1500ms]">
          <img src={logo} alt="" width={100} />
        </div>


        <div className="flex gap-10 font-sans items-center ">
          <Headercomponent text={"Home"} />
          <Headercomponent text={"About"} />
          <Headercomponent text={"News"} />
          <Headercomponent text={"Join us"} />
          <Headercomponent text={"Donate"} />

          <a
            href="#_"
            className="relative inline-flex items-center justify-center  p-2 px-4 py-1 overflow-hidden font-medium text-orange-600 rounded-3xl shadow-2xl group hover:scale-105 transition ease-in-out duration-500"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-600 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-600 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Start a fundraise</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
