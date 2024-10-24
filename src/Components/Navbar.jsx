import React from 'react';
import logo from "../assets/logo.avif"

const Navbar = () => {
  return (
    <div className='bg-green-500 fixed top-0 w-full left-0 py-4 items-center px-6 text-white flex justify-between border-b border-b-gray-400'>
      <div className="flex items-center justify-between w-full max-w-7xl">
        <img className='w-20 h-16 rounded-full'
        src={logo} alt="" />
        <ul className="flex items-center gap-14 font-medium">
          <li className="py-1 hover:underline cursor-pointer">Home</li>
          <li className="py-1 hover:underline cursor-pointer">About</li>
          <li className="py-1 hover:underline cursor-pointer">Service</li>
          <li className="py-1 hover:underline cursor-pointer">Product</li>
        </ul>
        <button className="bg-white text-green-400 px-6 py-2 rounded-md font-semibold hover:bg-purple-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
