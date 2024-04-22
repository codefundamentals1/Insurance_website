import React from 'react';
import { Link } from 'react-router-dom';

const LoginBoxes = () => {
  return (
    <div className="container mx-auto mt-8 flex justify-center">
      {/* Consumer Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg mr-4">
        <h2 className="text-xl font-semibold mb-4">Customer</h2>
        <p className="text-gray-600 mb-4">Login as a consumer to manage your insurance policies.</p>
        <Link to ="/customerlogin">
        <a href="/consumer-login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
        </Link>
      </div>

      {/* Insurance Agent Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg mr-4">
        <h2 className="text-xl font-semibold mb-4">Insurance Agent</h2>
        <p className="text-gray-600 mb-4">Login as an insurance agent to manage policies for your clients.</p>
        <Link to="/agentlogin">
        <a href="/agent-login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
        </Link>
      </div>

      {/* Damage Inspector Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Damage Inspector</h2>
        <p className="text-gray-600 mb-4">Login as a damage inspector to assess and process insurance claims.</p>
        <Link to ="/Inspectorlogin">
        <a href="/inspector-login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginBoxes;
