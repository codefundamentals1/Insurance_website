import React, { useState } from 'react';

const Customer_read = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Customer</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {/* Input fields */}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>

      {/* Review Section */}
      {isSubmitted && (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-bold mb-2">Review Your Details</h2>
          <ul>
            <li><strong>Customer ID:</strong> {formData.cust_id}</li>
            <li><strong>First Name:</strong> {formData.cust_fname}</li>
            <li><strong>Last Name:</strong> {formData.cust_lname}</li>
            <li><strong>Date of Birth:</strong> {formData.cust_DOB}</li>
            <li><strong>Gender:</strong> {formData.cust_gender}</li>
            <li><strong>Mobile Number:</strong> {formData.cust_mob_number}</li>
            <li><strong>Email:</strong> {formData.cust_email}</li>
            <li><strong>Passport Number:</strong> {formData.cust_passport_number}</li>
            <li><strong>Marital Status:</strong> {formData.cust_martial_status}</li>
            <li><strong>PPS Number:</strong> {formData.cust_ppS_number}</li>
            <li><strong>Address:</strong> {formData.address}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Customer_read;
