import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Pages/NotFoundPage/NotFound";
import ListedDonationPage from "./Pages/ListedDonationpage/ListedDonationPage";
import Donation from "./Pages/Donation/Donation";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import FutureprojectsPage from "./Pages/FutureProjectsPage/Futureprojects"
import TrusteeRegister from "./Pages/TrusteeRegisterPage/TrusteeRegister";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/listedDontionPage"
            element={<ListedDonationPage />}
          />
          <Route
            path="/donation"
            element={<Donation />}/>
          <Route
            path="/login"
            element={<Login />}/>
          <Route
            path="/register"
            element={<SignUp />}/>
          <Route
            path="/trusteeRegister"
            element={<TrusteeRegister />}/>
          <Route
            path="/futureprojects"
            element={<FutureprojectsPage />}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
