import React from "react";
import Navbar from "./components/Navbar.jsx";          
import VideoBackground from "./components/Home/VideoBackground.jsx";
// import About from "./components/Home/About.jsx";              
// import Where from "./pages/Whereto.jsx";                        
// import Experience from "./pages/Experiences.jsx";  
import RegisterForm from "./pages/RegisterForm.jsx";
import ConsultForm from "./pages/ConsultForm.jsx";
import Experiences from "./pages/Experiences.jsx";
import Where from "./pages/Whereto.jsx";
import MainRouter from "../src/router/mainRouter.jsx"
import Home from "./pages/Home.jsx"
import { BrowserRouter } from "react-router-dom";
import './index.css'  


function App() {
  return (
    <>
  
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <VideoBackground /> */}     
      <MainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
