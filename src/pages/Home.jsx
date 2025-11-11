
import React from "react";
import './home.css';
import Navbar from "../components/Navbar.jsx";
import VideoBackground from "../components/Home/VideoBackground.jsx";
import Where from "./Where.jsx";
import Experience from "./Experience.jsx";
import About from "../components/Home/about.jsx";
import ImageSlider from "../components/Home/ImageSlider.jsx";
 

function App() {
  return (
    <>  
   
       <VideoBackground />
        <div className="home">
     <About/>
     <ImageSlider/>
     </div>
    </>
  );
}

export default App;