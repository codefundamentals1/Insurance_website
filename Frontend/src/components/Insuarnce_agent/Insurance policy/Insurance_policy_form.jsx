import React, { useState } from 'react';

const Insurance_policy_form = () => {
  const [formData, setFormData] = useState({
    agreement_id: '',
    application_id: '',
    cust_id: '',
    department_name: '',
    policy_number: '',
    start_date: '',
    expiry_date: '',
    term_condition_description: ''
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
      agreement_id: '',
      application_id: '',
      cust_id: '',
      department_name: '',
      policy_number: '',
      start_date: '',
      expiry_date: '',
      term_condition_description: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Insurance Policy</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="agreement_id"
            value={formData.agreement_id}
            onChange={handleChange}
            placeholder="Agreement ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="application_id"
            value={formData.application_id}
            onChange={handleChange}
            placeholder="Application ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
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
            name="department_name"
            value={formData.department_name}
            onChange={handleChange}
            placeholder="Department Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="policy_number"
            value={formData.policy_number}
            onChange={handleChange}
            placeholder="Policy Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="datetime-local"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            placeholder="Start Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="datetime-local"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            placeholder="Expiry Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="term_condition_description"
            value={formData.term_condition_description}
            onChange={handleChange}
            placeholder="Term Condition Description"
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

export default Insurance_policy_form;
