import React from 'react';
import logo from "../assets/logo.avif";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='bg-green-500 fixed top-0 w-full left-0 py-4 items-center px-6 text-white flex justify-between border-b border-b-gray-400'>
      <div className="flex items-center justify-between w-full max-w-7xl">
        <img className='w-20 h-16 rounded-full' src={logo} alt="Logo" />
        <ul className="flex items-center gap-14 font-medium text-xl">
          <li className="py-1 hover:underline cursor-pointer">Home</li>
          <li className="py-1 hover:underline cursor-pointer">About</li>
          <li className="py-1 hover:underline cursor-pointer">Service</li>
          <li className="py-1 hover:underline cursor-pointer">Product</li>
          <li className="py-1 cursor-pointer text-3xl">
          <IoMenuSharp  className='w-40'/>
          </li>
        </ul>
        <button className="bg-white text-green-400 px-6 py-2 rounded-md font-semibold hover:bg-purple-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
