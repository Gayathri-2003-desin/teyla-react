import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import VideoBackground from "../components/Home/VideoBackground.jsx";
import About from "../components/Home/Abouts.jsx";
import ImageSlider from "../components/Home/ImageSlider.jsx";
import Kerala from "../components/Home/Kerala.jsx";
import Ayurveda from "../components/Home/Ayurveda.jsx";
import Popular from "../components/Home/Popular.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: false,     // animation repeats when scrolling
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className="home ">

        <div data-aos="fade-up">
          <VideoBackground />
        </div>



<div className="bg-[#B8B8B8] space-y-20 py-20">





        <div data-aos="fade-up">
          <About />
        </div>

        <div data-aos="fade-up">
          <ImageSlider />
        </div>

</div>

        <div data-aos="fade-up">
          <Ayurveda />
        </div>

        <div data-aos="fade-up">
          <Kerala />
        </div>

        <div data-aos="fade-up">
          <Popular />
        </div>

        <div data-aos="fade-up">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;
