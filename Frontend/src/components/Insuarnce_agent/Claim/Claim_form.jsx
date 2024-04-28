import React, { useState } from 'react';

const Claim_form = () => {
  const [formData, setFormData] = useState({
    Claim_Id: '',
    Agreement_Id: '',
    Claim_Amount: '',
    Incident_Id: '',
    Damage_Type: ''
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
      Claim_Id: '',
      Agreement_Id: '',
      Claim_Amount: '',
      Incident_Id: '',
      Damage_Type: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Claim Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="Claim_Id"
            value={formData.Claim_Id}
            onChange={handleChange}
            placeholder="Claim ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="Agreement_Id"
            value={formData.Agreement_Id}
            onChange={handleChange}
            placeholder="Agreement ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="Claim_Amount"
            value={formData.Claim_Amount}
            onChange={handleChange}
            placeholder="Claim Amount"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="Incident_Id"
            value={formData.Incident_Id}
            onChange={handleChange}
            placeholder="Incident ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="Damage_Type"
            value={formData.Damage_Type}
            onChange={handleChange}
            placeholder="Damage Type"
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

export default Claim_form;
