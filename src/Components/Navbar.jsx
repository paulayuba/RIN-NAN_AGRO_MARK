import React, { useState } from 'react';
import Rinnan from "../assets/Rinnan.webp"
import { IoMenuSharp } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-500 fixed top-0 w-full left-0 py-4 px-6 text-white flex justify-between items-center border-b border-b-gray-400">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <img className="w-24 h-16 rounded-3xl" src={Rinnan} alt="Logo" />

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-3xl">
          {isOpen ? <VscClose /> : <IoMenuSharp />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 font-medium text-xl absolute md:static bg-green-500 w-full left-0 top-full md:top-auto mt-4 md:mt-0 md:w-auto`}>
          <li className="py-1 hover:underline no-underline cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/service">Service</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/product">Product</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/footer">Footer</a>
          </li>
        </ul>

        {/* Login Button */}
        <a href="/login" className="outline-double outline-3 outline-offset-2 rounded-full py-3 px-8 bg-white text-green-500 font-bold outline-green-700">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
