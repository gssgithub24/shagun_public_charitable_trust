import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Pages/NotFoundPage/NotFound";
import ListedDonationPage from "./Pages/ListedDonationpage/ListedDonationPage";
import Donation from "./Pages/Donation/Donation";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import FutureProjects from './Pages/FutureProjectsPage/FutureProjects'
import TrusteeRegister from "./Pages/TrusteeRegisterPage/TrusteeRegister";
import NewsAndUpdatesPage from "./Pages/News and Updates/NewsAndUpdate";
import AdminEditPage from "./Pages/AdminEditPage/AdminEditPage";
import Dekstop from "../src/Components/Server/Dekstop";
import PROUD_TRUSTEES_PAGE from "./Pages/trusteeMembers/trusteeMembers";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/listedDontionPage" element={<ListedDonationPage />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/trusteeRegister" element={<TrusteeRegister />} />
          <Route path="/trusteeMember" element={<PROUD_TRUSTEES_PAGE />} />
          <Route path="/futureprojects" element={<FutureProjects />} />
          <Route path="/newAndUpdates" element={<NewsAndUpdatesPage />} />
          <Route path="/edit" element={<AdminEditPage />} />
          <Route path="/dekstop" element={<Dekstop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
