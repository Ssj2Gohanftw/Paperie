'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    planner: '',
    weddingDate: '',
    venue: '',
    services: [],
  });

  const serviceOptions = [
    'Save the Dates',
    'Wedding Invitations',
    'Wedding Day Details (menus, programs, table numbers, seating cards, etc.)',
    'Other Event Invitations',
    'Personal Stationery',
  ];

  const toggleService = (option) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(option);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== option)
          : [...prev.services, option],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="w-full max-w-4xl bg-[#F3ECE6] p-8 rounded-xl shadow-md text-[#A79C92] font-[var(--font-cormorant-garamond)]">
      {/* Full Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
      </div>

      {/* Phone & Planner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="E.g. 823 236 1379"
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
        <div>
          <label>Do you have a wedding planner?</label>
          <input
            type="text"
            name="planner"
            value={formData.planner}
            onChange={handleChange}
            placeholder="If so, who are you working with?"
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
      </div>

      {/* Date & Venue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label>Wedding Date</label>
          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
        <div>
          <label>Wedding Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="E.g.403502 Thivim Goa"
            required
            className="mt-1 w-full p-2 bg-[#E1D6CD] text-foreground rounded"
          />
          <p className="text-sm mt-1">* This question is required</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-6">
        <label className="block mb-2">What design services are you interested in?</label>
        <p className="text-sm mb-2">Check all that apply</p>
        <div className="space-y-2">
          {serviceOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.services.includes(option)}
                onChange={() => toggleService(option)}
                className="accent-[#A79C92]"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <p className="text-sm mt-2">* This question is required</p>
      </div>

      {/* Submit */}
      <div className="text-right">
        <button
          type="submit"
          className="bg-[#D6C0B4] text-white px-6 py-2 rounded shadow hover:bg-[#c9afa2] transition"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
