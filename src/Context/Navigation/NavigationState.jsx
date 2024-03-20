import React, { useState } from "react";
import LoadContext from "./LoadingContext";

const NavigationState = ({ children }) => {

    const aboutRef = useRef();
const navigate = useNavigate();
    const scrollToAbout = () => {
        navigate('/')
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <LoadContext.Provider value={{ aboutRef ,scrollToAbout}}>{children}</LoadContext.Provider>
  );
};

export default NavigationState;
