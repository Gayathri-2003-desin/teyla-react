import React, { useState } from 'react';
import './Whereto.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Where() {
  const [active, setActive] = useState("attractions");


  const tabs = [
    { id: "attractions", label: "Attractions" },
    { id: "art", label: "Art & Culture" },
    { id: "picnic", label: "Picnic Spots" }
  ];

 
  const imageData = {
    attractions: [
      { img: "/images/waterfalls.jpg", text: "Waterfalls" },
      { img: "/images/hills.jpg", text: "Hills" },
      { img: "/images/beaches.jpg", text: "Beaches" },
      { img: "/images/wildlife.jpg", text: "Wildlife" },
      { img: "/images/dam.jpg", text: "Dams" },
      { img: "/images/rivers.jpg", text: "Rivers" },
      { img: "/images/backwaters.jpg", text: "Backwaters" },
      { img: "/images/streets.jpg", text: "Streets" },
    ],

    art: [
      { img: "/images/handicraft.jpeg", text: "Handicrafts" },
      { img: "/images/tribe-dance.jpeg", text: "Tribal Dance" },
      { img: "/images/tradition.jpg", text: "Traditional Art" },
      { img: "/images/kathakali.jpeg", text: "Kathakali" },
      { img: "/images/theyyam.jpg", text: "Theyyam" },
      { img: "/images/margamkali.jpg", text: "Margamkali" },
      { img: "/images/kalari.jpg", text: "Kalari" },
      { img: "/images/duff.jpg", text: "Duffmuttu" },
    ],

    picnic: [
      { img: "/images/picnic.jpg", text: "Picnic Spot" },
      { img: "/images/lakes.jpg", text: "Lake View Point" },
      { img: "/images/tea-valley.jpg", text: "Nature Spot" },
      { img: "/images/boat.jpg", text: "House Boat" },
      { img: "/images/bridge.jpg", text: "Glass Bridge" },
      { img: "/images/zipline.jpg", text: "Zipline" },
      { img: "/images/kayaking.jpg", text: "Kayaking" },
      { img: "/images/swing.jpg", text: "Giant Swing" },
    ],
  };

  const currentImages = imageData[active];

  return (
    <>
      <div className="main-wrap">

      
        <div className="header">
          <Navbar />
        </div>

        <div className="image-wrap"></div>
      
        <div className="flex justify-center items-center gap-10 ">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`pb-1 text-lg font-medium ${
                active === tab.id
                  ? "border-b-4 border-[#014D4E]" : "border-b-4 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}

        </div>

      
        <div className="attract-img  zIndex: -1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-20 mr-20 zIndex: -1">

            {currentImages.map((item, index) => (
              <div key={index} className="relative">
                <img
             src={item.img}
           alt={item.text}
   className="w-full h-64 object-cover rounded-xl"
                />
                <p className="absolute bottom-3 right-3 text-white bg-black/40 px-3 py-1 rounded-lg text-sm font-medium">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default Where;
