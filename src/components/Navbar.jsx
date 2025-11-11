import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <>
<div className="head-section flex justify-between items-center bg-white pr-5 mx-[60px]"> 
       <img className="head-logo w-[130px] h-[70px]" src="images/s-logo.png" alt="Logo" />
    

<div className="nav flex text-[22px]  ">
<div className="where">
    <p>Where to Go</p>
</div>
<div className="exp">
    <p>Experiences</p>
</div>
</div>

    <button className="contact font-medium rounded-full px-4 py-3 bg-[#014D4E] text-[16px] text-blue=800 m-5 no-underline cursor-pointer border-0 transition duration-300">Contact Us</button>


</div>
</>

  );
}

export default Navbar;
