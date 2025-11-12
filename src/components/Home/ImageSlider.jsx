import React, { useRef } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" }); // scroll width = 2 * image width (approx)
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const images = [
    "images/soochipara.jpg",
    "images/boat.jpg",
    "images/tea.jpg",
    "images/madhur.jpg",
    "images/home-stay.jpeg",
    "images/kuruva.jpg",
    "images/calicut-beach.jpg",
    "images/banasura.jpg",
    "images/aralam.jpg",
  ];

  return (
    <>

  <div className="video-background">


        <div className="image-slider-section">
      {/* 🎥 Background video only for this component */}
      <video autoPlay loop muted playsInline className="slider-bg-video">
        <source src="https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/mountain.mp4"  />
      </video>

      <div className="memories">
        <div className="left">
          <h1 className="life">Memories for a lifetime</h1>
          <p className="life-para">
            North Malabar, where every wave, ritual, and smile tells a timeless
            story. A land that embraces you with its culture, beauty, and
            unforgettable charm.

          </p>
        </div>

        <div className="right">
          <div className="slider-container">
            <button className="arrow left" onClick={handlePrev}>
              ←
            </button>

            <div className="image-row" ref={scrollRef}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  className="slide-image"
                />
              ))}
            </div>

            <button className="arrow right" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default ImageSlider;
