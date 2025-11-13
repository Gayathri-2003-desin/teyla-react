
import React from "react";
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import VideoBackground from "../components/Home/VideoBackground.jsx";
import Where from "./Where.jsx";
import Experience from "./Experience.jsx";
import About from "../components/Home/Abouts.jsx";
import ImageSlider from "../components/Home/ImageSlider.jsx";
import Kerala from "../components/Home/Kerala.jsx";
import Ayurveda from "../components/Home/Ayurveda.jsx";
import Popular from "../components/Home/Popular.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>  
   <div className="home">
       <VideoBackground />
        
     <About/>
     <ImageSlider/>
     <Ayurveda/>
     <Kerala/>
     <Popular/>
    <Footer/>
     </div>
    </>
  );
}

export default App;