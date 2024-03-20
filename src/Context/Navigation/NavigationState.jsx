import React, { useState } from "react";
import NavigationContext from "./NavigationContext";
import { useNavigate } from "react-router-dom";


const NavigationState = ({ children }) => {

  const [aboutSection, setAboutSection] = useState(false);
  const openaboutSection = () => {
    setAboutSection(true);
  };
  const closeaboutSection = () => {
    setAboutSection(false);
  };


  return (
    <NavigationContext.Provider
      value={{
        aboutSection,
        openaboutSection,
        closeaboutSection,
        
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
