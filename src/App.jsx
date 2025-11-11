import React from "react";
import Navbar from "./components/Navbar.jsx";          
import VideoBackground from "./components/Home/VideoBackground.jsx";
import About from "./components/Home/About.jsx";              
import Where from "./pages/Where.jsx";                        
import Experience from "./pages/Experience.jsx";  
import MainRouter from "./Router/mainRouter";
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
