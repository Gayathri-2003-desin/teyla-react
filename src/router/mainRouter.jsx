import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Where from "../pages/Whereto.jsx";
import Experience from "../pages/Experiences.jsx";
import RegisterForm from "../pages/RegisterForm.jsx";
import ConsultForm from "../pages/ConsultForm.jsx";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/where" element={<Where />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/consult" element={<ConsultForm />} />
    </Routes>
  );
}

export default MainRouter;
