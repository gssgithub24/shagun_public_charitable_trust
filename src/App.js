import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Home/Banner/Banner";
import { useState } from "react";
import Project from "./Components/Home/Projects/Project";
import Aboutus from "./Components/Home/About/Aboutus";
import Welfare from "./Components/Home/Welfare/Welfare";
import Donate from "./Components/Home/Donate/Donate";
import Certificate from "./Components/Home/Certificate/Certificate";
function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="z-30 w-screen absolute top-0">
          <Header color={color} />
        </div>
        <div className="-z-10">
          <Banner />
        </div>
        <div>
          <Project/>
        </div>
        <div>
          <Aboutus/>
        </div>
        <div>
          <Welfare/>
        </div>
        <div>
          <Donate/>
        </div>
        <div>
          <Certificate/>
        </div>
        <Footer />

     
      </div>
    </>
  );
}

export default App;
