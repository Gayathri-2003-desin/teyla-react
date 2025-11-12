import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";

function VideoBackground() {
  const [district, setDistrict] = useState({
    name: "Wayanad",
    content:
      "Wayanad, nestled in the lush Western Ghats, is a land of misty hills, emerald forests, and serene waterfalls that captivate every traveler’s heart.",
    video: "https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/wynd-bg.mp4",
  });

  const districts = {
    wayanad: {
      name: "Wayanad",
      content:
        "Wayanad, nestled in the lush Western Ghats, is a land of misty hills, emerald forests, and serene waterfalls that captivate every traveler’s heart.",
      video: "https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/wynd-bg.mp4",
    },
    kannur: {
      name: "Kannur",
      content:
        "Kannur, the land of looms and lore, captivates with its golden beaches, misty hills, and vibrant Theyyam traditions.",
      video: "https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/kannur.mp4",
    },
    kozhikode: {
      name: "Kozhikode",
      content:
        "Kozhikode, where golden sunsets kiss serene beaches, echoes with the charm of history and spice-laden breezes.",
      video: "https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/kozhikode.mp4",
    },
    kasaragod: {
      name: "Kasaragod",
      content:
        "Kasargod, the land of majestic forts and tranquil backwaters, mesmerizes with its serene hills and golden shores.",
      video: "https://taai-bluecast.s3.ap-south-1.amazonaws.com/teyla/dam.mp4",
    },
  };

  const handleDistrictClick = (districtKey) => {
    setDistrict(districts[districtKey]);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-10 bg-black/40 backdrop-blur-md">
        <Navbar />
      </div>

      {/* Background Video */}
      <video
        key={district.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover z-[-1] brightness-[0.6]"
      >
        <source src={district.video} type="video/mp4" />
      </video>

      {/* Overlay Container */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden gap-2 z-[2] px-4 sm:px-6 lg:px-10">
        
        {/* Logo */}
        <img
          src="images/s-logo.png"
          alt="Logo"
          className="w-[400px] sm:w-[300px] md:w-[350px] h-auto mb-6 animate-fadeIn"
        />

        {/* District Section */}
        <div className="relative z-[3]">
          {/* Buttons */}
          <div className="flex flex-col gap-[20px]">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mb-4">
            <button
              onClick={() => handleDistrictClick("wayanad")}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-white/20 text-white transition duration-300 hover:bg-white/50 text-sm sm:text-base"
            >
              Wayanad
            </button>
            <button
              onClick={() => handleDistrictClick("kannur")}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-white/20 text-white transition duration-300 hover:bg-white/50 text-sm sm:text-base"
            >
              Kannur
            </button>
            <button
              onClick={() => handleDistrictClick("kozhikode")}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-white/20 text-white transition duration-300 hover:bg-white/50 text-sm sm:text-base"
            >
              Kozhikode
            </button>
            <button
              onClick={() => handleDistrictClick("kasaragod")}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-white/20 text-white transition duration-300 hover:bg-white/50 text-sm sm:text-base"
            >
              Kasaragod
            </button>
          </div>
         
          {/* Text Section */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            {district.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-2 max-w-[800px] mx-auto px-3">
            {district.content}
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBackground;
