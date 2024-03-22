import React, { useState } from "react";
import "./App.css";
import ProjectRoutes from "./Routes/Routes";
import { IoChatboxSharp } from "react-icons/io5";
import MessageBox from "./Components/MessageBox/MessageBox";
import { RxCross1 } from "react-icons/rx";
function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="relative">
      <ProjectRoutes className="z-0" />

      <div className="fixed rounded-full p-4 bg-orange-500 z-50 bottom-10 right-10 cursor-pointer ">
        {!click ? (
          <IoChatboxSharp
            className="font-bold  text-gray-800"
            size={30}
            onClick={() => setClick(true)}
          />
        ) : (
          <RxCross1
            className="font-bold text-gray-800"
            size={30}
            onClick={() => setClick(false)}
          />
        )}{" "}
        {click && (
          <div className="absolute rounded-lg h-[35rem] overflow-y-scroll bottom-16 right-14 w-96 bg-slate-200 ">
            <MessageBox />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
