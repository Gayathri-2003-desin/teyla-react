import React, { useRef } from "react";

function ImageSlider() {
  const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const images = [
    "images/home-stay.jpeg",
    "images/kuruva.jpg",
    "images/soochipara.jpg",
    "images/boat.jpg",
    "images/tea.jpg",
    "images/madhur.jpg",
    "images/calicut-beach.jpg",
    "images/banasura.jpg",
    "images/aralam.jpg",
  ];

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden font-poppins">
        {/* 🌄 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.85] z-[-1]"
          style={{ backgroundImage: "url('/images/tea-plants.jpg')" }}
        ></div>

        {/* 💫 Memories Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 justify-between items-center text-white p-10 md:p-16 lg:p-20 mt-12">
          {/* Left Text */}
          <div className="flex flex-col text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold">Memories for a lifetime</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              North Malabar, where every wave, ritual, and smile tells a timeless story.
              A land that embraces you with its culture, beauty, and unforgettable charm.
            </p>
          </div>

          {/* Right Slider */}
          <div className="relative w-full max-w-[640px] mx-auto overflow-hidden">
            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 border-2 border-white text-white text-3xl rounded-full px-3 py-1 transition z-10"
              onClick={handlePrev}
            >
              ←
            </button>

            {/* Image Row */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  className="w-[300px] h-[500px] object-cover rounded-2xl flex-shrink-0 snap-start transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 border-2 border-white text-white text-3xl rounded-full px-3 py-1 transition z-10"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
