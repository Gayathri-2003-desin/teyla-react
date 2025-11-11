import React, { useState } from "react";
import "./VideoBackground.css";
import Navbar from "../../components/Navbar.jsx";

function VideoBackground() {
  const [district, setDistrict] = useState({
    name: "Wayanad",
    content: `Wayanad, nestled in the lush Western Ghats, is a land of misty hills, emerald forests, and serene waterfalls that captivate every traveler’s heart.`,
    video: "/videos/wynd-bg.mp4",
  });

  const districts = {
    wayanad: {
      name: "Wayanad",
      content: `Wayanad, nestled in the lush Western Ghats, is a land of misty hills, emerald forests, and serene waterfalls that captivate every traveler’s heart.`,
      video: "/videos/wynd-bg.mp4",
    },
    kannur: {
      name: "Kannur",
      content: `Kannur, the land of looms and lore, captivates with its golden beaches, misty hills, and vibrant Theyyam traditions.`,
      video: "/videos/kannur.mp4", // You can add this later
    },
    kozhikode: {
      name: "Kozhikode",
      content: `Kozhikode, where golden sunsets kiss serene beaches, echoes with the charm of history and spice-laden breezes.`,
      video: "/videos/kozhikode.mp4",
    },
    kasaragod: {
      name: "Kasaragod",
      content: `Kasargod, the land of majestic forts and tranquil backwaters, mesmerizes with its serene hills and golden shores.`,
      video: "/videos/kasaragod.mp4", // optional if available
    },
  };

  const handleDistrictClick = (districtKey) => {
    setDistrict(districts[districtKey]);
  };

  return (
  <>
  <Navbar className="navbar" />

  <video
    key={district.video}
    autoPlay
    loop
    muted
    playsInline
    className="background-video"
  >
    <source src={district.video} type="video/mp4" />
  </video>

  <div className="video-container">
    <img className="teyla-logo" src="images/s-logo.png" alt="Logo" />

    <div className="district-section">
      <div className="buttons">
        <button onClick={() => handleDistrictClick("wayanad")}>Wayanad</button>
        <button onClick={() => handleDistrictClick("kannur")}>Kannur</button>
        <button onClick={() => handleDistrictClick("kozhikode")}>Kozhikode</button>
        <button onClick={() => handleDistrictClick("kasaragod")}>Kasaragod</button>
      </div>

      <h1>{district.name}</h1>
      <p>{district.content}</p>
    </div>
  </div>
</>

  );
}

export default VideoBackground;
