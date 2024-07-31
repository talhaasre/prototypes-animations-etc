import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { homeURL } from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default Routing;
