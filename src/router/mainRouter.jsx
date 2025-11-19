import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Where from "../pages/Whereto.jsx";
import Experience from "../pages/Experiences.jsx";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/where" element={<Where />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default MainRouter;
