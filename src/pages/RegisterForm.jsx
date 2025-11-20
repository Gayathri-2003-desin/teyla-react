import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseMode: "online",
    age: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-[#F8FFF8] px-3 sm:px-4 md:px-10 lg:px-20 py-6">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT IMAGE */}
          <div className="w-full h-full">
            <img
              src="/images/study.jpg"
              alt="Ayurveda Study"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white shadow-xl rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-700 mb-6">
              Ayurveda Course Registration
            </h2>

            {/* FULL NAME */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* PHONE */}
            <label className="block mt-2 mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your phone number"
              required
            />

            {/* COURSE MODE + AGE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              
              <div>
                <label className="block mb-1 font-medium">Course Mode</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="courseMode"
                      value="online"
                      checked={formData.courseMode === "online"}
                      onChange={handleChange}
                    />
                    Online
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="courseMode"
                      value="offline"
                      checked={formData.courseMode === "offline"}
                      onChange={handleChange}
                    />
                    Offline
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="Age"
                  required
                />
              </div>
            </div>

            {/* ADDRESS */}
            <label className="block mt-4 mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-lg"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
