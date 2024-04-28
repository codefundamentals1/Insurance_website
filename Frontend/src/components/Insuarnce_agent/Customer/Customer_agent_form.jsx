import React, { useState } from 'react';

const Customer_agent_form = () => {
  const [formData, setFormData] = useState({
    cust_id: '',
    cust_fname: '',
    cust_lname: '',
    cust_DOB: '',
    cust_gender: '',
    cust_mob_number: '',
    cust_email: '',
    cust_passport_number: '',
    cust_martial_status: '',
    cust_ppS_number: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      cust_id: '',
      cust_fname: '',
      cust_lname: '',
      cust_DOB: '',
      cust_gender: '',
      cust_mob_number: '',
      cust_email: '',
      cust_passport_number: '',
      cust_martial_status: '',
      cust_ppS_number: '',
      address: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Customer</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="cust_id"
            value={formData.cust_id}
            onChange={handleChange}
            placeholder="Customer ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="cust_fname"
            value={formData.cust_fname}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="cust_lname"
            value={formData.cust_lname}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            name="cust_DOB"
            value={formData.cust_DOB}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <select
            name="cust_gender"
            value={formData.cust_gender}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="tel"
            name="cust_mob_number"
            value={formData.cust_mob_number}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="email"
            name="cust_email"
            value={formData.cust_email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="cust_passport_number"
            value={formData.cust_passport_number}
            onChange={handleChange}
            placeholder="Passport Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <select
            name="cust_martial_status"
            value={formData.cust_martial_status}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          <input
            type="text"
            name="cust_ppS_number"
            value={formData.cust_ppS_number}
            onChange={handleChange}
            placeholder="PPS Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Customer_agent_form;
