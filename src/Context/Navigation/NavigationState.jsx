import React, { useState } from "react";
import NavigationContext from "./NavigationContext";
import { useNavigate } from "react-router-dom";

const NavigationState = ({ children }) => {
  const [aboutSection, setAboutSection] = useState(false);
  const [projectSection, setProjectSection] = useState(false);
  const [donateSection, setDonateSection] = useState(false);
  const openaboutSection = () => {
    setAboutSection(true);
  };
  const closeaboutSection = () => {
    setAboutSection(false);
  };
  const openprojectSection = () => {
    setProjectSection(true);
  };
  const closeprojectSection = () => {
    setProjectSection(false);
  };
  const opendonateSection = () => {
    setDonateSection(true);
  };
  const closedonateSection = () => {
    setDonateSection(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        aboutSection,
        openaboutSection,
        closeaboutSection,
        projectSection,
        openprojectSection,
        closeprojectSection,
        donateSection,
        opendonateSection,
        closedonateSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
