import React, { useState } from 'react';
import './Whereto.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Ayurveda from '../components/Ayurveda.jsx';

function Experiences() {
  const [active, setActive] = useState("cuisine");

  const tabs = [
    { id: "cuisine", label: "Cuisine" },
    { id: "ayurveda", label: "Ayurveda" },
  ];

  const imageData = {
    cuisine: [
      { img: "/images/food-one.png", text: "Breakfasts" },
      { img: "/images/sadhya.jpg", text: "Kerala Sadhya" },
      { img: "/images/unnakaya.png", text: "Snacks" },
      { img: "/images/biriyani.jpg", text: "Dum Biriyani" },
      { img: "/images/fish.jpg", text: "Fish Curry" },
      { img: "/images/porotta.jpg", text: "Porotta & Beef" },
      { img: "/images/payasam.jpeg", text: "Payasam" },
      { img: "/images/manthi.jpg", text: "Arabic Manthi" },
    ],
  };

  const currentImages = imageData[active];

  return (
    <>
      <div className="main-wrap">

        {/* NAVBAR */}
        <div className="header">
          <Navbar />
        </div>

        {/* TABS */}
        <div className="flex justify-center items-center gap-10 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`pb-1 text-lg font-medium ${
                active === tab.id
                  ? "border-b-4 border-[#014D4E]"
                  : "border-b-4 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      
        <div className="attract-img mt-6 px-4 sm:px-6 lg:px-12">
          {active === "cuisine" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentImages.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-56 sm:h-64 object-cover rounded-xl shadow-md"
                  />
                  <p className="absolute bottom-3 right-3 text-white bg-black/40 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {active === "ayurveda" && <Ayurveda />}
        </div>

   
        <div className="footer mt-10">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default Experiences;
