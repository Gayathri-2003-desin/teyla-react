import React from "react";
import { Link } from "react-router-dom";
function Ayurveda() {
  return (
    <div className="flex flex-col gap-15 w-full font-poppins ">

    
      {/* <div className="text-center flex flex-col gap-4 px-16  mx-2 ">
        <h1 className="text-[#014D4E] font-semibold text-3xl sm:text-4xl md:text-5xl uppercase">
          Introduction to Ayurveda in Malabar
        </h1>

        <p className="text-[18px] text-justify leading-relaxed text-gray-700">
          Ayurveda in Malabar has a rich heritage deeply rooted in the region’s natural abundance and traditional healing wisdom. The lush forests, medicinal plants, and favorable climate of North Kerala have long supported the practice of Ayurveda as a way of life rather than just a system of medicine. Renowned for its authentic treatments, Malabar’s Ayurvedic centers and practitioners follow time-tested therapies such as Panchakarma, herbal massages, and rejuvenation treatments.
        </p>
      </div> */}

                  <h1 className="text-center text-[#014D4E] font-semibold text-2xl sm:text-3xl">
            Discover Wellness & Culture in Kerala with Teyla
          </h1>

      <div className="grid md:grid-cols-2 gap-10  px-6 md:px-16 lg:px-20 items-center">
        <div>
       
          <img
            src="images/ayur.jpg"
            className="w-full h-[320px] rounded-xl object-fit"
            alt="Hospital"
          />
        </div>

        <div className="flex flex-col gap-4">


          <p className="text-[18px] text-justify leading-relaxed text-gray-700">
            <b>In collaboration with PVA Ayurvedic Multi Speciality Hospital,</b> we bring you a unique journey that integrates the time-honoured healing wisdom of Kerala’s Ayurveda with immersive travel experiences in North Malabar. Located in the lush, tranquil setting of Kannur, PVA is the only centre in the region to hold the “Green Leaf” accreditation from the Government of Kerala a mark of quality and safety in Ayurvedic services.
            A tailored wellness programme at PVA: personalised consultations, Panchakarma and other classical therapies, herbal treatments, yoga and holistic lifestyle guidance.Ayurveda opens the door to understanding the human body from a holistic perspective.
          </p>
        </div>
      </div>

    


      <div className="text-center grid md:grid-cols-2 gap-10 px-6 md:px-16 lg:px-20 items-center ">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <h1 className="text-[#014D4E] font-semibold text-2xl sm:text-3xl">
            Ayurveda Courses by Teyla Tourism 
          </h1>
          <p className="text-[18px] text-justify leading-relaxed text-gray-700">Teyla Tourism provides online and offline Ayurveda courses in Partnership with PVA Ayurveda Hospital. Ayurveda is rooted in natural healing principles, Ayurveda teaches how to maintain balance between the body, mind, and spirit through lifestyle, food, herbs, and personalized therapies.</p>


<Link to="/register">
  <button className="bg-[#014D4E] text-center text-white w-34 py-3 rounded-full text-lg hover:bg-[#016060] transition">
    Register
  </button>
</Link>


        </div>

        <div>

          <img
            src="images/course.jpg"
            className="w-full h-[270px] rounded-xl object-cover "
            alt="Course"
          />
        </div>
      </div>

      
      <div className="flex flex-col gap-0 text-center  px-6 md:px-16 lg:px-24">
        <h1 className="text-[#014D4E] font-semibold text-3xl sm:text-4xl mb-4">
          Let's begin Ayurvedic journey
        </h1>

        <p className="text-[18px] text-justify leading-relaxed text-gray-700">
          Whether you are seeking preventive care, stress management, rejuvenation therapy, or relief from specific ailments, our Ayurvedic experts ensure a compassionate, detailed, and holistic approach to healing.
          Book your consultation today to experience the timeless wisdom of Ayurveda — and take the first step toward a balanced, healthy, and harmonious life.
          During your consultation, our doctors will assess your body constitution (Prakriti), discuss your health concerns, and recommend customized treatment plans, herbal medications, dietary guidance, and lifestyle routines based on authentic Ayurvedic principles.
        </p>

        <div className="">
    <Link to="/consult">
  <button className="bg-[#014D4E] text-center text-white w-54 py-3 rounded-full text-lg hover:bg-[#016060] transition">
    Book Consultation
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default Ayurveda;
