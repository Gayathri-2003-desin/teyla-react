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
    <div className="flex flex-col gap-8">

        <div className="top">
    <Navbar/>
</div>


    <div className="mid">
<div className="min-h-screen bg-[#F8FFF8] p-5">
  <div className="w-full px-[50px] grid grid-cols-1 md:grid-cols-2 gap-12">


   
  <div className="w-full h-full">
    <img
      src="/images/study.jpg"
      alt="Ayurveda Study"
      className="w-full h-full object-cover rounded-3xl shadow-xl"
    />
  </div>


<form
  onSubmit={handleSubmit}
  className="w-full bg-white shadow-xl rounded-3xl p-10 border border-gray-200 flex flex-col"
>
  <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
    Ayurveda Course Registration
  </h2>


<div className="mb-4">
  <label className="block mb-2 font-medium">Full Name</label>
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

{/* Email (OWN ROW) */}
<div className="mb-4">
  <label className="block mb-2 font-medium">Email</label>
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

  {/* Email */}
 
  <label className="block mt-4 mb-2 font-medium">Phone Number</label>
  <input
    type="integer"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
    placeholder="Enter your Phone Number"
    required
  />

  {/* Course Mode + Age */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    {/* Course Mode */}
    <div>
      <label className="block mb-2 font-medium">Course Mode</label>
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

    {/* Age */}
    <div>
      <label className="block mb-2 font-medium">Age</label>
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

  {/* Address */}
  <label className="block mt-4 mb-2 font-medium">Address</label>
  <textarea
    name="address"
    value={formData.address}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
    placeholder="Enter your address"
    rows="3"
    required
  ></textarea>

  {/* Submit */}
  <button
    type="submit"
    className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-lg"
  >
    Submit Registration
  </button>
</form>


  </div>
</div>
</div>


<div className="bottom">
    <Footer/>
    </div>

    </div>
  );
}
