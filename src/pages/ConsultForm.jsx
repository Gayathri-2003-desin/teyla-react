import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ConsultForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consultMode: "online",
    age: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen w-full">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 py-8 items-start">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/consult.jpg"
            alt="Ayurveda Consultation"
            className="w-full h-[220px] sm:h-[280px] md:h-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Consultation Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-lg rounded-2xl p-5 sm:p-8 border border-gray-100 flex flex-col"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-700 mb-6">
            Ayurvedic Expert Consultation
          </h2>

          {/* NAME */}
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
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* CONSULT MODE + AGE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">Consult Mode</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="consultMode"
                    value="online"
                    checked={formData.consultMode === "online"}
                    onChange={handleChange}
                  />
                  Online
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="consultMode"
                    value="offline"
                    checked={formData.consultMode === "offline"}
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
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ConsultForm;
