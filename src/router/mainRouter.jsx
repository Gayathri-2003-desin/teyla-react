import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Where from "../pages/Where.jsx";
import Experience from "../pages/Experience.jsx";

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
