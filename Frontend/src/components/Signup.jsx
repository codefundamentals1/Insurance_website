// src/Login.js


import React, { useState } from 'react';
import {json, useNavigate}  from 'react-router-dom'



const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', { name, email, password });
    console.warn(name,email, password);
    let result=  await fetch('http://localhost:3000/signup',{
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type' : 'application/json'
      },
    })

  
    result = await result.json()
    localStorage.setItem("user" , JSON.stringify(result))
    console.warn(result)
      setName('')
    setEmail('')
    setPassword('')
    navigate('/')
    
  
  };




  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-gray-300">
  <div className="bg-white p-8 rounded shadow-md backdrop-blur-lg">
    <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">Sign up</h2>
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input mt-1 block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input mt-1 block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input mt-1 block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full"
      >
        Sign up
      </button>
    </form>
  </div>
</div>

  );
};

export default Signup;
