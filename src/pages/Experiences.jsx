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

      
        <div className="header">
          <Navbar />
        </div>


<div className="flex justify-center items-center gap-10 mt-5">
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



<div className="attract-img ">
  {active === "cuisine" && (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-20 mr-20">
      {imageData.cuisine.map((item, index) => (
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
  )}

  {active === "ayurveda" && (
    <Ayurveda />
  )}
</div>


        {/* FOOTER */}
        <div className="footer">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default Experiences;
