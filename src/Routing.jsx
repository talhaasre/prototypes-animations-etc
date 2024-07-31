import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderNew from "./components/Header/Header";
import {
  homeURL,
  privacypolicyURL,
  termsandconditionURL,
  thankyouURL,
} from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";
import Thankyoupage from "./pages/Thankyou/Thankyou";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const Routing = () => {
  return (
    <>
      <HeaderNew />
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
        <Route path={termsandconditionURL} element={<TermsAndConditions />} />
        <Route path={privacypolicyURL} element={<PrivacyPolicy />} />
        <Route path={thankyouURL} element={<Thankyoupage />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
