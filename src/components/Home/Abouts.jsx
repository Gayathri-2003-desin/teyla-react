import React from "react";
import "./About.css";

function About() {
    
  return (
    <>
    
<div className="about-wrap">
      <div className="wrap-two">
        <div className="heading">
        <div className="teys">
          <img src="images/teys.png" alt="Teyla" />
        </div>

        <div className="teyla-head">
          <h1>
            Teyla means peaceful journey
          </h1>
        </div>
        </div>
    
<div className="teyla-flex">
  <div className="beach">
    <img className="sea" src="images/coffee.jpg" alt="drinks" />
    <img className="tea" src="images/beach.jpg" alt="beach" />
    <img className="hospital" src="images/hospital.jpeg" alt="hospital" />
  </div>

  <div className="business">
    {/* <h2 className="head-grid">About Our Teyla</h2> */}
   
    <div className="energy-trading">
      <p className="trading-para">
        “TEYLA - An Experience Tour Seller” has been initiated to bring out the best
        experiential tourism in North Malabar. We aim to craft the finest travel
        and experience packages for our guests. We are committed to serving the needs
        of travelers worldwide, ensuring that guests experience the true North Malabar
        and its wonderful hospitality. We prioritize value for money, comfortable rooms,
        and impeccable service delivery.
      </p>
    </div>
    <div className="discover-about">
  <a href="">
    <button className="discover">Discover more about Teyla</button>
  </a>
</div>
  </div>
</div>


      </div>


      <div className="n-malabar">
        <div className="n-content">
        <h1 className="north">North Malabar</h1>
        <h4 className="text-center text-xl">where vibrant traditions meet serene landscapes, creating a perfect harmony of culture and nature.</h4>
       </div>
  
   <div className="north-images">
  <div className="image-card">
    <img src="images/bekal.jpg" alt="Bekal Fort" />
    <div className="overlay">
      <h3>Bekal Fort</h3>
      <p>The majestic fort standing tall by the Arabian Sea.</p>
    </div>
  </div>

  <div className="image-card">
    <img src="images/theyyam.jpg" alt="Theyyam" />
    <div className="overlay">
      <h3>Theyyam</h3>
      <p>A divine dance form that captures the spirit of North Malabar.</p>
    </div>
  </div>

  <div className="image-card">
    <img src="images/beach.jpg" alt="Malabar Beach" />
    <div className="overlay">
      <h3>Malabar Beach</h3>
      <p>Golden sands and soothing waves nature’s calm embrace.</p>
    </div>
  </div>
</div>
</div>





 </div>   

    </>
  );
}

export default About;
