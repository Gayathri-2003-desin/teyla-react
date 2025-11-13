import React from "react";
import "./Kerala.css";

function Kerala() {
  return (
    <div >
      <div className="flex flex-col gap-10 mx-5">
        {/* Headings */}
        <div className="kerala-content">
        <h1 className="text-center text-[42px] mt-0">Explore Kerala</h1>
        <h4 className="text-center text-xl">
          Let God’s Own Country inspire your next unforgettable journey.
        </h4>
</div>
        {/* Content Section */}
      <div
  className="flex flex-col items-center gap-8 text-white text-center 
             rounded-2xl py-[100px] px-10 bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/kalari.jpg")',
  }}
>
          <h1 className="text-5xl tracking-wide m-0">Traditions & Culture</h1>
          <p className="text-lg max-w-[800px] mx-auto leading-relaxed">
            Kerala is a land where tradition breathes through every festival and
            melody. From the vibrant Theyyam and Kathakali to the rhythmic beats
            of Chenda, Kerala celebrates life in color and sound.
          </p>

          {/* Button */}
     <button
  className="more bg-white text-black text-[18px] font-medium 
             px-6 py-[10px] border-2 border-black rounded-[30px] 
             cursor-pointer transition-all duration-300 ease-in-out 
             font-[Outfit] hover:bg-black hover:text-white hover:scale-105"
>
  More +
</button>

        </div>
      </div>
    </div>
  );
}

export default Kerala;