import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#014D4E] text-white border-t-2 border-white py-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            src="images/s-logo.png"
            alt="logo"
            className="w-44 h-24 rounded-lg bg-white object-contain"
          />
        </div>

        {/* Info Section */}
        <div>
          <h4 className="text-gray-400 text-lg font-medium uppercase mb-4 tracking-wider">
            Info
          </h4>
          <div className="flex flex-col gap-3">
            <a href="" className="text-white hover:text-gray-300">
              Where to Go
            </a>
            <a href="" className="text-white hover:text-gray-300">
              Experiences
            </a>
           
            <a href="" className="text-white hover:text-gray-300">
              Ayurveda
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="text-gray-400 text-lg font-medium uppercase mb-4 tracking-wider">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <a
                href="tel:+917907827617"
                className="hover:text-gray-300 text-lg"
              >
                +91 7907827617, +91 8075195423
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-white" />
              <a
                href="mailto:teylatrip@gmail.com"
                className="hover:text-gray-300 text-lg"
              >
                teylatrip@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 text-lg font-medium uppercase mb-4 tracking-wider">
            Find Us
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-white mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kolachery%20P.O%20Kannur%20Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-base"
              >
                Kolachery P.O, Kolacherymukk Kannur, Kerala, 670601
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-white" />
              <a
                href="https://www.instagram.com/falconyxtrading/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-base"
              >
                #teyla_tourseller <br /> #teyla_trips
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-300 text-sm">
        © 2025 Teyla Trips. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

