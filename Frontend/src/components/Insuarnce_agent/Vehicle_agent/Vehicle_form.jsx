 import React, { useState } from 'react';

const Vehicle_form = () => {
  const [formData, setFormData] = useState({
    vehicleId: '',
    make: '',
    model: '',
    year: '',
    type: 'car',
    vin: '',
    registration: '',
    ownerId: '',
    vehicle_id: '',
    cust_id: '',
    policy_id: '',
    dependent_nok_id: '',
    vehicle_registration_number: '',
    vehicle_value: '',
    vehicle_type: '',
    vehicle_size: '',
    vehicle_number_of_seat: '',
    vehicle_manufacturer: '',
    vehicle_chasis_number: '',
    vehicle_number: '',
    vehicle_model_number: ''
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
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      vehicleId: '',
      make: '',
      model: '',
      year: '',
      type: 'car',
      vin: '',
      registration: '',
      ownerId: '',
      vehicle_id: '',
      cust_id: '',
      policy_id: '',
      dependent_nok_id: '',
      vehicle_registration_number: '',
      vehicle_value: '',
      vehicle_type: '',
      vehicle_size: '',
      vehicle_number_of_seat: '',
      vehicle_manufacturer: '',
      vehicle_chasis_number: '',
      vehicle_number: '',
      vehicle_model_number: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Vehicle</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            placeholder="Vehicle ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            placeholder="Make"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Model"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
          </select>
          <input
            type="text"
            name="vin"
            value={formData.vin}
            onChange={handleChange}
            placeholder="VIN (Vehicle Identification Number)"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="registration"
            value={formData.registration}
            onChange={handleChange}
            placeholder="Registration Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="ownerId"
            value={formData.ownerId}
            onChange={handleChange}
            placeholder="Owner ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_id"
            value={formData.vehicle_id}
            onChange={handleChange}
            placeholder="Vehicle ID"
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
            name="policy_id"
            value={formData.policy_id}
            onChange={handleChange}
            placeholder="Policy ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="dependent_nok_id"
            value={formData.dependent_nok_id}
            onChange={handleChange}
            placeholder="Dependent NOK ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_registration_number"
            value={formData.vehicle_registration_number}
            onChange={handleChange}
            placeholder="Vehicle Registration Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="vehicle_value"
            value={formData.vehicle_value}
            onChange={handleChange}
            placeholder="Vehicle Value"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_type"
            value={formData.vehicle_type}
            onChange={handleChange}
            placeholder="Vehicle Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="vehicle_size"
            value={formData.vehicle_size}
            onChange={handleChange}
            placeholder="Vehicle Size"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="vehicle_number_of_seat"
            value={formData.vehicle_number_of_seat}
            onChange={handleChange}
            placeholder="Number of Seats"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_manufacturer"
            value={formData.vehicle_manufacturer}
            onChange={handleChange}
            placeholder="Manufacturer"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_chasis_number"
            value={formData.vehicle_chasis_number}
            onChange={handleChange}
            placeholder="Chasis Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_number"
            value={formData.vehicle_number}
            onChange={handleChange}
            placeholder="Vehicle Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_model_number"
            value={formData.vehicle_model_number}
            onChange={handleChange}
            placeholder="Model Number"
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

export default Vehicle_form;
