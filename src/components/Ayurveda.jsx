import React from "react";
import { Link } from "react-router-dom";

function Ayurveda() {
  return (
    <div className="flex flex-col w-full font-poppins">

      {/* Heading */}
      <h1 className="text-center text-[#014D4E] font-semibold text-2xl sm:text-3xl px-4 mt-6">
        Discover Wellness & Culture in Kerala with Teyla
      </h1>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 lg:px-20 py-6 items-center">
        
        <img
          src="images/ayur.jpg"
          className="w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-xl object-cover"
          alt="Ayurveda"
        />

        <p className="text-[16px] sm:text-[18px] text-justify leading-relaxed text-gray-700">
          <b>In collaboration with PVA Ayurvedic Multi Speciality Hospital,</b> 
          we offer a unique journey combining Kerala’s ancient healing wisdom with immersive experiences in North Malabar. 
          PVA, located in the serene greenery of Kannur, is the only center with a prestigious “Green Leaf” accreditation from the Government of Kerala.
          Your wellness programme includes personalised consultations, Panchakarma, herbal therapies, yoga sessions, and lifestyle guidance.
        </p>
      </div>

      {/* Ayurveda Courses Section */}
      <div className="grid md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 lg:px-20 py-6 items-center">

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-[#014D4E] font-semibold text-2xl sm:text-3xl text-center md:text-left">
            Ayurveda Courses by Teyla Tourism
          </h1>

          <p className="text-[16px] sm:text-[18px] text-justify leading-relaxed text-gray-700">
            Teyla Tourism provides online and offline Ayurveda courses 
            in partnership with PVA Ayurveda Hospital. 
            Ayurveda teaches balance between mind, body, and spirit through natural methods, diet, herbs, and personalized therapies.
          </p>

          <Link to="/register" className="flex justify-center md:justify-start">
            <button className="bg-[#014D4E] text-white px-8 py-3 rounded-full text-lg hover:bg-[#016060] transition">
              Register
            </button>
          </Link>
        </div>

        <img
          src="images/course.jpg"
          className="w-full h-[240px] sm:h-[270px] rounded-xl object-cover"
          alt="Course"
        />
      </div>

      {/* Consultation Section */}
      <div className="flex flex-col gap-4 text-center px-4 sm:px-6 md:px-10 lg:px-24 py-8">

        <h1 className="text-[#014D4E] font-semibold text-2xl sm:text-3xl">
          Let's Begin Your Ayurvedic Journey
        </h1>

        <p className="text-[16px] sm:text-[18px] text-justify leading-relaxed text-gray-700">
          Whether you're seeking stress relief, rejuvenation, or treatment for specific concerns, 
          our Ayurvedic experts provide detailed and holistic guidance.
          During your consultation, doctors analyse your body constitution (Prakriti), 
          understand your health concerns, and recommend personalized treatments, diet, lifestyle routines, and herbal medications.
        </p>

        <Link to="/consult" className="flex justify-center mt-2">
          <button className="bg-[#014D4E] text-white px-10 py-3 rounded-full text-lg hover:bg-[#016060] transition">
            Book Consultation
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Ayurveda;
