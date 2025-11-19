import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Popular() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-[Poppins]">
      <div className="flex flex-col gap-[20px]">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[42px] mt-0">Popular Destinations</h1>
          <h4 className="text-center text-xl">
            Check out these enthralling tourism spots that cast a magical spell
          </h4>
        </div>

        {/* Image Grid */}
        <div
          className="
            grid 
            grid-cols-4 
            gap-[15px] 
            px-[20px]
            max-[1024px]:grid-cols-2 
            max-[600px]:grid-cols-1
          "
        >

          {/* Image 1 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group"  data-aos="fade-left">
            <img
              src="images/drive-beach.jpeg"
              alt="Image 1"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div
              className="
                absolute bottom-0 right-0 w-full h-full p-[12px_18px]
                flex justify-end items-end
                text-white text-[18px] font-medium opacity-0
                bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent
                transition-opacity duration-400
                rounded-b-[12px]
                group-hover:opacity-100
              "
            >
              Muzhappilangad Beach
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group"  data-aos="fade-left">
            <img
              src="images/arakkal.jpeg"
              alt="Image 2"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Arakkal Museum
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group"  data-aos="fade-left">
            <img
              src="images/banasura.jpg"
              alt="Image 3"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Banasura Dam
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group"  data-aos="fade-left">
            <img
              src="images/kuruva.jpg"
              alt="Image 4"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Kuruva Island
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group"  data-aos="fade-right">
            <img
              src="images/aralam.jpg"
              alt="Image 5"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Aralam Farm
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group" data-aos="fade-right">
            <img
              src="images/pazhassi.jpg"
              alt="Image 6"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Pazhassiraja Museum
            </div>
          </div>

          {/* Image 7 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group" data-aos="fade-right">
            <img
              src="images/malik.jpg"
              alt="Image 7"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Malik Dinar Mosque
            </div>
          </div>

          {/* Image 8 */}
          <div className="relative overflow-hidden rounded-[12px] cursor-pointer group" data-aos="fade-right">
            <img
              src="images/mishkal.jpg"
              alt="Image 8"
              className="w-full h-full object-cover transition-transform duration-400 rounded-[12px] group-hover:scale-110 group-hover:brightness-[60%]"
            />
            <div className="absolute bottom-0 right-0 w-full h-full p-[12px_18px] flex justify-end items-end text-white text-[18px] font-medium opacity-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent transition-opacity duration-400 rounded-b-[12px] group-hover:opacity-100">
              Mishkal Mosque
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Popular;
