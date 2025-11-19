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
    console.log("Form Submitted:", formData);
    alert("Registration submitted successfully!");
  };

  return (
<div className="flex flex-col gap-8">
<div className="top">
<Navbar/>
</div>


<div className="mid">
 <div className="w-full h-[100%] px-[50px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

  {/* LEFT IMAGE */}
<div className="w-full h-full">
  <img
    src="/images/consult.jpg"
    alt="Ayurveda Study"
    className="w-full h-full object-cover rounded-3xl shadow-xl"
  />
</div>

  {/* FORM */}
  <form
    onSubmit={handleSubmit}
    className="w-full bg-white shadow-xl rounded-3xl p-10 border border-gray-200 flex flex-col"
  >
    <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
      Ayurvedic Expert Consultation
    </h2>

    {/* Full Name */}
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

    {/* Email */}
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


    {/* Consult Mode + Age */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="block mb-2 font-medium">Consult Mode</label>
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
    />

    {/* Submit */}
    <button
      type="submit"
      className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-lg"
    >
      Submit
    </button>
  </form>

</div>
</div>


<div className="bottom">
    <Footer/>
</div>


</div>
  );
}

export default ConsultForm
