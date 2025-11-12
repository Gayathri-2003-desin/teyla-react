
import React from "react";
import './home.css';
import Navbar from "../components/Navbar.jsx";
import VideoBackground from "../components/Home/VideoBackground.jsx";
import Where from "./Where.jsx";
import Experience from "./Experience.jsx";
import About from "../components/Home/about.jsx";
import ImageSlider from "../components/Home/ImageSlider.jsx";
import Kerala from "../components/Home/kerala.jsx"; 
import Ayurveda from "../components/Home/ayurveda.jsx";
import Popular from "../components/Home/Popular.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>  
   
       <VideoBackground />
        <div className="home">
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